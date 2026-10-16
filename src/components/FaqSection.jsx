'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection({ faqs }) {
  const [openIndices, setOpenIndices] = useState([]);

  if (!faqs || !faqs.items || faqs.items.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const midPoint = Math.ceil(faqs.items.length / 2);
  const leftColumn = faqs.items.slice(0, midPoint);
  const rightColumn = faqs.items.slice(midPoint);

  // Structured Data Schema for Google FAQ rich snippet
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.items.map((item) => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };

  const renderFaqCard = (item, actualIndex) => {
    const isOpen = openIndices.includes(actualIndex);
    return (
      <div
        key={actualIndex}
        className={`bg-white rounded-2xl border transition-all duration-200 shadow-2xs overflow-hidden ${
          isOpen
            ? 'border-[#007a55]/40 shadow-sm ring-1 ring-[#007a55]/20'
            : 'border-slate-200/80 hover:border-slate-300'
        }`}
      >
        <button
          type="button"
          onClick={() => toggleAccordion(actualIndex)}
          aria-expanded={isOpen}
          className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors group select-none"
        >
          <span className="font-space font-bold text-slate-900 text-base sm:text-lg pr-2 leading-snug group-hover:text-[#007a55] transition-colors pointer-events-none">
            {item.q}
          </span>
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 pointer-events-none ${
              isOpen
                ? 'bg-emerald-50 text-[#007a55] rotate-180'
                : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-50/70 group-hover:text-[#007a55]'
            }`}
          >
            <ChevronDown size={18} />
          </div>
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 animate-fadeIn">
            <p className="leading-relaxed">
              {item.a}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="faqs" className="section-padding bg-slate-50 border-t border-slate-200/60 scroll-mt-20">
      {/* FAQ Schema for Technical SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="site-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#007a55] mx-auto">
            <HelpCircle size={15} />
            <span className="section-eyebrow">
              {faqs.badge || 'FREQUENTLY ASKED QUESTIONS'}
            </span>
          </div>
          <h2>
            {faqs.title || 'Frequently Asked Questions'}
          </h2>
          {faqs.subtitle && (
            <p className="max-w-2xl mx-auto">
              {faqs.subtitle}
            </p>
          )}
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-start">
          <div className="space-y-4">
            {leftColumn.map((item, i) => renderFaqCard(item, i))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((item, i) => renderFaqCard(item, midPoint + i))}
          </div>
        </div>
      </div>
    </section>
  );
}
