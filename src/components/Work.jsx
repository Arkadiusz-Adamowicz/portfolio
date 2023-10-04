import React from 'react';
import WorkImg from '../assets/store.png';
import WorkImg1 from '../assets/movies.png';
import WorkImg2 from '../assets/best.png';
import WorkImg3 from '../assets/stopka.png';
import WorkImg4 from '../assets/zakupy.png';
import WorkImg5 from '../assets/crypto.png';

const Work = () => {
  return (
    <div name='work' className='w-full  text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-5'>
          <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-red-600'>
            Work
          </p>
          <div className='pt-4 mb-0 text-gray-300'>
            <p>{'// Check out of my work'}</p>
          </div>
        </div>

        <div className='flex flex-wrap justify-center gap-5 mb-20'>
          {/* ----------------- REDUX STORE APP ---------------------------*/}

          <div className='flex flex-wrap w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  E-Commerce App
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://redux-store-arek.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/redux-store'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------- MOVIE APP ------------------------------- */}
          <div className='flex flex-wrap  w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg1})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Movies Search App
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://movieapp-arek.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/MovieApp'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------- LANDING PAGE WITH FILTER SYSTEM  ------------------------------- */}
          <div className='flex flex-wrap  w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg2})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Landing Page With Filter Products
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://best-eats-arek.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/best-eats'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------- LANDING PAGE WITH ANIMATIONS  ------------------------------- */}
          <div className='flex flex-wrap  w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg3})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Landing Page With Animations
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://pawelstopka.netlify.app'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/pawelstopka'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------- WEB APP  ------------------------------- */}
          <div className='flex flex-wrap  w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg4})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Web App
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://zakupki-arek.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/zakupki'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------------- CRYPTO APP  ------------------------------- */}
          <div className='flex flex-wrap  w-[300px] gap-8 md:gap-6'>
            <div
              style={{ backgroundImage: `url(${WorkImg5})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
            >
              <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  Crypto Web App
                </span>
                <div className='pt-8 text-center'>
                  <a
                    href='https://crypto-app-arek.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Demo
                    </button>
                  </a>
                  <a
                    href='https://github.com/Arkadiusz-Adamowicz/crypto-app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
