import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { DestinationHeroCarousel } from '@/components/barak/destination-hero-carousel';
import { Footer } from '@/components/barak/footer';
import { InstitutionCarousel } from '@/components/barak/institution-carousel';
import { Navbar } from '@/components/barak/navbar';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';
import { countries } from '@/data/countries';
import { destinationDetails } from '@/data/destination-details';
import { faqs } from '@/data/faq';
import { scholarships } from '@/data/scholarships';
import { getDestinationLabel, getDestinationPath } from '@/lib/destination-utils';
import {
  arrowForwardOutline,
  bookOutline,
  briefcaseOutline,
  cashOutline,
  chevronForwardOutline,
  chevronDownOutline,
  checkmarkCircleOutline,
  documentTextOutline,
  globeOutline,
  locationOutline,
  ribbonOutline,
  schoolOutline,
  shieldCheckmarkOutline,
  star,
} from 'ionicons/icons';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

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

const sectionIcons = [schoolOutline, briefcaseOutline, globeOutline, shieldCheckmarkOutline, ribbonOutline];
const destinationSignals = [
  { label: 'Tuition range', field: 'tuitionRange' as const },
  { label: 'Living budget', field: 'annualLivingBudget' as const },
  { label: 'Popular courses', field: 'popularCourses' as const },
];

function getUniversityFocus(detailCourses: string[], index: number) {
  return detailCourses[index % detailCourses.length];
}

function getCountry(slug: string) {
  return countries.find((country) => country.slug === slug);
}

