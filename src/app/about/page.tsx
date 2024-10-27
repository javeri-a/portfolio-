
"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; 

export default function About() {
  return (
    <div className="h-screen bg-purple-950">
      <div className="text-white text-center">
      
        <motion.h1
          className="lg:text-6xl text-5xl lg:pt-1 pt-6 text-center font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <div className="flex justify-between  lg:mt-8">
      
         

        
          <motion.p
            className="pt-6 pb-3 lg:pt-6 m-6 text-start lg:text-3xl text-lg lg:mt-4 lg:mr-80 lg:mb-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I am Javeria, a creative Web Developer with a passion for crafting stunning, user-centric websites. With skills in HTML, CSS, JavaScript, TypeScript, React, Next.js, and Tailwind CSS, I transform ideas into visually appealing digital experiences.

           Beyond web development, I am an Amazon Virtual Assistant and a Social Media Marketer, dedicated to helping businesses thrive in the online world.

           My mission is to blend creativity with technology to build solutions that not only meet needs but also inspire.
          </motion.p>

          <motion.div
            className="lg:block hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/abouts.png"
              alt="about"
              height={600}
              width={800}
              className="h-[400px] w-[4400px]"
            />
          </motion.div>
        </div>

  
        <motion.button
          className="bg-red-600 lg:pr-20 px-14 py-6 mt-1 text-2xl md:mt-2 font-bold rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <Link href="/aboutne">More About Me</Link>
        </motion.button>
      </div>
    </div>
  );
}
