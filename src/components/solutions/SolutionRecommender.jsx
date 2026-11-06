'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

const INDUSTRIES = [
  { id: 'restaurant', label: 'Restaurant & Dining' },
  { id: 'retail', label: 'Retail & Supermarket' },
  { id: 'trading', label: 'Trading & Distribution' },
  { id: 'manufacturing', label: 'Manufacturing & Assembly' },
  { id: 'services', label: 'Services & Consultancy' },
];

const SCALES = [
  { id: 'single', label: '1 Outlet / Office' },
  { id: 'multi', label: '2 – 5 Branches' },
  { id: 'enterprise', label: '6+ Enterprise Locations' },
];

const OBJECTIVES = [
  { id: 'billing', label: 'High-Speed Billing & POS' },
  { id: 'compliance', label: 'Automated GST / Tax Compliance' },
  { id: 'payroll', label: 'Biometric Attendance & Payroll' },
  { id: 'crm', label: 'Sales Pipeline & Lead Conversion' },
  { id: 'all', label: 'All-in-One Complete Suite' },
];

const RECOMMENDATION_MAP = {
  restaurant: {
    primary: 'ISARVA Restaurant POS Suite',
    badge: 'F&B Recommended',
    description:
      'Includes Table Floor Plan, Digital KOT, KDS Kitchen Display, Recipe Inventory Deduction, Swiggy/Zomato Aggregators, and Daily Cash Register.',
    link: '/restaurant-pos',
    modules: ['Restaurant POS', 'BillSoft Accounting', 'Inventory Deduction'],
  },
  retail: {
    primary: 'Retail POS & BillSoft Unified Engine',
    badge: 'Retail Recommended',
    description:
      'Barcode barcode scanning at checkout, instant GST invoice printing, customer loyalty wallet, and centralized multi-warehouse stock replenishment.',
    link: '/billsoft',
    modules: ['Retail Billing', 'BillSoft Accounting', 'Multi-Store Inventory'],
  },
  trading: {
    primary: 'BillSoft Enterprise & Distribution Suite',
    badge: 'B2B Wholesale',
    description:
      'Bulk batch tracking, expiry date monitoring, GST E-Way bill generation, automated accounts receivable aging, and customer credit limit locks.',
    link: '/billsoft',
    modules: ['BillSoft Accounting', 'CRM Pipeline', 'Inventory & Dispatch'],
  },
  manufacturing: {
    primary: 'Manufacturing Core & Multi-Branch ERP',
    badge: 'Production & Assembly',
    description:
      'Bill of Materials (BOM), production stage tracking, job order processing, raw material wastage analysis, and workforce shift attendance.',
    link: '/why-choose-us',
    modules: ['Production Ledger', 'Inventory & BOM', 'HRMS & Payroll'],
  },
  services: {
    primary: 'CRM Pipeline & HRMS Operations Suite',
    badge: 'Professional Services',
    description:
      'Visual deal stage tracking, project milestone billing, employee biometric attendance, automated salary dispatch, and client expense ledgers.',
    link: '/crm',
    modules: ['CRM & Deals', 'HRMS & Payroll', 'BillSoft Invoicing'],
  },
};

export default function SolutionRecommender({ onOpenModal }) {
  const [selectedIndustry, setSelectedIndustry] = useState('restaurant');
  const [selectedScale, setSelectedScale] = useState('multi');
  const [selectedObjective, setSelectedObjective] = useState('all');

  const rec = RECOMMENDATION_MAP[selectedIndustry] || RECOMMENDATION_MAP.restaurant;

  return (
    <section className="section-padding bg-gradient-to-b from-[#f7fbf8] via-white to-[#f0f8f4] border-y border-slate-200/70 relative">
      <div className="site-container">
        {/* Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="section-eyebrow">SOLUTION FINDER</div>
          <h2>
            <span>Find the Perfect Solution for Your Business</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Select your industry, outlet size, and primary objective to see our recommended configuration.
          </p>
        </div>

        {/* Master Selector Container - Full width of site-container */}
        <div className="w-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border card-shadow-emerald">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Step Selection Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Industry */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#007a55] uppercase tracking-wider mb-2">
                  1. Select Your Industry
                </label>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setSelectedIndustry(ind.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        selectedIndustry === ind.id
                          ? 'bg-[#007a55] text-white shadow-sm'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Outlet Scale */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#007a55] uppercase tracking-wider mb-2">
                  2. Number of Outlets / Branches
                </label>
                <div className="flex flex-wrap gap-2">
                  {SCALES.map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      onClick={() => setSelectedScale(scale.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        selectedScale === scale.id
                          ? 'bg-[#007a55] text-white shadow-sm'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {scale.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Primary Objective */}
              <div>
                <label className="block text-xs font-mono font-bold text-[#007a55] uppercase tracking-wider mb-2">
                  3. Key Operational Goal
                </label>
                <div className="flex flex-wrap gap-2">
                  {OBJECTIVES.map((obj) => (
                    <button
                      key={obj.id}
                      type="button"
                      onClick={() => setSelectedObjective(obj.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                        selectedObjective === obj.id
                          ? 'bg-[#007a55] text-white shadow-sm'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {obj.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Result Card (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#f0f8f4] to-[#e6f4ed] border border-emerald-300/80 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-inner">
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-emerald-200 text-xs font-mono font-bold text-[#007a55]">
                  <Sparkles size={13} />
                  <span>{rec.badge}</span>
                </div>

                {/* Recommendation Title */}
                <h3 className="mb-2">
                  <span>{rec.primary}</span>
                </h3>

                <p className="mb-4">
                  {rec.description}
                </p>

                {/* Included Software Bundles */}
                <div className="pt-2 border-t border-emerald-200/60">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                    Included Modules:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {rec.modules.map((mod, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white text-xs font-semibold text-slate-800 shadow-2xs border border-emerald-200/50"
                      >
                        <Check size={12} className="text-[#007a55]" />
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-emerald-200/60 flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href={rec.link}
                  className="w-full sm:flex-1 h-11 px-5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#007a55] hover:bg-[#006546] inline-flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 hover:scale-[1.01] transition-all whitespace-nowrap"
                >
                  <span>Explore Plan</span>
                  <ArrowRight size={15} />
                </Link>
                <button
                  type="button"
                  onClick={() => onOpenModal?.('demo', rec.primary)}
                  className="w-full sm:w-auto h-11 px-5 rounded-xl text-xs sm:text-sm font-semibold bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 shadow-2xs inline-flex items-center justify-center transition-all whitespace-nowrap cursor-pointer shrink-0"
                >
                  Custom Quote
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
