'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  const baseItems = testimonials?.items || [];
  const [isPaused, setIsPaused] = useState(false);

  // Repeat items for seamless continuous looping
  const loopedItems = [...baseItems, ...baseItems, ...baseItems];

  // Helper for Next.js basePath
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http') || imagePath.startsWith('/isarva-erp/')) return imagePath;
    return `/isarva-erp${imagePath.startsWith('/') ? imagePath : '/' + imagePath}`;
  };

  return (
    <section id="testimonials" className="relative section-padding bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f2f9f5] border-y border-[#d3eade]/70 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            {testimonials?.badge || 'WHAT OUR CUSTOMERS SAY'}
          </div>
          <h2>
            {testimonials?.title || 'Trusted by Growing Businesses'}
          </h2>
          <p>
            {testimonials?.subtitle || 'Join hundreds of satisfied businesses using ISARVA ERP.'}
          </p>
        </div>
      </div>

      {/* Continuous Infinite Marquee Loop Viewport */}
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#eff7f3] via-[#eff7f3]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#eff7f3] via-[#eff7f3]/80 to-transparent z-10" />

        {/* Continuous Looping Track */}
        <div
          className="animate-continuous-loop py-3 px-4 flex gap-6"
          style={{
            animationPlayState: isPaused ? 'paused' : 'running'
          }}
        >
          {loopedItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] lg:w-[420px] shrink-0"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-emerald-950/8 p-6 flex items-start gap-4 shadow-xs hover:shadow-xl hover:border-[#007a55]/30 hover:-translate-y-1.5 transition-all duration-300 h-full">
                
                {/* Circular Store / Restaurant Photo Avatar */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-slate-100 shadow-xs bg-slate-100">
                  {item.avatarImage ? (
                    <img
                      src={getImageUrl(item.avatarImage)}
                      alt={item.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div
                    className="w-full h-full bg-gradient-to-tr from-[#007a55] to-emerald-500 text-white font-bold items-center justify-center text-sm"
                    style={{ display: item.avatarImage ? 'none' : 'flex' }}
                  >
                    {item.initials || 'IS'}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="truncate">
                    {item.name}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    {item.location}
                  </div>

                  {/* 5 Rating Stars */}
                  <div className="flex items-center gap-1 my-2">
                    {[...Array(item.rating || 5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        size={15}
                        className="fill-[#f59e0b] text-[#f59e0b]"
                      />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="italic line-clamp-3">
                    "{item.quote}"
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
