'use client';

import React from 'react';
import { TrendingUp, Cpu } from 'lucide-react';

export default function AboutVisionMission() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* =========================================================================
              OUR VISION CARD (Dark #1a1f24)
              ========================================================================= */}
          <div className="bg-[#1a1f24] text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Watermark Icon */}
            <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10 text-[#10b981] pointer-events-none">
              <TrendingUp className="w-48 h-48 md:w-60 md:h-60" />
            </div>

            <div className="relative z-10">
              <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-3 lg:mb-6 block">
                Future Outlook
              </span>
              <h2 className="text-white mb-6 md:mb-8 capitalize">
                Our Vision
              </h2>
              <p className="text-lg sm:text-xl text-[#FDF8F2]/80 leading-relaxed font-normal">
                To empower global enterprises through transformative technology — driving progress, enriching experiences, and enabling smarter, sustainable growth.
              </p>
            </div>
          </div>

          {/* =========================================================================
              OUR MISSION CARD (Emerald #10b981)
              ========================================================================= */}
          <div className="bg-[#10b981] text-white p-8 sm:p-12 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Watermark Icon */}
            <div className="absolute top-0 right-0 p-6 md:p-10 opacity-20 text-white pointer-events-none">
              <Cpu className="w-48 h-48 md:w-60 md:h-60" />
            </div>

            <div className="relative z-10">
              <span className="text-[#1a1f24] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-3 lg:mb-6 block">
                Day-to-day Execution
              </span>
              <h2 className="text-white mb-6 md:mb-8 capitalize">
                Our Mission
              </h2>
              <p className="text-lg sm:text-xl text-white/95 leading-relaxed font-normal">
                We deliver scalable, innovative tech solutions that help enterprises and startups achieve growth, efficiency, and impact—driven by expertise and a commitment to client success.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
