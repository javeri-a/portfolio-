"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectSec() {
  return (
    <div className="bg-blue-950 w-full h-auto">
      <section id="projects" className="py-10 bg-blue-950">
        <div className="container mx-auto">
          <h2 className="lg:text-6xl text-6xl font-bold text-center text-white mt-20 mb-6">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/gammod.png" 
                alt="Project 1"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Glammod</h3>
             
              <p className="text-sm text-gray-500 mb-4">Technologies:Next.js And Tailwoind CSS</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/furniro.png" 
                alt="Project 2"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Furniro</h3>
              <p className="text-sm text-gray-500 mb-4">Technologies: Next.js, Tailwind CSS, Framer Motion</p>
              <a href="https://furnitur-web.vercel.app/" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="https://github.com/search?q=owner%3Ajaveri-a%20furniro&type=code" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>

            {/*  3 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/helpingHand.png" 
                alt="Project 3"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Helping Hands</h3>
              
              <p className="text-sm text-gray-500 mb-4">Technologies: Html,css</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/login.png" 
                alt="Project 3"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Login Page</h3>
           
              <p className="text-sm text-gray-500 mb-4">Html,css</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/passwordgenerate.png" 
                alt="Project 3"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Password Generator</h3>
              
              <p className="text-sm text-gray-500 mb-4">Technologies: Html,Css and Javascript</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
           
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/giaic.png" 
                alt="giaic"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Giaic Card</h3>
         
              <p className="text-sm text-gray-500 mb-4">Technologies: Next.js, Tailwind CSS</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/clock.png" 
                alt="Project 3"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Clock</h3>
              <p className="text-sm text-gray-500 mb-4">Technologies: Html,css</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
            {/* Project 3 */}
            <motion.div
              className="bg-white shadow-lg shadow-black hover:shadow-white transition-all duration-300 rounded-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="/fb.png" 
                alt="Project 3"
                width={400}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Facebook page</h3>
             
              <p className="text-sm text-gray-500 mb-4">Technologies: Next.js, Tailwind CSS</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> |
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>

           
          </div>
        </div>
  </section>
  <div className='text-center mt-8'>
        <motion.button
          className='bg-red-600 lg:px-14 lg:py-6 py-4 px-10 mt-4 md:mb-14 text-white text-2xl font-bold rounded-full'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href='/contact'> Contact me</Link>
        </motion.button>
      </div>
    </div>
  );
}
