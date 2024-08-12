import React from 'react';

const Education = () => {
    return (
        <div className="text-white mt-10 ">
            <div className="flex justify-center text-2xl font-bold text-gray-400 mb-4 text-faster-one">
                <span className="text-8xl font-rubik-vinyl-regular animate-pulse">2018 - 2024</span>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mb-8 md:mb-0 w-full md:w-1/2">
                    <span 
                        className='uppercase font-extrabold text-5xl font-serif' 
                        style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '13px' }}
                    >
                        Education
                    </span>
                    <p className="w-4/5 mt-10 text-lg text-gray-300 sm:text-lg">
                    I completed my Bachelor of Engineering in Computer Science from KNS Institute of Technology (2020-2024), achieving a 7.5 GPA.
                     Prior to this, I completed my 10+2 education at Capital College of Research Center, specializing in Science, where I secured 75%. 
                     My academic journey has equipped me with a strong foundation in computer science principles and practical development skills,
                     which I have applied in various real-world projects.
                    </p>
                </div>

                <div className="space-y-8 w-full mt-20 md:w-1/2">
                    <div>
                        <h3 className="text-3xl font-bold">Capital College of Research Center</h3>
                        <p className="text-gray-400">Science Student (10+2) | 2018-2020</p> 
                        <p className="text-gray-400">Scored 75%</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold">KNS Institute of Technology</h3>
                        <p className="text-gray-400">Bachelor of Engineering in Computer Science | 2020-2024</p>
                        <p className="text-gray-400">7.5 GPA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
