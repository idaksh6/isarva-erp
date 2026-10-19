'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Sparkles } from 'lucide-react';

export default function LeadModal({ isOpen, onClose, modalType, selectedProduct, countryCode = 'IN' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product: selectedProduct || 'All-in-One ERP',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Always reset form fields to completely blank whenever popup modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        product: selectedProduct || 'All-in-One ERP',
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
      product: selectedProduct || 'All-in-One ERP',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-100 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6 space-y-1.5">
              <div className="section-eyebrow flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>{modalType === 'demo' ? 'Live Product Demo' : 'Get Started with ISARVA ERP'}</span>
              </div>
              <h3 className="pt-0.5">
                {modalType === 'demo' ? 'Schedule an Interactive Demo' : 'Connect with Our Solutions Team'}
              </h3>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company / Store Name *</label>
                  <input
                    type="text"
                    required
                    autoComplete="off"
                    placeholder="e.g. Spice Hub Cafe"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    autoComplete="off"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    autoComplete="off"
                    placeholder="+91 9902863697"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Interested ERP Solution</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                >
                  <option value="All-in-One ERP">All-in-One ERP Platform</option>
                  <option value="Restaurant POS Software">Restaurant POS Software</option>
                  <option value="BillSoft Accounting Software">BillSoft Accounting Software</option>
                  <option value="HRMS & Payroll Software">HRMS & Payroll Software</option>
                  <option value="CRM & Sales Management">CRM & Sales Management</option>
                  <option value="Inventory & Warehouse Management">Inventory & Warehouse Management</option>
                  <option value="Multi-Branch Management">Multi-Branch Management</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Requirements / Branches (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="Number of branches, team size, current software..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-brand-500 focus:bg-white transition-colors"
                />
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700">
                  {errorMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-brand-primary w-full py-3.5 text-base mt-2"
              >
                <Send size={16} />
                <span>{loading ? 'Submitting...' : 'Request a Demo'}</span>
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-brand-600 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 size={36} />
            </div>
            <h3>
              Request Received Successfully!
            </h3>
            <p className="max-w-sm mx-auto">
              Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. Our ERP product specialist will get in touch with you shortly.
            </p>
            <button
              onClick={handleClose}
              className="btn-brand-primary px-8 mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
