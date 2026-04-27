'use client';

import { FormEvent, useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type RegistrationPopupTriggerProps = {
  label: string;
  className?: string;
};

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  level: '',
  notes: '',
  location: '',
};

export function RegistrationPopupTrigger({ label, className }: RegistrationPopupTriggerProps) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.country || !form.level) {
      setError('Please fill in full name, email, phone number, country and program level.');
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
        body: JSON.stringify(form),
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

      setSuccess('Registration submitted successfully.');
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
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[95vw] max-w-lg rounded-2xl border border-[#d8e4fb] bg-[linear-gradient(180deg,#f7fbff_0%,#eef5ff_100%)] p-0 shadow-[0_34px_100px_rgba(15,42,90,0.22)]">
          <DialogHeader className="sr-only">
            <DialogTitle>Student Registration</DialogTitle>
          </DialogHeader>

          <div className="border-b border-[#d6e2f8] bg-[linear-gradient(120deg,#0f4ccf_0%,#1f62e4_55%,#4f8ff0_100%)] px-6 py-5">
            <div className="inline-flex items-center rounded-full border border-[#f6e5aa] bg-[#fff3cb] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0f3a78]">
              Direct CRM Registration
            </div>
            <h3 className="mt-3 text-xl font-semibold text-white">Register as a student</h3>
            <p className="mt-2 text-sm text-[#eaf1ff]">
              Fill your details to register directly in the CRM.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 p-6">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                Full Name <span className="text-[#d7a300]">*</span>
              </label>
              <input
                value={form.fullName ?? ''}
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
                value={form.email ?? ''}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                Phone Number <span className="text-[#d7a300]">*</span>
              </label>
              <input
                value={form.phone ?? ''}
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
                <input
                  value={form.country ?? ''}
                  onChange={(event) => setForm((current) => ({ ...current, country: event.target.value }))}
                  placeholder="Canada"
                  className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                  Program Level <span className="text-[#d7a300]">*</span>
                </label>
                <input
                  value={form.level ?? ''}
                  onChange={(event) => setForm((current) => ({ ...current, level: event.target.value }))}
                  placeholder="Masters"
                  className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                Notes (Optional)
              </label>
              <textarea
                value={form.notes ?? ''}
                onChange={(event) => setForm((current) => ({ ...current, notes: event.target.value }))}
                placeholder="Workspace self-registration"
                className="min-h-24 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 py-3 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#426291]">
                Location (Optional)
              </label>
              <input
                value={form.location ?? ''}
                onChange={(event) => setForm((current) => ({ ...current, location: event.target.value }))}
                placeholder="City, Country"
                className="h-12 w-full rounded-xl border border-[#c9d8f3] bg-[#f9fbff] px-4 text-[#0f254b] placeholder:text-[#7d92bc] outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
              />
            </div>

            {error ? (
              <p className="rounded-lg border border-[#f5c2c7] bg-[#fff3f5] px-3 py-2 text-sm text-[#9f1239]">
                {error}
              </p>
            ) : null}
            {success ? (
              <p className="rounded-lg border border-[#b8ebd3] bg-[#ecfdf3] px-3 py-2 text-sm font-medium text-[#0f766e]">
                {success}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[#f2df9a] bg-[linear-gradient(120deg,#0f4ccf_0%,#1f62e4_55%,#4f8ff0_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_30px_rgba(31,98,228,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(31,98,228,0.42)] disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
            >
              {isSubmitting ? 'Submitting...' : 'Register'}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
