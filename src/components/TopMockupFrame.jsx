import React from 'react';
import { Smartphone, Monitor, ChevronRight } from 'lucide-react';

export default function TopMockupFrame({ 
  activeTab, 
  setActiveTab, 
  isMobileView, 
  setIsMobileView 
}) {
  const tabs = [
    { id: '100', label: '(100)', isBadge: true },
    { id: 'main', label: 'Main Page' },
    { id: 'catalog', label: 'Catalog' },
    { id: 'product', label: 'Product page' },
    { id: 'cart', label: 'Cart / Menu' },
    { id: 'collection', label: 'Collection' },
  ];

  return (
    <div className={`w-full bg-[#111114] border-b border-[#222228] px-4 py-2.5 flex items-center justify-between sticky top-0 z-50 ${isMobileView ? 'rounded-t-2xl' : 'rounded-none'}`}>
      {/* Left / Center Tabs */}
      <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-1">
        {tabs.map((tab) => {
          if (tab.isBadge) {
            return (
              <span 
                key={tab.id}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-full bg-[#1e1e24] text-[#8e8e93] border border-[#2a2a32]"
              >
                {tab.label}
              </span>
            );
          }
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? 'bg-[#292930] text-white shadow-sm border border-[#3e3e48]'
                  : 'bg-[#18181c] text-[#8e8e93] hover:text-white hover:bg-[#222228]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Right Desktop / Mobile Toggle */}
      <div className="flex items-center space-x-2 pl-3 border-l border-[#222228]">
        <button
          onClick={() => setIsMobileView(!isMobileView)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all ${
            isMobileView
              ? 'bg-[#ff5533] text-white shadow-lg shadow-[#ff5533]/20'
              : 'bg-[#1e1e24] text-[#a0a0a8] hover:text-white hover:bg-[#282832]'
          }`}
          title="Toggle Mobile View"
        >
          {isMobileView ? (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile View</span>
            </>
          ) : (
            <>
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop / Mobile</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
