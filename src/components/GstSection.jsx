'use client';

import React from 'react';
import { Check } from 'lucide-react';
import IndiaMapGraphic from './IndiaMapGraphic';
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
          
          {/* LEFT ZONE: 3D Tricolor India Map + "GST Compliant India" Seal Badge */}
          <div className="lg:col-span-4 xl:col-span-3 flex items-center justify-center lg:justify-start">
            <IndiaMapGraphic />
          </div>

          {/* CENTER ZONE: Headline, Subtitle & 2-Column Statutory Checklist */}
          <div className="lg:col-span-5 xl:col-span-6 space-y-3 text-center lg:text-left">
            <div>
              <h2 className="leading-tight text-[#0b1a30]">
                {gstData?.title || 'Built for Indian Businesses'}
              </h2>
              <p className="mt-1.5 max-w-xl mx-auto lg:mx-0">
                {gstData?.subtitle ||
                  'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.'}
              </p>
            </div>

            {/* 2-Column Checklist with Solid Round Green Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-1 text-left">
              {gstData?.checklist?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT ZONE: 3D Photorealistic Tax Invoice with e-Invoice badge, IRN QR code & Waving Tricolor Ribbon */}
          <div className="lg:col-span-3 xl:col-span-3 flex items-center justify-center lg:justify-end">
            <TaxInvoiceGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}

