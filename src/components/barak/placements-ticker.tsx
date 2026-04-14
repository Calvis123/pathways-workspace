'use client';

import { recentPlacements } from '@/data/site-data';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function PlacementsTicker() {
  // Duplicate for seamless loop
  const doubled = [...recentPlacements, ...recentPlacements];

  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
          <h3 className="text-xl font-bold text-gray-900">Recent Placements</h3>
          <Star className="w-5 h-5 text-brand-yellow fill-brand-yellow" />
        </motion.div>
      </div>

      {/* Ticker */}
      <div className="overflow-hidden">
        <div className="flex animate-ticker">
          {doubled.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 w-72 mx-2"
            >
              <div className="bg-brand-light/50 rounded-xl p-4 border border-brand-blue/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm truncate">
                      {p.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">{p.university}</p>
                  </div>
                  <Badge variant="outline" className="ml-auto flex-shrink-0 text-xs">
                    {p.flag} {p.country}
                  </Badge>
                </div>
                <p className="text-xs text-brand-blue font-medium">{p.program}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

