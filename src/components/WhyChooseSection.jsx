'use client';

import React from 'react';
import {
  Layers,
  ShieldCheck,
  Store,
  TrendingUp,
  Cloud,
  Lock
} from 'lucide-react';

export default function WhyChooseSection({ whyChoose }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={24} className="text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} className="text-emerald-600" />;
      case 'Store':
        return <Store size={24} className="text-emerald-600" />;
      case 'TrendingUp':
        return <TrendingUp size={24} className="text-emerald-600" />;
      case 'Cloud':
        return <Cloud size={24} className="text-emerald-600" />;
      case 'Lock':
        return <Lock size={24} className="text-emerald-600" />;
      default:
        return <ShieldCheck size={24} className="text-emerald-600" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-slate-50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="text-xs font-bold tracking-widest text-brand-600 uppercase">
            {whyChoose?.badge || 'WHY CHOOSE ISARVA ERP?'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {whyChoose?.title || 'Everything You Need to Succeed'}
          </h2>
          <p className="text-base text-slate-600">
            {whyChoose?.subtitle || 'One platform. Multiple solutions. Built for modern businesses.'}
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChoose?.items?.map((item) => (
            <div
              key={item.id}
              className="card-feature flex items-start gap-4 bg-white"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                {getIcon(item.iconName)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
