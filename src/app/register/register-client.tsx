'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { RegistrationPopupTrigger } from '@/components/barak/registration-popup-trigger';

export function RegisterClient() {
  const [open, setOpen] = useState(true);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(31,98,228,0.16),transparent_28%),linear-gradient(180deg,#f6f9ff_0%,#ffffff_48%,#eef5ff_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-10 text-center sm:px-6">
        <Link href="/" className="relative h-20 w-64">
          <Image
            src="/images/barak-pathways-logo-transparent-v2.png"
            alt="Barak Pathways"
            fill
            priority
            sizes="256px"
            className="object-contain"
          />
        </Link>

        <div className="mt-10 inline-flex rounded-full border border-[#cddbf7] bg-white px-4 py-2 text-sm font-semibold text-[#1f62e4] shadow-sm">
          Student registration
        </div>

        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-5xl">
          Register your study abroad interest with Barak Pathways.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          Complete the form and your details will be sent directly to our CRM so the team can follow up with the right next steps.
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#1f62e4] px-7 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(31,98,228,0.22)] transition hover:-translate-y-0.5 hover:bg-[#174fbf]"
        >
          Open registration form
        </button>

        <p className="mt-5 text-sm text-slate-500">
          Share this page with students: <span className="font-semibold text-slate-700">barakpathways.com/register</span>
        </p>
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
