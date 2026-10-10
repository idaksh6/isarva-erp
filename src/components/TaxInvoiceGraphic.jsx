'use client';

import React from 'react';

export default function TaxInvoiceGraphic() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px] flex items-center justify-center lg:justify-end select-none">
      
      {/* Dynamic Waving Indian Tricolor Flag Ribbon (Curving behind invoice to the right edge) */}
      <div className="absolute -right-12 sm:-right-16 -top-6 w-48 sm:w-60 lg:w-72 h-[120%] pointer-events-none z-0 opacity-95 overflow-visible">
        <svg
          viewBox="0 0 240 280"
          className="w-full h-full object-contain filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Saffron Wave */}
          <path
            d="M 10,60 
               C 70,20 120,80 180,35 
               C 210,15 235,35 250,55 
               L 250,95 
               C 230,75 205,55 180,75 
               C 120,120 70,60 10,100 Z"
            fill="#FF9933"
          />

          {/* Middle White Wave */}
          <path
            d="M 10,100 
               C 70,60 120,120 180,75 
               C 205,55 230,75 250,95 
               L 250,135 
               C 230,115 205,95 180,115 
               C 120,160 70,100 10,140 Z"
            fill="#FFFFFF"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth="0.5"
          />

          {/* Bottom Green Wave */}
          <path
            d="M 10,140 
               C 70,100 120,160 180,115 
               C 205,95 230,115 250,135 
               L 250,175 
               C 230,155 205,135 180,155 
               C 120,200 70,140 10,180 Z"
            fill="#138808"
          />
        </svg>
      </div>

      {/* 3D Angled Photorealistic Tax Invoice Card */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[310px] bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-2xl shadow-slate-800/10 rotate-2 hover:rotate-0 transition-transform duration-300">
        
        {/* Invoice Top Header: Brand Logo & Title + Stamp Icon */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-1.5">
            {/* Hexagon/Emblem Icon */}
            <div className="w-5 h-5 rounded-md bg-[#007a55] text-white flex items-center justify-center text-[10px] font-black">
              ✦
            </div>
            <span className="font-heading font-black text-sm tracking-tight text-[#007a55]">
              ISARVA
            </span>
          </div>

          {/* Top-Right Decorative Green Stamp */}
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center text-[11px] font-black">
            ⚡
          </div>
        </div>

        {/* Invoice Title & e-Invoice Compliant Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="font-heading font-bold text-base text-slate-900 tracking-tight">
            Tax Invoice
          </span>
          <div className="bg-[#007a55] text-white px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-bold tracking-tight shadow-2xs">
            e-Invoice Compliant
          </div>
        </div>

        {/* Skeleton Invoice Rows / Placeholders */}
        <div className="space-y-2 mb-4">
          <div className="flex gap-2">
            <div className="h-1.5 bg-slate-200 rounded w-1/3" />
            <div className="h-1.5 bg-slate-100 rounded w-2/3" />
          </div>
          <div className="flex gap-2">
            <div className="h-1.5 bg-slate-200 rounded w-1/2" />
            <div className="h-1.5 bg-slate-100 rounded w-1/2" />
          </div>
          <div className="h-1.5 bg-slate-100 rounded w-full" />
        </div>

        {/* High Definition IRN QR Code Graphic */}
        <div className="w-full flex justify-center py-1">
          <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-xs">
            <svg
              viewBox="0 0 100 100"
              className="w-24 h-24 sm:w-28 sm:h-28 text-slate-900"
              fill="currentColor"
            >
              {/* Top-Left Finder */}
              <rect x="5" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="13" y="13" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* Top-Right Finder */}
              <rect x="67" y="5" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="75" y="13" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* Bottom-Left Finder */}
              <rect x="5" y="67" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="4" rx="2" />
              <rect x="13" y="75" width="12" height="12" fill="currentColor" rx="1" />
              
              {/* Data matrix modules */}
              <rect x="38" y="8" width="6" height="6" />
              <rect x="48" y="8" width="6" height="6" />
              <rect x="38" y="18" width="6" height="6" />
              <rect x="54" y="24" width="6" height="6" />
              
              <rect x="8" y="38" width="6" height="6" />
              <rect x="18" y="44" width="6" height="6" />
              <rect x="8" y="54" width="6" height="6" />
              
              <rect x="38" y="38" width="8" height="8" rx="1" />
              <rect x="52" y="38" width="6" height="6" />
              <rect x="62" y="44" width="6" height="6" />
              <rect x="74" y="38" width="6" height="6" />
              <rect x="84" y="44" width="6" height="6" />
              
              <rect x="40" y="52" width="6" height="6" />
              <rect x="52" y="52" width="8" height="8" rx="1" />
              <rect x="66" y="56" width="6" height="6" />
              <rect x="78" y="52" width="6" height="6" />
              
              <rect x="38" y="68" width="6" height="6" />
              <rect x="48" y="74" width="6" height="6" />
              <rect x="58" y="68" width="6" height="6" />
              <rect x="68" y="74" width="8" height="8" rx="1" />
              <rect x="82" y="68" width="6" height="6" />
              
              <rect x="38" y="84" width="8" height="8" rx="1" />
              <rect x="52" y="84" width="6" height="6" />
              <rect x="64" y="86" width="6" height="6" />
              <rect x="76" y="84" width="8" height="8" rx="1" />
            </svg>
          </div>
        </div>

      </div>

    </div>
  );
}

