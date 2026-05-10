'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 px-6 bg-gradient-to-r from-[#AE14D9] via-[#7216F2] to-[#513DD9] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center">
        {/* Main text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something Exceptional
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with our team today and let&apos;s create something remarkable together.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Button
            size="lg"
            className="bg-white text-[#7216F2] hover:bg-[#F2F2F2] font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
          >
            Schedule a Consultation
          </Button>
        </motion.div>

        {/* Contact info hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/70 mt-12 text-sm"
        >
          Questions? Reach out to us at <a href="mailto:hello@reelspan.com" className="text-white font-semibold hover:underline">hello@reelspan.com</a> or call us today
        </motion.p>
      </div>
    </section>
  );
}