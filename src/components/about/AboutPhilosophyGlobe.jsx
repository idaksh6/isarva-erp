'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutPhilosophyGlobe() {
  return (
    <section className="py-14 lg:py-20 bg-[#FDF8F2] overflow-hidden">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: PHILOSOPHY & IMPACT TEXT
              ========================================================================= */}
          <div className="w-full lg:w-1/2 lg:text-left text-center">
            <h2 className="text-[#1a1f24] mb-6 capitalize leading-tight">
              Technology should create opportunity —{' '}
              <span className="italic text-[#10b981]">not just efficiency.</span>
            </h2>

            <div className="space-y-5 text-slate-600 text-base lg:text-lg leading-relaxed mb-8">
              <p>
                As a people-first, innovation-led company, we turn complexity into clarity. Whether it’s building bespoke enterprise platforms, driving cloud adoption, or advancing intelligent automation, every solution is crafted by aligning deep technical expertise with a sharp understanding of strategic business goals.
              </p>
              <p>
                We’ve built a culture where innovation fuels impact: nurturing talent from underserved regions, enabling meaningful careers, and opening doors for women and young professionals ready to shape the digital future.
              </p>
              <p className="font-bold text-[#1a1f24] text-lg">
                Global in reach. Grounded in values. Driven by purpose.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 lg:justify-start justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-200"
              >
                <span>Contact Us</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition-all duration-200"
              >
                <span>Our Solutions</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: HIGH-RES GLOBE VISUAL
              ========================================================================= */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl ring-1 ring-[#10b981]/20">
              <Image
                src="/images/about/globe-final-hd.png"
                alt="Global Digital Impact & Opportunity"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
