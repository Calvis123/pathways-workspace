'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

type DestinationHeroCarouselProps = {
  images: {
    src: string;
    alt: string;
  }[];
  title: string;
  description: string;
};

export function DestinationHeroCarousel({
  images,
  title: _title,
  description: _description,
}: DestinationHeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = images[activeIndex];

  useEffect(() => {
    if (images.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-[640px] lg:ml-auto lg:h-[684px]">
      <div className="absolute -right-4 top-9 hidden h-[68%] w-[92%] rounded-[32px] border border-slate-200 bg-[#f8f4ef] shadow-[0_30px_80px_rgba(15,23,42,0.08)] lg:block" />
      <div className="absolute -right-8 top-[4.6rem] hidden h-[56%] w-[84%] rounded-[32px] border border-slate-200 bg-[#fcfaf7] shadow-[0_22px_60px_rgba(15,23,42,0.06)] lg:block" />

      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-3 shadow-[0_28px_70px_rgba(15,23,42,0.12)] lg:h-full">
        <div className="relative aspect-[1.22/1] overflow-hidden rounded-[24px] bg-slate-950/30 sm:aspect-[1.3/1] lg:h-full lg:aspect-auto">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={`object-cover transition-opacity duration-700 ${
                index === activeIndex ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05)_20%,rgba(2,6,23,0.72)_100%)]" />
          <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1.5 text-xs font-semibold tracking-[0.24em] text-white/85 backdrop-blur">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
          <div className="flex gap-2 rounded-full border border-white/12 bg-slate-950/45 px-4 py-3 shadow-xl backdrop-blur">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/45'
                }`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-3 ml-auto hidden max-w-[290px] rounded-[22px] border border-white/12 bg-slate-950/45 px-4 py-3 text-white shadow-xl backdrop-blur md:block">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              Now showing
            </div>
            <div className="mt-2 text-sm leading-6 text-white/90">{activeImage.alt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

