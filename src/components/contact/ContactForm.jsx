'use client';

import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Building,
  Tag,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  RefreshCw,
  MessageCircle,
} from 'lucide-react';

const SUBJECT_OPTIONS = [
  'Restaurant POS Software',
  'BillSoft Accounting & GST Invoicing',
  'HRMS & Payroll Management',
  'CRM & Sales Pipeline',
  'Multi-Branch Enterprise ERP',
  'IoT & Data Logger Solutions',
  'White Label / Agency Partnership',
  'General Inquiry / Consultation',
];

export default function ContactForm({ selectedCountry = 'IN' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number with country/area code.');
      return;
    }
    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please select or specify a subject for your message.');
      return;
    }
    if (!formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please write your message or project requirements.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        company: formData.company.trim() || 'Direct Inquiry',
        subject: formData.subject.trim(),
        product: formData.subject.trim(),
        message: formData.message.trim(),
        country: selectedCountry || 'IN',
        source: 'Contact Page Web Form',
      };

      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        const ref = data.inquiry?.id ? `INQ-${data.inquiry.id}` : `ISV-${Date.now().toString().slice(-6)}`;
        setReferenceId(ref);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to submit your message. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setErrorMessage('A network error occurred. Please check your connection or contact us directly on WhatsApp.');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
    setReferenceId('');
  };

  return (
    <div className="card-ecosystem relative rounded-2xl p-6 sm:p-8 md:p-10 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.22),0_4px_14px_-2px_rgba(0,122,85,0.12)] transition-all duration-300">
      {/* SUCCESS STATE */}
      {status === 'success' ? (
        <div className="py-8 text-center space-y-5 animate-fade-in">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 text-[#007a55] flex items-center justify-center shadow-inner">
            <CheckCircle2 size={36} />
          </div>

          <div>
            <h3 className="mb-2">Thank You! Message Received</h3>
            <p className="max-w-md mx-auto text-sm text-slate-600">
              We have received your inquiry. One of our enterprise solutions consultants will review your requirements and respond within 24 business hours.
            </p>
          </div>

          {referenceId && (
            <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700">
              Reference ID: <span className="font-bold text-[#007a55]">{referenceId}</span>
            </div>
          )}

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://wa.me/919902863697?text=Hi%20ISARVA%20Team%2C%20I%20just%20submitted%20an%20inquiry%20on%20your%20contact%20page."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-semibold text-xs shadow-md hover:bg-[#20ba59] transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp Directly
            </a>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors w-full sm:w-auto cursor-pointer"
            >
              <RefreshCw size={14} />
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        /* FORM STATE */
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="border-b border-slate-100 pb-4 mb-2">
            <div className="section-eyebrow text-xs">SEND A MESSAGE</div>
            <h3 className="mt-1">Tell Us About Your Project</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Fill out the form below and our team will get back to you with tailored recommendations.
            </p>
          </div>

          {/* Error Banner */}
          {status === 'error' && errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-2.5 text-xs text-red-700 animate-shake">
              <AlertCircle size={16} className="shrink-0 mt-0.5 text-red-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User size={16} />
                </div>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Mail size={16} />
                </div>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Phone Number & Company Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Phone size={16} />
                </div>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 99028 63697"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-xs font-semibold text-slate-700 mb-1.5">
                Company Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Building size={16} />
                </div>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Enterprise / Outlet"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200"
                />
              </div>
            </div>
          </div>

          {/* Row 3: Subject */}
          <div>
            <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Subject <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Tag size={16} />
              </div>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                list="subject-suggestions"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Select or enter subject (e.g. Restaurant POS Software)"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200"
              />
              <datalist id="subject-suggestions">
                {SUBJECT_OPTIONS.map((opt, i) => (
                  <option key={i} value={opt} />
                ))}
              </datalist>
            </div>
          </div>

          {/* Row 4: Message */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your business, current workflows, locations, or requirements..."
                className="w-full p-3.5 rounded-xl bg-slate-50/70 border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007a55] focus:bg-white focus:ring-2 focus:ring-[#007a55]/15 transition-all duration-200 resize-y"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-brand-primary w-full py-3.5 px-6 rounded-xl font-bold text-sm inline-flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/25 hover:shadow-emerald-700/40 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
            <div className="mt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
              <span>🔒</span> We respect your privacy. No spam guaranteed.
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
