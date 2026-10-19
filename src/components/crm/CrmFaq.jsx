'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CrmFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is Isarva CRM and how does it help sales teams?',
      a: 'Isarva CRM is an all-in-one cloud platform engineered to streamline lead management, deal tracking, quotations, and customer communications. It eliminates spreadsheets, automates repetitive follow-ups, and gives business leaders full visibility into their sales pipeline.',
    },
    {
      q: 'Can I customize the sales stages and quotation templates?',
      a: 'Yes, absolutely. You can fully customize Kanban pipeline deal stages, win/loss criteria, custom fields, company branding, itemized tax configurations (including GST), and terms & conditions templates to match your exact business workflow.',
    },
    {
      q: 'Does Isarva CRM support mobile access on Android and iOS?',
      a: 'Yes. Field sales representatives can access leads, log meeting notes, update deal stages, view customer contact history, and receive new lead notifications on Android and iOS mobile devices.',
    },
    {
      q: 'How does Isarva CRM handle GST & tax calculations in quotations?',
      a: 'Our quotation engine has native Indian GST support (CGST, SGST, IGST), customizable HSN/SAC codes, and regional Saudi ZATCA compliance options. Taxes are calculated automatically per line item, generating certified, print-ready PDF proposals instantly.',
    },
    {
      q: 'How does the WhatsApp & Email integration work?',
      a: 'You can dispatch estimates, quotations, and welcome messages directly to prospects over WhatsApp and synchronized email. Communication logs are linked directly to each client dossier for seamless team visibility.',
    },
    {
      q: 'Can we import our existing leads and customer contacts from Excel or CSV?',
      a: 'Yes. You can seamlessly import existing spreadsheets, contact lists, and past customer records via our guided 1-click CSV/Excel import wizard with automated column mapping.',
    },
    {
      q: 'How secure is our business and customer data on Isarva?',
      a: 'Your data is secured with 256-bit SSL encryption in transit and AES-256 at rest, hosted on enterprise AWS cloud data centers with automated daily offsite backups, strict role-based access tiers, and complete audit trails.',
    },
    {
      q: 'Can Isarva CRM connect with BillSoft Accounting and Restaurant POS?',
      a: 'Yes. Isarva CRM is part of the unified ISARVA ERP ecosystem. Won deals convert directly into accounting invoices, customer ledgers, and delivery challans without double data entry or external connectors.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-padding bg-slate-50 border-b border-slate-200/80 scroll-mt-20">
      <div className="site-container">
        <div className="max-w-4xl mx-auto">
          
          {/* Section Header matching Home Page exactly */}
          <div className="section-header">
            <div className="section-eyebrow text-[#ea580c]">
              GOT QUESTIONS?
            </div>
            <h2>
              Frequently Asked{' '}
              <span className="text-gradient-crm">
                Questions
              </span>
            </h2>
            <p>
              Everything you need to know about Isarva CRM setup, security, integrations, and pricing.
            </p>
          </div>

          {/* Accordion Stack */}
          <div className="space-y-3.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden bg-white ${
                    isOpen
                      ? 'border-[#ea580c] shadow-md shadow-orange-500/10'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#ea580c] text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <ChevronDown size={17} strokeWidth={2.5} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
