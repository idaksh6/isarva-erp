// India Edition Content (GST Compliance, INR, +91)
// Aligned with ISARVA ERP Content & SEO Planning Guide

export const indiaContent = {
  countryCode: 'IN',
  countryName: 'India',
  meta: {
    siteName: 'ISARVA ERP — India',
    tagline: 'Connected business software for billing, accounting, inventory, workforce management and customer relationships',
    description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
    phone: '+91 9902863697',
    email: 'contact@isarvait.com',
    address: 'Bajpe, Mangalore | Tech Park, Bangalore, Karnataka, India',
    currency: 'INR (₹)',
    phoneCode: '+91',
    flag: 'IN',
  },
  countries: [
    { code: 'IN', name: 'India', flag: '🇮🇳', currency: 'INR (₹)', phoneCode: '+91', lang: 'English' },
    { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', currency: 'SAR (ر.س)', phoneCode: '+966', lang: 'العربية / English' }
  ],
  hero: {
    badge: 'ALL-IN-ONE BUSINESS MANAGEMENT SOFTWARE',
    headlineMain: 'Run Your Entire Business with One',
    headlineHighlight: 'Powerful ERP Platform',
    subheadline: 'Simplify billing, accounting, inventory, employee management and customer relationships with ISARVA ERP. Connect your daily business operations through an integrated platform designed to help your business work smarter and grow confidently.',
    primaryCtaText: 'Book a Free Demo',
    primaryCtaLink: '#demo',
    secondaryCtaText: 'Explore Our Solutions',
    secondaryCtaLink: '#products',
    trustBadges: [
      { id: 't1', title: 'Connected Operations', subtitle: 'Unified Platform', icon: 'Layers' },
      { id: 't2', title: 'Actionable Insights', subtitle: 'Accessible Reports', icon: 'BarChart3' },
      { id: 't3', title: 'Multi-Branch Management', subtitle: 'Central System', icon: 'Store' }
    ],
    mockupStats: {
      totalSales: '₹ 2,48,320',
      totalCustomers: '1,268',
      gstTag: 'GST e-Invoice Compliant India'
    }
  },
  productsHeader: {
    badge: 'PRODUCTS & SOLUTIONS',
    title: 'Complete Business Management Solutions for Every Stage of Growth',
    subtitle: 'Manage essential business activities with connected solutions for billing, accounting, workforce management, sales and inventory. Choose the modules your business needs and build a more organized way of working.'
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
    title: 'Everything Your Business Needs, Connected in One Platform',
    subtitle: 'Reduce fragmented workflows by bringing essential business operations into a more connected environment. ISARVA ERP helps teams manage information, coordinate activities and access business reports from a common platform.',
    items: [
      {
        id: 'wc1',
        title: 'Integrated Business Modules',
        description: 'Connect billing, accounting, inventory, HRMS and CRM workflows where supported, helping reduce duplicate data entry.',
        iconName: 'Layers'
      },
      {
        id: 'wc2',
        title: 'Centralized Multi-Branch Operations',
        description: 'Access relevant branch information from a centralized workspace with role-based access where configured.',
        iconName: 'Store'
      },
      {
        id: 'wc3',
        title: 'Reports That Support Better Decisions',
        description: 'Review sales, financial performance, stock and workforce information using the reports available in your selected modules.',
        iconName: 'BarChart3'
      },
      {
        id: 'wc4',
        title: 'Convenient Business Access',
        description: 'Work through supported devices and locations, subject to your deployment and access configuration.',
        iconName: 'Smartphone'
      },
      {
        id: 'wc5',
        title: 'Practical Business Workflows',
        description: 'Organize routine activities such as invoicing, approvals, employee requests, stock transfers and customer follow-ups.',
        iconName: 'CheckCircle2'
      },
      {
        id: 'wc6',
        title: 'Support for Your Business Journey',
        description: 'Get guidance on selecting and configuring solutions for your operational requirements.',
        iconName: 'ShieldCheck'
      }
    ]
  },
  gstSection: {
    badge: 'GST & STATUTORY COMPLIANCE',
    title: 'Simplify GST Invoicing and Financial Compliance Workflows',
    subtitle: 'Manage invoicing and accounting activities with tools designed to support relevant Indian GST workflows. Organize transaction records, review tax-related reports and prepare the information needed for your compliance processes.',
    checklist: [
      'GST invoice creation and tax calculations',
      'E-invoice and Invoice Reference Number (IRN) workflows, where integrated',
      'QR code generation for supported e-invoices',
      'E-way bill workflows, where available',
      'Sales tax summaries and GSTR-related reports',
      'TDS/TCS calculations, where supported',
      'Financial records and audit trail visibility, where available'
    ],
    trustPills: [
      { label: 'GST-Ready Invoicing', iconName: 'ShieldCheck' },
      { label: 'IRN & QR Code Support', iconName: 'Zap' },
      { label: 'Audit Trail & Tax Summaries', iconName: 'FileText' }
    ]
  },
  industries: {
    badge: 'INDUSTRIES WE SERVE',
    title: 'Business Management Software for Your Industry',
    subtitle: 'Every industry has different operational requirements. ISARVA ERP offers business management solutions that can be selected and configured around your workflows.',
    items: [
      {
        id: 'ind1',
        name: 'Restaurants, Cafés & QSRs',
        iconName: 'Utensils',
        tag: 'F&B',
        description: 'Manage restaurant orders, tables, kitchen tickets, billing and sales reporting through restaurant POS workflows.'
      },
      {
        id: 'ind2',
        name: 'Retail Stores & Supermarkets',
        iconName: 'ShoppingBag',
        tag: 'Retail',
        description: 'Organize product sales, billing, stock availability, purchasing and inventory reporting.'
      },
      {
        id: 'ind3',
        name: 'Wholesale & Distribution',
        iconName: 'Boxes',
        tag: 'B2B',
        description: 'Track purchase and sales transactions, warehouse stock, customer balances and supplier accounts.'
      },
      {
        id: 'ind4',
        name: 'Apparel & Boutiques',
        iconName: 'Store',
        tag: 'Boutiques',
        description: 'Manage product catalogs, sales transactions, stock movement and business reporting.'
      },
      {
        id: 'ind5',
        name: 'Corporate & Multi-Branch Businesses',
        iconName: 'Building2',
        tag: 'Enterprise',
        description: 'Organize workforce administration, accounting, sales activities and branch-level reporting.'
      }
    ]
  },
  testimonials: {
    badge: 'TRUST & CREDIBILITY',
    title: 'A Business Technology Partner You Can Rely On',
    subtitle: 'Choose a business software partner that understands your operational needs. ISARVA ERP brings together essential business workflows and offers a platform that can grow with your requirements.',
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
  },
  faqs: {
    badge: 'FREQUENTLY ASKED QUESTIONS',
    title: 'Common Questions About ISARVA ERP',
    subtitle: 'Find clear answers about platform capabilities, modules, multi-branch operations and GST compliance.',
    items: [
      {
        q: 'What is ISARVA ERP?',
        a: 'ISARVA ERP is a business management platform offering solutions for restaurant POS, accounting, inventory, HRMS, payroll and CRM. Available modules can help businesses organize daily operations and reporting.'
      },
      {
        q: 'Who can use ISARVA ERP?',
        a: 'Restaurants, cafés, retail stores, wholesalers and multi-branch organizations can explore relevant modules based on their operational needs.'
      },
      {
        q: 'Does ISARVA ERP support GST invoicing?',
        a: 'BillSoft can support relevant GST invoicing and reporting workflows, depending on the features and integrations enabled. Contact the team to confirm the specific e-invoice, IRN and e-way bill capabilities you require.'
      },
      {
        q: 'Can I manage multiple branches?',
        a: 'Multi-branch management is intended to provide centralized visibility into supported business operations. Branch-level access, consolidation and synchronization depend on your configuration.'
      },
      {
        q: 'Does ISARVA ERP include payroll and attendance?',
        a: 'The HRMS solution is designed to support employee records, payroll, attendance, leave and related workforce processes. Confirm available integrations and payroll rules for your business before implementation.'
      },
      {
        q: 'Can I use only one module?',
        a: 'You can enquire about individual solutions such as Restaurant POS, BillSoft Accounting, HRMS or CRM. The sales team can confirm available standalone packages and integration options.'
      },
      {
        q: 'How can I get a demo?',
        a: 'Submit your business details through the contact form and select the solution you want to explore. The team can then discuss your requirements and arrange a suitable demonstration.'
      },
      {
        q: 'Is ISARVA ERP available in India and the Middle East?',
        a: 'The website references Indian GST and Saudi ZATCA-related workflows. Contact the team to confirm regional availability, supported legal entities, integrations and compliance capabilities for your location.'
      }
    ]
  }
};
