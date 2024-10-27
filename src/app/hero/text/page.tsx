"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const roles = [
  'I am a Frontend Developer',
   'Social Media Marketer',
  'Amazon Virtual Assistant',
];

const TextAnimation = () => {
  const [currentRole, setCurrentRole] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex  items-center  ">
      <motion.div
        key={currentRole}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="lg:text-5xl text-xl ml-16 text-center font-extrabold text-red-300   lg:ml-24 lg:text-start font-mono"
      >
        {roles[currentRole]}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
