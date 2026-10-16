import MainPageContent from '../components/MainPageContent';

export const metadata = {
  title: 'ISARVA ERP – Business Management, POS & Accounting Software',
  description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
  keywords: 'ERP software for businesses in India, Restaurant POS software, GST accounting software, Inventory management software, HRMS and payroll software, CRM software, Multi-branch ERP',
  openGraph: {
    title: 'ISARVA ERP – Business Management, POS & Accounting Software',
    description: 'ISARVA ERP helps businesses manage restaurant POS, GST accounting, inventory, payroll, HRMS and CRM in one integrated business management platform.',
    url: 'https://demoweb.isarva.in/',
    siteName: 'ISARVA ERP',
    locale: 'en_US',
    type: 'website',
  },
};

export default function HomePage() {
  return <MainPageContent initialCountry="IN" />;
}
