'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function Footer({ content }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group inline-flex">
              <img
                src="/isarva-erp/images/isarva-logo.png"
                alt="ISARVA Logo"
                className="h-10 w-auto brightness-0 invert object-contain"
              />
              <span className="text-[11px] font-extrabold text-brand-300 bg-brand-950 px-2 py-0.5 rounded-md border border-brand-800 uppercase tracking-wider">
                ERP
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Smart ERP solutions for restaurants, retail and businesses. Restaurant POS, Accounting (BillSoft), HRMS and CRM with Indian GST compliance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors">
                <Facebook size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors">
                <Twitter size={17} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors">
                <Linkedin size={17} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors">
                <Youtube size={17} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors">
                <Instagram size={17} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#restaurant-pos" className="hover:text-white transition-colors">Restaurant POS</Link></li>
              <li><Link href="#billsoft" className="hover:text-white transition-colors">BillSoft Accounting</Link></li>
              <li><Link href="#hrms" className="hover:text-white transition-colors">HRMS</Link></li>
              <li><Link href="#crm" className="hover:text-white transition-colors">CRM</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Inventory Cloud</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><a href="https://isarvait.com/careers" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="https://blog.isarvait.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Blog</a></li>
              <li><Link href="/admin" className="hover:text-emerald-400 text-emerald-500 font-semibold transition-colors">CMS Admin Login</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="#contact" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Video Tutorials</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Stay Updated Newsletter Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe to our newsletter for the latest updates and features.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold text-xs transition-colors"
              >
                {subscribed ? 'Subscribed! ✓' : 'Subscribe'}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 ISARVA IT. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <div className="flex items-center gap-1.5 text-slate-400 font-medium">
              <span>🇮🇳</span>
              <span>India</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
