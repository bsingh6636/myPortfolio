import React from 'react'
import SkillsSection from './smallComponent/SkillsSection'


const About = () => {
    return (
        <div className='flex flex-col md:flex-row py-3'>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <img src='./images/photo1.jpg' alt="Brijesh Singh" className="rounded-lg shadow-lg mx-auto" />
        </div>
        <div className='w-full md:w-2/3 md:ml-8 mt-4 md:mt-0'>
            <div>
                <span className='uppercase font-extrabold text-3xl md:text-5xl font-serif border-b-4 md:border-b-8 border-blue-400 pb-2 md:pb-4'>
                    my biography
                </span>
            </div>
            <div className='mt-10 md:mt-20'>
                <span>
                    I recently graduated with a degree in Computer Science and Engineering from KNS Institute of 
                    Technology. My portfolio includes full-stack projects like a Hospital Management System and a SwiggyClone, showcasing 
                    my proficiency in React, Node.js, Express, and MongoDB. I have a deep passion for web development and have honed my skills
                    in building responsive, user-friendly applications. My commitment to excellence and enthusiasm for learning drive me to 
                    continually improve and stay ahead in the rapidly evolving tech landscape.
                </span>
            </div>
            <SkillsSection />
        </div>
    </div>
    
    )
}

export default About