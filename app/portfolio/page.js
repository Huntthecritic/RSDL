'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Code2, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://reelspandigital.ltd'

export const metadata = {
  title: 'Portfolio & Case Studies | Reel Span Digital',
  description: 'View our award-winning portfolio of web design, development, and digital transformation projects for startups, SMEs, and enterprises.',
  keywords: 'portfolio, case studies, web design portfolio, development projects, client work',
  openGraph: {
    title: 'Portfolio & Case Studies | Reel Span Digital',
    description: 'Explore our successful web projects and digital solutions.',
    url: `${SITE_URL}/portfolio`,
    type: 'website',
  },
}

const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    description: 'Full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    result: '+250% Revenue Growth',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    title: 'AI Customer Support Bot',
    category: 'AI/Automation',
    description: 'Intelligent chatbot powered by AI that handles customer inquiries 24/7, reducing support costs by 60%.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
    result: '60% Cost Reduction',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    title: 'SaaS Management Dashboard',
    category: 'Web Application',
    description: 'Comprehensive SaaS dashboard with real-time analytics, user management, and advanced reporting features.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['React', 'TypeScript', 'D3.js', 'Firebase'],
    result: '10k+ Daily Users',
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 4,
    title: 'Corporate Website Redesign',
    category: 'Web Design',
    description: 'Modern, responsive corporate website with brand storytelling, SEO optimization, and lead generation forms.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    result: '3x More Leads',
    color: 'from-orange-600 to-red-600',
  },
  {
    id: 5,
    title: 'Performance Optimization Project',
    category: 'Optimization',
    description: 'Optimized legacy website, reducing load time by 75% and improving Core Web Vitals scores significantly.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Web Optimization', 'CDN', 'Image Compression'],
    result: '75% Speed Increase',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    id: 6,
    title: 'Mobile App Backend API',
    category: 'API Development',
    description: 'Scalable REST API serving millions of requests daily with real-time features and advanced security.',
    image: '/placeholder.svg?height=400&width=600',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    result: '99.9% Uptime',
    color: 'from-violet-600 to-purple-600',
  },
];

const categories = ['All', 'E-Commerce', 'Web Application', 'Web Design', 'AI/Automation', 'Optimization', 'API Development'];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === selectedCategory);

  return (
    <main className="w-full bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-[60vh] pt-32 pb-20 px-6 bg-gradient-to-b from-white to-slate-50 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-transparent">
              Our Work & Impact
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful projects across industries. We transform ideas into powerful digital solutions that drive real business results.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="bg-white p-4 rounded-full"
                    >
                      <ArrowUpRight className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="font-bold text-purple-600 text-sm">{project.result}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Let&apos;s Create Something Amazing Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-8"
          >
            Your next success story could be in our portfolio. Let&apos;s discuss your project and see how we can help you achieve your goals.
          </motion.p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:shadow-xl transition-all"
          >
            Start Your Project
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
