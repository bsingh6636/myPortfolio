import React, { useContext } from 'react';
import { MyContext } from '..';
import { AboutLan } from '../Language/AboutLan';

const About = () => {
    const { language } = useContext(MyContext);
    const lan = AboutLan[language];
    
    // Assuming the image is in the public folder as per your original code
    const imageUrl = `${process.env.PUBLIC_URL}/images/photo1.jpg`;

    return (
        // Section container for consistent padding and breathing room
        <div className='py-20 md:py-28'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-center'>
                
                {/* === Image Column === */}
                <div className="md:col-span-2 w-full">
                    {/* Wrapper to control image size and centering */}
                    <div className="mx-auto w-4/5 md:w-full max-w-sm">
                        <img 
                            src={imageUrl} 
                            alt="Your Name" // Remember to change this!
                            className="rounded-lg shadow-2xl w-full h-full object-cover aspect-square transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105" 
                        />
                    </div>
                </div>

                {/* === Text Content Column === */}
                <div className='md:col-span-3'>
                    <div className='mb-8'>
                        {/* Revamped Title with a modern accent line */}
                        <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
                            {lan.title}
                        </h2>
                        <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full'></div>
                    </div>
                    
                    <p className='text-gray-300 leading-relaxed text-lg'>
                        {lan.description}
                    </p>
                </div>

            </div>
        </div>
    );
}

export default About;