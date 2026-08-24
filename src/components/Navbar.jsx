import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeTab = 'home', onSelectTab, cartCount, onOpenCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'catalog', label: 'CATALOG' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleNavClick = (tabId) => {
    if (onSelectTab) onSelectTab(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full h-[72px] px-4 sm:px-8 flex items-center justify-between z-40 border-b border-black/[0.08] bg-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.04)] backdrop-blur-md sticky top-0">
      {/* Brand Logo */}
      <div 
        onClick={() => handleNavClick('home')}
        className="flex items-center cursor-pointer group space-x-2.5"
      >
        <img 
          src="/logo-dark-icon.png" 
          alt="Drip Downunder Logo" 
          className="h-7 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
        />
        <span className="text-base sm:text-lg font-black italic tracking-tighter text-black uppercase font-sans">
          DRIP DOWNUNDER
        </span>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`relative px-5 py-2 text-[11px] font-mono font-bold tracking-[0.25em] transition-colors cursor-pointer uppercase ${
                isActive
                  ? 'text-black font-black'
                  : 'text-[#8E8E93] hover:text-black'
              }`}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-5 right-5 h-[2px] bg-black"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Right Controls: Cart & Mobile Menu Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={onOpenCart}
          className="relative flex items-center space-x-2 text-black hover:opacity-70 transition-all group cursor-pointer py-1.5 px-3 rounded-full hover:bg-black/5"
        >
          <ShoppingBag className="w-4 h-4 stroke-[1.5] text-black transition-colors" />
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase">BAG</span>
          <span className="flex items-center justify-center bg-black text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full transition-colors">
            {cartCount}
          </span>
        </button>

        {/* Hamburger Menu Toggle (Mobile) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex md:hidden items-center justify-center w-9 h-9 rounded-full bg-black/5 hover:bg-black/10 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-4.5 h-4.5 text-black" /> : <Menu className="w-4.5 h-4.5 text-black" />}
        </button>
      </div>

      {/* Mobile Animated Dropdown / Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/[0.06] px-6 py-8 flex flex-col space-y-4 z-50 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left py-3.5 border-b border-black/[0.04] text-[11px] font-mono font-bold tracking-[0.25em] transition-all cursor-pointer flex items-center justify-between uppercase ${
                      isActive
                        ? 'text-black font-black'
                        : 'text-neutral-500 hover:text-black'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-[10px] opacity-70">➔</span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
