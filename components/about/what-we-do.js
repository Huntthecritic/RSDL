'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Shield, Database, TrendingUp, MessageSquare, BarChart3, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Handcrafted Websites',
    description: 'High-performance websites and headless architectures built from the ground up for speed and scalability.',
    gradient: 'from-[#AE14D9]',
  },
  {
    icon: Palette,
    title: 'WordPress & WooCommerce',
    description: 'Custom WordPress and WooCommerce solutions, including rescues and optimizations for maximum performance.',
    gradient: 'from-[#7216F2]',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots & Automation',
    description: 'Intelligent WhatsApp bots and AI chatbots that handle real business logic and customer interactions.',
    gradient: 'from-[#513DD9]',
  },
  {
    icon: Database,
    title: 'API Integrations',
    description: 'Seamless integrations connecting your business systems with Twilio, mobile money, CRMs, and more.',
    gradient: 'from-[#4A96D9]',
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    description: 'Lightning-fast optimization chasing 98+ Lighthouse scores and technical SEO excellence.',
    gradient: 'from-[#AE14D9]',
  },
  {
    icon: TrendingUp,
    title: '24/7 Maintenance',
    description: 'Continuous support, monitoring, and maintenance to keep your digital assets performing flawlessly.',
    gradient: 'from-[#7216F2]',
  },
  {
    icon: BarChart3,
    title: 'Strategic Consulting',
    description: 'Expert guidance on digital strategy, architecture decisions, and technology roadmaps for growth.',
    gradient: 'from-[#513DD9]',
  },
  {
    icon: Shield,
    title: 'Training & Autonomy',
    description: 'Comprehensive team training and documentation for full digital autonomy after project delivery.',
    gradient: 'from-[#4A96D9]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-gradient-to-br from-[#AE14D9]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-[#7216F2]/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/10 border border-[#7216F2]/30 mb-6 backdrop-blur-sm">
            <span className="text-sm font-bold text-[#7216F2]">What We Offer</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            Engineered Solutions for Every Need
          </h2>
          <p className="text-lg text-[#513DD9] max-w-2xl mx-auto font-light">
            From custom development to strategic consulting, we provide comprehensive services that cover every aspect of digital success.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <div className="h-full p-6 border border-[#F2F2F2] hover:border-[#7216F2]/60 rounded-xl transition-all duration-500 hover:shadow-xl bg-gradient-to-br from-white to-[#F2F2F2]/40 relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />

                  {/* Icon container */}
                  <div className="mb-5 relative">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${service.gradient} to-[#1A1A2E]/10 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.div
                      className={`absolute top-0 right-0 w-6 h-6 bg-gradient-to-r ${service.gradient} to-[#7216F2] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2`}
                    >
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1A2E] mb-3 group-hover:text-[#7216F2] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#513DD9] leading-relaxed font-light text-sm">
                    {service.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`h-0.5 w-0 bg-gradient-to-r ${service.gradient} to-[#7216F2] mt-4 group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 bg-gradient-to-r from-[#7216F2]/10 to-[#AE14D9]/10 border border-[#7216F2]/20 rounded-2xl p-10 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-[#1A1A2E] mb-4">
            Engineered, Not Just Designed
          </h3>
          <p className="text-lg text-[#513DD9] leading-relaxed font-light max-w-3xl mx-auto">
            Most agencies start with a template. We start with code and make it powerful. Every pixel is optimized for speed, every integration runs reliably, and every solution is built to scale. Our software engineering foundation means we deliver transparent, technically precise solutions that stand the test of time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
