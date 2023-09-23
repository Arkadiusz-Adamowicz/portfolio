import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { CgFileDocument } from 'react-icons/cg';
import { BsGithub } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const HandleNav = () => setNav(!nav);
  const CloseMenu = () => setNav(false);

  return (
    <div className='md:fixed md:shadow-xl w-full h-[80px] bg-[#0a192f] text-white'>
      <div className='flex items-center justify-between px-4 mx-auto'>
        <div className='flex justify-between items-center'>
          <Link to='home' smooth={true} offset={-200} duration={300}>
            <div className='flex mb-2 md:px-2 mt-1 cursor-pointer'>
              <h1 className='text-5xl font-bold text-[#ccd6f6] mt-2'>A</h1>
              <h1 className='text-5xl font-bold text-red-600 mt-[20px] ml-[-10px]'>
                A
              </h1>
            </div>
          </Link>
          <div className='md:flex gap-2 hidden'>
            <a
              href='https://arkadiusz-adamowicz-cv.netlify.app'
              target='_blank'
              rel='noreferrer'
              className='flex mr-1'
            >
              <CgFileDocument size={25} className='text-[#ccd6f6]' />
              <p className='ml-2 text-[#ccd6f6] hover:text-red-600 transition-all duration-100 font-semibold'>
                CV
              </p>
            </a>
            <a
              href='https://github.com/Arkadiusz-Adamowicz'
              target='_blank'
              rel='noreferrer'
              className='flex mr-1'
            >
              <BsGithub size={25} className='text-[#ccd6f6]' />
              <p className='ml-2 text-[#ccd6f6]  hover:text-red-600 transition-all duration-100 font-semibold'>
                Github
              </p>
            </a>
            <a
              href='mailto:arek.adamowicz81@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='flex mr-1'
            >
              <MdOutlineAlternateEmail size={25} className='text-[#ccd6f6]' />
              <p className='ml-2 text-[#ccd6f6]  hover:text-red-600 transition-all duration-100 font-semibold'>
                Email
              </p>
            </a>
          </div>
        </div>

        {/* Menu */}
        <div className='hidden md:flex'>
          <ul className='flex text-[#ccd6f6] font-bold'>
            <li className='nav-item'>
              <Link to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='skills' smooth={true} offset={-140} duration={500}>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              {' '}
              <Link to='work' smooth={true} offset={-140} duration={500}>
                Work
              </Link>
            </li>
            <li className=' transition duration-200 nav-item'>
              <Link to='contact' smooth={true} offset={-10} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden' onClick={HandleNav}>
          <ul
            className={
              !nav
                ? 'md:hidden absolute text-[#ccd6f6] top-0 -left-full w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'
                : 'md:hidden absolute text-[#ccd6f6] top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[rgb(10,25,47)] transition-all duration-200'
            }
          >
            <div className='flex mb-2 md:px-2 mt-1'>
              <h1 className='text-5xl font-bold text-[#ccd6f6] mt-2'>A</h1>
              <h1 className='text-5xl font-bold text-red-600 mt-[20px] ml-[-10px]'>
                A
              </h1>
            </div>
            <li className='my-6 text-2xl font-bold hover:text-red-600 transition duration-200'>
              <Link onClick={CloseMenu} to='home' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className='my-6 text-2xl font-bold hover:text-red-600     transition duration-200'>
              <Link onClick={CloseMenu} to='about' smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className='my-6 text-2xl font-bold hover:text-red-600     transition duration-200'>
              <Link
                onClick={CloseMenu}
                to='skills'
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className='my-6 text-2xl font-bold hover:text-red-600     transition duration-200'>
              <Link onClick={CloseMenu} to='work' smooth={true} duration={500}>
                Work
              </Link>
            </li>
            <li className='my-6 text-2xl font-bold hover:text-red-600     transition duration-200'>
              <Link
                onClick={CloseMenu}
                to='contact'
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger */}
        <div className='md:hidden text-[#ccd6f6] z-10 mx-2' onClick={HandleNav}>
          {!nav ? (
            <FaBars className='cursor-pointer' size={27} />
          ) : (
            <FaTimes className='cursor-pointer' size={27} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
