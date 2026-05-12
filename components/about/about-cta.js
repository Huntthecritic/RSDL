'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function AboutCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#AE14D9]/8 to-[#7216F2]/5 rounded-full blur-3xl -z-10"
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
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#7216F2]/6 to-transparent rounded-full blur-3xl -z-10"
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

      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          {/* Main heading */}
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6"
          >
            Ready to Span the Gap?
          </motion.h2>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-[#513DD9] mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Your digital presence shouldn&apos;t force you to choose between beauty and function. We deliver both—and the engineering to back it up.
          </motion.p>

          {/* Contact Options */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {/* Phone */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl border border-[#F2F2F2] hover:border-[#7216F2]/60 bg-white hover:bg-gradient-to-br hover:from-[#AE14D9]/5 hover:to-[#7216F2]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#7216F2] to-[#513DD9] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#513DD9] uppercase font-semibold tracking-wider mb-2">Phone</p>
              <a href="tel:+256762710971" className="text-lg font-bold text-[#1A1A2E] hover:text-[#7216F2] transition-colors">
                +256 762-710-971
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl border border-[#F2F2F2] hover:border-[#AE14D9]/60 bg-white hover:bg-gradient-to-br hover:from-[#AE14D9]/5 hover:to-[#7216F2]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#AE14D9] to-[#7216F2] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#513DD9] uppercase font-semibold tracking-wider mb-2">Email</p>
              <a href="mailto:info@reelspandigital.ltd" className="text-lg font-bold text-[#1A1A2E] hover:text-[#7216F2] transition-colors break-all">
                info@reelspandigital.ltd
              </a>
            </motion.div>

            {/* Website */}
            <motion.div
              whileHover={{ y: -6 }}
              className="p-6 rounded-xl border border-[#F2F2F2] hover:border-[#513DD9]/60 bg-white hover:bg-gradient-to-br hover:from-[#AE14D9]/5 hover:to-[#7216F2]/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#513DD9] to-[#4A96D9] rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-[#513DD9] uppercase font-semibold tracking-wider mb-2">Website</p>
              <a href="https://www.reelspandigital.ltd" target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#1A1A2E] hover:text-[#7216F2] transition-colors">
                reelspandigital.ltd
              </a>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Start a Conversation
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
