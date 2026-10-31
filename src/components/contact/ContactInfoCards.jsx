'use client';

import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  LifeBuoy,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
} from 'lucide-react';

export default function ContactInfoCards() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('marketing@isarvait.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="space-y-5">
      {/* WhatsApp Live Banner */}
      <a
        href="https://wa.me/919902863697?text=Hi%20ISARVA%20Team%2C%20I%20would%20like%20to%20know%20more%20about%20your%20software%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="group block rounded-2xl p-5 bg-gradient-to-br from-[#064e3b] via-[#047857] to-[#022c22] text-white border border-emerald-400/30 shadow-[0_12px_28px_-4px_rgba(0,122,85,0.25)] hover:shadow-[0_20px_40px_rgba(0,122,85,0.38)] transition-all duration-300 relative overflow-hidden"
      >
        <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-emerald-400/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <MessageCircle size={24} className="text-[#25D366]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-200">
                  Instant Support
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-300 bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-400/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Online
                </span>
              </div>
              <div className="text-base font-bold text-white mt-0.5">
                Chat with us on WhatsApp
              </div>
              <div className="text-xs text-emerald-100/90 mt-0.5">
                Fastest response for sales &amp; product inquiries
              </div>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight size={16} />
          </div>
        </div>
      </a>

      {/* Touchpoint Card 1: Email Us */}
      <div className="card-ecosystem rounded-2xl p-5 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#dcf5e9] text-[#007a55] flex items-center justify-center shrink-0">
            <Mail size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono uppercase tracking-wider text-[#007a55] font-semibold">
              Email Us
            </div>
            <a
              href="mailto:marketing@isarvait.com"
              className="text-base font-bold text-slate-900 hover:text-[#007a55] transition-colors block mt-0.5 truncate"
            >
              marketing@isarvait.com
            </a>
            <div className="text-xs text-slate-500 mt-1">
              Send us an email anytime! We reply within 24 hours.
            </div>

            <div className="mt-3 flex items-center gap-2">
              <a
                href="mailto:marketing@isarvait.com"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-xs font-semibold text-[#007a55] transition-colors"
              >
                <Mail size={13} />
                Send Email
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-medium text-slate-600 transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Touchpoint Card 2: Call Us */}
      <div className="card-ecosystem rounded-2xl p-5 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#dcf5e9] text-[#007a55] flex items-center justify-center shrink-0">
            <Phone size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono uppercase tracking-wider text-[#007a55] font-semibold">
              Call Us
            </div>
            <a
              href="tel:+919902863697"
              className="text-base font-bold text-slate-900 hover:text-[#007a55] transition-colors block mt-0.5"
            >
              +91 99028 63697
            </a>
            <div className="text-xs text-slate-500 mt-1">
              Mon–Fri from 9:30 AM to 6:30 PM IST
            </div>

            <div className="mt-3">
              <a
                href="tel:+919902863697"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 text-xs font-semibold text-[#007a55] transition-colors"
              >
                <Phone size={13} />
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Touchpoint Card 3: Working Hours */}
      <div className="card-ecosystem rounded-2xl p-5 bg-white border border-emerald-600/25 shadow-[0_12px_32px_-4px_rgba(0,122,85,0.18),0_4px_14px_-2px_rgba(0,122,85,0.08)] hover:border-[#007a55]/60 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-[#dcf5e9] text-[#007a55] flex items-center justify-center shrink-0">
            <Clock size={22} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-mono uppercase tracking-wider text-[#007a55] font-semibold">
              Working Hours
            </div>
            <div className="text-sm font-bold text-slate-900 mt-0.5">
              Monday – Friday: 9:30 AM – 6:30 PM
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Weekend appointments available on prior schedule
            </div>
          </div>
        </div>
      </div>

      {/* Support Portal Link */}
      <div className="rounded-2xl p-5 bg-slate-50 border border-slate-200/90 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-2xs">
            <LifeBuoy size={20} className="text-[#007a55]" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">
              Existing Customer Support?
            </div>
            <div className="text-xs text-slate-500">
              Submit a support ticket or check service status
            </div>
          </div>
        </div>
        <a
          href="https://support.isarva.in/form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 transition-colors shadow-2xs shrink-0"
        >
          <span>Support</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* Follow Us Social Links */}
      <div className="rounded-2xl p-5 bg-white border border-slate-200/80">
        <div className="text-xs font-mono uppercase tracking-wider text-[#007a55] font-semibold mb-1">
          Follow Us
        </div>
        <div className="text-xs text-slate-600 mb-3">
          Stay connected with us on social media for updates, product releases, and insights.
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://linkedin.com/company/isarva"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISARVA on LinkedIn"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#0077B5] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://twitter.com/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISARVA on Twitter / X"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-black hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs"
          >
            <Twitter size={16} />
          </a>
          <a
            href="https://facebook.com/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISARVA on Facebook"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#1877F2] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://instagram.com/isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISARVA on Instagram"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#E4405F] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://youtube.com/@isarvait"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ISARVA on YouTube"
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-[#CD201F] hover:text-white text-slate-600 flex items-center justify-center transition-all duration-300 shadow-2xs"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
