'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Send, Sparkles, AlertCircle } from 'lucide-react';

export function HrmsLightboxModal({ isOpen, onClose, imageSrc, imageAlt }) {
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

export function HrmsBrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '1-50',
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
        employeeCount: '1-50',
      });
      setIsDownloaded(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employeeCount: '1-50',
    });
    setIsDownloaded(false);
    setErrorMsg('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: 'HRMS Brochure Download',
          message: `Requested ISARVA HRMS & Payroll Brochure. Company: ${formData.company}, Employees: ${formData.employeeCount}`,
          country: 'IN',
        }),
      });

      // Trigger download if brochure exists, else download dummy
      const link = document.createElement('a');
      link.href = '/images/crm/CRM-Brochure.pdf';
      link.download = 'ISARVA-HRMS-Payroll-Brochure.pdf';
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
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {isDownloaded ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-purple-100 text-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="mb-2">
              Brochure Downloaded!
            </h3>
            <p className="mb-6">
              Thank you for your interest in ISARVA HRMS &amp; Payroll. Your PDF brochure download has started automatically.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="hrms-primary-btn-purple w-full justify-center"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#7c3aed] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Full Specifications</span>
            </div>

            <h3 className="mb-2">
              Download HRMS &amp; Payroll Brochure
            </h3>
            <p className="mb-6">
              Get detailed feature breakdowns, statutory tax calculation formulas, biometric device support, and pricing packages.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="rajesh@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Technologies"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Employees Count
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm bg-white"
                  >
                    <option value="1-20">1 - 20 employees</option>
                    <option value="21-50">21 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="hrms-primary-btn-purple w-full justify-center mt-2"
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <Download size={18} />
                    <span>Download PDF Brochure</span>
                  </>
                )}
              </button>

              <div className="text-center text-xs text-slate-400">
                🔒 Your information is confidential. Zero spam guaranteed.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export function HrmsDemoModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employeeCount: '21-50',
    modulesNeeded: 'Full HRMS + Payroll',
    notes: '',
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
        employeeCount: '21-50',
        modulesNeeded: 'Full HRMS + Payroll',
        notes: '',
      });
      setIsSuccess(false);
      setErrorMsg('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      employeeCount: '21-50',
      modulesNeeded: 'Full HRMS + Payroll',
      notes: '',
    });
    setIsSuccess(false);
    setErrorMsg('');
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          product: 'HRMS Live Demo Request',
          message: `Live Demo Request. Employees: ${formData.employeeCount}, Modules: ${formData.modulesNeeded}. Notes: ${formData.notes || 'None'}`,
          country: 'IN',
        }),
      });

      setIsSuccess(true);
    } catch (err) {
      setErrorMsg('Failed to submit demo request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-2 rounded-full transition-all cursor-pointer"
          aria-label="Close Modal"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-purple-100 text-[#7c3aed] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="mb-2">
              Demo Request Received!
            </h3>
            <p className="mb-6">
              Thank you, {formData.name}. An ISARVA HR Solutions Specialist will contact you within 2 business hours to schedule your personalized live demo.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="hrms-primary-btn-purple w-full justify-center"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 text-[#7c3aed] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles size={13} />
              <span>Personalized Walkthrough</span>
            </div>

            <h3 className="mb-2">
              Schedule a Free HRMS Demo
            </h3>
            <p className="mb-6">
              See how ISARVA HRMS automates biometric attendance, statutory tax deductions, and 1-click payslips tailored to your team size.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle size={16} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Priya Sharma"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priya@company.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99028 63697"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Tech Park"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Headcount Size
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm bg-white"
                  >
                    <option value="1-20">1 - 20 employees</option>
                    <option value="21-50">21 - 50 employees</option>
                    <option value="51-200">51 - 200 employees</option>
                    <option value="200+">200+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your current payroll setup, shifts, or biometric devices..."
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed] text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="hrms-primary-btn-purple w-full justify-center mt-2"
              >
                {loading ? (
                  <span>Scheduling...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Confirm Live Demo Booking</span>
                  </>
                )}
              </button>

              <div className="text-center text-xs text-slate-400">
                🔒 Free 30-minute consultation • No credit card required.
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
