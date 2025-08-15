import React, { useContext } from 'react';
import { MyContext } from '..';
import { ExperienceLan } from '../Language/ExperienceLan';
import { Briefcase } from 'lucide-react'; // A professional icon for experience

const Experience = () => {
    const { language } = useContext(MyContext);
    const lan = ExperienceLan[language];

    return (
        <div className="py-20 md:py-28" id="experience">
            {/* === Section Title - Consistent with other sections === */}
            <div className='text-center mb-16'>
                <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
                    {lan.title}
                </h2>
                <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
            </div>

            {/* === Vertical Timeline Container === */}
            <div className="relative max-w-3xl mx-auto mt-16 pl-8">
                {/* The vertical line of the timeline */}
                <div className="absolute left-6 top-0 w-0.5 h-full bg-gray-700 ml-3.5"></div>

                {/* Map over the experiences to create timeline items */}
                {lan.experiences.map((exp, index) => {
                    // Separate the technologies from other responsibilities
                    const techString = exp.responsibilities.find(r => r.toLowerCase().startsWith('technologies used:'));
                    const responsibilities = exp.responsibilities.filter(r => !r.toLowerCase().startsWith('technologies used:'));
                    const technologies = techString ? techString.replace(/technologies used:/i, '').split(',').map(t => t.trim()) : [];

                    return (
                        <div key={index} className="relative mb-12">
                            {/* Timeline Dot and Icon */}
                            <div className="absolute -left-[0.6rem] top-1 w-8 h-8 bg-gray-900 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                               <Briefcase className="text-cyan-400" size={16} />
                            </div>
                            
                            {/* Timeline Card with experience details */}
                            <div className="p-6 bg-gray-800/50 border border-white/10 rounded-lg shadow-lg ml-12">
                                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                <p className="text-md font-semibold text-cyan-400 my-1">{exp.company}</p>
                                <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                                
                                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                    {responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>

                                {technologies.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-white/10">
                                        <div className="flex flex-wrap gap-2">
                                            {technologies.map((tech, idx) => (
                                                <span key={idx} className="bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;