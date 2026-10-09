'use client';

import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  QrCode,
  FileSpreadsheet,
  Receipt,
  FileCheck2
} from 'lucide-react';

export default function GstSection({ gstData }) {
  return (
    <section id="gst-compliance" className="py-20 bg-white border-t border-slate-200/70 overflow-hidden relative">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-emerald-50/70 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: India Map Illustration & Badge */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-72 sm:w-80 h-80 bg-gradient-to-tr from-emerald-50 via-teal-50 to-white rounded-3xl border border-emerald-100 p-6 flex flex-col items-center justify-center shadow-lg">
              
              {/* Map Outline Graphic SVG */}
              <svg viewBox="0 0 100 100" className="w-48 h-48 drop-shadow-md">
                <defs>
                  <linearGradient id="indiaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF9933" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#138808" />
                  </linearGradient>
                </defs>
                {/* Simplified India Outline Shape */}
                <path
                  d="M50 5 C 55 12, 60 18, 65 22 C 72 25, 80 32, 75 42 C 70 48, 65 52, 62 60 C 58 70, 52 82, 50 95 C 48 82, 42 70, 38 60 C 35 52, 30 48, 25 42 C 20 32, 28 25, 35 22 C 40 18, 45 12, 50 5 Z"
                  fill="url(#indiaGrad)"
                  stroke="#007a55"
                  strokeWidth="1.5"
                />
                {/* Ashoka Chakra Center */}
                <circle cx="50" cy="48" r="5" fill="none" stroke="#000088" strokeWidth="1" />
              </svg>

              {/* GST Compliant Seal */}
              <div className="absolute -bottom-5 bg-white border-2 border-emerald-500 rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">India Standard</div>
                  <div className="text-base font-extrabold text-slate-900 leading-tight">GST Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: GST Details & Statutory Checklist */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2.5">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {gstData?.title || 'Built for Indian Businesses'}
              </h2>
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {gstData?.subtitle ||
                  'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.'}
              </p>
            </div>

            {/* Checklist Grid (2 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {gstData?.checklist?.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl hover:bg-emerald-50/50 hover:border-emerald-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>

            {/* E-Invoice Tax Paper Graphic */}
            <div className="bg-gradient-to-r from-emerald-900 to-teal-950 text-white rounded-2xl p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-800/80 flex items-center justify-center border border-emerald-600/40">
                  <Receipt size={24} className="text-emerald-300" />
                </div>
                <div>
                  <div className="text-xs text-emerald-300 font-bold uppercase tracking-wider">Statutory Tax Invoice</div>
                  <div className="text-sm font-extrabold text-white">Automated IRN & QR Code Generation</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-emerald-800/60 px-3.5 py-1.5 rounded-lg border border-emerald-600/30 text-xs font-semibold text-emerald-200">
                <QrCode size={16} />
                <span>GST Portal API Synced</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
