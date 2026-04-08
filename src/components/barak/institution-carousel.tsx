'use client';

import { useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Heart,
  MessageCircleMore,
  Users,
} from 'lucide-react';

type Institution = {
  name: string;
  summary: string;
  bestFor: string;
  costPosition: string;
};

type InstitutionCarouselProps = {
  countryName: string;
  institutions: Institution[];
  popularCourses: string[];
  accentTextClass: string;
};

function getInitials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}

export function InstitutionCarousel({
  countryName,
  institutions,
  popularCourses,
  accentTextClass,
}: InstitutionCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const amount = Math.max(container.clientWidth * 0.82, 320);
    container.scrollBy({
      left: direction === 'right' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div
        ref={scrollRef}
        className="mt-10 flex gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {institutions.map((institution, index) => (
          <article
            key={institution.name}
            className="flex min-w-[320px] max-w-[360px] flex-1 flex-col rounded-[28px] border border-slate-300 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-slate-50 shadow-sm">
                <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {getInitials(institution.name)}
                </span>
              </div>
              <button
                type="button"
                className="rounded-full border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-50"
                aria-label={`Save ${institution.name}`}
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            <h3 className="mt-6 text-[1.9rem] font-semibold leading-tight text-slate-950">
              {institution.name}
            </h3>
            <p className="mt-2 text-lg text-slate-500">{countryName}</p>

            <div className={`mt-8 inline-flex items-center text-base font-medium ${accentTextClass}`}>
              View institution profile
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <span>
                    Popular focus: {popularCourses[index % popularCourses.length]}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <span>{institution.bestFor}</span>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircleMore className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
                  <span>{institution.costPosition}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full border border-slate-300 text-lg font-medium text-slate-900 transition hover:bg-slate-50"
            >
              View Details
            </button>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className={`text-sm font-medium ${accentTextClass}`}>Browse institutions</div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-50"
            aria-label="Scroll institutions left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:bg-slate-50"
            aria-label="Scroll institutions right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
