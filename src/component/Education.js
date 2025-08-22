import React, { useContext, memo } from 'react';
import { motion } from 'framer-motion';
import { MyContext } from '..';
import { EducationLan } from '../Language/EducationLan';
import { GraduationCap, School, Calendar, Award, MapPin } from 'lucide-react';
import { useInView, useAnimationVariants } from '../hooks/usePerformance';
import { useTheme } from '../contexts/ThemeContext';

const Education = memo(() => {
    const { language } = useContext(MyContext);
    const { isDark } = useTheme();
    const lan = EducationLan[language];
    const [ref, inView] = useInView();
    const variants = useAnimationVariants();

    const educationData = [
        {
            id: 'university',
            icon: GraduationCap,
            iconColor: 'text-primary-400',
            bgGradient: 'from-primary-500/20 to-accent-500/20',
            title: lan.university,
            subtitle: lan.degree,
            duration: lan.duration,
            score: lan.gpa,
            type: 'University',
            location: 'India'
        },
        {
            id: 'school',
            icon: School,
            iconColor: 'text-accent-400',
            bgGradient: 'from-accent-500/20 to-primary-500/20',
            title: lan.previousSchool,
            subtitle: lan.previousSpecialization,
            duration: lan.previousDuration,
            score: lan.previousScore,
            type: 'High School',
            location: 'India'
        }
    ];

    return (
        <div className="py-32" ref={ref}>
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
                    {lan.description || "My educational journey and academic achievements"}
                </p>
            </motion.div>

            {/* Enhanced Education Timeline */}
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {educationData.map((item, index) => {
                        const IconComponent = item.icon;
                        
                        return (
                            <motion.div
                                key={item.id}
                                initial={variants.slideUp.initial}
                                animate={inView ? variants.slideUp.animate : variants.slideUp.initial}
                                transition={{ ...variants.slideUp.transition, delay: index * 0.2 }}
                                className="group"
                            >
                                <div className="relative">
                                    {/* Background decorative element */}
                                    <div className="absolute -inset-2 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl blur-xl"
                                         style={{
                                           background: `linear-gradient(135deg, ${item.id === 'university' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(217, 70, 239, 0.2)'} 0%, ${item.id === 'university' ? 'rgba(217, 70, 239, 0.2)' : 'rgba(56, 189, 248, 0.2)'} 100%)`
                                         }}></div>
                                    
                                    {/* Main Card */}
                                    <div className="relative bg-white/50 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:bg-white/70 dark:hover:bg-white/5 transition-all duration-500 hover:shadow-card-hover hover:border-primary-400/30 dark:hover:border-primary-400/30 h-full flex flex-col">
                                        
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            <div className="flex items-center space-x-4">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${item.bgGradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className={`${item.iconColor} w-8 h-8`} />
                                                </div>
                                                <div>
                                                    <div className="flex items-center space-x-2 mb-1">
                                                        <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider px-2 py-1 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                                                            {item.type}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                                                        <Calendar className="w-4 h-4 mr-1" />
                                                        <span>{item.duration}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow space-y-4">
                                            <div>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors duration-300">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                                    {item.subtitle}
                                                </p>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center text-gray-500 dark:text-gray-400">
                                                <MapPin className="w-4 h-4 mr-2" />
                                                <span className="text-sm">{item.location}</span>
                                            </div>
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <Award className="w-5 h-5 text-accent-500" />
                                                    <span className="font-semibold text-gray-900 dark:text-white">
                                                        {item.score}
                                                    </span>
                                                </div>
                                                
                                                {/* Progress Indicator */}
                                                <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                                    <motion.div 
                                                        className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
                                                        initial={{ width: 0 }}
                                                        animate={inView ? { width: item.id === 'university' ? '95%' : '90%' } : { width: 0 }}
                                                        transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Stats Section */}
                <motion.div
                    initial={variants.fadeIn.initial}
                    animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
                    transition={{ ...variants.fadeIn.transition, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center px-6 py-3 bg-white/50 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl shadow-glass">
                        <GraduationCap className="w-5 h-5 text-primary-400 mr-3" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                            Continuous learner with strong academic foundation
                        </span>
                        <div className="ml-3 w-2 h-2 bg-primary-400 rounded-full animate-bounce"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
});

Education.displayName = 'Education';

export default Education;