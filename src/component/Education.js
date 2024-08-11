import React from 'react';

const Education = () => {
    return (
        <div className=" text-white p-8">
            <div className="flex justify-center text-2xl font-bold text-gray-400 mb-4">
                <span className="text-white text-8xl text-faster-one">2018-2024</span>
            </div>

            <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mb-8 md:mb-0 w-1/2">
                <span className='uppercase font-extrabold text-5xl font-serif '  style={{ borderBottom: '10px ridge rgb(96,165,250) ', paddingBottom: '13px' }}>Education</span>
                    <p className="w-4/5 mt-10 text-lg text-gray-300 sm:text-lg">
                        I am excited to apply for the Frontend Developer Internship at The Dotix. With my proficiency in HTML, CSS,
                        and JavaScript, along with my passion for web development, I am confident in my ability to contribute effectively
                        to your team. I am eager to bring my skills and enthusiasm to The Dotix and support your mission in delivering maximum ROI for your clients.
                    </p>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold">Capital College of Research Center</h3>
                        <p className="text-gray-400">2018-2020</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">KNS Institute of Technology</h3>
                        <p className="text-gray-400">2020-2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
