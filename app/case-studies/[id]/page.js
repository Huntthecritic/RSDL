'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const caseStudiesDetail = {
  1: {
    title: 'E-Commerce Platform Redesign: 150% Revenue Growth',
    subtitle: 'Complete platform overhaul driving exceptional business results',
    client: 'TechRetail Co.',
    industry: 'E-Commerce',
    duration: '6 months',
    team: 'Full-stack developers, UX designers, Performance engineers',
    image: '/placeholder.svg?height=600&width=1200',
    
    overview: `TechRetail Co. was experiencing significant revenue loss due to poor user experience on their e-commerce platform. With a 70% cart abandonment rate and slow checkout process, they needed immediate intervention. We partnered with them to completely redesign and modernize their platform, resulting in exceptional growth.`,

    challenge: `
The original platform was built on legacy technology and suffered from:
- 70% cart abandonment rate at checkout
- Page load times exceeding 5 seconds
- Poor mobile experience affecting 40% of traffic
- Limited product recommendations
- Lack of security features causing customer hesitation
- Inability to scale during peak seasons
`,

    solution: `
We implemented a comprehensive solution:
1. **Complete Platform Redesign** - Modern, mobile-first interface with intuitive navigation
2. **Streamlined Checkout** - One-page checkout with multiple payment options and guest checkout
3. **AI-Powered Recommendations** - Machine learning engine suggesting products to increase AOV
4. **Performance Optimization** - Reduced load times from 5s to 2s through advanced caching and CDN
5. **Enhanced Security** - PCI-DSS compliance and SSL/TLS encryption
6. **Scalable Infrastructure** - Auto-scaling architecture handling 10x traffic spikes
`,

    results: {
      revenue: { value: '+150%', description: 'Revenue growth YoY' },
      conversion: { value: '+45%', description: 'Conversion rate improvement' },
      speed: { value: '60% faster', description: 'Page load time reduction' },
      cart: { value: '-30%', description: 'Cart abandonment reduction' },
      aov: { value: '+35%', description: 'Average order value increase' },
      mobile: { value: '+55%', description: 'Mobile conversion improvement' },
    },

    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe', 'AWS', 'TensorFlow'],

    process: [
      {
        phase: 'Discovery & Analysis',
        duration: 'Weeks 1-2',
        details: 'Analyzed user behavior, identified bottlenecks, and gathered requirements through stakeholder interviews and user research.',
      },
      {
        phase: 'Design & Planning',
        duration: 'Weeks 3-4',
        details: 'Created wireframes, high-fidelity mockups, and prototypes. Validated designs with user testing and stakeholder feedback.',
      },
      {
        phase: 'Development',
        duration: 'Weeks 5-16',
        details: 'Built new platform with modular architecture, comprehensive testing, and continuous integration/deployment.',
      },
      {
        phase: 'Optimization & Migration',
        duration: 'Weeks 17-22',
        details: 'Performance tuning, security hardening, data migration, and extensive QA testing.',
      },
      {
        phase: 'Launch & Monitoring',
        duration: 'Week 23-26',
        details: 'Blue-green deployment, 24/7 monitoring, and rapid iteration based on user feedback.',
      },
    ],

    outcomes: [
      'Increased revenue by $2.1M in first year',
      'Grew customer base by 120% through improved experience',
      'Reduced customer support tickets by 40% with better UX',
      'Achieved 99.9% uptime with auto-scaling infrastructure',
      'Mobile users now represent 55% of revenue (up from 20%)',
    ],

    quote: {
      text: 'This partnership transformed our business. The team understood our goals and delivered beyond expectations. The platform is now our competitive advantage.',
      author: 'Jennifer Moore',
      role: 'CEO, TechRetail Co.',
    },
  },
};

export default function CaseStudyDetailPage() {
  const params = useParams();
  const study = caseStudiesDetail[params.id];

  if (!study) {
    return (
      <main className="bg-slate-950 text-white pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link href="/case-studies">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </motion.button>
          </Link>
        </div>
      </main>
    );
  }

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
          className="mb-8"
        >
          <Link href="/case-studies">
            <motion.button
              whileHover={{ x: -4 }}
              className="flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Case Studies
            </motion.button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl font-bold mb-4">{study.title}</h1>
          <p className="text-xl text-slate-400 mb-6">{study.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-900 rounded-lg border border-slate-800">
            <div>
              <p className="text-slate-500 text-sm">Client</p>
              <p className="font-semibold">{study.client}</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Industry</p>
              <p className="font-semibold">{study.industry}</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Duration</p>
              <p className="font-semibold">{study.duration}</p>
            </div>
            <div>
              <p className="text-slate-500 text-sm">Team Size</p>
              <p className="font-semibold">8 specialists</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 rounded-xl overflow-hidden"
        >
          <img src={study.image} alt={study.title} className="w-full h-auto" />
        </motion.div>

        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Overview</h2>
          <p className="text-slate-300 text-lg leading-relaxed">{study.overview}</p>
        </motion.section>

        {/* Challenge */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <div className="bg-slate-900 rounded-lg p-8 border border-slate-800 space-y-3">
            {study.challenge.split('\n').filter(Boolean).map((line, idx) => (
              <p key={idx} className="text-slate-300">
                {line.replace('- ', '• ')}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Solution */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
          <div className="space-y-4">
            {study.solution.split('\n').filter(Boolean).map((line, idx) => (
              <p key={idx} className="text-slate-300 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(study.results).map(([key, result]) => (
              <div key={key} className="bg-slate-900 rounded-lg p-6 border border-slate-800">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-purple-400" />
                  <p className="text-sm text-slate-400">{result.description}</p>
                </div>
                <p className="text-3xl font-bold text-purple-400">{result.value}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Process Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Development Process</h2>
          <div className="space-y-6">
            {study.process.map((phase, idx) => (
              <div key={idx} className="border-l-2 border-purple-500 pl-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{phase.phase}</h3>
                  <span className="text-sm text-slate-400 bg-slate-900 px-3 py-1 rounded">{phase.duration}</span>
                </div>
                <p className="text-slate-400">{phase.details}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Outcomes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Key Outcomes</h2>
          <div className="space-y-4">
            {study.outcomes.map((outcome, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300 text-lg">{outcome}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Technologies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {study.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Quote */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-16 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl p-10 border border-purple-500/20"
        >
          <blockquote className="text-2xl font-semibold text-white mb-4">
            "{study.quote.text}"
          </blockquote>
          <footer>
            <p className="font-semibold text-white">{study.quote.author}</p>
            <p className="text-slate-400">{study.quote.role}</p>
          </footer>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center pt-12 border-t border-slate-800"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results. Schedule a consultation with our team today.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 rounded-lg font-semibold transition-all"
            >
              Get in Touch
            </motion.button>
          </Link>
        </motion.section>
      </div>
    </main>
  );
}
