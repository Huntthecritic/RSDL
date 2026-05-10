'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const words = ['Transform', 'Innovate', 'Elevate', 'Accelerate', 'Scale'];

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

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
        className="max-w-5xl mx-auto text-center w-full"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#AE14D9]/10 to-[#7216F2]/8 border border-[#7216F2]/25 mb-6 backdrop-blur-sm">
            <Zap className="w-3 h-3 text-[#7216F2]" />
            <span className="text-xs font-semibold text-[#7216F2]">Digital Solutions</span>
          </div>
        </motion.div>

        {/* Main heading with dynamic word rotation */}
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            <span className="block text-[#1A1A2E] mb-2">We Build Digital</span>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] bg-clip-text text-transparent font-bold"
              >
                {words[currentWord]}
              </motion.span>
              <span className="text-[#1A1A2E]">Experiences</span>
            </div>
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[#513DD9] mb-10 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Full-stack solutions engineered for growth. Strategic innovation meets cutting-edge technology to transform your vision into high-performing digital products.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-[#7216F2] text-[#7216F2] rounded-lg font-semibold text-sm hover:bg-[#7216F2]/5 transition-all duration-300"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats with interactive animations */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#F2F2F2]"
        >
          {[
            { number: '150+', label: 'Projects Delivered', color: 'from-[#AE14D9]' },
            { number: '98%', label: 'Client Satisfaction', color: 'from-[#7216F2]' },
            { number: '12+', label: 'Years Experience', color: 'from-[#4A96D9]' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="text-center"
            >
              <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} to-[#1A1A2E] bg-clip-text text-transparent`}>
                {stat.number}
              </p>
              <p className="text-[#513DD9] mt-2 font-medium text-xs">{stat.label}</p>
            </motion.div>
          ))}
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
