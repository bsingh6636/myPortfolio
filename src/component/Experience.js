import React, { useContext, memo } from 'react';
import { motion } from 'framer-motion';
import { MyContext } from '..';
import { ExperienceLan } from '../Language/ExperienceLan';
import { Briefcase, Calendar, Building, MapPin, CheckCircle, Zap } from 'lucide-react';
import { useInView, useAnimationVariants } from '../hooks/usePerformance';
import { useTheme } from '../contexts/ThemeContext';

const Experience = memo(() => {
    const { language } = useContext(MyContext);
    const { isDark } = useTheme();
    const lan = ExperienceLan[language];
    const [ref, inView] = useInView();
    const variants = useAnimationVariants();

    return (
        <div className="py-32" id="experience" ref={ref}>
            {/* Enhanced Section Header */}
            <motion.div 
                initial={variants.fadeIn.initial}
                animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
                transition={variants.fadeIn.transition}
                className='text-center mb-20'
            >
                <div className="flex items-center justify-center space-x-4 mb-6">
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-400"></div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight'>
                        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            {lan.title}
                        </span>
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-accent-400"></div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                    My professional journey and key accomplishments
                </p>
            </motion.div>

            {/* Enhanced Timeline */}
            <div className="relative max-w-5xl mx-auto">
                {/* Animated Timeline Line */}
                <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 w-1 h-full">
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                    <motion.div 
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary-400 to-accent-400 rounded-full"
                        initial={{ height: 0 }}
                        animate={inView ? { height: '100%' } : { height: 0 }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />
                </div>

                {/* Experience Items */}
                <div className="space-y-16">
                    {lan.experiences.map((exp, index) => {
                        // Parse technologies and responsibilities
                        const techString = exp.responsibilities.find(r => r.toLowerCase().startsWith('technologies used:'));
                        const responsibilities = exp.responsibilities.filter(r => !r.toLowerCase().startsWith('technologies used:'));
                        const technologies = techString ? techString.replace(/technologies used:/i, '').split(',').map(t => t.trim()) : [];

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={variants.slideUp.initial}
                                animate={inView ? variants.slideUp.animate : variants.slideUp.initial}
                                transition={{ ...variants.slideUp.transition, delay: index * 0.2 }}
                                className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline Dot - Enhanced */}
                                <div className="absolute left-6 md:left-1/2 md:-ml-6 w-12 h-12 z-10">
                                    <motion.div 
                                        className="w-full h-full bg-white dark:bg-dark-900 border-4 border-primary-400 rounded-full flex items-center justify-center shadow-lg"
                                        initial={{ scale: 0 }}
                                        animate={inView ? { scale: 1 } : { scale: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                    >
                                        <Briefcase className="w-5 h-5 text-primary-400" />
                                    </motion.div>
                                </div>

                                {/* Experience Card */}
                                <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:mr-12' : 'md:ml-12'}`}>
                                    <div className="group relative">
                                        {/* Background glow effect */}
                                        <div className="absolute -inset-2 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        
                                        {/* Main Card */}
                                        <div className="relative bg-white/70 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-500 hover:shadow-card-hover hover:border-primary-400/30 dark:hover:border-primary-400/30">
                                            
                                            {/* Header */}
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="flex-1">
                                                    <div className="flex items-center space-x-2 mb-2">
                                                        <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider px-3 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                                                            {index === 0 ? 'Current' : 'Previous'}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
                                                        {exp.role}
                                                    </h3>
                                                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-4">
                                                        <div className="flex items-center space-x-1">
                                                            <Building className="w-4 h-4" />
                                                            <span className="font-semibold text-accent-500">{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                                                        <div className="flex items-center space-x-1">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{exp.duration}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-1">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>Remote</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Responsibilities */}
                                            <div className="mb-6">
                                                <h4 className="flex items-center text-gray-900 dark:text-white font-semibold mb-3">
                                                    <Zap className="w-4 h-4 mr-2 text-accent-400" />
                                                    Key Responsibilities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {responsibilities.map((item, idx) => (
                                                        <motion.li 
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                            transition={{ duration: 0.3, delay: index * 0.2 + idx * 0.1 + 0.5 }}
                                                            className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                                                        >
                                                            <CheckCircle className="w-4 h-4 text-primary-400 mt-0.5 flex-shrink-0" />
                                                            <span className="text-sm leading-relaxed">{item}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Technologies */}
                                            {technologies.length > 0 && (
                                                <motion.div 
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.3, delay: index * 0.2 + 0.8 }}
                                                    className="pt-6 border-t border-gray-200 dark:border-white/10"
                                                >
                                                    <h4 className="text-gray-900 dark:text-white font-semibold mb-3 text-sm">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {technologies.map((tech, idx) => (
                                                            <span 
                                                                key={idx} 
                                                                className="bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-400/30 text-primary-700 dark:text-primary-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-primary-200 dark:hover:bg-primary-400/20 transition-colors duration-300"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for timeline balance */}
                                <div className="hidden md:block w-5/12"></div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Career Stats */}
                <motion.div
                    initial={variants.fadeIn.initial}
                    animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
                    transition={{ ...variants.fadeIn.transition, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center px-6 py-3 bg-white/50 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl shadow-glass">
                        <Briefcase className="w-5 h-5 text-primary-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            {lan.experiences.length}+ years of professional experience in software development
                        </span>
                        <div className="ml-3 w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

Experience.displayName = 'Experience';

export default Experience;