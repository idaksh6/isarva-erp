'use client';

import React from 'react';
import { ZoomIn, Zap, CheckCircle2, CreditCard } from 'lucide-react';

export default function PosMobile({ onOpenLightbox }) {
  return (
    <section id="mobile-pos" className="py-14 lg:py-20 bg-white border-b border-gray-200 scroll-mt-20">
      <div className="site-container">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-50/80 via-white to-teal-50/80 border border-gray-200/90 p-6 sm:p-8 lg:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#059669] font-bold text-xs mb-4">
                Mobile Captain &amp; Waiter Handheld
              </div>

              <h2 className="mb-4">
                Take Orders Tableside{' '}
                <span className="bg-gradient-to-r from-[#059669] via-[#007a55] to-[#0d9488] bg-clip-text text-transparent">
                  on the Go
                </span>
              </h2>

              <p className="mb-6 max-w-xl">
                Equip waitstaff and captains with Android and iOS handheld terminals. Punch food orders, customize modifiers, collect card or UPI payments, and fire tickets straight to kitchen displays without walking back and forth to a central counter.
              </p>

              {/* 3 Quick Highlight Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8 text-left">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-200/60 shadow-2xs">
                  <Zap size={18} className="text-[#059669] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Instant KOT Fire</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-200/60 shadow-2xs">
                  <CheckCircle2 size={18} className="text-[#059669] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Fewer Order Errors</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-emerald-200/60 shadow-2xs">
                  <CreditCard size={18} className="text-[#059669] shrink-0" />
                  <span className="text-xs font-bold text-slate-800">Tableside Settle</span>
                </div>
              </div>

              {/* App Store Download Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
                {/* Google Play Store Badge */}
                <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300 transition-colors">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg"
                    alt="Google Play"
                    className="w-6 h-6 shrink-0"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      GET IT ON
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 mt-1">
                      Google Play
                    </span>
                  </div>
                </div>

                {/* Apple App Store Badge */}
                <div className="inline-flex min-h-[56px] items-center gap-3.5 rounded-2xl border border-gray-200 bg-white px-5 py-2.5 shadow-2xs cursor-default hover:border-gray-300 transition-colors">
                  <img
                    src="https://www.vectorlogo.zone/logos/apple/apple-icon.svg"
                    alt="App Store"
                    className="w-6 h-6 object-contain shrink-0"
                  />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                      Download on the
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-gray-900 mt-1">
                      App Store
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative cursor-pointer group max-w-[420px] w-full rounded-2xl overflow-hidden border border-emerald-200 shadow-xl bg-slate-900"
                onClick={() => onOpenLightbox?.('/images/pos/pos-mobile-mockup.jpg', 'ISARVA Restaurant POS Handheld Waiter App')}
                title="Click to enlarge"
              >
                <img
                  src="/images/pos/pos-mobile-mockup.jpg"
                  alt="ISARVA Restaurant POS Handheld Waiter App"
                  className="w-full h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105 object-cover block"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-[#059669] text-xs font-bold shadow-lg border border-emerald-100 inline-flex items-center gap-1.5">
                    <ZoomIn size={14} />
                    <span>Click to Enlarge</span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
