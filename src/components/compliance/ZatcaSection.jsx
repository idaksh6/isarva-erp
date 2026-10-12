'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, FileCheck } from 'lucide-react';
import ZatcaGraphic from './ZatcaGraphic';

export default function ZatcaSection({ zatcaData }) {
  return (
    <section
      id="compliance"
      className="w-full relative overflow-hidden bg-gradient-to-r from-[#eaf6f0] via-[#f3faf6] to-[#ebf7f1] border-y border-[#a7f3d0]/70 section-padding-sm"
    >
      {/* Soft Ambient Saudi Emerald Accents */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#007a55]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/60 blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT ZONE: Section Eyebrow, Title, Subtitle, Checklist & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow */}
            <div className="inline-block">
              <span className="section-eyebrow">
                {zatcaData?.badge || 'ZATCA FATOORA STATUTORY COMPLIANCE'}
              </span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2>
                {zatcaData?.title || 'Built for Saudi Vision 2030 Enterprises'}
              </h2>
              <p className="mt-1.5 max-w-xl mx-auto lg:mx-0">
                {zatcaData?.subtitle ||
                  'ISARVA ERP connects seamlessly with the ZATCA Fatoora portal for Phase 2 integration, generating certified Simplified & Standard Tax Invoices with cryptographic stamps.'}
              </p>
            </div>

            {/* 2-Column Statutory Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 text-left w-full max-w-xl">
              {zatcaData?.checklist?.map((item, idx) => (
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
            <div className="pt-3.5 flex flex-wrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3 w-full border-t border-emerald-200/80">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200 shadow-2xs text-xs font-semibold text-slate-700">
                <ShieldCheck size={15} className="text-[#007a55]" />
                <span>ZATCA Phase 2 Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200 shadow-2xs text-xs font-semibold text-slate-700">
                <Zap size={15} className="text-[#007a55]" />
                <span>1-Click CSID Cryptographic Stamp</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-emerald-200 shadow-2xs text-xs font-semibold text-slate-700">
                <FileCheck size={15} className="text-[#007a55]" />
                <span>Direct Fatoora Portal API</span>
              </div>
            </div>

          </div>

          {/* RIGHT ZONE: 3D Photorealistic Saudi ZATCA Tax Invoice Card */}
          <div className="lg:col-span-5 flex items-center justify-center w-full">
            <ZatcaGraphic />
          </div>

        </div>
      </div>
    </section>
  );
}
