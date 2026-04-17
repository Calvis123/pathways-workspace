'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, Phone, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { countries } from '@/data/countries';
import { getDestinationPath } from '@/lib/destination-utils';
import { ConsultationPopupTrigger } from '@/components/barak/consultation-popup-trigger';

const navLinks = [
  { label: 'Study destinations', href: '/#destinations', dropdown: true },
  { label: 'About us', href: '/about-us' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact us', href: '/contact-us' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const mobileOpenRef = useRef(false);

  useEffect(() => {
    mobileOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 16);

      if (mobileOpenRef.current && Math.abs(currentScrollY - lastScrollY) > 4) {
        setMobileOpen(false);
        setMobileDestinationsOpen(false);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden border-b border-white/10 bg-[linear-gradient(90deg,#05263d_0%,#1f62e4_55%,#4f8ff0_100%)] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-sm lg:px-8">
          <div className="flex items-center gap-6 text-white/80">
            <Link href="/blogs" className="transition hover:text-white">
              Blogs
            </Link>
            <Link href="/about-us" className="transition hover:text-white">
              About us
            </Link>
            <Link href="/contact-us" className="transition hover:text-white">
              Contact us
            </Link>
          </div>
          <div className="text-white/75">Kenya-focused study abroad support</div>
        </div>
      </div>

      <div
        className={`border-b transition-all ${
          scrolled
            ? 'border-[#cddbf7] bg-white/88 shadow-[0_10px_30px_rgba(31,98,228,0.08)] backdrop-blur-xl'
            : 'border-transparent bg-white/78 backdrop-blur-xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 text-left">
            <div className="relative h-14 w-48 sm:h-16 sm:w-56">
              <Image
                src="/images/barak-pathways-logo-transparent-v2.png"
                alt="Barak Pathways logo"
                fill
                sizes="(min-width: 640px) 224px, 192px"
                className="object-contain object-left drop-shadow-[0_6px_14px_rgba(10,61,168,0.22)] contrast-110 saturate-110"
                priority
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#eef2f8] hover:text-[#1f62e4]">
                      {link.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64 rounded-2xl border border-[#cddbf7] p-2 shadow-[0_18px_45px_rgba(31,98,228,0.12)]">
                    {countries.map((country) => (
                      <DropdownMenuItem key={country.slug} asChild>
                        <Link href={getDestinationPath(country.slug)} className="cursor-pointer rounded-xl">
                          <span className="mr-2">{country.flag}</span>
                          {country.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-[#eef2f8] hover:text-[#1f62e4]"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-3">
            <ConsultationPopupTrigger
              label="Start your Journey"
              className="hidden h-11 items-center rounded-full bg-[linear-gradient(135deg,#eef1f5_0%,#dde5ef_100%)] px-5 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(79,143,240,0.24)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(79,143,240,0.28)] sm:inline-flex"
            />

            <Sheet
              open={mobileOpen}
              onOpenChange={(open) => {
                setMobileOpen(open);

                if (!open) {
                  setMobileDestinationsOpen(false);
                }
              }}
            >
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-[#dbe6f5] bg-white/90 shadow-[0_10px_24px_rgba(31,98,228,0.08)] lg:hidden"
                >
                  <Menu className="h-6 w-6 text-slate-800" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-80 border-l border-[#cddbf7] bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fb_55%,#eef2f8_100%)] px-0"
              >
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <div className="mt-10 flex h-full flex-col overflow-y-auto px-5 pb-6">
                  <div className="rounded-[28px] border border-[#cddbf7] bg-[linear-gradient(135deg,#1f62e4_0%,#4f8ff0_65%,#6fa5ff_100%)] p-5 text-white shadow-[0_18px_45px_rgba(31,98,228,0.22)]">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85">
                      <Sparkles className="h-3.5 w-3.5" />
                      Student pathway
                    </div>
                    <div className="mt-4 text-lg font-semibold">Barak Pathways</div>
                    <p className="mt-2 text-sm leading-6 text-white/80">
                      Explore destinations, services and your next intake options.
                    </p>
                  </div>

                  <div className="mt-5 rounded-[28px] border border-[#dbe6f5] bg-white/90 p-3 shadow-[0_14px_35px_rgba(31,98,228,0.06)] backdrop-blur">
                    <button
                      type="button"
                      onClick={() => setMobileDestinationsOpen((open) => !open)}
                      className="flex w-full items-center justify-between rounded-[22px] px-4 py-3 text-left transition hover:bg-[#eef5f9]"
                    >
                      <div>
                        <div className="text-sm font-semibold text-slate-900">Study destinations</div>
                        <div className="mt-1 text-xs text-slate-500">Browse countries we support</div>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eef2f8] text-[#1f62e4]">
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileDestinationsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </span>
                    </button>

                    {mobileDestinationsOpen ? (
                      <div className="mt-2 grid gap-2 border-t border-[#e7eef8] pt-3">
                        {countries.map((country) => (
                          <Link
                            key={country.slug}
                            href={getDestinationPath(country.slug)}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center justify-between rounded-2xl border border-transparent bg-[#f4f8fb] px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#cddbf7] hover:bg-white hover:text-[#1f62e4]"
                          >
                            <span className="flex items-center gap-3">
                              <span className="text-base">{country.flag}</span>
                              {country.name}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                              View
                            </span>
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-4 rounded-[28px] border border-[#dbe6f5] bg-white/90 p-3 shadow-[0_14px_35px_rgba(31,98,228,0.06)] backdrop-blur">
                    {navLinks
                      .filter((link) => !link.dropdown)
                      .map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between rounded-[20px] px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-[#eef5f9] hover:text-[#1f62e4]"
                        >
                          <span>{link.label}</span>
                          <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
                            Open
                          </span>
                        </Link>
                      ))}
                  </div>

                  <ConsultationPopupTrigger
                    label="Start your Journey"
                    className="mt-5 inline-flex h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#1f62e4_0%,#4f8ff0_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(31,98,228,0.18)]"
                  />

                  <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                    The menu closes automatically as soon as you continue scrolling.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

