'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutBottomCta() {
  return (
    <section className="py-16 lg:py-24 relative bg-[#1a1f24] text-white overflow-hidden">
      {/* Background Abstract Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about/agency_design_process_abstract_1773850147849.png"
          alt="Abstract Background Pattern"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.08] mix-blend-screen"
        />
      </div>

      <div className="site-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white mb-6 capitalize leading-tight">
            Ready to shape the digital future?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-[#FDF8F2]/75 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            We simplify complexity through innovation—crafting custom platforms, accelerating cloud adoption, and advancing intelligent automation aligned with your strategic goals.
          </p>

          <div className="flex justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-lg shadow-xl shadow-orange-500/30 transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
