'use client';

import React from 'react';
import {
  Check,
  X,
  AlertCircle,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  HelpCircle
} from 'lucide-react';

const COMPARISON_ROWS = [
  {
    feature: 'Implementation Timeline',
    category: 'Speed to Value',
    fragmented: '6–12 months of trial-and-error patchwork',
    legacy: '9–24 months with costly consulting firms',
    isarva: '2–4 weeks rapid turnkey cutover',
    isarvaHighlight: true,
  },
  {
    feature: 'Regional Statutory Compliance',
    category: 'Regulatory',
    fragmented: 'Manual CSV uploads, Excel macros & broken portal bridges',
    legacy: 'Expensive 3rd-party bolt-on plugins ($$$)',
    isarva: 'Native built-in GST & ZATCA Phase 2 clearance engine',
    isarvaHighlight: true,
  },
  {
    feature: 'Total Cost of Ownership (3-Yr)',
    category: 'Cost & ROI',
    fragmented: 'High hidden costs across 8+ recurring SaaS subscriptions',
    legacy: 'Exorbitant initial Capex + 20-22% annual maintenance fees',
    isarva: '60% lower TCO with predictable, transparent tiers',
    isarvaHighlight: true,
  },
  {
    feature: 'Staff Adoption & Learning Curve',
    category: 'Usability',
    fragmented: 'Fragmented across 5 separate incompatible apps',
    legacy: 'Steep; requires weeks of expensive employee certification',
    isarva: 'Clean, modern human UI mastered by staff in 2 days',
    isarvaHighlight: true,
  },
  {
    feature: 'Real-Time Inter-Branch Sync',
    category: 'Data Architecture',
    fragmented: 'Nightly batch syncs, stock clashes & manual reconciliation',
    legacy: 'Requires heavy server clustering and dedicated DBAs',
    isarva: 'Sub-second real-time event-driven inventory & accounting',
    isarvaHighlight: true,
  },
  {
    feature: 'User Headcount Scalability',
    category: 'Licensing',
    fragmented: 'Chaotic seat licensing across separate software vendors',
    legacy: 'Punitive per-seat monthly penalties that stifle business growth',
    isarva: 'Unlimited user expansion with zero seat penalties',
    isarvaHighlight: true,
  },
  {
    feature: 'Dedicated Support & Partnership',
    category: 'Support',
    fragmented: 'Vendors point fingers at each other when data breaks',
    legacy: 'Multi-tiered ticket queues with 48–72 hour response SLAs',
    isarva: 'Dedicated named implementation lead & < 15-min emergency SLA',
    isarvaHighlight: true,
  },
  {
    feature: 'Cloud & Mobile Accessibility',
    category: 'Infrastructure',
    fragmented: 'Requires clunky on-premise RDP or VPN tunnels',
    legacy: 'Complex gateway setup, separate expensive mobile modules',
    isarva: '100% cloud-native with secure tablet, mobile & desktop access',
    isarvaHighlight: true,
  },
];

export default function ErpComparisonTable({ onOpenModal }) {
  return (
    <section id="erp-comparison" className="section-padding bg-slate-50 relative">
      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 mb-3">
            <span className="section-eyebrow">
              ARCHITECTURAL COMPARISON
            </span>
          </div>

          <h2>
            How ISARVA Compares to the{' '}
            <span className="text-[#007a55]">Alternatives</span>
          </h2>

          <p className="mt-4">
            Compare the real operational realities of fragmented spreadsheets, monolithic legacy ERP suites,
            and ISARVA’s modern integrated architecture.
          </p>
        </div>

        {/* Responsive Table Container */}
        <div className="rounded-2xl bg-white border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px] sm:min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100/70">
                  <th scope="col" className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-slate-700 w-[26%]">
                    Operational Capability
                  </th>
                  <th scope="col" className="p-4 sm:p-6 text-xs sm:text-sm font-semibold text-slate-500 w-[24%]">
                    Fragmented Apps & Excel
                  </th>
                  <th scope="col" className="p-4 sm:p-6 text-xs sm:text-sm font-semibold text-slate-500 w-[24%]">
                    Legacy Tier-1 ERPs (SAP/Oracle)
                  </th>
                  <th
                    scope="col"
                    className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-white bg-[#007a55] w-[26%] relative"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-300" />
                        ISARVA ERP
                      </span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/20 text-white tracking-wider">
                        Recommended
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/70 transition-colors"
                  >
                    {/* Dimension / Capability */}
                    <td className="p-4 sm:p-6 font-bold text-slate-900 bg-white">
                      <div>{row.feature}</div>
                      <div className="text-[11px] font-normal text-slate-400 mt-0.5">
                        {row.category}
                      </div>
                    </td>

                    {/* Fragmented Apps */}
                    <td className="p-4 sm:p-6 text-slate-600 bg-slate-50/40">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.fragmented}</span>
                      </div>
                    </td>

                    {/* Legacy Monolithic ERPs */}
                    <td className="p-4 sm:p-6 text-slate-600 bg-slate-50/40">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>

                    {/* ISARVA ERP */}
                    <td className="p-4 sm:p-6 font-semibold text-slate-900 bg-emerald-50/30 border-l border-r border-[#007a55]/20">
                      <div className="flex items-start gap-2 text-emerald-950">
                        <Check className="w-4 h-4 text-[#007a55] shrink-0 mt-0.5 font-bold" />
                        <span className="font-semibold">{row.isarva}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Action Footnote */}
          <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-600 text-center sm:text-left">
              Want a detailed TCO comparison modeled on your current software licenses and headcount?
            </div>
            <button
              type="button"
              onClick={() => onOpenModal?.('demo', 'Why Choose Us Comparison Table')}
              className="px-5 py-2.5 rounded-xl bg-[#007a55] hover:bg-[#006546] text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all inline-flex items-center gap-2"
            >
              <span>Request Custom TCO Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
