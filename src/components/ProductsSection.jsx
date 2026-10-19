'use client';

import React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  Check,
  ArrowRight,
  Sparkles,
  Building2,
  Briefcase
} from 'lucide-react';
import { renderTitleWithGradient } from '../lib/render-title';

function getProductItemColClass(count, idx) {
  if (count === 5) {
    if (idx < 3) return 'lg:col-span-2 xl:col-span-1';
    if (idx === 3) return 'lg:col-span-2 lg:col-start-2 xl:col-span-1 xl:col-start-auto';
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-2 xl:col-span-1 xl:col-start-auto';
  }
  if (count === 3 && idx === 2) {
    return 'sm:col-span-2 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-1';
  }
  return '';
}

function getProductsGridClass(count) {
  if (count <= 2) return 'grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-7';
  if (count === 3) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-6 sm:gap-7';
  if (count === 4) return 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7';
  if (count === 5) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-4.5 lg:gap-5 xl:gap-3.5 2xl:gap-5';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7';
}

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
      case 'Building2':
      case 'Building':
        return <Building2 size={24} strokeWidth={2.4} />;
      case 'Briefcase':
        return <Briefcase size={24} strokeWidth={2.4} />;
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
      case 'industry':
        return {
          iconBg: 'bg-[#0284c7]',
          checkBg: 'bg-[#0284c7]',
          btnClass: 'btn-industry group',
          fallbackImage: '/images/hero-erp-overview.jpg',
          borderColor: 'hover:border-[#0284c7]/40'
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

  // Helper to ensure subtitles wrap onto 2 lines on desktop for alignment, while staying on 1 line on responsive/mobile when space permits
  const renderSubtitle = (subtitle) => {
    if (!subtitle) return '';
    if (typeof subtitle !== 'string') return subtitle;

    // Handle existing explicit newlines
    if (subtitle.includes('\n')) {
      const parts = subtitle.split('\n');
      return parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < parts.length - 1 && <br className="hidden lg:inline" />}
          {index < parts.length - 1 && <span className="inline lg:hidden"> </span>}
        </React.Fragment>
      ));
    }

    const trimmed = subtitle.trim();

    // Specific product subtitle matches to ensure 2 lines on desktop across all 4 cards
    if (trimmed === 'Complete Accounting Solution') {
      return (
        <>
          Complete Accounting
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          Solution
        </>
      );
    }
    if (trimmed === 'Human Resource Management') {
      return (
        <>
          Human Resource
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          Management
        </>
      );
    }
    if (trimmed === 'Complete Restaurant Management') {
      return (
        <>
          Complete Restaurant
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          Management
        </>
      );
    }
    if (trimmed === 'Customer Relationship Management') {
      return (
        <>
          Customer Relationship
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          Management
        </>
      );
    }

    // Generic 3-word subtitle: wrap the 3rd word onto the below line on desktop
    const words = trimmed.split(/\s+/);
    if (words.length === 3) {
      return (
        <>
          {words[0]} {words[1]}
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          {words[2]}
        </>
      );
    }

    // 4 words: 2 words on first line, 2 words on second line on desktop
    if (words.length === 4) {
      return (
        <>
          {words[0]} {words[1]}
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          {words[2]} {words[3]}
        </>
      );
    }

    // 5 or 6 words: split evenly on desktop
    if (words.length >= 5 && words.length <= 6) {
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')}
          <br className="hidden lg:inline" />
          <span className="inline lg:hidden"> </span>
          {words.slice(mid).join(' ')}
        </>
      );
    }

    return subtitle;
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
            {renderTitleWithGradient(header?.title || 'Complete Business Management Solutions for Every Stage of Growth')}
          </h2>
          <p>
            {header?.subtitle ||
              'Manage essential business activities with connected solutions for billing, accounting, workforce management, sales and inventory. Choose the modules your business needs and build a more organized way of working.'}
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className={getProductsGridClass(products?.length || 4)}>
          {products?.map((product, idx) => {
            const style = getProductStyles(product.themeClass);
            const imageUrl = getImageUrl(product.image, style.fallbackImage);
            const colClass = getProductItemColClass(products?.length || 4, idx);

            return (
              <div
                key={product.id}
                id={product.id}
                className={`card-product bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 xl:p-4 2xl:p-5 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 min-w-0 w-full ${style.borderColor} ${colClass}`}
              >
                <div>
                  {/* Card Header: Icon + Title & Subtitle */}
                  <div className="flex items-start gap-2.5 2xl:gap-3.5 mb-4 sm:mb-5">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 2xl:w-14 2xl:h-14 rounded-2xl ${style.iconBg} text-white flex items-center justify-center shrink-0 shadow-sm`}>
                      {getProductIcon(product.iconName)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="min-h-0 sm:min-h-[2.6rem] flex items-start">
                        <span>{product.title}</span>
                      </h3>
                      <p className="mt-1">
                        {renderSubtitle(product.subtitle)}
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
                {product.id === 'crm' ? (
                  <Link
                    href="/crm"
                    className={style.btnClass}
                    aria-label={`Explore ${product.title}`}
                  >
                    <span>{product.buttonText}</span>
                    <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                ) : (
                  <button
                    onClick={() => onOpenModal('product', product.title)}
                    className={style.btnClass}
                    aria-label={`Explore ${product.title}`}
                  >
                    <span>{product.buttonText}</span>
                    <ArrowRight size={17} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

