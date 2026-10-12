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
  Check
} from 'lucide-react';
import FlagIcon from './FlagIcon';

export default function Footer({ content }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const countries = content?.countries || [
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
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

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200/80 pt-16 pb-10">
      <div className="site-container">
        
        {/* Main Footer 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-slate-200/70">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link href="/" className="inline-block">
              <img
                src="/images/isarva-logo.png"
                alt="ISARVA Logo"
                className="h-11 sm:h-12 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm">
              Smart ERP solutions for restaurants, retail and businesses. Restaurant POS, Accounting, HRMS and CRM with Indian GST compliance.
            </p>

            {/* Circular Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#007a55] hover:text-white flex items-center justify-center transition-all"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#007a55] hover:text-white flex items-center justify-center transition-all"
              >
                <Twitter size={15} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#007a55] hover:text-white flex items-center justify-center transition-all"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#007a55] hover:text-white flex items-center justify-center transition-all"
              >
                <Youtube size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-[#007a55] hover:text-white flex items-center justify-center transition-all"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="lg:col-span-2 space-y-3">
            <h4>
              Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#restaurant-pos" className="hover:text-[#007a55] transition-colors">Restaurant POS</Link></li>
              <li><Link href="#billsoft" className="hover:text-[#007a55] transition-colors">BillSoft Accounting</Link></li>
              <li><Link href="#hrms" className="hover:text-[#007a55] transition-colors">HRMS</Link></li>
              <li><Link href="#crm" className="hover:text-[#007a55] transition-colors">CRM</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4>
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#about" className="hover:text-[#007a55] transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Contact Us</Link></li>
              <li><a href="https://isarvait.com/careers" target="_blank" rel="noreferrer" className="hover:text-[#007a55] transition-colors">Careers</a></li>
              <li><a href="https://blog.isarvait.com" target="_blank" rel="noreferrer" className="hover:text-[#007a55] transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4>
              Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Help Center</Link></li>
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Documentation</Link></li>
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Video Tutorials</Link></li>
              <li><Link href="#contact" className="hover:text-[#007a55] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Column 5: Stay Updated Newsletter */}
          <div className="lg:col-span-2 space-y-3">
            <h4>
              Stay Updated
            </h4>
            <p>
              Subscribe to our newsletter for the latest updates and features.
            </p>

            {/* Side-by-Side Inline Form */}
            <form onSubmit={handleSubscribe} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full min-w-0 px-3 py-2 rounded-xl bg-slate-50/80 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#007a55] focus:ring-2 focus:ring-[#007a55]/15 transition-all"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-[#007a55] hover:bg-[#006546] text-white font-bold text-xs shrink-0 shadow-xs hover:shadow-sm transition-all"
              >
                {subscribed ? 'Done ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>
            © 2026 ISARVA IT. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <Link href="#privacy" className="hover:text-[#007a55] transition-colors">Privacy Policy</Link>
              <span className="text-slate-300">|</span>
              <Link href="#terms" className="hover:text-[#007a55] transition-colors">Terms of Service</Link>
            </div>

            {/* Country & Language Selector Dropdown (Opens Upwards) */}
            <div className="relative" ref={countryRef}>
              <button
                type="button"
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                aria-label="Select region and language"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50 text-xs font-semibold text-slate-700 shadow-2xs transition-colors"
              >
                <FlagIcon code={selectedCountry.code} className="w-4 h-3" />
                <span>{selectedCountry.name}</span>
                <ChevronDown
                  size={13}
                  className={`text-slate-400 transition-transform duration-200 ${
                    isCountryOpen ? 'rotate-180 text-[#007a55]' : ''
                  }`}
                />
              </button>

              {/* Upward Dropdown Menu */}
              {isCountryOpen && (
                <div className="absolute bottom-full right-0 mb-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-fadeIn">
                  <div className="px-3.5 pb-2 mb-1 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Region & Language
                  </div>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
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
                          {country.lang && (
                            <div className="text-[11px] text-slate-500 font-normal mt-0.5">
                              {country.lang}
                            </div>
                          )}
                        </div>
                      </div>
                      {selectedCountry.code === country.code && (
                        <Check size={15} className="text-[#007a55] font-bold" />
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
