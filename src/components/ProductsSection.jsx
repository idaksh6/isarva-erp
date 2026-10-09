'use client';

import React from 'react';
import {
  UtensilsCrossed,
  BarChart3,
  Users2,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Monitor,
  Laptop,
  Smartphone,
  LayoutGrid
} from 'lucide-react';

export default function ProductsSection({ products, onOpenModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed size={22} />;
      case 'BarChart3':
        return <BarChart3 size={22} />;
      case 'Users2':
        return <Users2 size={22} />;
      case 'Handshake':
        return <Handshake size={22} />;
      default:
        return <LayoutGrid size={22} />;
    }
  };

  const getProductStyles = (themeClass) => {
    switch (themeClass) {
      case 'pos':
        return {
          iconBg: 'bg-emerald-600',
          badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          btnClass: 'btn-pos',
          checkColor: 'text-emerald-600',
          mockupBg: 'bg-emerald-950',
          borderColor: 'hover:border-emerald-400'
        };
      case 'billsoft':
        return {
          iconBg: 'bg-blue-600',
          badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
          btnClass: 'btn-billsoft',
          checkColor: 'text-blue-600',
          mockupBg: 'bg-blue-950',
          borderColor: 'hover:border-blue-400'
        };
      case 'hrms':
        return {
          iconBg: 'bg-purple-600',
          badgeBg: 'bg-purple-50 text-purple-700 border-purple-200',
          btnClass: 'btn-hrms',
          checkColor: 'text-purple-600',
          mockupBg: 'bg-purple-950',
          borderColor: 'hover:border-purple-400'
        };
      case 'crm':
        return {
          iconBg: 'bg-orange-600',
          badgeBg: 'bg-orange-50 text-orange-700 border-orange-200',
          btnClass: 'btn-crm',
          checkColor: 'text-orange-600',
          mockupBg: 'bg-orange-950',
          borderColor: 'hover:border-orange-400'
        };
      default:
        return {
          iconBg: 'bg-brand-500',
          badgeBg: 'bg-brand-50 text-brand-700',
          btnClass: 'btn-brand-primary',
          checkColor: 'text-brand-500',
          mockupBg: 'bg-slate-900',
          borderColor: 'hover:border-brand-500'
        };
    }
  };

  return (
    <section id="products" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs font-bold tracking-widest text-brand-600 uppercase">
            OUR PRODUCTS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Business Management Platform
          </h2>
          <p className="text-base text-slate-600">
            Everything you need to run and grow your business, in one integrated ERP solution.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => {
            const style = getProductStyles(product.themeClass);
            return (
              <div
                key={product.id}
                id={product.id}
                className={`card-product group ${style.borderColor}`}
              >
                <div>
                  {/* Product Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${style.iconBg} text-white flex items-center justify-center shadow-md`}>
                      {getIcon(product.iconName)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {product.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Visual Interface Preview Banner */}
                  <div className={`rounded-xl p-3.5 mb-5 ${style.mockupBg} text-white border border-slate-800/20 shadow-inner min-h-[120px] flex flex-col justify-between`}>
                    <div className="flex items-center justify-between text-[10px] text-slate-300">
                      <span className="font-semibold">{product.title} Console</span>
                      <span className="bg-white/10 px-1.5 py-0.5 rounded">v2.4</span>
                    </div>

                    {/* Dynamic mini graphic */}
                    {product.id === 'restaurant-pos' && (
                      <div className="grid grid-cols-3 gap-1.5 my-1">
                        <div className="bg-emerald-900/80 p-1.5 rounded text-center text-[10px] font-bold">Table 1</div>
                        <div className="bg-emerald-700 p-1.5 rounded text-center text-[10px] font-bold">Table 2</div>
                        <div className="bg-emerald-900/80 p-1.5 rounded text-center text-[10px] font-bold">KDS Live</div>
                      </div>
                    )}
                    {product.id === 'billsoft' && (
                      <div className="space-y-1 my-1 text-[10px]">
                        <div className="flex justify-between bg-blue-900/70 px-2 py-1 rounded font-medium">
                          <span>e-Invoice GSTR-1</span>
                          <span className="text-emerald-400">✓ Ready</span>
                        </div>
                        <div className="flex justify-between bg-blue-900/70 px-2 py-1 rounded font-medium">
                          <span>GST e-Way Bill</span>
                          <span className="text-blue-300">Generated</span>
                        </div>
                      </div>
                    )}
                    {product.id === 'hrms' && (
                      <div className="flex items-center gap-2 my-1 bg-purple-900/70 p-1.5 rounded text-[10px]">
                        <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center font-bold">JS</div>
                        <div className="leading-tight">
                          <div className="font-bold">John Sharma</div>
                          <div className="text-[9px] text-purple-300">Payroll Approved</div>
                        </div>
                      </div>
                    )}
                    {product.id === 'crm' && (
                      <div className="grid grid-cols-2 gap-1.5 my-1 text-[10px]">
                        <div className="bg-orange-900/70 p-1 rounded">Lead: 14 New</div>
                        <div className="bg-orange-800 p-1 rounded font-bold">Won: ₹4.2L</div>
                      </div>
                    )}

                    <div className="text-[9px] text-slate-400 flex items-center justify-between pt-1 border-t border-white/10">
                      <span>Live Sync</span>
                      <span className="text-emerald-400 font-bold">Connected</span>
                    </div>
                  </div>

                  {/* Bullet Features Checklist */}
                  <ul className="space-y-2.5 mb-6 text-[0.825rem] text-slate-700 font-medium">
                    {product.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 size={15} className={`${style.checkColor} flex-shrink-0 mt-0.5`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={() => onOpenModal('product', product.title)}
                  className={style.btnClass}
                >
                  <span>{product.buttonText}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
