import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/barak/navbar';
import { Footer } from '@/components/barak/footer';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';
import { ConsultationPopupTrigger } from '@/components/barak/consultation-popup-trigger';
import { countries } from '@/data/countries';
import { destinationDetails } from '@/data/destination-details';
import { testimonials } from '@/data/testimonials';
import { processSteps } from '@/data/site-data';
import { blogPosts } from '@/data/blog';
import { getDestinationLabel, getDestinationPath } from '@/lib/destination-utils';
import {
  airplaneOutline,
  arrowForwardOutline,
  calendarClearOutline,
  cardOutline,
  chatbubbleEllipsesOutline,
  checkmarkCircleOutline,
  documentTextOutline,
  globeOutline,
  locationOutline,
  schoolOutline,
  shieldCheckmarkOutline,
  sparklesOutline,
  star,
  timeOutline,
} from 'ionicons/icons';

type IconProps = {
  icon: string;
  className?: string;
};

function iconToSvg(icon: string) {
  return decodeURIComponent(icon.replace('data:image/svg+xml;utf8,', ''))
    .replace("<svg ", "<svg fill='currentColor' stroke='currentColor' ")
    .replace(/class='ionicon-fill-none ionicon-stroke-width'/g, "fill='none' stroke='currentColor' stroke-width='32'")
    .replace(/class='ionicon-fill-none'/g, "fill='none' stroke='currentColor'")
    .replace(/ class='ionicon'/g, '');
}

function Icon({ icon, className }: IconProps) {
  return (
    <span
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: iconToSvg(icon) }}
    />
  );
}

const trustStats = [
  {
    value: '40+',
    label: 'students placed successfully',
    detail: 'Applications supported across top destinations.',
  },
  {
    value: '7',
    label: 'study destinations supported',
    detail: 'UK, Canada, Australia, Malta, Cyprus, Spain and New Zealand.',
  },
  {
    value: '1:1',
    label: 'personal counsellor guidance',
    detail: 'From shortlisting to visa readiness.',
  },
  {
    value: 'Fast',
    label: 'response from our support team',
    detail: 'Clear updates at every stage.',
  },
];

const essentials = [
  {
    title: 'University matching',
    description: 'Get course and destination recommendations based on your grades, budget and long-term goals.',
    icon: schoolOutline,
  },
  {
    title: 'Visa application support',
    description: 'Organised document guidance, timelines and interview preparation.',
    icon: shieldCheckmarkOutline,
  },
  {
    title: 'Pre-departure support',
    description: 'Travel, accommodation and student-settlement guidance before you fly.',
    icon: globeOutline,
  },
];

const processStepIcons = [
  chatbubbleEllipsesOutline,
  cardOutline,
  schoolOutline,
  documentTextOutline,
  shieldCheckmarkOutline,
  checkmarkCircleOutline,
  airplaneOutline,
  globeOutline,
];

const journeySignals = [
  { value: '8', label: 'guided milestones' },
  { value: '1:1', label: 'advisor support' },
  { value: 'Clear', label: 'document checkpoints' },
];

const stepHighlights = [
  'Goal-setting call',
  'Secure your place',
  'Smart-fit shortlist',
  'Application polishing',
  'Visa readiness',
  'Approval milestone',
  'Travel planning',
  'Departure launch',
];

const phaseSummary = [
  {
    title: 'Planning',
    description: 'Consultation, destination matching and a clear action plan.',
    accent: 'from-[#1f62e4] to-[#4f8ff0]',
  },
  {
    title: 'Application',
    description: 'Document review, university submissions and visa preparation managed with structure.',
    accent: 'from-[#c9d4e6] to-[#eef1f5]',
  },
  {
    title: 'Departure',
    description: 'Approval, orientation and travel-readiness support before you leave Kenya.',
    accent: 'from-[#0d766e] to-[#2dd4bf]',
  },
];

