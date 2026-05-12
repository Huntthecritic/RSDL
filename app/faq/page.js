'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { useState } from 'react';

const faqCategories = {
  General: [
    {
      question: 'What is Reel Span Digital?',
      answer: 'Reel Span Digital is a full-service digital engineering agency specializing in custom web development, AI integration, and performance optimization for startups, SMEs, enterprises, and agencies.',
    },
    {
      question: 'How long has your company been in business?',
      answer: 'We bring years of experience in digital engineering and have successfully delivered 100+ projects across various industries and scales.',
    },
    {
      question: 'Where is your team located?',
      answer: 'Our team operates globally with talent across multiple time zones, allowing us to serve clients worldwide with flexible collaboration models.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We work across diverse industries including e-commerce, SaaS, fintech, healthcare, education, media, and more. Our flexible approach adapts to any industry.',
    },
  ],
  Services: [
    {
      question: 'What services do you offer?',
      answer: 'We offer custom website development, web applications, AI chatbots, API integrations, e-commerce solutions, performance optimization, technical consulting, and maintenance & support.',
    },
    {
      question: 'Do you offer WordPress development?',
      answer: 'Yes, we specialize in WordPress development including custom themes, plugins, migrations, and performance optimization.',
    },
    {
      question: 'Can you integrate AI into my existing application?',
      answer: 'Absolutely. We can integrate AI capabilities like chatbots, predictive analytics, and recommendation engines into existing applications or build new AI-powered solutions.',
    },
    {
      question: 'Do you provide API development services?',
      answer: 'Yes, we design and develop custom APIs using modern technologies like Node.js, Python, and Go with proper documentation and testing.',
    },
    {
      question: 'What about e-commerce solutions?',
      answer: 'We build custom e-commerce platforms or integrate with platforms like Shopify, WooCommerce, or Magento. We focus on user experience, security, and conversion optimization.',
    },
  ],
  Process: [
    {
      question: 'How do you start a project?',
      answer: 'We begin with a discovery phase where we understand your business goals, target users, and technical requirements. This leads to a detailed project plan and timeline.',
    },
    {
      question: 'What is your development methodology?',
      answer: 'We use agile development with regular sprints, continuous integration/deployment, and frequent stakeholder communication to ensure alignment and quality.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope. A simple website might take 6-8 weeks, while complex applications can take 3-6 months or more. We provide accurate estimates after discovery.',
    },
    {
      question: 'Can you provide ongoing support after launch?',
      answer: 'Yes, we offer maintenance, support, and enhancement packages to keep your application secure, updated, and performing optimally.',
    },
    {
      question: 'How do you handle communication?',
      answer: 'We maintain regular communication through scheduled meetings, status reports, and a shared project management platform. You&apos;ll have a dedicated point of contact.',
    },
  ],
  Pricing: [
    {
      question: 'How do you price projects?',
      answer: 'We offer flexible pricing models including project-based, time-and-materials, and fixed-price options. Pricing depends on scope, complexity, and timeline.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we accommodate flexible payment plans for larger projects. Discuss your needs and we&apos;ll create an arrangement that works for you.',
    },
    {
      question: 'What is included in maintenance plans?',
      answer: 'Maintenance plans typically include bug fixes, security updates, minor feature additions, performance monitoring, and technical support.',
    },
    {
      question: 'Are there additional costs after project completion?',
      answer: 'The base project includes delivery and initial deployment. Hosting, ongoing maintenance, and feature additions are separate line items that we quote separately.',
    },
  ],
  Technical: [
    {
      question: 'What technologies do you use?',
      answer: 'We use modern tech stacks including React, Next.js, Node.js, TypeScript, PostgreSQL, MongoDB, AWS, and many other cutting-edge technologies based on project needs.',
    },
    {
      question: 'Do you use AI and machine learning?',
      answer: 'Yes, we integrate AI and ML solutions including chatbots, predictive analytics, computer vision, and NLP to enhance application capabilities.',
    },
    {
      question: 'How do you ensure security?',
      answer: 'We implement industry-standard security practices including SSL/TLS encryption, secure authentication, data protection, regular security audits, and compliance with relevant standards.',
    },
    {
      question: 'Is the code scalable?',
      answer: 'Yes, we architect applications for scalability using microservices, containerization, load balancing, and cloud infrastructure to handle growth.',
    },
    {
      question: 'Do you provide API documentation?',
      answer: 'Yes, we provide comprehensive API documentation including endpoint specifications, authentication, error handling, and code examples.',
    },
  ],
  Support: [
    {
      question: 'What happens if I find a bug after launch?',
      answer: 'Critical bugs are addressed immediately. Non-critical issues are logged and prioritized in the next maintenance cycle or support contract.',
    },
    {
      question: 'How do I request new features?',
      answer: 'You can submit feature requests through your support channel. We&apos;ll evaluate and provide a timeline and quote for implementation.',
    },
    {
      question: 'What is your response time for support requests?',
      answer: 'Response times depend on your support plan. Critical issues typically get attention within 24 hours, while standard requests are handled within 48-72 hours.',
    },
    {
      question: 'Do you offer training for my team?',
      answer: 'Yes, we provide training sessions to help your team understand the application, codebase, and how to maintain it effectively.',
    },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState('General');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const filteredFaqs = faqCategories[selectedCategory]?.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const allFaqsMatching = Object.values(faqCategories)
    .flat()
    .filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const displayFaqs = searchQuery ? allFaqsMatching : filteredFaqs;

  return (
    <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and solutions.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 relative"
        >
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Search FAQs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </motion.div>

        {/* Category Tabs */}
        {!searchQuery && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-wrap gap-3 justify-center"
          >
            {Object.keys(faqCategories).map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {displayFaqs.length > 0 ? (
            displayFaqs.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedQuestion(expandedQuestion === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800 transition-colors"
                >
                  <h3 className="font-semibold text-left text-lg">{item.question}</h3>
                  <motion.div
                    animate={{ rotate: expandedQuestion === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400 flex-shrink-0"
                  >
                    ▼
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expandedQuestion === idx ? 'auto' : 0,
                    opacity: expandedQuestion === idx ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-slate-800 text-slate-300 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-slate-400 text-lg mb-4">
                No questions found matching your search.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-colors"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Still Have Questions */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-16 border-t border-slate-800 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Get in touch with our team.
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg font-semibold transition-all"
            >
              Contact Us
            </motion.button>
          </a>
        </motion.section>
      </div>
    </main>
  );
}
