import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Netlify from '../assets/netlify.webp';
import Github from '../assets/github.png';
import Rapid from '../assets/rapid.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full md:h-screen  bg-[#0a192f] text-gray-300 flex flex-col justify-center items-center'
    >
      <div className='h-full w-full flex flex-col items-center'>
        <div className='w-full max-w-[1000px] mx-auto py-2 px-6'>
          <p className='border-b-4 text-4xl font-bold text-[#ccd6f6] border-red-600 inline mx-auto '>
            Skills
          </p>
          <div className='py-4 text-gray-300'>
            <p>{'// Technologies I work with'}</p>
          </div>
        </div>

        <div className='w-full grid grid-cols-2 sm:gap-6 gap-4 sm:grid-cols-4 max-w-[1000px] mb-6 text-center p-6'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={HTML} alt='Html icon' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={CSS} alt='Html icon' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={Javascript} alt='Html icon' />
            <p className='my-4'>Javascript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={ReactImg} alt='Html icon' />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={Netlify} alt='Html icon' />
            <p className='my-4'>Netlify</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={Github} alt='Html icon' />
            <p className='my-4'>Github</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={Rapid} alt='Html icon' />
            <p className='my-4'>Rapid API</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-all duration-200 hover:bg-gray-700 flex flex-col items-center w-full pt-4'>
            <img className='mx-auto w-20' src={Tailwind} alt='Html icon' />
            <p className='my-4'>Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
