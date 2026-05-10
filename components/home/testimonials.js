'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: 'REELspan transformed our entire digital ecosystem. Their innovation and strategic thinking delivered a 300% ROI within the first year. Outstanding!',
    author: 'Sarah Johnson',
    title: 'CEO, TechVenture Inc.',
    rating: 5,
    company: 'TechVenture Inc.',
    image: '👩‍💼'
  },
  {
    quote: 'Delivered a world-class platform in record time. Their full-stack expertise and proactive approach set them apart from any agency we\'ve worked with.',
    author: 'Michael Chen',
    title: 'Founder, DataFlow Solutions',
    rating: 5,
    company: 'DataFlow Solutions',
    image: '👨‍💼'
  },
  {
    quote: 'From concept to launch, every detail was handled with precision. Our conversion rates increased by 45%. REELspan is a true partner, not just a vendor.',
    author: 'Emily Rodriguez',
    title: 'Product Director, InnovateLabs',
    rating: 5,
    company: 'InnovateLabs',
    image: '👩‍🔬'
  },
  {
    quote: 'Game-changing collaboration. They didn\'t just build what we asked for—they anticipated our needs and delivered a platform that accelerated our growth.',
    author: 'James Mitchell',
    title: 'COO, GrowthScale',
    rating: 5,
    company: 'GrowthScale',
    image: '👨‍✈️'
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
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#AE14D9]/8 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#7216F2]/8 to-transparent rounded-full blur-3xl -z-10" />

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
            <Star className="w-4 h-4 text-[#AE14D9] fill-[#AE14D9]" />
            <span className="text-sm font-bold text-[#7216F2]">Client Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-[#1A1A2E] mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-[#513DD9] max-w-3xl mx-auto font-light tracking-wide">
            Our clients have experienced transformative growth through strategic digital innovation and exceptional execution.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group h-full"
            >
              <Card className="p-8 border border-[#F2F2F2] hover:border-[#7216F2]/60 transition-all duration-500 bg-gradient-to-br from-white to-[#F2F2F2]/30 hover:shadow-2xl h-full flex flex-col relative overflow-hidden">
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                />

                {/* Stars rating */}
                <motion.div
                  className="flex gap-1 mb-6"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.6 }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.2 }}>
                      <Star className="w-5 h-5 fill-[#AE14D9] text-[#AE14D9]" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Quote with enhanced styling */}
                <div className="text-lg text-[#1A1A2E] mb-8 leading-relaxed font-light flex-grow relative">
                  <span className="text-4xl text-[#7216F2]/20 absolute -top-2 -left-2">&ldquo;</span>
                  {testimonial.quote}
                </div>

                {/* Author section with avatar */}
                <motion.div
                  className="border-t border-[#F2F2F2] pt-6 flex items-center gap-4"
                  initial={{ opacity: 0.8 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0.8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl">{testimonial.image}</div>
                  <div className="flex-1">
                    <p className="font-bold text-[#1A1A2E] group-hover:text-[#7216F2] transition-colors">{testimonial.author}</p>
                    <p className="text-sm text-[#513DD9] font-medium">{testimonial.title}</p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-[#F2F2F2]"
        >
          {[
            { number: '150+', label: 'Projects Delivered', icon: '🎯' },
            { number: '98%', label: 'Client Satisfaction', icon: '⭐' },
            { number: '12+', label: 'Years of Excellence', icon: '🏆' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-pointer"
            >
              <div className="text-4xl mb-3 group-hover:scale-125 transition-transform">{stat.icon}</div>
              <p className="text-5xl font-black bg-gradient-to-r from-[#AE14D9] via-[#7216F2] to-[#4A96D9] bg-clip-text text-transparent mb-2">
                {stat.number}
              </p>
              <p className="text-[#513DD9] font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}