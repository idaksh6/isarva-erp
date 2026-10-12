'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, FileText } from 'lucide-react';
import TaxInvoiceGraphic from './TaxInvoiceGraphic';

export default function GstSection({ gstData }) {
  return (
    <section
      id="gst-compliance"
      className="w-full relative overflow-hidden bg-gradient-to-r from-[#faeedd] via-[#fef7ee] to-[#f9ecdc] border-y border-[#fed7aa]/60 section-padding-sm"
    >
      {/* Soft Ambient Warm Glow Accents */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#ff9933]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#138808]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/50 blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT ZONE: Section Eyebrow, Title, Subtitle, Checklist & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow */}
            <div className="inline-block">
              <span className="section-eyebrow">
                {gstData?.badge || 'GST & STATUTORY COMPLIANCE'}
              </span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2>
                {gstData?.title || 'Built for Indian Businesses'}
              </h2>
              <p className="mt-1.5 max-w-xl mx-auto lg:mx-0">
                {gstData?.subtitle ||
                  'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.'}
              </p>
            </div>

            {/* 2-Column Statutory Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 text-left w-full max-w-xl">
              {gstData?.checklist?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span className="text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Trust Feature Pills */}
            <div className="pt-3.5 flex flex-wrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3 w-full border-t border-amber-200/70">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs text-xs font-semibold text-slate-700">
                <ShieldCheck size={15} className="text-[#007a55]" />
                <span>100% Statutory Compliant</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs text-xs font-semibold text-slate-700">
                <Zap size={15} className="text-[#007a55]" />
                <span>1-Click IRN & QR Code</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 border border-amber-200/80 shadow-2xs text-xs font-semibold text-slate-700">
                <FileText size={15} className="text-[#007a55]" />
                <span>Direct GSTN Validated</span>
              </div>
            </div>

          </div>

          {/* RIGHT ZONE: 3D Photorealistic Tax Invoice Card */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <TaxInvoiceGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
