'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import React from 'react';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: 'Performance Optimization', href: '#' },
    { label: 'Backend Development', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'Our Process', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Resources: [
    { label: 'Blog & Insights', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Support Center', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#2A2A3E] text-white pt-20 pb-8 px-6 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#AE14D9]/5 to-transparent rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#7216F2]/5 to-transparent rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Brand section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-[#7216F2] to-[#513DD9] rounded-lg" />
              <h3 className="text-2xl font-bold text-white">REElspan</h3>
            </div>
            <p className="text-white/60 leading-relaxed font-light text-sm">
              Building exceptional digital experiences through innovation, strategy, and flawless execution.
            </p>
            {/* Social links inline */}
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.15 }}
                    className="p-2 bg-white/5 hover:bg-white/15 rounded-lg transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 text-white/80" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div key={index} variants={itemVariants}>
              <h4 className="text-xs font-semibold text-white mb-5 uppercase tracking-wider opacity-80">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 3 }}
                      className="text-white/60 hover:text-white/90 transition-colors duration-200 text-sm font-normal flex items-center gap-1.5 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="border-t border-white/5 mb-8 origin-left"
        />

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright and links */}
          <div className="flex flex-col md:flex-row items-center gap-3 text-white/50 text-xs font-normal">
            <p>&copy; 2024 REElspan Digital. All rights reserved.</p>
            <div className="hidden md:block w-0.5 h-0.5 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <div className="hidden md:block w-0.5 h-0.5 rounded-full bg-white/20" />
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
          </div>
 
          {/* Back to top button */}
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
}