import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-gray-300 bg-[#0a192f]'>
      <div className='w-full h-full flex flex-col justify-center items-center mx-auto'>
        <div
          className=' w-full px-4 sm:grid grid-cols-2  
        max-w-[1000px] gap-8 mt-4'
        >
          <div className='sm:text-right text-4xl font-bold sm:pb-1 pb-8 pl-4'>
            <p className='border-b-4 text-[#ccd6f6] border-red-600 inline'>About</p>
          </div>
          <div></div>
          <div className='sm:text-right text-4xl font-bold pb-6 pl-4'>
            <p className='text-[#8892b0]'>Hi I'm Arek nice to meet you.</p>
          </div>
          <div className='col-span-1'>
            <p className='sm:text-lg px-4 eading-6 text-[#ccd6f6] md:leading-[2rem] leading-[1.5rem]'>
              I am passionate about creating modern websites based on HTML, CSS,
              JavaScript, React JS framework. I am constantly developing my
              knowledge and skills in this area. I am enthusiast of teamwork
              solving problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
