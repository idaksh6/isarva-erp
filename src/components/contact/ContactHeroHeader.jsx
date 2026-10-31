'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Clock, ShieldCheck, Sparkles, Headphones } from 'lucide-react';
import { renderTitleWithGradient } from '../../lib/render-title';

export default function ContactHeroHeader() {
  return (
    <section className="relative pt-28 pb-10 sm:pt-36 sm:pb-14 bg-gradient-to-b from-[#f0f8f4] via-[#e7f4ee] to-[#f4faf6] border-b border-[#d3eade]/70 overflow-hidden">
      {/* Soft atmospheric gradient orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-emerald-200/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-teal-200/25 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint grid dots */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#007a55 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="site-container relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
          <Link href="/" className="hover:text-[#007a55] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-slate-400" />
          <span className="text-[#007a55] font-semibold">Contact Us</span>
        </nav>

        {/* Section Header */}
        <div className="section-header text-left sm:text-center max-w-4xl mx-auto">
          <div className="section-eyebrow">
            LET'S CONNECT
          </div>

          <h1 className="mb-4">
            {renderTitleWithGradient('Get in Touch with Our Experts')}
          </h1>

          <p className="max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll respond within 24 hours.
          </p>

          {/* Quick Assurance Trust Chips */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Clock size={14} className="text-[#007a55]" />
              Response within 24 Hours
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <Headphones size={14} className="text-[#007a55]" />
              Dedicated Technical Consultation
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-emerald-200/80 shadow-2xs text-slate-700 font-medium">
              <ShieldCheck size={14} className="text-[#007a55]" />
              100% Confidential & Secure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
