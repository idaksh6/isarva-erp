'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles,
  Layers,
  Activity,
  Globe2
} from 'lucide-react';
import FlagIcon from '../FlagIcon';

export default function WhyUsHero({ onOpenModal }) {
  const scrollToComparison = (e) => {
    e.preventDefault();
    const elem = document.getElementById('erp-comparison');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-[#0a192f] to-slate-900 text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#007a55]/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-emerald-500/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="site-container relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-emerald-400 font-medium">Why Choose Us</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="section-eyebrow text-emerald-400 tracking-wider">
                WHY CHOOSE ISARVA ERP
              </span>
            </div>

            {/* Space Grotesk h1 - uses global base styling */}
            <h1 className="text-white">
              Engineered for Modern Enterprises That{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Refuse to Settle
              </span>
            </h1>

            {/* Standard Paragraph - uses global base styling */}
            <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
              Tired of fragmented SaaS tools, rigid legacy ERP architectures, and exorbitant per-user pricing?
              ISARVA ERP unites operational intelligence, real-time inventory, human capital, and statutory compliance
              across India and Saudi Arabia into a single, cohesive business core.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal?.('demo', 'Why Choose ISARVA')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-white bg-[#007a55] hover:bg-[#006546] shadow-lg shadow-[#007a55]/30 hover:shadow-xl hover:shadow-[#007a55]/40 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
              >
                <span>Book a 1-on-1 Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={scrollToComparison}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 text-sm sm:text-base backdrop-blur-md"
              >
                <span>Compare with Legacy ERPs</span>
              </button>
            </div>

            {/* Value Checkpoints Strip */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Per-User Penalty</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST & ZATCA Phase 2</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-4 Weeks Rapid Go-Live</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Isometric Visual & Floating Indicators */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-teal-500/20 to-transparent blur-xl opacity-75" />

              {/* Main Visual Card Container */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-2 sm:p-3 shadow-2xl shadow-emerald-950/50 backdrop-blur-xl overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                  <Image
                    src="/images/why-us/hero-core-hub.jpg"
                    alt="ISARVA ERP Unified Business Operations Core Hub"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 550px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Vignette Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Badge: Dual Statutory Clearance */}
                <div className="absolute top-5 right-5 sm:top-6 sm:right-6 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 shadow-xl backdrop-blur-md">
                  <div className="flex items-center -space-x-1.5">
                    <FlagIcon code="IN" className="w-4 h-3 rounded-xs shadow-xs" />
                    <FlagIcon code="SA" className="w-4 h-3 rounded-xs shadow-xs" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-emerald-300">
                    Dual Statutory Engine
                  </span>
                </div>

                {/* Floating Badge: Live Telemetry */}
                <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-md">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Activity className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      System Status
                    </div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      99.98% Cloud Uptime SLA
                    </div>
                  </div>
                </div>

                {/* Floating Pill: Unified Core */}
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/30 text-[11px] font-semibold text-emerald-300">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Real-Time Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
