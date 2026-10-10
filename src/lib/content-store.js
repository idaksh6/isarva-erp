// Master Data & Content Store for ISARVA ERP
// All public website sections read from this store and can be modified via /admin CMS

export let defaultContent = {
  meta: {
    siteName: 'ISARVA ERP',
    tagline: 'Smart Business Solutions for a Connected Tomorrow',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting (BillSoft), HRMS, and CRM with Indian GST, e-Invoicing, and e-Way Bill compliance.',
    phone: '+91 98765 43210',
    email: 'contact@isarvait.com',
    address: 'Bangalore | Mumbai | Delhi | Dubai'
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
        'Menu & Inventory Management',
        'Kitchen Display System (KDS)',
        'Reports & Analytics',
        'Multi-Branch Support'
      ]
    },
    {
      id: 'billsoft',
      title: 'BillSoft Accounting',
      subtitle: 'Complete Accounting Solution',
      color: '#2563eb',
      themeClass: 'billsoft',
      buttonText: 'Explore BillSoft',
      buttonLink: '#billsoft',
      iconName: 'BarChart3',
      image: '/images/billsoft-card-preview.jpg',
      features: [
        'GST e-Invoicing (India)',
        'Sales, Purchase & Inventory',
        'Accounts, Payments & Receivables',
        'Multi-Branch & Multi-Currency',
        'Financial Reports & Analytics',
        'TDS, TCS & GST Reports'
      ]
    },
    {
      id: 'hrms',
      title: 'HRMS',
      subtitle: 'Human Resource Management',
      color: '#7c3aed',
      themeClass: 'hrms',
      buttonText: 'Explore HRMS',
      buttonLink: '#hrms',
      iconName: 'Users2',
      image: '/images/hrms-card-preview.jpg',
      features: [
        'Employee Management',
        'Payroll & Salary Processing',
        'Attendance & Leave Management',
        'Recruitment & Onboarding',
        'HR Reports & Analytics',
        'Multi-Branch Support'
      ]
    },
    {
      id: 'crm',
      title: 'CRM',
      subtitle: 'Customer Relationship Management',
      color: '#ea580c',
      themeClass: 'crm',
      buttonText: 'Explore CRM',
      buttonLink: '#crm',
      iconName: 'Handshake',
      image: '/images/crm-card-preview.jpg',
      features: [
        'Lead & Customer Management',
        'Sales Pipeline',
        'Follow-ups & Tasks',
        'WhatsApp & Email Communication',
        'Customer Insights & Reports',
        'Team & Activity Tracking'
      ]
    }
  ],
  whyChoose: {
    badge: 'WHY CHOOSE ISARVA ERP?',
    title: 'Everything You Need to Succeed',
    subtitle: 'One platform. Multiple solutions. Built for modern businesses.',
    items: [
      {
        id: 'wc1',
        title: 'All-in-One ERP',
        description: 'POS, Accounting, HRMS, CRM & More',
        iconName: 'Layers'
      },
      {
        id: 'wc2',
        title: 'GST Compliance',
        description: 'Fully compliant with Indian GST & e-invoicing',
        iconName: 'ShieldCheck'
      },
      {
        id: 'wc3',
        title: 'Multi-Branch Support',
        description: 'Manage multiple branches seamlessly',
        iconName: 'Store'
      },
      {
        id: 'wc4',
        title: 'Real-Time Reports',
        description: 'Make data-driven decisions',
        iconName: 'TrendingUp'
      },
      {
        id: 'wc5',
        title: 'Cloud Based',
        description: 'Access from anywhere anytime',
        iconName: 'Cloud'
      },
      {
        id: 'wc6',
        title: 'Secure & Reliable',
        description: 'Your data is safe with us',
        iconName: 'Lock'
      }
    ]
  },
  gstSection: {
    title: 'Built for Indian Businesses',
    subtitle: 'ISARVA ERP is fully compliant with Indian GST regulations, including e-invoicing, e-way bill and all statutory requirements.',
    badge: 'GST Compliant India',
    checklist: [
      'GST e-Invoice Generation',
      'e-Way Bill Integration',
      'IRN & QR Code Support',
      'GSTR-1, GSTR-3B & GST Reports',
      'TDS / TCS Management',
      'Stay updated with latest GST rules'
    ]
  },
  industries: {
    badge: 'INDUSTRIES WE SERVE',
    title: 'Trusted by Businesses Across Multiple Industries',
    subtitle: 'From restaurants to retail, ISARVA ERP helps businesses of all sizes succeed.',
    items: [
      { name: 'Restaurants & Cafés', iconName: 'Utensils' },
      { name: 'Retail Stores', iconName: 'ShoppingBag' },
      { name: 'Supermarkets', iconName: 'ShoppingCart' },
      { name: 'Food & Beverage Chains', iconName: 'Coffee' },
      { name: 'Wholesale & Distribution', iconName: 'Boxes' },
      { name: 'Multi-Branch Businesses', iconName: 'Building2' }
    ]
  },
  testimonials: {
    badge: 'WHAT OUR CUSTOMERS SAY',
    title: 'Trusted by Growing Businesses',
    subtitle: 'Join hundreds of satisfied businesses using ISARVA ERP.',
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
        quote: 'BillSoft made our accounting and GST filing so much easier. Highly recommended for retail businesses.',
        initials: 'MR',
        avatarImage: '/images/tst-metro-mart.jpg'
      },
      {
        id: 'tst3',
        name: 'Taste of India',
        location: 'Delhi, India',
        rating: 5,
        quote: 'Excellent support and features. The entire ERP platform is easy to use and very reliable.',
        initials: 'TI',
        avatarImage: '/images/tst-taste-of-india.jpg'
      },
      {
        id: 'tst4',
        name: 'The Daily Grind Café',
        location: 'Hyderabad, India',
        rating: 5,
        quote: 'The multi-terminal POS and kitchen display system accelerated our peak morning rush hour orders by 40%.',
        initials: 'DG',
        avatarImage: '/images/tst-royal-cafe.jpg'
      }
    ]
  },
  inquiries: [
    {
      id: 'inq-1',
      name: 'Rajesh Kumar',
      email: 'rajesh@spicegarden.in',
      phone: '+91 98450 12345',
      company: 'Spice Garden',
      product: 'Restaurant POS',
      message: 'Looking for a 3-terminal POS system with KDS.',
      createdAt: '2026-10-09 14:30'
    }
  ]
};

// Global in-memory content storage
let activeContent = { ...defaultContent };

export function getContent() {
  return activeContent;
}

export function updateContent(newContent) {
  activeContent = { ...activeContent, ...newContent };
  return activeContent;
}

export function addInquiry(inquiry) {
  const newInq = {
    id: 'inq-' + (activeContent.inquiries.length + 1),
    ...inquiry,
    createdAt: new Date().toLocaleString()
  };
  activeContent.inquiries.unshift(newInq);
  return newInq;
}
