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
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bajpe%2C+Mangalore%2C+India&t=&z=13&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://maps.google.com/?q=Bajpe,Mangalore,India',
    accent: '#007a55',
  },
  {
    city: 'Bangalore',
    country: 'India',
    flagCode: 'IN',
    role: 'Technology & Development Center',
    address: 'Bangalore, Karnataka, India',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Bangalore%2C+India&t=&z=12&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://maps.google.com/?q=Bangalore,India',
    accent: '#2563eb',
  },
  {
    city: 'Dubai',
    country: 'UAE',
    flagCode: 'AE',
    role: 'Middle East Operations',
    address: 'Dubai, United Arab Emirates',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Dubai%2C+UAE&t=&z=12&ie=UTF8&iwloc=&output=embed',
    mapUrl: 'https://maps.google.com/?q=Dubai,UAE',
    accent: '#ea580c',
  },
  {
    city: 'United Kingdom',
    country: 'UK',
    flagCode: 'GB',
    role: 'European Representative Office',
    address: 'United Kingdom',
    mapEmbedUrl: 'https://maps.google.com/maps?q=United+Kingdom&t=&z=6&ie=UTF8&iwloc=&output=embed',
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
            OUR OFFICES
          </div>
          <h2>
            <span>We have offices around the world to serve our global clients.</span>
          </h2>
          <p className="max-w-xl mx-auto">
            Reach out to our global presence across India, GCC, and the United Kingdom for localized consulting and enterprise delivery.
          </p>
        </div>

        {/* 4 Global Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GLOBAL_OFFICES.map((office, idx) => (
            <div
              key={idx}
              className="card-ecosystem rounded-3xl p-5 sm:p-6 bg-white border border-emerald-600/20 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.14),0_4px_14px_-2px_rgba(0,122,85,0.06)] hover:border-[#007a55]/60 hover:shadow-[0_20px_45px_-4px_rgba(0,122,85,0.25)] transition-all duration-300 flex flex-col justify-between group"
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

                {/* City Heading */}
                <h3 className="mb-2">
                  <span>{office.city}</span>
                </h3>

                {/* Address Paragraph */}
                <p className="flex items-start gap-2 text-xs leading-relaxed mb-4 text-slate-600 font-normal">
                  <MapPin size={14} className="text-[#007a55] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </p>

                {/* Interactive Map Embed */}
                <div className="w-full h-40 rounded-2xl overflow-hidden border border-slate-200/80 mb-4 shadow-inner relative bg-slate-100">
                  <iframe
                    title={`${office.city} Office Map`}
                    src={office.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>

              {/* Map Link */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <a
                  href={office.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#007a55] hover:text-[#005a3e] group-hover:translate-x-0.5 transition-all"
                >
                  <Navigation size={13} />
                  <span>View on Google Maps</span>
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
