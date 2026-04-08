import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Calendar,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { ContactInquiryForm } from '@/components/barak/contact-inquiry-form';
import { Footer } from '@/components/barak/footer';
import { Navbar } from '@/components/barak/navbar';
import { WhatsAppButton } from '@/components/barak/whatsapp-button';

export const metadata: Metadata = {
  title: 'Contact Us | Barak Pathways',
  description:
    'Contact Barak Pathways for study abroad guidance, consultation booking, WhatsApp support and destination planning for Kenyan students.',
  alternates: {
    canonical: '/contact-us',
  },
};

const contactMethods = [
  {
    title: 'WhatsApp chat',
    description: 'Quick responses for destination questions, intakes and urgent study-planning support.',
    value: '+254 113 043 315',
    href: 'https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways',
    icon: MessageCircle,
    cta: 'Chat now',
    featured: true,
  },
  {
    title: 'Call us now',
    description: 'Speak directly with a counsellor about your course options, budget and next intake.',
    value: '+254 113 043 315',
    href: 'tel:+254113043315',
    icon: Phone,
    cta: 'Call now',
  },
  {
    title: 'Email support',
    description: 'Best for detailed inquiries, documents, academic history and destination preferences.',
    value: 'info@barakpathways.com',
    href: 'mailto:info@barakpathways.com',
    icon: Mail,
    cta: 'Send email',
  },
];

const benefits = [
  'Personalized destination guidance',
  'Fast response on urgent student queries',
  'Clear next steps after first contact',
];

const infoPanels = [
  {
    title: 'Contact directly',
    subtitle: 'Reach us right now',
    lines: ['+254 113 043 315', 'info@barakpathways.com'],
    icon: Phone,
  },
  {
    title: 'Opening hours',
    subtitle: 'When we are available',
    lines: ['Monday - Friday: 8:30 AM - 5:30 PM', 'Saturday: 9:30 AM - 1:30 PM', 'Sunday: Closed'],
    icon: Clock3,
  },
  {
    title: 'Location',
    subtitle: 'Kenya-focused support',
    lines: ['Nairobi-based study abroad support', 'Online consultations available nationwide'],
    icon: MapPin,
  },
];

const nextSteps = [
  'Personalized consultation call',
  'Course and destination recommendations',
  'Application guidance and support',
];

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_26%,#f5f8fe_100%)] text-slate-900">
      <Navbar />

      <main>
        <section className="border-b border-[#e1e8f2] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 sm:py-16">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
              <Link href="/" className="transition hover:text-slate-900">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-900">Contact Us</span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#d8e3f6] bg-[#f7faff] px-4 py-2 text-sm font-medium text-[#0f3a78]">
                  <Phone className="h-4 w-4" />
                  We&apos;re here to help
                </div>
                <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-[4.25rem] lg:leading-[1.02]">
                  Get in touch with us
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                  Ready to start your study abroad journey? Our counsellors are here to guide you through destination choices, admission planning, budgeting and the next steps toward your application.
                </p>

                <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#0f3a78]" />
                    Kenya-focused support
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#0f3a78]" />
                    +254 113 043 315
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#0f3a78]" />
                    Mon-Sat available
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways"
                    target="_blank"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#0f3a78] px-6 text-sm font-semibold text-white transition hover:bg-[#0b2b5c]"
                  >
                    WhatsApp chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="https://pathways-crm.vercel.app/book-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#d4dce8] bg-white px-6 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                  >
                    Book free counselling
                  </Link>
                </div>
              </div>

              <div className="overflow-hidden rounded-[34px] border border-[#dce5f1] bg-[linear-gradient(135deg,#071a33_0%,#0f3a78_50%,#1d5db6_100%)] p-8 text-white shadow-[0_24px_70px_rgba(15,58,120,0.18)] sm:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur">
                  <ShieldCheck className="h-4 w-4" />
                  What happens after you contact us
                </div>
                <div className="mt-6 grid gap-4">
                  {benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/10 px-4 py-4 backdrop-blur">
                      <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ffcf33]" />
                      <span className="text-sm font-medium leading-6 text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-3">
              {contactMethods.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className={`rounded-[30px] border p-6 shadow-[0_18px_50px_rgba(15,58,120,0.08)] ${
                      item.featured
                        ? 'border-[#c8d8ee] bg-[linear-gradient(180deg,#f7faff_0%,#ffffff_100%)]'
                        : 'border-[#dde5f1] bg-white'
                    }`}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf4ff_0%,#ffffff_100%)] text-[#0f3a78] shadow-[0_12px_30px_rgba(15,58,120,0.08)] ring-1 ring-[#dde7f5]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-slate-950">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                    <div className="mt-5 text-sm font-semibold text-[#0f3a78]">{item.value}</div>
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      className={`mt-6 inline-flex h-12 w-full items-center justify-center rounded-full text-sm font-semibold transition ${
                        item.featured
                          ? 'bg-[#0f3a78] text-white hover:bg-[#0b2b5c]'
                          : 'border border-[#d4dce8] text-slate-900 hover:border-[#0f3a78] hover:bg-[#0f3a78] hover:text-white'
                      }`}
                    >
                      {item.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <Mail className="h-4 w-4" />
                  Lead capture
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Prefer to send your details in one place?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Use the inquiry form to share your name, email, phone number and message. It&apos;s a simple way to package your interest before we continue the conversation.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    'Useful for course, destination and visa-related questions',
                    'Helps you send a more complete first inquiry',
                    'Works well for students who want structured follow-up',
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-[#dde6f4] bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(15,58,120,0.05)]"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <ContactInquiryForm />
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#dce6f4] bg-white px-4 py-2 text-sm font-medium text-[#0f3a78] shadow-sm">
                  <MapPin className="h-4 w-4" />
                  Contact information
                </div>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                  Reach us in the way that feels easiest for you.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Whether you prefer to chat, email or book a call, we can help you make sense of destination fit, application timing and the practical steps ahead.
                </p>
              </div>

              <div className="grid gap-4">
                {infoPanels.map((panel) => {
                  const Icon = panel.icon;

                  return (
                    <article
                      key={panel.title}
                      className="rounded-[28px] border border-[#dde6f4] bg-white p-6 shadow-[0_16px_40px_rgba(15,58,120,0.06)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#edf4ff_0%,#ffffff_100%)] text-[#0f3a78] ring-1 ring-[#dde7f5]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-950">{panel.title}</h3>
                          <div className="mt-1 text-sm font-medium text-slate-500">{panel.subtitle}</div>
                          <div className="mt-4 space-y-2">
                            {panel.lines.map((line) => (
                              <p key={line} className="text-sm leading-7 text-slate-600">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16 pt-16 sm:pb-24 sm:pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] bg-[linear-gradient(135deg,#071a33_0%,#0f3a78_46%,#1d5db6_100%)] p-8 text-white shadow-[0_28px_80px_rgba(15,58,120,0.22)] sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                    Start today
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Ready to study abroad?
                  </h2>
                  <p className="mt-4 text-base leading-8 text-white/80">
                    Reach out today and our counsellors will help you clarify your destination options, course pathway and application plan.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {nextSteps.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-sm font-medium text-white/90">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways"
                    target="_blank"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#ffcf33] px-6 text-sm font-semibold text-slate-950 transition hover:bg-[#f1c11b]"
                  >
                    WhatsApp us
                  </Link>
                  <Link
                    href="https://pathways-crm.vercel.app/book-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Book free counselling
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
