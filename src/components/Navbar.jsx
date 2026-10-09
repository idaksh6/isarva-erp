'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ content, onOpenModal }) {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(content?.countries?.[0] || { code: 'IN', name: 'India', flag: '🇮🇳' });
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:bg-brand-600 transition-all">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900 leading-none">
                ISARVA
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-brand-500 uppercase mt-0.5">
                ERP Platform
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[0.925rem] font-semibold text-slate-700">
            <Link href="/" className="text-brand-500 hover:text-brand-600 transition-colors">
              Home
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseLeave={() => setIsSolutionsOpen(false)}>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className="flex items-center gap-1 hover:text-brand-500 transition-colors py-2"
              >
                <span>Solutions</span>
                <ChevronDown size={15} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isSolutionsOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                  <Link href="#restaurant-pos" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                      <UtensilsCrossed size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">Restaurant POS</div>
                      <div className="text-xs text-slate-500">Order, KDS & tables</div>
                    </div>
                  </Link>

                  <Link href="#billsoft" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">BillSoft Accounting</div>
                      <div className="text-xs text-slate-500">GST, billing & ledger</div>
                    </div>
                  </Link>

                  <Link href="#hrms" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                      <Users2 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">HRMS</div>
                      <div className="text-xs text-slate-500">Staff, payroll & leave</div>
                    </div>
                  </Link>

                  <Link href="#crm" className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
                      <Handshake size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-orange-700">CRM</div>
                      <div className="text-xs text-slate-500">Leads & pipeline</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#features" className="hover:text-brand-500 transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="hover:text-brand-500 transition-colors">
              Pricing
            </Link>
            <Link href="#gst-compliance" className="hover:text-brand-500 transition-colors">
              GST Compliance
            </Link>
            <Link href="#about" className="hover:text-brand-500 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="hover:text-brand-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Country Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-sm font-medium text-slate-700 bg-slate-50/80 transition-colors"
              >
                <span className="text-base leading-none">{selectedCountry.flag}</span>
                <span>{selectedCountry.name}</span>
                <ChevronDown size={14} className="text-slate-400" />
              </button>

              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  <div className="px-3 pb-2 mb-1 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Region
                  </div>
                  {content?.countries?.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsCountryOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3.5 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{country.flag}</span>
                        <span className="font-medium">{country.name}</span>
                      </div>
                      {selectedCountry.code === country.code && (
                        <span className="text-xs font-bold text-brand-500">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Icon */}
            <button
              onClick={() => onOpenModal('demo')}
              className="p-2 text-slate-500 hover:text-brand-500 hover:bg-slate-50 rounded-full transition-colors"
              title="Search"
            >
              <Search size={18} />
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenModal('started')}
              className="btn-brand-primary"
            >
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 rounded-lg hover:bg-slate-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Home
          </Link>
          <Link href="#restaurant-pos" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-emerald-600">
            Restaurant POS
          </Link>
          <Link href="#billsoft" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-blue-600">
            BillSoft Accounting
          </Link>
          <Link href="#hrms" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-purple-600">
            HRMS
          </Link>
          <Link href="#crm" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-orange-600">
            CRM
          </Link>
          <Link href="#gst-compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            GST Compliance
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal('started');
              }}
              className="btn-brand-primary w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
