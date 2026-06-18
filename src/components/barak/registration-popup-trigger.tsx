'use client';

import { FormEvent, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type RegistrationPopupTriggerProps = {
  label: string;
  className?: string;
};

type EducationSystem = keyof typeof gradeSections;
type FormStep = 'intro' | 'grade' | 'final';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  nationality: '',
  program: '',
  educationSystem: '',
  grade: '',
  highestEducation: '',
  message: '',
};

const programOptions = [
  'Foundation Year Program',
  "Bachelor's Program",
  "Master's Program",
  'German Language Program',
  'Apprenticeship & Job Placement',
];

const educationSystems = [
  '844 System',
  'International Baccalaureate (IB)',
  'Uganda System',
  'Tanzania System',
  'Cambridge Assessment International Education (IGCSE)',
  'Pearson Edexcel',
];

const gradeSections = {
  '844 System': {
    page: 2,
    title: '844 SYSTEM',
    grades: ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-'],
  },
  'Cambridge Assessment International Education (IGCSE)': {
    page: 3,
    title: 'CAMBRIDGE ASSESSMENT INTERNATIONAL EDUCATION (IGCSE/A LEVELS) SYSTEM',
    grades: ['A+', 'A-', 'B', 'C', 'D', 'E', 'F', 'G', 'U'],
  },
  'Pearson Edexcel': {
    page: 4,
    title: 'PEARSON EDEXCEL SYSTEM',
    grades: ['9', '8', '7', '6', '5', '4', '3', '2', '1', 'U'],
  },
  'International Baccalaureate (IB)': {
    page: 5,
    title: 'INTERNATIONAL BACCALAUREATE (IB) SYSTEM',
    grades: ['7', '6', '5', '4', '3', '2', '1'],
  },
  'Uganda System': {
    page: 6,
    title: 'UGANDAN SYSTEM',
    grades: ['A', 'B', 'C', 'D', 'E', 'O'],
  },
  'Tanzania System': {
    page: 7,
    title: 'TANZANIAN SYSTEM',
    grades: ['A+', 'A', 'B', 'C', 'D', 'E'],
  },
};

const educationLevels = [
  'High School',
  'Diploma',
  "Bachelor's Degree",
  "Master's Degree",
  'Doctorate',
  'Other',
];

