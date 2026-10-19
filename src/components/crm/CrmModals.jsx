'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, Download, Send, Sparkles, AlertCircle } from 'lucide-react';

export function CrmLightboxModal({ isOpen, onClose, imageSrc, imageAlt }) {
  if (!isOpen || !imageSrc) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-12 right-0 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt || 'Preview'}
          className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain border border-white/20"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

export function CrmBrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [loading, setLoading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      // 1. Submit lead to database / content-store
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: 'CRM Brochure Download',
          message: 'Requested ISARVA CRM Feature Brochure (PDF)',
          country: 'IN',
        }),
      });

      // 2. Trigger PDF file download
      const link = document.createElement('a');
      link.href = '/docs/CRM-Brochure.pdf';
      link.download = 'ISARVA-CRM-Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloaded(true);
    } catch (err) {
      setErrorMsg('Failed to process download request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {!isDownloaded ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Download size={13} />
              <span>Free Specification Guide</span>
            </div>
            
            <h3 className="mb-2">
              Download CRM Brochure
            </h3>

            <p className="mb-6">
              Enter your contact details below to receive the complete iSarva CRM feature catalog and specifications sheet in high-res PDF.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company / Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Solutions Ltd"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="crm-primary-btn-orange w-full justify-center mt-2"
              >
                <span>{loading ? 'Preparing Brochure...' : 'Download PDF Brochure'}</span>
                <Download size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-slate-900">
              Download Started!
            </h3>
            <p className="max-w-xs mx-auto">
              Your copy of the ISARVA CRM Brochure is downloading. Our product specialist will be available if you need a walk-through.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-brand-primary"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function CrmDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: 'CRM',
          country: 'IN',
        }),
      });

      const data = await res.json().catch(() => null);
      if (res.ok && data?.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data?.error || 'Failed to submit demo request. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Unable to connect to the server. Please check your internet connection.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles size={13} />
              <span>Instant Access</span>
            </div>

            <h3 className="mb-2">
              Book a Live CRM Demo
            </h3>

            <p className="mb-6">
              Experience how iSarva CRM automates leads, deals, quotations, and customer communication for your sales team.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={15} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Technologies"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Requirements / Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your sales team size or specific workflow requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all text-sm text-slate-900 bg-white resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="crm-primary-btn-orange w-full justify-center mt-2"
              >
                <span>{loading ? 'Submitting Request...' : 'Confirm Demo Booking'}</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-slate-900">
              Demo Request Received!
            </h3>
            <p className="max-w-xs mx-auto">
              Thank you! Our CRM solutions consultant will contact you shortly to schedule your personalized live demo session.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="btn-brand-primary"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
