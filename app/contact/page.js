import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactHero } from '@/components/contact/contact-hero';
import { ContactForm } from '@/components/contact/contact-form';
import { ContactInfo } from '@/components/contact/contact-info';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'

export const metadata = {
  title: 'Contact Us | Reel Span Digital',
  description: 'Get in touch with Reel Span Digital. Have questions about our services? We&apos;d love to hear from you. Contact us today to discuss your project.',
  openGraph: {
    title: 'Contact Us | Reel Span Digital',
    description: 'Get in touch with Reel Span Digital. Contact us to discuss your project and digital needs.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
}

export default function ContactPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Reel Span Digital',
    url: `${SITE_URL}/contact`,
    description: 'Contact page for Reel Span Digital',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full bg-white">
        <Header />
        <ContactHero />
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 py-20">
          <ContactForm />
          <ContactInfo />
        </div>
        <Footer />
      </main>
    </>
  );
}
