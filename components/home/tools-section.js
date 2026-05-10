'use client';

import { motion } from 'framer-motion';
import { Lock, Zap, BarChart3, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const tools = [
  {
    icon: Lock,
    title: 'Password Generator',
    description: 'Create strong, secure passwords instantly. Customize length and character types for maximum security.',
    gradient: 'from-[#AE14D9]',
    accentBg: 'from-[#AE14D9]/10',
    features: ['Instant generation', 'Copy to clipboard', 'Customizable strength']
  },
  {
    icon: Zap,
    title: 'Website Checker',
    description: 'Analyze your website performance, SEO health, and security vulnerabilities in seconds.',
    gradient: 'from-[#7216F2]',
    accentBg: 'from-[#7216F2]/10',
    features: ['Speed analysis', 'SEO audit', 'SSL check']
  },
  {
    icon: BarChart3,
    title: 'Health Audit',
    description: "Get comprehensive insights into your website's overall health, accessibility, and best practices.",
    gradient: 'from-[#513DD9]',
    accentBg: 'from-[#513DD9]/10',
    features: ['Accessibility score', 'Best practices', 'Performance metrics']
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

export function ToolsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-[#F2F2F2]/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-gradient-to-br from-[#7216F2]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-gradient-to-tl from-[#AE14D9]/5 to-transparent rounded-full blur-3xl -z-10" />

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
            <span className="text-sm font-bold text-[#7216F2]">Free Tools</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            Essential Web Tools
          </h2>
          <p className="text-lg md:text-xl text-[#513DD9] max-w-3xl mx-auto font-light tracking-wide">
            Powerful, free utilities to optimize your online presence. From security to performance analysis.
          </p>
        </motion.div>

        {/* Tools grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${tool.accentBg} to-transparent border border-[#F2F2F2] hover:border-[#7216F2]/40 transition-all duration-500 hover:shadow-xl overflow-hidden`}>
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 rounded-2xl"
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} to-[#1A1A2E]/20 flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* Title and description */}
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#7216F2] transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-[#513DD9] mb-6 leading-relaxed font-light">
                    {tool.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 mb-6 border-t border-[#F2F2F2] pt-6">
                    {tool.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-[#1A1A2E]"
                        initial={{ opacity: 0.6 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} to-[#1A1A2E]/30`} />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full py-3 px-4 border border-[#7216F2] text-[#7216F2] rounded-lg font-semibold text-sm hover:bg-[#7216F2]/5 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    Try Tool
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-20 text-center"
        >
          <p className="text-[#513DD9] font-light tracking-wide mb-6">
            Need more advanced tools or custom solutions?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            Explore More Tools
            <ExternalLink className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}