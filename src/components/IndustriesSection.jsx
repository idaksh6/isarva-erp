'use client';

import React from 'react';
import {
  Utensils,
  Store,
  ShoppingCart,
  Coffee,
  Boxes,
  Building2
} from 'lucide-react';

const INDUSTRY_CONFIG = [
  {
    icon: Utensils,
    accentColor: '#059669',
    accentBg: 'rgba(5, 150, 105, 0.08)',
    borderColor: 'rgba(5, 150, 105, 0.3)',
    glowColor: 'rgba(5, 150, 105, 0.12)',
    hoverBg: 'rgba(5, 150, 105, 0.06)',
    tagBg: 'rgba(5, 150, 105, 0.1)',
    tag: 'F&B',
  },
  {
    icon: Store,
    accentColor: '#ea580c',
    accentBg: 'rgba(234, 88, 12, 0.08)',
    borderColor: 'rgba(234, 88, 12, 0.3)',
    glowColor: 'rgba(234, 88, 12, 0.12)',
    hoverBg: 'rgba(234, 88, 12, 0.06)',
    tagBg: 'rgba(234, 88, 12, 0.1)',
    tag: 'Retail',
  },
  {
    icon: ShoppingCart,
    accentColor: '#2563eb',
    accentBg: 'rgba(37, 99, 235, 0.08)',
    borderColor: 'rgba(37, 99, 235, 0.3)',
    glowColor: 'rgba(37, 99, 235, 0.12)',
    hoverBg: 'rgba(37, 99, 235, 0.06)',
    tagBg: 'rgba(37, 99, 235, 0.1)',
    tag: 'FMCG',
  },
  {
    icon: Coffee,
    accentColor: '#db2777',
    accentBg: 'rgba(219, 39, 119, 0.08)',
    borderColor: 'rgba(219, 39, 119, 0.3)',
    glowColor: 'rgba(219, 39, 119, 0.12)',
    hoverBg: 'rgba(219, 39, 119, 0.06)',
    tagBg: 'rgba(219, 39, 119, 0.1)',
    tag: 'Chains',
  },
  {
    icon: Boxes,
    accentColor: '#9333ea',
    accentBg: 'rgba(147, 51, 234, 0.08)',
    borderColor: 'rgba(147, 51, 234, 0.3)',
    glowColor: 'rgba(147, 51, 234, 0.12)',
    hoverBg: 'rgba(147, 51, 234, 0.06)',
    tagBg: 'rgba(147, 51, 234, 0.1)',
    tag: 'B2B',
  },
  {
    icon: Building2,
    accentColor: '#0d9488',
    accentBg: 'rgba(13, 148, 136, 0.08)',
    borderColor: 'rgba(13, 148, 136, 0.3)',
    glowColor: 'rgba(13, 148, 136, 0.12)',
    hoverBg: 'rgba(13, 148, 136, 0.06)',
    tagBg: 'rgba(13, 148, 136, 0.1)',
    tag: 'Enterprise',
  },
];

export default function IndustriesSection({ industries }) {
  return (
    <section
      id="industries"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #f0fdf8 0%, #f8fafc 50%, #eff6ff 100%)',
      }}
    >
      {/* Subtle decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 40% at 5% 10%, rgba(0,122,85,0.06) 0%, transparent 70%), radial-gradient(ellipse 45% 40% at 95% 90%, rgba(37,99,235,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="site-container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            {industries?.badge || 'INDUSTRIES WE SERVE'}
          </div>
          <h2>
            {industries?.title || 'Trusted by Businesses Across Multiple Industries'}
          </h2>
          <p>
            {industries?.subtitle || 'From restaurants to retail, ISARVA ERP helps businesses of all sizes succeed.'}
          </p>
        </div>

        {/* Glassmorphism Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {industries?.items?.map((ind, idx) => {
            const cfg = INDUSTRY_CONFIG[idx] || INDUSTRY_CONFIG[0];
            const IconComponent = cfg.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col items-center text-center rounded-2xl p-5 sm:p-6 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: `1.5px solid ${cfg.borderColor}`,
                  boxShadow: `0 4px 20px ${cfg.glowColor}, 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`,
                  transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `rgba(255,255,255,0.95)`;
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = `0 16px 40px ${cfg.glowColor}, 0 4px 12px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)`;
                  e.currentTarget.style.borderColor = cfg.accentColor;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.75)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = `0 4px 20px ${cfg.glowColor}, 0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.9)`;
                  e.currentTarget.style.borderColor = cfg.borderColor;
                }}
              >
                {/* Accent top line */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-1/2 -translate-x-1/2 rounded-full"
                  style={{
                    width: '45%',
                    height: '2.5px',
                    background: `linear-gradient(90deg, transparent, ${cfg.accentColor}, transparent)`,
                  }}
                />

                {/* Icon badge */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{
                    background: cfg.accentBg,
                    border: `1px solid ${cfg.borderColor}`,
                    color: cfg.accentColor,
                  }}
                >
                  <IconComponent size={26} strokeWidth={2.2} />
                </div>

                {/* Industry name */}
                <h3
                  className="mb-2.5"
                  style={{
                    color: '#0f172a',
                    fontSize: '0.9375rem',
                    lineHeight: 1.35,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {ind.name}
                </h3>

                {/* Sector tag pill */}
                <span
                  className="text-xs font-semibold rounded-full px-2.5 py-0.5"
                  style={{
                    background: cfg.tagBg,
                    color: cfg.accentColor,
                    border: `1px solid ${cfg.borderColor}`,
                    letterSpacing: '0.04em',
                  }}
                >
                  {cfg.tag}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom stat strip */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
          style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '2.5rem',
          }}
        >
          {[
            { value: '6+', label: 'Industries Served' },
            { value: '1,000+', label: 'Businesses Trust ISARVA' },
            { value: '15+', label: 'Years of Experience' },
            { value: '99.9%', label: 'Uptime SLA' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <span
                style={{
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '1.625rem',
                  fontWeight: 800,
                  color: '#007a55',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs font-medium"
                style={{ color: '#64748b', letterSpacing: '0.03em' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
