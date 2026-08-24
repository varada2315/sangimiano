import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function CategoriesGrid() {
  return (
    <section className="w-full px-4 sm:px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {CATEGORIES.map((cat, idx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="group relative h-[200px] sm:h-[360px] rounded-xl overflow-hidden bg-white border border-black/[0.08] hover:border-black/[0.15] transition-all duration-300 cursor-pointer shadow-lg"
          >
            {/* Background Image */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.8] contrast-[1.1]"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Card Footer Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="px-4 py-2.5 rounded-lg bg-white/90 backdrop-blur-md border border-black/10 text-sm font-bold text-[#111111] tracking-wider font-sans group-hover:border-black/50 transition-colors">
                {cat.title}
              </div>

              <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-md border border-black/10 flex items-center justify-center text-[#111111] group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-5 h-5 text-[#111111] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
