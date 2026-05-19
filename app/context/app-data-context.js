'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const AppDataContext = createContext();

const initialBlogPosts = [
  {
    id: 1,
    title: 'The Future of Web Performance: What Every Developer Should Know',
    excerpt: 'Explore the latest techniques and best practices for optimizing web performance in 2024. Learn how to measure, analyze, and improve your site speed.',
    content: 'Web performance is critical in today&apos;s digital landscape. With users expecting instant load times and smooth interactions, developers must prioritize performance optimization. From lazy loading to code splitting, there are countless techniques to improve your site&apos;s speed and user experience. In this comprehensive guide, we&apos;ll explore the latest best practices, tools, and strategies for measuring and improving web performance metrics like LCP, FID, and CLS. Learn how to identify bottlenecks, optimize images, leverage caching, and implement progressive enhancement techniques.',
    author: 'Sarah Chen',
    date: '2024-05-08',
    category: 'Performance',
    readTime: '8 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 2,
    title: 'AI Integration: Building Smarter Web Applications',
    excerpt: 'Discover how to integrate artificial intelligence into your web applications. From chatbots to predictive analytics, unlock new possibilities.',
    content: 'Artificial Intelligence is revolutionizing how we build web applications. Whether you&apos;re implementing AI-powered chatbots, recommendation engines, or predictive analytics, the possibilities are endless. This article covers practical approaches to integrating AI into your applications using popular APIs and frameworks. Learn about natural language processing, machine learning models, and how to build intelligent features that enhance user experience and engagement.',
    author: 'Michael Rodriguez',
    date: '2024-05-01',
    category: 'AI & Automation',
    readTime: '10 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
  {
    id: 3,
    title: 'Responsive Design Mastery: Mobile-First Strategies',
    excerpt: 'Learn advanced responsive design techniques that ensure your websites look perfect on every device. Master CSS Grid, Flexbox, and modern layouts.',
    content: 'Responsive design is no longer optional—it&apos;s essential. With the majority of web traffic coming from mobile devices, designing mobile-first is the smart approach. This guide covers advanced responsive design patterns, from flexible grids to fluid typography. Explore CSS Grid and Flexbox in depth, learn about viewport considerations, and discover modern techniques for creating layouts that adapt beautifully to any screen size.',
    author: 'Emily Watson',
    date: '2024-04-24',
    category: 'Design',
    readTime: '6 min read',
    image: '/placeholder.svg?height=400&width=600',
  },
];

const initialProjects = [
  {
    id: 1,
    name: 'E-Commerce Platform Redesign',
    description: 'Complete platform redesign with streamlined checkout',
    client: 'TechRetail Co.',
    status: 'Completed',
    startDate: '2024-01-15',
    endDate: '2024-04-20',
    budget: 25000,
    spent: 24500,
  },
  {
    id: 2,
    name: 'SaaS MVP Development',
    description: 'Agile development with modular architecture',
    client: 'CloudSync Startup',
    status: 'In Progress',
    startDate: '2024-03-01',
    endDate: '2024-07-15',
    budget: 35000,
    spent: 18000,
  },
];

const initialLeads = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1-234-567-8900',
    company: 'TechCorp Inc',
    service: 'Web Development',
    status: 'New',
    date: '2024-05-15',
    notes: 'Interested in e-commerce solution',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '+1-987-654-3210',
    company: 'StartupXYZ',
    service: 'AI Integration',
    status: 'Contacted',
    date: '2024-05-14',
    notes: 'Follow up next week',
  },
];

export function AppDataProvider({ children }) {
  const [blogPosts, setBlogPosts] = useState(initialBlogPosts);
  const [projects, setProjects] = useState(initialProjects);
  const [leads, setLeads] = useState(initialLeads);

  // Blog operations
  const addBlogPost = (post) => {
    const newPost = {
      ...post,
      id: Math.max(...blogPosts.map(p => p.id), 0) + 1,
      date: new Date().toISOString().split('T')[0],
      image: post.image || '/placeholder.svg?height=400&width=600',
    };
    setBlogPosts([newPost, ...blogPosts]);
    return newPost;
  };

  const updateBlogPost = (id, updates) => {
    setBlogPosts(blogPosts.map(post => post.id === id ? { ...post, ...updates } : post));
  };

  const deleteBlogPost = (id) => {
    setBlogPosts(blogPosts.filter(post => post.id !== id));
  };

  const getBlogPostById = (id) => {
    return blogPosts.find(post => post.id === parseInt(id));
  };

  // Project operations
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: Math.max(...projects.map(p => p.id), 0) + 1,
      startDate: project.startDate || new Date().toISOString().split('T')[0],
      status: project.status || 'Planning',
      spent: project.spent || 0,
    };
    setProjects([newProject, ...projects]);
    return newProject;
  };

  const updateProject = (id, updates) => {
    setProjects(projects.map(project => project.id === id ? { ...project, ...updates } : project));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  const getProjectById = (id) => {
    return projects.find(project => project.id === parseInt(id));
  };

  // Lead operations
  const addLead = (lead) => {
    const newLead = {
      ...lead,
      id: Math.max(...leads.map(l => l.id), 0) + 1,
      status: lead.status || 'New',
      date: lead.date || new Date().toISOString().split('T')[0],
      notes: lead.notes || '',
    };
    setLeads([newLead, ...leads]);
    return newLead;
  };

  const updateLead = (id, updates) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, ...updates } : lead));
  };

  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const getLeadById = (id) => {
    return leads.find(lead => lead.id === parseInt(id));
  };

  return (
    <AppDataContext.Provider value={{
      blogPosts,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      getBlogPostById,
      projects,
      addProject,
      updateProject,
      deleteProject,
      getProjectById,
      leads,
      addLead,
      updateLead,
      deleteLead,
      getLeadById,
    }}>
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used within AppDataProvider');
  }
  return context;
}
