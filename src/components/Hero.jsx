'use client';

import React from 'react';
import {
  ArrowRight,
  Play,
  Users,
  FileCheck,
  ShieldCheck,
  TrendingUp,
  Receipt,
  QrCode,
  Utensils,
  BarChart3
} from 'lucide-react';

export default function Hero({ content, onOpenModal }) {
  const { hero } = content || {};

  return (
    <section className="relative overflow-hidden bg-[#e8f5ef] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#d2ecdf]">
      {/* Background Indian Landmarks & Architecture Watermark Silhouettes */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] overflow-hidden flex items-end justify-center">
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-emerald-950 fill-current" preserveAspectRatio="none">
          <path d="M720,80 L760,80 L760,110 L780,110 L780,320 L740,320 L740,240 C740,225 700,225 700,240 L700,320 L660,320 L660,110 L680,110 L680,80 Z" />
          <path d="M200,160 Q240,120 280,160 L280,320 L200,320 Z" />
          <path d="M1160,140 Q1200,100 1240,140 L1240,320 L1160,320 Z" />
          <path d="M480,200 Q520,160 560,200 L560,320 L480,320 Z" />
          <path d="M920,180 Q960,140 1000,180 L1000,320 L920,320 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Typography, CTAs & Trust Badges */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Top Pill / Badge */}
            <div className="inline-block">
              <span className="text-xs font-black tracking-widest text-[#007a55] uppercase">
                {hero?.badge || 'ALL-IN-ONE ERP SOLUTIONS'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.12] text-[#0b1a30]">
              {hero?.headlineMain || 'Smart Business Solutions for a'}{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#007a55]">
                {hero?.headlineHighlight || 'Connected Tomorrow'}
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="text-base sm:text-[16px] text-[#334155] leading-relaxed max-w-xl font-normal">
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
            <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Trust Badge 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <Users size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">Trusted by</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">1,000+ Businesses</div>
                </div>
              </div>

              {/* Trust Badge 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <FileCheck size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">GST</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Compliant</div>
                </div>
              </div>

              {/* Trust Badge 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c2ebdc] text-[#007a55] flex items-center justify-center shadow-xs">
                  <ShieldCheck size={18} className="stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-[11px] text-[#64748b] font-medium leading-none">Secure &</div>
                  <div className="text-sm font-black text-[#0f172a] mt-1">Reliable</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Product Mockup Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px]">
            
            {/* 1. Main Laptop Mockup (Back Layer) */}
            <div className="w-full max-w-lg bg-[#111827] rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-slate-700/80 transform hover:scale-[1.01] transition-transform">
              
              {/* Laptop Screen Bezel Top Bar */}
              <div className="flex items-center justify-between px-2 pb-2 mb-1.5 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-300 font-semibold bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                  <span>ISARVA Cloud ERP</span>
                </div>
                <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Laptop Screen Content: ERP Dashboard */}
              <div className="bg-white rounded-xl p-3 sm:p-4 text-slate-800 grid grid-cols-12 gap-3 shadow-inner">
                
                {/* Left Mini Sidebar */}
                <div className="col-span-3 bg-[#033b2b] rounded-lg p-2.5 text-white flex flex-col justify-between hidden sm:flex">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-emerald-800/60">
                      <div className="w-5 h-5 rounded bg-emerald-400 text-emerald-950 font-black text-[10px] flex items-center justify-center">
                        IS
                      </div>
                      <span className="text-[11px] font-black tracking-tight text-white">ISARVA</span>
                    </div>

                    <div className="space-y-1.5 text-[10px]">
                      <div className="bg-emerald-700/80 text-white font-bold px-2 py-1 rounded flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                        <span>Dashboard</span>
                      </div>
                      <div className="text-emerald-200/80 hover:text-white px-2 py-1 rounded">POS Orders</div>
                      <div className="text-emerald-200/80 hover:text-white px-2 py-1 rounded">BillSoft GST</div>
                      <div className="text-emerald-200/80 hover:text-white px-2 py-1 rounded">Inventory</div>
                      <div className="text-emerald-200/80 hover:text-white px-2 py-1 rounded">HRMS Staff</div>
                      <div className="text-emerald-200/80 hover:text-white px-2 py-1 rounded">CRM Leads</div>
                    </div>
                  </div>
                  <div className="text-[9px] text-emerald-300/70 font-mono">v2.4.0 Multi-Branch</div>
                </div>

                {/* Main Dashboard Area */}
                <div className="col-span-12 sm:col-span-9 space-y-3">
                  
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Stat Card 1: Total Sales */}
                    <div className="bg-[#f8fafc] border border-slate-200/80 p-2.5 rounded-xl">
                      <div className="text-[10px] font-semibold text-slate-500">Total Sales</div>
                      <div className="text-base sm:text-lg font-black text-[#007a55] mt-0.5">
                        INR 2,48,320
                      </div>
                      <div className="text-[9px] font-bold text-emerald-600 flex items-center gap-0.5 mt-0.5">
                        <TrendingUp size={10} />
                        <span>+18.4% today</span>
                      </div>
                    </div>

                    {/* Stat Card 2: Customers */}
                    <div className="bg-[#f8fafc] border border-slate-200/80 p-2.5 rounded-xl">
                      <div className="text-[10px] font-semibold text-slate-500">Total Customers</div>
                      <div className="text-base sm:text-lg font-black text-[#007a55] mt-0.5">
                        1,268
                      </div>
                      <div className="text-[9px] font-bold text-blue-600 flex items-center gap-0.5 mt-0.5">
                        <Users size={10} />
                        <span>42 active now</span>
                      </div>
                    </div>
                  </div>

                  {/* Chart Visuals Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Bar Chart: Sales Overview */}
                    <div className="bg-[#f8fafc] border border-slate-200/80 p-2.5 rounded-xl">
                      <div className="text-[10px] font-bold text-slate-700 mb-1.5 flex justify-between items-center">
                        <span>Sales Overview</span>
                        <span className="text-[8px] text-slate-400">Weekly</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-16 pt-1 px-1">
                        {[40, 65, 85, 55, 95, 110, 80, 130].map((h, i) => (
                          <div key={i} className="flex-1 flex flex-col items-center">
                            <div
                              style={{ height: `${(h / 130) * 100}%` }}
                              className={`w-full rounded-t ${
                                i >= 5 ? 'bg-[#007a55]' : 'bg-[#a3d9c7]'
                              }`}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Donut Chart: Payment Methods */}
                    <div className="bg-[#f8fafc] border border-slate-200/80 p-2.5 rounded-xl">
                      <div className="text-[10px] font-bold text-slate-700 mb-1">Payment Methods</div>
                      <div className="flex items-center gap-2 pt-1">
                        {/* CSS Donut representation */}
                        <div className="w-12 h-12 rounded-full border-4 border-[#007a55] border-t-[#2563eb] border-r-[#f59e0b] shrink-0" />
                        <div className="text-[9px] space-y-0.5 font-medium text-slate-600">
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#007a55]" /> UPI / QR (52%)</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" /> Card (31%)</div>
                          <div className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" /> Cash (17%)</div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 2. Restaurant Touch POS Terminal Mockup (Overlapping Left/Center) */}
            <div className="absolute -bottom-6 -left-2 sm:-left-6 w-60 sm:w-68 bg-[#18212f] rounded-2xl p-2.5 shadow-2xl border border-slate-700 z-20 transform -rotate-1 hover:rotate-0 transition-transform">
              <div className="bg-slate-900 rounded-xl p-2.5 text-white space-y-2">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <Utensils size={12} className="text-emerald-400" />
                    <span className="text-[11px] font-bold text-white">ISARVA POS</span>
                  </div>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-bold border border-emerald-500/30">
                    Table #04
                  </span>
                </div>

                {/* Dish Tiles Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700/60">
                    <div className="w-full h-8 bg-amber-950/40 rounded flex items-center justify-center text-xs">🍔</div>
                    <div className="text-[9px] font-bold text-slate-200 mt-1 truncate">Crispy Burger</div>
                    <div className="text-[9px] font-bold text-emerald-400">₹180</div>
                  </div>
                  <div className="bg-slate-800 p-1.5 rounded-lg border border-slate-700/60">
                    <div className="w-full h-8 bg-red-950/40 rounded flex items-center justify-center text-xs">🍕</div>
                    <div className="text-[9px] font-bold text-slate-200 mt-1 truncate">Cheese Pizza</div>
                    <div className="text-[9px] font-bold text-emerald-400">₹320</div>
                  </div>
                </div>

                {/* Total & KOT Pay Button */}
                <div className="pt-1.5 border-t border-slate-800 flex items-center justify-between">
                  <div className="text-[10px] text-slate-400">Total: <span className="text-white font-bold">₹500.00</span></div>
                  <button className="text-[9px] font-bold bg-[#007a55] hover:bg-[#006848] text-white px-2.5 py-1 rounded-md">
                    Print KOT
                  </button>
                </div>

              </div>
            </div>

            {/* 3. POS Thermal Receipt Printer with Scannable QR Code (Overlapping Bottom Right) */}
            <div className="absolute -bottom-8 -right-2 sm:-right-4 bg-[#1e293b] rounded-2xl p-2.5 shadow-2xl border border-slate-700 w-44 sm:w-48 z-20 text-center space-y-1.5">
              
              {/* Receipt Paper coming out of printer */}
              <div className="bg-white rounded-lg p-2.5 text-slate-900 shadow-md space-y-1 border border-slate-200">
                <div className="text-[10px] font-black tracking-tight text-slate-900">GST e-Invoice</div>
                <div className="text-[8px] text-slate-500 font-mono">INV: 2026-09412</div>
                
                {/* QR Code Graphic */}
                <div className="w-16 h-16 mx-auto bg-slate-50 border border-slate-200 rounded flex items-center justify-center my-1 p-1">
                  <QrCode size={52} className="text-slate-900" />
                </div>
                
                <div className="text-[8px] font-bold text-[#007a55] bg-emerald-50 py-0.5 rounded">
                  ✓ IRN Verified GSTN
                </div>
              </div>

              {/* Printer Hardware Status LED */}
              <div className="flex items-center justify-between px-1 text-[8px] text-slate-400">
                <span className="font-mono">ISARVA Thermal 80mm</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </div>

            {/* 4. Floating Green GST Seal Badge (Top Right of Laptop) */}
            <div className="absolute -top-4 right-0 sm:right-2 bg-[#007a55] text-white rounded-2xl p-3 shadow-xl border border-emerald-400/40 z-30 flex items-center gap-3 backdrop-blur-md">
              <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-white shrink-0">
                <ShieldCheck size={22} className="text-emerald-300" />
              </div>
              <div className="text-left">
                <div className="text-xs font-black tracking-tight leading-tight">GST e-Invoice</div>
                <div className="text-[10px] text-emerald-200 font-medium">Compliant India</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}