import React from 'react';

export default function Footer({ onOpenLegal, onSelectTab }) {
  return (
    <footer className="w-full px-4 sm:px-6 py-8 sm:py-10 border-t border-[#1f1f26] bg-[#0c0c0f] text-xs text-[#8e8e93]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Left Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 font-mono uppercase tracking-wider text-[11px] sm:text-xs">
          <button onClick={() => onSelectTab && onSelectTab('catalog')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">SHOP</button>
          <button onClick={() => onSelectTab && onSelectTab('about')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">ABOUT US</button>
          <button onClick={() => onSelectTab && onSelectTab('contact')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">CONTACT</button>
          <button onClick={() => onOpenLegal && onOpenLegal('refund')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">REFUND POLICY</button>
        </div>

        {/* Center Brand Badge & WhatsApp Contact */}
        <div className="flex items-center space-x-2.5 bg-[#16161a] border border-[#27272e] px-4 py-2 rounded-full shadow-inner max-w-full">
          <img 
            src="/logo-white-icon.png" 
            alt="Drip Downunder Logo" 
            className="h-5 w-auto object-contain shrink-0" 
          />
          <div className="flex flex-wrap items-center justify-center space-x-1.5 sm:space-x-2 text-[9px] sm:text-[10px] font-mono tracking-widest text-[#a0a0aa]">
            <span className="text-white font-bold truncate">DRIP DOWNUNDER</span>
            <span>•</span>
            <span className="text-white font-bold truncate">WHATSAPP: +91 7620639222</span>
          </div>
        </div>

        {/* Right Links & Socials / Legal Pages (Item 17: Privacy, Refund, Terms, Disclaimer) */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 sm:gap-x-6 gap-y-2 font-mono uppercase tracking-wider text-[11px] sm:text-xs">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="py-1 px-1 hover:text-white transition-colors">INSTAGRAM</a>
          <span className="text-[#3a3a44] hidden sm:inline">|</span>
          <button onClick={() => onOpenLegal && onOpenLegal('privacy')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">Privacy</button>
          <button onClick={() => onOpenLegal && onOpenLegal('refund')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">Refund</button>
          <button onClick={() => onOpenLegal && onOpenLegal('terms')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">Terms</button>
          <button onClick={() => onOpenLegal && onOpenLegal('disclaimer')} className="py-1 px-1 hover:text-white transition-colors cursor-pointer uppercase">Disclaimer</button>
        </div>

      </div>
    </footer>
  );
}
