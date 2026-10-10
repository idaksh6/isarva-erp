'use client';

import React from 'react';
import {
  Layers,
  ShieldCheck,
  Store,
  BarChart3,
  TrendingUp,
  Cloud,
  Lock
} from 'lucide-react';

export default function WhyChooseSection({ whyChoose }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={22} strokeWidth={2.4} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} strokeWidth={2.4} />;
      case 'Store':
        return <Store size={22} strokeWidth={2.4} />;
      case 'TrendingUp':
      case 'BarChart3':
        return <BarChart3 size={22} strokeWidth={2.4} />;
      case 'Cloud':
        return <Cloud size={22} strokeWidth={2.4} />;
      case 'Lock':
        return <Lock size={22} strokeWidth={2.4} />;
      default:
        return <ShieldCheck size={22} strokeWidth={2.4} />;
    }
  };

  const formatTwoLineTitle = (title) => {
    if (!title) return '';
    if (title === 'All-in-One ERP') return <>All-in-One<br />ERP</>;
    if (title === 'GST Compliance') return <>GST<br />Compliance</>;
    if (title === 'Multi-Branch Support') return <>Multi-Branch<br />Support</>;
    if (title === 'Real-Time Reports') return <>Real-Time<br />Reports</>;
    if (title === 'Cloud Based') return <>Cloud<br />Based</>;
    if (title === 'Secure & Reliable') return <>Secure &<br />Reliable</>;

    const words = title.split(' ');
    if (words.length === 2) {
      return <>{words[0]}<br />{words[1]}</>;
    } else if (words.length === 3 && words[1] === '&') {
      return <>{words[0]} &<br />{words[2]}</>;
    } else if (words.length > 2) {
      const mid = Math.ceil(words.length / 2);
      return <>{words.slice(0, mid).join(' ')}<br />{words.slice(mid).join(' ')}</>;
    }
    return title;
  };

  return (
    <section id="features" className="relative section-padding bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f2f9f5] border-y border-[#d3eade]/70 overflow-hidden">
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
            {whyChoose?.title || 'Everything You Need to Succeed'}
          </h2>
          <p>
            {whyChoose?.subtitle || 'One platform. Multiple solutions. Built for modern businesses.'}
          </p>
        </div>

        {/* 6 Features Row Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {whyChoose?.items?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-emerald-950/8 p-5 sm:p-6 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-[#007a55]/30 hover:-translate-y-1.5 transition-all duration-300 group"
            >
              {/* Circular Mint Icon Container */}
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#dcf5e9] text-[#007a55] flex items-center justify-center mb-3.5 group-hover:bg-[#007a55] group-hover:text-white group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title (Clean 2-line layout) */}
              <h3 className="mb-1.5 group-hover:text-[#007a55] transition-colors min-h-[2.85rem] flex items-center justify-center">
                <span>{formatTwoLineTitle(item.title)}</span>
              </h3>

              {/* Description */}
              <p>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

