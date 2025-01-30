import React, { useContext } from 'react'
import { MyContext } from '..';
import { AboutLan } from '../Language/AboutLan';
import Hover from './ImageHover';


const About = () => {
    const { language } = useContext(MyContext)
    const lan = AboutLan[language] ;
    const imageUrl = `${process.env.PUBLIC_URL}/images/photo1.jpg`;
    return (
    <div className='grid tw-grid-cols-1 md:grid-cols-2 py-3'>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src='./images/photo1.jpg' alt="Brijesh Singh" className="rounded-lg shadow-lg mx-auto md:hidden" />
            <Hover imageUrl={imageUrl} />
        </div>
        <div className='w-full mt-4 md:mt-0'>
            <div>
                <span className='uppercase font-extrabold text-3xl md:text-5xl font-serif border-b-4 md:border-b-8 border-blue-400 pb-2 md:pb-4'>
                  {lan.title}
                </span>
            </div>
            <div className='mt-10 md:mt-20'>
                <span>
                    {lan.description}
                </span>
            </div>
           
        </div>
    </div>
    
    )
}

export default About