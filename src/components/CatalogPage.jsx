import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye, ShieldCheck, Truck, RefreshCw, Zap, SlidersHorizontal } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';

export default function CatalogPage({ onAddToCart, onQuickView }) {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('featured');
  const [addedId, setAddedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  // Categories list based on client intake (T-shirt, Hoodies)
  const categories = ['ALL', 'T-SHIRTS', 'HOODIES', 'BLACK & WHITE ESSENTIALS'];

  // Filter & Sort Logic
  const filteredProducts = ALL_PRODUCTS.filter((p) => {
    if (selectedCategory === 'ALL') return true;
    return p.category === selectedCategory;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return (b.rating || 5) - (a.rating || 5);
    return 0;
  });

  const handleCardAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] text-[#111111] py-10 px-4 sm:px-8 lg:px-14 flex flex-col items-center">
      <div className="max-w-7xl w-full space-y-10">
        
        {/* Catalog Banner */}
        <div className="relative rounded-2xl bg-white border border-black/[0.06] p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="space-y-3 max-w-xl z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 border border-black/10 text-neutral-800 font-mono text-[10px] font-bold uppercase tracking-widest bg-white">
              <Zap className="w-3 h-3 text-black" />
              <span>DRIP DOWNUNDER CORE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black italic tracking-tight uppercase">
              DRIP DOWNUNDER CATALOG
            </h1>
            <p className="text-[#6B6B6B] text-xs sm:text-sm leading-relaxed">
              Explore premium T-Shirts, heavyweight Hoodies, and timeless black & white essentials engineered with raw Australian spirit.
            </p>
          </div>

          <div className="flex items-center space-x-6 z-10">
            <div className="text-center p-4 rounded-xl bg-[#FAFAFA] border border-black/5">
              <span className="block text-2xl font-black text-[#111111] font-mono">100%</span>
              <span className="text-[10px] font-mono text-[#6B6B6B] uppercase">SATISFACTION GUARANTEED</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white border border-black/[0.05] p-3 sm:p-4 rounded-xl">
          {/* Category Tabs */}
          <div className="flex items-center space-x-1 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2.5 rounded-lg text-[10px] sm:text-xs font-mono font-bold tracking-widest transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-[#76767A] hover:text-black hover:bg-[#F2F2F2]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="flex items-center space-x-2 text-xs font-mono text-[#6B6B6B]">
              <SlidersHorizontal className="w-4 h-4 text-black" />
              <span>SORT BY:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-black/10 text-[#111111] text-[11px] font-mono px-3 py-2.5 rounded-lg focus:border-black outline-none cursor-pointer"
            >
              <option value="featured">Featured Items</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Grid - 2 Columns on Mobile for High Conversion */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => {
            const isAdded = addedId === product.id;
            const savings = product.originalPrice ? product.originalPrice - product.price : 0;
            const isHovered = hoveredId === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative rounded-xl bg-white border border-black/[0.06] overflow-hidden hover:border-black/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Product Image Chamber */}
                <div 
                  onClick={() => onQuickView(product)}
                  className="relative w-full aspect-[4/5] bg-[#F7F7F7] overflow-hidden cursor-pointer p-4 border-b border-black/[0.05]"
                >
                  <img 
                    src={isHovered && product.gallery && product.gallery[1] ? product.gallery[1] : product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center transition-all duration-500 scale-100 group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                    {product.badge ? (
                      <span className="px-2 py-0.5 bg-black text-white text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider">
                        {product.badge}
                      </span>
                    ) : <span />}

                    {savings > 0 && (
                      <span className="px-2 py-0.5 bg-emerald-600 text-white text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider">
                        SAVE ${savings}
                      </span>
                    )}
                  </div>

                  {/* Quick View Overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-md bg-white/90 text-[#111111] font-mono font-bold text-[9px] tracking-widest flex items-center space-x-1.5 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-black" />
                      <span>QUICK VIEW</span>
                    </span>
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

                {/* Product Info Section */}
                <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B]">
                      <span>{product.category}</span>
                      <div className="flex items-center space-x-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating || '5.0'}</span>
                        <span className="text-[#6B6B6B]">({product.reviewsCount || 89})</span>
                      </div>
                    </div>

                    <h3 
                      onClick={() => onQuickView(product)}
                      className="text-base font-bold text-[#111111] uppercase tracking-wider group-hover:opacity-75 transition-opacity cursor-pointer line-clamp-1"
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

                    <p className="text-xs text-[#6B6B6B] line-clamp-2 leading-relaxed pt-1">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add to Bag CTA */}
                  <div className="pt-2 border-t border-black/[0.08] space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-bold font-mono text-[#111111]">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-xs font-mono text-[#6B6B6B] line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>

                      {product.stockLeft && (
                        <span className="text-[10px] font-mono text-amber-500 font-bold">
                          ⚡ ONLY {product.stockLeft} LEFT
                        </span>
                      )}
                    </div>

                    {/* High-Converting Add to Bag Button */}
                    <button
                      onClick={(e) => handleCardAdd(product, e)}
                      className={`w-full py-3 rounded-lg font-mono font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase flex items-center justify-center space-x-2 transition-all duration-300 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#111111] hover:bg-black text-white active:scale-95'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isAdded ? 'ADDED TO BAG' : 'ADD TO BAG'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conversion Trust Assurance Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6 border-t border-black/[0.06]">
          <div className="p-4 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-3">
            <Truck className="w-6 h-6 text-black shrink-0" />
            <div>
              <h5 className="text-xs font-bold uppercase">FREE EXPRESS SHIPPING</h5>
              <p className="text-[10px] text-[#6B6B6B]">On all orders over $100 worldwide</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-3">
            <ShieldCheck className="w-6 h-6 text-black shrink-0" />
            <div>
              <h5 className="text-xs font-bold uppercase">30-DAY GUARANTEE</h5>
              <p className="text-[10px] text-[#6B6B6B]">100% money back if not satisfied</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-3">
            <RefreshCw className="w-6 h-6 text-black shrink-0" />
            <div>
              <h5 className="text-xs font-bold uppercase">HASSLE-FREE RETURNS</h5>
              <p className="text-[10px] text-[#6B6B6B]">Pre-paid return labels included</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white border border-black/[0.05] flex items-center space-x-3">
            <Zap className="w-6 h-6 text-black shrink-0" />
            <div>
              <h5 className="text-xs font-bold uppercase">SAME-DAY DISPATCH</h5>
              <p className="text-[10px] text-[#6B6B6B]">Orders before 2 PM ship immediately</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
