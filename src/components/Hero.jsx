'use client';

import React from 'react';
import {
  ArrowRight,
  Users,
  FileCheck,
  ShieldCheck
} from 'lucide-react';

export default function Hero({ content, hero: heroProp, onOpenModal }) {
  const hero = heroProp || content?.hero || {};

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eaf5f0] via-[#f2faf6] to-[#e4f4ed] section-padding-sm border-b border-[#d2ecdf]">
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Typography, CTAs & Trust Badges */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6 relative z-10">
            
            {/* Top Pill / Badge */}
            <div className="inline-block">
              <span className="section-eyebrow">
                {hero?.badge || 'ALL-IN-ONE ERP SOLUTIONS'}
              </span>
            </div>

            {/* Main Headline */}
            <h1>
              {hero?.headlineMain || 'Smart Business Solutions for a'}{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#007a55]">
                {hero?.headlineHighlight || 'Connected Tomorrow'}
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="max-w-lg">
              {hero?.subheadline ||
                'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM in one integrated platform, fully compliant with Indian GST, e-Invoicing and e-Way Bill regulations.'}
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
                <span className="w-6 h-6 rounded-full bg-[#007a55] text-white flex items-center justify-center text-xs pl-0.5">
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
                  <div className="text-xs text-slate-500 font-medium leading-none">Trusted by</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">1,000+ Businesses</div>
                </div>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <FileCheck size={17} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium leading-none">GST</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Compliant</div>
                </div>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <ShieldCheck size={17} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium leading-none">Secure &</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Reliable</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Responsive 3D Photorealistic Hero Devices Banner */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex items-center justify-center lg:justify-end w-full">
            <div className="relative w-full flex items-center justify-center lg:justify-end group">
              <img
                src="/isarva-erp/images/hero-devices.png"
                alt="ISARVA Cloud ERP Dashboard, Restaurant Touch POS Terminal, and Thermal Receipt Printer"
                className="w-full max-w-[680px] xl:max-w-[760px] 2xl:max-w-[820px] h-auto object-contain block drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}