'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Zap, Shield, Database, TrendingUp, ArrowUpRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies and best practices for scalability and performance.',
    gradient: 'from-[#AE14D9]',
    accent: 'text-white'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with user-centric principles to drive engagement and conversions.',
    gradient: 'from-[#7216F2]',
    accent: 'text-white'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast websites and applications that load instantly and perform flawlessly across all devices.',
    gradient: 'from-[#513DD9]',
    accent: 'text-white'
  },
  {
    icon: Database,
    title: 'Backend Development',
    description: 'Robust server-side solutions and databases engineered for reliability, security, and seamless scalability.',
    gradient: 'from-[#4A96D9]',
    accent: 'text-white'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and regulatory compliance to protect your data and user information.',
    gradient: 'from-[#AE14D9]',
    accent: 'text-white'
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align technology with business goals to maximize ROI and growth.',
    gradient: 'from-[#7216F2]',
    accent: 'text-white'
  }
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

export function Services() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
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
            Full-Stack Solutions Designed for Growth
          </h2>
          <p className="text-lg md:text-xl text-[#513DD9] max-w-2xl mx-auto font-light tracking-wide">
            From concept to deployment, we provide comprehensive services that cover every aspect of modern digital success.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                <Card className="h-full p-8 border border-[#F2F2F2] hover:border-[#7216F2]/60 transition-all duration-500 hover:shadow-2xl bg-gradient-to-br from-white to-[#F2F2F2]/40 relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />

                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${service.gradient} to-[#1A1A2E]/10 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all duration-500`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Icon className={`w-8 h-8 ${service.accent}`} />
                    </motion.div>
                    <motion.div
                      className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-r ${service.gradient} to-[#7216F2] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-2 -translate-y-2`}
                    >
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4 group-hover:text-[#7216F2] transition-colors duration-300">{service.title}</h3>
                  <p className="text-[#513DD9] leading-relaxed font-light tracking-wide">{service.description}</p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`h-1 w-0 bg-gradient-to-r ${service.gradient} to-[#7216F2] mt-6 group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}