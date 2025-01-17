import React, { useContext } from 'react'; // Adjust path as necessary
import { MyContext } from '..';
import { ExperienceLan } from '../Language/ExperienceLan';

const Experience = () => {
    const { language } = useContext(MyContext);
    const lan = ExperienceLan[language];

    return (
        <div className="text-white mt-20">
            <span 
                className='uppercase font-extrabold text-5xl font-serif' 
                style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '25px' }}
            >
                {lan.title}
            </span>
            
            <div className="mt-14 space-y-12">
                {lan.experiences.map((experience, index) => (
                    <div key={index} className="flex flex-col md:flex-row md:space-x-12">
                        <div className="md:w-1/2 flex flex-col lg:flex-row items-center md:items-start text-3xl font-bold">
                            <div className="flex flex-row items-center justify-center md:justify-start">
                                <span className="material-symbols-outlined text-5xl md:text-6xl -mr-3 md:-mr-5 text-blue-500 animate-pulse">
                                    arrow_forward_ios
                                </span>
                                <span className="text-blue-500 text-5xl md:text-6xl -ml-3 md:-ml-5 material-symbols-outlined animate-pulse">
                                    arrow_forward_ios
                                </span>
                            </div>
                            <div className='flex flex-col mt-2 md:ml-6 text-center md:text-left'>
                                <span className="hover:text-blue-500 transition duration-300 ease-in-out">{experience.company}</span>
                                <span className='text-2xl text-gray-400'>{experience.role} | {experience.duration}</span>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 md:mt-0">
                            <ul className="text-gray-300 list-disc ml-5">
                                {experience.responsibilities.map((responsibility, idx) => (
                                    <li key={idx}>{responsibility}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
