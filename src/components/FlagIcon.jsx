'use client';

import React from 'react';

/**
 * India National Flag Vector Component
 */
export function IndiaFlag({ className = 'w-5 h-3.5' }) {
  // 24 spokes radiating from the center of the Ashoka Chakra (30, 20)
  const spokes = Array.from({ length: 24 }, (_, i) => {
    const angle = (i * 15 * Math.PI) / 180;
    const x1 = 30 + 1.2 * Math.cos(angle);
    const y1 = 20 + 1.2 * Math.sin(angle);
    const x2 = 30 + 4.9 * Math.cos(angle);
    const y2 = 20 + 4.9 * Math.sin(angle);
    return (
      <line
        key={i}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="#000080"
        strokeWidth="0.5"
      />
    );
  });

  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of India"
    >
      {/* Top Saffron Band */}
      <rect width="60" height="13.33" y="0" fill="#FF9933" />
      {/* Middle White Band */}
      <rect width="60" height="13.34" y="13.33" fill="#FFFFFF" />
      {/* Bottom India Green Band */}
      <rect width="60" height="13.33" y="26.67" fill="#138808" />
      {/* Central Ashoka Chakra */}
      <circle cx="30" cy="20" r="5.2" fill="none" stroke="#000080" strokeWidth="0.8" />
      <circle cx="30" cy="20" r="1.2" fill="#000080" />
      {spokes}
    </svg>
  );
}

/**
 * Saudi Arabia National Flag Vector Component
 */
export function SaudiFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of Saudi Arabia"
    >
      {/* Saudi Emerald Green Background */}
      <rect width="60" height="40" fill="#006C35" />

      {/* White Arabic Shahada Calligraphy Emblem & Scimitar Sword */}
      <g fill="#FFFFFF">
        {/* Arabic Calligraphy Shahada */}
        <path d="M14 13.5h3v-2.5h1.2v2.5h2.5v-2.5h1.2v2.5h4v-1.8h1.2v1.8h3v-2.8h1.2v2.8h2.2v-2h1.2v2h3.5v-2.5h1.2v2.5h2v-3.2h1.2v3.2h3.5c.6 0 1 .4 1 1v1.2c0 .4-.3.8-.7.9l-1.3.3v1.6h-1.2v-1.4h-2.5v1.4h-1.2v-1.4h-3v1.4h-1.2v-1.4h-3.5v1.4h-1.2v-1.4h-3.8v1.4h-1.2v-1.4h-3.2v1.4h-1.2v-1.4h-4v1.4H14v-1.4h-1.5v-1.8h1.5v-.5z" />
        <path d="M18 10.5h1.2v1.5H18zm5 0h1.2v1.5H23zm8 0h1.2v1.5H31zm7 0h1.2v1.5H38zm6 0h1.2v1.5H44z" />
        
        {/* Saudi Curved Sword (Hilt right, blade pointing left) */}
        <path d="M14 26.5c4-.3 10-.3 16-.3s11 0 15 .3c.8.06 1.4-.4 1.5-1.1.08-.7-.4-1.3-1.2-1.4-4.5-.4-11-.4-16.3-.4-5.5 0-11.5.1-16 .7-.9.1-1.3.8-1 1.6.2.5.6.8 1 .9z" />
        <path d="M46 23.2v4.6h1.2v-1.6h2.2c.4 0 .8-.4.8-.8v-.8c0-.4-.4-.8-.8-.8h-2.2v-1.6H46z" />
        <circle cx="51" cy="25.5" r="1" />
      </g>
    </svg>
  );
}

/**
 * United Arab Emirates National Flag
 */
export function UAEFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of UAE"
    >
      <rect width="45" height="13.33" x="15" y="0" fill="#00732F" />
      <rect width="45" height="13.34" x="15" y="13.33" fill="#FFFFFF" />
      <rect width="45" height="13.33" x="15" y="26.67" fill="#000000" />
      <rect width="15" height="40" x="0" y="0" fill="#FF0000" />
    </svg>
  );
}

/**
 * United States National Flag
 */
export function USFlag({ className = 'w-5 h-3.5' }) {
  return (
    <svg
      viewBox="0 0 60 40"
      className={`inline-block rounded-xs shadow-2xs border border-slate-200/80 overflow-hidden shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of USA"
    >
      <rect width="60" height="40" fill="#B22234" />
      <rect width="60" height="3.08" y="3.08" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="9.23" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="15.38" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="21.54" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="27.69" fill="#FFFFFF" />
      <rect width="60" height="3.08" y="33.85" fill="#FFFFFF" />
      <rect width="25" height="21.54" fill="#3C3B6E" />
      <circle cx="6" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="12.5" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="19" cy="5" r="1" fill="#FFFFFF" />
      <circle cx="9.2" cy="10.7" r="1" fill="#FFFFFF" />
      <circle cx="15.7" cy="10.7" r="1" fill="#FFFFFF" />
      <circle cx="6" cy="16.5" r="1" fill="#FFFFFF" />
      <circle cx="12.5" cy="16.5" r="1" fill="#FFFFFF" />
      <circle cx="19" cy="16.5" r="1" fill="#FFFFFF" />
    </svg>
  );
}

/**
 * Universal Flag Icon Component
 * Accepts country code (e.g. 'IN', 'SA', 'AE', 'US') or country name
 */
export default function FlagIcon({ code, className = 'w-5 h-3.5' }) {
  const normalized = (code || '').trim().toUpperCase();

  switch (normalized) {
    case 'IN':
    case 'INDIA':
    case '🇮🇳':
      return <IndiaFlag className={className} />;
    case 'SA':
    case 'SAUDI ARABIA':
    case 'KSA':
    case '🇸🇦':
      return <SaudiFlag className={className} />;
    case 'AE':
    case 'UAE':
    case 'DUBAI':
    case '🇦🇪':
      return <UAEFlag className={className} />;
    case 'US':
    case 'USA':
    case '🇺🇸':
      return <USFlag className={className} />;
    default:
      return (
        <span
          className={`inline-flex items-center justify-center bg-slate-100 text-slate-700 font-bold text-xs rounded-xs border border-slate-300 shrink-0 ${className}`}
        >
          {normalized.slice(0, 2) || '🌐'}
        </span>
      );
  }
}
