'use client';

import { useState } from 'react';
import { countries, Country } from '@/data/countries';
import { CountryDetailDialog } from './country-detail-dialog';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export function CountriesSection() {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  return (
    <section id="countries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="bg-brand-light text-brand-blue mb-4">
            <MapPin className="w-3 h-3 mr-1" />
            Destinations
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Study Abroad Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our partner universities across 7 countries worldwide
          </p>
          <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, i) => (
            <motion.div
              key={country.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl border border-gray-100">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4">{country.flag}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {country.name}
                  </h3>
                  <p className="text-sm text-brand-blue font-medium mb-3">
                    {country.tagline}
                  </p>
                  <div className="space-y-1.5">
                    {country.universities.slice(0, 3).map((uni) => (
                      <div
                        key={uni}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-brand-blue rounded-full flex-shrink-0" />
                        {uni}
                      </div>
                    ))}
                    {country.universities.length > 3 && (
                      <p className="text-xs text-gray-400 pl-3.5">
                        +{country.universities.length - 3} more
                      </p>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-all duration-300 rounded-full"
                    onClick={() => setSelectedCountry(country)}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <CountryDetailDialog
          country={selectedCountry}
          open={!!selectedCountry}
          onOpenChange={(open) => !open && setSelectedCountry(null)}
        />
      </div>
    </section>
  );
}
