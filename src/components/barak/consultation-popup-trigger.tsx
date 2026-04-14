'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { countries } from '@/data/countries';

type ConsultationPopupTriggerProps = {
  label: string;
  className?: string;
  withArrow?: boolean;
};

const studyLevels = [
  { label: 'Certificate', value: 'certificate' },
  { label: 'Diploma', value: 'diploma' },
  { label: 'Undergraduate', value: 'undergraduate' },
  { label: 'Postgraduate', value: 'postgraduate' },
  { label: 'Masters', value: 'masters' },
  { label: 'PhD', value: 'phd' },
];

const initialForm = {
  fullName: '',
  email: '',
  age: '',
  location: '',
  phone: '',
  country: '',
  level: '',
  inquiry: '',
};

export function ConsultationPopupTrigger({
  label,
  className,
  withArrow = false,
}: ConsultationPopupTriggerProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setSuccess(''), 3500);
    return () => clearTimeout(timer);
  }, [success]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.country || !form.level) {
      setError('Please fill in all required fields.');
      setSuccess('');
      return;
    }

    setError('');
    setSuccess('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const result = (await response.json()) as {
          message?: string;
          crmStatus?: number;
          crmBody?: string;
          code?: string;
        };
        if (result.code === 'DUPLICATE_EMAIL') {
          setError(result.message || 'This email already has a consultation request.');
          return;
        }

        const details = result.crmStatus ? ` (CRM status: ${result.crmStatus})` : '';
        setError((result.message || 'Could not submit your form right now. Please try again.') + details);
        return;
      }

      setSuccess('Your journey request has been sent successfully.');
      setForm(initialForm);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {label}
        {withArrow ? <span className="ml-2">-&gt;</span> : null}
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[96vw] max-w-3xl max-h-[92vh] overflow-hidden rounded-2xl border border-[#d8e4fb] bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-0 shadow-[0_34px_100px_rgba(15,42,90,0.28)]">
          <DialogHeader className="sr-only">
            <DialogTitle>Free Consultation Form</DialogTitle>
          </DialogHeader>

          <div className="relative flex max-h-[92vh] flex-col">
            {success ? (
              <div className="pointer-events-none absolute left-1/2 top-4 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-xl border border-[#f2df9a] bg-[linear-gradient(120deg,#fff9e8_0%,#f4f8ff_100%)] px-4 py-3 text-sm font-medium text-[#0f3a78] shadow-[0_16px_40px_rgba(15,58,120,0.2)]">
                {success}
              </div>
            ) : null}

            <div className="shrink-0 border-b border-[#d6e2f8] bg-[linear-gradient(120deg,#0f4ccf_0%,#1f62e4_55%,#4f8ff0_100%)] px-5 py-5 sm:px-8 sm:py-6">
              <div className="inline-flex items-center rounded-full border border-[#f6e5aa] bg-[#fff3cb] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f3a78]">
                Study Consultation
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-white sm:text-3xl">
                Tell us where you want to go.
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#eaf1ff] sm:text-base">
                Enter your details and our team will guide your next steps.
              </p>
            </div>

            <div className="min-h-0 overflow-y-auto p-4 sm:p-8 [scrollbar-gutter:stable] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#9eb8e8] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar]:w-2">
              <form onSubmit={handleSubmit} className="grid gap-4 rounded-3xl border border-[#d7e3f8] bg-[linear-gradient(180deg,#f8fbff_0%,#f2f7ff_74%,#fff9e9_100%)] p-5 shadow-[0_18px_46px_rgba(19,60,125,0.12)] sm:p-6">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                    Full Name <span className="text-[#d7a300]">*</span>
                  </label>
                  <input
                    value={form.fullName}
                    onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                    placeholder="John Doe"
                    className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                    Email <span className="text-[#d7a300]">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                      Age
                    </label>
                    <input
                      type="number"
                      min={10}
                      value={form.age}
                      onChange={(event) => setForm((current) => ({ ...current, age: event.target.value }))}
                      placeholder="18"
                      className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                      Location
                    </label>
                    <input
                      value={form.location}
                      onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
                      placeholder="City, Country"
                      className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                    Phone Number <span className="text-[#d7a300]">*</span>
                  </label>
                  <input
                    value={form.phone}
                    onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                    placeholder="+254 7XX XXX XXX"
                    className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                      Country of Interest <span className="text-[#d7a300]">*</span>
                    </label>
                    <select
                      value={form.country}
                      onChange={(event) => setForm((current) => ({ ...current, country: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                    >
                      <option value="">Select a country...</option>
                      {countries.map((country) => (
                        <option key={country.slug} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                      Level of Study <span className="text-[#d7a300]">*</span>
                    </label>
                    <select
                      value={form.level}
                      onChange={(event) => setForm((current) => ({ ...current, level: event.target.value }))}
                      className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                    >
                      <option value="">Select level...</option>
                      {studyLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                    Start Your Journey
                  </label>
                  <textarea
                    value={form.inquiry}
                    onChange={(event) => setForm((current) => ({ ...current, inquiry: event.target.value }))}
                    placeholder="Tell us your goals so we can plan your journey..."
                    className="min-h-24 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 py-3 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                  />
                </div>

                {error ? <p className="rounded-lg border border-[#f5c2c7] bg-[#fff3f5] px-3 py-2 text-sm text-[#9f1239]">{error}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex h-12 items-center justify-center rounded-xl border border-[#f2df9a] bg-[linear-gradient(120deg,#0f4ccf_0%,#1f62e4_55%,#4f8ff0_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,98,228,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(31,98,228,0.42)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Submitting...' : 'Start Your Journey'}
                </button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
