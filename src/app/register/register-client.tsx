'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { RegistrationPopupTrigger } from '@/components/barak/registration-popup-trigger';

export function RegisterClient() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8ff] text-slate-900">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <section className="order-2 flex flex-col justify-center pb-6 lg:order-1 lg:pb-0">
          <Link href="/" className="relative h-16 w-56 sm:h-20 sm:w-64">
            <Image
              src="/images/barak-pathways-logo-transparent-v2.png"
              alt="Barak Pathways"
              fill
              priority
              sizes="256px"
              className="object-contain object-left"
            />
          </Link>

          <div className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-semibold text-[#1f62e4] shadow-sm">
            <CheckCircle2 className="h-4 w-4" />
            Student registration
          </div>

          <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] text-slate-950 sm:text-5xl">
            Register your study abroad interest with Barak Pathways.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Complete the form and your details will be sent directly to our CRM so the team can follow up with the right next steps.
          </p>

          <div className="mt-7 grid max-w-xl gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
            {['Program matching', 'Document review', 'Visa guidance'].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-[8px] bg-white/80 px-3 py-2 shadow-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#1f62e4]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-8 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#1f62e4] px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(31,98,228,0.22)] transition hover:-translate-y-0.5 hover:bg-[#174fbf]"
          >
            Open registration form
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="mt-5 text-sm text-slate-500">
            Share this page with students: <span className="font-semibold text-slate-700">barakpathways.com/register</span>
          </p>
        </section>

        <section className="order-1 lg:order-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-[#dbe8ff] shadow-[0_28px_80px_rgba(15,42,90,0.2)] sm:min-h-[520px] lg:min-h-[680px]">
            <Image
              src="/images/registration-hero.png"
              alt="Students reviewing international study application documents with an advisor"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,25,54,0.78)_100%)] px-5 pb-5 pt-24 text-white sm:px-7 sm:pb-7">
              <p className="max-w-md text-xl font-semibold leading-tight sm:text-2xl">
                Your pathway starts with one clear registration.
              </p>
            </div>
          </div>
        </section>
      </div>

      <RegistrationPopupTrigger
        label="Open registration form"
        open={open}
        onOpenChange={setOpen}
        showButton={false}
      />
    </main>
  );
}
