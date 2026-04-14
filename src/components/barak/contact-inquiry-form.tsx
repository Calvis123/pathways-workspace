'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { countries } from '@/data/countries';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  country: '',
  level: '',
  message: '',
};

const studyLevels = [
  { label: 'Certificate', value: 'certificate' },
  { label: 'Diploma', value: 'diploma' },
  { label: 'Undergraduate', value: 'undergraduate' },
  { label: 'Postgraduate', value: 'postgraduate' },
  { label: 'Masters', value: 'masters' },
  { label: 'PhD', value: 'phd' },
];

export function ContactInquiryForm() {
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
      setError('Please fill in all fields before sending your inquiry.');
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
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          country: form.country,
          level: form.level,
          inquiry: form.message,
        }),
      });

      if (!response.ok) {
        const result = (await response.json()) as {
          message?: string;
          crmStatus?: number;
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

      setSuccess('Your inquiry has been sent successfully.');
      setForm(initialForm);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[#cddbf7] bg-white p-6 shadow-[0_20px_60px_rgba(31,98,228,0.08)] sm:p-8"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48658e]">
        Inquiry form
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
        Send us your inquiry
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
        Share your details and what you need help with. We&apos;ll submit your inquiry directly and follow up quickly.
      </p>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="fullName" className="text-base font-medium text-slate-800">
            Full Name
          </Label>
          <Input
            id="fullName"
            value={form.fullName}
            onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
            placeholder="Enter your full name"
            className="h-12 rounded-xl border-[#d9e3f2] bg-[#f6f8fc] px-4"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email" className="text-base font-medium text-slate-800">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder="Enter your email address"
            className="h-12 rounded-xl border-[#d9e3f2] bg-[#f6f8fc] px-4"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="phone" className="text-base font-medium text-slate-800">
            Phone Number
          </Label>
          <Input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder="Enter your phone number"
            className="h-12 rounded-xl border-[#d9e3f2] bg-[#f6f8fc] px-4"
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
          <div className="grid gap-2">
            <Label htmlFor="country" className="text-base font-medium text-slate-800">
              Country of Interest
            </Label>
            <select
              id="country"
              value={form.country}
              onChange={(event) => setForm((current) => ({ ...current, country: event.target.value }))}
              className="h-12 rounded-xl border border-[#d9e3f2] bg-[#f6f8fc] px-4 text-slate-800 outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
            >
              <option value="">Select a country...</option>
              {countries.map((country) => (
                <option key={country.slug} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="level" className="text-base font-medium text-slate-800">
              Level of Study
            </Label>
            <select
              id="level"
              value={form.level}
              onChange={(event) => setForm((current) => ({ ...current, level: event.target.value }))}
              className="h-12 rounded-xl border border-[#d9e3f2] bg-[#f6f8fc] px-4 text-slate-800 outline-none transition focus:border-[#1f62e4] focus:ring-2 focus:ring-[#1f62e4]/20"
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

        <div className="grid gap-2">
          <Label htmlFor="message" className="text-base font-medium text-slate-800">
            Message
          </Label>
          <Textarea
            id="message"
            value={form.message}
            onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
            placeholder="Tell us what course, destination or support you are looking for"
            className="min-h-36 rounded-xl border-[#d9e3f2] bg-[#f6f8fc] px-4 py-3"
          />
        </div>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-600">{error}</p>
      ) : null}
      {success ? (
        <p className="mt-4 rounded-lg border border-[#b8ebd3] bg-[#ecfdf3] px-3 py-2 text-sm font-medium text-[#0f766e]">
          {success}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#4f8ff0_0%,#4f8ff0_20%,#1f62e4_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(31,98,228,0.18)] transition hover:-translate-y-0.5 hover:bg-[#174fbf] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {isSubmitting ? 'Submitting...' : 'Send Inquiry'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}

