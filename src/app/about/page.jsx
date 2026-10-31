import AboutPageContent from '../../components/about/AboutPageContent';

export const metadata = {
  title: 'About Us – ISARVA ERP | Unified Cloud Business Management Software',
  description: 'Learn about ISARVA ERP, built by Isarva Infotech Pvt Ltd. Discover our mission to connect retail POS, GST & ZATCA accounting, HRMS payroll, and CRM into one seamless cloud platform.',
  keywords: 'About ISARVA, ISARVA ERP, Isarva Infotech, Business Software Company, GST Software India, ZATCA Accounting Saudi Arabia, Cloud ERP Platform, Restaurant POS Systems',
  openGraph: {
    title: 'About Us – ISARVA ERP | Unified Cloud Business Management Software',
    description: 'Empowering businesses across India and GCC with unified, intelligent cloud ERP. Read our story, architectural pillars, and global footprint.',
    url: 'https://demoweb.isarva.in/about',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us – ISARVA ERP',
    description: 'Connecting your operations. Empowering your growth with unified cloud business management.',
  },
};

export default function AboutPage() {
  return <AboutPageContent initialCountry="IN" />;
}
