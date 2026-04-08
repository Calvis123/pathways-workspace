'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Gift, Share2, ClipboardList, CreditCard, DollarSign, ArrowRight } from 'lucide-react';

const steps = [
  { icon: Share2, title: 'Share your code', desc: 'Share your unique referral code with friends' },
  { icon: ClipboardList, title: 'Friend books', desc: 'Your friend books a consultation' },
  { icon: CreditCard, title: 'They pay', desc: 'They pay the consultation fee' },
  { icon: DollarSign, title: 'You earn', desc: 'You earn KES 5,000!' },
];

export function ReferralSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="referral" className="py-20 bg-gradient-to-b from-brand-light/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="bg-brand-yellow/20 text-brand-dark mb-4">
            <Gift className="w-3 h-3 mr-1" />
            Earn Rewards
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Refer a Friend, Earn Rewards
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Do you know someone who wants to study abroad? Share the gift of
            education and earn rewards.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-brand-yellow to-brand-orange rounded-2xl p-8 text-center mb-12 shadow-lg shadow-brand-yellow/20"
          >
            <span className="text-5xl mb-4 block" aria-hidden="true">
              {"\uD83D\uDCB0"}
            </span>
            <h3 className="text-3xl font-bold text-brand-dark mb-2">
              Earn KES 5,000
            </h3>
            <p className="text-brand-dark/70 text-lg">
              Per successful referral
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-3">
                  <step.icon className="w-7 h-7 text-brand-blue" />
                </div>
                <div className="w-8 h-8 mx-auto bg-brand-blue text-white rounded-full flex items-center justify-center text-sm font-bold mb-2">
                  {i + 1}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-xs">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => scrollTo('#contact')}
              size="lg"
              className="bg-brand-blue hover:bg-brand-dark text-white font-semibold rounded-full px-8"
            >
              Get My Referral Code
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
