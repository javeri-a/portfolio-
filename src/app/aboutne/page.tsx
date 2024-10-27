"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ABOUT() {
  return (
    <div className="bg-purple-950 text-center text-white font-semibold pt-24 pb-10">
      <h1 className="text-8xl font-bold mb-12">ABOUT ME</h1>

      
      <div className="lg:flex lg:justify-between block lg:px-16 px-6">
        <motion.div
          className="lg:hidden block mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/abouts.png"
            alt="About me"
            height={250}
            width={150}
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          className="lg:h-[300px] lg:w-[620px] bg-white text-black rounded-3xl shadow-black shadow-2xl hover:shadow-red-600 transition-all duration-300 p-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg lg:text-2xl">
            Hi, I am Javeria, a passionate Web Developer, Amazon Virtual
            Assistant, and Social Media Marketer. With a strong foundation in
            technologies like HTML, CSS, JavaScript, TypeScript, React, Next.js,
            and Tailwind CSS, I bring creativity and functionality together to
            build visually stunning, user-friendly websites.
          </p>
        </motion.div>

        <motion.div
          className="lg:block hidden mt-12"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/abouts.png"
            alt="About me"
            height={500}
            width={300}
            className="mr-60"
          />
        </motion.div>
      </div>

      
      <div className="lg:flex lg:justify-between lg:px-16 px-6 mt-16">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/journey.png"
            alt="Journey"
            height={400}
            width={300}
            className="mx-auto lg:h-[400px] lg:w-[400px] lg:ml-16"
          />
        </motion.div>

        <motion.div
          className="lg:h-[350px] lg:w-[700px] bg-white text-black rounded-3xl shadow-black shadow-2xl hover:shadow-red-600 transition-all duration-300 p-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl font-bold mb-6">MY JOURNEY</h1>
          <p>
          Over the past year, I have immersed myself in the world of web development, constantly improving my skills and working on a variety of projects that showcase my ability to create dynamic and responsive websites. I have completed my Intermediate in Commerce, and I am currently expanding my expertise by learning MS Office, Accounting, and Information Technology skills.
          <br />
          Web development is not just my career; is my passion. I thrive on creating outstanding websites that solve problems and provide seamless user experiences. From front-end to back-end, I enjoy the entire process of bringing ideas to life through code.

          </p>
        </motion.div>
      </div>

  
      <div className="lg:flex lg:justify-between lg:px-16 px-6 mt-16">
        <motion.div
          className="lg:hidden block mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/great.png"
            alt="Great Work"
            height={200}
            width={150}
            className="mx-auto"
          />
        </motion.div>

        <motion.div
          className="lg:h-[300px] lg:w-[620px] bg-white text-black rounded-3xl shadow-black shadow-2xl hover:shadow-red-600 transition-all duration-300 p-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl font-bold mb-6">Inspiring</h1>
          <p className="text-lg lg:text-2xl">
            As Steve Jobs once said: <br /> <b> The only way to do great work is to love
            what you do. </b> <br /> This quote resonates with me because I put my heart
            into every project I take on, constantly striving for excellence.
          </p>
        </motion.div>

        <motion.div
          className="lg:block hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/great.png"
            alt="Great Work"
            height={500}
            width={300}
            className="mr-60"
          />
        </motion.div>
      </div>

    
      <div className="lg:flex lg:justify-between lg:px-16 px-6 mt-16">
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/connect.png"
            alt="Connect"
            height={400}
            width={300}
            className="mx-auto lg:h-[400px] lg:w-[400px] lg:ml-16"
          />
        </motion.div>

        <motion.div
          className="lg:h-[250px] lg:w-[400px] bg-white text-black rounded-3xl shadow-black shadow-2xl hover:shadow-red-600 transition-all duration-300 p-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-2xl font-bold mb-6">Lets Connect</h1>
          <p>
            If you are looking for someone who can bring creativity, dedication,
            and a strong work ethic to your project, lets collaborate and
            create something amazing!
          </p>
        </motion.div>
      </div>

    
      <motion.button
        className="bg-red-600 px-14 py-6 mt-12 mb-4 text-2xl font-bold rounded-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/aboutne">Contact me...</Link>
      </motion.button>
    </div>
  );
}
