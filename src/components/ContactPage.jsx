import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onShowToast) {
      onShowToast('INQUIRY SENT SUCCESSFULLY! WE WILL CONTACT YOU SHORTLY.');
    }
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] text-[#111111] py-12 px-6 sm:px-10 lg:px-16 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-black font-mono text-xs tracking-[0.3em] uppercase font-bold">
            CLIENT SUPPORT & INQUIRIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-black italic tracking-tight uppercase">
            CONTACT DRIP DOWNUNDER
          </h1>
          <p className="text-[#6B6B6B] text-sm max-w-lg mx-auto">
            Have questions about T-Shirts, Hoodies, orders, or sizing? Get in touch with our team directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            <div className="p-6 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">EMAIL SUPPORT</h4>
                <p className="text-sm font-bold text-[#111111] mt-1 select-all">shivtejjagdale28@gmail.com</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">DIRECT PHONE & WHATSAPP</h4>
                <p className="text-sm font-bold text-[#111111] mt-1">+91 7620639222</p>
                <span className="text-[10px] font-mono text-emerald-600">Available on WhatsApp • Shivtej (Founder)</span>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-5 shadow-sm">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-black/5 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <h4 className="text-xs font-mono text-[#6B6B6B] uppercase tracking-widest">ADDRESS / LOCATION</h4>
                <p className="text-sm font-bold text-[#111111] mt-1">20 Shivneri Colony, Godly, Satara</p>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-xl bg-white border border-black/[0.06] space-y-5 shadow-sm">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#6B6B6B] uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4 text-black" />
              <span>SEND US A DIRECT MESSAGE</span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono text-[#6B6B6B] uppercase mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter full name"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-black/10 text-[#111111] text-xs focus:border-black focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#6B6B6B] uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="shivtejjagdale28@gmail.com"
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-black/10 text-[#111111] text-xs focus:border-black focus:bg-white outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#6B6B6B] uppercase mb-1">Message</label>
                <textarea 
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg bg-neutral-50 border border-black/10 text-[#111111] text-xs focus:border-black focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 rounded-lg bg-black hover:bg-neutral-900 text-white font-mono font-bold text-xs tracking-wider uppercase transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
