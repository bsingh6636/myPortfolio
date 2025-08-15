import React, { useContext } from 'react';
import { MyContext } from '..';
import { EducationLan } from '../Language/EducationLan';
import { GraduationCap, School } from 'lucide-react'; // Icons for each card

const Education = () => {
    const { language } = useContext(MyContext);
    const lan = EducationLan[language];

    return (
        <div className="py-20 md:py-28">
            {/* === Section Title - Consistent with other sections === */}
            <div className='text-center mb-16'>
                <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
                    {lan.title}
                </h2>
                <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
                <p className="max-w-3xl mx-auto mt-8 text-lg text-gray-300">
                    {lan.description}
                </p>
            </div>

            {/* === Education Cards Container === */}
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">

                {/* --- University Card --- */}
                <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6 flex flex-col hover:border-cyan-400/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <GraduationCap className="text-cyan-400" size={32} />
                        <span className="font-semibold text-sm text-cyan-400">{lan.duration}</span>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">{lan.university}</h3>
                        <p className="text-gray-300">{lan.degree}</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 pt-4 border-t border-white/10">{lan.gpa}</p>
                </div>

                {/* --- Previous School Card --- */}
                <div className="bg-gray-800/50 border border-white/10 rounded-lg p-6 flex flex-col hover:border-cyan-400/50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <School className="text-cyan-400" size={32} />
                        <span className="font-semibold text-sm text-cyan-400">{lan.previousDuration}</span>
                    </div>
                    <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2">{lan.previousSchool}</h3>
                        <p className="text-gray-300">{lan.previousSpecialization}</p>
                    </div>
                    <p className="text-gray-400 text-sm mt-4 pt-4 border-t border-white/10">{lan.previousScore}</p>
                </div>

            </div>
        </div>
    );
}

export default Education;