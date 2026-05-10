import { Header } from '@/components/header';
import { Footer } from '@/components/footer';


import { Hero } from '@/components/home/hero';
import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';
import { Portfolio } from '@/components/home/portfolio';
import { Process } from '@/components/home/process';
import { ToolsSection } from '@/components/home/tools-section';
//import { Testimonials } from '@/components/home/testimonials';
import { CTABanner } from '@/components/home/cta-banner';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'
const COMPANY_NAME = 'Reel Span Digital'

export const metadata = {
  title: 'Custom Web Design & Development Agency | Reel Span Digital',
  description: 'Transform your business with custom websites, e-commerce solutions, AI chatbots, and web applications. Award-winning digital agency delivering scalable, performance-optimized solutions.',
  keywords: 'web design agency, website development, custom web development, e-commerce development, web app development, AI solutions, digital transformation',
  openGraph: {
    title: 'Custom Web Design & Development Agency | Reel Span Digital',
    description: 'Award-winning digital agency crafting custom websites, web apps, and AI solutions for businesses worldwide.',
    url: SITE_URL,
    type: 'website',
  },
}

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: '+234-XXX-XXX-XXXX',
    email: 'hello@reelspandigital.ltd',
    areaServed: ['NG', 'US', 'GB', 'CA', 'AU'],
    serviceType: ['Web Design', 'Web Development', 'E-Commerce Solutions', 'Mobile App Development', 'AI Solutions'],
    description: 'Digital agency specializing in custom web design, development, and AI solutions.',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full bg-white">
        <Header />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Process />
        <ToolsSection />
        {/* <Testimonials /> */}
        <CTABanner />
        <Footer />
      </main>
    </>
  );
}
