'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-slate-950 text-white min-h-screen flex items-center justify-center px-6">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-md w-full text-center">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            404
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-slate-400 text-lg">
            Sorry, the page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 h-1 w-16 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"
        />

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
            >
              Go Home
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-3 bg-slate-900 hover:bg-slate-800 rounded-lg font-semibold transition-all border border-slate-800"
            >
              Contact Support
            </motion.button>
          </Link>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <p className="text-slate-400 text-sm mb-4">You might find these helpful:</p>
          <div className="space-y-2">
            <Link href="/services">
              <motion.a
                whileHover={{ x: 4 }}
                className="block text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                → Explore Our Services
              </motion.a>
            </Link>
            <Link href="/blog">
              <motion.a
                whileHover={{ x: 4 }}
                className="block text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                → Read Our Blog
              </motion.a>
            </Link>
            <Link href="/case-studies">
              <motion.a
                whileHover={{ x: 4 }}
                className="block text-purple-400 hover:text-purple-300 transition-colors text-sm"
              >
                → View Case Studies
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
