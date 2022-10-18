import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] h-screen  mx-auto px-9  flex flex-col justify-center pb-[6rem]'>
        <p className='text-sm sm:text-lg  text-red-600 py-1'>My name is</p>
        <h1 className='text-4xl sm:text-6xl text-[#ccd6f6] font-bold'>
          Arkadiusz Adamowicz
        </h1>
        <h2 className='text-3xl sm:text-5xl text-[#8892b0] font-bold py-1'>
          I am Front-End Developer
        </h2>
        <p className='text-sm sm:text-lg text-[#ccd6f6] py-4 max-w-[700px]'>
          I am Self-taught Front-End developer who, through continuous learning,
          improves his skills in React JS technology. I'm focusing on creating
          user-friendly responsive websites and web applications.
        </p>
        <div>
          <button className='group border-[1px] border-[#ccd6f6] px-6 py-3 my-3 flex items-center hover:bg-red-600 hover:border-red-600 rounded transition-colors duration-200 text-[#ccd6f6]'>
          <Link
                to='work'
                smooth={true}
                duration={500}
              >
                View Work
              </Link>
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-2' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
