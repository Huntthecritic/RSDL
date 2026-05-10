import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'
const BRAND_NAME = 'Reel Span Digital'
const COMPANY_NAME = 'Reel Span Digital Limited'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY_NAME} | Custom Websites, Apps & AI Solutions`,
    template: `%s | ${COMPANY_NAME}`,
  },
  description: 'Award-winning digital agency crafting custom websites, WordPress solutions, e-commerce stores, responsive web apps, AI chatbots, and automation systems. Performance-obsessed, scalable, and built for growth. Transform your vision into exceptional digital experiences.',
  keywords: 'web design, custom website development, WordPress development, e-commerce solutions, web app development, AI chatbots, business automation, digital agency, software development, responsive websites, cloud solutions',
  generator: 'reelspandigital.ltd',
  applicationName: COMPANY_NAME,
  referrer: 'strict-origin-when-cross-origin',
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} | Custom Digital Solutions`,
    description: 'Transform your vision into exceptional digital experiences with award-winning web design, development, and AI solutions.',
    images: [
      {
        url: `${SITE_URL}/og-image-1200x630.png`,
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - Digital Agency`,
        type: 'image/png',
      },
      {
        url: `${SITE_URL}/og-image-800x600.png`,
        width: 800,
        height: 600,
        alt: `${COMPANY_NAME}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Custom Digital Solutions`,
    description: 'Performance-obsessed digital agency. Custom websites, e-commerce, web apps, AI chatbots & automation.',
    creator: '@reelspandigital',
    images: [`${SITE_URL}/twitter-image-1200x675.png`],
  },
  icons: {
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: COMPANY_NAME,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white scroll-smooth">
      <body className="font-sans antialiased bg-white">
        {children}
      </body>
    </html>
  )
}
