import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const HandleNav = () => setNav(!nav);
  const CloseMenu = () => setNav(false)

  return (
    <div className='md:fixed md:shadow-xl w-full h-[80px] bg-[#0a192f] text-white'>
      <div className='flex items-center justify-between px-4 mx-auto'>
        <div className='flex mb-2'>
          <h1 className='text-5xl font-bold text-[#ccd6f6] mt-2'>A</h1>
          <h1 className='text-5xl font-bold text-red-600 mt-[20px] ml-[-10px]'>
            A
          </h1>
        </div>

        {/* Menu */}
        <div className='hidden md:flex'>
          <ul className='flex text-[#ccd6f6] font-bold'>
            <li className='hover:text-red-600 transition duration-200'>
              <Link
                to='home'
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='hover:text-red-600 transition duration-200'>
            <Link
                to='about'
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className='hover:text-red-600 transition duration-200'>
            <Link
                to='skills'
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </li>
            <li className='hover:text-red-600 transition duration-200'> <Link
                to='work'
                smooth={true}
                offset={-30}
                duration={500}
              >
                Work
              </Link></li>
            <li className='hover:text-red-600 transition duration-200'>
            <Link
                to='contact'
                smooth={true}
                duration={500}
              >
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
                ? 'md:hidden absolute text-[#ccd6f6] top-0 left-[-100%] w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] pb-[8rem]'
                : 'md:hidden absolute text-[#ccd6f6] top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f] pb-[8rem]'
            }
          >
            <li className='my-6 text-2xl font-bold hover:text-red-600 transition duration-200'>
            <Link
                onClick={CloseMenu}
                to='home'
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className='my-6 text-2xl font-bold hover:text-red-600     transition duration-200'>
            <Link
                onClick={CloseMenu}
                to='about'
                smooth={true}
                duration={500}
              >
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
            <Link
                onClick={CloseMenu}
                to='work'
                smooth={true}
                duration={500}
              >
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
        <div className='md:hidden text-[#ccd6f6] z-10' onClick={HandleNav}>
          {!nav ? (
            <FaBars className='cursor-pointer' size={20} />
          ) : (
            <FaTimes className='cursor-pointer' size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
