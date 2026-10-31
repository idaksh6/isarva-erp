'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Headphones, Sparkles } from 'lucide-react';

export default function WhyUsCta({ onOpenModal }) {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="site-container relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0a1f18] to-slate-900 text-white p-8 sm:p-14 lg:p-16 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-emerald-500/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span className="section-eyebrow text-emerald-400 tracking-wider">
                ACCELERATE YOUR OPERATIONS
              </span>
            </div>

            {/* Space Grotesk h2 */}
            <h2 className="text-white">
              Ready to Replace Disconnected Chaos with{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">
                Cohesive Intelligence?
              </span>
            </h2>

            {/* Standard Paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
              Join more than 1,000 growing enterprises across India and the GCC. Eliminate manual double-entry,
              automate statutory tax filings, and gain real-time executive clarity today.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenModal?.('demo', 'Why Choose Us Bottom CTA')}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-white bg-[#007a55] hover:bg-[#006546] shadow-lg shadow-[#007a55]/30 hover:shadow-xl hover:shadow-[#007a55]/40 hover:-translate-y-0.5 transition-all duration-200 text-sm sm:text-base"
              >
                <span>Book a Free 30-Minute Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 text-sm sm:text-base backdrop-blur-md"
              >
                <Headphones className="w-4 h-4 text-emerald-400" />
                <span>Talk to an Architect</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Per-Seat Penalty</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GST & ZATCA Approved</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>ISO 27001 Redundancy</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>2-4 Weeks Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
