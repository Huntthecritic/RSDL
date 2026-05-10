'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Award, TrendingUp, Check } from 'lucide-react';

const pillars = [
  {
    icon: Zap,
    title: 'Engineered for Excellence',
    description: 'Every line of code is meticulously crafted following industry best practices and cutting-edge standards.',
    features: ['Clean architecture', 'Best practices', 'Quality assurance'],
    gradient: 'from-[#AE14D9]',
    bgGradient: 'from-[#AE14D9]/10'
  },
  {
    icon: Users,
    title: 'Full-Stack Expertise',
    description: 'End-to-end solutions from frontend brilliance to backend robustness, all delivered by seasoned professionals.',
    features: ['Frontend & Backend', 'Database design', 'DevOps'],
    gradient: 'from-[#7216F2]',
    bgGradient: 'from-[#7216F2]/10'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Trusted by industry leaders and ambitious startups alike. Our portfolio speaks for itself.',
    features: ['Award-winning work', 'Case studies', 'Client testimonials'],
    gradient: 'from-[#513DD9]',
    bgGradient: 'from-[#513DD9]/10'
  },
  {
    icon: TrendingUp,
    title: 'Performance-Driven Results',
    description: 'Lightning-fast load times, exceptional UX, and measurable ROI that directly impacts your bottom line.',
    features: ['SEO optimized', 'Analytics-driven', 'Growth-focused'],
    gradient: 'from-[#4A96D9]',
    bgGradient: 'from-[#4A96D9]/10'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-[#7216F2]/8 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-gradient-to-tl from-[#AE14D9]/8 to-transparent rounded-full blur-3xl -z-10" />

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
            <span className="text-sm font-bold text-[#7216F2]">Why Partner With Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            The RSDL Advantage
          </h2>
          <p className="text-lg md:text-xl text-[#513DD9] max-w-3xl mx-auto font-light tracking-wide">
            We&apos;ve built our reputation on delivering exceptional results through innovation, expertise, and unwavering commitment to your success.
          </p>
        </motion.div>

        {/* Pillars grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${pillar.bgGradient} to-transparent border border-[#F2F2F2] hover:border-[#7216F2]/50 transition-all duration-500 hover:shadow-2xl overflow-hidden`}>
                  {/* Hover effect background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />

                  <div className="flex items-start gap-6 relative z-10">
                    {/* Icon container */}
                    <motion.div
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className={`flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} to-[#1A1A2E]/20 group-hover:shadow-lg transition-all duration-500`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#7216F2] transition-colors duration-300">{pillar.title}</h3>
                      <p className="text-[#513DD9] mb-5 leading-relaxed font-light tracking-wide">{pillar.description}</p>

                      {/* Features list */}
                      <div className="flex flex-col gap-2">
                        {pillar.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 text-[#AE14D9] flex-shrink-0" />
                            <span className="text-sm font-semibold text-[#1A1A2E]">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}