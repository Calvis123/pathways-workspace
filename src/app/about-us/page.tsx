import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Globe2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { Footer } from '@/components/barak/footer';
import { Navbar } from '@/components/barak/navbar';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';
import { recentPlacements, processSteps } from '@/data/site-data';

export const metadata: Metadata = {
  title: 'About Us | Barak Pathways',
  description:
    'Learn how Barak Pathways supports Kenyan students with destination guidance, applications, scholarships, IELTS preparation and visa readiness.',
  alternates: {
    canonical: '/about-us',
  },
};

const principles = [
  {
    title: 'Clarity before speed',
    description:
      'We believe better student outcomes come from clear decisions, realistic options and honest advice, not rushed applications.',
    icon: Compass,
  },
  {
    title: 'Support that feels personal',
    description:
      'Every student comes with different grades, goals, financial realities and destination preferences. Our guidance is shaped around that.',
    icon: HeartHandshake,
  },
  {
    title: 'A process you can trust',
    description:
      'We help students stay organized across destination research, applications, scholarships, IELTS preparation and visa readiness.',
    icon: ShieldCheck,
  },
];

const storyPoints = [
  'Helping Kenyan students compare destinations with more confidence.',
  'Reducing confusion around admissions, costs and application planning.',
  'Turning international study from an idea into a structured next step.',
];

const keyStats = [
  { value: '40+', label: 'students placed successfully' },
  { value: '7', label: 'active study destinations supported' },
  { value: '1:1', label: 'guided support approach' },
  { value: '8', label: 'clear stages in our student journey' },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_24%,#f6f9ff_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-[#e1e8f2] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 sm:py-16">
            <div className="max-w-5xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e3f6] bg-[#f7faff] px-4 py-2 text-sm font-medium text-[#0f3a78]">
                <Globe2 className="h-4 w-4" />
                About Barak Pathways
              </div>
              <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[4.35rem] lg:leading-[1.02]">
                A student-centred team helping Kenyan learners move abroad with more confidence and less confusion.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Barak Pathways exists to make international education feel more understandable, more structured and more achievable. We help students compare destinations, make stronger applications and plan their next steps with practical support.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div className="rounded-[32px] border border-[#dce5f1] bg-[linear-gradient(135deg,#071a33_0%,#0f3a78_48%,#1d5db6_100%)] p-8 text-white shadow-[0_24px_70px_rgba(15,58,120,0.18)] sm:p-10">
                <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Our story
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  We built this service around the questions students ask most.
                </h2>
                <div className="mt-6 space-y-4">
                  {storyPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#ffcf33]" />
                      <span className="text-sm font-medium leading-7 text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {keyStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[26px] border border-[#dde6f4] bg-white p-6 shadow-[0_16px_40px_rgba(15,58,120,0.06)]"
                  >
                    <div className="text-3xl font-semibold text-[#0f3a78]">{item.value}</div>
                    <div className="mt-3 text-sm font-semibold leading-6 text-slate-900">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <HeartHandshake className="h-4 w-4" />
                  What we stand for
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Our work is built around better decision-making for students.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  We are not just here to submit forms. We help students understand the route they are taking, the requirements ahead and how to prepare for each stage properly.
                </p>
              </div>

              <div className="space-y-5">
                {principles.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="grid gap-5 rounded-[30px] border border-[#dde6f4] bg-white p-6 shadow-[0_18px_50px_rgba(15,58,120,0.08)] sm:grid-cols-[auto_1fr] sm:p-8"
                    >
                      <div className="flex h-16 w-16 items-center justify-center rounded-[22px] bg-[linear-gradient(135deg,#edf4ff_0%,#ffffff_100%)] text-[#0f3a78] shadow-[0_12px_30px_rgba(15,58,120,0.08)] ring-1 ring-[#dde7f5]">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-slate-950">{item.title}</h3>
                        <p className="mt-3 text-sm leading-8 text-slate-600">{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <Compass className="h-4 w-4" />
                  How we guide students
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  A clearer process from first consultation to departure.
                </h2>
              </div>
              <Link
                href="/contact-us"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f3a78] px-6 text-sm font-semibold text-white transition hover:bg-[#0b2b5c]"
              >
                Talk to a counsellor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 overflow-hidden rounded-[34px] border border-[#dce5f1] bg-white shadow-[0_20px_60px_rgba(15,58,120,0.08)]">
              {processSteps.map((step, index) => (
                <article
                  key={step.step}
                  className="grid gap-5 border-b border-[#e6edf6] px-6 py-6 last:border-b-0 sm:grid-cols-[120px_1fr] sm:px-8"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Stage {String(index + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 max-w-3xl text-sm leading-8 text-slate-600">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <Globe2 className="h-4 w-4" />
                  Student outcomes
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  The work matters because student outcomes matter.
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-600">
                  The value of strong guidance is not only in applying, but in helping students land in institutions and destinations that make sense for their goals.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {recentPlacements.slice(0, 6).map((placement) => (
                  <article
                    key={`${placement.name}-${placement.university}`}
                    className="rounded-[26px] border border-[#dde6f4] bg-white p-5 shadow-[0_16px_40px_rgba(15,58,120,0.06)]"
                  >
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {placement.flag} {placement.country}
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-slate-950">{placement.university}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{placement.program}</p>
                    <div className="mt-4 border-t border-[#e8edf5] pt-4 text-sm font-medium text-[#0f3a78]">
                      {placement.name}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 pt-6 sm:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[34px] border border-[#dce5f1] bg-[linear-gradient(135deg,#fffdf7_0%,#ffffff_46%,#f6f9ff_100%)] p-8 shadow-[0_22px_60px_rgba(15,58,120,0.08)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Work with us
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                    Ready to work with a team that keeps the process clear and realistic?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    If you want help narrowing destinations, understanding requirements and preparing a stronger application journey, we would be glad to support you.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="https://pathways-crm.vercel.app/book-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f3a78] px-6 text-sm font-semibold text-white transition hover:bg-[#0b2b5c]"
                  >
                    Book free consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="/#destinations"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d4dce8] bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Explore destinations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
