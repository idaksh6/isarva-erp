'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Send, Sparkles, AlertCircle } from 'lucide-react';

export function PosLightboxModal({ isOpen, onClose, imageSrc, imageAlt }) {
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

export function PosBrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [loading, setLoading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
      });
      setIsDownloaded(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submitLead',
          data: {
            ...formData,
            type: 'brochure',
            product: 'Restaurant POS Software',
            date: new Date().toISOString(),
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      setIsDownloaded(true);
    } catch (err) {
      setErrorMsg('Something went wrong. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {isDownloaded ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="mb-2">
              Brochure Request Received!
            </h3>
            <p className="mb-6">
              Thank you, <strong>{formData.name}</strong>. Our complete Restaurant POS technical specification brochure has been sent to your email.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="pos-primary-btn-emerald w-full justify-center"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <Download size={14} />
              <span>Free Product Specification PDF</span>
            </div>
            <h3 className="mb-2">
              Download Restaurant POS Brochure
            </h3>
            <p className="mb-6 text-sm">
              Get complete architecture details, hardware compatibility, KDS routing specs, and multi-branch pricing.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Al-Mansoor / Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@restaurant.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 / +91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Restaurant / Outlet Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Royal Cafe"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="pos-primary-btn-emerald w-full justify-center mt-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span>Sending Brochure...</span>
                ) : (
                  <>
                    <Download size={16} />
                    <span>Download Brochure PDF</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function PosDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    outletType: 'Dine-In Restaurant',
    branches: '1 Branch',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        outletType: 'Dine-In Restaurant',
        branches: '1 Branch',
        message: '',
      });
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'submitLead',
          data: {
            ...formData,
            type: 'demo',
            product: 'Restaurant POS Software',
            date: new Date().toISOString(),
          },
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit demo request');
      }

      setIsSuccess(true);
    } catch (err) {
      setErrorMsg('Something went wrong. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1 rounded-full transition-colors"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="mb-2">
              Demo Scheduled!
            </h3>
            <p className="mb-6">
              Thank you, <strong>{formData.name}</strong>. An ISARVA restaurant specialist will contact you within 30 minutes to conduct a personalized live walkthrough for <strong>{formData.company}</strong>.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="pos-primary-btn-emerald w-full justify-center"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Personalized 1-on-1 Walkthrough</span>
            </div>
            <h3 className="mb-2">
              Book a Free Restaurant POS Demo
            </h3>
            <p className="mb-6 text-sm">
              See the floor plan, kitchen tickets, split billing, and ZATCA / GST reports live in action tailored to your restaurant layout.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} className="shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+966 / +91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@restaurant.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Restaurant Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Spice Garden"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Outlet Format
                  </label>
                  <select
                    value={formData.outletType}
                    onChange={(e) => setFormData({ ...formData, outletType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none bg-white"
                  >
                    <option value="Dine-In Restaurant">Dine-In Restaurant</option>
                    <option value="Café / Coffee Shop">Café / Coffee Shop</option>
                    <option value="Fast Food / QSR">Fast Food / QSR</option>
                    <option value="Cloud Kitchen">Cloud Kitchen</option>
                    <option value="Multi-Branch Chain">Multi-Branch Chain</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Specific Requirements or Number of Tables (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. 20 tables, 2 kitchen printers, HungerStation integration needed..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 text-sm focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="pos-primary-btn-emerald w-full justify-center mt-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <span>Scheduling Walkthrough...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Confirm Live Demo Booking</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
