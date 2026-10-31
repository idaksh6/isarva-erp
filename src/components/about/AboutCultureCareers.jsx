'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function AboutCultureCareers() {
  return (
    <section className="py-14 lg:py-20 bg-[#FDF8F2] relative overflow-hidden">
      <div className="site-container relative z-10">
        
        {/* Main White Bento Container */}
        <div className="bg-white rounded-[3rem] lg:rounded-[4rem] p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#10b981]/10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* =========================================================================
              LEFT TEXT COLUMN
              ========================================================================= */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-3 inline-block">
              Join our mission
            </span>
            <h2 className="text-[#1a1f24] mb-6 capitalize leading-tight">
              Shape the future at
              <br />
              <span className="text-[#10b981]">Isarva Infotech.</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#53606b] mb-8 max-w-2xl font-normal leading-relaxed">
              We’re looking for bold thinkers who believe technology can solve the world's most complex challenges. Explore our open roles and find where you belong.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-200"
            >
              <span>View Careers & Openings</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* =========================================================================
              RIGHT IMAGE COLUMN WITH FLOATING BADGE
              ========================================================================= */}
          <div className="lg:w-2/5 w-full relative">
            <div className="relative w-full h-[260px] sm:h-[340px] md:h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/60">
              <Image
                src="/images/about/about_tech_light_v2.png"
                alt="Our Tech Culture and Team at Isarva Infotech"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>

            {/* Rotated Briefcase Badge */}
            <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-16 h-16 sm:w-20 sm:h-20 bg-[#10b981] flex rounded-2xl items-center justify-center text-white shadow-2xl transform rotate-12">
              <Briefcase className="w-8 h-8 sm:w-9 sm:h-9" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
