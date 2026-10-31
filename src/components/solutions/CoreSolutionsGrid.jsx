'use client';

import React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  Store,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const SOLUTIONS_DATA = [
  {
    id: 'pos',
    category: 'pos',
    title: 'Restaurant POS Software',
    badge: 'Hospitality & QSR Suite',
    description:
      'Lightning-fast point-of-sale engineered for restaurants, cafes, food trucks, and multi-outlet dining chains. Handle rush hours with zero friction.',
    accent: '#007a55',
    accentBg: '#dcf5e9',
    badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    icon: UtensilsCrossed,
    link: '/restaurant-pos',
    actionText: 'Explore Restaurant POS',
    features: [
      'Visual table management & floor map billing',
      'Instant Kitchen Order Tickets (KOT) & KDS screen',
      'Split payments, discounts & loyalty wallet sync',
      'Offline billing engine with auto cloud sync',
    ],
  },
  {
    id: 'billsoft',
    category: 'billsoft',
    title: 'BillSoft Accounting Software',
    badge: 'Statutory GST & e-Invoicing',
    description:
      'Enterprise-grade financial accounting and invoicing built specifically for Indian GST and Saudi ZATCA compliance with automated reconciliation.',
    accent: '#2563eb',
    accentBg: '#dbeafe',
    badgeBg: 'bg-blue-50 text-blue-800 border-blue-200/80',
    icon: BarChart3,
    link: '/billsoft',
    actionText: 'Explore BillSoft Accounting',
    features: [
      '1-click IRN e-invoicing & dynamic QR generation',
      'Automated GSTR-1, 2B, 3B filing & reconciliation',
      'Multi-currency ledger & automated bank reconciliation',
      'Real-time inventory valuation & stock aging analytics',
    ],
  },
  {
    id: 'hrms',
    category: 'hrms',
    title: 'HRMS & Payroll Management',
    badge: 'Workforce & Statutory Compliance',
    description:
      'All-in-one human resource suite from recruitment and attendance tracking to biometric automation and 1-click statutory payroll dispatch.',
    accent: '#7c3aed',
    accentBg: '#ede9fe',
    badgeBg: 'bg-purple-50 text-purple-800 border-purple-200/80',
    icon: Users2,
    link: '/hrms',
    actionText: 'Explore HRMS & Payroll',
    features: [
      'Biometric machine integration & mobile GPS check-in',
      'Automated salary slips with PF, ESI, TDS & WPS compliance',
      'Leave approval hierarchies & overtime calculations',
      'Employee self-service portal with mobile app access',
    ],
  },
  {
    id: 'crm',
    category: 'crm',
    title: 'CRM & Sales Pipeline',
    badge: 'Revenue Velocity Engine',
    description:
      'Close deals faster with visual pipeline tracking, automated lead capture from web forms, WhatsApp integration, and predictive revenue forecasts.',
    accent: '#ea580c',
    accentBg: '#ffedd5',
    badgeBg: 'bg-orange-50 text-orange-800 border-orange-200/80',
    icon: Handshake,
    link: '/crm',
    actionText: 'Explore CRM & Sales',
    features: [
      'Visual drag-and-drop Kanban deal pipeline',
      'Omnichannel lead capture with WhatsApp & Email sync',
      'Automated task reminders & follow-up escalations',
      'Sales team performance metrics & commission tracking',
    ],
  },
  {
    id: 'enterprise',
    category: 'enterprise',
    title: 'Multi-Location Enterprise Mesh',
    badge: 'Centralized Branch Governance',
    description:
      'Unified command center for retail chains, franchise networks, and multi-warehouse enterprises with real-time consolidated telemetry.',
    accent: '#0d9488',
    accentBg: '#ccfbf1',
    badgeBg: 'bg-teal-50 text-teal-800 border-teal-200/80',
    icon: Store,
    link: '/why-choose-us',
    actionText: 'Discover Multi-Branch Control',
    features: [
      'Centralized catalog & dynamic branch price lists',
      'Inter-branch stock transfer requests & gate passes',
      'Consolidated P&L, balance sheets & tax summaries',
      'Granular role-based access & multi-tier approval gates',
    ],
  },
  {
    id: 'enterprise-iot',
    category: 'enterprise',
    title: 'Industrial IoT & Automation',
    badge: 'Industry 4.0 Telemetry',
    description:
      'Connect operational hardware, temperature sensors, and machine data loggers directly into your ERP for real-time monitoring and alert automation.',
    accent: '#4f46e5',
    accentBg: '#e0e7ff',
    badgeBg: 'bg-indigo-50 text-indigo-800 border-indigo-200/80',
    icon: Cpu,
    link: '/contact',
    actionText: 'Inquire for IoT Solutions',
    features: [
      'Real-time IIoT 4.0 data logger integration',
      'Cold-chain temperature & environmental telemetry',
      'Automated anomaly alerts via SMS, Email & WhatsApp',
      'Predictive equipment maintenance threshold triggers',
    ],
  },
];

export default function CoreSolutionsGrid({ activeTab, onOpenModal }) {
  const filteredSolutions =
    activeTab === 'all'
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((item) => {
          if (activeTab === 'pos') return item.category === 'pos';
          if (activeTab === 'billsoft') return item.category === 'billsoft';
          if (activeTab === 'hrms') return item.category === 'hrms';
          if (activeTab === 'crm') return item.category === 'crm';
          if (activeTab === 'enterprise') return item.category === 'enterprise';
          return true;
        });

  return (
    <section className="section-padding bg-white relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">CORE MODULES</div>
          <h2>
            <span>Modular by Design. Powerful as One.</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Choose individual modules to resolve immediate operational bottlenecks, or deploy the complete suite as your comprehensive enterprise backbone.
          </p>
        </div>

        {/* 6 Cards Responsive Grid (1 col mobile, 2 cols tablet, 3 cols desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredSolutions.map((sol, idx) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.id}
                className="card-ecosystem rounded-2xl p-6 sm:p-7 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.30)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-2xs"
                      style={{ background: sol.accentBg, color: sol.accent }}
                    >
                      <Icon size={24} strokeWidth={2.2} />
                    </div>

                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-lg border ${sol.badgeBg} truncate max-w-[200px]`}
                    >
                      {sol.badge}
                    </span>
                  </div>

                  {/* Title (Native semantic h3 without styling classes per GEMINI.md) */}
                  <h3 className="mb-2.5">
                    <span>{sol.title}</span>
                  </h3>

                  {/* Description (Native paragraph) */}
                  <p className="text-xs sm:text-sm leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="space-y-2.5 pt-2 mb-6 border-t border-slate-100">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Highlights
                    </div>
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2
                          size={14}
                          className="shrink-0 mt-0.5"
                          style={{ color: sol.accent }}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-2.5">
                  <Link
                    href={sol.link}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold text-white transition-all shadow-md hover:scale-[1.02]"
                    style={{ background: sol.accent }}
                  >
                    <span>{sol.actionText}</span>
                    <ArrowRight size={13} />
                  </Link>

                  <button
                    type="button"
                    onClick={() => onOpenModal?.('demo', sol.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
