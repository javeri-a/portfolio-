
"use client";
import { FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import Link from 'next/link';

export default function Skills() {
  return (
    <div className='bg-blue-950 h-screen w-full text-black font-bold'>
      <div>
        <h1 className='lg:text-6xl text-5xl text-white lg:pt-14 pt-4 text-center'>
          MY SKILLS
        </h1>
      </div>
      <div className='grid lg:grid-cols-3 text-center lg:pt-12 pt-5'>
        {/*  HTML */}
        <div className='lg:h-[300px] lg:w-[400px] h-[150px] w-[200px] lg:ml-4 ml-20 rounded-2xl mb-2 bg-white shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'>
          <FaHtml5 size={100} className='text-orange-500 mx-auto pt-4' />
          <h2 className='text-3xl font-bold mb-2'>HTML</h2>
          <p className='text-gray-600 p-6'>
            Mastering the foundation of every web page, HTML structures content
            with precision and flexibility, bringing your ideas to life on the
            web.
          </p>
        </div>

        {/*  CSS */}
        <div className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'>
          <FaCss3Alt size={100} className='text-blue-500 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>CSS</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
            Styling with elegance, CSS transforms simple layouts into visually
            appealing, responsive designs that work across all devices.
          </p>
        </div>

        {/* JavaScript */}
        <div className='lg:h-[300px] lg:w-[400px] bg-white rounded-2xl h-[150px] w-[200px] lg:ml-0 ml-20 mb-2 shadow-black shadow-[0_30px_25px_rgba(0,0,0,0.3)] hover:shadow-red-200 hover:shadow-2xl transition-all duration-300'>
          <FaJs size={100} className='text-yellow-500 mx-auto p-4' />
          <h2 className='text-3xl font-bold mb-2'>JavaScript</h2>
          <p className='text-gray-600 p-6 lg:block hidden'>
            Bringing interactivity to life, JavaScript powers dynamic features,
            creating engaging user experiences that respond to every click and
            action.
          </p>
        </div>
      </div>

      <div className='text-center mt-8'>
        <button className='bg-red-600 lg:px-14 lg:py-6 py-4 px-10 mt-4 text-white text-2xl font-bold rounded-full'>
          <Link href='/skillweb'>More Skills</Link>
        </button>
      </div>
    </div>
  );
}
