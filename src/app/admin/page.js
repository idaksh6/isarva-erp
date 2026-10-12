'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  FileText,
  Package,
  CheckCircle2,
  Users,
  Settings,
  Save,
  Eye,
  EyeOff,
  LogOut,
  Mail,
  Phone,
  Building,
  Clock,
  Sparkles,
  Lock,
  KeyRound,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Plus,
  Trash2,
  Star
} from 'lucide-react';
import { defaultContent } from '../../lib/content-store';
import ImageUploadField from '../../components/ImageUploadField';

const WHY_CHOOSE_ICON_OPTIONS = [

  { value: 'Layers', label: '📑 Layers (All-in-One)' },
  { value: 'ShieldCheck', label: '🛡️ Shield Check (Compliance & Security)' },
  { value: 'Store', label: '🏪 Store (Multi-Branch)' },
  { value: 'TrendingUp', label: '📈 Trending Up (Growth / Analytics)' },
  { value: 'BarChart3', label: '📊 Bar Chart (Reports)' },
  { value: 'Cloud', label: '☁️ Cloud (Cloud-based)' },
  { value: 'Lock', label: '🔒 Lock (Security / Privacy)' },
  { value: 'Zap', label: '⚡ Zap (Speed & Performance)' },
  { value: 'CheckCircle2', label: '✅ Check Circle (Quality)' },
  { value: 'Users', label: '👥 Users (Collaboration)' },
  { value: 'Smartphone', label: '📱 Smartphone (Mobile POS)' },
  { value: 'Sparkles', label: '✨ Sparkles (AI / Modern)' },
  { value: 'Cpu', label: '💻 CPU (Automated Tech)' },
  { value: 'Clock', label: '⏱️ Clock (24/7 Availability)' },
  { value: 'Database', label: '🗄️ Database (Unified Storage)' },
  { value: 'Headphones', label: '🎧 Headphones (Customer Support)' },
];

const INDUSTRY_ICON_OPTIONS = [

  { value: 'Utensils', label: '🍴 Utensils (F&B / Restaurants)' },
  { value: 'Store', label: '🏪 Store (Retail / Shops)' },
  { value: 'ShoppingBag', label: '🛍️ Shopping Bag (Apparel / Fashion)' },
  { value: 'ShoppingCart', label: '🛒 Shopping Cart (Supermarkets / FMCG)' },
  { value: 'Coffee', label: '☕ Coffee (Cafés & Chains)' },
  { value: 'Boxes', label: '📦 Boxes (Wholesale / Warehousing)' },
  { value: 'Building2', label: '🏢 Building (Enterprise / Corporate)' },
  { value: 'Factory', label: '🏭 Factory (Manufacturing / Industry)' },
  { value: 'Truck', label: '🚚 Truck (Logistics & Supply Chain)' },
  { value: 'Hotel', label: '🏨 Hotel (Hospitality)' },
  { value: 'Scissors', label: '✂️ Scissors (Salons & Services)' },
  { value: 'Briefcase', label: '💼 Briefcase (Professional Services)' },
  { value: 'Layers', label: '📑 Layers (Multi-Branch / Other)' },
];

