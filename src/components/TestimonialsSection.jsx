'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2.5">
          <div className="text-xs font-bold tracking-widest text-brand-600 uppercase">
            {testimonials?.badge || 'WHAT OUR CUSTOMERS SAY'}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {testimonials?.title || 'Trusted by Growing Businesses'}
          </h2>
          <p className="text-base text-slate-600">
            {testimonials?.subtitle || 'Join hundreds of satisfied businesses using ISARVA ERP.'}
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials?.items?.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-7 flex flex-col justify-between space-y-6 hover:border-emerald-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-4">
                {/* 5 Yellow Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Business Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-200/60">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-600 to-teal-500 text-white font-bold flex items-center justify-center text-sm shadow-md">
                  {item.initials || 'IS'}
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {item.location}
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
