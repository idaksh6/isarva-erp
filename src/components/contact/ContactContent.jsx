'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import { getDefaultContentForCountry } from '../../lib/content';
import ContactHeroHeader from './ContactHeroHeader';
import ContactForm from './ContactForm';
import ContactInfoCards from './ContactInfoCards';
import GlobalOfficesGrid from './GlobalOfficesGrid';

export default function ContactContent() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [modalState, setModalState] = useState({ isOpen: false, type: 'demo', product: null });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('isarva_country');
      if (stored && (stored === 'IN' || stored === 'SA')) {
        setCountryCode(stored);
        setContent(getDefaultContentForCountry(stored));
      }
    }
  }, []);

  const handleCountryChange = (c) => {
    const code = typeof c === 'string' ? c : c?.code;
    if (code && (code === 'IN' || code === 'SA')) {
      setCountryCode(code);
      setContent(getDefaultContentForCountry(code));
      if (typeof window !== 'undefined') {
        localStorage.setItem('isarva_country', code);
      }
    }
  };

  const handleOpenModal = (type = 'demo', product = null) => {
    setModalState({ isOpen: true, type, product });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, type: 'demo', product: null });
  };

  const currentCountry = (content?.countries || []).find((c) => c.code === countryCode) || {
    code: 'IN',
    name: 'India',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Existing Global Navbar */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-1">
        {/* Contact Hero Header */}
        <ContactHeroHeader />

        {/* Master Contact Grid Section */}
        <section className="section-padding relative overflow-hidden bg-white">
          {/* Subtle background glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Left Column: Interactive Contact Form (7 cols) */}
              <div className="lg:col-span-7">
                <ContactForm selectedCountry={countryCode} />
              </div>

              {/* Right Column: Direct Touchpoints & Channels (5 cols) */}
              <div className="lg:col-span-5">
                <ContactInfoCards />
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices Section */}
        <GlobalOfficesGrid />
      </main>

      {/* Existing Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Existing Global Lead / Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        product={modalState.product}
        countryCode={countryCode}
      />
    </div>
  );
}
