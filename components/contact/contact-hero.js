'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

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

export function ContactHero() {
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
        className="max-w-3xl mx-auto text-center w-full"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/8 border border-[#7216F2]/25 mb-6 backdrop-blur-sm">
            <Mail className="w-3 h-3 text-[#7216F2]" />
            <span className="text-xs font-semibold text-[#7216F2]">Let&apos;s Connect</span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-[#1A1A2E] mb-4">
            Let&apos;s Build Something<br />
            <span className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] bg-clip-text text-transparent">
              Extraordinary Together
            </span>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#513DD9] mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Have a question or ready to start your next project? We&apos;re here to help. Reach out and let&apos;s discuss how we can transform your vision into reality.
        </motion.p>

        {/* Quick contact info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8 pt-8 border-t border-[#F2F2F2]"
        >
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-[#513DD9] font-semibold mb-1">Email</p>
            <a href="mailto:hello@reelspandigital.ltd" className="text-lg font-bold text-[#1A1A2E] hover:text-[#7216F2] transition-colors">
              hello@reelspandigital.ltd
            </a>
          </div>
          <div className="hidden sm:block w-px h-8 bg-[#F2F2F2]" />
          <div className="text-center">
            <p className="text-xs uppercase tracking-wider text-[#513DD9] font-semibold mb-1">Response Time</p>
            <p className="text-lg font-bold text-[#1A1A2E]">Within 24 Hours</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
