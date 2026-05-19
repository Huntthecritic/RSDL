'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export function AddProjectModal({ isOpen, onClose, onSubmit, existingProject = null }) {
  const [formData, setFormData] = useState(
    existingProject || {
      name: '',
      description: '',
      client: '',
      service: 'Web Development',
      status: 'Planning',
      startDate: '',
      endDate: '',
      budget: '',
      spent: '',
    }
  );
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Integration',
    'E-Commerce',
    'Maintenance & Support',
    'Consulting',
  ];

  const statuses = [
    'Planning',
    'In Progress',
    'In Review',
    'Completed',
    'On Hold',
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Project name is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.client.trim()) newErrors.client = 'Client name is required';
    if (!formData.budget || isNaN(parseFloat(formData.budget))) newErrors.budget = 'Valid budget is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      onSubmit({
        ...formData,
        budget: parseFloat(formData.budget),
        spent: parseFloat(formData.spent) || 0,
      });
      setFormData({
        name: '',
        description: '',
        client: '',
        service: 'Web Development',
        status: 'Planning',
        startDate: '',
        endDate: '',
        budget: '',
        spent: '',
      });
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {existingProject ? 'Edit Project' : 'Add New Project'}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Project Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Project Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter project name"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 transition-all ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-purple-200 focus:border-purple-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the project"
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 transition-all ${
                      errors.description 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-purple-200 focus:border-purple-500'
                    }`}
                  />
                  {errors.description && (
                    <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" /> {errors.description}
                    </p>
                  )}
                </div>

                {/* Client and Service */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Client Name *
                    </label>
                    <input
                      type="text"
                      name="client"
                      value={formData.client}
                      onChange={handleChange}
                      placeholder="Client company"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 transition-all ${
                        errors.client 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-purple-200 focus:border-purple-500'
                      }`}
                    />
                    {errors.client && (
                      <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" /> {errors.client}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Service Type
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 dark:bg-slate-800 dark:text-white transition-all"
                    >
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Status and Dates */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Status
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 dark:bg-slate-800 dark:text-white transition-all"
                    >
                      {statuses.map(status => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Start Date *
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 transition-all ${
                        errors.startDate 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-purple-200 focus:border-purple-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 dark:bg-slate-800 dark:text-white transition-all"
                    />
                  </div>
                </div>

                {/* Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Budget ($) *
                    </label>
                    <input
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      placeholder="0.00"
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-slate-800 dark:text-white dark:border-slate-700 transition-all ${
                        errors.budget 
                          ? 'border-red-500 focus:ring-red-200' 
                          : 'border-gray-300 focus:ring-purple-200 focus:border-purple-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Spent ($)
                    </label>
                    <input
                      type="number"
                      name="spent"
                      value={formData.spent}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-500 dark:bg-slate-800 dark:text-white transition-all"
                    />
                  </div>
                </div>

                {/* Form Actions */}
                <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
                  <motion.button
                    type="button"
                    onClick={onClose}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-4 py-2 border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors font-medium"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-medium"
                  >
                    <Save className="h-4 w-4" />
                    {isSubmitting ? 'Saving...' : existingProject ? 'Update Project' : 'Create Project'}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
