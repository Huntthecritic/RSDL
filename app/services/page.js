'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Code2, Zap, Database, Smartphone, Bot, Shield, TrendingUp, Settings } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'

export const metadata = {
  title: 'Web Development & Design Services | Reel Span Digital',
  description: 'Explore our comprehensive web development services: custom websites, e-commerce, AI chatbots, API integrations, performance optimization, and more.',
  keywords: 'web development services, web design, e-commerce development, API integration, AI chatbots, web optimization',
  openGraph: {
    title: 'Web Development & Design Services | Reel Span Digital',
    description: 'Award-winning services for web development, design, and digital transformation.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
}

const services = [
  {
    icon: Code2,
    title: 'Custom Websites',
    description: 'Stunning, high-performance websites built with modern technologies. Fully responsive, SEO-optimized, and tailored to your brand.',
    features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Mobile-First'],
  },
  {
    icon: Smartphone,
    title: 'Web Applications',
    description: 'Scalable web applications built with React, Next.js, and modern frameworks. From concept to production deployment.',
    features: ['Real-Time Features', 'User Authentication', 'Data Management', 'Cloud Deployment'],
  },
  {
    icon: Bot,
    title: 'AI Chatbots & Automation',
    description: 'Intelligent chatbots powered by AI and machine learning. Automate customer support and enhance user engagement.',
    features: ['Natural Language Processing', '24/7 Support', 'Custom Training', 'Multi-Language'],
  },
  {
    icon: Database,
    title: 'E-Commerce Solutions',
    description: 'Full-featured e-commerce platforms with secure payment processing, inventory management, and analytics.',
    features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics Dashboard'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Boost your website speed and user experience. Core Web Vitals optimization, image compression, and caching strategies.',
    features: ['Speed Testing', 'Code Splitting', 'Image Optimization', 'CDN Integration'],
  },
  {
    icon: Shield,
    title: 'API Development & Integration',
    description: 'Build and integrate robust APIs. RESTful APIs, GraphQL, third-party integrations, and webhooks.',
    features: ['API Design', 'Security', 'Documentation', 'Testing & Monitoring'],
  },
  {
    icon: TrendingUp,
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, technology selection, and digital transformation strategies.',
    features: ['Architecture Design', 'Tech Stack Selection', 'Best Practices', 'Scalability Planning'],
  },
  {
    icon: Settings,
    title: 'Maintenance & Support',
    description: 'Ongoing support, updates, monitoring, and maintenance to keep your digital assets running smoothly.',
    features: ['24/7 Monitoring', 'Bug Fixes', 'Updates', 'Performance Reports'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent">
              Comprehensive Web Solutions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end digital services designed to transform your business. From custom development to AI integration, we have the expertise you need.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(114, 22, 242, 0.15)' }}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 transition-all duration-300 group"
                >
                  <div className="mb-4 p-3 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg w-fit group-hover:shadow-lg transition-shadow">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Process CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Let&apos;s discuss which services best fit your business needs and create a custom solution tailored to your goals.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Start Your Project
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
