'use client';

import { motion } from 'framer-motion';
import { Rocket, Briefcase, Building2, Users } from 'lucide-react';

const partnerTypes = [
  {
    icon: Rocket,
    title: 'Startups',
    description: 'Launching your first brand? We help startups build a strong digital foundation from day one with scalable, modern solutions.',
    gradient: 'from-[#AE14D9]',
  },
  {
    icon: Briefcase,
    title: 'SMEs',
    description: 'Abandoning sluggish templates? We replace slow systems with custom, performance-first solutions that scale with your business.',
    gradient: 'from-[#7216F2]',
  },
  {
    icon: Building2,
    title: 'Enterprises',
    description: 'Need operation-specific tools? We build complex systems and integrations that connect all your business operations seamlessly.',
    gradient: 'from-[#513DD9]',
  },
  {
    icon: Users,
    title: 'Agencies',
    description: 'Looking to white-label our engineering? We partner with agencies to deliver world-class technical solutions under your brand.',
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

export function WhoWePartner() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#AE14D9]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#7216F2]/5 to-transparent rounded-full blur-3xl -z-10" />

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
            <span className="text-sm font-bold text-[#7216F2]">Our Partners</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            Who We Partner With
          </h2>
          <p className="text-lg text-[#513DD9] max-w-2xl mx-auto font-light">
            If you need a digital asset that actually performs, we&apos;re your team.
          </p>
        </motion.div>

        {/* Partner types grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group h-full"
              >
                <div className="h-full p-8 border border-[#F2F2F2] hover:border-[#7216F2]/60 rounded-xl transition-all duration-500 hover:shadow-xl bg-gradient-to-br from-white to-[#F2F2F2]/40 relative overflow-hidden flex flex-col">
                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  />

                  {/* Icon container */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${partner.gradient} to-[#1A1A2E]/10 rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-500`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-3 group-hover:text-[#7216F2] transition-colors duration-300">
                    {partner.title}
                  </h3>
                  <p className="text-[#513DD9] leading-relaxed font-light flex-grow">
                    {partner.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`h-1 w-0 bg-gradient-to-r ${partner.gradient} to-[#7216F2] mt-6 group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partnership promise */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-gradient-to-br from-[#1A1A2E] to-[#2A2A3E] rounded-2xl p-10 md:p-16 text-center border border-[#7216F2]/20 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#AE14D9]/10 to-transparent rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7216F2]/10 to-transparent rounded-full blur-3xl -z-10" />

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your Digital Backbone
          </h3>
          <p className="text-lg text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
            We deliver transparency, technical precision, and continuous support from discovery through training and maintenance. Your success is our success, and we&apos;re committed to making your digital platform a competitive advantage.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex gap-3 justify-center flex-wrap"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Let&apos;s Span the Gap
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
