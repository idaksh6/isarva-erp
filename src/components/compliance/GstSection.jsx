'use client';

import React from 'react';
import { Check, ShieldCheck, Zap, FileText } from 'lucide-react';
import TaxInvoiceGraphic from '../TaxInvoiceGraphic';

export default function GstSection({ gstData }) {
  return (
    <section
      id="compliance"
      className="w-full relative overflow-hidden bg-[#fef7ee] bg-gradient-to-b from-[#fef7ee] via-[#faf3e8] to-[#f6ecdf] border-y border-[#fed7aa]/50 pt-10 pb-16 lg:pt-14 lg:pb-24 section-india-gst"
    >
      {/* Simple, Clean Architectural India Monuments Line-Art — Edge-to-Edge Across Full Width */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <img
          src="/images/gst-india-minimal-skyline.jpg"
          alt="Clean India Monuments Line Art Silhouette - India Gate, Taj Mahal, Gateway of India, Rashtrapati Bhavan"
          className="w-full h-full object-cover object-bottom opacity-70 sm:opacity-80 mix-blend-multiply transition-opacity duration-500"
          loading="eager"
        />

        {/* Delicate top gradient fade to blend open sky seamlessly */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#fef7ee] via-[#fef7ee]/80 to-transparent pointer-events-none" />
      </div>

      <div className="site-container relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT ZONE: Section Eyebrow, Title, Subtitle, Checklist & Trust Badges */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow with Pulsing Live Sync Badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="section-eyebrow">
                {gstData?.badge || 'GST & STATUTORY COMPLIANCE'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 border border-emerald-300/80 text-[10px] font-bold text-emerald-900 tracking-wide uppercase shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Indian GST Workflows
              </span>
            </div>

            {/* Main Section Heading */}
            <div>
              <h2>
                {gstData?.title || 'Simplify GST Invoicing and Financial Compliance Workflows'}
              </h2>
              <p className="mt-2 max-w-xl mx-auto lg:mx-0">
                {gstData?.subtitle ||
                  'Manage invoicing and accounting activities with tools designed to support relevant Indian GST workflows. Organize transaction records, review tax-related reports and prepare the information needed for your compliance processes.'}
              </p>
            </div>

            {/* 2-Column Enhanced High-Contrast Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 w-full max-w-xl mx-auto lg:mx-0">
              {gstData?.checklist?.map((item, idx) => (
                <div
                  key={idx}
                  className="relative flex items-center justify-center sm:justify-start p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#007a55]/40 hover:-translate-y-0.5 transition-all duration-200 group sm:gap-3 text-center sm:text-left"
                >
                  <div className="absolute left-3.5 sm:static w-6 h-6 rounded-lg bg-[#007a55] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-[#006546] transition-all">
                    <Check size={13} strokeWidth={3.5} />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug px-8 sm:px-0 text-center sm:text-left">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Compliance Trust Feature Pills */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-2.5 sm:gap-3 w-full border-t border-emerald-950/8">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-900 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <ShieldCheck size={15} className="text-[#007a55]" />
                <span>GST-Ready Invoicing</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-900 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <Zap size={15} className="text-[#007a55]" />
                <span>IRN & QR Code Support</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-bold text-slate-900 hover:border-[#007a55]/30 hover:shadow-xs transition-all">
                <FileText size={15} className="text-[#007a55]" />
                <span>Audit Trail & Tax Summaries</span>
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
