'use client';

import { useState } from 'react';
import { scholarships } from '@/data/scholarships';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Award, ArrowRight } from 'lucide-react';

const countries = ['All', 'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'Spain', 'Malta', 'Cyprus'];

const levelColors: Record<string, string> = {
  Postgraduate: 'bg-brand-blue/10 text-brand-blue',
  Undergraduate: 'bg-green-50 text-green-700',
  Both: 'bg-brand-yellow/20 text-brand-dark',
};

export function ScholarshipsSection() {
  const [activeCountry, setActiveCountry] = useState('All');

  const filtered =
    activeCountry === 'All'
      ? scholarships
      : scholarships.filter((s) => s.country === activeCountry);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="scholarships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="bg-brand-yellow/20 text-brand-dark mb-4">
            <Award className="w-3 h-3 mr-1" />
            Funding
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Scholarship Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore scholarships available for Kenyan students. We help you identify
            and apply for the right opportunities.
          </p>
          <div className="w-20 h-1 bg-brand-yellow mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Country Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {countries.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCountry(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCountry === c
                  ? 'bg-brand-blue text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Scholarship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {filtered.map((s, i) => (
            <motion.div
              key={s.name + s.country}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow border-gray-100 rounded-xl">
                <CardContent className="p-5">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{s.flag}</span>
                      <div>
                        <p className="text-xs text-gray-500">{s.country}</p>
                        <h3 className="font-bold text-gray-900">{s.name}</h3>
                      </div>
                    </div>
                    <Badge
                      className={`text-xs px-2.5 py-0.5 rounded-full ${levelColors[s.level]}`}
                    >
                      {s.level}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{s.eligibility}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Deadline: {s.deadline}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={() => scrollTo('#contact')}
            size="lg"
            className="bg-brand-blue hover:bg-brand-dark text-white font-semibold rounded-full px-8"
          >
            Get Scholarship Guidance
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

