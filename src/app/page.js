'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductsSection from '../components/ProductsSection';
import WhyChooseSection from '../components/WhyChooseSection';
import GstSection from '../components/GstSection';
import IndustriesSection from '../components/IndustriesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';
import LeadModal from '../components/LeadModal';
import { defaultContent } from '../lib/content-store';

export default function HomePage() {
  const [content, setContent] = useState(defaultContent);
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'started',
    selectedProduct: ''
  });

  useEffect(() => {
    // Fetch live content from API if updated via CMS
    async function loadContent() {
      try {
        const res = await fetch('/isarva-erp/api/content');
        if (res.ok) {
          const data = await res.json();
          if (data?.content) setContent(data.content);
        }
      } catch (err) {
        // Fallback to defaultContent
      }
    }
    loadContent();
  }, []);

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
      {/* Global Header */}
      <Navbar content={content} onOpenModal={handleOpenModal} />

      {/* Hero Section */}
      <Hero hero={content.hero} onOpenModal={handleOpenModal} />

      {/* 4 Products Section */}
      <ProductsSection products={content.products} onOpenModal={handleOpenModal} />

      {/* Why Choose ERP Section */}
      <WhyChooseSection whyChoose={content.whyChoose} />

      {/* GST Compliance for India Section */}
      <GstSection gstData={content.gstSection} />

      {/* Industries Served Section */}
      <IndustriesSection industries={content.industries} />

      {/* Customer Testimonials Section */}
      <TestimonialsSection testimonials={content.testimonials} />

      {/* Global Footer */}
      <Footer content={content} />

      {/* Interactive Modal for Get Started & Demo */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        modalType={modalState.type}
        selectedProduct={modalState.selectedProduct}
      />
    </div>
  );
}
