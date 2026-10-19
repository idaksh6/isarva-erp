'use client';

import React from 'react';
import { Smartphone, ZoomIn } from 'lucide-react';

export default function CrmMobile({ onOpenLightbox }) {
  return (
    <section id="mobile-crm" className="section-padding bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="site-container">
        <div className="rounded-3xl bg-gradient-to-r from-orange-50/40 via-white to-amber-50/40 border border-slate-200/90 p-8 sm:p-10 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="section-eyebrow text-[#ea580c] mb-2.5">
                MOBILE COMPANION
              </div>

              <h2 className="mb-4">
                Run Your Sales Pipeline{' '}
                <span className="text-gradient-crm">
                  on the Go
                </span>
              </h2>

              <p className="mb-8 max-w-xl">
                Empower field sales reps to log client visits, update deal milestones, access customer contact history, and receive instant push notifications for new leads anywhere.
              </p>

              {/* App Store Download Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                {/* Google Play Store Badge */}
                <div className="inline-flex min-h-[54px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-2xs hover:border-slate-300 transition-colors cursor-default">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186A2.373 2.373 0 013 20.536V3.464c0-.648.225-1.24.609-1.65z" fill="#00C1A6"/>
                    <path d="M17.18 8.613l-3.387 3.387L3.61 1.814C4.01 1.34 4.67 1.05 5.41 1.05c.84 0 1.63.38 2.27.79l9.5 6.773z" fill="#FFD400"/>
                    <path d="M3.61 22.186l10.183-10.187 3.387 3.387-9.5 6.773c-.64.41-1.43.79-2.27.79-.74 0-1.4-.29-1.8-.763z" fill="#FF3A44"/>
                    <path d="M20.57 11.027l-3.39-2.414-3.387 3.387 3.387 3.387 3.39-2.414c1.07-.76 1.07-2.186 0-2.946z" fill="#00E676"/>
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      GET IT ON
                    </span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1">
                      Google Play
                    </span>
                  </div>
                </div>

                {/* Apple App Store Badge */}
                <div className="inline-flex min-h-[54px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-2.5 shadow-2xs hover:border-slate-300 transition-colors cursor-default">
                  <svg className="w-6 h-6 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.42c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.98.6-2.62 1.35-.57.65-1.07 1.72-.93 2.74 1 .08 2-.49 2.62-1.24z"/>
                  </svg>
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Download on the
                    </span>
                    <span className="text-sm font-extrabold text-slate-900 mt-1">
                      App Store
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div
                className="relative cursor-pointer group max-w-[360px]"
                onClick={() => onOpenLightbox('/images/crm/mockups/CRM-mobile-mockup.png', 'Isarva CRM Mobile App')}
              >
                <img
                  src="/images/crm/mockups/CRM-mobile-mockup.png"
                  alt="Isarva CRM Mobile App Mockup"
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-105 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/images/crm/crm_mobile_app_mockup.png';
                  }}
                />
                <div className="absolute inset-0 bg-slate-950/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-3xl pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 text-[#ea580c] text-xs font-bold shadow-md">
                    <ZoomIn size={13} />
                    <span>Zoom App Preview</span>
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
