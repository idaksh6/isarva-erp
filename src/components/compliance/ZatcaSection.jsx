'use client';

import React from 'react';
import { Check, ShieldCheck } from 'lucide-react';
import ZatcaGraphic from './ZatcaGraphic';

export default function ZatcaSection({ zatcaData }) {
  const defaultChecklist = [
    'Generate compliant e-invoices',
    'Real-time integration ready',
    'QR code and XML format',
    'Stay updated with latest ZATCA regulations',
  ];

  const checklistItems =
    zatcaData?.checklist && zatcaData.checklist.length > 0
      ? zatcaData.checklist
      : defaultChecklist;

  return (
    <section
      id="compliance"
      className="w-full relative overflow-hidden bg-[#004e30] bg-gradient-to-r from-[#003822] via-[#004e30] to-[#003822] border-y border-emerald-500/30 section-padding-sm section-saudi-zatca"
    >
      {/* Subtle Ambient Radial Lighting for Depth (Velvet Smooth — Zero Dot Noise) */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* ZONE 1 (LEFT): Dotted Cyber Map of Saudi Arabia with Anchored ZATCA Compliant Pill Badge */}
          <div className="lg:col-span-3 xl:col-span-3 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[290px] aspect-square flex items-center justify-center">
              {/* Dotted Matrix Cyber Map Asset */}
              <div className="w-full h-full rounded-2xl overflow-hidden border border-emerald-500/20 shadow-2xl bg-[#003620]/60 p-2 flex items-center justify-center">
                <img
                  src="/images/zatca-saudi-map.jpg"
                  alt="Saudi Arabia ZATCA Digital Compliance Map"
                  className="w-full h-full object-contain rounded-xl"
                  loading="eager"
                />
              </div>

              {/* Anchored ZATCA Compliant Pill Badge (Exact Replica of Reference Design) */}
              <div className="absolute -bottom-2 -right-2 sm:-right-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#002f1d]/95 border-2 border-emerald-400/60 shadow-xl shadow-black/30 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div className="text-left">
                  <div className="text-sm font-black text-white uppercase tracking-wider leading-none">
                    ZATCA
                  </div>
                  <div className="text-[11px] font-bold text-emerald-300 tracking-wide leading-tight mt-0.5">
                    Compliant
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ZONE 2 (MIDDLE): High-Contrast Headline, Explanatory Paragraph & Minimalist Checklist */}
          <div className="lg:col-span-5 xl:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start space-y-3.5">
            {/* Native Heading (Space Grotesk, Pure White via .section-saudi-zatca) */}
            <h2>
              {zatcaData?.title || 'Built for Saudi Vision 2030 Enterprises'}
            </h2>

            {/* Native Paragraph (Inter, Crisp Mint-White, Zero Distraction) */}
            <p className="max-w-xl">
              {zatcaData?.subtitle ||
                'ISARVA ERP is fully compliant with ZATCA e-invoicing regulations, ensuring your business meets all requirements for Phase 1 and Phase 2.'}
            </p>

            {/* Clean Minimalist Statutory Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-2 w-full max-w-xl">
              {checklistItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center sm:justify-start gap-2.5 group text-center sm:text-left"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center shrink-0 shadow-xs font-black group-hover:scale-110 transition-transform">
                    <Check size={12} strokeWidth={3.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ZONE 3 (RIGHT): 3D Photorealistic Saudi ZATCA Tax Invoice Card */}
          <div className="lg:col-span-4 xl:col-span-4 flex items-center justify-center w-full">
            <ZatcaGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}

