'use client';

import React from 'react';
import {
  ArrowRight,
  Users,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ content, onOpenModal }) {
  const { hero } = content || {};

  return (
    <section className="relative overflow-hidden bg-[#e8f5ef] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#d2ecdf]">
      {/* Background Indian Landmarks & Silhouettes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] overflow-hidden flex items-end justify-center">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-emerald-950 fill-current" preserveAspectRatio="none">
          <path d="M720,80 L760,80 L760,110 L780,110 L780,320 L740,320 L740,240 C740,225 700,225 700,240 L700,320 L660,320 L660,110 L680,110 L680,80 Z" />
          <path d="M200,160 Q240,120 280,160 L280,320 L200,320 Z" />
          <path d="M1160,140 Q1200,100 1240,140 L1240,320 L1160,320 Z" />
          <path d="M480,200 Q520,160 560,200 L560,320 L480,320 Z" />
          <path d="M920,180 Q960,140 1000,180 L1000,320 L920,320 Z" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Typography, CTAs & Trust Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-block">
              <span className="text-xs font-black tracking-widest text-[#007a55] uppercase">
                {hero?.badge || 'ALL-IN-ONE ERP SOLUTIONS'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-black tracking-tight leading-[1.12] text-[#0b1a30]">
              {hero?.headlineMain || 'Smart Business Solutions for a'}{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#007a55]">
                {hero?.headlineHighlight || 'Connected Tomorrow'}
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="text-sm sm:text-[15px] text-[#334155] leading-relaxed max-w-lg font-normal">
              {hero?.subheadline ||
                'Power your restaurant, retail and business operations with ISARVA ERP - featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM in one integrated platform, fully compliant with Indian GST, e-Invoicing and e-Way Bill regulations.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenModal('started')}
                className="px-8 py-3.5 rounded-full bg-[#007a55] hover:bg-[#006848] text-white font-bold text-base shadow-lg shadow-[#007a55]/25 hover:shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2.5"
              >
                <span>{hero?.primaryCtaText || 'Get Started'}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onOpenModal('demo')}
                className="px-7 py-3.5 rounded-full bg-white/85 hover:bg-white text-[#0f172a] font-bold text-base border border-[#a4dcce] shadow-xs hover:shadow-md hover:scale-[1.02] transition-all flex items-center gap-2.5"
              >
                <span className="w-6 h-6 rounded-full bg-[#007a55] text-white flex items-center justify-center text-[11px] pl-0.5">
                  ▶
                </span>
                <span>{hero?.secondaryCtaText || 'Watch Demo'}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-7">
              {/* Trust Badge 1 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <Users size={17} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">Trusted by</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">1,000+ Businesses</div>
                </div>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <FileCheck size={17} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">GST</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Compliant</div>
                </div>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <ShieldCheck size={17} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">Secure &</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Reliable</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Transparent 3D Photorealistic Hero Devices */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            <div className="relative w-full flex items-center justify-center group transform hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/isarva-erp/images/hero-devices.png"
                alt="ISARVA Cloud ERP Dashboard, Restaurant Touch POS Terminal, and GST Thermal Receipt Printer"
                className="w-full h-auto object-contain drop-shadow-2xl block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}