import React from 'react'
import SkillsSection from './smallComponent/SkillsSection'


const About = () => {
    return (
        <div className='flex flex-row px-6 sm:px-8 md:px-16 py-3 md:py-3'>
            <div className="max-w-xs sm:max-w-sm md:max-w-lg mb-6 md:mb-0">
                <img src='./images/photo2.jpg' alt="Brijesh Singh" className="rounded-lg shadow-lg" />
            </div>
            <div className='ml-56'>
                <div ><span className='uppercase font-extrabold text-5xl font-serif '  style={{ borderBottom: '10px ridge rgb(96,165,250) ', paddingBottom: '25px' }}>my biography</span></div>
                <div className='mt-20'><span>A passionate Full Stack Web Developer with a Bachelor's degree in Computer Science and hands-on experience in web development. Proficient in ReactJS, Java and cloud technologies such as AWS. Experienced in optimizing
                    performance and integrating efficient data retrieval systems. Enthusiastic about ensuring software quality,
                    implementing best practices, and working in Agile and DevOps environments
                </span></div>
                <SkillsSection/>
                
            </div>
        </div>
    )
}

export default About