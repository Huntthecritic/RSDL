'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A high-performance e-commerce solution with real-time inventory management and seamless checkout experience.',
    image: 'linear-gradient(135deg, #AE14D94D, #7216F24D)',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    result: '340% increase in online sales'
  },
  {
    title: 'SaaS Dashboard',
    description: 'Enterprise-level analytics dashboard with real-time data visualization and advanced reporting capabilities.',
    image: 'linear-gradient(135deg, #7216F24D, #513DD94D)',
    tags: ['Next.js', 'TypeScript', 'D3.js', 'AWS'],
    result: '2.5M API requests handled daily'
  },
  {
    title: 'Mobile App Platform',
    description: 'Cross-platform mobile application with offline capabilities and intelligent sync features for teams.',
    image: 'linear-gradient(135deg, #513DD94D, #4A96D94D)',
    tags: ['React Native', 'Firebase', 'Redux', 'GraphQL'],
    result: '500K+ active users'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
};

export function Portfolio() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#1A1A2E] mb-4">Featured Projects</h2>
          <p className="text-xl text-[#1A1A2E]/70 max-w-2xl mx-auto">
            Showcasing our best work and the impact we&apos;ve delivered for our clients
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group border border-[#F2F2F2] hover:border-[#7216F2] transition-all duration-300 hover:shadow-lg">
                <div 
                  className="h-56 relative overflow-hidden" 
                  style={{ backgroundImage: project.image }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-[#1A1A2E] mb-3">{project.title}</h3>
                  <p className="text-[#1A1A2E]/70 mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="mb-6 pt-4 border-t border-[#F2F2F2]">
                    <p className="text-sm font-semibold text-[#7216F2] mb-2">Key Result</p>
                    <p className="text-[#1A1A2E] font-bold">{project.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 text-xs font-medium text-[#4A96D9] bg-[#4A96D9]/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full text-[#7216F2] hover:text-[#AE14D9] hover:bg-[#F2F2F2] font-semibold"
                  >
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA for full portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#AE14D9] to-[#7216F2] hover:opacity-90 text-white font-semibold"
          >
            View All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}