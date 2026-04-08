'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactInquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName || !form.email || !form.phone || !form.message) {
      setError('Please fill in all fields before sending your inquiry.');
      return;
    }

    setError('');

    const message = encodeURIComponent(
      [
        'Hello Barak Pathways, I would like to make an inquiry.',
        '',
        `Full Name: ${form.fullName}`,
        `Email Address: ${form.email}`,
        `Phone Number: ${form.phone}`,
        `Message: ${form.message}`,
      ].join('\n')
    );

    window.open(`https://wa.me/254113043315?text=${message}`, '_blank', 'noopener,noreferrer');
    setForm(initialForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-[#dbe5f5] bg-white p-6 shadow-[0_20px_60px_rgba(15,58,120,0.08)] sm:p-8"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#48658e]">
        Inquiry form
      </div>
      <h3 className="mt-3 text-2xl font-semibold text-slate-950 sm:text-3xl">
        Send us your inquiry
      </h3>
      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
        Share your details and what you need help with. We&apos;ll open a prefilled inquiry so your message reaches us quickly.
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

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f5f92_0%,#0f5f92_20%,#0f3a78_100%)] px-6 text-base font-semibold text-white shadow-[0_14px_34px_rgba(15,58,120,0.18)] transition hover:-translate-y-0.5 hover:bg-[#0b2b5c]"
      >
        Send Inquiry
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  );
}
