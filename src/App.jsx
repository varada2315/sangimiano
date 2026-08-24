import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewArrivals from './components/NewArrivals';
import CategoriesGrid from './components/CategoriesGrid';
import FeaturedCollection from './components/FeaturedCollection';
import InstagramGrid from './components/InstagramGrid';
import CatalogPage from './components/CatalogPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ProductPage from './components/ProductPage';
import Toast from './components/Toast';
import LegalModal from './components/LegalModal';
import { HERO_PRODUCT } from './data/products';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  // Cart Functions
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    showToast(`${product.name} ADDED TO BAG`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    showToast('ORDER PLACED SUCCESSFULLY!');
    setCart([]);
    setIsCartOpen(false);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 2500);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] flex flex-col items-center w-full">
      {/* Main Container */}
      <div className="w-full bg-[#FAFAFA] flex flex-col flex-1 min-h-screen">
        {/* Website Header Navigation */}
        <Navbar
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          onOpenAuth={() => showToast('LOGIN FEATURE INITIALIZED')}
        />

        {/* Main Content Area based on Tab Selection */}
        <main className="flex-1 w-full bg-[#FAFAFA]">
          {(activeTab === 'home' || activeTab === 'main') && (
            <>
              {/* Hero Section */}
              <HeroSection
                onAddToCart={handleAddToCart}
                onQuickView={(p) => {
                  setSelectedProduct(p);
                  setActiveTab('product');
                }}
              />

              {/* New Arrivals Section */}
              <NewArrivals
                onAddToCart={handleAddToCart}
                onQuickView={(p) => {
                  setSelectedProduct(p);
                  setActiveTab('product');
                }}
              />

              {/* Categories Grid (T-Shirts, Hoodies, Essentials) */}
              <CategoriesGrid />

              {/* Featured Collection Section (Drip Downunder B&W Collection) */}
              <FeaturedCollection />

              {/* Instagram Feed Grid */}
              <InstagramGrid />
            </>
          )}

          {activeTab === 'catalog' && (
            <CatalogPage
              onAddToCart={handleAddToCart}
              onQuickView={(p) => {
                setSelectedProduct(p);
                setActiveTab('product');
              }}
            />
          )}

          {activeTab === 'about' && (
            <AboutPage />
          )}

          {activeTab === 'contact' && (
            <ContactPage onShowToast={showToast} />
          )}

          {activeTab === 'product' && (
            <ProductPage
              product={selectedProduct || HERO_PRODUCT}
              onBack={() => setActiveTab('catalog')}
              onAddToCart={handleAddToCart}
              onProductSelect={(p) => setSelectedProduct(p)}
            />
          )}
        </main>

        {/* Footer */}
        <Footer 
          onOpenLegal={(type) => setLegalModalType(type)}
          onSelectTab={(tab) => {
            setActiveTab(tab);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </div>

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />

      {/* Legal Pages Modal (Privacy, Refund, Terms, Disclaimer) */}
      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Notification Toast */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
