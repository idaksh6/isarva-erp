'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  Boxes,
  Network,
  ArrowRight,
  Check
} from 'lucide-react';
import FlagIcon from './FlagIcon';

export default function Navbar({ content, onOpenModal, selectedCountry: selectedCountryProp, onSelectCountry }) {
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const selectedCountry = selectedCountryProp || content?.countries?.[0] || { code: 'IN', name: 'India' };
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutionsRef = useRef(null);
  const countryRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
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

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="site-container">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <img
              src="/images/isarva-logo.png"
              alt="ISARVA Logo"
              className="h-12 sm:h-13 lg:h-14 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="/" className="text-brand-500 hover:text-brand-600 transition-colors">
              Home
            </Link>

            {/* Solutions Mega Dropdown Trigger */}
            <div className="relative" ref={solutionsRef} onMouseLeave={() => setIsSolutionsOpen(false)}>
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center gap-1 hover:text-brand-500 transition-colors py-2"
              >
                <span>Solutions</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180 text-brand-500' : ''}`} />
              </button>

              {/* Solutions Dropdown Menu */}
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full -left-4 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 z-50 animate-fadeIn space-y-1"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                >
                  <Link
                    href="#restaurant-pos"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <UtensilsCrossed size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700">Restaurant POS Software</div>
                      <div className="text-xs text-slate-500">Order, KOT & table billing</div>
                    </div>
                  </Link>

                  <Link
                    href="#billsoft"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <BarChart3 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700">BillSoft Accounting Software</div>
                      <div className="text-xs text-slate-500">GST, billing & ledger</div>
                    </div>
                  </Link>

                  <Link
                    href="#hrms"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-purple-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                      <Users2 size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-purple-700">HRMS & Payroll Software</div>
                      <div className="text-xs text-slate-500">Staff, biometric & payroll</div>
                    </div>
                  </Link>

                  <Link
                    href="#crm"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-orange-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                      <Handshake size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-orange-700">CRM & Sales Management</div>
                      <div className="text-xs text-slate-500">Leads & visual pipeline</div>
                    </div>
                  </Link>

                  <Link
                    href="#products"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-cyan-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                      <Boxes size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-cyan-700">Inventory & Warehouse</div>
                      <div className="text-xs text-slate-500">Stock movements & reorders</div>
                    </div>
                  </Link>

                  <Link
                    href="#products"
                    onClick={() => setIsSolutionsOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-indigo-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                      <Network size={16} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 group-hover:text-indigo-700">Multi-Branch Management</div>
                      <div className="text-xs text-slate-500">Centralized operational visibility</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#industries" className="hover:text-brand-500 transition-colors">
              Industries
            </Link>
            <Link href="#why-choose" className="hover:text-brand-500 transition-colors">
              Features
            </Link>
            <Link href="#compliance" className="hover:text-brand-500 transition-colors">
              {selectedCountry.code === 'SA' ? 'ZATCA Compliance' : 'GST Compliance'}
            </Link>
            <Link href="#faqs" className="hover:text-brand-500 transition-colors">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-brand-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Country & Language Selector Dropdown */}
            <div className="relative" ref={countryRef}>
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 bg-slate-50/90 hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <FlagIcon code={selectedCountry.code} className="w-5 h-3.5" />
                <span>{selectedCountry.name}</span>
                <ChevronDown size={13} className={`text-slate-400 transition-transform duration-200 ${isCountryOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCountryOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                  <div className="px-3.5 pb-2 mb-1 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Select Region & Language
                  </div>
                  {content?.countries?.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        onSelectCountry?.(country);
                        setIsCountryOpen(false);
                      }}

                      className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm transition-colors text-left group ${
                        selectedCountry.code === country.code ? 'bg-emerald-50/60 text-[#007a55]' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <FlagIcon code={country.code} className="w-6 h-4" />
                        <div>
                          <div className="font-semibold text-slate-900 text-xs group-hover:text-[#007a55] transition-colors">
                            {country.name}
                          </div>
                          {country.lang && (
                            <div className="text-xs text-slate-500 font-normal">{country.lang}</div>
                          )}
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
              onClick={() => onOpenModal('demo')}
              className="btn-brand-primary"
            >
              <span>Book a Free Demo</span>
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
            Restaurant POS Software
          </Link>
          <Link href="#billsoft" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-blue-600">
            BillSoft Accounting Software
          </Link>
          <Link href="#hrms" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-purple-600">
            HRMS & Payroll Software
          </Link>
          <Link href="#crm" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-orange-600">
            CRM & Sales Management
          </Link>
          <Link href="#products" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-cyan-600">
            Inventory & Warehouse Management
          </Link>
          <Link href="#industries" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            Industries
          </Link>
          <Link href="#compliance" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            {selectedCountry.code === 'SA' ? 'ZATCA Compliance' : 'GST Compliance'}
          </Link>
          <Link href="#faqs" onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-semibold text-slate-800">
            FAQs
          </Link>

          {/* Mobile Region Switcher */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Region
            </div>
            <div className="grid grid-cols-2 gap-2">
              {content?.countries?.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => {
                    onSelectCountry?.(country);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    selectedCountry.code === country.code
                      ? 'border-[#007a55] bg-emerald-50 text-[#007a55]'
                      : 'border-slate-200 bg-slate-50 text-slate-700'
                  }`}
                >
                  <FlagIcon code={country.code} className="w-5 h-3.5" />
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenModal('demo');
              }}
              className="btn-brand-primary w-full"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
