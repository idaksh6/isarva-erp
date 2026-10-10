import './globals.css';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata = {
  title: 'ISARVA ERP | Smart Business Solutions for a Connected Tomorrow',
  description: 'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM with Indian GST and e-Invoicing compliance.',
  keywords: 'ISARVA ERP, Restaurant POS, BillSoft Accounting, GST e-Invoicing, HRMS, CRM, India Business Software',
  openGraph: {
    title: 'ISARVA ERP | Complete Business Management Platform',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting, HRMS, and CRM with Indian GST and e-Invoicing compliance.',
    url: 'https://demoweb.isarva.in/isarva-erp/',
    siteName: 'ISARVA ERP',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/isarva-erp/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
