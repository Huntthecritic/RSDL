'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and startups',
    price: 'Custom',
    period: 'Project-based',
    features: [
      'Up to 5 pages',
      'Basic SEO optimization',
      'Mobile responsive design',
      '1 month of support',
      'SSL certificate',
      'Basic analytics',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing businesses and scaling products',
    price: 'Custom',
    period: 'Project-based',
    features: [
      'Unlimited pages',
      'Advanced SEO optimization',
      'Mobile & desktop optimization',
      '3 months of support',
      'SSL certificate',
      'Advanced analytics & reporting',
      'Content management system',
      'Email integration',
      'API integration',
    ],
    cta: 'Get Started',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large-scale applications and custom needs',
    price: 'Custom',
    period: 'Tailored solution',
    features: [
      'Unlimited everything',
      'Custom architecture',
      'Advanced security features',
      'Dedicated support team',
      '24/7 monitoring',
      'Performance optimization',
      'Custom integrations',
      'Multi-database support',
      'Scalability solutions',
      'Quarterly reviews',
    ],
    cta: 'Schedule Demo',
    highlighted: false,
  },
];

const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and wire transfers. Custom payment arrangements are available for enterprise clients.',
  },
  {
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for projects. Discuss your specific needs with our team and we&apos;ll create a plan that works for you.',
  },
  {
    question: 'What is included in the support period?',
    answer: 'Support includes bug fixes, minor updates, and technical assistance. Major feature additions are billed separately.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Absolutely! As your business grows, you can upgrade to a higher tier. We&apos;ll adjust your investment accordingly.',
  },
  {
    question: 'What about hosting and maintenance?',
    answer: 'Hosting, maintenance, and support are available as add-on services. We can discuss ongoing support packages during your consultation.',
  },
  {
    question: 'Do you offer discounts for long-term contracts?',
    answer: 'Yes, we offer significant discounts for long-term support contracts. Contact us to discuss your requirements.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PricingPage() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Flexible investment models tailored to your project needs. From startups to enterprises, we have the right plan for you.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-purple-500 transform md:scale-105 shadow-2xl'
                  : 'border border-slate-800'
              } bg-slate-900`}
            >
              {/* Featured Badge */}
              {plan.highlighted && (
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-center font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <p className="text-4xl font-bold mb-2">{plan.price}</p>
                  <p className="text-slate-400 text-sm">{plan.period}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Solutions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-12 border border-purple-500/20"
        >
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-slate-300 mb-6">
            Every project is unique. We tailor our approach to match your specific requirements, timeline, and budget. Let&apos;s discuss your vision.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-semibold transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </motion.section>

        {/* What&apos;s Included */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">What&apos;s Always Included</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏗️', title: 'Custom Development', desc: 'Built from scratch for your needs' },
              { icon: '🎨', title: 'Design Services', desc: 'UI/UX design included in all plans' },
              { icon: '⚡', title: 'Performance', desc: 'Optimized for speed and efficiency' },
              { icon: '🔒', title: 'Security', desc: 'Enterprise-grade security features' },
              { icon: '📱', title: 'Responsive Design', desc: 'Mobile, tablet, and desktop' },
              { icon: '🔍', title: 'SEO Optimization', desc: 'Built-in SEO best practices' },
              { icon: '📊', title: 'Analytics', desc: 'Insights into user behavior' },
              { icon: '🚀', title: 'Deployment', desc: 'Handled by our team' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-slate-900 rounded-lg p-6 border border-slate-800 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className="border border-slate-800 rounded-lg overflow-hidden bg-slate-900"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800 transition-colors"
                >
                  <h3 className="font-semibold text-left">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400"
                  >
                    ▼
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedFaq === idx ? 'auto' : 0,
                    opacity: expandedFaq === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-slate-800 text-slate-400">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
