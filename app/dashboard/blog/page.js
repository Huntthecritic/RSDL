'use client';

import React, { useState } from 'react';
import { Plus, Edit2, Trash2, Eye, ArrowRight, Calendar, User } from 'lucide-react';
import { ContentHeader } from '@/components/dashboard/content-header';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AddBlogModal } from '@/components/dashboard/add-blog-modal';
import { useAppData } from '@/app/context/app-data-context';
import { motion } from 'framer-motion';
import Link from 'next/link';

const categories = ['All', 'Performance', 'AI & Automation', 'Design', 'Backend', 'Security', 'Testing'];

const categoryColors = {
  'Performance': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  'AI & Automation': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
  'Design': 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300',
  'Backend': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
  'Security': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
  'Testing': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
};

export default function BlogManagementPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { blogPosts, addBlogPost, updateBlogPost, deleteBlogPost } = useAppData();

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleAddPost = (postData) => {
    if (editingPost) {
      updateBlogPost(editingPost.id, postData);
      setEditingPost(null);
    } else {
      addBlogPost(postData);
    }
    setIsModalOpen(false);
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deleteBlogPost(id);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingPost(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className="w-full">
      <ContentHeader
        title="Blog Management"
        subtitle="Create, edit, and manage blog posts"
        action={
          <Button onClick={() => { setEditingPost(null); setIsModalOpen(true); }}>
            <Plus size={16} className="mr-2" />
            New Post
          </Button>
        }
      />

      {/* Blog Modal */}
      <AddBlogModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddPost}
        existingPost={editingPost}
      />

      {/* Category Filter */}
      <div className="mb-8 p-6 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12 bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800">
          <p className="text-gray-600 dark:text-gray-400 mb-4">No blog posts yet</p>
          <Button onClick={() => { setEditingPost(null); setIsModalOpen(true); }}>
            Create Your First Post
          </Button>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6"
        >
          {filteredPosts.map(post => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={categoryColors[post.category] || categoryColors['Performance']}>
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => handleEdit(post)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    >
                      <Edit2 className="h-4 w-4" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleDeleteClick(post.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>

                <Link href={`/blog/${post.id}`}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors flex items-center gap-2"
                  >
                    View Post
                    <ArrowRight className="h-3 w-3" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Posts</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{blogPosts.length}</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Published This Month</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {blogPosts.filter(p => new Date(p.date).getMonth() === new Date().getMonth()).length}
          </p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-gray-200 dark:border-slate-800 p-6">
          <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">Total Words</p>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">
            {blogPosts.reduce((sum, post) => sum + (post.content.split(' ').length || 0), 0).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
