
"use client"
import { FaHtml5, FaCss3Alt, FaJs, FaAmazon, FaNode } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {  FaReact } from 'react-icons/fa6';

export default function Skills() {
  return (
    <div className='bg-purple-950 h-auto w-full text-black font-bold'>
      <div>
        <h1 className='lg:text-6xl text-5xl text-white lg:pt-24 pt-4 text-center'>
          MY SKILLS
        </h1>
      </div>
      <div className='grid lg:grid-cols-3 text-center lg:pt-12 pt-5'>
        {/*  HTML */}
        <motion.div
          className='lg:h-[300px] lg:w-[400px] h-[150px] w-[200px] lg:ml-4 ml-20 rounded-2xl mb-2 bg-white shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaHtml5 size={100} className='text-orange-500 mx-auto pt-4' />
          <h2 className='text-3xl font-bold mb-2'>HTML</h2>
          <p className='text-gray-600 p-6'>
            Mastering the foundation of every web page, HTML structures content
            with precision and flexibility, bringing your ideas to life on the
            web.
          </p>
        </motion.div>

        {/*  CSS */}
        <motion.div
          className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaCss3Alt size={100} className='text-blue-500 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>CSS</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
            Styling with elegance, CSS transforms simple layouts into visually
            appealing, responsive designs that work across all devices.
          </p>
        </motion.div>

        {/*  JavaScript */}
        <motion.div
          className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaJs size={100} className='text-yellow-500 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>JavaScript</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
            Bringing interactivity to life, JavaScript powers dynamic features,
            creating engaging user experiences that respond to every click and
            action.
          </p>
        </motion.div>
       
        <motion.div
          className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaReact size={100} className='text-blue-800 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>REACT</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
          My journey with React is all about creativity and flexibility! It allows me to build interactive, dynamic web apps that engage users and leave a lasting impression. This technology is my go-to tool for transforming coding dreams into reality.
          </p>
        </motion.div>
        <motion.div
          className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaAmazon size={100} className='text-orange-500 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>AMAZON</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
          Becoming a part of the Amazon ecosystem has been an exciting adventure! I’m skilled at leveraging its powerful tools and resources to set up successful online businesses, with a focus on efficient inventory management and product optimization.
          </p>
        </motion.div>
        <motion.div
          className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.1, rotate: 1 }}
        >
          <FaNode size={100} className='text-black mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>NODE.JS</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
          With Node.js, I bring my development skills to the server-side! This technology adds speed and scalability to my projects, enabling me to enhance backend development and create seamless web experiences.
          </p>
        </motion.div>
      </div>

      <div className='text-center mt-8'>
        <motion.button
          className='bg-red-600 lg:px-14 lg:py-6 py-4 px-10 mt-4 md:mb-14 text-white text-2xl font-bold rounded-full'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href='/projectweb'> Check My Projects</Link>
        </motion.button>
      </div>
    </div>
  );
}
