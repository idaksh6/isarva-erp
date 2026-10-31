'use client';

import React from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Clock,
  CheckCircle,
  Quote,
} from 'lucide-react';

const ROI_STATS = [
  {
    value: '45%',
    label: 'Faster Billing Turnaround',
    description: 'Average reduction in counter checkout queue time across dining & retail outlets.',
    icon: TrendingUp,
    accent: '#007a55',
  },
  {
    value: '100%',
    label: 'Statutory Compliance',
    description: 'Guaranteed compliance with GST e-invoicing in India and ZATCA Phase 2 in Saudi Arabia.',
    icon: ShieldCheck,
    accent: '#2563eb',
  },
  {
    value: '3.5x',
    label: 'Faster Payroll Run',
    description: 'Biometric punches automatically calculate salaries, deductions, and tax withholdings.',
    icon: Clock,
    accent: '#7c3aed',
  },
  {
    value: '99.98%',
    label: 'Inventory Accuracy',
    description: 'Near-zero stock shrinkage across warehouses and store counters with automated BOM tracking.',
    icon: CheckCircle,
    accent: '#ea580c',
  },
];

export default function SolutionsMetricsRoi() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f3faf6] to-white relative overflow-hidden">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">QUANTIFIED VALUE</div>
          <h2>
            <span>Measurable Business Impact Across Every Department</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Switching from disconnected spreadsheets and legacy software delivers immediate, compounding operational efficiencies from day one.
          </p>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ROI_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="card-ecosystem rounded-2xl p-6 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] text-center flex flex-col items-center justify-between transition-all duration-300 hover:scale-[1.02]"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-inner"
                  style={{ background: `${stat.accent}15`, color: stat.accent }}
                >
                  <Icon size={24} />
                </div>

                <div
                  className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2"
                  style={{ fontFamily: 'var(--font-space-grotesk)', color: stat.accent }}
                >
                  {stat.value}
                </div>

                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {stat.label}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Endorsement Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl p-7 sm:p-9 bg-gradient-to-br from-[#002617] via-[#003d27] to-[#002214] text-white border border-emerald-400/30 shadow-xl relative overflow-hidden">
          <Quote className="absolute right-6 bottom-4 w-24 h-24 text-white/5 pointer-events-none" />
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 p-2 flex items-center justify-center shrink-0 shadow-inner">
              <img
                src="/favicon.png"
                alt="ISARVA Logo"
                className="w-full h-full object-contain brightness-0 invert drop-shadow"
              />
            </div>
            <div>
              <p className="text-sm sm:text-base text-emerald-50 leading-relaxed italic mb-3">
                &ldquo;Before ISARVA, reconciling point-of-sale revenues with accounting ledgers took our finance team 3 days at the end of every month. Today, everything is synchronized live. We saved 15+ hours weekly.&rdquo;
              </p>
              <div className="text-xs font-bold text-emerald-300 font-mono tracking-wide">
                OPERATIONAL DIRECTOR &bull; 8-BRANCH RETAIL CHAIN
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
