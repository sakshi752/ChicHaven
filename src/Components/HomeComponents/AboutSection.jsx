import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const about=[
        {
            key:"left",
            img:"/public/about images/img1.jpg",
            aboutTitle:"Creative Harmonious Living",
            aboutDesc:"ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
        },
        {
            key:"right",
            img:"",
            aboutTitle:"Creative Harmonious Living",
            aboutDesc:"ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style."
        }
    ]
    return (
        <div className='flex items-center flex-col md:flex-row gap-10 mt-10 bg-gray-50 hover:bg-gray-100'>
            <div className=' max-w-[480px]'>
                <img className="w-full object-cover  shadow-md" src="public/hero images/live comfortably.jpg" alt="Creative Living" />
            </div>

            <div className='flexflex-col justify-center items-center pr-4 pl-4 pb-5'>
                <h1 className="text-3xl font-semibold text-gray-900">Creative Harmonious Living</h1>
                
                <div className='flex flex-col justify-center items-center '>
                    <p className="text-gray-600 mt-2 text-justify">ChicHaven products are all made to seamlessly fit into your day-to-day living, enhancing your space with comfort and style.</p>
                    <Link
                        to="/categories"
                        className="mt-4 px-6 py-2 bg-black text-white rounded shadow-md hover:bg-gray-95 transition-color duration-300">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
