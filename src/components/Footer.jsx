'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ChevronDown,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Sparkles
} from 'lucide-react';
import FlagIcon from './FlagIcon';

export default function Footer({
  content,
  selectedCountry: selectedCountryProp,
  onSelectCountry,
  onOpenModal
}) {
  const countries = content?.countries || [
    { code: 'IN', name: 'India', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ];

  const selectedCountry = selectedCountryProp || countries[0];
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const countryRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const metaPhone = content?.meta?.phone || '+91 9902863697';
  const metaEmail = content?.meta?.email || 'marketing@isarvait.com';

  return (
    <footer id="contact" className="relative overflow-hidden bg-gradient-to-b from-[#f8faf9] via-white to-[#f1f6f3] border-t border-[#d8eae1] pt-14 pb-10">
      {/* Subtle Ambient Radial Lighting Accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">

        {/* 1. HIGH-IMPACT LIGHT PRE-FOOTER CONVERSION CARD */}
        <div className="relative rounded-3xl bg-white/95 border border-slate-200/90 shadow-xl shadow-slate-900/5 p-8 sm:p-10 lg:p-12 mb-14 overflow-hidden">
          {/* Subtle Corner Ambient Mesh */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-100/50 via-teal-50/30 to-transparent rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#007a55]/5 to-transparent rounded-full blur-xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-8 space-y-3.5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80">
                <Sparkles size={13} className="text-[#007a55]" />
                <span className="section-eyebrow">
                  READY TO ELEVATE YOUR OPERATIONS?
                </span>
              </div>

              <div>
                <h3>
                  Ready to Simplify Your Business Operations?
                </h3>
              </div>

              <div>
                <p className="max-w-2xl">
                  Discover how ISARVA ERP can help organize your billing, accounting, inventory, workforce and sales processes. Let&apos;s find the right solutions for your business.
                </p>
              </div>

              {/* Direct Assistance Contact Chips */}
              <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={`tel:${metaPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                >
                  <Phone size={13} className="text-[#007a55]" />
                  <span>Call Us: {metaPhone}</span>
                </a>
                <a
                  href={`mailto:${metaEmail}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors"
                >
                  <Mail size={13} className="text-[#007a55]" />
                  <span>Email: {metaEmail}</span>
                </a>
              </div>
            </div>

            {/* Right Action CTAs */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:items-end gap-3.5 w-full">
              <button
                type="button"
                onClick={() => onOpenModal ? onOpenModal('demo') : null}
                className="w-full sm:w-auto lg:w-full px-7 py-3.5 rounded-full bg-[#007a55] hover:bg-[#006546] text-white font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
                style={{
                  boxShadow: '0 8px 20px -4px rgba(0, 122, 85, 0.35)'
                }}
              >
                <span>Book a Free Demo</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => onOpenModal ? onOpenModal('contact') : null}
                className="w-full sm:w-auto lg:w-full px-6 py-3.5 rounded-full bg-slate-100/80 hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <span>Talk to Our Team</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. MAIN 5-COLUMN EXPANDED NAVIGATION GRID */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 border-b border-slate-200/80">
          
          {/* Column 1: Brand Info, Regional Hubs & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
            <Link href="/" className="inline-block">
              <img
                src="/images/isarva-logo.png"
                alt="ISARVA Logo"
                className="h-11 sm:h-12 w-auto object-contain mx-auto lg:mx-0"
              />
            </Link>

            <div>
              <p className="max-w-sm mx-auto lg:mx-0">
                Connected business software for billing, accounting, inventory, workforce management and customer relationships.
              </p>
            </div>

            {/* Circular Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-2.5 pt-1">
              <a
                href="https://www.linkedin.com/company/isarva-infotech-private-limited"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://twitter.com/isarva"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://www.youtube.com/@isarvainfotech"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://www.instagram.com/isarvainfotech/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://www.facebook.com/IsarvaInfotech"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-[#007a55] hover:text-white hover:border-[#007a55] flex items-center justify-center transition-all shadow-2xs hover:shadow-xs"
              >
                <Facebook size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: ERP Solutions (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-center lg:text-left">
            <h4>
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#restaurant-pos" className="hover:text-[#007a55] transition-colors">Restaurant POS</Link></li>
              <li><Link href="#billsoft" className="hover:text-[#007a55] transition-colors">BillSoft Accounting</Link></li>
              <li><Link href="#hrms" className="hover:text-[#007a55] transition-colors">HRMS & Payroll</Link></li>
              <li><Link href="#crm" className="hover:text-[#007a55] transition-colors">CRM & Sales</Link></li>
              <li><Link href="#products" className="hover:text-[#007a55] transition-colors">Inventory Management</Link></li>
              <li><Link href="#products" className="hover:text-[#007a55] transition-colors">Multi-Branch Management</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions by Industry (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-center lg:text-left">
            <h4>
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Restaurants & Cafés</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Retail & Supermarkets</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Wholesale & Distribution</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Apparel & Boutiques</Link></li>
              <li><Link href="#industries" className="hover:text-[#007a55] transition-colors">Corporate Businesses</Link></li>
            </ul>
          </div>

          {/* Column 4: Statutory & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-center lg:text-left">
            <h4>
              Resources & Compliance
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#faqs" className="hover:text-[#007a55] transition-colors">FAQs & Knowledge Base</Link></li>
              <li><Link href="#compliance" className="hover:text-[#007a55] transition-colors">GST e-Invoicing & IRN</Link></li>
              <li><Link href="#compliance" className="hover:text-[#007a55] transition-colors">e-Way Bill Workflows</Link></li>
              <li><Link href="#compliance" className="hover:text-[#007a55] transition-colors">Saudi ZATCA Phase 2</Link></li>
              <li><Link href="#compliance" className="hover:text-[#007a55] transition-colors">Tax & GSTR Reports</Link></li>
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Implementation & Support</Link></li>
            </ul>
          </div>
        </div>

        {/* 4. SUB-FOOTER BOTTOM BAR */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium text-center md:text-left">
          <div className="text-center md:text-left w-full md:w-auto">
            © 2026 ISARVA IT Solutions Pvt. Ltd. All rights reserved.
          </div>

          <div className="flex items-center justify-center md:justify-end w-full md:w-auto">
            {/* Upward Region & Currency Dropdown */}
            <div className="relative" ref={countryRef}>
              <button
                type="button"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                aria-label="Select country and currency"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-2xs transition-colors"
              >
                <FlagIcon code={selectedCountry.code} className="w-4 h-3" />
                <span>{selectedCountry.name}</span>
                <span className="text-slate-400">({selectedCountry.currency})</span>
                <ChevronDown
                  size={13}
                  className={`text-slate-400 transition-transform duration-200 ${
                    isCountryOpen ? 'rotate-180 text-[#007a55]' : ''
                  }`}
                />
              </button>

              {/* Upward Dropdown Menu */}
              {isCountryOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200/90 py-2.5 z-50 animate-fadeIn">
                  <div className="px-3.5 pb-2 mb-1 border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Select Operating Region & Currency
                  </div>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        onSelectCountry?.(country);
                        setIsCountryOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs transition-colors text-left group ${
                        selectedCountry.code === country.code
                          ? 'bg-emerald-50/70 text-[#007a55]'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FlagIcon code={country.code} className="w-6 h-4" />
                        <div>
                          <div className="font-semibold text-slate-900 group-hover:text-[#007a55] transition-colors">
                            {country.name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                            {country.currency} • {country.lang}
                          </div>
                        </div>
                      </div>
                      {selectedCountry.code === country.code && (
                        <Check size={16} className="text-[#007a55] font-bold" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