export default function AdminCMS() {

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // CMS Content & Inquiries State
  const [activeTab, setActiveTab] = useState('hero');
  const [content, setContent] = useState(defaultContent);
  const [inquiries, setInquiries] = useState([]);
  const [savedStatus, setSavedStatus] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // Check saved session on load
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('isarva_admin_session');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'isarva2026';

    if (passwordInput === validPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('isarva_admin_session', 'true');
      sessionStorage.setItem('isarva_admin_token', passwordInput);
      setLoginError('');
      loadData(passwordInput);
    } else {
      setLoginError('Invalid Administrator Passcode. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isarva_admin_session');
    sessionStorage.removeItem('isarva_admin_token');
    setPasswordInput('');
  };

  const loadData = async (tokenOverride) => {
    const token = tokenOverride || sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        const data = await res.json();
        if (data?.content) setContent(data.content);
      }
      const inqRes = await fetch('/api/inquiries', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      });
      if (inqRes.ok) {
        const inqData = await inqRes.json();
        if (inqData?.inquiries) setInquiries(inqData.inquiries);
      }
    } catch (err) {
      console.warn('Using local fallback data');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSavedStatus('Saving changes...');
    const token = sessionStorage.getItem('isarva_admin_token') || 'isarva2026';
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(content)
      });
      if (res.ok) {
        setSavedStatus('? Saved successfully! Live site updated.');
      } else {
        const errData = await res.json();
        setSavedStatus(errData.error || 'Failed to save changes.');
      }
    } catch (err) {
      setSavedStatus('Changes applied to session.');
    } finally {
      setIsSaving(false);
      setTimeout(() => setSavedStatus(''), 4000);
    }
  };

  const handleAddIndustry = () => {
    const currentItems = content.industries?.items || [];
    const newItem = {
      name: 'New Industry',
      iconName: 'Building2',
      tag: 'Sector'
    };
    setContent({
      ...content,
      industries: {
        ...content.industries,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveIndustry = (removeIdx) => {
    const currentItems = content.industries?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 industry category.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      industries: {
        ...content.industries,
        items: filtered
      }
    });
  };

  const handleAddWhyChoose = () => {
    const currentItems = content.whyChoose?.items || [];
    const newItem = {
      id: `wc${Date.now()}`,
      title: 'New Feature',
      description: 'Feature description explaining the business value.',
      iconName: 'ShieldCheck'
    };
    setContent({
      ...content,
      whyChoose: {
        ...content.whyChoose,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveWhyChoose = (removeIdx) => {
    const currentItems = content.whyChoose?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 feature card.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      whyChoose: {
        ...content.whyChoose,
        items: filtered
      }
    });
  };

  const handleAddTestimonial = () => {
    const currentItems = content.testimonials?.items || [];
    const newItem = {
      id: `tst${Date.now()}`,
      name: 'Client Business Name',
      location: 'City, State',
      rating: 5,
      quote: 'ISARVA ERP has completely streamlined our business operations.',
      initials: 'CB',
      avatarImage: ''
    };
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: [...currentItems, newItem]
      }
    });
  };

  const handleRemoveTestimonial = (removeIdx) => {
    const currentItems = content.testimonials?.items || [];
    if (currentItems.length <= 1) {
      alert('You must keep at least 1 testimonial.');
      return;
    }
    const filtered = currentItems.filter((_, idx) => idx !== removeIdx);
    setContent({
      ...content,
      testimonials: {
        ...content.testimonials,
        items: filtered
      }
    });
  };

  // --- 1. LIGHT THEME LOGIN SECURITY GATE SCREEN ---


  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Subtle Decorative Background Gradients */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="bg-white border border-slate-200 rounded-3xl p-8 max-w-md w-full shadow-xl relative z-10 space-y-6 animate-fadeIn">
          
          {/* Logo & Header */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#007a55] to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-[#007a55]/20">
              <Lock size={26} />
            </div>
            <h2 className="pt-2">
              ISARVA ERP Admin CMS
            </h2>
            <p>
              Enter the administrator passcode to access website content and leads.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Administrator Passcode
              </label>

              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter administrator passcode..."
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 p-2.5 rounded-lg text-center animate-fadeIn">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="btn-brand-primary w-full py-3 text-sm mt-2 flex items-center justify-center gap-2 shadow-md shadow-brand-600/20"
            >
              <span>Unlock Admin Panel</span>
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Return link */}
          <div className="text-center pt-2 border-t border-slate-100">
            <Link href="/" className="text-xs font-medium text-slate-500 hover:text-brand-600 transition-colors">
              ? Return to Public Website
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // --- 2. LIGHT THEME CMS DASHBOARD SCREEN ---
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Admin Topbar */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-50 shadow-xs">
        <div className="flex items-center gap-3">
          <img
            src="/images/isarva-logo.png"
            alt="ISARVA Logo"
            className="h-8 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/images/isarva-logo.png';
            }}
          />
          <span className="text-xs text-brand-700 font-bold px-2 py-0.5 rounded bg-brand-50 border border-brand-200">
            Admin CMS
          </span>
        </div>

        <div className="flex items-center gap-3">
          {savedStatus && (
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200 animate-fadeIn">
              {savedStatus}
            </span>
          )}

          <button
            onClick={handleSave}
            disabled={isSaving}
            className="btn-brand-primary text-xs py-2 px-4 shadow-sm"
          >
            <Save size={15} />
            <span>{isSaving ? 'Saving...' : 'Save All Changes'}</span>
          </button>

          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 border border-slate-200 transition-colors"
          >
            <Eye size={14} />
            <span>View Live Site</span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-xs font-bold text-red-600 border border-red-200 transition-colors"
            title="Lock & Log Out"
          >
            <LogOut size={14} />
            <span>Lock</span>
          </button>
        </div>
      </header>

      {/* Main Admin Workspace Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white border-r border-slate-200 p-4 space-y-1.5 shrink-0 hidden md:block">
          <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
            Content Sections
          </div>

          <button
            onClick={() => setActiveTab('hero')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'hero' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <LayoutDashboard size={16} />
            <span>Hero & Headings</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'products' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Package size={16} />
            <span>4 ERP Products</span>
          </button>

          <button
            onClick={() => setActiveTab('gst')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'gst' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <CheckCircle2 size={16} />
            <span>GST & Why Choose</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'testimonials' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Users size={16} />
            <span>Customer Testimonials</span>
          </button>

          <button
            onClick={() => setActiveTab('industries')}
            className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'industries' ? 'bg-brand-50 text-brand-700 border border-brand-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Building size={16} />
            <span>Industries We Serve</span>
          </button>

          <div className="pt-4 mt-4 border-t border-slate-200">
            <div className="text-xs font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
              Customer Leads
            </div>
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'inquiries' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Mail size={16} />
                <span>Demo Inquiries</span>
              </div>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                {inquiries.length}
              </span>
            </button>
          </div>
        </aside>

        {/* Content Editor Area */}
        <main className="flex-1 p-8 overflow-y-auto max-w-4xl space-y-6">
          
          {/* TAB 1: HERO SECTION */}
          {activeTab === 'hero' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Hero Banner Content</h2>
                <p>Update top headline, description paragraph, and CTA buttons.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Top Pill Badge</label>
                  <input
                    type="text"
                    value={content.hero?.badge || ''}
                    onChange={(e) => setContent({
                      ...content,
                      hero: { ...content.hero, badge: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Headline Line 1</label>
                    <input
                      type="text"
                      value={content.hero?.headlineMain || ''}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, headlineMain: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Highlight Line 2</label>
                    <input
                      type="text"
                      value={content.hero?.headlineHighlight || ''}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, headlineHighlight: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subheadline Description</label>
                  <textarea
                    rows="3"
                    value={content.hero?.subheadline || ''}
                    onChange={(e) => setContent({
                      ...content,
                      hero: { ...content.hero, subheadline: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Primary CTA Button</label>
                    <input
                      type="text"
                      value={content.hero?.primaryCtaText || ''}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, primaryCtaText: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Secondary CTA Button</label>
                    <input
                      type="text"
                      value={content.hero?.secondaryCtaText || ''}
                      onChange={(e) => setContent({
                        ...content,
                        hero: { ...content.hero, secondaryCtaText: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS SECTION */}
          {activeTab === 'products' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Products & Features (4 Modules)</h2>
                <p>Edit titles, subtitles, and checklist items for POS, BillSoft, HRMS, and CRM.</p>
              </div>

              <div className="space-y-6">
                {content.products?.map((prod, pIdx) => (
                  <div key={prod.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: prod.color }} />
                        <span className="font-bold text-base text-slate-900">{prod.title}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{prod.themeClass}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={prod.title}
                          onChange={(e) => {
                            const newProds = [...content.products];
                            newProds[pIdx].title = e.target.value;
                            setContent({ ...content, products: newProds });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                        <input
                          type="text"
                          value={prod.subtitle}
                          onChange={(e) => {
                            const newProds = [...content.products];
                            newProds[pIdx].subtitle = e.target.value;
                            setContent({ ...content, products: newProds });
                          }}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                    </div>

                    <ImageUploadField
                      label="Product Preview Image"
                      value={prod.image || ''}
                      placeholder="/images/pos-card-preview.jpg"
                      onChange={(url) => {
                        const newProds = [...content.products];
                        newProds[pIdx].image = url;
                        setContent({ ...content, products: newProds });
                      }}
                    />


                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">Feature Checklist (Line separated)</label>
                      <textarea
                        rows="5"
                        value={prod.features?.join('\n')}
                        onChange={(e) => {
                          const newProds = [...content.products];
                          newProds[pIdx].features = e.target.value.split('\n').filter(Boolean);
                          setContent({ ...content, products: newProds });
                        }}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 leading-relaxed font-mono text-xs"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GST & WHY CHOOSE */}
          {activeTab === 'gst' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>GST Compliance & Why Choose</h2>
                <p>Configure Indian statutory requirements and value proposition cards.</p>
              </div>

              {/* GST Section Details */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">GST Compliance Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.gstSection?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        gstSection: { ...content.gstSection, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.gstSection?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        gstSection: { ...content.gstSection, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.gstSection?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      gstSection: { ...content.gstSection, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Checklist Items (Line separated)</label>
                  <textarea
                    rows="4"
                    value={content.gstSection?.checklist?.join('\n') || ''}
                    onChange={(e) => setContent({
                      ...content,
                      gstSection: {
                        ...content.gstSection,
                        checklist: e.target.value.split('\n').filter(Boolean)
                      }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-mono text-xs"
                  />
                </div>
              </div>

              {/* Why Choose Section Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Why Choose Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.whyChoose?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        whyChoose: { ...content.whyChoose, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.whyChoose?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        whyChoose: { ...content.whyChoose, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.whyChoose?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      whyChoose: { ...content.whyChoose, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Why Choose Cards Grid */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Why Choose Cards ({content.whyChoose?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove feature cards. The frontend grid reconfigures dynamically.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddWhyChoose}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Feature Card
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.whyChoose?.items?.map((item, idx) => (
                    <div
                      key={item.id || idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Card #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveWhyChoose(idx)}
                          title="Remove this feature card"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
                        <input
                          type="text"
                          value={item.title || ''}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], title: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                          placeholder="e.g. Real-Time Reports"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Icon</label>
                        <select
                          value={item.iconName || 'ShieldCheck'}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], iconName: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                        >
                          {WHY_CHOOSE_ICON_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Description</label>
                        <textarea
                          rows="2"
                          value={item.description || ''}
                          onChange={(e) => {
                            const newItems = [...(content.whyChoose?.items || [])];
                            newItems[idx] = { ...newItems[idx], description: e.target.value };
                            setContent({
                              ...content,
                              whyChoose: { ...content.whyChoose, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                          placeholder="Short description..."
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddWhyChoose}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Feature Card
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Customer Testimonials</h2>
                <p>Manage client reviews, business names, star ratings, and quotes.</p>
              </div>

              {/* Testimonials Header */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.testimonials?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        testimonials: { ...content.testimonials, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.testimonials?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        testimonials: { ...content.testimonials, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.testimonials?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      testimonials: { ...content.testimonials, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Testimonials List */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Reviews ({content.testimonials?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove testimonials. The infinite marquee adapts seamlessly.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Testimonial
                  </button>
                </div>

                <div className="space-y-4">
                  {content.testimonials?.items?.map((tst, idx) => (
                    <div key={tst.id || idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 relative hover:border-emerald-300 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          Review #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTestimonial(idx)}
                          title="Remove this review"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Company / Restaurant Name</label>
                          <input
                            type="text"
                            value={tst.name || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], name: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                            placeholder="e.g. Spice Garden Restaurant"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                          <input
                            type="text"
                            value={tst.location || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], location: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                            placeholder="e.g. Bangalore, India"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Rating</label>
                          <select
                            value={tst.rating || 5}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], rating: Number(e.target.value) };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                          >
                            <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                            <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                            <option value={3}>⭐⭐⭐ (3 Stars)</option>
                            <option value={2}>⭐⭐ (2 Stars)</option>
                            <option value={1}>⭐ (1 Star)</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Initials (Fallback)</label>
                          <input
                            type="text"
                            maxLength={3}
                            value={tst.initials || ''}
                            onChange={(e) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], initials: e.target.value };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                            className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 uppercase font-mono"
                            placeholder="e.g. SG"
                          />
                        </div>
                        <div className="sm:col-span-3">
                          <ImageUploadField
                            label="Store / Avatar Photo"
                            value={tst.avatarImage || ''}
                            placeholder="/images/tst-spice-garden.jpg"
                            compact
                            onChange={(url) => {
                              const newItems = [...(content.testimonials?.items || [])];
                              newItems[idx] = { ...newItems[idx], avatarImage: url };
                              setContent({
                                ...content,
                                testimonials: { ...content.testimonials, items: newItems }
                              });
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Customer Quote</label>
                        <textarea
                          rows="2"
                          value={tst.quote || ''}
                          onChange={(e) => {
                            const newItems = [...(content.testimonials?.items || [])];
                            newItems[idx] = { ...newItems[idx], quote: e.target.value };
                            setContent({
                              ...content,
                              testimonials: { ...content.testimonials, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                          placeholder="Write the customer testimonial here..."
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddTestimonial}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Testimonial
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB: INDUSTRIES */}
          {activeTab === 'industries' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2>Industries We Serve</h2>
                <p>Configure industry category names and sector titles shown on the homepage.</p>
              </div>

              {/* Section Header Inputs */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-emerald-700">Section Header</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Badge Text</label>
                    <input
                      type="text"
                      value={content.industries?.badge || ''}
                      onChange={(e) => setContent({
                        ...content,
                        industries: { ...content.industries, badge: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Main Heading</label>
                    <input
                      type="text"
                      value={content.industries?.title || ''}
                      onChange={(e) => setContent({
                        ...content,
                        industries: { ...content.industries, title: e.target.value }
                      })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Subtitle</label>
                  <input
                    type="text"
                    value={content.industries?.subtitle || ''}
                    onChange={(e) => setContent({
                      ...content,
                      industries: { ...content.industries, subtitle: e.target.value }
                    })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                  />
                </div>
              </div>

              {/* Dynamic Industry Items Grid */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="text-emerald-700">Industry Categories ({content.industries?.items?.length || 0})</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Add, edit, or remove industry categories. The website grid adapts automatically.</p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddIndustry}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs cursor-pointer"
                  >
                    <Plus size={15} /> Add Industry
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {content.industries?.items?.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative group hover:border-emerald-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveIndustry(idx)}
                          title="Remove this industry"
                          className="text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg border border-rose-200 flex items-center gap-1 transition cursor-pointer"
                        >
                          <Trash2 size={13} />
                          <span>Remove</span>
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Industry Name</label>
                        <input
                          type="text"
                          value={ind.name || ''}
                          onChange={(e) => {
                            const newItems = [...(content.industries?.items || [])];
                            newItems[idx] = { ...newItems[idx], name: e.target.value };
                            setContent({
                              ...content,
                              industries: { ...content.industries, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 font-semibold"
                          placeholder="e.g. Retail Stores"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Sector Tag</label>
                          <input
                            type="text"
                            value={ind.tag || ''}
                            onChange={(e) => {
                              const newItems = [...(content.industries?.items || [])];
                              newItems[idx] = { ...newItems[idx], tag: e.target.value };
                              setContent({
                                ...content,
                                industries: { ...content.industries, items: newItems }
                              });
                            }}
                            className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                            placeholder="e.g. Retail"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 mb-1">Icon</label>
                          <select
                            value={ind.iconName || 'Building2'}
                            onChange={(e) => {
                              const newItems = [...(content.industries?.items || [])];
                              newItems[idx] = { ...newItems[idx], iconName: e.target.value };
                              setContent({
                                ...content,
                                industries: { ...content.industries, items: newItems }
                              });
                            }}
                            className="w-full px-2 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 cursor-pointer"
                          >
                            {INDUSTRY_ICON_OPTIONS.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={handleAddIndustry}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-dashed border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-xs font-bold transition w-full justify-center cursor-pointer"
                  >
                    <Plus size={16} /> Add Another Industry Category
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: INQUIRIES LIST */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2>Received Demo & Trial Inquiries</h2>
                  <p>Customer leads submitted through the website modals.</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full">
                  {inquiries.length} Total Leads
                </span>
              </div>

              <div className="space-y-3">
                {inquiries.length === 0 ? (
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
                    <p className="text-slate-500 text-sm">No inquiries received yet.</p>
                    <p className="text-xs text-slate-400">Leads submitted by visitors will appear here automatically.</p>
                  </div>
                ) : (
                  inquiries.map((inq) => (
                    <div
                      key={inq.id}
                      className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <span className="font-extrabold text-slate-900 text-base">{inq.name}</span>
                          <span className="text-xs bg-brand-50 text-brand-700 px-2.5 py-0.5 rounded-full font-bold border border-brand-200">
                            {inq.product}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600">
                          <span className="flex items-center gap-1"><Building size={13} className="text-slate-400" />{inq.company}</span>
                          <span className="flex items-center gap-1"><Mail size={13} className="text-slate-400" />{inq.email}</span>
                          <span className="flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"><Phone size={13} />{inq.phone}</span>
                        </div>
                        {inq.message && (
                          <p className="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl mt-2 font-mono border border-slate-100">
                            "{inq.message}"
                          </p>
                        )}
                      </div>
                      <div className="text-xs text-slate-400 font-mono flex items-center gap-1">
                        <Clock size={12} />
                        <span>{inq.createdAt}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}

