import MainPageContent from '../components/MainPageContent';

export const metadata = {
  title: 'ISARVA ERP | Smart Business Solutions for a Connected Tomorrow',
  description: 'Power your restaurant, retail and business operations with ISARVA ERP – featuring Restaurant POS, Accounting (BillSoft), HRMS and CRM with Indian GST and e-Invoicing compliance.',
  keywords: 'ISARVA ERP, Restaurant POS, BillSoft Accounting, GST e-Invoicing, HRMS, CRM, India Business Software',
  openGraph: {
    title: 'ISARVA ERP | Complete Business Management Platform',
    description: 'All-in-One ERP Platform featuring Restaurant POS, Accounting, HRMS, and CRM with Indian GST and e-Invoicing compliance.',
    url: 'https://demoweb.isarva.in/',
    siteName: 'ISARVA ERP',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return <MainPageContent initialCountry="IN" />;
}
