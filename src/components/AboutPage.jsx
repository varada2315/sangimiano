import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Target, Eye, Compass } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] text-[#111111] py-12 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-16">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 flex flex-col items-center"
        >
          <img 
            src="/logo-dark-icon.png" 
            alt="Drip Downunder Logo" 
            className="h-16 w-auto object-contain" 
          />
          <span className="text-black font-mono text-xs tracking-[0.3em] uppercase font-bold">
            PREMIUM CLOTHING BRAND
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black italic tracking-tight uppercase">
            DRIP DOWNUNDER
          </h1>
          <p className="max-w-3xl mx-auto text-[#444444] text-sm sm:text-base leading-relaxed font-sans font-medium">
            Elevate Your Style Down Under with Unrivaled Elegance. Experience the perfect blend of sophistication and comfort in our premium clothing, crafted for those who refuse to blend in.
          </p>
        </motion.div>

        {/* Brand Story Section */}
        <div className="rounded-2xl bg-white border border-black/[0.06] p-8 sm:p-12 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-xs font-mono font-bold tracking-[0.2em] text-black uppercase border-b border-black/10 pb-4">
            <Compass className="w-4 h-4 text-black" />
            <span>BRAND STORY • OUR ORIGINS</span>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-[#444444] leading-relaxed">
            <p>
              In the heart of Australia, Drip Downunder's story began with a passion for precision and a commitment to quality. Founded by a tight-knit group of creatives, the brand was born from a desire to challenge the ordinary and push the boundaries of fashion. Every stitch, every thread, and every detail was meticulously crafted to evoke the essence of raw Australian spirit.
            </p>
            <p>
              At Drip Downunder, we're not just selling clothing – we're curating a way of life. We're dedicated to empowering individuals with the confidence to take on the world, one outfit at a time. With every piece, we aim to transport you to a place where the urban jungle meets the untamed beauty of the outback. In a world of monotony, we're your beacon of black and white contrast, where sophistication meets rebellion.
            </p>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="p-8 rounded-xl bg-white border border-black/[0.06] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center">
              <Target className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#111111]">MISSION STATEMENT</h3>
            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
              At Drip Downunder, we craft timeless, black and white essentials that elevate the art of understated style.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-xl bg-white border border-black/[0.06] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center">
              <Eye className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#111111]">VISION STATEMENT</h3>
            <p className="text-[#555555] text-xs sm:text-sm leading-relaxed">
              At Drip Downunder, we envision a world where effortless style meets unwavering confidence, where the bold lines of our black and white aesthetic inspire a movement of individuals unapologetically themselves.
            </p>
          </div>
        </div>

        {/* Product Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-xl bg-white border border-black/[0.06] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#111111]">PREMIUM T-SHIRTS</h3>
            <p className="text-[#6B6B6B] text-xs leading-relaxed">
              Heavyweight combed ring-spun cotton T-Shirts designed with relaxed drop-shoulder cuts, reinforced neckbands, and clean monochromatic contrast.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-black/[0.06] space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-[#111111]">HEAVYWEIGHT HOODIES</h3>
            <p className="text-[#6B6B6B] text-xs leading-relaxed">
              Ultra-heavyweight 480 GSM fleece hoodies engineered with double-walled hoods, articulated ribbed cuffs, and precision stitching.
            </p>
          </div>
        </div>

        {/* Brand Philosophy Section */}
        <div className="relative rounded-2xl bg-white border border-black/[0.06] shadow-sm p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">OUR PHILOSOPHY</span>
            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider">BLACK & WHITE CONTRAST. UNRIVALED ELEGANCE.</h2>
            <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">
              We focus exclusively on crisp monochromatic aesthetics. Every garment in the Drip Downunder collection is designed to empower individuals with confidence and timeless style.
            </p>
          </div>

          <div className="shrink-0 w-36 h-32 rounded-lg border border-black/10 bg-neutral-50 flex flex-col items-center justify-center p-4 text-center">
            <Award className="w-8 h-8 text-black mb-1" />
            <span className="text-xl font-mono font-bold">100%</span>
            <span className="text-[10px] font-mono text-[#6B6B6B] uppercase">PREMIUM FASHION</span>
          </div>
        </div>

      </div>
    </div>
  );
}