export function RegistrationPopupTrigger({ label, className }: RegistrationPopupTriggerProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<FormStep>('intro');
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selectedGradeSection = isEducationSystem(form.educationSystem)
    ? gradeSections[form.educationSystem]
    : null;
  const pageNumber = step === 'intro' ? 1 : step === 'grade' ? selectedGradeSection?.page ?? 2 : 8;
  const progress = Math.round((pageNumber / 8) * 100);

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => {
      setOpen(false);
      setSuccess('');
      setError('');
      setStep('intro');
      setForm(initialForm);
    }, 1200);
    return () => clearTimeout(timer);
  }, [success]);

  const clearForm = () => {
    setForm(initialForm);
    setStep('intro');
    setError('');
    setSuccess('');
  };

  const validateIntro = () => {
    if (!form.program || !form.firstName || !form.lastName || !form.email || !form.phone || !form.nationality) {
      setError('Please fill in program, first name, last name, email, phone and nationality.');
      return false;
    }

    setError('');
    return true;
  };

  const goNext = () => {
    if (step === 'intro') {
      if (!validateIntro()) return;
      setStep(selectedGradeSection ? 'grade' : 'final');
      return;
    }

    if (step === 'grade') {
      setStep('final');
    }
  };

  const goBack = () => {
    setError('');

    if (step === 'final') {
      setStep(selectedGradeSection ? 'grade' : 'intro');
      return;
    }

    if (step === 'grade') {
      setStep('intro');
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step !== 'final') {
      goNext();
      return;
    }

    if (!validateIntro()) {
      setStep('intro');
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
          country: form.nationality,
          level: form.program,
          location: form.nationality,
          notes: [
            form.educationSystem ? `Education system: ${form.educationSystem}` : '',
            form.grade ? `Grade attained: ${form.grade}` : '',
            form.highestEducation ? `Highest level of education: ${form.highestEducation}` : '',
            form.message ? `Message: ${form.message}` : '',
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
      setStep('intro');
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
        <DialogContent className="max-h-[92vh] w-[95vw] max-w-[760px] overflow-y-auto rounded-[8px] border border-[#dadce0] bg-[#f1f3f4] p-0 font-['Titillium_Web',Arial,sans-serif] shadow-[0_24px_80px_rgba(60,64,67,0.28)]">
          <DialogHeader className="sr-only">
            <DialogTitle>Application Form</DialogTitle>
          </DialogHeader>

          <div className="p-4 sm:p-6">
            <div className="mb-5 h-32 rounded-[8px] bg-[url('/images/hero-bg-v2.jpg')] bg-cover bg-center sm:h-40" />

            <div className="overflow-hidden rounded-[8px] border border-[#dadce0] bg-white">
              <div className="h-3 bg-[#f8c43b]" />
              <div className="px-6 py-6">
                <h3 className="text-3xl font-bold text-[#202124] sm:text-4xl">Application Form</h3>
                {step === 'intro' ? (
                  <>
                    <p className="mt-4 text-sm leading-6 text-[#3c4043]">
                      Our team of experienced education consultants provides personalized guidance to help you through every step of the admissions process. From choosing the right program to preparing your application, we are here to support you every step of the way.
                    </p>
                    <p className="mt-5 border-t border-[#e0e0e0] pt-3 text-xs text-[#d93025]">
                      * Indicates required question
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
            {step === 'intro' ? (
              <>
                <Question label="SELECT A PROGRAM" required>
                  <select
                    value={form.program}
                    onChange={(event) => setForm((current) => ({ ...current, program: event.target.value }))}
                    className="h-11 w-full border-0 border-b border-[#dadce0] bg-transparent px-0 text-sm text-[#202124] outline-none transition focus:border-[#c06800]"
                  >
                    <option value="">Choose</option>
                    {programOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Question>

                <Question label="FIRST NAME" required>
                  <TextInput
                    value={form.firstName}
                    onChange={(value) => setForm((current) => ({ ...current, firstName: value }))}
                  />
                </Question>

                <Question label="LAST NAME" required>
                  <TextInput
                    value={form.lastName}
                    onChange={(value) => setForm((current) => ({ ...current, lastName: value }))}
                  />
                </Question>

                <Question label="EMAIL" required>
                  <TextInput
                    type="email"
                    value={form.email}
                    onChange={(value) => setForm((current) => ({ ...current, email: value }))}
                  />
                </Question>

                <Question label="PHONE" required>
                  <TextInput
                    value={form.phone}
                    onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
                  />
                </Question>

                <Question label="NATIONALITY" helper="i.e. Kenya, Tanzania, etc." required>
                  <TextInput
                    value={form.nationality}
                    onChange={(value) => setForm((current) => ({ ...current, nationality: value }))}
                  />
                </Question>

                <Question label="EDUCATION SYSTEM">
                  <select
                    value={form.educationSystem}
                    onChange={(event) =>
                      setForm((current) => ({ ...current, educationSystem: event.target.value, grade: '' }))
                    }
                    className="h-11 w-full border-0 border-b border-[#dadce0] bg-transparent px-0 text-sm text-[#202124] outline-none transition focus:border-[#c06800]"
                  >
                    <option value="">Choose</option>
                    {educationSystems.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </Question>
              </>
            ) : null}

            {step === 'grade' && selectedGradeSection ? (
              <SectionCard title={selectedGradeSection.title}>
                <fieldset>
                  <legend className="mb-6 text-lg font-bold text-[#202124]">Grade Attained</legend>
                  <div className="grid gap-5">
                    {selectedGradeSection.grades.map((grade) => (
                      <label key={grade} className="flex cursor-pointer items-center gap-4 text-base text-[#202124]">
                        <input
                          type="checkbox"
                          checked={form.grade === grade}
                          onChange={() => setForm((current) => ({ ...current, grade: current.grade === grade ? '' : grade }))}
                          className="h-7 w-7 appearance-none rounded-[3px] border-[3px] border-[#5f6368] bg-white transition checked:border-[#c06800] checked:bg-[#f8c43b]"
                        />
                        <span>{grade}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
              </SectionCard>
            ) : null}

            {step === 'final' ? (
              <>
                <SectionCard title="FINAL">
                  <Question label="HIGHEST LEVEL OF EDUCATION" nested>
                    <select
                      value={form.highestEducation}
                      onChange={(event) => setForm((current) => ({ ...current, highestEducation: event.target.value }))}
                      className="h-14 w-full max-w-64 rounded-[4px] border border-[#dadce0] bg-white px-5 text-base text-[#5f6368] outline-none transition focus:border-[#c06800]"
                    >
                      <option value="">Choose</option>
                      {educationLevels.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Question>
                </SectionCard>

                <Question label="MESSAGE">
                  <textarea
                    value={form.message}
                    onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                    placeholder="Your answer"
                    className="min-h-24 w-full resize-y border-0 border-b border-[#dadce0] bg-transparent px-0 py-2 text-sm text-[#202124] outline-none transition placeholder:text-[#70757a] focus:border-[#c06800]"
                  />
                </Question>
              </>
            ) : null}

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
                {step !== 'intro' ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="inline-flex h-11 min-w-24 items-center justify-center rounded-[4px] border border-[#dadce0] bg-white px-6 text-base font-bold text-[#c06800] shadow-[0_1px_3px_rgba(60,64,67,0.25)] transition hover:bg-[#f8f9fa]"
                  >
                    Back
                  </button>
                ) : null}
                {step !== 'final' ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="inline-flex h-11 min-w-24 items-center justify-center rounded-[4px] border border-[#dadce0] bg-white px-6 text-base font-bold text-[#c06800] shadow-[0_1px_3px_rgba(60,64,67,0.25)] transition hover:bg-[#f8f9fa]"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex h-11 min-w-32 items-center justify-center rounded-[4px] bg-[#c76b00] px-6 text-base font-bold text-white shadow-[0_1px_3px_rgba(192,104,0,0.28)] transition hover:bg-[#b76000] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? 'Submitting...' : 'Apply Now'}
                  </button>
                )}
              </div>
              <div className="flex min-w-52 flex-1 items-center gap-4">
                <div className="h-3 flex-1 overflow-hidden rounded-full bg-[#70757a]">
                  <div
                    className={`h-full rounded-full ${step === 'final' ? 'bg-[#34a853]' : 'bg-[#80a7f5]'}`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="whitespace-nowrap text-base text-[#202124]">Page {pageNumber} of 8</span>
              </div>
              <button
                type="button"
                onClick={clearForm}
                className="h-10 px-2 text-base font-bold text-[#c06800] transition hover:text-[#8c4b00]"
              >
                Clear form
              </button>
            </div>

            <p className="pb-2 text-sm text-[#3c4043]">Never submit passwords through this form.</p>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Question({
  label,
  helper,
  required,
  nested,
  children,
}: {
  label: string;
  helper?: string;
  required?: boolean;
  nested?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={
        nested
          ? ''
          : 'rounded-[8px] border border-[#dadce0] bg-white px-6 py-5 shadow-[0_1px_2px_rgba(60,64,67,0.08)] focus-within:border-l-4 focus-within:border-l-[#c06800]'
      }
    >
      <label className="block text-sm font-bold text-[#202124]">
        {label} {required ? <span className="text-[#d93025]">*</span> : null}
      </label>
      {helper ? <p className="mt-1 text-xs text-[#5f6368]">{helper}</p> : null}
      <div className="mt-4">{children}</div>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="overflow-hidden rounded-[8px] border border-[#dadce0] bg-white shadow-[0_1px_2px_rgba(60,64,67,0.08)]">
      <div className="bg-[#f8c43b] px-6 py-5 text-base font-bold uppercase text-[#111827]">{title}</div>
      <div className="px-6 py-8">{children}</div>
    </section>
  );
}

function TextInput({
  type = 'text',
  value,
  onChange,
}: {
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder="Your answer"
      className="h-11 w-full border-0 border-b border-[#dadce0] bg-transparent px-0 text-sm text-[#202124] outline-none transition placeholder:text-[#70757a] focus:border-[#c06800]"
    />
  );
}

function isEducationSystem(value: string): value is EducationSystem {
  return value in gradeSections;
}
