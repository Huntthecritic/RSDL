'use client';

import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export function MissionVision() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#AE14D9]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#7216F2]/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-[#513DD9] max-w-2xl mx-auto font-light">
            Guided by a commitment to excellence and innovation in everything we build.
          </p>
        </motion.div>

        {/* Mission and Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-white to-[#F2F2F2]/40 border border-[#F2F2F2] hover:border-[#7216F2]/60 rounded-2xl p-10 transition-all duration-500 hover:shadow-2xl relative overflow-hidden h-full">
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />

              <div className="flex items-start gap-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#7216F2] to-[#513DD9] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Target className="w-10 h-10 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#1A1A2E] mb-6 group-hover:text-[#7216F2] transition-colors duration-300">
                    Our Mission
                  </h3>
                  <p className="text-[#513DD9] leading-relaxed font-light text-lg">
                    To empower businesses of all sizes with custom digital tools that elevate their online presence, streamline operations, and deliver measurable growth—engineered with transparency and a future-ready mindset.
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-[#7216F2] to-[#4A96D9] mt-8 group-hover:w-full transition-all duration-500 rounded-full"
              />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="bg-gradient-to-br from-white to-[#F2F2F2]/40 border border-[#F2F2F2] hover:border-[#AE14D9]/60 rounded-2xl p-10 transition-all duration-500 hover:shadow-2xl relative overflow-hidden h-full">
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
              />

              <div className="flex items-start gap-6">
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-[#AE14D9] to-[#7216F2] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-all duration-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Eye className="w-10 h-10 text-white" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-[#1A1A2E] mb-6 group-hover:text-[#AE14D9] transition-colors duration-300">
                    Our Vision
                  </h3>
                  <p className="text-[#513DD9] leading-relaxed font-light text-lg">
                    To become the trusted digital engineering partner for innovators across East Africa and globally, known for turning complex technical challenges into simple, elegant, and impactful digital experiences that run flawlessly.
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="h-1 w-0 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] mt-8 group-hover:w-full transition-all duration-500 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
