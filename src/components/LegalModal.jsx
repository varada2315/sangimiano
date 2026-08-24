import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, RefreshCw, AlertCircle } from 'lucide-react';

export default function LegalModal({ isOpen, type, onClose }) {
  if (!isOpen) return null;

  const contentMap = {
    privacy: {
      title: "PRIVACY POLICY",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-sans">
          <p>
            At <strong>Drip Downunder</strong>, we are committed to protecting your personal information and your right to privacy.
          </p>
          <h4 className="font-bold text-black uppercase">1. Information We Collect</h4>
          <p>
            We collect personal details provided directly by you when you place an order, contact us, or inquire about products. This includes your name (e.g. Shivtej), contact details (email: shivtejjagdale28@gmail.com, phone: 7620639222), shipping address, and billing information.
          </p>
          <h4 className="font-bold text-black uppercase">2. How We Use Your Information</h4>
          <p>
            Your information is used strictly to process orders, communicate updates regarding your T-Shirt and Hoodie orders, enhance customer service, and ensure secure delivery.
          </p>
          <h4 className="font-bold text-black uppercase">3. Data Security</h4>
          <p>
            We implement robust security measures to protect your personal information against unauthorized access, alteration, or disclosure.
          </p>
        </div>
      )
    },
    refund: {
      title: "REFUND & RETURN POLICY",
      icon: <RefreshCw className="w-5 h-5 text-black" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-sans">
          <p>
            We want you to be completely satisfied with your <strong>Drip Downunder</strong> purchase.
          </p>
          <h4 className="font-bold text-black uppercase">1. 30-Day Return Window</h4>
          <p>
            You may return any unwashed, unworn garment in its original condition with tags attached within 30 days of receiving your order.
          </p>
          <h4 className="font-bold text-black uppercase">2. Refund Process</h4>
          <p>
            Once your returned T-Shirt or Hoodie is inspected, your refund will be processed back to your original payment method within 5-7 business days.
          </p>
          <h4 className="font-bold text-black uppercase">3. Contact for Returns</h4>
          <p>
            To initiate a return or exchange, please reach out to customer support at <strong>shivtejjagdale28@gmail.com</strong> or WhatsApp <strong>+91 7620639222</strong>.
          </p>
        </div>
      )
    },
    terms: {
      title: "TERMS OF SERVICE",
      icon: <FileText className="w-5 h-5 text-black" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-sans">
          <p>
            Welcome to <strong>Drip Downunder</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms.
          </p>
          <h4 className="font-bold text-black uppercase">1. General Conditions</h4>
          <p>
            We reserve the right to refuse service to anyone for any reason at any time. Prices for our clothing items are subject to change without notice.
          </p>
          <h4 className="font-bold text-black uppercase">2. Product Accuracy</h4>
          <p>
            We make every effort to display as accurately as possible the colors, images, and contrast details of our black & white T-Shirts and Hoodies.
          </p>
          <h4 className="font-bold text-black uppercase">3. Intellectual Property</h4>
          <p>
            All content, brand names, graphics, and designs associated with Drip Downunder are the exclusive property of Drip Downunder.
          </p>
        </div>
      )
    },
    disclaimer: {
      title: "DISCLAIMER",
      icon: <AlertCircle className="w-5 h-5 text-black" />,
      body: (
        <div className="space-y-4 text-xs text-neutral-600 leading-relaxed font-sans">
          <p>
            The information provided on the <strong>Drip Downunder</strong> website is for general clothing purchase and informational purposes only.
          </p>
          <h4 className="font-bold text-black uppercase">1. Product Usage</h4>
          <p>
            While we strive for precision in every fabric stitch, actual apparel shades may vary slightly due to device screen settings and lighting.
          </p>
          <h4 className="font-bold text-black uppercase">2. Limitation of Liability</h4>
          <p>
            Drip Downunder shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our products or website.
          </p>
        </div>
      )
    }
  };

  const currentModal = contentMap[type] || contentMap.privacy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="relative w-full max-w-lg bg-white rounded-2xl border border-black/10 shadow-2xl p-6 sm:p-8 z-10 space-y-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <div className="flex items-center space-x-2.5">
              {currentModal.icon}
              <h3 className="text-base font-bold font-sans text-black tracking-wider uppercase">
                {currentModal.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-neutral-100 text-neutral-500 hover:text-black hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="max-h-[60vh] overflow-y-auto pr-2 no-scrollbar">
            {currentModal.body}
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-black/10 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-lg bg-black text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
