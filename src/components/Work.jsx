import React from 'react';
import WorkImg from '../assets/movie.png';
import WorkImg1 from '../assets/globe.png';
import WorkImg2 from '../assets/weather.png';
import WorkImg3 from '../assets/netflix.png';
import WorkImg4 from '../assets/landing.png';
import WorkImg5 from '../assets/defi.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-5'>
          <p className='text-4xl font-bold inline border-b-4 text-[#ccd6f6] border-red-600'>
            Work
          </p>
          <div className='pt-4 mb-0 text-gray-300'>
            <p>{'// Check out of my work'}</p>
          </div>
        </div>

        {/* grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6'>
          {/* grit-item */}
          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div p-3'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Netflix Clone
              </span>
              <div className='pt-8 text-center'>
                <a href='https://netflix-73ccc.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Globe website (SPA)
              </span>
              <div className='pt-8 text-center'>
                <a href='https://globe-arek.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Arkadiusz-Adamowicz/globe-website'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Movies App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://movieapp-arek.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Arkadiusz-Adamowicz/MovieApp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Landing Website
              </span>
              <div className='pt-8 text-center'>
                <a href='https://pawelstopka.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Arkadiusz-Adamowicz/pawelstopka'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Defi App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://defi-app-arek.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Arkadiusz-Adamowicz/defi-app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto content-div'
          >
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 transition-all duration-500'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Weather App
              </span>
              <div className='pt-8 text-center'>
                <a href='https://weather-app-arek.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Arkadiusz-Adamowicz/weather-app-react'>
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
  );
};

export default Work;
