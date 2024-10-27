
 "use client"
import Image from "next/image";
import TextAnimation from "./text/page";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="lg:flex lg:justify-between justify-center bg-purple-950 h-screen w-full text-white">
      

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="pt-20 lg:pt-48 text-center lg:text-start lg:text-6xl lg:ml-16 text-4xl">
          Hello, Its me <br />
          <span className="font-serif font-extrabold lg:text-8xl text-4xl">Javeria</span>
        </h1>

        <TextAnimation />

      
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/image.png"
            alt="profile"
            height={400}
            width={400}
            className="rounded-full lg:mt-28 lg:mr-40 mt-2 border border-x-8 border-y-8 border-black h-[250px] w-[250px] ml-14 lg:w-[400px] lg:h-[400px] lg:hidden"
          />
        </motion.div>

        <h3 className="lg:ml-12 pt-4 lg:text-start text-lg text-center mb-4 md:mb-9 lg:text-2xl">
        Bringing creative ideas to life with elegant and responsive web designs, I specialize in HTML, CSS, JavaScript, and Next.js. With experience in Amazon VA and social media marketing, I strive to build impactful digital solutions that not only look great but perform exceptionally well. Let’s make something amazing together!
        </h3>

        <motion.div
          className="flex space-x-4  ml-12 md:mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <a href="https://www.facebook.com/profile.php?id=100056061157348" target="_blank" rel="noopener noreferrer">
            <FaFacebook
              className="bg-slate-400 rounded-full text-blue-600 hover:text-blue-900 hover:shadow-2xl"
              size={60}
            />
          </a>
          <a href="https://github.com/javeri-a" target="_blank" rel="noopener noreferrer">
            <FaGithub
              className="text-gray-800 bg-slate-400 rounded-full hover:text-black"
              size={60}
            />
          </a>
          <a href="https://www.linkedin.com/in/javeria-qureshi/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              className="text-blue-500 hover:text-blue-700"
              size={60}
            />
          </a>
        </motion.div>
      </motion.div>

      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src="/image.png"
          alt="profile"
          height={400}
          width={400}
          className="hidden lg:block rounded-full lg:mt-40 lg:mr-40 mt-2 border border-x-8 border-y-8 border-black h-[250px] w-[250px] ml-14 lg:h-[450px] lg:w-[450px]"
        />
      </motion.div>
    </div>
  );
}
