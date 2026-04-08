'use client';

import { Country } from '@/data/countries';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  GraduationCap,
  CheckCircle2,
  Banknote,
  Award,
  BookOpen,
  Globe,
  MessageCircle,
} from 'lucide-react';

interface CountryDetailDialogProps {
  country: Country | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CountryDetailDialog({
  country,
  open,
  onOpenChange,
}: CountryDetailDialogProps) {
  if (!country) return null;

  const scrollToContact = () => {
    onOpenChange(false);
    setTimeout(() => {
      const el = document.querySelector('#contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 sm:rounded-2xl">
        <div className="sticky top-0 z-10 bg-gradient-to-r from-brand-blue to-brand-dark p-6 text-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{country.flag}</span>
            <div>
              <DialogTitle className="text-2xl font-bold text-white">{country.name}</DialogTitle>
              <DialogDescription className="text-white/80">{country.tagline}</DialogDescription>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <div>
            <p className="text-gray-700 leading-relaxed">{country.description}</p>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-bold text-gray-900">Why Study in {country.name}?</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {country.whyStudy.map((reason) => (
                <div key={reason} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-bold text-gray-900">Popular Universities</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {country.universities.map((uni) => (
                <Badge key={uni} variant="secondary" className="bg-brand-light text-brand-blue py-1.5 px-3">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {uni}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-bold text-gray-900">Visa Requirements</h3>
            </div>
            <div className="space-y-2">
              {country.visaRequirements.map((req) => (
                <div key={req} className="flex items-start gap-2">
                  <div className="w-5 h-5 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-brand-blue" />
                  </div>
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Banknote className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-bold text-gray-900">Cost of Living</h3>
            </div>
            <div className="bg-brand-light rounded-xl p-4">
              <p className="text-brand-dark font-semibold text-lg">{country.costOfLiving}</p>
              <p className="text-sm text-gray-500 mt-1">Estimated monthly expenses including accommodation and food</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-brand-blue" />
              <h3 className="text-lg font-bold text-gray-900">Available Scholarships</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {country.scholarships.map((s) => (
                <div key={s} className="flex items-start gap-2 bg-yellow-50 rounded-lg p-3">
                  <Award className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {country.testimonials.length > 0 && (
            <>
              <Separator />
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-5 h-5 text-brand-blue" />
                  <h3 className="text-lg font-bold text-gray-900">Student Experiences</h3>
                </div>
                <div className="space-y-3">
                  {country.testimonials.map((t) => (
                    <div key={t.name} className="bg-gray-50 rounded-xl p-4 border-l-4 border-brand-blue">
                      <p className="text-gray-700 italic text-sm">&ldquo;{t.quote}&rdquo;</p>
                      <p className="text-xs text-gray-500 mt-2">- {t.name}, {t.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="bg-gradient-to-r from-brand-blue to-brand-dark rounded-2xl p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Ready to Study in {country.name}?</h3>
            <p className="text-white/80 mb-4 text-sm">Book a consultation and we&apos;ll guide you through the entire process.</p>
            <Button onClick={scrollToContact} className="bg-brand-yellow text-brand-dark hover:bg-brand-orange font-semibold rounded-full px-8">
              Book Consultation for {country.name}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

