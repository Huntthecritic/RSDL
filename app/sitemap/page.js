'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const siteMapData = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  company: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Process', href: '/process' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function SitemapPage() {
  return (
    <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Sitemap
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore all pages and resources available on our website.
          </p>
        </motion.div>

        {/* Sitemap Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Main Pages */}
          <motion.section variants={itemVariants} className="bg-slate-900 rounded-lg p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-purple-400">Main</h2>
            <ul className="space-y-3">
              {siteMapData.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      {item.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Company */}
          <motion.section variants={itemVariants} className="bg-slate-900 rounded-lg p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-purple-400">Company</h2>
            <ul className="space-y-3">
              {siteMapData.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      {item.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Resources */}
          <motion.section variants={itemVariants} className="bg-slate-900 rounded-lg p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-purple-400">Resources</h2>
            <ul className="space-y-3">
              {siteMapData.resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      {item.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Legal */}
          <motion.section variants={itemVariants} className="bg-slate-900 rounded-lg p-8 border border-slate-800">
            <h2 className="text-xl font-bold mb-6 text-purple-400">Legal</h2>
            <ul className="space-y-3">
              {siteMapData.legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-2 text-slate-300 hover:text-purple-400 transition-colors"
                    >
                      <ArrowRight className="w-4 h-4 flex-shrink-0" />
                      {item.label}
                    </motion.a>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.section>
        </motion.div>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-slate-800 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Can&apos;t find what you&apos;re looking for?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Get in touch with our team. We&apos;re here to help and answer any questions you might have.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg font-semibold transition-all"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
