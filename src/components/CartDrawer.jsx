import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white border-l border-black/10 z-50 flex flex-col justify-between shadow-2xl p-5 sm:p-6"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08]">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-black" />
                <h3 className="text-base sm:text-lg font-bold text-[#111111] tracking-wider font-sans uppercase">
                  YOUR BAG ({cart.reduce((total, item) => total + item.quantity, 0)})
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full bg-[#F2F2F2] text-[#6B6B6B] hover:text-[#111111] hover:bg-[#E5E5E5] transition-colors cursor-pointer"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-3.5 no-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-[#6B6B6B] space-y-3 py-16">
                  <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
                  <p className="text-sm font-medium">Your shopping bag is empty.</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-3.5 p-3 rounded-2xl bg-[#F7F7F7] border border-black/[0.06] shadow-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-20 object-cover rounded-xl border border-black/[0.06] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-[#111111] tracking-wider truncate uppercase">
                        {item.name}
                      </h4>
                      <p className="text-xs text-black font-mono font-bold mt-1">
                        ${item.price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-black/10 text-[#6B6B6B] hover:text-[#111111] cursor-pointer active:scale-95 transition-transform"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-mono font-bold text-[#111111] px-2">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-black/10 text-[#6B6B6B] hover:text-[#111111] cursor-pointer active:scale-95 transition-transform"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    {/* Delete Item */}
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2.5 text-[#6B6B6B] hover:text-black hover:opacity-75 transition-colors cursor-pointer"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Subtotal & Checkout */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-black/[0.08] space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B6B6B] font-medium">SUBTOTAL</span>
                  <span className="text-lg font-bold text-[#111111] font-mono">${subtotal}</span>
                </div>
                <p className="text-[11px] text-[#6B6B6B] leading-snug">
                  Shipping and taxes calculated at checkout. Free shipping on orders over $100.
                </p>
                <button
                  onClick={onCheckout}
                  className="w-full py-4 rounded-lg bg-black hover:bg-neutral-900 text-white font-mono font-bold text-xs tracking-widest uppercase transition-all duration-200 shadow-sm flex items-center justify-center space-x-2 active:scale-[0.98] cursor-pointer"
                >
                  <span>PROCEED TO CHECKOUT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
