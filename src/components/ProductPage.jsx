import React, { useState } from 'react';
import { Star, ArrowLeft, ChevronRight, RefreshCw, ShieldCheck, Truck, Ruler, Eye } from 'lucide-react';
import { ALL_PRODUCTS } from '../data/products';

export default function ProductPage({ product, onBack, onAddToCart, onProductSelect }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Matte Black');
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState('details');

  if (!product) return null;

  const galleryImages = product.gallery && product.gallery.length > 0 
    ? product.gallery 
    : [product.image];

  const handleAdd = () => {
    onAddToCart({ ...product, size: selectedSize, color: selectedColor, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="w-full bg-white text-black py-8 sm:py-12 px-4 sm:px-8 lg:px-14 flex justify-center">
      <div className="max-w-6xl w-full space-y-12">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-xs font-mono font-bold tracking-wider hover:opacity-70 transition-opacity uppercase cursor-pointer text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="space-y-4 md:sticky md:top-24">
            <div className="aspect-[4/5] bg-[#F7F7F7] border border-black/5 overflow-hidden p-4 rounded-xl group relative">
              <img
                src={galleryImages[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center rounded-lg transition-transform duration-500 scale-100 group-hover:scale-105 cursor-zoom-in"
              />
            </div>
            
            {galleryImages.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-1">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border transition-all cursor-pointer shrink-0 ${
                      activeImageIndex === idx ? 'border-black scale-105 shadow-xs' : 'border-black/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 uppercase tracking-widest">
                  {product.category || 'MENSWEAR'}
                </span>
                <div className="flex items-center space-x-1 text-black font-bold">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span>{product.rating || '5.0'}</span>
                  <span className="text-neutral-400">({product.reviewsCount || 142} Reviews)</span>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-black leading-tight">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-black font-mono">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-neutral-400 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Size Selector */}
              <div className="space-y-2 pt-2 border-t border-black/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">SELECT SIZE:</span>
                  <button
                    onClick={() => setShowSizeGuide(!showSizeGuide)}
                    className="text-black hover:underline flex items-center space-x-1 cursor-pointer font-bold animate-pulse"
                  >
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Size Guide</span>
                  </button>
                </div>
                <div className="flex space-x-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-11 h-11 rounded-lg text-xs font-bold font-mono transition-all cursor-pointer ${
                        selectedSize === size
                          ? 'bg-black text-white border border-black scale-105'
                          : 'bg-white text-neutral-500 border border-black/10 hover:text-black hover:bg-neutral-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <span className="text-[10px] font-mono text-neutral-500 block pt-1 leading-relaxed">
                  Fit advice: Standard streetwear sizing. Model is 6'2" / 82kg wearing size L.
                </span>

                {showSizeGuide && (
                  <div className="p-3.5 rounded-lg bg-neutral-50 border border-black/10 text-[11px] font-mono space-y-2 mt-2">
                    <span className="text-[#111111] font-bold block">SIZE CHEST MEASUREMENTS (INCHES):</span>
                    <div className="grid grid-cols-5 gap-1 text-center text-[#6B6B6B]">
                      <div>S: 36-38"</div>
                      <div>M: 39-41"</div>
                      <div>L: 42-44"</div>
                      <div>XL: 45-47"</div>
                      <div>2XL: 48"+</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Color Selector */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-500">COLOR:</span>
                  <span className="font-bold text-black">{selectedColor}</span>
                </div>
                <div className="flex space-x-2">
                  {['Matte Black', 'Deep Charcoal', 'Slate Gray'].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold transition-all cursor-pointer ${
                        selectedColor === color
                          ? 'bg-black text-white'
                          : 'bg-white text-neutral-500 border border-black/10 hover:text-black hover:bg-neutral-50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Quantity & CTA */}
            <div className="space-y-4 pt-4 border-t border-black/5">
              {product.stockLeft && product.stockLeft < 8 && (
                <div className="bg-amber-50 border border-amber-200/50 text-amber-800 text-[10px] font-mono px-3 py-2 rounded-lg font-bold flex items-center justify-between">
                  <span>⚡ SELLING FAST: ONLY {product.stockLeft} LEFT IN STOCK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
                </div>
              )}

              <div className="flex items-center space-x-3">
                {/* Quantity Controls */}
                <div className="flex items-center bg-white border border-black/10 rounded-lg p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-md bg-neutral-100 text-black hover:bg-neutral-200 font-bold cursor-pointer transition-colors"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-mono font-bold text-sm text-black">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-md bg-neutral-100 text-black hover:bg-neutral-200 font-bold cursor-pointer transition-colors"
                  >
                    +
                  </button>
                </div>

                {/* Add to Bag */}
                <button
                  onClick={handleAdd}
                  className={`flex-1 py-4 rounded-lg font-mono font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer ${
                    added
                      ? 'bg-emerald-600 text-white'
                      : 'bg-black text-white hover:bg-neutral-900 active:scale-95 shadow-sm'
                  }`}
                >
                  {added ? 'ADDED TO BAG' : `ADD TO BAG • $${(product.price * quantity).toFixed(0)}`}
                </button>
              </div>

              {/* Accordions */}
              <div className="pt-6 border-t border-black/5 space-y-2.5">
                <div className="border border-black/10 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'details' ? '' : 'details')}
                    className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono font-bold text-black uppercase cursor-pointer hover:bg-neutral-50"
                  >
                    <span>Description & Specifications</span>
                    <span className="text-[14px] font-mono">{activeAccordion === 'details' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'details' && (
                    <div className="px-4 pb-4 pt-1 text-xs text-neutral-500 space-y-2 border-t border-black/[0.04]">
                      <p className="leading-relaxed">{product.description}</p>
                      {product.features && product.features.length > 0 && (
                        <ul className="space-y-1.5 pt-2 border-t border-black/[0.04]">
                          {product.features.map((feat, i) => (
                            <li key={i} className="flex items-start space-x-1.5">
                              <ChevronRight className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>

                <div className="border border-black/10 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'materials' ? '' : 'materials')}
                    className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono font-bold text-black uppercase cursor-pointer hover:bg-neutral-50"
                  >
                    <span>Materials & Care</span>
                    <span className="text-[14px] font-mono">{activeAccordion === 'materials' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'materials' && (
                    <div className="px-4 pb-4 pt-2 text-xs text-neutral-500 space-y-2 border-t border-black/[0.04] leading-relaxed">
                      <p>• Constructed from 100% fine organic cotton-blend twill and performance mesh.</p>
                      <p>• Heavyweight combed knit structure designed to preserve form over repeat washes.</p>
                      <p>• Care: Machine wash cold with similar colors. Do not bleach. Tumble dry low.</p>
                    </div>
                  )}
                </div>

                <div className="border border-black/10 rounded-lg overflow-hidden bg-white">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === 'shipping' ? '' : 'shipping')}
                    className="w-full flex items-center justify-between px-4 py-3 text-xs font-mono font-bold text-black uppercase cursor-pointer hover:bg-neutral-50"
                  >
                    <span>Shipping & Free Returns</span>
                    <span className="text-[14px] font-mono">{activeAccordion === 'shipping' ? '−' : '+'}</span>
                  </button>
                  {activeAccordion === 'shipping' && (
                    <div className="px-4 pb-4 pt-2 text-xs text-neutral-500 space-y-2 border-t border-black/[0.04] leading-relaxed">
                      <p>• <b>Free Standard Express Shipping</b> on orders over $100 worldwide.</p>
                      <p>• Orders dispatched within 24 hours. Average delivery time is 2-5 business days.</p>
                      <p>• <b>30-Day Risk-Free Returns</b>: Prepaid return shipping label is included inside the box.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Conversion Trust Assurance */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/5 text-[10px] font-mono text-neutral-500">
                <div className="flex items-center space-x-1.5">
                  <Truck className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <RefreshCw className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>100% Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete the Look section */}
        <div className="pt-16 border-t border-black/10 mt-16">
          <div className="flex items-baseline space-x-2.5 mb-8">
            <h3 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-black">
              COMPLETE THE LOOK
            </h3>
            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">(YOU MAY ALSO LIKE)</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ALL_PRODUCTS.filter(p => p.id !== product.id).slice(0, 3).map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  if (onProductSelect) {
                    onProductSelect(item);
                    setActiveImageIndex(0);
                    setQuantity(1);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="group bg-white border border-black/[0.05] hover:border-black/20 hover:shadow-md transition-all duration-300 rounded-lg p-3 cursor-pointer flex flex-col justify-between"
              >
                <div className="aspect-[3/4] bg-[#F7F7F7] overflow-hidden rounded-md p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500" />
                </div>
                <div className="mt-3 space-y-1">
                  <span className="text-[9px] font-mono text-neutral-400 block uppercase tracking-wider">{item.category}</span>
                  <h4 className="text-[11px] font-bold text-black uppercase tracking-wider line-clamp-1 group-hover:opacity-75 transition-opacity">
                    {item.name}
                  </h4>
                  <span className="text-xs font-mono font-bold text-black block">${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
