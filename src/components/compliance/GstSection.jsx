'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, FileText } from 'lucide-react';
import TaxInvoiceGraphic from '../TaxInvoiceGraphic';

export default function GstSection({ gstData }) {
  return (
    <section
      id="compliance"
      className="w-full relative overflow-hidden bg-gradient-to-br from-[#fffdf9] via-[#f1f9f5] to-[#eaf6f0] border-y border-emerald-950/10 section-padding-sm"
    >
      {/* Precision Fintech Dot-Matrix & Micro-Line Mesh */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(0, 122, 85, 0.22) 1.2px, transparent 0),
            linear-gradient(to right, rgba(245, 158, 11, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 122, 85, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px, 48px 48px, 48px 48px',
          maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%, #000 45%, transparent 100%)',
        }}
      />

      {/* Radiant High-Depth Ambient Lighting Orbs */}
      <div className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-gradient-to-br from-[#ff9933]/25 via-amber-300/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-[550px] h-[550px] bg-gradient-to-tl from-[#007a55]/25 via-emerald-400/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[480px] h-[480px] bg-white/70 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Precision Grid Corner Crosshairs */}
      <span className="hidden md:block absolute top-6 left-8 font-mono text-emerald-800/20 text-xs select-none pointer-events-none">+</span>
      <span className="hidden md:block absolute top-6 right-8 font-mono text-emerald-800/20 text-xs select-none pointer-events-none">+</span>
      <span className="hidden md:block absolute bottom-6 left-8 font-mono text-emerald-800/20 text-xs select-none pointer-events-none">+</span>
      <span className="hidden md:block absolute bottom-6 right-8 font-mono text-emerald-800/20 text-xs select-none pointer-events-none">+</span>

      <div className="site-container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT ZONE: Section Eyebrow, Title, Subtitle, Checklist & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow with Pulsing Live Sync Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="section-eyebrow">
                {gstData?.badge || 'GST & STATUTORY COMPLIANCE'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/80 border border-emerald-300/60 text-[10px] font-bold text-emerald-800 tracking-wide uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live GSTN Sync
              </span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2>
                {gstData?.title || 'Built for Indian Businesses'}
              </h2>
              <p className="mt-2 max-w-xl mx-auto lg:mx-0">
                {gstData?.subtitle ||
                  'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.'}
              </p>
            </div>

            {/* 2-Column Enhanced Glassmorphic Statutory Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-left w-full max-w-xl">
              {gstData?.checklist?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 sm:p-3 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-[#007a55]/40 hover:bg-white hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-[#006546] transition-all">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Trust Feature Pills */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3 w-full border-t border-emerald-950/8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <ShieldCheck size={15} className="text-[#007a55]" />
                <span>100% Statutory Compliant</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <Zap size={15} className="text-[#007a55]" />
                <span>1-Click IRN & QR Code</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 backdrop-blur-sm border border-slate-200/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <FileText size={15} className="text-[#007a55]" />
                <span>Direct GSTN Validated</span>
              </div>
            </div>

          </div>

          {/* RIGHT ZONE: 3D Photorealistic Tax Invoice Card with Radar Backing */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            {/* Concentric Decorative Compliance Radar Rings */}
            <div className="absolute -inset-6 sm:-inset-10 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-dashed border-[#007a55]/20 animate-[spin_100s_linear_infinite]" />
              <div className="w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] rounded-full border border-amber-500/15" />
            </div>

            <TaxInvoiceGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
