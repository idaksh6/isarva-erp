'use client';

import React from 'react';
import Image from 'next/image';

const showcaseCards = [
  {
    id: 'connectivity',
    title: 'Connectivity',
    lineColor: 'bg-cyan-400',
    description: 'We build systems that communicate effortlessly through APIs and cloud services.',
    image: '/images/about/premium-sky.png',
    desktopClass: 'lg:w-[14vw] lg:h-[20vw] xl:w-[320px] xl:h-[420px]',
    titleClass: 'text-[clamp(1rem,1.5vw,1.8rem)]',
    textClass: 'text-[clamp(0.6rem,1vw,0.85rem)]',
    cardZ: 'z-0',
  },
  {
    id: 'seamless-flow',
    title: 'Seamless Flow',
    lineColor: 'bg-blue-500',
    description: 'We design intuitive user experiences that create smooth digital journeys.',
    image: '/images/about/water-v2.png',
    desktopClass: 'lg:w-[17vw] lg:h-[24vw] xl:w-[380px] xl:h-[500px]',
    titleClass: 'text-[clamp(1.2rem,2vw,2.2rem)]',
    textClass: 'text-[clamp(0.65rem,1.1vw,0.95rem)]',
    cardZ: 'z-10',
  },
  {
    id: 'strong-foundations',
    title: 'Strong Foundations',
    lineColor: 'bg-green-500',
    description: 'Secure, scalable backend systems and infrastructure ensuring long-term reliability.',
    image: '/images/about/kailash_final.png',
    desktopClass: 'lg:w-[20vw] lg:h-[30vw] xl:w-[450px] xl:h-[580px] ring-4 ring-white',
    titleClass: 'text-[clamp(1.3rem,2.5vw,2.5rem)]',
    textClass: 'text-[clamp(0.7rem,1.2vw,1.1rem)]',
    cardZ: 'z-20',
    imageScale: 'scale-150 object-bottom',
  },
  {
    id: 'scalability',
    title: 'Scalability',
    lineColor: 'bg-purple-500',
    description: 'Future-ready solutions that scale with your business and unlock possibilities.',
    image: '/images/about/galaxy.png',
    desktopClass: 'lg:w-[17vw] lg:h-[24vw] xl:w-[380px] xl:h-[500px]',
    titleClass: 'text-[clamp(1.2rem,2vw,2.2rem)]',
    textClass: 'text-[clamp(0.65rem,1.1vw,0.95rem)]',
    cardZ: 'z-10',
  },
  {
    id: 'performance',
    title: 'Performance',
    lineColor: 'bg-orange-500',
    description: 'High-speed, optimized solutions that drive results and innovation.',
    image: '/images/about/vol-final.png',
    desktopClass: 'lg:w-[14vw] lg:h-[20vw] xl:w-[320px] xl:h-[420px]',
    titleClass: 'text-[clamp(1rem,1.5vw,1.8rem)]',
    textClass: 'text-[clamp(0.6rem,1vw,0.85rem)]',
    cardZ: 'z-0',
    imagePosition: 'object-[80%_20%]',
  },
];

export default function AboutHeroShowcase() {
  return (
    <section className="relative pt-32 lg:pt-44 pb-12 lg:pb-20 overflow-hidden bg-gradient-to-b from-[#F0F7F4] to-[#FDF8F2]">
      {/* Radiant ambient glow orbs */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10b981] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#84cc16] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="site-container relative z-10 text-center">
        {/* Eyebrow & Main Headings */}
        <div className="inline-flex flex-col items-center mb-6 md:mb-10">
          <span className="text-[#10b981] font-black tracking-[0.2em] capitalize text-xs sm:text-sm mb-4">
            Isarva Infotech
          </span>
          <h1 className="max-w-5xl mb-6">
            Precision in <span className="italic text-[#10b981] font-bold">Technology.</span>
            <br />
            Purpose in <span className="italic text-[#10b981] font-bold">Impact.</span>
          </h1>
          <p className="mt-2 text-base lg:text-xl text-[#53606b] max-w-3xl mx-auto leading-relaxed font-medium">
            At Isarva Infotech, we are more than an IT consulting firm — we are a strategic technology partner and a catalyst for progress in an ever-evolving digital world.
          </p>
        </div>

        {/* =========================================================================
            MOBILE HORIZONTAL CAROUSEL (< lg)
            ========================================================================= */}
        <div className="flex lg:hidden overflow-x-auto items-center py-6 scrollbar-hide snap-x snap-mandatory px-4 gap-4">
          {showcaseCards.map((card) => (
            <div
              key={`mobile-${card.id}`}
              className="relative w-[260px] h-[420px] flex-shrink-0 snap-center rounded-[2.5rem] overflow-hidden ring-1 ring-[#10b981]/15 bg-[#1a1f24] shadow-xl"
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="260px"
                className={`object-cover ${card.imageScale || ''} ${card.imagePosition || ''}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 text-left">
                <h3 className="text-white mb-1.5">{card.title}</h3>
                <div className={`w-12 h-1 ${card.lineColor} mb-2.5 shrink-0 rounded-full`} />
                <p className="text-white/80 text-sm leading-snug font-normal">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            DESKTOP INTERACTIVE FAN SHOWCASE (>= lg)
            ========================================================================= */}
        <div className="hidden lg:flex justify-center items-center gap-1 xl:space-x-1 overflow-visible mt-6">
          {showcaseCards.map((card) => (
            <div
              key={`desktop-${card.id}`}
              className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl ${card.cardZ} ${card.desktopClass} transform hover:-translate-y-4 transition-all duration-500 ring-1 ring-[#10b981]/10 group cursor-pointer`}
            >
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="450px"
                className={`object-cover ${card.imageScale || ''} ${card.imagePosition || ''} transition-transform duration-700 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-5 xl:p-8 text-left transition-all duration-500">
                <h3 className={`text-white leading-tight mb-1.5 ${card.titleClass}`}>
                  {card.title}
                </h3>
                <div className={`w-10 h-1 ${card.lineColor} mb-2.5 shrink-0 rounded-full`} />
                <p className={`text-white/80 leading-relaxed font-normal ${card.textClass}`}>
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
