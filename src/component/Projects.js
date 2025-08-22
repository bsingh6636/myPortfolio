import React, { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ProjectsLan } from '../Language/ProjectsLan';
import { MyContext } from '..';
import { Globe, Github } from 'lucide-react';

const Projects = () => {
    const { language } = useContext(MyContext);
    const lan = ProjectsLan[language];

    // This object mapping repo names to images is a great approach!
    const projects = {
        'Stock_Market': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
        'NetflixGpt': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416500/projects/NetflixGpt.png',
        'YouTube_Project': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416542/projects/YouTube%20Clone.png',
        'swiggy.clone': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477113/projects/swiggy.clone.png',
        'ShopifyOrder-FrontEnd': 'https://res.cloudinary.com/bsingh6636/image/upload/v1724309642/projects/shopifyProject.png',
        'EduCors-Helper': 'https://res.cloudinary.com/bsingh6636/image/upload/v1728199901/travelPlannerProject/x1nekxuithyrjrqqawgy.png',
        'travel_planner.weather_dashboard': 'https://res.cloudinary.com/bsingh6636/image/upload/v1728201066/travelPlannerProject/ptiuqg3nuspbcrrr9s3f.png'
    };

    const [filteredGithubRepos, setFilteredGithubRepos] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(3);

    // Your fetching logic is perfect, no changes needed here.
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch('https://api.github.com/users/bsingh6636/repos');
                const data = await response.json();
                const filteredData = data
                    .filter((d) => projects.hasOwnProperty(d.name))
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort by most recent
                setFilteredGithubRepos(filteredData);
            } catch (error) {
                console.error('Error fetching repo list: ' + error);
            }
        };
        fetchProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleToggleProjects = () => {
        setVisibleProjects(prev => prev === 3 ? filteredGithubRepos.length : 3);
    };

    if (filteredGithubRepos.length === 0) {
        return null; // Or a loading spinner
    }

    return (
        <div className='py-32'>
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
                    A showcase of my recent work and creative solutions
                </p>
            </motion.div>

            {/* Enhanced Projects Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
                {filteredGithubRepos.slice(0, visibleProjects).map((repo, index) => (
                    <motion.div 
                        key={repo.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className='group'
                    >
                        <div className='bg-glass backdrop-blur-sm border border-white/10 rounded-3xl shadow-glass overflow-hidden hover:bg-white/5 transition-all duration-500 hover:shadow-card-hover hover:border-white/20 flex flex-col h-full'>
                            {/* Image Section with Enhanced Hover */}
                            <div className="relative overflow-hidden rounded-t-3xl">
                                <img 
                                    className='w-full h-56 object-cover transition-all duration-700 group-hover:scale-110' 
                                    src={projects[repo.name]} 
                                    alt={repo.name} 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                
                                {/* Floating Live/Demo Badge */}
                                {repo.homepage && (
                                    <div className="absolute top-4 right-4 bg-primary-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                        Live Demo
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className='p-6 flex flex-col flex-grow space-y-4'>
                                {/* Project Title */}
                                <h3 className='text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300'>
                                    {repo.name.replace(/[-_]/g, ' ')}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-300 text-sm leading-relaxed flex-grow'>
                                    {repo.description}
                                </p>
                                
                                {/* Tech Stack Tags */}
                                <div className='flex flex-wrap gap-2'>
                                    {repo.topics.slice(0, 4).map((topic, index) => (
                                        <span 
                                            key={index} 
                                            className='bg-primary-900/30 border border-primary-400/30 text-primary-300 text-xs font-medium px-3 py-1 rounded-full hover:bg-primary-400/20 transition-colors duration-300'
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                    {repo.topics.length > 4 && (
                                        <span className='text-gray-400 text-xs font-medium px-2 py-1'>
                                            +{repo.topics.length - 4} more
                                        </span>
                                    )}
                                </div>
                                
                                {/* Action Links */}
                                <div className='flex items-center justify-between pt-4 border-t border-white/10'>
                                    <div className="flex items-center space-x-4">
                                        {repo.homepage && (
                                            <a 
                                                href={repo.homepage} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="group/link inline-flex items-center text-primary-400 hover:text-primary-300 transition-all duration-300"
                                            >
                                                <Globe size={18} className="mr-2 group-hover/link:rotate-12 transition-transform duration-300" />
                                                <span className="text-sm font-medium">Live Demo</span>
                                            </a>
                                        )}
                                        <a 
                                            href={repo.html_url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="group/link inline-flex items-center text-gray-400 hover:text-white transition-all duration-300"
                                        >
                                            <Github size={18} className="mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                                            <span className="text-sm font-medium">Code</span>
                                        </a>
                                    </div>

                                    {/* View Details Arrow */}
                                    <button className="p-2 rounded-full bg-white/5 hover:bg-primary-500/20 border border-white/10 hover:border-primary-400/30 transition-all duration-300 group/btn">
                                        <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-primary-400 group-hover/btn:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Enhanced Show More/Less Button */}
            {filteredGithubRepos.length > 3 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='mt-16 flex justify-center'
                >
                    <button
                        onClick={handleToggleProjects}
                        className='group inline-flex items-center px-8 py-4 bg-glass backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-primary-400/50 transition-all duration-300 shadow-glass hover:shadow-glow'
                    >
                        <span>{visibleProjects === 3 ? lan.showMore : lan.showLess}</span>
                        <svg 
                            className={`w-5 h-5 ml-2 transition-transform duration-300 ${visibleProjects === 3 ? 'rotate-0' : 'rotate-180'}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </motion.div>
            )}
        </div>
    );
}

export default Projects;