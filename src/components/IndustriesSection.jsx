'use client';

import React from 'react';
import {
  Utensils,
  Store,
  ShoppingCart,
  Coffee,
  Boxes,
  Building2
} from 'lucide-react';

export default function IndustriesSection({ industries }) {
  const getIndustryDetails = (name, iconName, idx) => {
    switch (idx) {
      case 0:
        return {
          icon: <Utensils size={24} strokeWidth={2.4} />,
          bg: 'bg-[#dcfce7]',
          color: 'text-[#059669]'
        };
      case 1:
        return {
          icon: <Store size={24} strokeWidth={2.4} />,
          bg: 'bg-[#ffedd5]',
          color: 'text-[#ea580c]'
        };
      case 2:
        return {
          icon: <ShoppingCart size={24} strokeWidth={2.4} />,
          bg: 'bg-[#dbeafe]',
          color: 'text-[#2563eb]'
        };
      case 3:
        return {
          icon: <Coffee size={24} strokeWidth={2.4} />,
          bg: 'bg-[#fce7f3]',
          color: 'text-[#db2777]'
        };
      case 4:
        return {
          icon: <Boxes size={24} strokeWidth={2.4} />,
          bg: 'bg-[#f3e8ff]',
          color: 'text-[#9333ea]'
        };
      case 5:
      default:
        return {
          icon: <Building2 size={24} strokeWidth={2.4} />,
          bg: 'bg-[#ccfbf1]',
          color: 'text-[#0d9488]'
        };
    }
  };

  return (
    <section id="industries" className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            {industries?.badge || 'INDUSTRIES WE SERVE'}
          </div>
          <h2>
            {industries?.title || 'Trusted by Businesses Across Multiple Industries'}
          </h2>
          <p>
            {industries?.subtitle || 'From restaurants to retail, ISARVA ERP helps businesses of all sizes succeed.'}
          </p>
        </div>

        {/* 6 Industry Pills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {industries?.items?.map((ind, idx) => {
            const details = getIndustryDetails(ind.name, ind.iconName, idx);
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-pointer"
              >
                {/* Colored Circular Icon Badge */}
                <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${details.bg} ${details.color} flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}>
                  {details.icon}
                </div>

                {/* Industry Name */}
                <h3 className="group-hover:text-[#007a55] transition-colors min-h-[2.5rem] flex items-center justify-center">
                  {ind.name}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
