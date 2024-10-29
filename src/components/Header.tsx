'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleLogoClick = () => {
    router.push('/');
  };

  const handleLetsTalkClick = () => {
    router.push('/#contact');
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-black transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center w-full bg-opacity-20 rounded-full">
        <div className="w-32 h-12 relative cursor-pointer" onClick={handleLogoClick}>
          <Image
            src="/newlogo.png"
            alt="GrowLexi Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300">Home</Link>
          <Link href="/packages" className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300">Packages</Link>
          <Link href="/Team" className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300">Team</Link>
          <button
            onClick={handleLetsTalkClick}
            className="bg-[#8CC63F] text-white px-4 py-2 rounded hover:bg-[#5A822A] transition-colors"
          >
            Let's Talk
          </button>
        </div>
        <button 
          className="md:hidden text-[#8CC63F] focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={isMenuOpen ? "open" : "closed"}
            className="w-6 h-6 flex flex-col justify-center items-center"
          >
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 2 },
              }}
              className="w-6 h-0.5 bg-[#8CC63F] block mb-1 transform origin-center"
            />
            <motion.span
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              className="w-6 h-0.5 bg-[#8CC63F] block mb-1"
            />
            <motion.span
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -2 },
              }}
              className="w-6 h-0.5 bg-[#8CC63F] block transform origin-center"
            />
          </motion.div>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-900/95 backdrop-blur-md z-40 shadow-xl"
            >
              <div className="flex flex-col items-center pt-24 h-full space-y-8 p-8">
                <Link 
                  href="/" 
                  className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/packages" 
                  className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Packages
                </Link>
                <Link 
                  href="/Team" 
                  className="text-[#8CC63F] hover:text-[#5A822A] transition duration-300 text-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Team
                </Link>
                <button
                  onClick={handleLetsTalkClick}
                  className="bg-[#8CC63F] text-black px-6 py-3 rounded-full hover:bg-[#5A822A] transition-colors text-lg font-semibold hover:text-white"
                >
                  Let's Talk
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
