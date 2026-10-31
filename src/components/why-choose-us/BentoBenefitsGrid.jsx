'use client';

import React from 'react';
import {
  ShieldCheck,
  Zap,
  Layers,
  Coins,
  MousePointerClick,
  TrendingUp,
  Building2,
  Headphones,
  Check,
  FileCheck2,
  Lock,
  ArrowUpRight,
  Database,
  Workflow
} from 'lucide-react';
import FlagIcon from '../FlagIcon';

export default function BentoBenefitsGrid({ onOpenModal }) {
  return (
    <section id="why-isarva-bento" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/70 mb-3">
            <span className="section-eyebrow">
              THE ISARVA ADVANTAGE
            </span>
          </div>

          {/* Space Grotesk h2 */}
          <h2>
            Built from the Ground Up for{' '}
            <span className="text-[#007a55]">Uncompromising Scale</span>
          </h2>

          {/* Standard Paragraph */}
          <p className="mt-4">
            Legacy ERPs were architected decades ago for massive IT teams. Modern lightweight apps create disconnected data silos.
            ISARVA gives you the best of both: enterprise-grade horsepower with modern agility and zero bloat.
          </p>
        </div>

        {/* 4-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Large 2x2 - Native Dual-Region Regulatory Mastery */}
          <div
            className="md:col-span-2 lg:col-span-2 lg:row-span-2 rounded-2xl bg-white border border-emerald-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-emerald group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#007a55] group-hover:scale-110 group-hover:bg-[#007a55] group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Auto-Tax Sync
                </div>
              </div>

              <h3>
                Native Dual-Region Statutory Mastery
              </h3>

              <p className="mt-3">
                Stop patching fragmented third-party compliance middleware. ISARVA natively generates QR-coded B2B/B2C invoices,
                manages automated GST e-way bills and IRN clearances in India, alongside 100% Phase-2 compliant ZATCA cryptographic
                stamping and WPS wage protection across Saudi Arabia.
              </p>

              {/* Regional Breakdown Mini Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6 pt-6 border-t border-slate-100">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2 mb-2">
                    <FlagIcon code="IN" className="w-5 h-3.5 rounded-xs shadow-2xs" />
                    <span className="text-xs font-bold text-slate-900">India Compliance Hub</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>Direct NIC Portal E-Way Bills</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>One-Click GSTR-1, 2B & 3B Reconcile</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>TDS & TCS Automated Ledger Posting</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center gap-2 mb-2">
                    <FlagIcon code="SA" className="w-5 h-3.5 rounded-xs shadow-2xs" />
                    <span className="text-xs font-bold text-slate-900">Saudi & GCC Hub</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>ZATCA Phase 2 FATOORA Integration</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>Bilingual Arabic & English Tax Receipts</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#007a55] shrink-0" />
                      <span>Mudad & Mol WPS Payroll Export</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>Updated automatically with gazetted tax notifications</span>
              <span className="text-[#007a55] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read compliance spec <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Wide 2x1 - Zero-Disruption Rapid Migration */}
          <div
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-teal-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-teal group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-[#0d9488] group-hover:scale-110 group-hover:bg-[#0d9488] group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-bold border border-teal-200/60">
                  2-4 Weeks Go-Live
                </span>
              </div>

              <h3>
                Zero-Disruption Migration from Legacy Systems
              </h3>

              <p className="mt-3">
                Fear of broken operational downtime keeps businesses trapped in obsolete software.
                Our automated ingestion pipeline extracts, verifies, and imports your historical Tally, Excel, SAP, or QuickBooks data
                without stopping a single day of counter billing or warehouse fulfillment.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500">Supported Sources:</span>
              {['Tally ERP 9 / Prime', 'Excel / CSV Masters', 'QuickBooks', 'SAP B1 / Zoho', 'Custom SQL Databases'].map((tool) => (
                <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3: Stat 1x1 - 1,000+ Enterprises */}
          <div
            className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0b1a30] text-white p-7 sm:p-8 flex flex-col justify-between border border-emerald-500/40 card-shadow-dark-emerald group transition-all duration-300"
          >
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-emerald-400 mb-2">
                Proven Scale
              </div>
              <div className="text-4xl sm:text-5xl font-black text-white font-heading tracking-tight mb-3">
                1,000<span className="text-emerald-400">+</span>
              </div>
              <h3 className="text-white">
                Thriving Enterprises
              </h3>
              <p className="mt-2 text-slate-300 text-sm">
                Powering multi-branch retail chains, wholesale FMCG distributors, manufacturing plants, and service providers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Across IN & GCC</span>
              <span className="text-emerald-400 font-semibold">99.2% Retention</span>
            </div>
          </div>

          {/* Card 4: Stat 1x1 - 99.98% High Availability */}
          <div
            className="rounded-2xl bg-white border border-blue-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-blue group"
          >
            <div>
              <div className="text-xs uppercase font-extrabold tracking-widest text-blue-600 mb-2">
                Infrastructure SLA
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-heading tracking-tight mb-3">
                99.98<span className="text-blue-600">%</span>
              </div>
              <h3>
                High-Availability Uptime
              </h3>
              <p className="mt-2">
                Tier-IV enterprise data center redundancy with ISO 27001 grade encryption and automated hourly snapshot backups.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Sub-second failover</span>
              <span className="text-blue-600 font-semibold">Continuous Mirroring</span>
            </div>
          </div>

          {/* Card 5: Tall 1x2 - Unified Single-Source Ecosystem */}
          <div
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-2xl bg-white border border-emerald-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-emerald group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#007a55] mb-6 group-hover:scale-110 group-hover:bg-[#007a55] group-hover:text-white transition-all duration-300">
                <Layers className="w-6 h-6" />
              </div>

              <h3>
                Unified Single-Source Ecosystem
              </h3>

              <p className="mt-3">
                When a cashier rings up a sale, warehouse inventory decreases, the accounting ledger posts the debit/credit,
                and CRM updates customer loyalty points in real time. Zero CSV sync jobs. Zero discrepancies.
              </p>

              {/* Connected Mesh Visualization */}
              <div className="mt-6 space-y-2.5">
                {[
                  { name: 'POS & Counter Billing', desc: 'Real-time barcode scan & receipts' },
                  { name: 'Warehouse & Inventory', desc: 'Instant batch & stock reduction' },
                  { name: 'General Accounting', desc: 'Automated double-entry journals' },
                  { name: 'Payroll & HRMS', desc: 'Direct biometric attendance sync' },
                  { name: 'CRM & Client Pipeline', desc: 'Omnichannel customer loyalty' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70 text-xs">
                    <div className="font-bold text-slate-900">{item.name}</div>
                    <div className="text-slate-500 text-[11px]">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-[#007a55] font-bold">
              100% Shared Data Core
            </div>
          </div>

          {/* Card 6: 1x1 - No Per-User Headcount Penalty */}
          <div
            className="rounded-2xl bg-white border border-orange-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-orange group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#ea580c] mb-4 group-hover:scale-110 group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-300">
                <Coins className="w-6 h-6" />
              </div>
              <h3>
                No Per-User Penalty
              </h3>
              <p className="mt-2">
                Add cashiers, warehouse assistants, and accountants without watching your software bill balloon every single month.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
              Transparent, scalable pricing
            </div>
          </div>

          {/* Card 7: 1x1 - Frictionless Human Experience */}
          <div
            className="rounded-2xl bg-white border border-purple-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-purple group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-[#7c3aed] mb-4 group-hover:scale-110 group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300">
                <MousePointerClick className="w-6 h-6" />
              </div>
              <h3>
                Intuitive & Minimal Clicks
              </h3>
              <p className="mt-2">
                Built for real operations. High-speed keyboard navigation, clean readable forms, and zero cluttered 1990s menus.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
              Staff master it in hours
            </div>
          </div>

          {/* Card 8: Wide 2x1 - Instant Financial Telemetry & AI Forecasting */}
          <div
            className="md:col-span-2 lg:col-span-2 rounded-2xl bg-white border border-indigo-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-indigo group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#4f46e5] group-hover:scale-110 group-hover:bg-[#4f46e5] group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200/60">
                  Executive Cockpit
                </span>
              </div>

              <h3>
                Live Financial Telemetry & Cash-Flow Radar
              </h3>

              <p className="mt-3">
                Don’t wait for next month’s accountant report to know if you made money.
                ISARVA provides live cash-position radar, automated aged-debtor chasing, predictive stock-out warnings,
                and instant EBITDA breakdowns by branch, SKU, and sales representative.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-slate-100 text-center">
              <div className="p-2 rounded-lg bg-slate-50">
                <div className="text-xs text-slate-500 font-medium">Month-End Close</div>
                <div className="text-sm font-bold text-slate-900">4.2x Faster</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <div className="text-xs text-slate-500 font-medium">Reconciliation</div>
                <div className="text-sm font-bold text-slate-900">100% Automated</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-50">
                <div className="text-xs text-slate-500 font-medium">Data Integrity</div>
                <div className="text-sm font-bold text-[#007a55]">Auditor Ready</div>
              </div>
            </div>
          </div>

          {/* Card 9: 1x1 - Multi-Entity & Warehouse Mesh */}
          <div
            className="rounded-2xl bg-white border border-blue-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-blue group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb] mb-4 group-hover:scale-110 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300">
                <Building2 className="w-6 h-6" />
              </div>
              <h3>
                Multi-Branch & Warehouses
              </h3>
              <p className="mt-2">
                Seamless inter-branch stock transfers, localized price rules, and consolidated group tax filings.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
              Unlimited entities & stores
            </div>
          </div>

          {/* Card 10: 1x1 - Dedicated Human Implementation Lead */}
          <div
            className="rounded-2xl bg-white border border-emerald-200/80 p-7 sm:p-8 flex flex-col justify-between card-shadow-emerald group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#007a55] mb-4 group-hover:scale-110 group-hover:bg-[#007a55] group-hover:text-white transition-all duration-300">
                <Headphones className="w-6 h-6" />
              </div>
              <h3>
                Dedicated Solutions Lead
              </h3>
              <p className="mt-2">
                No tickets thrown into black-hole queues. You get a named ERP engineer who understands your business model.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-[#007a55]">
              &lt; 15-minute emergency SLA
            </div>
          </div>

        </div>

        {/* Bottom Banner Trigger */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-[#007a55]/10 to-teal-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base sm:text-lg font-bold text-slate-900 font-heading">
              Ready to see how ISARVA ERP fits into your operations?
            </div>
            <div className="text-xs sm:text-sm text-slate-600">
              Schedule a tailored 30-minute walkthrough configured for your specific industry and statutory region.
            </div>
          </div>
          <button
            type="button"
            onClick={() => onOpenModal?.('demo', 'Why Choose Us Bento Banner')}
            className="shrink-0 px-6 py-3 rounded-xl bg-[#007a55] hover:bg-[#006546] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#007a55]/25 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Request Custom Architecture Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
}
