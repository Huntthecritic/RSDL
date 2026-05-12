'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Process', href: '/process' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#F2F2F2]/50 shadow-lg' : 'bg-white/70 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      suppressHydrationWarning
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between" suppressHydrationWarning>
{/* Logo with enhanced styling */}
<motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5, delay: 0.1 }}
  className="flex items-center cursor-pointer"
  whileHover={{ scale: 1.05 }}
  suppressHydrationWarning
>
  <motion.div

    className="relative w-56 h-18 transition-all"
    whileHover={{ rotate: -2 }}
    suppressHydrationWarning
  >
    <a href='/'>
    <Image
      src="/Images/logonav.png"
      alt="Reel Span Digital Logo"
      fill
      className="object-contain object-left" 
      priority 
    />
    </a>
  </motion.div>
</motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center gap-1"
          suppressHydrationWarning
        >
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="relative px-4 py-2 text-[#1A1A2E] font-semibold text-sm group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item.label}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] rounded-full group-hover:w-full transition-all duration-300"
                layoutId={`underline-${index}`}
              />
            </motion.a>
          ))}
        </motion.nav>

        {/* CTA Button - Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:block"
          suppressHydrationWarning
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-bold text-sm hover:shadow-lg transition-shadow duration-300"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 text-[#1A1A2E] hover:text-[#7216F2] hover:bg-[#F2F2F2] rounded-lg transition-all"
          suppressHydrationWarning
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden border-t border-[#F2F2F2] bg-gradient-to-b from-white/95 to-[#F2F2F2]/50 backdrop-blur-md"
        suppressHydrationWarning
      >
        <nav className="flex flex-col gap-2 px-6 py-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="px-4 py-3 text-[#1A1A2E] font-semibold rounded-lg hover:bg-[#F2F2F2] hover:text-[#7216F2] transition-all"
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[#AE14D9] to-[#7216F2] text-white rounded-lg font-bold text-sm hover:shadow-lg transition-shadow"
          >
            Get Started
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
