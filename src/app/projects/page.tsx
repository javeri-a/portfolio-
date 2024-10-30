
"use client"
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectSec() {
  return (
    <div className="bg-purple-950 w-full h-auto">
      <section id="projects" className="py-10 bg-purple-950">
        <div className="container mx-auto">
          <h2 className="lg:text-6xl text-6xl font-bold text-center text-white mb-6">My Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-2xl p-6"
            >
              <Image
                src="/gammod.png" 
                alt="Project 1"
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">GLammod</h3>
              <p className="text-sm text-gray-500 mb-4">Technologies: Next.js and tailwind css</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> | 
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>

            {/*  2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <Image
                src="/furniro.png"  
                alt="Project 2"
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Furniro</h3>
             
              <p className="text-sm text-gray-500 mb-4">Technologies: Next.js, Tailwind CSS, Framer Motion</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> | 
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>

            {/*  3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white shadow-lg rounded-lg p-6"
            >
              <Image
                src="/helpingHand.png"  
                alt="Project 3"
                width={500}
                height={300}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Helping Hands</h3>
             
              <p className="text-sm text-gray-500 mb-4">Technologies:Html, css</p>
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Live Preview</a> | 
              <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">GitHub</a>
            </motion.div>
          </div>
        </div>
       
      </section>
    
    </div>
  );
}
