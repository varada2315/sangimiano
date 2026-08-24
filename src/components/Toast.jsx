import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, CheckCircle2 } from 'lucide-react';

export default function Toast({ message, isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-5 py-3 rounded-lg bg-black text-white shadow-lg border border-black/10 font-mono font-bold"
        >
          <CheckCircle2 className="w-5 h-5 text-white" />
          <span className="text-xs font-bold tracking-wider uppercase">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
