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
     <div className="flex    ">
      <motion.div
        key={currentRole}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
        className="lg:text-4xl ml-16 text-start font-bold text-red-300   lg:ml-16 lg:text-start text-lg font-mono"
      >
        {roles[currentRole]}
      </motion.div>
    </div>
  );
};

export default TextAnimation;
