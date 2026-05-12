'use client';

import { motion } from 'framer-motion';
import { Calendar, User, ArrowLeft, Share2, Clock } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const blogPosts = {
  1: {
    title: 'The Future of Web Performance: What Every Developer Should Know',
    author: 'Sarah Chen',
    date: 'May 8, 2024',
    category: 'Performance',
    readTime: '8 min read',
    image: '/placeholder.svg?height=600&width=1200',
    content: `
Web performance has become a critical factor in user experience and search engine rankings. In this comprehensive guide, we'll explore the latest techniques and best practices for optimizing your web applications.

## Understanding Core Web Vitals

Google's Core Web Vitals are three key metrics that measure the quality of user experience on your website:

- **Largest Contentful Paint (LCP)**: Measures loading performance
- **First Input Delay (FID)**: Measures interactivity
- **Cumulative Layout Shift (CLS)**: Measures visual stability

These metrics directly impact your SEO rankings and user satisfaction. A 1-second delay in page load can result in a 7% decrease in conversions.

## Performance Optimization Strategies

### 1. Image Optimization
Images typically account for more than 50% of a website's bandwidth. Implement responsive images, use modern formats like WebP, and leverage lazy loading to dramatically improve performance.

### 2. Code Splitting and Lazy Loading
Break your JavaScript into smaller chunks and load them only when needed. This significantly reduces initial bundle size and improves Time to Interactive (TTI).

### 3. Caching Strategies
Implement effective caching at multiple levels: browser caching, CDN caching, and server-side caching. A well-designed caching strategy can reduce server load by 80%.

### 4. Database Optimization
Optimize your queries, use proper indexing, and implement query result caching. Monitor slow queries and refactor them regularly.

## Tools for Measurement

Use tools like Google Lighthouse, WebPageTest, and Chrome DevTools to measure and monitor performance:

- **Lighthouse**: Automated performance audits built into Chrome DevTools
- **Web Vitals**: Monitor real user metrics with the web-vitals library
- **Chrome DevTools**: In-depth profiling and debugging capabilities

## Conclusion

Web performance is not a one-time optimization but an ongoing process. By implementing these strategies and continuously monitoring your metrics, you can deliver faster, better experiences that keep users engaged and satisfied.

Remember: every millisecond counts. Start measuring today and see the impact on your business metrics.
    `,
    relatedPosts: [2, 4],
  },
  2: {
    title: 'AI Integration: Building Smarter Web Applications',
    author: 'Michael Rodriguez',
    date: 'May 1, 2024',
    category: 'AI & Automation',
    readTime: '10 min read',
    image: '/placeholder.svg?height=600&width=1200',
    content: `
Artificial Intelligence is transforming how we build web applications. From intelligent chatbots to predictive analytics, AI opens up new possibilities for creating smarter, more responsive user experiences.

## AI Capabilities for Web Developers

### Natural Language Processing
Build chatbots that understand context and provide meaningful responses. Implement sentiment analysis to better understand user needs and feedback.

### Predictive Analytics
Use machine learning models to predict user behavior, recommend products, and prevent churn. These insights can significantly improve business outcomes.

### Computer Vision
Add image recognition, object detection, and facial recognition to your applications. Enable new use cases like automated content moderation and accessibility features.

## Getting Started with AI

You don't need a PhD in machine learning to integrate AI. Services like OpenAI, Google Cloud AI, and AWS offer easy-to-use APIs that abstract away the complexity.

## Real-World Applications

Learn how leading companies are using AI to enhance their platforms and create competitive advantages. From personalized recommendations to intelligent customer support.

## Challenges and Considerations

Understand the ethical implications, privacy concerns, and technical challenges of implementing AI in your applications.
    `,
    relatedPosts: [1, 5],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const post = blogPosts[params.id];

  if (!post) {
    return (
      <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.relatedPosts.map(id => blogPosts[id]).filter(Boolean);

  return (
    <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-sm text-slate-500">•</span>
            <span className="text-sm text-slate-400">{post.readTime}</span>
          </div>

          <h1 className="text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center text-slate-400 border-t border-b border-slate-800 py-4">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-slate-500" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-slate-500" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-slate-500" />
              <span>{post.readTime}</span>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="ml-auto p-2 bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12 rounded-xl overflow-hidden"
        >
          <img src={post.image} alt={post.title} className="w-full h-auto" />
        </motion.div>

        {/* Content */}
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
        >
          <div className="text-slate-300 leading-relaxed space-y-6">
            {post.content.split('\n\n').map((paragraph, idx) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold text-white mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('-')) {
                return (
                  <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i}>{item.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={idx}>{paragraph}</p>;
            })}
          </div>
        </motion.article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 pt-16 border-t border-slate-800"
          >
            <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.title} href={`/blog/${Object.keys(blogPosts).find(k => blogPosts[k].title === relatedPost.title)}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-slate-900 rounded-lg p-6 border border-slate-800 hover:border-purple-500 transition-all cursor-pointer"
                  >
                    <h3 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">{relatedPost.category}</p>
                    <span className="text-purple-400 font-medium text-sm">Read More →</span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </main>
  );
}
