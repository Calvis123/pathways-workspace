'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Mail, Phone } from 'lucide-react';

const studyLinks = [
  { label: 'Explore destinations', href: '/#destinations' },
  { label: 'About us', href: '/about-us' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact us', href: '/contact-us' },
];

const serviceLinks = [
  'University matching',
  'Scholarship guidance',
  'IELTS preparation',
  'Visa support',
];

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#071a33] text-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(255,207,51,0.14),transparent_26%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%)]" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#1d5db6]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-[32px] border border-white/10 bg-white/5 px-6 py-6 backdrop-blur sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                Student support
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Build your study abroad plan with clearer guidance and a stronger next step.
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Destination matching, application support, IELTS guidance and visa-readiness planning for students across Kenya.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ffcf33_0%,#f4bb17_100%)] px-6 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(255,207,51,0.22)] transition hover:-translate-y-0.5 hover:bg-[#f3be0b]"
            >
              Book consultation
            </Link>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-40">
                <Image
                  src="/images/pathways-logo.png"
                  alt="Barak Pathways logo"
                  fill
                  sizes="160px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Guidance for Kenyan students exploring the UK, Canada, Australia, Malta, Cyprus, Spain and New Zealand, with support spanning applications, IELTS and visa readiness.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/85">Study with us</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {studyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/85">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/85">Contact</h3>
            <div className="mt-4 space-y-4 text-sm text-white/70">
              <a
                href="https://wa.me/254113043315"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#ffcf33]" />
                +254 113 043 315
              </a>
              <a
                href="mailto:info@barakpathways.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#ffcf33]" />
                info@barakpathways.com
              </a>
              <a
                href="https://calendly.com/barakpathways/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Calendar className="h-4 w-4 text-[#ffcf33]" />
                Book on Calendly
              </a>
            </div>

            <Link
              href="https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways"
              target="_blank"
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#ffcf33] px-6 text-sm font-semibold text-slate-950 transition hover:bg-[#f3be0b]"
            >
              Start your journey
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/50">
          Copyright {new Date().getFullYear()} Barak Pathways. Built for a clearer study abroad journey.
        </div>
      </div>
    </footer>
  );
}
