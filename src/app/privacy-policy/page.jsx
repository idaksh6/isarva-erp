import PrivacyPolicyContent from '../../components/privacy-policy/PrivacyPolicyContent';

export const metadata = {
  title: 'Privacy Policy – ISARVA Infotech | Data Protection & Your Rights',
  description: 'Learn how Isarva Infotech collects, uses, and protects your personal information. We are committed to transparency, data minimization, and your privacy rights under GDPR and Indian data protection laws.',
  keywords: 'Privacy Policy, Data Protection, GDPR, Isarva Infotech, Personal Data, Cookie Policy, Data Security, User Rights',
  openGraph: {
    title: 'Privacy Policy – ISARVA Infotech',
    description: 'Your privacy matters. Read our commitment to data protection, transparency, and your rights at Isarva Infotech.',
    url: 'https://demoweb.isarva.in/privacy-policy',
    siteName: 'ISARVA ERP',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy – ISARVA Infotech',
    description: 'Your privacy matters. Read our commitment to data protection, transparency, and your rights at Isarva Infotech.',
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
