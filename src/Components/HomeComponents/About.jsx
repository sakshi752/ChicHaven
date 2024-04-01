import React from 'react';
import { Link } from 'react-router-dom';

const About = ({ aboutKey, img, aboutTitle, aboutdesc }) => {
  return (
    (aboutKey === 'left') ? (
      <div className='flex items-center flex-col md:flex-row gap-5 mt-10 bg-gray-50 hover:bg-gray-100'>
        <div className='max-w-[350px] flex justify-center items-center'>
          <img className="w-full object-cover shadow-md rounded" src={img} alt={aboutTitle} />
        </div>

        <div className='flex flex-col justify-center items-center pr-4 pl-4 pb-5'>
          <h1 className="text-3xl font-semibold text-gray-900">
            {aboutTitle}
          </h1>

          <div className='flex flex-col justify-center items-center '>
            <p className="text-gray-600 mt-2 text-justify">{aboutdesc}</p>
            <Link
              to="/categories"
              className="mt-4 px-6 py-2 bg-black text-white rounded shadow-md hover:bg-gray-95 transition-color duration-300">Shop Now</Link>
          </div>
        </div>
      </div>
    ) : (
      <div className='flex items-center  md:flex-row flex-col-reverse gap-5 mt-10 bg-gray-50 hover:bg-gray-100'>
        <div className='flex flex-col justify-center items-center pr-4 pl-4 pb-5'>
          <h1 className="text-3xl font-semibold text-gray-900">
            {aboutTitle}
          </h1>

          <div className='flex flex-col justify-center items-center '>
            <p className="text-gray-600 mt-2 text-justify">{aboutdesc}</p>
            <Link
              to="/categories"
              className="mt-4 px-6 py-2 bg-black text-white rounded shadow-md hover:bg-gray-95 transition-color duration-300">Shop Now</Link>
          </div>
        </div>
        <div className='max-w-[350px] flex justify-center items-center'>
          <img className="w-full object-cover shadow-md rounded" src={img} alt={aboutTitle} />
        </div>
      </div>
    )
  );
}

export default About;
