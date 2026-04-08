'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/254113043315?text=Hi%2C%20I%27m%20interested%20in%20studying%20abroad%20through%20Barak%20Pathways"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition-all duration-300 hover:scale-110">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        Chat on WhatsApp
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
      </span>
    </motion.a>
  );
}
