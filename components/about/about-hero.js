'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export function AboutHero() {
  return (
    <section className="relative py-32 flex items-center justify-center overflow-hidden bg-white pt-40 pb-16 px-6">
      {/* Subtle gradient background elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#AE14D9]/8 to-[#7216F2]/5 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, 20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-72 h-72 bg-gradient-to-tr from-[#7216F2]/6 to-[#4A96D9]/4 rounded-full blur-3xl -z-10"
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center w-full"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/8 border border-[#7216F2]/25 mb-6 backdrop-blur-sm">
            <Zap className="w-3 h-3 text-[#7216F2]" />
            <span className="text-xs font-semibold text-[#7216F2]">Our Story</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.2] text-[#1A1A2E] mb-4">
            We Engineer Performance-First<br />
            <span className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] bg-clip-text text-transparent">
              Digital Ecosystems
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#513DD9] mb-10 max-w-3xl mx-auto leading-relaxed font-light"
        >
          From a deep obsession with clean code and creative engineering, we&apos;ve become a full-service technology partner for brands across East Africa and beyond. We don&apos;t decorate templates—we build fast, secure, and intelligent digital solutions that run your operations and grow your revenue.
        </motion.p>

        {/* Core philosophy highlight */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-[#AE14D9]/5 to-[#7216F2]/5 border border-[#7216F2]/20 rounded-xl p-8 mb-12 backdrop-blur-sm"
        >
          <p className="text-[#1A1A2E] font-semibold text-lg mb-2">Our Foundation</p>
          <p className="text-[#513DD9] leading-relaxed font-light">
            Software engineering meets creative excellence. Every pixel is optimized for speed, every integration runs reliably, and every solution is built to scale. We chase 98+ Lighthouse scores because a one-second delay costs conversions.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 justify-center items-center flex-wrap"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
          <motion.a
            href="#what-we-do"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-[#7216F2] text-[#7216F2] rounded-lg font-semibold text-sm hover:bg-[#7216F2]/5 transition-all duration-300"
          >
            Learn More
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-xs text-[#7216F2] font-medium mb-1 uppercase tracking-wider opacity-70">Scroll</span>
          <svg className="w-5 h-5 text-[#7216F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
