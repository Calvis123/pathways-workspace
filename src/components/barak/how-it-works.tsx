'use client';

import { processSteps } from '@/data/site-data';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-20 bg-brand-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-brand-blue/10 text-brand-blue mb-4">
            Our Process
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Journey to Studying Abroad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From your first consultation to your first day at university, we guide
            you every step of the way.
          </p>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-blue/20 md:-translate-x-0.5" />

          <div className="space-y-8 md:space-y-12">
            {processSteps.map((step, i) => {
              const isEven = i % 2 === 0;
              const isApproved = step.step === 6;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Number Circle */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-md ${
                        isApproved
                          ? 'bg-brand-yellow text-brand-dark ring-4 ring-brand-yellow/30'
                          : 'bg-brand-blue text-white ring-4 ring-white'
                      }`}
                    >
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                      isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                    }`}
                  >
                    <div
                      className={`p-5 rounded-xl ${
                        isApproved
                          ? 'bg-brand-yellow/10 border-2 border-brand-yellow'
                          : 'bg-white shadow-sm border border-gray-100'
                      }`}
                    >
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <h3
                        className={`text-lg font-bold mb-1 ${
                          isApproved ? 'text-brand-dark' : 'text-gray-900'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isApproved ? 'text-brand-dark/70' : 'text-gray-600'
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            onClick={() => scrollTo('#contact')}
            size="lg"
            className="bg-brand-blue hover:bg-brand-dark text-white font-semibold rounded-full px-8 shadow-lg"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}


