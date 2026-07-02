'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { X } from 'lucide-react';

type RegistrationPopupTriggerProps = {
  label: string;
  className?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showButton?: boolean;
};

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  program: '',
  highestEducation: '',
  message: '',
  consent: false,
};

const programOptions = [
  'Diploma',
  'Undergraduate',
  'Postgraduate',
];

const educationLevels = [
  'High School',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'Doctorate',
  'Other',
];

export function RegistrationPopupTrigger({
  label,
  className,
  open: controlledOpen,
  onOpenChange,
  showButton = true,
}: RegistrationPopupTriggerProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formScrollRef = useRef<HTMLFormElement>(null);
  const open = controlledOpen ?? internalOpen;

  const setOpen = (nextOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
      return;
    }

    setInternalOpen(nextOpen);
  };

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => {
      setOpen(false);
      setSuccess('');
      setError('');
      setForm(initialForm);
    }, 1200);
    return () => clearTimeout(timer);
  }, [success]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOpenChange(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const clearForm = () => {
    setForm(initialForm);
    setError('');
    setSuccess('');
  };

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      clearForm();
    }
  };

  const validateForm = () => {
    if (!form.program || !form.firstName || !form.lastName || !form.email || !form.phone) {
      setError('Please fill in program, first name, last name, email and WhatsApp number / alternative phone number.');
      formScrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
      return false;
    }

    if (!form.consent) {
      setError('Please confirm your consent before submitting.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = async (event?: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (!validateForm()) {
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/students/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          country: 'Kenya',
          level: form.program,
          location: 'Kenya',
          notes: [
            form.highestEducation ? `Highest level of education: ${form.highestEducation}` : '',
            form.message ? `Message: ${form.message}` : '',
            'Consent accepted: Yes',
          ]
            .filter(Boolean)
            .join('\n'),
        }),
      });

      if (!response.ok) {
        const result = (await response.json()) as {
          message?: string;
          crmStatus?: number;
        };
        const details = result.crmStatus ? ` (CRM status: ${result.crmStatus})` : '';
        setError((result.message || 'Could not submit registration right now. Please try again.') + details);
        return;
      }

      setSuccess('Application submitted successfully.');
      setForm(initialForm);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showButton ? (
        <button
          type="button"
          className={className}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setOpen(true);
          }}
        >
          {label}
        </button>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-slate-950/55 p-3 sm:p-6">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Study abroad application"
            className="relative flex max-h-[calc(100dvh-1.5rem)] w-[96vw] max-w-3xl flex-col overflow-hidden rounded-2xl border border-[#d8e4fb] bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-0 shadow-[0_34px_100px_rgba(15,42,90,0.28)] sm:max-h-[calc(100dvh-3rem)]"
          >
            <button
              type="button"
              onClick={() => handleOpenChange(false)}
              className="absolute right-4 top-4 z-40 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0f3a78] shadow-sm transition hover:bg-white"
              aria-label="Close application form"
            >
              <X className="h-4 w-4" />
            </button>

            {success ? (
              <div className="pointer-events-none absolute left-1/2 top-4 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-xl border border-[#f2df9a] bg-[linear-gradient(120deg,#fff9e8_0%,#f4f8ff_100%)] px-4 py-3 text-sm font-medium text-[#0f3a78] shadow-[0_16px_40px_rgba(15,58,120,0.2)]">
                {success}
              </div>
            ) : null}

            <div className="relative min-h-52 shrink-0 overflow-hidden border-b border-[#d6e2f8] sm:min-h-64">
              <Image
                src="/images/registration-hero.png"
                alt="Students reviewing international study application documents"
                fill
                priority
                sizes="(min-width: 768px) 768px, 96vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,76,207,0.94)_0%,rgba(31,98,228,0.84)_48%,rgba(31,98,228,0.35)_100%)]" />
              <div className="relative z-10 flex min-h-52 max-w-2xl flex-col justify-center px-5 py-7 sm:min-h-64 sm:px-8 sm:py-10">
                <h3 className="text-xl font-semibold leading-tight text-white sm:text-3xl">
                  Submit your study abroad pathway form.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-[#eaf1ff] sm:text-base">
                  Share your details, education background and preferred program so your application record is captured clearly. A representative will be connected to you as soon as possible.
                </p>
              </div>
            </div>

            <form
              ref={formScrollRef}
              onSubmit={handleSubmit}
              className="grid min-h-0 flex-1 content-start gap-4 overflow-y-auto overscroll-contain p-4 sm:p-8 [scrollbar-gutter:stable] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#9eb8e8] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2"
            >
              <div className="grid gap-4 rounded-3xl border border-[#d7e3f8] bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_74%,#fff9e9_100%)] p-5 shadow-[0_18px_46px_rgba(19,60,125,0.12)] sm:p-6">
                <Question label="Program you want to apply for" required>
                  <select
                    value={form.program}
                    onChange={(event) => setForm((current) => ({ ...current, program: event.target.value }))}
                    className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  >
                    <option value="">Select program...</option>
                    {programOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Question>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Question label="First name" required>
                    <TextInput
                      value={form.firstName}
                      onChange={(value) => setForm((current) => ({ ...current, firstName: value }))}
                      placeholder="e.g. Brian"
                    />
                  </Question>

                  <Question label="Last name" required>
                    <TextInput
                      value={form.lastName}
                      onChange={(value) => setForm((current) => ({ ...current, lastName: value }))}
                      placeholder="e.g. Otieno"
                    />
                  </Question>
                </div>

                <Question label="Email address" required>
                  <TextInput
                    type="email"
                    value={form.email}
                    onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                    placeholder="you@example.com"
                  />
                </Question>

                <Question label="WhatsApp number / alternative phone number" required>
                  <TextInput
                    value={form.phone}
                    onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
                    placeholder="+254 7XX XXX XXX"
                  />
                </Question>

                <Question label="Highest level of education">
                  <select
                    value={form.highestEducation}
                    onChange={(event) => setForm((current) => ({ ...current, highestEducation: event.target.value }))}
                    className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  >
                    <option value="">Select level...</option>
                    {educationLevels.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Question>

                <Question label="Anything else we should know?">
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Mention your preferred country, intake, budget range, or course if you already know it."
                    className="min-h-24 w-full resize-y rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 py-3 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  />
                </Question>

                <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-[#d7e3f8] bg-white/82 px-5 py-4 text-sm leading-6 text-[#0f254b] shadow-[0_10px_26px_rgba(19,60,125,0.08)]">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
                    className="mt-1 h-5 w-5 shrink-0 rounded border-2 border-[#7d92bc] text-[#1f62e4] focus:ring-[#1f62e4]/20"
                  />
                  <span>
                    I consent to Barak Pathways contacting me about my study abroad registration and related support.
                    <span className="text-[#d93025]"> *</span>
                  </span>
                </label>
              </div>

            {error ? (
              <p className="rounded-[8px] border border-[#fad2cf] bg-white px-4 py-3 text-sm text-[#d93025]">
                {error}
              </p>
            ) : null}
            {success ? (
              <p className="rounded-[8px] border border-[#ceead6] bg-white px-4 py-3 text-sm font-medium text-[#137333]">
                {success}
              </p>
            ) : null}

            <div className="flex flex-wrap items-center justify-between gap-4 py-2">
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-11 min-w-32 items-center justify-center rounded-xl bg-[linear-gradient(120deg,#0f4ccf_0%,#1f62e4_55%,#4f8ff0_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,98,228,0.35)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
              <button
                type="button"
                onClick={clearForm}
                className="h-10 px-2 text-sm font-semibold text-[#1f62e4] transition hover:text-[#174fbf]"
              >
                Clear
              </button>
            </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

function Question({
  label,
  helper,
  required,
  children,
}: {
  label: string;
  helper?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#d7e3f8] bg-white/82 px-5 py-4 shadow-[0_10px_26px_rgba(19,60,125,0.08)]">
      <label className="block text-sm font-semibold text-[#0f254b]">
        {label} {required ? <span className="text-[#d93025]">*</span> : null}
      </label>
      {helper ? <p className="mt-1 text-xs leading-5 text-[#6b84ad]">{helper}</p> : null}
      <div className="mt-3">{children}</div>
    </div>
  );
}

function TextInput({
  type = 'text',
  value,
  onChange,
  placeholder = 'Your answer',
}: {
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
    />
  );
}
