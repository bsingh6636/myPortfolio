import React, { useContext } from 'react';
import { MyContext } from '../..';
import { TerminalSquare } from 'lucide-react'; // A nice icon for skills
import { SkillsLan } from '../../Language/AboutLan';

const SkillsSection = () => {
  const { language } = useContext(MyContext);
  const lan = SkillsLan[language];

  return (
    <div className="py-20 md:py-28">
      {/* === Section Title - Consistent with other sections === */}
      <div className='text-center mb-16'>
        <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
          {lan.title}
        </h2>
        <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
      </div>

      {/* === Skills Grid === */}
      <div className="container mx-auto space-y-12 max-w-4xl">
        
        {/* We map over the categories array to dynamically create each section */}
        {lan.categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-white mb-6 text-center md:text-left">{category.title}</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              
              {/* We map over the skills in each category to create the pills */}
              {category.skills.map(skill => (
                <div 
                  key={skill} 
                  className="flex items-center gap-2 bg-gray-800/50 border border-white/10 px-4 py-2 rounded-lg text-gray-300 transition-all duration-300 cursor-default hover:bg-cyan-400/10 hover:text-cyan-300 hover:border-cyan-400/30"
                >
                  <TerminalSquare size={18} className="text-cyan-400" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;