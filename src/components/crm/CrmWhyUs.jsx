'use client';

import React from 'react';
import { Layers, MessageSquare, Shield, RefreshCw, BellRing, Cloud } from 'lucide-react';

export default function CrmWhyUs() {
  const cards = [
    {
      icon: <Layers size={26} strokeWidth={2.2} />,
      tag: 'Vertical-Tailored',
      title: 'Industry-Specific Configurations',
      description: 'Pre-configured pipeline stages, quotation templates, and custom data fields tailored for IT Services, Manufacturing, Healthcare, Retail, and Real Estate.',
      metric: 'Zero complex custom coding needed',
    },
    {
      icon: <MessageSquare size={26} strokeWidth={2.2} />,
      tag: 'Unified Inbox',
      title: 'Omnichannel Communication',
      description: 'Connect direct WhatsApp messaging and Gmail / Outlook sync to log client conversations and dispatches automatically into deal records.',
      metric: 'Zero missed client messages',
    },
    {
      icon: <Shield size={26} strokeWidth={2.2} />,
      tag: 'Enterprise Security',
      title: 'Role-Based Access Control',
      description: 'Granular permission tiers for reps, team leads, and executive admins to safeguard client confidentiality, pipeline data, and pricing discretion.',
      metric: 'Strict data privacy & audit logs',
    },
    {
      icon: <RefreshCw size={26} strokeWidth={2.2} />,
      tag: 'End-to-End Synergy',
      title: 'Native Accounting & ERP Integration',
      description: 'Seamlessly convert won deals into BillSoft tax invoices, delivery challans, and accounting ledgers without duplicate data entry.',
      metric: '100% unified financial synchronization',
    },
    {
      icon: <BellRing size={26} strokeWidth={2.2} />,
      tag: 'Never Miss A Lead',
      title: 'Automated Reminders & Alerts',
      description: 'Smart notifications for deal follow-ups, expiring quotes, unassigned leads, and milestone accomplishments directly on mobile and web.',
      metric: 'Real-time push and email alerts',
    },
    {
      icon: <Cloud size={26} strokeWidth={2.2} />,
      tag: 'High Reliability',
      title: 'Cloud Infrastructure & 99.9% Uptime',
      description: 'Hosted on enterprise-grade AWS cloud clusters with automated daily backups, ISO-grade encryption, and zero downtime maintenance.',
      metric: '99.9% Uptime SLA guaranteed',
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="site-container">
        
        {/* Section Header matching Home Page exactly */}
        <div className="section-header">
          <div className="section-eyebrow text-[#ea580c]">
            WHY SALES LEADERS CHOOSE ISARVA
          </div>
          <h2>
            Engineered for{' '}
            <span className="text-gradient-crm">
              High-Performing
            </span>{' '}
            Sales Teams
          </h2>
          <p>
            Unlike complex, overpriced legacy software, Isarva CRM delivers enterprise power with intuitive simplicity your sales reps will actually love using every day.
          </p>
        </div>

        {/* 6 Grid Cards matching Home Page Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 lg:p-8 flex flex-col items-center text-center shadow-xs hover:shadow-xl hover:border-orange-500/30 hover:-translate-y-1.5 transition-all duration-300 min-w-0 w-full group"
            >
              <div className="flex flex-col items-center w-full">
                {/* Elevated Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-50 text-[#ea580c] flex items-center justify-center mb-5 shrink-0 shadow-2xs group-hover:bg-[#ea580c] group-hover:text-white group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>

                {/* Eyebrow Tag */}
                <div className="mb-2.5">
                  <span className="text-xs font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                {/* Semantic Clean Heading */}
                <h3 className="mb-2 group-hover:text-[#ea580c] transition-colors">
                  {item.title}
                </h3>

                {/* Semantic Clean Description */}
                <p className="mt-1 mb-5">
                  {item.description}
                </p>
              </div>

              {/* Bottom Feature Metric */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-2 w-full">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black shrink-0">
                  ✓
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {item.metric}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
