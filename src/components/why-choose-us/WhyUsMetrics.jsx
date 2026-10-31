'use client';

import React from 'react';
import { Clock, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

const METRICS = [
  {
    icon: Zap,
    value: '4.2x',
    title: 'Faster Month-End Financial Close',
    description: 'Automated journal entries and bank reconciliations eliminate days of manual spreadsheet tallying.',
  },
  {
    icon: CheckCircle2,
    value: '85%',
    title: 'Reduction in Manual Billing Errors',
    description: 'Barcode POS scanning and master catalog validation prevent costly price discrepancies and mismatches.',
  },
  {
    icon: ShieldCheck,
    value: '100%',
    title: 'Statutory Clearance Track Record',
    description: 'Zero non-compliance notices across active enterprises under both Indian GST and Saudi ZATCA frameworks.',
  },
  {
    icon: Clock,
    value: '< 15m',
    title: 'Emergency Solution SLA',
    description: 'Direct priority escalation to a named implementation lead who knows your operational architecture.',
  },
];

export default function WhyUsMetrics() {
  return (
    <section className="py-14 sm:py-18 bg-gradient-to-r from-slate-900 via-[#071822] to-slate-900 text-white relative overflow-hidden border-y border-white/10">
      {/* Background Subtle Blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-500/40 card-shadow-dark-emerald transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Proven Impact
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight mb-2">
                  <span className="text-emerald-400">{metric.value}</span>
                </div>

                <h3 className="text-white">
                  {metric.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-300">
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
