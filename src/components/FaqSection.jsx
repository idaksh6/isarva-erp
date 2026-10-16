'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

function FaqCard({ item, index, isOpen, onToggle, className = '' }) {
  return (
    <div
      className={`bg-white rounded-2xl border transition-all duration-200 shadow-2xs overflow-hidden ${
        isOpen
          ? 'border-[#007a55]/40 shadow-sm ring-1 ring-[#007a55]/20'
          : 'border-slate-200/80 hover:border-slate-300'
      } ${className}`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-btn-${index}`}
        className="w-full h-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer transition-colors group"
      >
        <span className="font-space font-bold text-slate-900 text-base sm:text-lg pr-2 leading-snug group-hover:text-[#007a55] transition-colors">
          {item.q}
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
            isOpen
              ? 'bg-emerald-50 text-[#007a55] rotate-180'
              : 'bg-slate-100 text-slate-500 group-hover:bg-emerald-50/70 group-hover:text-[#007a55]'
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${index}`}
          role="region"
          aria-labelledby={`faq-btn-${index}`}
          className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100"
        >
          <p className="leading-relaxed">
            {item.a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs || !faqs.items || faqs.items.length === 0) {
    return null;
  }

  const toggleAccordion = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
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
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          <div className="flex flex-col gap-4">
            {leftColumn.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col ${i === leftColumn.length - 1 ? 'flex-1' : ''}`}
              >
                <FaqCard
                  item={item}
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => toggleAccordion(i)}
                  className={i === leftColumn.length - 1 ? 'h-full flex flex-col justify-center' : ''}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn.map((item, i) => {
              const actualIndex = midPoint + i;
              return (
                <div
                  key={actualIndex}
                  className={`flex flex-col ${i === rightColumn.length - 1 ? 'flex-1' : ''}`}
                >
                  <FaqCard
                    item={item}
                    index={actualIndex}
                    isOpen={openIndex === actualIndex}
                    onToggle={() => toggleAccordion(actualIndex)}
                    className={i === rightColumn.length - 1 ? 'h-full flex flex-col justify-center' : ''}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
