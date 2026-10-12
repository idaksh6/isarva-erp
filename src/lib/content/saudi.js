// Saudi Arabia Edition Content (ZATCA Fatoora Phase 2 Compliance, SAR, +966)
export const saudiContent = {
  countryCode: 'SA',
  countryName: 'Saudi Arabia',
  meta: {
    siteName: 'ISARVA ERP — Saudi Arabia',
    tagline: 'ZATCA Phase 2 Approved Cloud ERP & Touch POS',
    description: 'All-in-One Cloud ERP Platform with ZATCA (Fatoora) Phase 2 e-Invoicing, Bilingual Arabic/English Restaurant POS, BillSoft Accounting, HRMS with Saudi Labor Law, and CRM.',
    phone: '+966 50 123 4567',
    email: 'saudi@isarvait.com',
    address: 'Al Olaya District, Riyadh | Jeddah | Dammam, Kingdom of Saudi Arabia',
    currency: 'SAR (ر.س)',
    phoneCode: '+966',
    flag: 'SA',
  },
  countries: [
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ],
  hero: {
    badge: 'ZATCA PHASE 2 APPROVED ERP & POS',
    headlineMain: 'Next-Generation Cloud ERP &',
    headlineHighlight: 'ZATCA e-Invoicing Suite',
    subheadline: 'Empower your restaurant, retail, and commercial enterprise in Saudi Arabia with ISARVA ERP. Fully certified for ZATCA (Fatoora) Phase 2 integration, Phase 1 QR generation, bilingual Arabic/English touch POS, BillSoft Accounting, HRMS, and CRM.',
    primaryCtaText: 'Get Started in Saudi Arabia',
    primaryCtaLink: '#get-started',
    secondaryCtaText: 'Book ZATCA Demo',
    secondaryCtaLink: '#demo',
    trustBadges: [
      { id: 't1', title: 'Trusted by', subtitle: '500+ GCC Businesses', icon: 'Users' },
      { id: 't2', title: 'ZATCA', subtitle: 'Phase 2 Certified', icon: 'FileCheck' },
      { id: 't3', title: 'Bilingual', subtitle: 'العربية & English', icon: 'ShieldCheck' }
    ],
    mockupStats: {
      totalSales: 'SAR 48,920',
      totalCustomers: '840',
      gstTag: 'ZATCA Phase 2 Fatoora Compliant'
    }
  },
  products: [
    {
      id: 'restaurant-pos',
      title: 'Restaurant POS (Bilingual)',
      subtitle: 'Smart Touch POS & Kitchen Display',
      color: '#059669',
      themeClass: 'pos',
      buttonText: 'Explore Saudi POS',
      buttonLink: '#restaurant-pos',
      iconName: 'UtensilsCrossed',
      image: '/images/hero-restaurant-pos.jpg',
      features: [
        'Bilingual Arabic & English Touch Billing',
        'ZATCA Simplified Tax Invoices with QR Code',
        'Interactive Table Layouts & Split Billing',
        'Kitchen Display System (KDS) & Multi-Station KOT',
        'Recipe Costing & Real-Time Stock Depletion',
        'Jahez, HungerStation & Delivery Aggregators Sync'
      ]
    },
    {
      id: 'billsoft',
      title: 'BillSoft Accounting (ZATCA)',
      subtitle: 'Complete Accounting & Fatoora Suite',
      color: '#2563eb',
      themeClass: 'billsoft',
      buttonText: 'Explore BillSoft KSA',
      buttonLink: '#billsoft',
      iconName: 'BarChart3',
      image: '/images/hero-billsoft-isarva.jpg',
      features: [
        'ZATCA Phase 2 Direct API Clearance & Reporting',
        'Cryptographic Stamps (CSID), UUID & Hash Generation',
        '15% Standard VAT & Zero-Rated Export Rules',
        'Multi-Branch & Multi-Warehouse Inventory Control',
        'Automated Bilingual Financial Statements (P&L, Balance Sheet)',
        'Accounts Payable, Receivables & Bank Reconciliation'
      ]
    },
    {
      id: 'hrms',
      title: 'HRMS (Saudi Labor Law)',
      subtitle: 'HR & GOSI / WPS Payroll Suite',
      color: '#7c3aed',
      themeClass: 'hrms',
      buttonText: 'Explore HRMS KSA',
      buttonLink: '#hrms',
      iconName: 'Users2',
      image: '/images/hero-hrms-isarva.jpg',
      features: [
        'Wage Protection System (WPS / SIF) File Generation',
        'GOSI Social Insurance Tracking & Deductions',
        'Iqama, Passport & Baladiya License Expiry Alerts',
        'End of Service (EOSB) Gratuity Calculation',
        'Biometric Attendance & Overtime Automation',
        'Bilingual Employee Self-Service Mobile Portal'
      ]
    },
    {
      id: 'crm',
      title: 'CRM (GCC Edition)',
      subtitle: 'Omnichannel Sales & WhatsApp CRM',
      color: '#ea580c',
      themeClass: 'crm',
      buttonText: 'Explore CRM KSA',
      buttonLink: '#crm',
      iconName: 'Handshake',
      image: '/images/hero-crm-isarva.jpg',
      features: [
        'Direct WhatsApp Business Cloud Integration',
        'Bilingual Arabic & English Quotations & Invoices',
        'Customer Loyalty Points & SMS Campaigns',
        'Visual B2B Sales Pipeline & Deal Stages',
        'Multi-Agent Customer Support Inbox',
        'GCC Multi-Currency & Cross-Border Quotations'
      ]
    }
  ],
  whyChoose: {
    badge: 'WHY CHOOSE ISARVA IN SAUDI ARABIA?',
    title: 'Certified ERP Engineered for the Kingdom',
    subtitle: 'Built from the ground up for Saudi Vision 2030 compliance and high-growth enterprises.',
    items: [
      {
        id: 'wc1',
        title: 'All-in-One Cloud ERP',
        description: 'POS, Accounting, HRMS, and CRM in a unified cloud platform.',
        iconName: 'Layers'
      },
      {
        id: 'wc2',
        title: 'ZATCA Phase 2 Fatoora',
        description: 'Certified API clearance, reporting, and cryptographic stamps.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'wc3',
        title: 'Bilingual System',
        description: 'Full native Arabic and English user interface and receipts.',
        iconName: 'Sparkles'
      },
      {
        id: 'wc4',
        title: 'Multi-Branch Ready',
        description: 'Centralized management across Riyadh, Jeddah, Dammam & GCC.',
        iconName: 'Store'
      },
      {
        id: 'wc5',
        title: 'Saudi Labor Law',
        description: 'Automated WPS payroll files, GOSI, and Iqama compliance.',
        iconName: 'Users'
      },
      {
        id: 'wc6',
        title: 'KSA Cloud Hosting',
        description: 'High-speed cloud servers with 99.9% uptime SLA.',
        iconName: 'Cloud'
      }
    ]
  },
  gstSection: {
    badge: 'ZATCA FATOORA STATUTORY COMPLIANCE',
    title: 'Built for Saudi Vision 2030 Enterprises',
    subtitle: 'ISARVA ERP connects seamlessly with the ZATCA Fatoora portal for Phase 2 integration, generating certified Simplified & Standard Tax Invoices with cryptographic stamps.',
    checklist: [
      'ZATCA Phase 2 Direct API Clearance & Reporting',
      'Phase 1 & Phase 2 QR Code Generation',
      'Cryptographic Stamp (CSID) & Digital Signatures',
      'Unique UUID, Invoice Hash & Previous Invoice Hash (PIH)',
      'Saudi Standard 15% VAT & Tax Exemption Rules',
      'Bilingual Arabic & English Tax Receipts'
    ]
  },
  industries: {
    badge: 'INDUSTRIES WE SERVE IN SAUDI ARABIA',
    title: 'Powering Leading Enterprises Across the Kingdom',
    subtitle: 'From fine dining in Riyadh to retail chains in Jeddah, ISARVA ERP delivers excellence.',
    items: [
      { name: 'Restaurants & Cafés', iconName: 'Utensils', tag: 'مطاعم' },
      { name: 'Retail Supermarkets', iconName: 'ShoppingBag', tag: 'تجارة' },
      { name: 'Hypermarkets & Groceries', iconName: 'ShoppingCart', tag: 'تموينات' },
      { name: 'Coffee Roasteries & Chains', iconName: 'Coffee', tag: 'مقاهي' },
      { name: 'Wholesale & Logistics', iconName: 'Boxes', tag: 'توزيع' },
      { name: 'Multi-Branch Enterprises', iconName: 'Building2', tag: 'شركات' }
    ]
  },
  testimonials: {
    badge: 'WHAT OUR CUSTOMERS SAY IN SAUDI ARABIA',
    title: 'Trusted by Leading Businesses Across KSA',
    subtitle: 'Discover how Saudi enterprises scale with ISARVA ERP.',
    items: [
      {
        id: 'tst1',
        name: 'Al-Diwan Gourmet Lounge',
        location: 'Riyadh, Saudi Arabia',
        rating: 5,
        quote: 'ISARVA POS handles our ZATCA Phase 2 Fatoora compliance seamlessly. The bilingual Arabic touch screen and KDS have sped up table service immensely.',
        initials: 'AD',
        avatarImage: '/images/hero-restaurant-pos.jpg'
      },
      {
        id: 'tst2',
        name: 'Red Sea Hypermarket',
        location: 'Jeddah, Saudi Arabia',
        rating: 5,
        quote: 'BillSoft manages our 6 hypermarket branches across Jeddah and Makkah with centralized inventory and automated 15% VAT reporting.',
        initials: 'RS',
        avatarImage: '/images/hero-billsoft-isarva.jpg'
      },
      {
        id: 'tst3',
        name: 'Al-Nakheel Cafe & Roastery',
        location: 'Dammam, Saudi Arabia',
        rating: 5,
        quote: 'Super-fast touch billing with instant ZATCA QR codes. Our barista queues moved twice as fast from day one. Fantastic local support.',
        initials: 'AN',
        avatarImage: '/images/hero-erp-overview.jpg'
      },
      {
        id: 'tst4',
        name: 'Oasis Retail Chain',
        location: 'Riyadh, Saudi Arabia',
        rating: 5,
        quote: 'The HRMS module handles Saudi WPS payroll files and Iqama renewals with zero headache. Outstanding ERP for our multi-branch team.',
        initials: 'OR',
        avatarImage: '/images/hero-crm-isarva.jpg'
      }
    ]
  }
};
