'use client';

import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 'financial',
    icon: '💰',
    iconBg: '#fff7ed',
    iconColor: '#ea580c',
    title: 'Financial Management',
    desc: 'Manage accounting, budgeting, GST, invoicing and financial reporting with ease.',
    href: '#financial',
  },
  {
    id: 'inventory',
    icon: '📦',
    iconBg: '#eff6ff',
    iconColor: '#2563eb',
    title: 'Inventory Management',
    desc: 'Track stock, warehouse, barcodes, batches and real-time inventory levels.',
    href: '#inventory',
  },
  {
    id: 'sales',
    icon: '🛒',
    iconBg: '#f0fdf4',
    iconColor: '#16a34a',
    title: 'Sales & Purchasing',
    desc: 'Handle quotations, orders, purchases, suppliers and complete sales cycle seamlessly.',
    href: '#sales',
  },
  {
    id: 'crm',
    icon: '🤝',
    iconBg: '#faf5ff',
    iconColor: '#7c3aed',
    title: 'CRM',
    desc: 'Build stronger customer relationships and track leads, deals and activities.',
    href: '#crm',
  },
  {
    id: 'hrms',
    icon: '👥',
    iconBg: '#ecfdf5',
    iconColor: '#0d9488',
    title: 'HRMS & Workforce',
    desc: 'Manage employees, payroll, attendance, leave and performance in one place.',
    href: '#hrms',
  },
  {
    id: 'project',
    icon: '📋',
    iconBg: '#fffbeb',
    iconColor: '#d97706',
    title: 'Project Management',
    desc: 'Plan, track and deliver projects with better collaboration and resource management.',
    href: '#project',
  },
  {
    id: 'analytics',
    icon: '📊',
    iconBg: '#f0fdf4',
    iconColor: '#059669',
    title: 'Analytics & Reporting',
    desc: 'Get real-time insights with powerful dashboards and custom reports.',
    href: '#analytics',
  },
  {
    id: 'multibranch',
    icon: '🏢',
    iconBg: '#eef2ff',
    iconColor: '#4f46e5',
    title: 'Multi-Branch Management',
    desc: 'Manage multiple locations, users and departments from a single platform.',
    href: '#multibranch',
  },
];

const FEATURE_SHADOW_MAP = {
  financial: 'card-shadow-orange border-orange-200/70',
  inventory: 'card-shadow-blue border-blue-200/70',
  sales: 'card-shadow-emerald border-emerald-200/70',
  crm: 'card-shadow-purple border-purple-200/70',
  hrms: 'card-shadow-teal border-teal-200/70',
  project: 'card-shadow-orange border-amber-200/70',
  analytics: 'card-shadow-emerald border-emerald-200/70',
  multibranch: 'card-shadow-indigo border-indigo-200/70',
};

export default function ErpFeaturesGrid() {
  return (
    <section id="features" className="bg-white section-padding">
      <div className="site-container">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 lg:mb-12">
          <div className="max-w-xl">
            <span className="section-eyebrow">Our Key Features</span>
            <h2 className="mt-2">
              QuickDice{' '}
              <span style={{ color: '#007a55' }}>ERP Features</span>
            </h2>
            <p className="mt-2 max-w-lg">
              Powerful modules to manage every part of your business, designed
              for simplicity, scalability and real results.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3 sm:mt-2 flex-shrink-0">
            <a
              href="#features"
              id="erp-features-explore-all"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#007a55] hover:text-[#005a3e] transition-colors"
            >
              Explore All Features <ArrowRight size={15} />
            </a>
            <div className="flex gap-1">
              <button
                id="erp-features-prev"
                aria-label="Previous"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#007a55] hover:text-[#007a55] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                id="erp-features-next"
                aria-label="Next"
                className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#007a55] hover:text-[#007a55] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.id}
              id={`erp-feature-card-${f.id}`}
              className={`card-feature flex flex-col gap-4 ${FEATURE_SHADOW_MAP[f.id] || 'card-shadow-emerald'}`}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: f.iconBg }}
                aria-hidden="true"
              >
                {f.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-1.5 flex-1">
                <h3>{f.title}</h3>
                <p className="text-sm">{f.desc}</p>
              </div>

              {/* Link */}
              <a
                href={f.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-[#007a55] hover:text-[#005a3e] transition-colors group"
              >
                Learn More{' '}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
