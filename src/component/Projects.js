import React, { useEffect, useState, useContext } from 'react';
import { ProjectsLan } from '../Language/ProjectsLan';
import { MyContext } from '..';
import { Globe, Github } from 'lucide-react'; // Icons for project links

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
        <div className='py-20 md:py-28'>
            {/* === Section Title - Consistent with other sections === */}
            <div className='text-center mb-16'>
                <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
                    {lan.title}
                </h2>
                <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
            </div>

            {/* === Projects Grid === */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredGithubRepos.slice(0, visibleProjects).map((repo) => (
                    <div key={repo.id} className='bg-gray-800/50 border border-white/10 rounded-lg shadow-lg overflow-hidden group flex flex-col'>
                        <div className="overflow-hidden">
                            <img className='w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' src={projects[repo.name]} alt={repo.name} />
                        </div>
                        <div className='p-6 flex flex-col flex-grow'>
                            <h3 className='text-xl font-bold text-white mb-2'>{repo.name.replace(/[-_]/g, ' ')}</h3>
                            <p className='text-gray-300 text-sm mb-4 flex-grow'>{repo.description}</p>
                            
                            {/* Topics/Tags */}
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {repo.topics.map((topic, index) => (
                                    <span key={index} className='bg-cyan-900/50 text-cyan-300 text-xs font-medium px-2.5 py-1 rounded-full'>
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Links with Icons */}
                            <div className='mt-auto pt-4 border-t border-white/10 flex items-center justify-end gap-4'>
                                {repo.homepage && (
                                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                        <Globe size={24} />
                                    </a>
                                )}
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                                    <Github size={24} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* === Show More/Less Button === */}
            {filteredGithubRepos.length > 3 && (
                <div className='mt-16 flex justify-center'>
                    <button
                        onClick={handleToggleProjects}
                        className='text-cyan-400 border border-cyan-400 font-bold py-2 px-8 rounded-full hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300'
                    >
                        {visibleProjects === 3 ? lan.showMore : lan.showLess}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Projects;