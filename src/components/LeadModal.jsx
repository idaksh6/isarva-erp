'use client';

import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building2,
  LayoutGrid,
  MessageSquare,
  Calendar,
  Zap,
  BarChart2,
  ShieldCheck,
  Lock,
  Headphones,
  ArrowRight
} from 'lucide-react';

export default function LeadModal({ isOpen, onClose, modalType, selectedProduct, countryCode = 'IN' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: selectedProduct || 'All-in-One ERP Platform',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Reset form fields to completely blank whenever popup modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: selectedProduct || 'All-in-One ERP Platform',
        message: ''
      });
      setIsSubmitted(false);
      setErrorMsg('');
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem('isarva_saved_lead_data');
        } catch (e) {}
      }
    }
  }, [isOpen, selectedProduct]);

  if (!isOpen) return null;

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      product: selectedProduct || 'All-in-One ERP Platform',
      message: ''
    });
    setIsSubmitted(false);
    setErrorMsg('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, country: countryCode })
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data?.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Unable to connect to the server. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-4xl w-full relative overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close Modal"
          className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors z-20 cursor-pointer shadow-2xs"
        >
          <X size={16} />
        </button>

        {!isSubmitted ? (
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left Column: Value Proposition & Security Showcase */}
            <div className="w-full md:w-[38%] bg-[#eef8f2] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-emerald-100/70">
              <div>
                <div className="text-xs font-black tracking-wider text-[#007a55] uppercase mb-2">
                  GET STARTED TODAY
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                  Request
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#007a55] tracking-tight leading-tight mb-3">
                  a Demo
                </div>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Discover how our solutions can help you streamline operations and grow your business.
                </div>

                {/* 3 Core Value Props */}
                <div className="space-y-4">
                  {/* Item 1: Personalized Demo */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#007a55] flex items-center justify-center shrink-0 shadow-2xs">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        Personalized Demo
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">
                        Get a demo tailored to your business needs.
                      </div>
                    </div>
                  </div>

                  {/* Item 2: Expert Consultation */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <Zap size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        Expert Consultation
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">
                        Talk to our product experts and get the right solution.
                      </div>
                    </div>
                  </div>

                  {/* Item 3: No Obligation */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0 shadow-2xs">
                      <BarChart2 size={18} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">
                        No Obligation
                      </div>
                      <div className="text-xs text-slate-500 leading-snug">
                        Free demo with no commitment.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Security / Trust Pill Card */}
              <div className="mt-8 p-3.5 rounded-2xl bg-white border border-emerald-100 shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#007a55] flex items-center justify-center shrink-0 border border-emerald-200/60">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    Your information is safe with us.
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight">
                    We never share your details with third parties.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="w-full md:w-[62%] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-5">
                  <div className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Request a Demo
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Fill in your details and our team will get in touch with you shortly.
                  </div>
                </div>

                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-3.5">
                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative flex items-center">
                        <User size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          required
                          autoComplete="off"
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <div className="relative flex items-center">
                        <Mail size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="email"
                          required
                          autoComplete="off"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <div className="relative flex items-center">
                        <Phone size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          autoComplete="off"
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Company Name *
                      </label>
                      <div className="relative flex items-center">
                        <Building2 size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                        <input
                          type="text"
                          required
                          autoComplete="off"
                          placeholder="Company Name *"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Interested In (Product) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Interested In (Product) *
                    </label>
                    <div className="relative flex items-center">
                      <LayoutGrid size={15} className="absolute left-3.5 text-slate-400 pointer-events-none" />
                      <select
                        required
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all appearance-none cursor-pointer"
                      >
                        <option value="All-in-One ERP Platform">All-in-One ERP Platform</option>
                        <option value="Restaurant POS Software">Restaurant POS Software</option>
                        <option value="BillSoft Accounting Software">BillSoft Accounting Software</option>
                        <option value="HRMS & Payroll Software">HRMS & Payroll Software</option>
                        <option value="CRM & Sales Management">CRM & Sales Management</option>
                        <option value="Inventory & Multi-Branch Core">Inventory & Multi-Branch Core</option>
                      </select>
                      <div className="absolute right-3.5 pointer-events-none text-slate-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Message (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message (Optional)
                    </label>
                    <div className="relative flex">
                      <MessageSquare size={15} className="absolute left-3.5 top-3 text-slate-400 pointer-events-none" />
                      <textarea
                        rows={2}
                        placeholder="Message (Optional)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-200/90 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-[#007a55] focus:ring-1 focus:ring-[#007a55] transition-all resize-none"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#007a55] hover:bg-[#006646] active:bg-[#005439] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-900/10 hover:shadow-lg cursor-pointer mt-1 disabled:opacity-60"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Request'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>

              {/* Bottom 3 Micro-Trust Indicators */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100 mt-4 text-center sm:text-left">
                {/* 100% Secure */}
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center shrink-0">
                    <ShieldCheck size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      100% Secure
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      Your data is protected
                    </div>
                  </div>
                </div>

                {/* Privacy Assured */}
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Lock size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      Privacy Assured
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      We never share details
                    </div>
                  </div>
                </div>

                {/* Quick Response */}
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Headphones size={13} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-800 leading-tight">
                      Quick Response
                    </div>
                    <div className="text-[10px] text-slate-400 leading-tight hidden sm:block">
                      Our team contacts soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12 px-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#007a55] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 size={36} />
            </div>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              Request Received Successfully!
            </div>
            <div className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our ERP specialist will get in touch with you shortly.
            </div>
            <button
              onClick={handleClose}
              type="button"
              className="py-3 px-8 rounded-xl bg-[#007a55] hover:bg-[#006646] text-white font-bold text-sm transition-all mt-4 cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
