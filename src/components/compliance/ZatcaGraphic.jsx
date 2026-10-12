'use client';

import React from 'react';
import { ShieldCheck, QrCode } from 'lucide-react';

export default function ZatcaGraphic() {
  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[410px] lg:max-w-[440px] flex items-center justify-center select-none">
      {/* Soft Ambient Green & Gold Glow */}
      <div className="absolute -inset-3 bg-emerald-600/15 rounded-3xl blur-3xl pointer-events-none" />

      {/* Realistic ZATCA Fatoora Tax Invoice Card */}
      <div className="relative z-10 w-full bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-2xl shadow-slate-900/10 rotate-1 hover:rotate-0 transition-transform duration-300">
        
        {/* Top Header: Brand & ZATCA Badge */}
        <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-md bg-[#007a55] text-white flex items-center justify-center text-2xs font-black">
                ✦
              </div>
              <span className="font-heading font-black text-sm tracking-tight text-[#007a55]">
                ISARVA ERP
              </span>
            </div>
            <div className="text-xs font-mono text-slate-500 mt-1">
              الرقم الضريبي VAT:{' '}
              <span className="font-semibold text-slate-700">300123456700003</span>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block text-2xs font-heading font-extrabold uppercase tracking-wider text-slate-900 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded">
              فاتورة ضريبية مبسطة
            </span>
            <div className="mt-1 flex items-center justify-end gap-1 text-2xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              ZATCA Phase 2 Cleared
            </div>
          </div>
        </div>

        {/* Invoice Meta Grid */}
        <div className="grid grid-cols-2 gap-2 py-2.5 text-xs border-b border-dashed border-slate-200">
          <div>
            <span className="text-slate-400 block text-2xs uppercase font-semibold">تفاصيل الفاتورة / Invoice</span>
            <div className="font-mono text-slate-800 font-semibold">FAT-SA-2026-9042</div>
            <div className="text-slate-500">12 Oct 2026 • 14:32 KSA</div>
          </div>
          <div className="text-right sm:text-left">
            <span className="text-slate-400 block text-2xs uppercase font-semibold">العميل / Billed To</span>
            <div className="font-semibold text-slate-800 truncate">Al-Diwan Gourmet LLC</div>
            <div className="font-mono text-slate-500 text-2xs">CR: 1010892341</div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="py-2.5">
          <div className="grid grid-cols-12 gap-1 text-2xs font-bold uppercase text-slate-400 pb-1.5 border-b border-slate-100">
            <div className="col-span-5">البند / Item</div>
            <div className="col-span-2 text-center">الكمية</div>
            <div className="col-span-2 text-right">ضريبة 15%</div>
            <div className="col-span-3 text-right">المجموع (SAR)</div>
          </div>

          <div className="divide-y divide-slate-50 text-xs">
            <div className="grid grid-cols-12 gap-1 py-1.5 items-center">
              <div className="col-span-5 font-medium text-slate-800 truncate">POS Touch Terminal (KSA)</div>
              <div className="col-span-2 text-center font-mono text-slate-600">2</div>
              <div className="col-span-2 text-right font-mono text-slate-600">450.00</div>
              <div className="col-span-3 text-right font-mono font-semibold text-slate-900">3,450.00</div>
            </div>

            <div className="grid grid-cols-12 gap-1 py-1.5 items-center">
              <div className="col-span-5 font-medium text-slate-800 truncate">ZATCA Phase 2 Cloud Sync</div>
              <div className="col-span-2 text-center font-mono text-slate-600">1</div>
              <div className="col-span-2 text-right font-mono text-slate-600">180.00</div>
              <div className="col-span-3 text-right font-mono font-semibold text-slate-900">1,380.00</div>
            </div>
          </div>
        </div>

        {/* Calculation Totals */}
        <div className="bg-slate-50/80 rounded-xl p-2.5 space-y-1 text-xs border border-slate-100">
          <div className="flex justify-between text-slate-500">
            <span>المجموع الفرعي (Subtotal):</span>
            <span className="font-mono">SAR 4,200.00</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>ضريبة القيمة المضافة 15% (VAT):</span>
            <span className="font-mono">SAR 630.00</span>
          </div>
          <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-200/60 text-sm">
            <span className="font-heading">الإجمالي المستحق (Total SAR):</span>
            <span className="font-mono text-[#007a55]">SAR 4,830.00</span>
          </div>
        </div>

        {/* ZATCA QR Code & Cryptographic Stamp Footer */}
        <div className="pt-3 mt-2.5 border-t border-dashed border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
              <QrCode size={30} className="text-[#007a55]" />
            </div>
            <div>
              <div className="text-2xs font-extrabold text-slate-900 uppercase tracking-wide">
                رمز الاستجابة السريع ZATCA
              </div>
              <div className="text-2xs text-slate-500 font-mono">
                Cryptographic Stamp (CSID)
              </div>
              <div className="text-2xs text-emerald-700 font-semibold mt-0.5">
                ✓ Cryptographically Verified
              </div>
            </div>
          </div>

          <div className="text-right">
            <span className="inline-flex items-center gap-1 text-2xs font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-300 px-2 py-0.5 rounded-full">
              <ShieldCheck size={11} /> Fatoora Phase 2
            </span>
          </div>
        </div>

      </div>

      {/* Floating Pill Badges for Depth */}
      <div className="absolute -top-3 -right-3 sm:-right-5 z-20 bg-white border border-slate-200/80 shadow-lg px-2.5 py-1 rounded-full flex items-center gap-1.5 text-2xs font-bold text-slate-800">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        ZATCA Phase 2 Ready
      </div>

      <div className="absolute -bottom-3 -left-3 sm:-left-5 z-20 bg-white border border-slate-200/80 shadow-lg px-2.5 py-1 rounded-full flex items-center gap-1.5 text-2xs font-bold text-slate-800">
        <ShieldCheck size={13} className="text-[#007a55]" />
        15% Saudi Standard VAT
      </div>
    </div>
  );
}
