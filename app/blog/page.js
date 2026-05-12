'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Performance: What Every Developer Should Know',
    excerpt: 'Explore the latest techniques and best practices for optimizing web performance in 2024. Learn how to measure, analyze, and improve your site speed.',
    author: 'Sarah Chen',
    date: 'May 8, 2024',
    category: 'Performance',
    readTime: '8 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'AI Integration: Building Smarter Web Applications',
    excerpt: 'Discover how to integrate artificial intelligence into your web applications. From chatbots to predictive analytics, unlock new possibilities.',
    author: 'Michael Rodriguez',
    date: 'May 1, 2024',
    category: 'AI & Automation',
    readTime: '10 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Responsive Design Mastery: Mobile-First Strategies',
    excerpt: 'Learn advanced responsive design techniques that ensure your websites look perfect on every device. Master CSS Grid, Flexbox, and modern layouts.',
    author: 'Emily Watson',
    date: 'April 24, 2024',
    category: 'Design',
    readTime: '6 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 4,
    title: 'Database Optimization: Scaling for Success',
    excerpt: 'Handle millions of users with optimized database queries. Learn indexing, caching strategies, and architectural patterns for scalable applications.',
    author: 'David Kim',
    date: 'April 18, 2024',
    category: 'Backend',
    readTime: '12 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 5,
    title: 'Security Best Practices: Protecting Your Users',
    excerpt: 'Essential security practices every developer should implement. From authentication to data encryption, safeguard your applications and user data.',
    author: 'Jessica Lee',
    date: 'April 10, 2024',
    category: 'Security',
    readTime: '9 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 6,
    title: 'Modern Testing Strategies: Quality Assurance at Scale',
    excerpt: 'Implement comprehensive testing strategies that catch bugs before production. Unit tests, integration tests, and end-to-end testing best practices.',
    author: 'Alex Thompson',
    date: 'April 2, 2024',
    category: 'Testing',
    readTime: '7 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
];

const categories = ['All', 'Performance', 'AI & Automation', 'Design', 'Backend', 'Security', 'Testing'];

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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Engineering Insights
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expert articles on web development, performance optimization, and digital innovation. Learn from industry leaders.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-3 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-purple-500 transition-all duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-t border-slate-800">
                  <div className="flex items-center gap-3 mt-4">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <Link href={`/blog/${post.id}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-slate-400 text-lg mb-4">No articles found matching your search.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </main>
  );
}
