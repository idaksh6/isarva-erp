'use client';

import React from 'react';
import {
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  Check,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ProductsSection({ header, products, onOpenModal }) {
  // Helper to format image path
  const getImageUrl = (imagePath, fallbackPath) => {
    const src = imagePath || fallbackPath;
    if (!src) return '';
    if (src.startsWith('http')) return src;
    return src.startsWith('/') ? src : '/' + src;
  };

  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'UtensilsCrossed':
      case 'Utensils':
        return <UtensilsCrossed size={24} strokeWidth={2.4} />;
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
            {header?.badge || 'PRODUCTS & SOLUTIONS'}
          </div>
          <h2>
            {header?.title || 'Complete Business Management Solutions for Every Stage of Growth'}
          </h2>
          <p>
            {header?.subtitle ||
              'Manage essential business activities with connected solutions for billing, accounting, workforce management, sales and inventory. Choose the modules your business needs and build a more organized way of working.'}
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
                  <div className="flex items-center gap-3.5 mb-5 min-h-[64px]">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${style.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                      {getProductIcon(product.iconName)}
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center">
                      <h3 className="truncate">
                        {product.title}
                      </h3>
                      <div className="min-h-[2.6rem] flex items-center whitespace-pre-line">
                        <p className="mt-0.5">
                          {product.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Photorealistic Product Interface Image Showcase */}
                  <div className="relative mb-5 rounded-lg overflow-hidden border border-slate-100/80 shadow-xs aspect-[16/10] bg-slate-100 group/img">
                    <img
                      src={imageUrl}
                      alt={`${product.title} Interface Preview`}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 block rounded-lg"
                      loading="lazy"
                      onError={(e) => {
                        if (style.fallbackImage && e.currentTarget.src !== style.fallbackImage) {
                          e.currentTarget.src = style.fallbackImage;
                        }
                      }}
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

