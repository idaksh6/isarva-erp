// India Edition Content (GST Compliance, INR, +91)
export const indiaContent = {
  countryCode: 'IN',
  countryName: 'India',
  meta: {
    siteName: 'ISARVA ERP — India',
    tagline: 'Smart Business Solutions for a Connected Tomorrow',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting (BillSoft), HRMS, and CRM with Indian GST, e-Invoicing, and e-Way Bill compliance.',
    phone: '+91 98765 43210',
    email: 'contact@isarvait.com',
    address: 'Bangalore | Mumbai | Delhi | Hyderabad, India',
    currency: 'INR (₹)',
    phoneCode: '+91',
    flag: 'IN',
  },
  countries: [
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ],
  hero: {
    badge: 'ALL-IN-ONE ERP SOLUTIONS',
    headlineMain: 'Smart Business Solutions for a',
    headlineHighlight: 'Connected Tomorrow',
    subheadline: 'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM in one integrated platform, fully compliant with Indian GST, e-Invoicing and e-Way Bill regulations.',
    primaryCtaText: 'Get Started',
    primaryCtaLink: '#get-started',
    secondaryCtaText: 'Watch Demo',
    secondaryCtaLink: '#demo',
    trustBadges: [
      { id: 't1', title: 'Trusted by', subtitle: '1,000+ Businesses', icon: 'Users' },
      { id: 't2', title: 'GST', subtitle: 'Compliant', icon: 'FileCheck' },
      { id: 't3', title: 'Secure &', subtitle: 'Reliable', icon: 'ShieldCheck' }
    ],
    mockupStats: {
      totalSales: '₹ 2,48,320',
      totalCustomers: '1,268',
      gstTag: 'GST e-Invoice Compliant India'
    }
  },
  products: [
    {
      id: 'restaurant-pos',
      title: 'Restaurant POS',
      subtitle: 'Complete Restaurant Management',
      color: '#059669',
      themeClass: 'pos',
      buttonText: 'Explore Restaurant POS',
      buttonLink: '#restaurant-pos',
      iconName: 'UtensilsCrossed',
      image: '/images/pos-card-preview.jpg',
      features: [
        'Dine In, Takeaway, Delivery & Online Orders',
        'Table & Floor Management',
        'Menu & Recipe Inventory Tracking',
        'Kitchen Display System (KDS) & KOT Sync',
        'Real-Time Sales Reports & Analytics',
        'Multi-Branch Centralized Sync'
      ]
    },
    {
      id: 'billsoft',
      title: 'BillSoft Accounting',
      subtitle: 'Complete Accounting & GST Suite',
      color: '#2563eb',
      themeClass: 'billsoft',
      buttonText: 'Explore BillSoft',
      buttonLink: '#billsoft',
      iconName: 'BarChart3',
      image: '/images/billsoft-card-preview.jpg',
      features: [
        'GST e-Invoicing & e-Way Bill Generation',
        'Sales, Purchase & Real-Time Inventory',
        'Accounts Payable, Receivables & Bank Sync',
        'Multi-Branch & Multi-Warehouse Tracking',
        'Automated Balance Sheet & P&L Reports',
        'TDS, TCS & GSTR-1 / 3B Filing Reports'
      ]
    },
    {
      id: 'hrms',
      title: 'HRMS',
      subtitle: 'Human Resource & Payroll Management',
      color: '#7c3aed',
      themeClass: 'hrms',
      buttonText: 'Explore HRMS',
      buttonLink: '#hrms',
      iconName: 'Users2',
      image: '/images/hrms-card-preview.jpg',
      features: [
        'Automated Payroll & Salary Slip Generation',
        'Biometric Attendance & Leave Tracking',
        'PF, ESI & Statutory Compliance Deductions',
        'Employee Self-Service Portal & Requests',
        'Performance Appraisal & KPI Tracking',
        'Multi-Branch Staff & Shift Scheduling'
      ]
    },
    {
      id: 'crm',
      title: 'CRM',
      subtitle: 'Customer Engagement & Lead Pipeline',
      color: '#ea580c',
      themeClass: 'crm',
      buttonText: 'Explore CRM',
      buttonLink: '#crm',
      iconName: 'Handshake',
      image: '/images/crm-card-preview.jpg',
      features: [
        'Lead Capture & Visual Deal Pipeline',
        'Automated Follow-Up Reminders & Alerts',
        'WhatsApp & SMS Marketing Integration',
        'Customer Purchase History & Profiles',
        'Sales Team Activity & Performance Metrics',
        'Quotation & Proforma Invoice Generator'
      ]
    }
  ],
  whyChoose: {
    badge: 'WHY CHOOSE ISARVA ERP?',
    title: 'Everything You Need to Succeed',
    subtitle: 'One platform. Multiple solutions. Built for modern businesses across India.',
    items: [
      {
        id: 'wc1',
        title: 'All-in-One ERP',
        description: 'POS, Accounting, HRMS, CRM & More in a single dashboard.',
        iconName: 'Layers'
      },
      {
        id: 'wc2',
        title: 'GST Compliance',
        description: 'Fully compliant with Indian GST, e-invoicing & e-way bills.',
        iconName: 'ShieldCheck'
      },
      {
        id: 'wc3',
        title: 'Multi-Branch Support',
        description: 'Manage multiple branches & warehouses seamlessly.',
        iconName: 'Store'
      },
      {
        id: 'wc4',
        title: 'Real-Time Reports',
        description: 'Instant data analytics to make smart, data-driven decisions.',
        iconName: 'TrendingUp'
      },
      {
        id: 'wc5',
        title: 'Cloud Based',
        description: 'Secure cloud access anytime, anywhere on any mobile device.',
        iconName: 'Cloud'
      },
      {
        id: 'wc6',
        title: 'Secure & Reliable',
        description: 'Bank-grade encryption with guaranteed 99.9% uptime SLA.',
        iconName: 'Lock'
      }
    ]
  },
  gstSection: {
    badge: 'GST & STATUTORY COMPLIANCE',
    title: 'Built for Indian Businesses',
    subtitle: 'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.',
    checklist: [
      'GST e-Invoice Generation with QR & IRN',
      'Automated e-Way Bill Integration',
      'Direct GSTN Portal Synchronization',
      'GSTR-1, GSTR-3B & GSTR-9 Reconciliation',
      'TDS & TCS Automated Calculation',
      'Continuous Updates for Latest Tax Mandates'
    ]
  },
  industries: {
    badge: 'INDUSTRIES WE SERVE',
    title: 'Trusted by Businesses Across Multiple Industries',
    subtitle: 'From restaurants to retail, ISARVA ERP helps Indian businesses of all sizes succeed.',
    items: [
      { name: 'Restaurants & Cafés', iconName: 'Utensils', tag: 'F&B' },
      { name: 'Retail Stores', iconName: 'ShoppingBag', tag: 'Retail' },
      { name: 'Supermarkets', iconName: 'ShoppingCart', tag: 'FMCG' },
      { name: 'Food & Beverage Chains', iconName: 'Coffee', tag: 'Chains' },
      { name: 'Wholesale & Distribution', iconName: 'Boxes', tag: 'B2B' },
      { name: 'Multi-Branch Businesses', iconName: 'Building2', tag: 'Enterprise' }
    ]
  },
  testimonials: {
    badge: 'WHAT OUR CUSTOMERS SAY',
    title: 'Trusted by Growing Businesses Across India',
    subtitle: 'Join hundreds of satisfied business owners using ISARVA ERP.',
    items: [
      {
        id: 'tst1',
        name: 'Spice Garden Restaurant',
        location: 'Bangalore, India',
        rating: 5,
        quote: 'ISARVA POS has streamlined our restaurant operations. The GST e-invoicing is seamless and fully compliant.',
        initials: 'SG',
        avatarImage: '/images/tst-spice-garden.jpg'
      },
      {
        id: 'tst2',
        name: 'Metro Retail Mart',
        location: 'Mumbai, India',
        rating: 5,
        quote: 'BillSoft made our multi-branch accounting and GST filing so much easier. Highly recommended for retail.',
        initials: 'MR',
        avatarImage: '/images/tst-metro-mart.jpg'
      },
      {
        id: 'tst3',
        name: 'Taste of India',
        location: 'Delhi, India',
        rating: 5,
        quote: 'Excellent support and features. The entire ERP platform is intuitive, fast, and completely reliable.',
        initials: 'TI',
        avatarImage: '/images/tst-taste-of-india.jpg'
      },
      {
        id: 'tst4',
        name: 'The Daily Grind Café',
        location: 'Hyderabad, India',
        rating: 5,
        quote: 'The multi-terminal POS and kitchen display system accelerated our rush hour order turnover by over 35%.',
        initials: 'DG',
        avatarImage: '/images/tst-royal-cafe.jpg'
      }
    ]
  }
};
