'use client';

import React from 'react';
import {
  ArrowRight,
  Play,
  Users,
  FileCheck,
  ShieldCheck,
  QrCode,
  TrendingUp,
  CreditCard,
  Receipt,
  Utensils,
  CheckCircle2
} from 'lucide-react';

export default function Hero({ hero, onOpenModal }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/40 via-white to-slate-50/60 pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-300/60 text-brand-700 text-xs font-bold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              {hero?.badge || 'ALL-IN-ONE ERP SOLUTIONS'}
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              {hero?.headlineMain || 'Smart Business'}{' '}
              <br className="hidden sm:block" />
              <span className="text-brand-500">
                {hero?.headlineHighlight || 'Solutions for a'}
              </span>{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 bg-clip-text text-transparent">
                Connected Tomorrow
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              {hero?.subheadline ||
                'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM in one integrated platform, fully compliant with Indian GST, e-Invoicing and e-Way Bill regulations.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenModal('started')}
                className="btn-brand-primary text-base px-6 py-3.5"
              >
                <span>{hero?.primaryCtaText || 'Get Started'}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onOpenModal('demo')}
                className="btn-brand-outline text-base px-6 py-3.5"
              >
                <Play size={16} className="fill-brand-500 text-brand-500" />
                <span>{hero?.secondaryCtaText || 'Watch Demo'}</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="badge-trust">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-brand-600 flex items-center justify-center">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Trusted by</div>
                  <div className="text-sm font-extrabold text-slate-800">1,000+ Businesses</div>
                </div>
              </div>

              <div className="badge-trust">
                <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center">
                  <FileCheck size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">GST</div>
                  <div className="text-sm font-extrabold text-slate-800">Compliant</div>
                </div>
              </div>

              <div className="badge-trust">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-bold">Secure &</div>
                  <div className="text-sm font-extrabold text-slate-800">Reliable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Mockups Column */}
          <div className="lg:col-span-6 relative">
            
            {/* Main Laptop Screen Mockup */}
            <div className="relative bg-slate-900 rounded-2xl p-3 shadow-2xl border border-slate-800 max-w-lg mx-auto transform hover:scale-[1.01] transition-transform">
              
              {/* Laptop Screen Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 px-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="text-[10px] font-mono text-slate-400">isarva-erp.app/dashboard</div>
                <div className="text-[10px] text-emerald-400 font-bold">● LIVE</div>
              </div>

              {/* Inside Dashboard Content */}
              <div className="bg-slate-950 rounded-xl p-4 text-white space-y-3.5">
                
                {/* Top Metrics Row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Sales</div>
                    <div className="text-lg font-bold text-emerald-400">₹ 2,48,320</div>
                    <div className="text-[10px] text-emerald-500 font-medium">↑ +18.4% today</div>
                  </div>
                  <div className="bg-slate-900/90 p-3 rounded-lg border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase font-semibold">Total Customers</div>
                    <div className="text-lg font-bold text-blue-400">1,268</div>
                    <div className="text-[10px] text-blue-400 font-medium">↑ 42 new orders</div>
                  </div>
                </div>

                {/* Sales Chart Graphic Bar Representation */}
                <div className="bg-slate-900/70 p-3 rounded-lg border border-slate-800">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-slate-300">Sales Overview</span>
                    <span className="text-[10px] text-slate-400">This Month</span>
                  </div>
                  <div className="flex items-end gap-2 h-20 pt-2 px-1">
                    {[45, 65, 80, 55, 95, 110, 85, 130, 115, 140].map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          style={{ height: `${(h / 140) * 100}%` }}
                          className={`w-full rounded-t ${i === 7 || i === 9 ? 'bg-emerald-500 shadow-sm shadow-emerald-500' : 'bg-slate-700'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Touch POS Terminal Mockup */}
            <div className="absolute -bottom-6 -left-4 sm:left-2 bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 w-64 sm:w-72 animate-slideUp">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Utensils size={14} className="text-brand-500" />
                  <span className="text-xs font-bold text-slate-900">Restaurant POS</span>
                </div>
                <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">Table #04</span>
              </div>
              
              {/* Food Items Grid */}
              <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-2.5">
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">Crispy Burger</span>
                  <span className="text-brand-600 font-bold">₹180</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100 flex items-center justify-between">
                  <span className="font-medium text-slate-800">Cheese Pizza</span>
                  <span className="text-brand-600 font-bold">₹320</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs font-bold pt-1 border-t border-slate-100">
                <span>Total Bill (incl. GST):</span>
                <span className="text-brand-600 text-sm">₹500.00</span>
              </div>
            </div>

            {/* Overlapping POS Thermal Receipt Printer Mockup */}
            <div className="absolute -bottom-10 -right-2 sm:right-0 bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200 w-48 text-center space-y-1.5">
              <div className="flex items-center justify-center gap-1 text-xs font-bold text-brand-600">
                <Receipt size={14} />
                <span>GST e-Invoice</span>
              </div>
              <div className="w-16 h-16 mx-auto bg-slate-100 border border-slate-200 rounded flex items-center justify-center p-1">
                <QrCode size={48} className="text-slate-800" />
              </div>
              <div className="text-[9px] text-slate-500 font-mono">IRN: 8a42...9f01</div>
              <div className="text-[9px] font-bold text-emerald-700 bg-emerald-50 py-0.5 rounded">
                Verified by GSTN
              </div>
            </div>

            {/* Floating Top GST Shield Tag */}
            <div className="absolute -top-4 -right-2 bg-emerald-700 text-white rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2 text-xs font-bold">
              <ShieldCheck size={18} className="text-emerald-300" />
              <span>GST e-Invoice Compliant India</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
