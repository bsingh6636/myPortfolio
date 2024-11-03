import React, { useContext } from 'react';
import { EducationLan } from '../Language/EducationLan';
import { MyContext } from '..';

const Education = () => {
    const { language } = useContext(MyContext);
    const lan = EducationLan[language];

    return (
        <div className="text-white mt-10">
            <div className="flex justify-center text-2xl font-bold text-gray-400 mb-4 text-faster-one">
                <span className="text-8xl font-rubik-vinyl-regular animate-bounce max-sm:hidden">{lan.duration}</span>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mb-8 md:mb-0 w-full md:w-1/2">
                    <span 
                        className='uppercase font-extrabold text-5xl font-serif' 
                        style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '13px' }}
                    >
                        {lan.title}
                    </span>
                    <p className="w-4/5 max-md:w-full mt-10 text-lg text-gray-300 sm:text-lg">
                        {lan.description}
                    </p>
                </div>

                <div className="space-y-8 w-full mt-20 md:w-1/2">
                    <div>
                        <h3 className="text-3xl font-bold">{lan.previousSchool}</h3>
                        <p className="text-gray-400">{lan.previousSpecialization} | {lan.previousDuration}</p> 
                        <p className="text-gray-400">{lan.previousScore}</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">{lan.university}</h3>
                        <p className="text-gray-400">{lan.degree} | {lan.duration}</p>
                        <p className="text-gray-400">{lan.gpa}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
