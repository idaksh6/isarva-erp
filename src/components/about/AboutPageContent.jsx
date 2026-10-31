'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import 'aos/dist/aos.css';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Users,
  Target,
  Award,
  Sparkles,
  Globe2,
  Clock,
  Zap,
  Building2,
  Server,
  Layers,
  Lock,
  Database,
  Check,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import LeadModal from '../LeadModal';
import FlagIcon from '../FlagIcon';
import { getDefaultContentForCountry } from '../../lib/content';
import { renderTitleWithGradient } from '../../lib/render-title';

export default function AboutPageContent({ initialCountry = 'IN' }) {
  const router = useRouter();
  const [countryCode, setCountryCode] = useState(initialCountry);
  const [content, setContent] = useState(() => getDefaultContentForCountry(initialCountry));
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: 'started',
    selectedProduct: ''
  });

  // Dynamically initialize AOS on client mount
  useEffect(() => {
    let aosInstance = null;
    import('aos').then((module) => {
      aosInstance = module.default || module;
      aosInstance.init({
        duration: 700,
        easing: 'ease-out-cubic',
        once: false,
        offset: 50,
        delay: 50,
      });
      setTimeout(() => {
        aosInstance?.refresh();
      }, 150);
    });
  }, []);

  // Sync country code
  useEffect(() => {
    setCountryCode(initialCountry);
    setContent(getDefaultContentForCountry(initialCountry));
  }, [initialCountry]);

  const handleCountryChange = (countryObj) => {
    const code = countryObj?.code || 'IN';
    if (typeof window !== 'undefined') {
      localStorage.setItem('isarva_country', code);
    }
    if (code === 'SA') {
      router.push('/sa');
    } else {
      router.push('/');
    }
  };

  const currentCountry = content?.countries?.find((c) => c.code === countryCode) || {
    code: countryCode,
    name: countryCode === 'SA' ? 'Saudi Arabia' : 'India'
  };

  const handleOpenModal = (type = 'demo', productName = '') => {
    setModalState({
      isOpen: true,
      type,
      selectedProduct: productName
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Global Header */}
      <Navbar
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      <main className="flex-grow">
        {/* =========================================================================
            HERO SECTION
            ========================================================================= */}
        <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#f0f8f4] via-[#f7fbf9] to-slate-50 border-b border-emerald-950/10">
          {/* Subtle Ambient Radial Accents */}
          <div className="absolute top-10 left-1/4 w-[500px] h-[400px] bg-emerald-200/40 blur-[130px] rounded-full pointer-events-none" />
          <div className="absolute top-20 right-10 w-[450px] h-[350px] bg-teal-200/35 blur-[120px] rounded-full pointer-events-none" />

          <div className="site-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Eyebrow Badge */}
              <div
                data-aos="fade-down"
                data-aos-duration="600"
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full bg-emerald-100/80 border border-emerald-300/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-2xs"
              >
                <Sparkles size={14} className="text-[#007a55]" />
                <span className="section-eyebrow">ABOUT ISARVA ERP</span>
              </div>

              {/* Space Grotesk Heading via @layer base */}
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="mb-6 capitalize"
              >
                Connecting Your Operations.{' '}
                <span className="bg-gradient-to-r from-[#007a55] via-[#059669] to-[#0284c7] bg-clip-text text-transparent">
                  Empowering Your Growth
                </span>
                .
              </h1>

              {/* Inter Body Paragraph via @layer base */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="max-w-3xl mx-auto mb-10 text-slate-600"
              >
                At ISARVA, we believe modern businesses shouldn't struggle with disconnected spreadsheets, siloed desktop tools, and painful manual reconciliations. We engineer unified, intelligent cloud software that brings your billing, accounting, inventory, workforce, and customer operations into one real-time ecosystem.
              </p>

              {/* Quick Action Buttons */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="700"
                className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14"
              >
                <button
                  type="button"
                  onClick={() => handleOpenModal('demo')}
                  className="btn-brand-primary w-full sm:w-auto"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  href="/#products"
                  className="btn-brand-secondary w-full sm:w-auto"
                >
                  <span>Explore Our Solutions</span>
                </Link>
              </div>

              {/* Key Trust Stats Bar */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="700"
                className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-emerald-950/10 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.14)]"
              >
                <div className="text-center p-3">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#007a55] font-mono">10+</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Years Industry Experience</div>
                </div>
                <div className="text-center p-3 border-l border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">99.9%</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Cloud Service Uptime</div>
                </div>
                <div className="text-center p-3 border-t md:border-t-0 md:border-l border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#007a55] font-mono">100%</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Statutory Compliant</div>
                </div>
                <div className="text-center p-3 border-t md:border-t-0 border-l border-slate-100">
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">24/7</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1">Dedicated Support</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            MISSION & VISION SECTION
            ========================================================================= */}
        <section className="section-padding bg-white border-b border-slate-200/80">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
              
              {/* Mission Card */}
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#f2f9f5] via-white to-[#e8f5ee] border border-emerald-300/60 shadow-[0_12px_36px_-6px_rgba(0,122,85,0.12)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#007a55] text-white flex items-center justify-center mb-6 shadow-md shadow-emerald-600/25">
                    <Target size={24} strokeWidth={2.4} />
                  </div>
                  <div className="section-eyebrow text-[#007a55] mb-2">OUR PURPOSE</div>
                  <h2 className="mb-4">
                    Empowering Every Business with Connected Clarity
                  </h2>
                  <p className="mb-6">
                    Our mission is to democratize high-performance enterprise resource planning for growing companies. We replace fragmented point software with a unified, real-time platform that gives business owners complete control over point-of-sale, accounting, stock flow, payroll, and customer pipelines.
                  </p>
                </div>
                <ul className="space-y-3 pt-6 border-t border-emerald-950/10 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0" />
                    <span>Eliminate duplicate manual data entry across departments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0" />
                    <span>Provide instantaneous visibility into cash flow and profit margins</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0" />
                    <span>Ensure total statutory compliance with India GST and Saudi ZATCA</span>
                  </li>
                </ul>
              </div>

              {/* Vision Card */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="700"
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0b1a30] to-slate-950 text-white border border-slate-800 shadow-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-emerald-400/25">
                    <Award size={24} strokeWidth={2.4} />
                  </div>
                  <div className="section-eyebrow text-emerald-400 mb-2">OUR VISION</div>
                  <h2 className="mb-4 text-white">
                    The Modern Operating Standard for India &amp; GCC
                  </h2>
                  <p className="mb-6 text-slate-300">
                    We envision a future where business management software is effortless, smart, and regionally compliant out of the box. Whether running a multi-branch restaurant chain or scaling an enterprise wholesale distribution network, ISARVA ERP serves as the digital backbone that propels sustainable growth.
                  </p>
                </div>
                <ul className="space-y-3 pt-6 border-t border-slate-800 text-sm text-slate-300 font-medium">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>Continuous cloud innovation with zero operational downtime</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>Local regulatory compliance engineered directly into every workflow</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                    <span>Unmatched customer partnership with hands-on onboarding support</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            THE ISARVA STORY & ARCHITECTURE
            ========================================================================= */}
        <section className="section-padding bg-slate-50/70 border-b border-slate-200">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <div className="section-eyebrow">THE ISARVA JOURNEY</div>
              <h2>
                Built to Eliminate the Friction in Everyday Operations
              </h2>
              <p>
                Developed by <strong>Isarva Infotech Pvt Ltd</strong>, ISARVA ERP was born from firsthand experience with the limitations of traditional ERP software: steep learning curves, expensive per-user licensing, and disconnected modules that require manual glue code.
              </p>
            </div>

            {/* Comparison Grid: Fragmented Old Way vs ISARVA Connected Platform */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* The Fragmented Reality */}
              <div
                data-aos="fade-right"
                data-aos-duration="700"
                className="p-7 sm:p-9 rounded-2xl bg-white border border-red-200/80 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    ✕
                  </div>
                  <h3 className="text-slate-900">
                    The Disconnected Legacy Stack
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-600">
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">!</span>
                    <span>Separate billing software, desktop accounting files, and disparate HR spreadsheets.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">!</span>
                    <span>Inventory numbers out of sync between the warehouse floor and sales registers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">!</span>
                    <span>Stressful month-end tax filing with frequent statutory reconciliation errors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">!</span>
                    <span>High licensing overhead, lengthy staff training, and slow vendor turnaround.</span>
                  </li>
                </ul>
              </div>

              {/* The ISARVA Way */}
              <div
                data-aos="fade-left"
                data-aos-duration="700"
                className="p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-[#f0f8f4] via-white to-[#e8f6ef] border-2 border-[#007a55]/60 shadow-[0_16px_40px_-6px_rgba(0,122,85,0.18)]"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#007a55] text-white flex items-center justify-center font-bold shadow-xs">
                    ✓
                  </div>
                  <h3 className="text-slate-900">
                    The ISARVA Connected Platform
                  </h3>
                </div>
                <ul className="space-y-4 text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Single cloud database connecting Restaurant POS, Accounting, HRMS, and CRM in real time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Instant automatic stock deductions when an order is punched or invoice is generated.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Built-in India GST / e-Invoicing &amp; Saudi ZATCA Phase 2 compliance with 1-click filing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Intuitive, modern UI accessible from any browser, tablet, or mobile phone anywhere.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            CORE ENGINEERING PILLARS
            ========================================================================= */}
        <section className="section-padding bg-white border-b border-slate-200">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
              <div className="section-eyebrow">OUR ARCHITECTURAL PILLARS</div>
              <h2>
                Engineered for Reliability, Speed &amp; Compliance
              </h2>
              <p>
                Every module in ISARVA ERP is crafted to meet enterprise standards without enterprise complexity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Pillar 1 */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="600"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(0,122,85,0.12)] hover:border-[#007a55]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#007a55] flex items-center justify-center mb-5 group-hover:bg-[#007a55] group-hover:text-white transition-colors duration-300">
                  <Zap size={22} strokeWidth={2.4} />
                </div>
                <h3 className="mb-2">Real-Time Cloud Sync</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Centralized multi-branch data synchronization guarantees your sales, inventory, and ledgers remain always up to the second.
                </p>
              </div>

              {/* Pillar 2 */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="600"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(0,122,85,0.12)] hover:border-[#007a55]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <ShieldCheck size={22} strokeWidth={2.4} />
                </div>
                <h3 className="mb-2">Statutory Readiness</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Native compliance for GST e-Invoicing, E-Way bills in India, and Phase 2 ZATCA integration in Saudi Arabia.
                </p>
              </div>

              {/* Pillar 3 */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="600"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(0,122,85,0.12)] hover:border-[#007a55]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <Users size={22} strokeWidth={2.4} />
                </div>
                <h3 className="mb-2">Zero-Friction UX</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Modern interfaces that require minimal training. Designed for fast-paced cashiers, floor staff, and accountants alike.
                </p>
              </div>

              {/* Pillar 4 */}
              <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="600"
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_36px_rgba(0,122,85,0.12)] hover:border-[#007a55]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-5 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                  <Lock size={22} strokeWidth={2.4} />
                </div>
                <h3 className="mb-2">Enterprise Security</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  256-bit SSL encryption, automated daily off-site backups, role-based access control, and comprehensive audit logs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            GLOBAL FOOTPRINT & REGIONAL HUBS
            ========================================================================= */}
        <section className="section-padding bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
          <div className="site-container">
            <div className="max-w-3xl mx-auto text-center mb-14">
              <div className="section-eyebrow">GLOBAL FOOTPRINT</div>
              <h2>
                Serving Modern Businesses Across India &amp; GCC
              </h2>
              <p>
                Our dual-region engineering and support hubs deliver localized tax compliance, rapid response times, and on-ground deployment expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* India Operations */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="700"
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-[#007a55]/60 hover:shadow-[0_16px_40px_rgba(0,122,85,0.14)] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <FlagIcon code="IN" className="w-8 h-6 rounded shadow-xs" />
                  <div>
                    <h3 className="text-slate-900 leading-tight">India Operations</h3>
                    <div className="text-xs text-[#007a55] font-semibold">Headquarters &amp; Tech R&amp;D Hub</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={17} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Commercial Complex, Bajpe, Mangalore &amp; Tech Park, Bangalore, Karnataka, India</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={17} className="text-[#007a55] shrink-0" />
                    <a href="tel:+919902863697" className="hover:text-[#007a55] transition-colors">+91 9902863697</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={17} className="text-[#007a55] shrink-0" />
                    <a href="mailto:marketing@isarvait.com" className="hover:text-[#007a55] transition-colors">marketing@isarvait.com</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">GST Compliance</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">e-Invoicing / IRN</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold">INR (₹) Multi-Branch</span>
                </div>
              </div>

              {/* Saudi Arabia & GCC Operations */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="700"
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] hover:border-[#007a55]/60 hover:shadow-[0_16px_40px_rgba(0,122,85,0.14)] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 mb-5">
                  <FlagIcon code="SA" className="w-8 h-6 rounded shadow-xs" />
                  <div>
                    <h3 className="text-slate-900 leading-tight">Saudi Arabia &amp; GCC</h3>
                    <div className="text-xs text-[#007a55] font-semibold">Regional Enterprise &amp; Compliance Hub</div>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-slate-600 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={17} className="text-[#007a55] shrink-0 mt-0.5" />
                    <span>Riyadh &amp; Jeddah, Kingdom of Saudi Arabia | UAE &amp; Middle East Support</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={17} className="text-[#007a55] shrink-0" />
                    <a href="tel:+966555812975" className="hover:text-[#007a55] transition-colors">+966 55 581 2975</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={17} className="text-[#007a55] shrink-0" />
                    <a href="mailto:info@isarvait.com" className="hover:text-[#007a55] transition-colors">info@isarvait.com</a>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold">ZATCA Phase 2</span>
                  <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold">Fatoorah QR Codes</span>
                  <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-teal-800 text-xs font-semibold">SAR (ر.س) Currency</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================================================
            BOTTOM CALL TO ACTION BANNER
            ========================================================================= */}
        <section className="section-padding bg-gradient-to-br from-[#007a55] via-[#006949] to-[#034d36] text-white relative overflow-hidden">
          <div className="site-container relative z-10 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider mb-5">
                <Sparkles size={13} />
                <span>READY TO EXPERIENCE THE DIFFERENCE?</span>
              </div>
              <h2 className="text-white mb-5">
                Transform Your Business Operations Today
              </h2>
              <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
                Schedule a personalized walk-through with our solution consultants. See how ISARVA ERP connects your teams, automates compliance, and accelerates your growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenModal('demo')}
                  className="px-8 py-3.5 rounded-xl bg-white text-[#007a55] hover:bg-emerald-50 font-bold text-sm shadow-xl hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight size={16} />
                </button>
                <Link
                  href="/#contact"
                  className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-sm hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer
        content={content}
        selectedCountry={currentCountry}
        onSelectCountry={handleCountryChange}
        onOpenModal={handleOpenModal}
      />

      {/* Interactive Lead / Demo Modal */}
      <LeadModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
        selectedProduct={modalState.selectedProduct}
        countryCode={countryCode}
      />
    </div>
  );
}
