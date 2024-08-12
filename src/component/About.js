import React from 'react'
import SkillsSection from './smallComponent/SkillsSection'


const About = () => {
    return (
        <div className='flex flex-row  py-3 md:py-3 max-sm:mx-0'>
            <div className="max-w-xs sm:max-w-sm md:max-w-lg mb-6 md:mb-0">
                <img src='./images/photo1.jpg' alt="Brijesh Singh" className="rounded-lg shadow-lg" />
            </div>
            <div className='ml-56'>
                <div ><span className='uppercase font-extrabold text-5xl font-serif ' style={{ borderBottom: '10px ridge rgb(96,165,250) ', paddingBottom: '25px' }}>my biography</span></div>
                <div className='mt-20'><span>I recently graduated with a degree in Computer Science and Engineering from KNS Institute of 
                    Technology. My portfolio includes full-stack projects like a Hospital Management System and a SwiggyClone, showcasing 
                    my proficiency in React, Node.js, Express, and MongoDB. I have a deep passion for web development and have honed my skills
                     in building responsive, user-friendly applications. My commitment to excellence and enthusiasm for learning drive me to 
                     continually improve and stay ahead in the rapidly evolving tech landscape.
                </span></div>
                <SkillsSection />

            </div>
        </div>
    )
}

export default About