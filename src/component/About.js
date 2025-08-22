import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MyContext } from '..';
import { AboutLan } from '../Language/AboutLan';

const About = () => {
    const { language } = useContext(MyContext);
    const lan = AboutLan[language];
    
    const imageUrl = `${process.env.PUBLIC_URL}/images/photo1.jpg`;

    return (
        <div className='py-32'>
            {/* Section Header */}
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
                    Get to know me better and discover my journey
                </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto'>
                
                {/* Enhanced Image Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative max-w-md mx-auto">
                        {/* Background decorative elements */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-2xl"></div>
                        <div className="absolute top-4 -right-4 w-20 h-20 bg-primary-400/30 rounded-full blur-xl animate-float"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-400/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
                        
                        {/* Image container with enhanced styling */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl opacity-75"></div>
                            <img 
                                src={imageUrl} 
                                alt="Professional headshot"
                                className="relative w-full aspect-square object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 filter grayscale hover:grayscale-0" 
                            />
                            
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Floating stats cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -top-8 -right-8 bg-glass backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-glass hidden md:block"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary-400">2+</div>
                                <div className="text-xs text-gray-300 uppercase tracking-wider">Years Exp</div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7 }}
                            className="absolute -bottom-8 -left-8 bg-glass backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-glass hidden md:block"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-accent-400">15+</div>
                                <div className="text-xs text-gray-300 uppercase tracking-wider">Projects</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Enhanced Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className='space-y-8'
                >
                    {/* Story paragraphs with better typography */}
                    <div className="space-y-6">
                        <p className='text-gray-300 leading-relaxed text-lg md:text-xl font-light'>
                            {lan.description}
                        </p>
                        
                        {/* Additional content sections */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
                            <div className="p-6 bg-glass backdrop-blur-sm border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Fast Learner</h3>
                                <p className="text-gray-400 text-sm">Always eager to learn new technologies and best practices</p>
                            </div>

                            <div className="p-6 bg-glass backdrop-blur-sm border border-white/10 rounded-2xl group hover:bg-white/5 transition-all duration-300">
                                <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-white font-semibold mb-2">Team Player</h3>
                                <p className="text-gray-400 text-sm">Collaborate effectively with cross-functional teams</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="pt-6"
                    >
                        <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:scale-105">
                            <span>Let's Connect</span>
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    );
}

export default About;