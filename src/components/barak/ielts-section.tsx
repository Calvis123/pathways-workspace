'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Mic,
  PenTool,
  Brain,
  User,
  BarChart3,
  Calendar,
  ArrowRight,
  Target,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Practice Tests',
    description: 'Comprehensive mock tests that simulate real IELTS exam conditions.',
  },
  {
    icon: Mic,
    title: 'Speaking Practice',
    description: 'One-on-one speaking sessions with expert trainer Jael.',
  },
  {
    icon: PenTool,
    title: 'Writing Feedback',
    description: 'Detailed feedback on your writing tasks with improvement tips.',
  },
  {
    icon: Brain,
    title: 'Test Strategies',
    description: 'Proven techniques to tackle each section of the IELTS exam.',
  },
];

export function IELTSSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="ielts-training" className="py-20 bg-gradient-to-br from-brand-blue via-brand-dark to-brand-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-yellow/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <Badge className="bg-brand-yellow/20 text-brand-yellow border-brand-yellow/30 mb-4">IELTS Preparation</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">IELTS Training</h2>
          <p className="text-white/70 max-w-xl mx-auto">Achieve your target band score with structured expert training.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-brand-yellow/20 rounded-2xl flex items-center justify-center">
                <User className="w-7 h-7 text-brand-yellow" />
              </div>
              <div>
                <p className="text-white/60 text-sm">Led by</p>
                <p className="text-white font-bold text-lg">Jael - Expert IELTS Trainer</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-10 h-10 text-brand-yellow" />
                <div>
                  <p className="text-white font-bold text-2xl">IELTS Focus Plan</p>
                  <p className="text-white/60 text-sm">Complete preparation support</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <BarChart3 className="w-6 h-6 text-brand-yellow mb-2" />
                <p className="text-white font-bold text-xl">Band 6-8</p>
                <p className="text-white/60 text-xs">Average Score</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Calendar className="w-6 h-6 text-brand-yellow mb-2" />
                <p className="text-white font-bold text-xl">Flexible</p>
                <p className="text-white/60 text-xs">Morning, Afternoon & Evening</p>
              </div>
            </div>

            <Button onClick={() => scrollTo('#contact')} size="lg" className="w-full bg-brand-yellow text-brand-dark hover:bg-brand-orange font-bold rounded-full h-14 text-lg">
              Enroll in IELTS Training
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <Card key={f.title} className="bg-white/10 backdrop-blur-sm border-white/10 hover:bg-white/20 transition-all duration-300 group">
                <CardContent className="p-5">
                  <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-yellow/30 transition-colors">
                    <f.icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <h3 className="text-white font-bold mb-1">{f.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{f.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

