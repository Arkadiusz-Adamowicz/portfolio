import React from 'react';
import { Link } from 'react-scroll';
import foto from '../assets/foto.jpeg';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] text-white'>
      <div className='max-w-[1000px] h-screen  mx-auto px-9 flex flex-col justify-center md:pb-[1rem] pb-[6rem]'>
        <div className='flex justify-center mb-4'>
          <img
            className='rounded-full border-2 border-red-600 md:w-70 w-40 block md:hidden'
            src={foto}
            alt=''
          />
        </div>
        <div className='flex justify-center items-center gap-5'>
          <div>
            <p className='text-sm sm:text-lg  text-red-600 py-1'>My name is</p>
            <h1 className='text-4xl sm:text-6xl text-[#ccd6f6] font-bold'>
              Arkadiusz Adamowicz
            </h1>
            <h2 className='text-3xl sm:text-5xl text-[#8892b0] font-bold py-1'>
              I am <span className='text-red-600 font-thin'>Front-End</span>{' '}
              Developer
            </h2>
            <p className='text-sm sm:text-lg text-[#ccd6f6] py-4 max-w-[700px] md:leading-[2rem] leading-[1.5rem]'>
              I am Self-taught Front-End developer who, through continuous
              learning, improves his skills in programming. I'm focusing on
              creating user-friendly responsive websites and web applications in
              React JS.
            </p>
            <div>
              <Link to='work' smooth={true}>
                <button className='group border-[1px] border-[#ccd6f6] px-6 py-3 my-3 flex items-center hover:bg-red-600 hover:border-red-600 rounded-md transition-colors duration-200 text-[#ccd6f6]'>
                  View Work
                </button>
              </Link>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <img
              className='rounded-full border-2 border-red-600 md:w-70 md:block hidden'
              src={foto}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
