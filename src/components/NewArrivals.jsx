import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowUpRight, Eye } from 'lucide-react';
import { NEW_ARRIVALS } from '../data/products';

export default function NewArrivals({ onAddToCart, onQuickView }) {
  const [hoveredId, setHoveredId] = useState(null);
  const [addedId, setAddedId] = useState(null);
  return (
    <section className="w-full px-4 sm:px-6 py-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-baseline space-x-2">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] uppercase font-sans">
            NEW ARRIVALS
          </h2>
          <span className="text-xs font-mono font-bold text-black uppercase">
            (13)
          </span>
        </div>

        <button className="flex items-center space-x-1.5 px-4 py-1.5 rounded-md bg-[#111111] hover:bg-black text-[10px] font-mono font-bold text-white tracking-widest transition-all group">
          <span>SHOP ALL</span>
          <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>

      {/* Product Grid - 2 Columns on Mobile for High Conversion */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {NEW_ARRIVALS.map((product, idx) => {
          const isAdded = addedId === product.id;
          const isHovered = hoveredId === product.id;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-xl bg-white border border-black/[0.06] overflow-hidden flex flex-col justify-between hover:border-black/30 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div 
                onClick={() => onQuickView(product)}
                className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#F7F7F7] cursor-pointer p-3 border-b border-black/[0.05]"
              >
                <img
                  src={isHovered && product.gallery && product.gallery[1] ? product.gallery[1] : product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                />

                {/* Top Badges & Quick View Eye */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-2 py-0.5 bg-black text-white text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider">
                    {product.badge || 'NEW'}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickView(product);
                    }}
                    className="p-1.5 rounded-lg bg-white/90 backdrop-blur-sm text-[#111111] hover:bg-black hover:text-white hover:border-black transition-colors border border-black/10 cursor-pointer shadow-sm"
                    title="Quick View"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Quick-Add Size Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-white/95 border-t border-black/10 p-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center justify-center space-y-1.5 z-20">
                  <span className="text-[8px] font-mono font-bold tracking-wider text-neutral-500 uppercase">QUICK ADD SIZE</span>
                  <div className="flex space-x-1.5 w-full justify-center">
                    {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                      <button
                        key={size}
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart({ ...product, size, quantity: 1 });
                          setAddedId(product.id);
                          setTimeout(() => setAddedId(null), 2000);
                        }}
                        className="w-8 h-8 rounded-md bg-white border border-black/10 text-[9px] font-mono font-bold text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Details & One-Tap Checkout CTA */}
              <div className="p-3 sm:p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#6B6B6B]">
                    <span className="truncate">{product.category || 'MENSWEAR'}</span>
                    <div className="flex items-center space-x-1 text-amber-400 font-bold shrink-0">
                      <span className="text-[9px]">★</span>
                      <span>{product.rating || '5.0'}</span>
                    </div>
                  </div>

                  <h3 
                    onClick={() => onQuickView(product)}
                    className="text-xs sm:text-sm font-bold text-[#111111] uppercase tracking-wider line-clamp-1 group-hover:opacity-75 transition-opacity cursor-pointer"
                  >
                    {product.name}
                  </h3>

                  {/* Color Swatches */}
                  <div className="flex space-x-1 pt-1.5">
                    {['#111111', '#555555', '#A0A0A0'].map((colorHex, index) => (
                      <span
                        key={index}
                        style={{ backgroundColor: colorHex }}
                        className="w-2.5 h-2.5 rounded-full border border-black/10 shadow-xs"
                        title={index === 0 ? 'Matte Black' : index === 1 ? 'Deep Charcoal' : 'Slate Gray'}
                      />
                    ))}
                  </div>

                  {/* Price Display */}
                  <div className="flex items-baseline space-x-1.5 pt-0.5">
                    <span className="text-sm sm:text-base font-bold font-mono text-[#111111]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-[10px] sm:text-xs font-mono text-[#6B6B6B] line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Direct Add to Bag CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                    setAddedId(product.id);
                    setTimeout(() => setAddedId(null), 2000);
                  }}
                  className={`w-full mt-2 py-2.5 rounded-lg font-mono font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase flex items-center justify-center space-x-1.5 transition-all duration-200 active:scale-95 cursor-pointer ${
                    isAdded
                      ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                      : 'bg-[#111111] hover:bg-black text-white'
                  }`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>{isAdded ? 'ADDED TO BAG' : 'ADD TO BAG'}</span>
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
