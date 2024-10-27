
"use client";
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="fixed bg-purple-800 shadow-lg shadow-black w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <Image 
              src="/image.png"
              alt="Javeria" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <h1 className="text-4xl text-white font-bold font-serif ml-2">Javeria</h1>
          </div>

          
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-white text-xl font-bold hover:border-b-4">Home</Link>
            <Link href="/aboutne" className="text-white text-xl font-bold hover:border-b-4">About</Link>
            <Link href="/skillweb" className="text-white text-xl font-bold hover:border-b-4">Skills</Link>
            <Link href="/projectweb" className="text-white text-xl font-bold hover:border-b-4">Projects</Link>
            <Link href="/contact" className="text-white text-xl font-bold hover:border-b-4">Contact</Link>
          </div>

    
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="text-white">
              {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      
      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="md:hidden bg-transparent shadow-md"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center space-y-4 py-4"
            >
              <Link href="/" onClick={toggleNav} className="text-white text-xl font-bold">Home</Link>
              <Link href="/aboutne" onClick={toggleNav} className="text-white text-xl font-bold">About</Link>
              <Link href="/skillweb" onClick={toggleNav} className="text-white text-xl font-bold">Skills</Link>
              <Link href="/projectweb" onClick={toggleNav} className="text-white text-xl font-bold">Projects</Link>
              <Link href="/contact" onClick={toggleNav} className="text-white text-xl font-bold hover:border-b-2 border-black">Contact</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
