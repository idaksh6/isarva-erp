'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import FlagIcon from '../FlagIcon';

const GLOBAL_OFFICES = [
  {
    city: 'Mangalore',
    country: 'India',
    flagCode: 'IN',
    role: 'Corporate Headquarters',
    address: 'Bajpe, Mangalore, Karnataka, India',
    mapUrl: 'https://maps.google.com/?q=Bajpe,Mangalore,India',
    accent: '#007a55',
  },
  {
    city: 'Bangalore',
    country: 'India',
    flagCode: 'IN',
    role: 'Technology & Development Center',
    address: 'Bangalore, Karnataka, India',
    mapUrl: 'https://maps.google.com/?q=Bangalore,India',
    accent: '#2563eb',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    flagCode: 'AE',
    role: 'Middle East Operations',
    address: 'Dubai, United Arab Emirates',
    mapUrl: 'https://maps.google.com/?q=Dubai,UAE',
    accent: '#ea580c',
  },
  {
    city: 'United Kingdom',
    country: 'UK',
    flagCode: 'GB',
    role: 'European Representative Office',
    address: 'United Kingdom',
    mapUrl: 'https://maps.google.com/?q=United+Kingdom',
    accent: '#7c3aed',
  },
];

export default function GlobalOfficesGrid() {
  return (
    <section className="section-padding bg-gradient-to-b from-white via-[#f7fbf8] to-white border-t border-slate-200/70 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="section-eyebrow">
            GLOBAL FOOTPRINT
          </div>
          <h2>
            <span>Our Offices Worldwide</span>
          </h2>
          <p className="max-w-xl mx-auto">
            We have offices around the world to serve you better with localized compliance, regional support, and high-touch ERP engineering.
          </p>
        </div>

        {/* 4 Global Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_OFFICES.map((office, idx) => (
            <div
              key={idx}
              className="card-ecosystem rounded-2xl p-6 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 hover:shadow-[0_24px_50px_-4px_rgba(0,122,85,0.30)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Flag + Location Pin */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <FlagIcon code={office.flagCode} className="w-6 h-4 rounded-xs shadow-2xs" />
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase">
                      {office.country}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-[#007a55] border border-emerald-200/80">
                    0{idx + 1}
                  </span>
                </div>

                {/* Office Role Badge */}
                <div className="text-[11px] font-mono text-[#007a55] font-semibold uppercase tracking-wider mb-1">
                  {office.role}
                </div>

                {/* City Heading (semantic h3 with no classes per GEMINI.md) */}
                <h3 className="mb-2">
                  <span>{office.city}</span>
                </h3>

                {/* Address Paragraph */}
                <p className="flex items-start gap-2 text-xs leading-relaxed">
                  <MapPin size={14} className="text-[#007a55] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>
              </div>

              {/* Map Link */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#007a55] hover:text-[#005a3e] group-hover:translate-x-0.5 transition-all"
                >
                  <Navigation size={13} />
                  <span>View on Map</span>
                  <ExternalLink size={11} className="opacity-70" />
                </a>

                <span className="text-[11px] font-mono text-slate-400">
                  ISARVA Hub
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
