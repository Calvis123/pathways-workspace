'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { ConsultationPopupTrigger } from '@/components/barak/consultation-popup-trigger';

const studyLinks = [
  { label: 'Explore destinations', href: '/#destinations' },
  { label: 'About us', href: '/about-us' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact us', href: '/contact-us' },
];

const serviceLinks = [
  'University matching',
  'Application guidance',
  'IELTS preparation',
  'Visa support',
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/barak_pathways_global?igsh=MThiazVlbXZtOHVyZA==',
    Icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CaG9GpDRo/',
    Icon: Facebook,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@barak_pathways?_r=1&_t=ZS-95N105CusgZ',
    Icon: TikTokIcon,
  },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M16.37 2H13.6v11.15a2.31 2.31 0 1 1-2.31-2.31c.2 0 .4.03.59.08V8.1a5.1 5.1 0 0 0-.59-.03 5.08 5.08 0 1 0 5.08 5.08V7.5c1.1.79 2.44 1.25 3.88 1.25V5.98A4.4 4.4 0 0 1 16.37 2Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[linear-gradient(145deg,#0f4ccf_0%,#1f62e4_52%,#0a3da8_100%)] text-white">
      <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top_left,rgba(255,224,130,0.24),transparent_30%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_28%)]" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#ffcf33]/20 blur-3xl" />

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

            <ConsultationPopupTrigger
              label="Start Your Journey"
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#eef1f5_0%,#dde5ef_100%)] px-6 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(79,143,240,0.22)] transition hover:-translate-y-0.5 hover:bg-[#dde5ef] sm:w-auto"
            />
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-52 sm:h-20 sm:w-60">
                <Image
                  src="/images/barak-pathways-logo-transparent-v2.png"
                  alt="Barak Pathways logo"
                  fill
                  sizes="(min-width: 640px) 240px, 208px"
                  className="object-contain object-left"
                />
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Guidance for Kenyan students exploring the UK, Canada, Australia, Malta, Cyprus, Spain and New Zealand, with support spanning applications, IELTS and visa readiness.
            </p>

            <div className="mt-6">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Follow us
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/6 text-white/80 shadow-[0_10px_24px_rgba(2,12,27,0.16)] transition hover:-translate-y-0.5 hover:border-[#eef1f5]/40 hover:bg-white/12 hover:text-[#eef1f5]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
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
                <Phone className="h-4 w-4 text-[#eef1f5]" />
                +254 113 043 315
              </a>
              <a
                href="mailto:info@barakpathways.com"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#eef1f5]" />
                info@barakpathways.com
              </a>
              <div className="flex items-center gap-3">
                <Calendar className="h-4 w-4 text-[#eef1f5]" />
                <Link
                  href="https://wa.me/254113043315?text=Hi%2C%20I%27d%20like%20to%20start%20my%20journey%20with%20Barak%20Pathways"
                  target="_blank"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </Link>
              </div>
            </div>

            <Link
              href="https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways"
              target="_blank"
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#eef1f5] px-6 text-sm font-semibold text-slate-950 transition hover:bg-[#dde5ef] sm:w-auto"
            >
              WhatsApp
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

