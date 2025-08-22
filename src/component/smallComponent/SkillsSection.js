import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MyContext } from '../..';
import { Code, Database, Globe, Wrench } from 'lucide-react';
import { SkillsLan } from '../../Language/AboutLan';

const SkillsSection = () => {
  const { language } = useContext(MyContext);
  const lan = SkillsLan[language];

  // Icons for different categories
  const categoryIcons = {
    0: Code,        // Frontend
    1: Database,    // Backend
    2: Globe,       // Other/General
    3: Wrench,      // Tools
  };

  return (
    <div className="py-32">
      {/* Enhanced Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='text-center mb-20'
      >
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-400"></div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight'>
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {lan.title}
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-accent-400"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Enhanced Skills Grid */}
      <div className="max-w-6xl mx-auto space-y-16">
        {lan.categories.map((category, categoryIndex) => {
          const IconComponent = categoryIcons[categoryIndex] || Code;
          
          return (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-center md:justify-start mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group"
                  >
                    <div className="relative">
                      {/* Skill Card */}
                      <div className="bg-glass backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center transition-all duration-300 group-hover:bg-white/10 group-hover:border-primary-400/30 group-hover:shadow-glow">
                        {/* Skill Icon/Avatar */}
                        <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-xl flex items-center justify-center group-hover:from-primary-400/30 group-hover:to-accent-400/30 transition-all duration-300">
                          <span className="text-lg font-bold text-primary-300 group-hover:text-primary-200 transition-colors duration-300">
                            {skill.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        
                        {/* Skill Name */}
                        <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-400/0 to-accent-400/0 group-hover:from-primary-400/5 group-hover:to-accent-400/5 transition-all duration-300 pointer-events-none"></div>
                      </div>

                      {/* Floating Proficiency Indicator */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow">
                        <div className="w-full h-full bg-primary-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Additional Stats or CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <div className="inline-flex items-center px-6 py-3 bg-glass backdrop-blur-sm border border-white/20 rounded-2xl shadow-glass">
          <span className="text-gray-300 text-sm">
            Always learning and exploring new technologies
          </span>
          <div className="ml-3 w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsSection;