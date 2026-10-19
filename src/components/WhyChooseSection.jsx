'use client';

import React from 'react';
import {
  Layers,
  ShieldCheck,
  Store,
  BarChart3,
  TrendingUp,
  Cloud,
  Lock,
  Zap,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  Cpu,
  Clock,
  Database,
  Headphones,
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

const ICON_MAP = {
  Layers,
  ShieldCheck,
  Store,
  BarChart3,
  TrendingUp,
  Cloud,
  Lock,
  Zap,
  CheckCircle2,
  Users,
  Smartphone,
  Sparkles,
  Cpu,
  Clock,
  Database,
  Headphones,
};

function getItemColClass(count, idx) {
  if (count === 5) {
    if (idx < 3) return 'lg:col-span-2';
    if (idx === 3) return 'lg:col-span-2 lg:col-start-2';
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2';
  }
  if (count === 3 && idx === 2) {
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1';
  }
  return '';
}

function getGridClass(count) {
  if (count <= 2) return 'grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-8';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto gap-6 sm:gap-8';
  if (count === 4) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto gap-6 sm:gap-8';
  if (count === 5) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 max-w-6xl mx-auto gap-6 sm:gap-8';
  if (count === 6) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 sm:gap-8';
  if (count <= 8) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 sm:gap-8';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto';
}

export default function WhyChooseSection({ whyChoose }) {
  const items = whyChoose?.items || [];
  const count = items.length;
  const gridLayoutClass = getGridClass(count);

  const getIcon = (iconName) => {
    const Component = ICON_MAP[iconName] || ShieldCheck;
    return <Component size={26} strokeWidth={2.2} />;
  };

  return (
    <section id="why-choose" className="relative section-padding bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f2f9f5] border-y border-[#d3eade]/70 overflow-hidden scroll-mt-20">
      <span id="features" className="absolute -top-24" />
      {/* Soft Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            {whyChoose?.badge || 'WHY CHOOSE ISARVA ERP?'}
          </div>
          <h2>
            {renderTitleWithGradient(whyChoose?.title || 'Everything You Need to Succeed')}
          </h2>
          <p>
            {whyChoose?.subtitle || 'One platform. Multiple solutions. Built for modern businesses.'}
          </p>
        </div>

        {/* Dynamic Features Grid */}
        <div className={gridLayoutClass}>
          {items.map((item, idx) => {
            const colClass = getItemColClass(count, idx);
            return (
              <div
                key={item.id || idx}
                className={`bg-white rounded-2xl border border-emerald-950/8 p-6 sm:p-7 lg:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#007a55]/30 hover:-translate-y-1.5 transition-all duration-300 min-w-0 w-full group ${colClass}`}
              >
              {/* Mint Icon Container with Generous Padding & Background */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#dcf5e9] text-[#007a55] flex items-center justify-center mb-5 sm:mb-6 shrink-0 shadow-2xs group-hover:bg-[#007a55] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="mb-2 sm:mb-2.5 min-h-0 sm:min-h-[3rem] flex items-center justify-center text-center">
                <span>{item.title}</span>
              </h3>

              {/* Description */}
              <p className="text-center">
                {item.description}
              </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


