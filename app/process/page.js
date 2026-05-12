'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { Lightbulb, Pencil, Code2, Zap, CheckCircle, Headphones } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'

export const metadata = {
  title: 'Our Development Process | Reel Span Digital',
  description: 'Learn about our proven 6-step development methodology that ensures quality, transparency, and exceptional results for every project.',
  keywords: 'development process, methodology, web development process, project management',
  openGraph: {
    title: 'Our Development Process | Reel Span Digital',
    description: 'Discover our transparent and proven development process.',
    url: `${SITE_URL}/process`,
    type: 'website',
  },
}

const processSteps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business, goals, target audience, and challenges. Through detailed consultations and research, we develop a comprehensive strategy that aligns with your vision.',
    details: [
      'Business analysis and market research',
      'Target audience profiling',
      'Competitive analysis',
      'Strategy document creation',
      'Timeline and budget planning',
    ],
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design & Planning',
    description: 'Our design team creates wireframes, mockups, and prototypes that bring your vision to life. We focus on user experience, accessibility, and aesthetic appeal.',
    details: [
      'Wireframing and user flow mapping',
      'High-fidelity designs and prototypes',
      'Design system creation',
      'Accessibility compliance',
      'Stakeholder reviews and iterations',
    ],
  },
  {
    number: '03',
    icon: Code2,
    title: 'Development & Building',
    description: 'Our developers build your project using cutting-edge technologies and best practices. We maintain clean code, comprehensive documentation, and regular communication.',
    details: [
      'Frontend development with modern frameworks',
      'Backend API and database development',
      'Integration with third-party services',
      'Code reviews and testing',
      'Progress updates and demos',
    ],
  },
  {
    number: '04',
    icon: Zap,
    title: 'Testing & Optimization',
    description: 'We perform comprehensive testing to ensure quality, performance, and security. Every aspect is tested thoroughly before deployment.',
    details: [
      'Functional and integration testing',
      'Performance optimization',
      'Security audits and fixes',
      'Cross-browser and device testing',
      'Load and stress testing',
    ],
  },
  {
    number: '05',
    icon: CheckCircle,
    title: 'Launch & Deployment',
    description: 'We prepare everything for a smooth launch. From final checks to deployment configuration, we ensure a flawless go-live experience.',
    details: [
      'Final quality assurance',
      'Deployment configuration',
      'DNS and hosting setup',
      'SEO optimization',
      'Launch coordination and monitoring',
    ],
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Support & Maintenance',
    description: 'Our relationship doesn&apos;t end at launch. We provide ongoing support, monitoring, updates, and maintenance to keep your project running smoothly.',
    details: [
      '24/7 monitoring and alerts',
      'Bug fixes and patches',
      'Regular updates and improvements',
      'Performance reporting',
      'Continuous optimization',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProcessPage() {
  return (
    <main className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent">
              Our Proven Process
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A transparent, methodical approach to delivering exceptional digital solutions. We follow a six-step process designed to ensure quality, communication, and results at every stage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-cols-2 lg:direction-rtl' : ''}`}
                >
                  {/* Text Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="mb-6"
                    >
                      <span className="text-6xl font-black bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent opacity-20">
                        {step.number}
                      </span>
                    </motion.div>

                    <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                      </div>

                      <p className="text-slate-700 mb-6 leading-relaxed">{step.description}</p>

                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <div className="relative h-96 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10" />
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 opacity-20"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-16 bg-white/50 backdrop-blur rounded-full">
                          <Icon className="w-24 h-24 text-purple-600" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="h-12 bg-gradient-to-b from-purple-600 to-indigo-600 w-1 mx-auto lg:col-span-2 lg:h-1 lg:w-12 rounded-full"
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Our Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Why This Process Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our proven methodology has delivered exceptional results for hundreds of projects across industries.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Transparent Communication',
                description: 'We keep you informed at every step with regular updates, demos, and reviews.',
              },
              {
                title: 'Quality Assurance',
                description: 'Rigorous testing ensures your project meets the highest standards before launch.',
              },
              {
                title: 'Flexibility & Adaptation',
                description: 'We adjust our approach based on your feedback and changing requirements.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-purple-300 transition-all"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Let&apos;s begin the journey together with a consultation to understand your needs and goals.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Schedule a Consultation
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
