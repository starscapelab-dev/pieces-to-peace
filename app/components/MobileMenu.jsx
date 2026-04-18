'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const menuItems = [
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="md:hidden z-[110] relative w-8 h-6 flex flex-col justify-between items-end focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <motion.span
          className="w-full h-[2px] bg-black rounded"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-3/4 h-[2px] bg-black rounded"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.span
          className="w-1/2 h-[2px] bg-black rounded"
          animate={isOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '50%' }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* Overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 right-0 w-full h-screen bg-amber-50 z-[105] flex flex-col items-center justify-center text-2xl gap-10"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-amber-800 transition duration-300 text-3xl font-medium"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
