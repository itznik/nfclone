'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaBell } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 transition-colors duration-300 flex items-center justify-between px-4 sm:px-12 py-4 ${
        isScrolled ? 'bg-dark' : 'bg-transparent bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="flex items-center gap-8">
        <Link href="/browse">
          <h1 className="text-netflix text-2xl sm:text-3xl font-black cursor-pointer">
            PRIYAFLIX
          </h1>
        </Link>
        <ul className="hidden sm:flex text-sm text-gray-200 gap-4">
          <li className="font-semibold text-white cursor-pointer hover:text-gray-300 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Memories</li>
          <li className="cursor-pointer hover:text-gray-300 transition">Adventures</li>
          <li className="cursor-pointer hover:text-gray-300 transition">My List</li>
        </ul>
      </div>

      <div className="flex items-center gap-6 text-white">
        <FaSearch className="cursor-pointer hidden sm:block w-5 h-5" />
        <span className="hidden sm:block text-sm cursor-pointer">KIDS</span>
        <FaBell className="cursor-pointer w-5 h-5" />
        
        {/* Mini Profile Avatar */}
        <div className="w-8 h-8 rounded overflow-hidden cursor-pointer">
          <img src="/priya.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </motion.nav>
  );
}
