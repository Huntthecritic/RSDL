'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    'Web Development',
    'UI/UX Design',
    'Performance Optimization',
    'Backend Development',
    'Security & Compliance',
    'Digital Strategy',
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#AE14D9]/5 to-[#7216F2]/5 rounded-2xl blur-3xl opacity-50" />

        <div className="relative bg-white border border-[#F2F2F2] rounded-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#1A1A2E] mb-2">Send us a Message</h2>
          <p className="text-[#513DD9] mb-8 font-light">Fill out the form below and we&apos;ll get back to you shortly.</p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2">Message Sent!</h3>
              <p className="text-[#513DD9] text-center">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                    Name <span className="text-[#AE14D9]">*</span>
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] placeholder-[#513DD9]/50 focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                    Email <span className="text-[#AE14D9]">*</span>
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] placeholder-[#513DD9]/50 focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                    Phone
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] placeholder-[#513DD9]/50 focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                    Company
                  </label>
                  <motion.input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] placeholder-[#513DD9]/50 focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                  Service Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#1A1A2E] mb-2">
                  Message <span className="text-[#AE14D9]">*</span>
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#F2F2F2] bg-white text-[#1A1A2E] placeholder-[#513DD9]/50 focus:outline-none focus:border-[#7216F2] focus:ring-2 focus:ring-[#7216F2]/10 transition-all duration-300 resize-none"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>

              {/* Error message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-xs text-[#513DD9] text-center">
                We respect your privacy. Your message will be kept confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
