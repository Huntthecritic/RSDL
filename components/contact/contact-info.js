'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, Linkedin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email',
    content: 'hello@reelspandigital.ltd',
    link: 'mailto:hello@reelspandigital.ltd',
    color: 'from-[#AE14D9]',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+234 (0) 700 000 0000',
    link: 'tel:+2347000000000',
    color: 'from-[#7216F2]',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'Lagos, Nigeria',
    link: '#',
    color: 'from-[#513DD9]',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Mon - Fri: 9 AM - 6 PM WAT',
    link: '#',
    color: 'from-[#4A96D9]',
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Globe, label: 'Website', href: '#' },
];

const faqItems = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on complexity and scope. Most web development projects take 6-12 weeks from kickoff to launch, while simpler projects may be completed in 2-4 weeks.',
  },
  {
    question: 'Do you offer maintenance and support after launch?',
    answer: 'Absolutely! We provide ongoing maintenance, updates, and support packages to ensure your website remains secure, fast, and up-to-date.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, industry-leading technologies including Next.js, React, TypeScript, Node.js, and various databases. We choose the best tools for each project&apos;s specific needs.',
  },
  {
    question: 'Can you work with an existing website?',
    answer: 'Yes! Whether you need redesigns, performance optimization, or adding new features, we can work with existing projects and improve them.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ContactInfo() {
  const [openFaq, setOpenFaq] = motion.useState(0);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-[#1A1A2E] mb-6">Get in Touch</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.link}
                whileHover={{ scale: 1.02, y: -4 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative border border-[#F2F2F2] rounded-xl p-6 bg-white group-hover:border-[#7216F2]/40 transition-all duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} to-[#1A1A2E]/10 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#513DD9] uppercase tracking-wider mb-1">
                    {item.title}
                  </h3>
                  <p className="text-lg font-bold text-[#1A1A2E] group-hover:text-[#7216F2] transition-colors">
                    {item.content}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <motion.div variants={itemVariants}>
        <h3 className="text-sm font-semibold text-[#513DD9] uppercase tracking-wider mb-4">
          Follow Us
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-lg bg-[#F2F2F2] hover:bg-gradient-to-br hover:from-[#AE14D9] hover:to-[#7216F2] flex items-center justify-center transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 text-[#513DD9] group-hover:text-white transition-colors" />
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-[#1A1A2E] mb-6">Frequently Asked Questions</h3>
        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="border border-[#F2F2F2] rounded-lg overflow-hidden bg-white"
            >
              <motion.button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F2F2F2]/50 transition-colors duration-300"
              >
                <span className="font-semibold text-[#1A1A2E]">{item.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5 text-[#7216F2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
              </motion.button>
              <motion.div
                animate={{ height: openFaq === index ? 'auto' : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-[#F2F2F2] bg-white/50 text-[#513DD9] leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
