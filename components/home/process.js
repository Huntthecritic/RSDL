'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Pencil, Code, Zap, Headphones } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discover',
    description: 'We dive deep into understanding your business goals, target audience, and market landscape to inform our strategy.'
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design',
    description: 'Creating intuitive wireframes and stunning visual designs that align with your brand and user expectations.'
  },
  {
    number: '03',
    icon: Code,
    title: 'Develop',
    description: 'Building robust, scalable solutions using modern technologies and architectural best practices.'
  },
  {
    number: '04',
    icon: Zap,
    title: 'Optimize',
    description: 'Rigorous testing, performance optimization, and refinement to ensure excellence across all metrics.'
  },
  {
    number: '05',
    icon: Headphones,
    title: 'Support',
    description: 'Ongoing maintenance, updates, and support to keep your digital presence running at peak performance.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Process() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#F2F2F2] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-[#1A1A2E] mb-4">Our Process</h2>
          <p className="text-xl text-[#1A1A2E]/70 max-w-2xl mx-auto">
            A systematic approach to delivering exceptional results, every time
          </p>
        </motion.div>

        {/* Process timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Desktop view with connecting line */}
          <div className="hidden lg:grid grid-cols-5 gap-4 relative">
            {/* Connecting line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#AE14D9]/20 via-[#7216F2]/20 to-transparent -z-10" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="text-center">
                    {/* Icon and number */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto bg-white border-4 border-[#7216F2] rounded-full flex items-center justify-center mb-4 relative z-10 shadow-lg">
                        <Icon className="w-10 h-10 text-[#7216F2]" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-[#AE14D9] to-[#7216F2] rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-semibold text-[#1A1A2E] mb-3">{step.title}</h3>
                    <p className="text-[#1A1A2E]/70 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile view - vertical */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#AE14D9] to-[#7216F2] rounded-full flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-[#7216F2] rounded-full flex items-center justify-center text-[#7216F2] text-sm font-bold">
                          {step.number}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-semibold text-[#1A1A2E] mb-2">{step.title}</h3>
                      <p className="text-[#1A1A2E]/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="ml-8 h-8 border-l-2 border-[#7216F2]/30" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}