'use client';

import React from 'react';
import {
  Utensils,
  ShoppingBag,
  ShoppingCart,
  Coffee,
  Boxes,
  Building2
} from 'lucide-react';

export default function IndustriesSection({ industries }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils size={28} className="text-emerald-600" />;
      case 'ShoppingBag':
        return <ShoppingBag size={28} className="text-emerald-600" />;
      case 'ShoppingCart':
        return <ShoppingCart size={28} className="text-emerald-600" />;
      case 'Coffee':
        return <Coffee size={28} className="text-emerald-600" />;
      case 'Boxes':
        return <Boxes size={28} className="text-emerald-600" />;
      case 'Building2':
        return <Building2 size={28} className="text-emerald-600" />;
      default:
        return <Building2 size={28} className="text-emerald-600" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="text-xs font-bold tracking-widest text-brand-600 uppercase">
            {industries?.badge || 'INDUSTRIES WE SERVE'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {industries?.title || 'Trusted by Businesses Across Multiple Industries'}
          </h2>
          <p className="text-base text-slate-600">
            {industries?.subtitle || 'From restaurants to retail, ISARVA ERP helps businesses of all sizes succeed.'}
          </p>
        </div>

        {/* 6 Industry Pills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {industries?.items?.map((ind, idx) => (
            <div
              key={idx}
              className="industry-pill group hover:shadow-lg hover:border-emerald-400 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:bg-emerald-100 group-hover:scale-105 transition-all">
                {getIcon(ind.iconName)}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
