'use client';

import React from 'react';
import {
  BarChart3,
  Users2,
  Handshake,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';

// Custom fork & knife icon matching the reference card design
function CutleryIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      {/* Fork */}
      <path d="M5 2a1 1 0 0 1 1 1v4h1V3a1 1 0 1 1 2 0v4h1V3a1 1 0 1 1 2 0v4a3 3 0 0 1-2.5 2.96V21a1 1 0 0 1-2 0v-11.04A3 3 0 0 1 4 7V3a1 1 0 0 1 1-1z" />
      {/* Knife */}
      <path d="M18 2a3 3 0 0 0-3 3v6a2 2 0 0 0 2 2v8a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z" />
    </svg>
  );
}

export default function ProductsSection({ products, onOpenModal }) {
  // Helper to format image path for Next.js basePath
  const getImageUrl = (imagePath, fallbackPath) => {
    const src = imagePath || fallbackPath;
    if (!src) return '';
    if (src.startsWith('http') || src.startsWith('/isarva-erp/')) return src;
    return `/isarva-erp${src.startsWith('/') ? src : '/' + src}`;
  };

  const getProductIcon = (iconName, id) => {
    if (id === 'restaurant-pos' || iconName === 'UtensilsCrossed') {
      return <CutleryIcon className="w-6 h-6" />;
    }
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 size={24} strokeWidth={2.4} />;
      case 'Users2':
        return <Users2 size={24} strokeWidth={2.4} />;
      case 'Handshake':
        return <Handshake size={24} strokeWidth={2.4} />;
      default:
        return <Sparkles size={24} strokeWidth={2.4} />;
    }
  };

  const getProductStyles = (themeClass) => {
    switch (themeClass) {
      case 'pos':
        return {
          iconBg: 'bg-[#078356]',
          checkBg: 'bg-[#078356]',
          btnClass: 'btn-pos group',
          fallbackImage: '/images/pos-card-preview.jpg',
          borderColor: 'hover:border-[#078356]/40'
        };
      case 'billsoft':
        return {
          iconBg: 'bg-[#1d4ed8]',
          checkBg: 'bg-[#1d4ed8]',
          btnClass: 'btn-billsoft group',
          fallbackImage: '/images/billsoft-card-preview.jpg',
          borderColor: 'hover:border-[#1d4ed8]/40'
        };
      case 'hrms':
        return {
          iconBg: 'bg-[#7c3aed]',
          checkBg: 'bg-[#7c3aed]',
          btnClass: 'btn-hrms group',
          fallbackImage: '/images/hrms-card-preview.jpg',
          borderColor: 'hover:border-[#7c3aed]/40'
        };
      case 'crm':
        return {
          iconBg: 'bg-[#ea580c]',
          checkBg: 'bg-[#ea580c]',
          btnClass: 'btn-crm group',
          fallbackImage: '/images/crm-card-preview.jpg',
          borderColor: 'hover:border-[#ea580c]/40'
        };
      default:
        return {
          iconBg: 'bg-[#007a55]',
          checkBg: 'bg-[#007a55]',
          btnClass: 'btn-brand-primary group',
          fallbackImage: '/images/pos-card-preview.jpg',
          borderColor: 'hover:border-brand-500'
        };
    }
  };

  return (
    <section id="products" className="section-padding bg-slate-50/60 border-t border-slate-100">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            OUR PRODUCTS
          </div>
          <h2>
            Complete Business Management Platform
          </h2>
          <p>
            Everything you need to run and grow your business, in one integrated ERP solution.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products?.map((product) => {
            const style = getProductStyles(product.themeClass);
            const imageUrl = getImageUrl(product.image, style.fallbackImage);

            return (
              <div
                key={product.id}
                id={product.id}
                className={`card-product bg-white rounded-3xl border border-slate-200/90 p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ${style.borderColor}`}
              >
                <div>
                  {/* Card Header: Icon + Title & Subtitle */}
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${style.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                      {getProductIcon(product.iconName, product.id)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate">
                        {product.title}
                      </h3>
                      <p className="mt-0.5 line-clamp-1 text-slate-500">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Photorealistic Product Interface Image Showcase */}
                  <div className="relative mb-5 rounded-lg overflow-hidden border border-slate-100/80 shadow-xs aspect-[16/10] bg-slate-100 group/img">
                    <img
                      src={imageUrl}
                      alt={`${product.title} Interface Preview`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 block rounded-lg"
                      loading="lazy"
                    />
                  </div>

                  {/* Bullet Features Checklist with Solid Rounded Checkmarks */}
                  <ul className="space-y-3 mb-6">
                    {product.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className={`w-5 h-5 rounded-full ${style.checkBg} text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}>
                          <Check size={12} strokeWidth={3.5} />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Full-Width CTA Action Button */}
                <button
                  onClick={() => onOpenModal('product', product.title)}
                  className={style.btnClass}
                  aria-label={`Explore ${product.title}`}
                >
                  <span>{product.buttonText}</span>
                  <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

