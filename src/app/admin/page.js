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
  ChevronRight
} from 'lucide-react';
import { defaultContent } from '../../lib/content-store';

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
      const res = await fetch('/isarva-erp/api/content');
      if (res.ok) {
        const data = await res.json();
        if (data?.content) setContent(data.content);
      }
      const inqRes = await fetch('/isarva-erp/api/inquiries', {
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
      const res = await fetch('/isarva-erp/api/content', {
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
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-500/20">
              <Lock size={26} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight pt-2">
              ISARVA ERP Admin CMS
            </h2>
            <p className="text-xs text-slate-500">
              Enter the administrator passcode to access website content and leads.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                <span>Passcode</span>
                <span className="text-[10px] text-slate-400 font-mono">Default: isarva2026</span>
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
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center font-bold text-white shadow-sm">
            IS
          </div>
          <div>
            <span className="font-extrabold text-lg text-slate-900">ISARVA ERP</span>
            <span className="text-xs text-brand-700 font-bold ml-2 px-2 py-0.5 rounded bg-brand-50 border border-brand-200">
              Admin CMS
            </span>
          </div>
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
          <div className="text-[11px] font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
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

          <div className="pt-4 mt-4 border-t border-slate-200">
            <div className="text-[11px] font-bold text-slate-400 uppercase px-3 py-2 tracking-wider">
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
                <h2 className="text-xl font-bold text-slate-900">Hero Banner Content</h2>
                <p className="text-xs text-slate-500">Update top headline, description paragraph, and CTA buttons.</p>
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
                <h2 className="text-xl font-bold text-slate-900">Products & Features (4 Modules)</h2>
                <p className="text-xs text-slate-500">Edit titles, subtitles, and checklist items for POS, BillSoft, HRMS, and CRM.</p>
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
                <h2 className="text-xl font-bold text-slate-900">GST Compliance & Why Choose</h2>
                <p className="text-xs text-slate-500">Configure Indian statutory requirements and value proposition cards.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="font-bold text-emerald-700 text-sm">GST Section Details</h3>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Title</label>
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
            </div>
          )}

          {/* TAB 4: TESTIMONIALS */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Customer Testimonials</h2>
                <p className="text-xs text-slate-500">Manage client reviews, business names, and quotes.</p>
              </div>

              <div className="space-y-4">
                {content.testimonials?.items?.map((tst, idx) => (
                  <div key={tst.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Company / Restaurant Name</label>
                        <input
                          type="text"
                          value={tst.name}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].name = e.target.value;
                            setContent({
                              ...content,
                              testimonials: { ...content.testimonials, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Location</label>
                        <input
                          type="text"
                          value={tst.location}
                          onChange={(e) => {
                            const newItems = [...content.testimonials.items];
                            newItems[idx].location = e.target.value;
                            setContent({
                              ...content,
                              testimonials: { ...content.testimonials, items: newItems }
                            });
                          }}
                          className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Quote</label>
                      <textarea
                        rows="2"
                        value={tst.quote}
                        onChange={(e) => {
                          const newItems = [...content.testimonials.items];
                          newItems[idx].quote = e.target.value;
                          setContent({
                            ...content,
                            testimonials: { ...content.testimonials, items: newItems }
                          });
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: INQUIRIES LIST */}
          {activeTab === 'inquiries' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">Received Demo & Trial Inquiries</h2>
                  <p className="text-xs text-slate-500">Customer leads submitted through the website modals.</p>
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
                      <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
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
