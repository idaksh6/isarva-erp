'use client';

import React from 'react';
import Image from 'next/image';
import { TrendingUp, Cpu, Users, Lightbulb, Sparkles } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '15+',
    label: 'Years of Expertise',
  },
  {
    icon: Cpu,
    value: '1,000+',
    label: 'Projects Delivered',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Global Enterprises',
  },
];

const pillars = [
  {
    icon: Users,
    title: 'User-Centric',
    description: 'We build with people in mind, ensuring intuitive and impactful experiences that drive engagement and value.',
  },
  {
    icon: Lightbulb,
    title: 'Purpose-Driven Innovation',
    description: 'Innovating with intention and real-world value, we solve complex challenges with smart, adaptive technologies.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Strategy',
    description: 'Scalable solutions tailored to grow your business faster and smarter, aligning every digital brick with your vision.',
  },
  {
    icon: Sparkles,
    title: 'Digital Clarity',
    description: 'Stripping away complexity to deliver clean and efficient solutions that provide ultimate clarity and performance.',
  },
];

export default function AboutForefrontStats() {
  return (
    <section className="bg-white overflow-hidden border-y border-[#10b981]/15">
      <div className="flex flex-col lg:flex-row">
        
        {/* =========================================================================
            LEFT DARK GREEN STATS PANEL
            ========================================================================= */}
        <div className="w-full lg:w-[360px] xl:w-[400px] bg-[#16423C] text-white p-8 sm:p-12 md:p-16 flex flex-col justify-center items-center lg:items-start space-y-10 md:space-y-14 shrink-0">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#10b981]" />
                </div>
                <span className="text-5xl md:text-6xl font-bold font-mono tracking-tight mb-2 text-white">
                  {stat.value}
                </span>
                <p className="text-[#FDF8F2]/75 text-sm md:text-base tracking-widest uppercase font-semibold">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================================================================
            RIGHT CREAM DIGITAL TRANSFORMATION PANEL
            ========================================================================= */}
        <div className="flex-1 bg-[#FDF8F2] p-6 sm:p-10 md:p-16 lg:p-20">
          <h2 className="lg:text-left text-center text-[#16423C] mb-8 lg:mb-12 max-w-4xl capitalize">
            Standing at the forefront of digital transformation.
          </h2>

          {/* Large Hero Banner */}
          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px] rounded-[2rem] md:rounded-[3rem] overflow-hidden mb-12 md:mb-16 shadow-2xl ring-4 ring-white/60">
            <Image
              src="/images/about/enterprise-transformation-bg.png"
              alt="Digital Excellence & Enterprise Transformation"
              fill
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#16423C]/90 via-[#16423C]/30 to-transparent flex items-end p-6 md:p-12">
              <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                Crafting the Future of Enterprise Solutions.
              </h3>
            </div>
          </div>

          {/* 4 Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="flex gap-4 md:gap-5 items-start">
                  <div className="flex-none w-12 h-12 rounded-xl bg-[#16423C]/5 flex items-center justify-center border border-[#16423C]/10 text-[#007a55]">
                    <Icon className="w-6 h-6 text-[#10b981]" />
                  </div>
                  <div>
                    <h3 className="text-[#16423C] text-lg sm:text-xl font-bold mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-[#53606b] leading-relaxed text-sm sm:text-base font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
