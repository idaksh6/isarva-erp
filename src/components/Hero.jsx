'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
  FileCheck,
  ShieldCheck,
  Zap,
  Clock,
  TrendingUp,
  BarChart3,
  CheckCircle2,
  Smartphone,
  Check,
  Layers,
  UtensilsCrossed,
  Handshake
} from 'lucide-react';
import FlagIcon from './FlagIcon';

export default function Hero({ hero: heroProp, products = [], onOpenModal }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabButtonRefs = useRef([]);

  // Define the 5 high-fidelity hero slides
  const slides = [
    {
      id: 'overview',
      tabLabel: 'All Solutions',
      tabIcon: Layers,
      themeColor: '#007a55',
      lightBg: 'rgba(0, 122, 85, 0.08)',
      badge: heroProp?.badge || 'ALL-IN-ONE ERP SOLUTIONS',
      headlineMain: heroProp?.headlineMain || 'Smart Business Solutions for a',
      headlineHighlight: heroProp?.headlineHighlight || 'Connected Tomorrow',
      subheadline:
        heroProp?.subheadline ||
        'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM in one integrated platform, fully compliant with Indian GST, e-Invoicing and e-Way Bill regulations.',
      primaryCtaText: heroProp?.primaryCtaText || 'Get Started',
      secondaryCtaText: heroProp?.secondaryCtaText || 'Watch Demo',
      modalType: 'started',
      productName: '',
      image: '/images/hero-erp-overview.jpg',
      imageAlt: 'ISARVA Cloud ERP Multi-Device Workspace Dashboard and Touch POS',
      highlights: [
        'Single Unified Cloud Database',
        'Multi-Branch & Real-Time Sync',
        'GST e-Invoice & e-Way Bill Ready'
      ],
      floatingMetric1: {
        title: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'ZATCA Phase 2' : 'GST Compliant',
        subtitle: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'Saudi Fatoora Ready' : 'India & GCC Statutory Ready',
        flag: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'SA' : 'IN'
      },
      floatingMetric2: {
        title: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? '500+ GCC Businesses' : '1,000+ Businesses',
        subtitle: '99.9% Cloud Uptime'
      },
      stats: [
        { label: 'Trusted by', value: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? '500+ GCC Businesses' : '1,000+ Businesses', icon: Users },
        { label: 'Compliance', value: heroProp?.mockupStats?.gstTag?.includes('ZATCA') ? 'ZATCA Phase 2' : 'GST & e-Way Bill', icon: FileCheck },
        { label: 'Security', value: 'Enterprise Ready', icon: ShieldCheck }
      ]

    },
    {
      id: 'restaurant-pos',
      tabLabel: 'Restaurant POS',
      tabIcon: UtensilsCrossed,
      themeColor: '#059669',
      lightBg: 'rgba(5, 150, 105, 0.08)',
      badge: 'RESTAURANT & FOOD SERVICE POS',
      headlineMain: 'Ultra-Fast Touch Billing &',
      headlineHighlight: 'Kitchen Display (KDS)',
      subheadline:
        'Accelerate dine-in, takeaway, quick counter, and multi-aggregator delivery orders. Manage table floor plans, recipe costing, kitchen order tickets (KOT), and split billing in real time.',
      primaryCtaText: 'Explore Restaurant POS',
      secondaryCtaText: 'Book POS Demo',
      modalType: 'demo',
      productName: 'Restaurant POS',
      image: '/images/hero-restaurant-pos.jpg',
      imageAlt: 'ISARVA Restaurant Touch POS Terminal, KDS and Thermal Receipt Printer',
      highlights: [
        'Interactive Table & Floor Layouts',
        'Kitchen Display System (KDS)',
        'Menu & Recipe Inventory Tracking'
      ],
      floatingMetric1: {
        title: '3-Sec Order Dispatch',
        subtitle: 'Instant Kitchen KOT Sync'
      },
      floatingMetric2: {
        title: 'Zero Order Leakage',
        subtitle: 'Table Turnover +35%'
      },
      stats: [
        { label: 'Speed', value: '3-Sec Billing', icon: Zap },
        { label: 'Floor Plan', value: 'Live Table Sync', icon: Clock },
        { label: 'Operations', value: 'Dine-In & Online', icon: UtensilsCrossed }
      ]
    },
    {
      id: 'billsoft',
      tabLabel: 'BillSoft Accounting',
      tabIcon: BarChart3,
      themeColor: '#2563eb',
      lightBg: 'rgba(37, 99, 235, 0.08)',
      badge: 'ACCOUNTING & GST COMPLIANCE',
      headlineMain: 'Automated GST e-Invoicing &',
      headlineHighlight: 'Financial Accounting',
      subheadline:
        'Generate IRN and QR code-ready tax invoices in a single click. Manage purchases, stock inventory, receivables, TDS/TCS returns, and balance sheets effortlessly with 100% statutory compliance.',
      primaryCtaText: 'Explore BillSoft',
      secondaryCtaText: 'Book Accounting Demo',
      modalType: 'demo',
      productName: 'BillSoft Accounting',
      image: '/images/hero-billsoft.jpg',
      imageAlt: 'BillSoft Financial Accounting and GST e-Invoicing Dashboard on Laptop',
      highlights: [
        'Direct GST Portal e-Invoice & IRN',
        'Live Stock Valuation & Reorder Alerts',
        'Multi-Branch Consolidated Ledgers'
      ],
      floatingMetric1: {
        title: '1-Click e-Invoicing',
        subtitle: 'Direct GST Portal Validated',
        flag: 'IN'
      },
      floatingMetric2: {
        title: 'Instant Financials',
        subtitle: 'Live P&L & Balance Sheet'
      },
      stats: [
        { label: 'Compliance', value: '100% GST & IRN', icon: FileCheck },
        { label: 'Speed', value: '1-Click Invoicing', icon: CheckCircle2 },
        { label: 'Financials', value: 'Live P&L Reports', icon: BarChart3 }
      ]
    },
    {
      id: 'hrms',
      tabLabel: 'HRMS',
      tabIcon: Users,
      themeColor: '#7c3aed',
      lightBg: 'rgba(124, 58, 237, 0.08)',
      badge: 'HUMAN RESOURCE & WORKFORCE',
      headlineMain: 'Streamlined Payroll, Leaves &',
      headlineHighlight: 'People Operations',
      subheadline:
        'Automate monthly payroll, PF/ESI/TDS tax deductions, biometric attendance clock-ins, geofencing, employee self-service mobile portal, and onboarding workflows across multiple offices.',
      primaryCtaText: 'Explore HRMS',
      secondaryCtaText: 'Book HRMS Demo',
      modalType: 'demo',
      productName: 'HRMS',
      image: '/images/hero-hrms.jpg',
      imageAlt: 'ISARVA HRMS and Employee Payroll Dashboard on Desktop & Mobile App',
      highlights: [
        'Automated PF, ESI & TDS Computations',
        'Biometric & Mobile GPS Attendance',
        'Employee Self-Service (ESS) Portal'
      ],
      floatingMetric1: {
        title: 'Auto Payroll Run',
        subtitle: '1-Click Payslip Generation'
      },
      floatingMetric2: {
        title: 'Mobile App Ready',
        subtitle: 'Leave & Attendance Tracking'
      },
      stats: [
        { label: 'Payroll', value: '1-Click Processing', icon: Clock },
        { label: 'Attendance', value: 'Biometric & GPS', icon: Users },
        { label: 'Portals', value: 'iOS & Android App', icon: Smartphone }
      ]
    },
    {
      id: 'crm',
      tabLabel: 'CRM',
      tabIcon: Handshake,
      themeColor: '#ea580c',
      lightBg: 'rgba(234, 88, 12, 0.08)',
      badge: 'SALES & CLIENT RELATIONSHIPS',
      headlineMain: 'Accelerate Sales Pipelines &',
      headlineHighlight: 'Customer Conversions',
      subheadline:
        'Track leads from initial inquiry to closed deal with interactive visual Kanban boards. Integrated WhatsApp and email messaging, automated follow-up reminders, and revenue forecasts.',
      primaryCtaText: 'Explore CRM',
      secondaryCtaText: 'Book CRM Demo',
      modalType: 'demo',
      productName: 'CRM',
      image: '/images/hero-crm.jpg',
      imageAlt: 'ISARVA CRM Kanban Sales Pipeline and Customer Management Dashboard',
      highlights: [
        'Multi-Stage Kanban Pipeline Boards',
        'Direct WhatsApp & Email Messaging',
        'Smart Automated Follow-Up Reminders'
      ],
      floatingMetric1: {
        title: '+38% Deal Velocity',
        subtitle: 'Automated Pipeline Tracking'
      },
      floatingMetric2: {
        title: 'Omnichannel Chat',
        subtitle: 'WhatsApp & Email Integrated'
      },
      stats: [
        { label: 'Win Rate', value: '+38% Conversions', icon: TrendingUp },
        { label: 'Channels', value: 'WhatsApp & Email', icon: Clock },
        { label: 'Pipeline', value: 'Visual Kanban', icon: Handshake }
      ]
    }
  ];

  const currentSlide = slides[activeSlideIndex];

  // Auto-slide effect (changes every 6 seconds if not hovered/paused)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  const [touchStartX, setTouchStartX] = useState(0);

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Automatically centralize the active tab button on mobile / responsive viewports
  useEffect(() => {
    const container = tabsContainerRef.current;
    const activeButton = tabButtonRefs.current[activeSlideIndex];
    if (container && activeButton) {
      const containerWidth = container.clientWidth;
      const buttonOffset = activeButton.offsetLeft;
      const buttonWidth = activeButton.clientWidth;

      const targetScrollLeft = buttonOffset - (containerWidth / 2) + (buttonWidth / 2);

      container.scrollTo({
        left: Math.max(0, targetScrollLeft),
        behavior: 'smooth'
      });
    }
  }, [activeSlideIndex]);

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-[#eaf5f0] via-[#f2faf6] to-[#e4f4ed] section-padding-sm border-b border-[#d2ecdf]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Ambient Radial Glows tailored to current theme color */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-colors duration-700 opacity-20"
        style={{ backgroundColor: currentSlide.themeColor }}
      />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#007a55]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* TOP INTERACTIVE PRODUCT SWITCHER TABS */}
        <div className="mb-8 lg:mb-10">
          <div
            ref={tabsContainerRef}
            className="flex items-center justify-start lg:justify-center overflow-x-auto no-scrollbar gap-2 sm:gap-3 pb-2 pt-1 scroll-smooth px-1"
          >
            {slides.map((slide, index) => {
              const isActive = index === activeSlideIndex;
              const IconComponent = slide.tabIcon;

              return (
                <button
                  key={slide.id}
                  ref={(el) => {
                    tabButtonRefs.current[index] = el;
                  }}
                  onClick={() => setActiveSlideIndex(index)}
                  className={`group shrink-0 relative flex items-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-md shadow-slate-900/10 scale-[1.02] border'
                      : 'bg-white/60 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/60'
                  }`}
                  style={{
                    borderColor: isActive ? slide.themeColor : undefined
                  }}
                >
                  {/* Color dot / icon */}
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                    style={{
                      backgroundColor: isActive ? slide.themeColor : 'rgba(148, 163, 184, 0.15)'
                    }}
                  >
                    <IconComponent size={13} strokeWidth={2.5} />
                  </span>

                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* HERO MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Expansive & Prominent Product Information, Highlights & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            
            {/* Category Eyebrow Tag */}
            <div className="inline-block">
              <span
                className="section-eyebrow transition-colors duration-300"
                style={{ color: currentSlide.themeColor }}
              >
                {currentSlide.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="transition-all duration-300">
              {currentSlide.headlineMain}{' '}
              <br className="hidden sm:inline" />
              <span style={{ color: currentSlide.themeColor }}>
                {currentSlide.headlineHighlight}
              </span>
            </h1>

            {/* Subheadline Description */}
            <p className="max-w-xl mx-auto lg:mx-0 transition-opacity duration-300">
              {currentSlide.subheadline}
            </p>

            {/* Mini Feature Highlights Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
              {currentSlide.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/85 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs hover:border-slate-300 transition-all"
                >
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: currentSlide.themeColor }}
                  >
                    <Check size={10} strokeWidth={3} />
                  </span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3.5 sm:gap-4 w-full">
              <button
                onClick={() => onOpenModal(currentSlide.modalType, currentSlide.productName)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
                style={{
                  backgroundColor: currentSlide.themeColor,
                  boxShadow: `0 10px 25px -5px ${currentSlide.themeColor}40`
                }}
              >
                <span>{currentSlide.primaryCtaText}</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => onOpenModal('demo', currentSlide.productName)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/90 hover:bg-white text-slate-900 font-bold text-base border border-slate-200 shadow-xs hover:shadow-md hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
              >
                <span
                  className="w-6 h-6 rounded-full text-white flex items-center justify-center text-xs pl-0.5"
                  style={{ backgroundColor: currentSlide.themeColor }}
                >
                  ▶
                </span>
                <span>{currentSlide.secondaryCtaText}</span>
              </button>
            </div>

            {/* Product Stats / Trust Badges */}
            <div className="pt-4 flex flex-wrap justify-center lg:justify-start items-center gap-5 sm:gap-7 border-t border-slate-200/70 w-full">
              {currentSlide.stats.map((stat, idx) => {
                const StatIcon = stat.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center shadow-xs shrink-0"
                      style={{
                        backgroundColor: currentSlide.lightBg,
                        color: currentSlide.themeColor
                      }}
                    >
                      <StatIcon size={17} strokeWidth={2.4} />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-slate-500 font-medium leading-none">{stat.label}</div>
                      <div className="text-sm font-black text-slate-900 mt-1">{stat.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Slider Carousel with Browser Chrome & Floating Badges */}
          <div className="lg:col-span-5 xl:col-span-5 relative flex flex-col items-center justify-center w-full">
            
            {/* Slider Image Card Container */}
            <div
              className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 bg-white shadow-2xl shadow-slate-900/10 group select-none"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slider Track Container with Sleek Controlled Proportion */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden bg-slate-100">
                {/* Hardware-Accelerated Sliding Track */}
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className="w-full h-full shrink-0 relative overflow-hidden bg-slate-100"
                    >
                      <img
                        src={slide.image}
                        alt={slide.imageAlt}
                        className="w-full h-full object-cover block"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                      {/* Subtle bottom vignette gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent pointer-events-none" />
                    </div>
                  ))}
                </div>

                {/* Floating Metric Badge 1 (Top Left) */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20 pointer-events-none">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-lg shadow-slate-900/10">
                    {currentSlide.floatingMetric1.flag ? (
                      <FlagIcon country={currentSlide.floatingMetric1.flag} className="w-4 h-3.5 rounded-xs shadow-2xs" />
                    ) : (
                      <span
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: currentSlide.themeColor }}
                      />
                    )}
                    <div>
                      <div className="text-[11px] font-black text-slate-900 leading-none">
                        {currentSlide.floatingMetric1.title}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium mt-0.5 leading-none">
                        {currentSlide.floatingMetric1.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Bottom Right) */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 z-20 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 text-white backdrop-blur-md border border-slate-700/80 shadow-lg">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: currentSlide.themeColor }}
                    />
                    <div>
                      <div className="text-[11px] font-bold leading-none">
                        {currentSlide.floatingMetric2.title}
                      </div>
                      <div className="text-[10px] text-slate-300 font-normal mt-0.5 leading-none">
                        {currentSlide.floatingMetric2.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* On-Card Navigation Arrows (Left & Right) */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous product slide"
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200/80 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next product slide"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md border border-slate-200/80 flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 active:scale-95 transition-all"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

            </div>

            {/* Slider Navigation Bar (Dots, Status & Counter) */}
            <div className="flex items-center justify-between w-full mt-3.5 px-1.5">
              
              {/* Dot Indicators */}
              <div className="flex items-center gap-1.5">
                {slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activeSlideIndex
                        ? 'w-7 shadow-xs'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    style={{
                      backgroundColor: idx === activeSlideIndex ? currentSlide.themeColor : undefined
                    }}
                  />
                ))}
              </div>

              {/* Slide Counter */}
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-500">
                <span className="text-slate-900">0{activeSlideIndex + 1}</span>
                <span className="text-slate-300">/</span>
                <span>0{slides.length}</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}