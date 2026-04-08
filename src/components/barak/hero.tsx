'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ArrowRight, BadgeDollarSign, Globe, Sparkles, Users } from 'lucide-react';

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Students studying abroad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/90 via-brand-dark/80 to-brand-blue/70" />
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-brand-yellow" />
              <span className="text-white/90 text-sm font-medium">Trusted by 40+ students across top study destinations</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Study in the UK, Canada, <span className="text-brand-yellow">Australia</span>, Malta & <span className="text-brand-yellow">More</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
            Your seamless path to studying overseas. Expert guidance from application to arrival.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button onClick={() => scrollTo('#contact')} size="lg" className="bg-brand-yellow text-brand-dark hover:bg-brand-orange font-bold rounded-full px-8 text-lg h-14 shadow-lg shadow-brand-yellow/25">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button onClick={() => scrollTo('#countries')} variant="outline" size="lg" className="border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-8 text-lg h-14 backdrop-blur-sm">
              <Globe className="w-5 h-5 mr-2" />
              Explore Destinations
            </Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-xl">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">40+</p>
                  <p className="text-white/70 text-sm">Students placed successfully</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-xl">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-brand-yellow/20 rounded-xl flex items-center justify-center">
                  <BadgeDollarSign className="w-6 h-6 text-brand-yellow" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">KES 40,000</p>
                  <p className="text-white/70 text-sm">Pay 20k now, 20k after visa</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
