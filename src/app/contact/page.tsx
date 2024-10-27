"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

export default function Contact() {
    const whatsappLink = "https://wa.me/12333333444555?text=Hello! I would like to inquire about furniro and I want to buy it...";

    const handleClick = () => {
        window.open(whatsappLink, '_blank');
    };

    return (
        <section id="contact" className="p-10 bg-purple-950 mt-10">
            <motion.h2
                className="text-6xl font-bold mb-6 text-center text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                CONTACT ME
            </motion.h2>
            
            <motion.p
                className="text-2xl text-center text-white lg:ml-60 lg:mr-80 mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                Lets Create Something Amazing Together!
                Whether it is a new project or a creative idea, I amm here to make it happen. Lets connect and get started.
            </motion.p>

            <motion.form
                className="max-w-md mx-auto"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                            staggerChildren: 0.2, 
                        },
                    },
                }}
            >
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
                    <label htmlFor="name" className="block text-md font-bold mb-2 text-white">Name</label>
                    <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
                    <label htmlFor="email" className="block text-md font-bold mb-2 text-white">Email</label>
                    <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                </motion.div>

                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="mb-4">
                    <label htmlFor="message" className="block text-md font-bold mb-2 text-white">Message</label>
                    <textarea id="message" className="w-full p-2 border border-gray-300 rounded" required></textarea>
                </motion.div>

                <motion.button
                    onClick={handleClick}
                    type="button"
                    className="w-full bg-red-500 text-white text-lg font-semibold py-2 rounded-lg transition duration-300"
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.95 }} 
                >
                    Send Message
                </motion.button>
            </motion.form>

            <motion.div
                className="text-center mt-6 text-pink-950"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <h3 className="text-2xl text-white font-semibold">Or reach me at:</h3>
                <p className="mt-2 font-bold text-white">
                    Email: <Link href="mailto:javeriaqureshi746@gmail.com" className="text-white underline">javeriaqureshi746@gmail.com</Link>
                </p>

                <div className="flex justify-center space-x-4 mt-6 ">
                    <motion.a
                        href="https://www.linkedin.com/in/javeria-qureshi/"
                        target="_blank"
                        className="text-blue-600"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                    </motion.a>

                    <motion.a
                        href="https://github.com/javeri-a/"
                        target="_blank"
                        className="text-black"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.3 }} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                    >
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </motion.a>

                    <motion.a
                        href="https://www.facebook.com/profile.php?id=100056061157348"
                        target="_blank"
                        className="text-blue-700"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.3 }} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                    >
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </motion.a>

                    <motion.a
                        href="https://www.facebook.com/profile.php?id=100056061157348"
                        target="_blank"
                        className="text-pink-500"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5, delay: 0.3 }} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }} 
                    >
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
