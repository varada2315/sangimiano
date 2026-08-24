import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { FEATURED_COLLECTION } from '../data/products';

export default function FeaturedCollection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % FEATURED_COLLECTION.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + FEATURED_COLLECTION.slides.length) % FEATURED_COLLECTION.slides.length);
  };

  const activeSlide = FEATURED_COLLECTION.slides[currentSlide];

  return (
    <section className="w-full px-4 sm:px-6 py-8">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline space-x-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] uppercase font-sans">
            EXPLORE COLLECTIONS
          </h2>
          <span className="text-xs font-mono font-bold text-[#ff5533] uppercase">
            (3)
          </span>
        </div>
      </div>

      {/* Main Banner Container */}
      <div className="relative w-full min-h-[440px] sm:min-h-[480px] rounded-3xl overflow-hidden bg-[#161619] border border-[#24242c] shadow-2xl flex flex-col justify-between p-6 sm:p-10">
        {/* Background Image Slide with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.1]"
            />
            {/* Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0f] via-transparent to-[#0c0c0f]/40" />
          </motion.div>
        </AnimatePresence>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-[#FF1244] hover:border-[#FF1244] active:scale-95 transition-all cursor-pointer shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-white hover:bg-[#FF1244] hover:border-[#FF1244] active:scale-95 transition-all cursor-pointer shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Center Content Title */}
        <div className="relative z-10 my-auto text-center px-6">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-5xl lg:text-6xl font-extrabold tracking-widest text-white uppercase font-sans drop-shadow-lg"
            >
              {activeSlide.title}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Bottom Bar: Text Subtitle, Dots & View Collection Button */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-xs sm:text-sm text-[#a0a0aa] max-w-sm text-center sm:text-left leading-relaxed">
            {activeSlide.subtitle}
          </p>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {FEATURED_COLLECTION.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'w-8 bg-[#FF1244]'
                    : 'w-2 bg-[#33333e] hover:bg-[#555562]'
                }`}
              />
            ))}
          </div>

          <button className="flex items-center space-x-2 px-6 py-2.5 rounded-full bg-[#18181c]/90 backdrop-blur-md border border-[#2e2e38] text-xs font-bold text-white hover:bg-[#FF1244] hover:border-[#FF1244] transition-all duration-300 shadow-xl group cursor-pointer active:scale-95">
            <span>VIEW COLLECTION</span>
            <ArrowUpRight className="w-4 h-4 text-[#FF1244] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
