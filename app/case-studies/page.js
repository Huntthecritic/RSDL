'use client';

import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const caseStudies = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign: 150% Revenue Growth',
    client: 'TechRetail Co.',
    industry: 'E-Commerce',
    challenge: 'Outdated checkout process causing 70% cart abandonment rate',
    solution: 'Complete platform redesign with streamlined checkout, AI recommendations, and performance optimization',
    results: {
      revenue: '150% increase',
      conversion: '45% improvement',
      speed: '60% faster load times',
    },
    technologies: ['React', 'Next.js', 'PostgreSQL', 'Stripe', 'AI'],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'SaaS MVP to Market: 2 Months Delivery',
    client: 'CloudSync Startup',
    industry: 'SaaS',
    challenge: 'Need to launch MVP quickly to secure Series A funding',
    solution: 'Agile development with modular architecture, real-time collaboration features, and robust API',
    results: {
      time: '2 months to launch',
      users: '5,000+ beta users',
      funding: 'Series A secured',
    },
    technologies: ['Next.js', 'TypeScript', 'WebSocket', 'AWS', 'Vercel'],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Legacy System Modernization: 40x Faster',
    client: 'Enterprise Financial Corp',
    industry: 'Finance',
    challenge: 'Legacy monolith with performance issues and technical debt',
    solution: 'Microservices architecture, database optimization, and modern tech stack migration',
    results: {
      performance: '40x faster queries',
      uptime: '99.99% availability',
      maintenance: '60% cost reduction',
    },
    technologies: ['Node.js', 'Docker', 'Kubernetes', 'MongoDB', 'Redis'],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 4,
    title: 'Content Platform Launch: 1M Monthly Visitors',
    client: 'MediaHub Publishers',
    industry: 'Publishing',
    challenge: 'Need scalable platform for millions of articles and media',
    solution: 'Headless CMS integration, CDN optimization, and intelligent content recommendation engine',
    results: {
      traffic: '1M+ monthly visitors',
      engagement: '3x higher engagement',
      seo: 'Page 1 Google rankings',
    },
    technologies: ['Next.js', 'Contentful', 'Cloudflare', 'Machine Learning'],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 5,
    title: 'Mobile App Backend: Supporting 500K DAU',
    client: 'FitLife Mobile App',
    industry: 'Health & Fitness',
    challenge: 'Handle exponential growth with serverless, real-time notifications',
    solution: 'Serverless architecture, WebSocket for real-time data, and advanced caching',
    results: {
      users: '500K daily active users',
      latency: '<100ms response time',
      scaling: 'Auto-scales to 10M requests/day',
    },
    technologies: ['Node.js', 'Firebase', 'WebSocket', 'Serverless', 'GraphQL'],
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 6,
    title: 'B2B Portal: Enterprise Integration Success',
    client: 'SupplyChain Solutions',
    industry: 'B2B',
    challenge: 'Complex integrations with 50+ enterprise systems',
    solution: 'Custom API layer, OAuth2 security, and advanced role-based access control',
    results: {
      integrations: '50+ systems connected',
      security: 'SOC 2 Type II compliant',
      adoption: '95% client adoption rate',
    },
    technologies: ['React', 'Express.js', 'PostgreSQL', 'OAuth2', 'GraphQL'],
    image: '/placeholder.svg?height=400&width=600',
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

export default function CaseStudiesPage() {
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
              Success Stories
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See how we've helped companies achieve remarkable results through strategic digital transformation and innovative solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:auto-cols-max' : ''}`}
            >
              {/* Image - alternate position */}
              {index % 2 === 0 ? (
                <div className="order-1">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full rounded-xl"
                  />
                </div>
              ) : null}

              {/* Content */}
              <div className={index % 2 === 1 ? 'order-1' : 'order-2'}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    {study.industry}
                  </span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-400">{study.client}</span>
                </div>

                <h2 className="text-3xl font-bold mb-4">{study.title}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2 uppercase">Challenge</h3>
                    <p className="text-slate-400">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-300 mb-2 uppercase">Solution</h3>
                    <p className="text-slate-400">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="bg-slate-900 rounded-lg p-6 mb-6 border border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <h3 className="font-semibold text-white">Results Achieved</h3>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center">
                        <span className="text-slate-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-purple-400 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-300 mb-3 uppercase">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link href={`/case-studies/${study.id}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>

              {/* Image - alternate position */}
              {index % 2 === 1 ? (
                <div className="order-2">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full rounded-xl"
                  />
                </div>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