export async function generateStaticParams() {
  return countries.map((country) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);

  if (!country) {
    return {
      title: 'Destination not found | Barak Pathways',
    };
  }

  const destinationLabel = getDestinationLabel(country.name);
  const title = `Study in ${destinationLabel} for Kenyan Students | Barak Pathways`;
  const description = `Discover why ${country.name} is a strong study destination for Kenyan students. Explore universities, entry requirements, costs, scholarships and application support with Barak Pathways.`;

  return {
    title,
    description,
    alternates: {
      canonical: getDestinationPath(country.slug),
    },
    openGraph: {
      title,
      description,
      url: getDestinationPath(country.slug),
      type: 'article',
    },
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const country = getCountry(slug);

  if (!country) {
    notFound();
  }

  const destinationLabel = getDestinationLabel(country.name);
  const detail = destinationDetails[country.slug];
  const matchingScholarships = scholarships.filter(
    (scholarship) => scholarship.country === country.name
  );
  const relatedDestinations = countries.filter((item) => item.slug !== country.slug).slice(0, 3);
  const primaryApplicationSteps = detail.applicationSteps.slice(0, 3);
  const secondaryApplicationSteps = detail.applicationSteps.slice(3);
  const heroImages =
    detail.galleryImages && detail.galleryImages.length > 0
      ? detail.galleryImages
      : [{ src: detail.heroImage, alt: detail.heroImageAlt }];
  const destinationFaqs = [
    {
      question: `Why study in ${destinationLabel}?`,
      answer: `${country.name} stands out for Kenyan students because it combines ${country.whyStudy.slice(0, 2).join(' and ').toLowerCase()}.`,
    },
    {
      question: `What do I need to study in ${destinationLabel}?`,
      answer: `Typical requirements include ${country.visaRequirements.slice(0, 3).join(', ')} and any course-specific academic documents requested by the university.`,
    },
    {
      question: `How much does it cost to live in ${destinationLabel}?`,
      answer: `A practical estimate for living costs is ${country.costOfLiving}, excluding tuition and other personal lifestyle choices.`,
    },
    ...faqs.slice(0, 2),
  ];
  const overviewHighlights = [
    { label: 'Tuition band', value: detail.tuitionRange },
    { label: 'Living budget', value: detail.annualLivingBudget },
    { label: 'Work while studying', value: detail.workWhileStudying },
    { label: 'After graduation', value: detail.postStudyPathway },
  ];
  const readinessChecklist = country.visaRequirements.slice(0, 4);
  const featuredRegions = detail.exploreRegions.slice(0, 2);
  const secondaryRegions = detail.exploreRegions.slice(2);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f4f8ff_0%,#fbfcff_30%,#f5f8fe_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="relative flex min-h-[680px] items-center overflow-hidden border-b border-[#dde6f3] bg-[linear-gradient(180deg,#fffdf8_0%,#f6f9ff_100%)] text-slate-900 lg:min-h-[760px]">
          <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(15,58,120,0.16),transparent_38%),radial-gradient(circle_at_top_right,rgba(255,207,51,0.18),transparent_30%)]" />
          <div className="absolute -left-24 top-24 h-64 w-64 rounded-full bg-[#0f3a78]/5 blur-3xl" />
          <div className="absolute right-0 top-12 h-72 w-72 rounded-full bg-[#ffcf33]/10 blur-3xl" />
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
              <Icon icon={chevronForwardOutline} className="h-4 w-4" />
              <span>Study abroad destinations</span>
              <Icon icon={chevronForwardOutline} className="h-4 w-4" />
              <span className="text-slate-900">Study in {destinationLabel}</span>
            </div>

            <div className="relative mt-8 grid gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
              <div className="max-w-3xl lg:order-1">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dbe6f5] bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,58,120,0.08)] backdrop-blur">
                  <Icon icon={locationOutline} className={`h-4 w-4 ${detail.accentText}`} />
                  {country.flag} Study in {country.name}
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]">
                  Study in {destinationLabel} for Kenyan students
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  {country.description}
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="#contact"
                    className={`inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(15,58,120,0.18)] transition hover:-translate-y-0.5 ${detail.accentBg}`}
                  >
                    Book free consultation
                    <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#requirements"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d8e0eb] bg-white px-6 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,58,120,0.06)] transition hover:-translate-y-0.5 hover:bg-slate-50"
                  >
                    View requirements
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {detail.facts.map((fact) => (
                    <div key={fact} className="rounded-full border border-[#dbe4f0] bg-white/90 px-4 py-2 text-sm text-slate-700 shadow-sm">
                      {fact}
                    </div>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {destinationSignals.map((signal) => (
                    <div
                      key={signal.label}
                      className="rounded-[24px] border border-[#dde6f4] bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,58,120,0.08)]"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {signal.label}
                      </div>
                      <div className="mt-3 text-base font-semibold text-slate-950">
                        {signal.field === 'popularCourses'
                          ? detail.popularCourses.slice(0, 2).join(' & ')
                          : detail[signal.field]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:order-2 lg:flex lg:justify-end">
                <DestinationHeroCarousel
                  images={heroImages}
                  title={country.tagline}
                  description={`A quick visual introduction to student life, campus atmosphere and the wider feel of studying in ${destinationLabel}.`}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-30 border-y border-[#dde6f3] bg-white/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                On this page
              </div>
              <div className="text-sm text-slate-500">
                A practical guide for studying in {country.name}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <Link href="#why-study" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Why study in {destinationLabel}
            </Link>
            <Link href="#universities" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Top universities
            </Link>
            <Link href="#explore" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Explore in {destinationLabel}
            </Link>
            <Link href="#requirements" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Requirements
            </Link>
            <Link href="#costs" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Costs & scholarships
            </Link>
            <Link href="#work" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              Work while studying
            </Link>
            <Link href="#faqs" className="rounded-full border border-[#dbe4f0] bg-white px-4 py-2 shadow-sm transition hover:bg-slate-50">
              FAQs
            </Link>
            </div>
          </div>
        </section>

        {detail.overviewParagraphs && detail.overviewParagraphs.length > 0 && (
          <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] py-14 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                    <Icon icon={bookOutline} className="h-4 w-4" />
                    Understanding {country.name}
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    What makes this destination different?
                  </h2>
                </div>

                <div className="space-y-5 rounded-[30px] border border-[#dde6f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                  {detail.overviewParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-[linear-gradient(180deg,#fffdf8_0%,#f7faff_100%)] py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="rounded-[34px] border border-[#dde6f4] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] p-8 shadow-[0_24px_70px_rgba(15,58,120,0.08)]">
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                <Icon icon={bookOutline} className="h-4 w-4" />
                Destination overview
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Planning to study in {destinationLabel}? Start here.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This page is structured to help you think like an advisor would: first determine whether the destination fits your goals, then compare institutions, requirements, costs and longer-term opportunities.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Barak Pathways can help you move from broad interest to a realistic shortlist, stronger documents and a clearer application plan.
              </p>

              <div className="mt-8 rounded-[28px] border border-[#e2e9f5] bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(2,6,23,0.24)]">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Popular course areas
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {detail.popularCourses.map((course) => (
                    <span
                      key={course}
                      className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-white/90"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {overviewHighlights.map((item, index) => (
                  <div
                    key={item.label}
                    className={`rounded-[28px] border p-6 shadow-[0_16px_40px_rgba(15,58,120,0.06)] ${
                      index < 2
                        ? 'border-[#dde6f4] bg-white'
                        : 'border-[#e5ebf6] bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]'
                    }`}
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {item.label}
                    </div>
                    <div className="mt-3 text-base font-semibold leading-7 text-slate-950">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[30px] border border-[#dde6f4] bg-white p-6 shadow-[0_18px_50px_rgba(15,58,120,0.08)]">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Readiness snapshot
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                      What you will usually need before applying
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Requirements vary by course and institution, but these are the essentials students most often prepare first.
                    </p>
                  </div>

                  <Link
                    href="#requirements"
                    className={`inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold text-white shadow-[0_14px_36px_rgba(15,58,120,0.18)] transition hover:-translate-y-0.5 ${detail.accentBg}`}
                  >
                    Review requirements
                    <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {readinessChecklist.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-[#e3eaf6] bg-[#f8fbff] px-4 py-4"
                    >
                      <Icon icon={checkmarkCircleOutline} className={`mt-0.5 h-5 w-5 shrink-0 ${detail.accentText}`} />
                      <span className="text-sm font-medium leading-6 text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {detail.institutionGuide && detail.institutionGuide.length > 0 && (
          <section className="bg-white py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-2xl">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                  <Icon icon={schoolOutline} className="h-4 w-4" />
                  Main institutions in {country.name}
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Choosing the right institution matters more than choosing “more options”
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  The best choice usually comes down to recognition, teaching style, cost and career fit. This overview helps you compare the institutions that shape the student experience in {country.name}.
                </p>
              </div>

              <InstitutionCarousel
                countryName={country.name}
                institutions={detail.institutionGuide}
                popularCourses={detail.popularCourses}
                accentTextClass={detail.accentText}
              />
            </div>
          </section>
        )}

        <section id="why-study" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                <Icon icon={star} className="h-4 w-4" />
                Why study in {destinationLabel}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Key reasons Kenyan students choose {country.name}
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {country.whyStudy.map((reason, index) => {
                const reasonIcon = sectionIcons[index % sectionIcons.length];
                return (
                  <div key={reason} className="rounded-[26px] border border-[#dde6f4] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] p-6 shadow-[0_18px_50px_rgba(15,58,120,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,58,120,0.12)]">
                    <div className={`inline-flex rounded-2xl p-3 ${detail.softAccent} ${detail.accentText}`}>
                      <Icon icon={reasonIcon} className="h-6 w-6" />
                    </div>
                    <p className="mt-5 text-sm font-medium leading-7 text-slate-700">{reason}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="universities" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#dde6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                <Icon icon={bookOutline} className="h-4 w-4" />
                Top universities in {country.name}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Universities students often compare first
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                A guide-style comparison table makes these destination pages feel more like dedicated study resources than generic marketing pages.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-[30px] border border-[#dde6f4] bg-white shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
              <div className="grid grid-cols-[1.2fr_0.8fr_1fr] gap-4 border-b border-[#e3eaf5] bg-[linear-gradient(180deg,#f7faff_0%,#eff5ff_100%)] px-6 py-4 text-sm font-semibold text-slate-700">
                <div>University</div>
                <div>Popular interest</div>
                <div>How Barak can help</div>
              </div>

              {country.universities.map((university, index) => (
                <div
                  key={university}
                  className="grid grid-cols-1 gap-4 border-b border-[#e7edf6] px-6 py-5 last:border-b-0 md:grid-cols-[1.2fr_0.8fr_1fr]"
                >
                  <div>
                    <div className="text-base font-semibold text-slate-900">{university}</div>
                    <div className="mt-1 text-sm text-slate-500">{country.name}</div>
                  </div>
                  <div className="text-sm font-medium text-slate-700">
                    {getUniversityFocus(detail.popularCourses, index)}
                  </div>
                  <div className="text-sm leading-6 text-slate-600">
                    Entry guidance, course matching and scholarship direction.
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section id="explore" className="bg-[linear-gradient(180deg,#f8fbff_0%,#f1f6ff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm ${detail.accentText}`}>
                <Icon icon={locationOutline} className="h-4 w-4" />
                Explore in {country.name}
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Popular cities and regions students often ask about
              </h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[32px] border border-[#dbe5f6] bg-[linear-gradient(135deg,#0f3a78_0%,#174c97_42%,#f0b90b_120%)] p-8 text-white shadow-[0_24px_70px_rgba(15,58,120,0.18)]">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
                  Regional planning
                </div>
                <h3 className="mt-3 text-3xl font-semibold leading-tight">
                  Compare cities, cost, climate and student life before you shortlist.
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
                  Different regions can change your budget, accommodation experience, work opportunities and the feel of campus life. These are some of the locations students ask about most.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {featuredRegions.map((region) => (
                    <div
                      key={region}
                      className="rounded-[24px] border border-white/15 bg-white/10 p-5 shadow-[0_14px_32px_rgba(2,6,23,0.12)] backdrop-blur"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                        Featured region
                      </div>
                      <div className="mt-3 text-2xl font-semibold">{region}</div>
                      <p className="mt-3 text-sm leading-6 text-white/80">
                        Ask how universities, transport, living costs and part-time work compare in {region}.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {secondaryRegions.map((region) => (
                  <article key={region} className="rounded-[26px] border border-[#dde6f4] bg-white p-6 shadow-[0_18px_50px_rgba(15,58,120,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,58,120,0.12)]">
                    <div className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${detail.softAccent} ${detail.accentText}`}>
                      {country.flag} {country.name}
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{region}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Ask Barak Pathways how universities, cost and student life compare in {region}.
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="requirements" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <div className="rounded-[30px] border border-[#dde6f4] bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                  <Icon icon={documentTextOutline} className="h-4 w-4" />
                  Requirements to study in {destinationLabel}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Admission requirements and application process
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  This section follows the destination-guide style more closely: first understand the admission flow, then gather documents and prepare for the visa stage.
                </p>
                <div className="mt-8 space-y-4 border-t border-[#e5ebf4] pt-6">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Core documents
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Academic transcripts, passport copy, financial proof and course-specific supporting documents.
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Barak support
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      We help you confirm entry requirements, organise documents and prepare the final visa stage with more confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute bottom-0 left-5 top-0 hidden w-px bg-[#dde6f3] md:block" />
                <div className="grid gap-4">
                {primaryApplicationSteps.map((item, index) => (
                  <div key={item} className="relative flex gap-4 rounded-[26px] border border-[#dde6f4] bg-white p-5 shadow-[0_16px_40px_rgba(15,58,120,0.07)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(15,58,120,0.12)]">
                  <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${detail.accentBg}`}>
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-base font-semibold text-slate-900">{item}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Barak Pathways can help you confirm how this applies to your chosen university, intake and final visa preparation.
                      </p>
                    </div>
                  </div>
                ))}

                {secondaryApplicationSteps.length > 0 && (
                  <details className="group rounded-[26px] border border-[#dde6f4] bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-5 shadow-[0_16px_40px_rgba(15,58,120,0.06)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-700">
                      <span>Read more</span>
                      <Icon icon={chevronForwardOutline} className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-90" />
                    </summary>

                    <div className="mt-4 grid gap-4">
                      {secondaryApplicationSteps.map((item, index) => (
                        <div key={item} className="relative flex gap-4 rounded-[20px] border border-[#dde6f4] bg-white p-5 shadow-sm">
                          <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white ${detail.accentBg}`}>
                            {primaryApplicationSteps.length + index + 1}
                          </div>
                          <div>
                            <div className="text-base font-semibold text-slate-900">{item}</div>
                            <p className="mt-1 text-sm leading-6 text-slate-600">
                              Barak Pathways can help you confirm how this applies to your chosen university, intake and final visa preparation.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="costs" className="bg-[#f7f9fc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[30px] border border-[#dde6f4] bg-white p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#fff5d6] px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
                  <Icon icon={cashOutline} className="h-4 w-4" />
                  Cost of living
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                  Estimate your monthly budget
                </h2>
                <div className="mt-5 rounded-3xl border border-[#e4eaf4] bg-slate-50 p-6">
                  <div className="text-sm font-medium text-slate-500">Typical monthly living cost</div>
                  <div className="mt-2 text-3xl font-semibold text-[#0f3a78]">{country.costOfLiving}</div>
                </div>
                <div className="mt-4 rounded-3xl border border-[#f2df9a] bg-[#fff5d6] p-6">
                  <div className="text-sm font-medium text-slate-500">Typical tuition range</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{detail.tuitionRange}</div>
                </div>
                <div className="mt-4 rounded-3xl border border-[#cfe9d6] bg-[#edf8f2] p-6">
                  <div className="text-sm font-medium text-slate-500">Estimated annual living budget</div>
                  <div className="mt-2 text-2xl font-semibold text-slate-950">{detail.annualLivingBudget}</div>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  Tuition depends on course level, institution and city. Use these figures as a planning baseline before we help you narrow down the final shortlist.
                </p>
              </div>

              <div className="rounded-[30px] border border-[#dde6f4] bg-white p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                  <Icon icon={schoolOutline} className="h-4 w-4" />
                  Scholarships and funding
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                  Scholarship options to explore
                </h2>

                <div className="mt-6 overflow-hidden rounded-[24px] border border-[#dde6f4]">
                  <div className="grid grid-cols-[1.2fr_0.7fr_0.9fr] gap-4 bg-[linear-gradient(180deg,#f7faff_0%,#eff5ff_100%)] px-5 py-4 text-sm font-semibold text-slate-700">
                    <div>Scholarship</div>
                    <div>Level</div>
                    <div>Deadline</div>
                  </div>
                  {(matchingScholarships.length > 0
                    ? matchingScholarships
                    : country.scholarships.map((name) => ({
                        name,
                        level: 'Various',
                        deadline: 'Varies by institution',
                      }))
                  ).map((item) => (
                    <div
                      key={item.name}
                      className="grid grid-cols-1 gap-3 border-t border-[#e7edf6] px-5 py-4 text-sm text-slate-600 md:grid-cols-[1.2fr_0.7fr_0.9fr]"
                    >
                      <div className="font-medium text-slate-900">{item.name}</div>
                      <div>{'level' in item ? item.level : 'Various'}</div>
                      <div>{'deadline' in item ? item.deadline : 'Varies by institution'}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 text-sm leading-7 text-slate-600">
                  Barak Pathways can help you identify which of these are realistic fits for your academic profile and intake timeline.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[30px] border border-[#dde6f4] bg-white p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                  <Icon icon={briefcaseOutline} className="h-4 w-4" />
                  Work while studying in {destinationLabel}
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Balance study with practical work experience
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {detail.workWhileStudying}
                </p>
              </div>

              <div className="rounded-[30px] border border-[#dde6f4] bg-[linear-gradient(180deg,#fbfcfe_0%,#f6f9ff_100%)] p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className={`inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm ${detail.accentText}`}>
                  <Icon icon={ribbonOutline} className="h-4 w-4" />
                  After graduation
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950">
                  Longer-term pathway thinking matters too
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {detail.postStudyPathway}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Final rights and eligibility always depend on current immigration policy, course type and your specific visa conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {detail.realityCheck && detail.realityCheck.length > 0 && (
          <section className="bg-[#f7f9fc] py-16 sm:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                    <Icon icon={shieldCheckmarkOutline} className="h-4 w-4" />
                    Reality check
                  </div>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    The practical truth about studying in {country.name}
                  </h2>
                </div>

                <div className="space-y-4">
                  {detail.realityCheck.map((point) => (
                    <div key={point} className="rounded-[26px] border border-[#dde6f4] bg-white p-5 shadow-[0_16px_40px_rgba(15,58,120,0.06)]">
                      <p className="text-sm leading-7 text-slate-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div>
                <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${detail.softAccent} ${detail.accentText}`}>
                  <Icon icon={star} className="h-4 w-4" />
                  Student voice
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  What students say about {country.name}
                </h2>

                <div className="mt-8 grid gap-4">
                  {country.testimonials.map((testimonial) => (
                    <article key={`${testimonial.name}-${testimonial.location}`} className="rounded-[26px] border border-[#dde6f4] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] p-6 shadow-[0_16px_40px_rgba(15,58,120,0.06)]">
                      <p className="text-sm leading-7 text-slate-600">&ldquo;{testimonial.quote}&rdquo;</p>
                      <div className="mt-5 border-t border-[#e7edf6] pt-4 text-sm font-medium text-slate-900">
                        {testimonial.name} | {testimonial.location}
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div id="faqs" className="rounded-[30px] border border-[#dde6f4] bg-[linear-gradient(180deg,#fffdf8_0%,#ffffff_100%)] p-8 shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm">
                  <Icon icon={shieldCheckmarkOutline} className="h-4 w-4" />
                  FAQs
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                  Questions students often ask
                </h2>

                <div className="mt-8 space-y-4">
                  {destinationFaqs.map((faq) => (
                    <details key={faq.question} className="group rounded-[22px] border border-[#dde6f4] bg-white p-5 shadow-sm">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900">
                        <span>{faq.question}</span>
                        <Icon icon={chevronDownOutline} className="h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                      </summary>
                      <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f9fc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 overflow-hidden rounded-[34px] border border-[#dbe5f5] bg-[linear-gradient(135deg,#071a33_0%,#0f3a78_45%,#1e5cae_100%)] p-8 text-white shadow-[0_28px_80px_rgba(15,58,120,0.22)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Next step
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Build a realistic study plan for {country.name} with expert guidance.
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/80">
                    If this destination looks like a strong fit, the next move is narrowing your course options, confirming entry requirements and building a budget you can actually work with.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#ffcf33] px-6 text-sm font-semibold text-slate-950 shadow-[0_16px_38px_rgba(255,207,51,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f1c11b]"
                  >
                    Book free consultation
                    <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#costs"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Review cost planning
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dde6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <Icon icon={globeOutline} className="h-4 w-4" />
                  Explore more destinations
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Compare other study options too
                </h2>
              </div>
              <Link href="/" className="text-sm font-semibold text-[#0f3a78]">
                Back to homepage
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {relatedDestinations.map((item) => {
                const relatedDetail = destinationDetails[item.slug];

                return (
                  <article
                    key={item.slug}
                    className="group overflow-hidden rounded-[30px] border border-[#dde6f4] bg-white shadow-[0_18px_50px_rgba(15,58,120,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#c8d8ee] hover:shadow-[0_28px_80px_rgba(15,58,120,0.14)]"
                  >
                    <div className="relative min-h-[330px] overflow-hidden">
                      <Image
                        src={relatedDetail.heroImage}
                        alt={relatedDetail.heroImageAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.1)_0%,rgba(2,6,23,0.28)_34%,rgba(2,6,23,0.82)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,58,120,0.24),transparent_34%)]" />

                      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-[0_10px_24px_rgba(2,6,23,0.2)] backdrop-blur">
                        <span className="text-lg leading-none">{item.flag}</span>
                        {item.name}
                      </div>

                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-2xl border border-white/15 bg-white/12 p-4 text-white shadow-[0_12px_24px_rgba(2,6,23,0.16)] backdrop-blur">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                              Living
                            </div>
                            <div className="mt-2 text-sm font-semibold leading-6">
                              {item.costOfLiving}
                            </div>
                          </div>
                          <div className="rounded-2xl border border-white/15 bg-white/12 p-4 text-white shadow-[0_12px_24px_rgba(2,6,23,0.16)] backdrop-blur">
                            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/65">
                              Best fit
                            </div>
                            <div className="mt-2 text-sm font-semibold leading-6">
                              {item.whyStudy[0]}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="inline-flex rounded-full border border-[#d8e3f6] bg-[#f4f8ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f3a78]">
                        Destination guide
                      </div>
                      <h3 className="mt-4 text-[1.9rem] font-semibold leading-tight text-slate-950">
                        Study in {getDestinationLabel(item.name)}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">{item.tagline}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {relatedDetail.popularCourses.slice(0, 3).map((course) => (
                          <span
                            key={course}
                            className="rounded-full border border-[#d7e3f7] bg-[#eef4ff] px-3 py-1.5 text-xs font-semibold text-[#0f3a78]"
                          >
                            {course}
                          </span>
                        ))}
                      </div>

                      <Link
                        href={getDestinationPath(item.slug)}
                        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full border border-[#d4dce8] text-sm font-semibold text-slate-900 transition hover:border-[#0f3a78] hover:bg-[#0f3a78] hover:text-white"
                      >
                        View destination page
                        <Icon icon={arrowForwardOutline} className="ml-2 h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