export default function Home() {
  const featuredDestinations = countries.slice(0, 6);
  const featuredStories = testimonials.slice(0, 4);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(31,98,228,0.10),transparent_24%),radial-gradient(circle_at_top_right,rgba(79,143,240,0.18),transparent_18%),linear-gradient(180deg,#f4f8fb_0%,#ffffff_30%,#eef5f9_100%)] text-slate-900">
      <Navbar />

      <main>
        <section
          id="home"
          className="relative min-h-[620px] overflow-hidden bg-slate-950 text-white lg:min-h-[720px]"
        >
          <Image
            src="/images/hero-bg-v2.jpg"
            alt="Graduating students celebrating together"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.14] contrast-[1.08] saturate-[1.12]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,12,27,0.62)_0%,rgba(15,44,88,0.46)_44%,rgba(2,12,27,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,143,240,0.18),transparent_34%),radial-gradient(circle_at_80%_10%,rgba(10,110,168,0.14),transparent_36%)]" />
          <div className="absolute inset-0 bg-slate-950/8" />
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#8cb9ff]/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="relative mx-auto min-h-[620px] max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:min-h-[720px] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/85 shadow-[0_10px_30px_rgba(2,12,27,0.16)] backdrop-blur">
                <Icon icon={sparklesOutline} className="h-4 w-4 text-[#dbe7ff]" />
                Barak Pathways for students in Kenya
              </div>

              <h1 className="mt-6 max-w-3xl text-[2.15rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[1.06] lg:text-[4.25rem] lg:leading-[1.02]">
                Start your global education journey with clearer guidance and a more confident next step.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200/95 sm:mt-6 sm:text-lg sm:leading-8">
                Explore destinations, compare opportunities, prepare for IELTS, and move from first consultation to visa support with a team that stays close to your process.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <ConsultationPopupTrigger
                  label="Book free consultation"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-[#eef1f5] px-7 text-base font-semibold text-slate-950 shadow-[0_18px_40px_rgba(79,143,240,0.26)] transition hover:-translate-y-0.5 hover:bg-[#dde5ef]"
                />
                <Link
                  href="#destinations"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-base font-semibold text-white shadow-[0_12px_30px_rgba(2,12,27,0.16)] transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  Explore destinations
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {trustStats.slice(0, 2).map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/12 bg-white/10 p-5 shadow-[0_18px_45px_rgba(2,12,27,0.18)] backdrop-blur"
                  >
                    <div className="text-3xl font-semibold text-white">{item.value}</div>
                    <div className="mt-2 text-sm font-medium text-white">{item.label}</div>
                    <p className="mt-2 text-sm text-slate-200">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#cddbf7] bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {trustStats.map((item) => (
                <div key={item.label} className="rounded-[26px] border border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] p-5 shadow-[0_14px_40px_rgba(31,98,228,0.10)]">
                  <div className="text-3xl font-semibold text-[#1f62e4]">{item.value}</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{item.label}</div>
                  <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="relative overflow-hidden bg-[linear-gradient(180deg,#f4f8fb_0%,#f8fbff_100%)] py-16 sm:py-24">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(79,143,240,0.22),transparent_42%)]" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-medium text-[#1f62e4] shadow-sm">
                  <Icon icon={locationOutline} className="h-4 w-4" />
                  Study destinations
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Explore destinations with a clearer sense of fit
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  Compare the countries Barak Pathways actively supports, then open each guide for universities, requirements and realistic next steps.
                </p>
              </div>

              <Link href="#contact" className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f62e4] px-6 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(31,98,228,0.18)] transition hover:-translate-y-0.5 hover:bg-[#174fbf]">
                Speak to a counsellor
                <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredDestinations.map((country) => {
                const destinationDetail = destinationDetails[country.slug];

                return (
                  <article
                    key={country.slug}
                    className="group overflow-hidden rounded-[32px] border border-[#cbd5e1] bg-white shadow-[0_16px_50px_rgba(31,98,228,0.10)] transition duration-300 hover:-translate-y-1.5 hover:border-[#8cb9ff] hover:shadow-[0_30px_80px_rgba(31,98,228,0.16)]"
                  >
                    <div className="relative min-h-[260px] overflow-hidden">
                      <Image
                        src={destinationDetail.heroImage}
                        alt={destinationDetail.heroImageAlt}
                        fill
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.78)_100%)]" />
                      <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(2,6,23,0.2)] backdrop-blur">
                        {country.flag} {country.name}
                      </div>
                      <div className="absolute bottom-5 left-5 right-5">
                        <p className="text-sm font-medium text-white/75">Destination guide</p>
                        <h3 className="mt-2 text-3xl font-semibold leading-tight text-white">
                          Study in {getDestinationLabel(country.name)}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm leading-7 text-slate-600">
                        {country.tagline}
                      </p>

                      <div className="mt-5 grid gap-3">
                        <div className="rounded-2xl border border-[#eef2f8] bg-[#f8fafc] p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Student lifestyle
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-900">{country.whyStudy[1] ?? country.whyStudy[0]}</div>
                        </div>
                        <div className="rounded-2xl border border-[#eef2f8] bg-[#f8fafc] p-4">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            Good fit for
                          </div>
                          <div className="mt-2 text-sm font-semibold text-slate-900">{country.whyStudy[0]}</div>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {destinationDetail.popularCourses.slice(0, 3).map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-[#cddbf7] bg-[#eef2f8] px-3 py-1.5 text-xs font-semibold text-[#1f62e4]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={getDestinationPath(country.slug)}
                        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full border border-[#cddbf7] text-sm font-semibold text-slate-900 transition hover:border-[#1f62e4] hover:bg-[#1f62e4] hover:text-white"
                      >
                        View destination guide
                        <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fb_100%)] py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-medium text-[#1f62e4] shadow-sm">
                  <Icon icon={shieldCheckmarkOutline} className="h-4 w-4" />
                  Why choose Barak Pathways
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Professional guidance from planning to visa readiness.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  We keep the process focused: choose the right destination, prepare stronger documents, and move through each step with a clear timeline.
                </p>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f62e4] px-6 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(31,98,228,0.18)] transition hover:-translate-y-0.5 hover:bg-[#174fbf]"
                >
                  Start with a counsellor
                  <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] shadow-[0_20px_60px_rgba(31,98,228,0.10)]">
                {essentials.map((item, index) => (
                  <article
                    key={item.title}
                    className="grid gap-5 border-b border-[#e5ebf4] p-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf4ff_0%,#ffffff_100%)] text-[#1f62e4] shadow-[0_12px_30px_rgba(31,98,228,0.10)] ring-1 ring-[#cddbf7]">
                      <Icon icon={item.icon} className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Service 0{index + 1}
                      </div>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-950">{item.title}</h3>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-[linear-gradient(180deg,#f4f8fb_0%,#eef2f8_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-medium text-[#1f62e4] shadow-sm">
                <Icon icon={star} className="h-4 w-4 text-[#4f8ff0]" />
                Student stories
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Hear from students who already took the next step
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {featuredStories.map((story) => (
                <article key={`${story.name}-${story.country}`} className="rounded-[30px] border border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] p-6 shadow-[0_18px_50px_rgba(31,98,228,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(79,143,240,0.18)]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1f62e4_0%,#4f8ff0_100%)] text-2xl shadow-[0_14px_30px_rgba(31,98,228,0.22)]">
                    {story.emoji}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">&ldquo;{story.quote}&rdquo;</p>
                  <div className="mt-6 border-t border-[#e6edf6] pt-4">
                    <div className="text-sm font-semibold text-slate-900">{story.name}</div>
                    <div className="mt-1 text-sm text-slate-500">
                      {story.location} | {story.country}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="about-us"
          className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fb_44%,#eef2f8_100%)] py-16 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative">
              <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(79,143,240,0.18),transparent_46%),radial-gradient(circle_at_top_right,rgba(79,143,240,0.24),transparent_34%)]" />
              <div className="absolute -left-20 top-24 h-48 w-48 rounded-full bg-[#1f62e4]/5 blur-3xl" />
              <div className="absolute -right-16 bottom-8 h-40 w-40 rounded-full bg-[#eef1f5]/15 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-white/90 px-4 py-2 text-sm font-semibold text-[#1f62e4] shadow-sm backdrop-blur">
                    <Icon icon={timeOutline} className="h-4 w-4" />
                    About Barak Pathways
                  </div>
                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    Professional student guidance built around clarity, structure, and real support.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                    Barak Pathways helps Kenyan students move from early research to confident decisions with destination matching, document support and visa-readiness planning.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div className="grid grid-cols-3 gap-3 rounded-[24px] bg-white/70 p-3 shadow-[0_12px_40px_rgba(31,98,228,0.10)] ring-1 ring-[#cddbf7] backdrop-blur">
                    {journeySignals.map((signal) => (
                      <div key={signal.label} className="min-w-[90px] rounded-2xl bg-white px-3 py-3 text-center shadow-sm">
                        <div className="text-lg font-semibold text-[#1f62e4]">{signal.value}</div>
                        <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                          {signal.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f62e4] px-6 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(31,98,228,0.24)] transition hover:-translate-y-0.5 hover:bg-[#174fbf]"
                  >
                    Start step 1
                    <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => {
                const StepIcon = processStepIcons[index % processStepIcons.length];

                return (
                  <article
                    key={step.step}
                    className="group relative overflow-hidden rounded-[30px] border border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] p-6 shadow-[0_18px_50px_rgba(31,98,228,0.10)] transition duration-300 hover:-translate-y-1.5 hover:border-[#6fa5ff] hover:shadow-[0_30px_80px_rgba(31,98,228,0.16)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#1f62e4_0%,#eef1f5_50%,#1f62e4_100%)] opacity-80" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(31,98,228,0.10),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(79,143,240,0.20),transparent_28%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="absolute right-5 top-5 text-5xl font-semibold leading-none text-[#cddbf7] transition duration-300 group-hover:text-[#8cb9ff]">
                      {String(step.step).padStart(2, '0')}
                    </div>

                    <div className="relative flex h-full flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#1f62e4_0%,#4f8ff0_100%)] text-white shadow-[0_18px_35px_rgba(31,98,228,0.26)] ring-1 ring-white/50">
                          <Icon icon={StepIcon} className="h-7 w-7" />
                        </div>
                        <div className="rounded-full border border-[#cddbf7] bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500 backdrop-blur">
                          {stepHighlights[index]}
                        </div>
                      </div>

                      <div className="mt-6 inline-flex w-fit rounded-full border border-[#cddbf7] bg-[#f4f8fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#174fbf]">
                        Step {step.step}
                      </div>
                      <h3 className="mt-4 max-w-[14rem] text-[1.7rem] font-semibold leading-tight text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-[18rem] text-[15px] leading-8 text-slate-600">{step.description}</p>

                      <div className="mt-6 flex items-center justify-between border-t border-[#e4ebf8] pt-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Guided stage
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1f62e4]">
                          Continue
                          <Icon icon={arrowForwardOutline} className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
              </div>

              <div className="relative mt-8 grid gap-4 lg:grid-cols-[1.2fr_1fr_1fr]">
                {phaseSummary.map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-[28px] border border-[#cddbf7] bg-white/90 p-6 shadow-[0_16px_45px_rgba(31,98,228,0.10)]"
                  >
                    <div className={`h-2 w-24 rounded-full bg-gradient-to-r ${phase.accent}`} />
                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {phase.title}
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="bg-[linear-gradient(180deg,#f4f8fb_0%,#eef2f8_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-medium text-[#1f62e4] shadow-sm">
                  <Icon icon={calendarClearOutline} className="h-4 w-4" />
                  Resources and guidance
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Helpful content for students planning abroad
                </h2>
              </div>
              <Link href="#contact" className="text-sm font-semibold text-[#1f62e4] transition hover:text-[#174fbf]">
                Ask about your next intake
              </Link>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {featuredPosts.map((post, index) => (
                <article key={post.slug} className="rounded-[30px] border border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fdff_100%)] p-6 shadow-[0_18px_50px_rgba(31,98,228,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(79,143,240,0.18)]">
                  <div className="inline-flex rounded-full border border-[#cddbf7] bg-[#eef2f8] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1f62e4]">
                    {post.category}
                  </div>
                  <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Article 0{index + 1}
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">{post.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#e6edf6] pt-4 text-sm text-slate-500">
                    <span>{post.readTime}</span>
                    <span>{post.date}</span>
                  </div>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#cddbf7] bg-[#eef2f8] px-4 py-2 text-sm font-semibold text-[#1f62e4] transition hover:bg-white"
                  >
                    Read more
                    <Icon icon={arrowForwardOutline} className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

