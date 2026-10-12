'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import ComplianceSection from '../components/compliance/ComplianceSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LeadModal from '../components/LeadModal';
import { getDefaultContentForCountry } from '../lib/content';

export default function HomePage() {
  const [countryCode, setCountryCode] = useState('IN');
  const [content, setContent] = useState(() => getDefaultContentForCountry('IN'));
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'started',
    selectedProduct: ''
  });

  // Load content whenever countryCode changes
  useEffect(() => {
    // Check saved country preference on initial load
    const savedCountry = typeof window !== 'undefined' ? localStorage.getItem('isarva_country') : null;
    if (savedCountry && (savedCountry === 'IN' || savedCountry === 'SA') && savedCountry !== countryCode) {
      setCountryCode(savedCountry);
      setContent(getDefaultContentForCountry(savedCountry));
    }
  }, []);

  useEffect(() => {
    async function loadContent() {
      try {
        const res = await fetch(`/api/content?country=${countryCode}`);
        if (res.ok) {
          const data = await res.json();
          if (data?.content) {
            setContent(data.content);
          }
        }
      } catch (err) {
        // Fallback to default for current country
        setContent(getDefaultContentForCountry(countryCode));
      }
    }
    loadContent();
  }, [countryCode]);

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    setCountryCode(code);
    setContent(getDefaultContentForCountry(code));
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
  };

  const currentCountry = content?.countries?.find(c => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India'
  };

  const handleOpenModal = (type = 'started', productName = '') => {
    setModalState({
      isOpen: true,
      type,
      selectedProduct: productName
    });
  };

  const handleCloseModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Global Header with Live Country Switcher */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Hero Section */}
      <Hero
        hero={content.hero}
        products={content.products}
        onOpenModal={handleOpenModal}
      />

      {/* 4 Products Section */}
      <ProductsSection
        products={content.products}
        onOpenModal={handleOpenModal}
      />

      {/* Why Choose ERP Section */}
      <WhyChooseSection whyChoose={content.whyChoose} />

      {/* Regional Statutory Compliance (GST for India / ZATCA for Saudi Arabia) */}
      <ComplianceSection
        countryCode={countryCode}
        data={content.gstSection}
      />

      {/* Industries Served Section */}
      <IndustriesSection industries={content.industries} />

      {/* Customer Testimonials Section */}
      <TestimonialsSection testimonials={content.testimonials} />

      {/* Global Footer with Live Country Switcher */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
      />

      {/* Interactive Modal for Get Started & Demo */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalType={modalState.type}
        selectedProduct={modalState.selectedProduct}
        countryCode={countryCode}
      />
    </div>
  );
}
