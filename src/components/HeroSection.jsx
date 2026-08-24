import React from 'react';
import { motion } from 'framer-motion';
import { NEW_ARRIVALS, HERO_PRODUCT } from '../data/products';
import { ArrowRight, Star, ShieldCheck, Award, ThumbsUp } from 'lucide-react';

export default function HeroSection({ onAddToCart, onQuickView }) {
  // 3 Top seller products for right side embedded cards
  const bestSellers = NEW_ARRIVALS.slice(0, 3);

  return (
    <div className="w-full flex flex-col">
      {/* Main Hero Container */}
      <section className="relative w-full h-[540px] sm:h-[calc(100vh-72px)] min-h-[540px] sm:min-h-[640px] max-h-[820px] overflow-hidden bg-[#FFFFFF] text-[#111111] select-none flex flex-col justify-between">
        
        {/* ABSTRACT BACKGROUND GRADIENT SHAPE */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <svg 
            className="w-full h-full filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.04)]" 
            viewBox="0 0 1000 600" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="heroDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8F8F9" />
                <stop offset="50%" stopColor="#EFEFF3" />
                <stop offset="100%" stopColor="#E2E2EA" />
              </linearGradient>
            </defs>

            <path 
              fill="url(#heroDarkGrad)" 
              d="M 0,0 L 1000,0 L 1000,220 Q 1000,260 960,280 L 740,380 Q 700,400 660,390 L 520,360 Q 480,350 440,380 L 320,460 Q 280,490 240,490 L 140,490 Q 80,490 60,420 L 30,240 Q 10,160 0,120 Z" 
            />
          </svg>
        </div>

        {/* MODEL IMAGE - Positioned on left, starting below title on mobile */}
        <div className="absolute inset-x-0 top-[150px] sm:top-[100px] bottom-0 z-[15] pointer-events-none flex items-end justify-center sm:justify-start px-0 sm:pl-6 lg:pl-[6vw]">
          <img 
            src="/hero-model.png" 
            alt="Drip Downunder Model" 
            className="h-[105%] sm:h-[98%] w-auto object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] origin-bottom"
          />
        </div>

        {/* TOP BRAND TITLE & SUBHEADLINE HEADER */}
        <div className="absolute top-[16px] sm:top-[28px] lg:top-[32px] inset-x-0 z-20 flex flex-col items-center pointer-events-none px-4 text-center">
          {/* Brand Logo Icon */}
          <img 
            src="/logo-dark-icon.png" 
            alt="Drip Downunder Logo" 
            className="h-9 sm:h-12 lg:h-14 w-auto mb-1 object-contain filter drop-shadow-xs"
          />

          {/* Main Brand Title */}
          <h1 className="text-[6.5vw] sm:text-[7.5vw] lg:text-[88px] xl:text-[100px] font-black italic tracking-[-0.03em] leading-none text-[#111111] uppercase select-none text-center">
            DRIP DOWNUNDER
          </h1>

          {/* Clean Modern Sub-headline (No clunky box background that cuts over face) */}
          <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs lg:text-sm font-mono font-bold tracking-[0.2em] sm:tracking-[0.35em] text-[#444444] uppercase select-none text-center max-w-2xl">
            Elevate Your Style with Timeless Black & White Elegance
          </p>
        </div>

        {/* BOTTOM RIGHT FLOATING CONTAINER: Supporting Sub-headline, CTA & Product Cards */}
        <div className="relative z-30 w-full h-full flex flex-col justify-end p-4 sm:p-8 lg:p-10 pointer-events-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-6 w-full">
            
            {/* Left Blank Spacer for Model on Desktop */}
            <div className="hidden lg:block w-[35vw] shrink-0 pointer-events-none" />

            {/* Right Group: Supporting Sub-headline Card & Shop Now CTA */}
            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-end justify-end gap-4 w-full">
              
              {/* Supporting Sub-headline Glassmorphic Card (Positioned safely away from model body) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-black/10 shadow-lg max-w-full sm:max-w-[360px] lg:max-w-[380px] space-y-1.5">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black font-sans leading-tight">
                  Elevate Your Style Down Under with Unrivaled Elegance
                </p>
                <p className="text-[11px] sm:text-xs text-[#555555] leading-relaxed font-sans font-normal">
                  Experience the perfect blend of sophistication and comfort in our premium clothing, crafted for those who refuse to blend in.
                </p>
                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => onAddToCart(HERO_PRODUCT)}
                    className="px-6 py-2.5 rounded-full bg-black hover:bg-neutral-800 text-white font-mono font-bold text-[11px] tracking-widest uppercase transition-all duration-300 shadow-md flex items-center space-x-2 cursor-pointer active:scale-95"
                  >
                    <span>SHOP NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* 3 Best Sellers Preview Cards (Desktop/Tablet) */}
              <div className="hidden md:flex items-end gap-3 shrink-0">
                {bestSellers.map((product) => (
                  <div 
                    key={product.id}
                    onClick={() => onQuickView(product)}
                    className="group relative flex-none w-[130px] lg:w-[155px] h-[130px] lg:h-[155px] rounded-2xl bg-white border border-black/[0.08] overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Glassmorphic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                      <div className="flex w-full items-center justify-between gap-1">
                        <span className="text-[10px] font-bold text-[#111111] uppercase tracking-wider truncate">
                          {product.name}
                        </span>
                        <span className="text-[10px] font-mono text-black font-bold shrink-0">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* TRUST ELEMENTS TICKER RIBBON (Dedicated strip right below hero - 100% readable & zero overlap) */}
      <div className="w-full bg-[#111111] text-white py-3.5 px-6 border-y border-black/10 flex items-center justify-around overflow-x-auto no-scrollbar font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest gap-6 shrink-0 shadow-inner">
        <div className="flex items-center space-x-2 shrink-0">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>4.9/5.0 RATINGS</span>
        </div>
        <span className="text-neutral-700 hidden sm:inline">•</span>
        <div className="flex items-center space-x-2 shrink-0">
          <ThumbsUp className="w-3.5 h-3.5 text-white" />
          <span>5,000+ VERIFIED REVIEWS</span>
        </div>
        <span className="text-neutral-700 hidden sm:inline">•</span>
        <div className="flex items-center space-x-2 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-white" />
          <span>100% CERTIFIED FABRICS</span>
        </div>
        <span className="text-neutral-700 hidden sm:inline">•</span>
        <div className="flex items-center space-x-2 shrink-0">
          <Award className="w-3.5 h-3.5 text-white" />
          <span>10+ YEARS EXPERIENCE</span>
        </div>
      </div>
    </div>
  );
}
