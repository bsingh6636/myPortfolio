import React, { useEffect, useState, useContext } from 'react';
import { ProjectsLan } from '../Language/ProjectsLan';

import { MyContext } from '..';

const Projects = () => {
    const { language } = useContext(MyContext);
    const lan = ProjectsLan[language];

    const projects = {
        'Stock_Market': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
        'NetflixGpt': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416500/projects/NetflixGpt.png',
        'YouTube_Project': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416542/projects/YouTube%20Clone.png',
        'swiggy.clone': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477113/projects/swiggy.clone.png',
        'ShopifyOrder-FrontEnd': 'https://res.cloudinary.com/bsingh6636/image/upload/v1724309642/projects/shopifyProject.png',
        'EduCors-Helper': 'https://res.cloudinary.com/bsingh6636/image/upload/v1728199901/travelPlannerProject/x1nekxuithyrjrqqawgy.png',
        'travel_planner.weather_dashboard': 'https://res.cloudinary.com/bsingh6636/image/upload/v1728201066/travelPlannerProject/ptiuqg3nuspbcrrr9s3f.png'
    };

    const [filteredGithubRepos, setFilteredGithubRepos] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        (async function fetchProject() {
            try {
                const response = await fetch('https://api.github.com/users/bsingh6636/repos');
                const data = await response.json();
                const filteredData = data.filter((d) => projects.hasOwnProperty(d.name));
                setFilteredGithubRepos(filteredData);
            } catch (error) {
                console.log('error fetching repo list' + error)
            }
        })();
        // eslint-disable-next-line
    }, []);

    const handleShowMore = () => {
        setVisibleProjects(filteredGithubRepos.length);
        setShowAll(true);
    };

    const handleShowLess = () => {
        setVisibleProjects(3);
        setShowAll(false);
    };

    return filteredGithubRepos === null ? null : (
        <div className='mt-20'>
            <span className='uppercase font-extrabold text-3xl md:text-5xl font-serif border-b-4 md:border-b-8 border-blue-400 pb-2 md:pb-4'>
                {lan.title}
            </span>
            <div className='flex flex-wrap justify-center md:justify-start'>
                {filteredGithubRepos.slice(0, visibleProjects).map((repo) => (
                    <div key={repo.name} className='mt-10 p-4 w-full sm:w-1/2 lg:w-1/3'>
                        <div className='bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-101 transition-transform duration-500 ease-out'>
                            <img className='w-full h-48 object-cover transition-transform duration-500 ease-out hover:scale-110' src={projects[repo.name]} alt={repo.name} />
                            <div className='p-4'>
                                <h1 className='text-2xl font-bold text-green-600 mb-2 shadow-md p-1 rounded-md'>{repo.name}</h1>
                                <p className='text-lg text-gray-800 mb-4 shadow-sm p-1 rounded-md max-md:text-xs'>{repo.description}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {repo.topics.map((topic, index) => (
                                        <span key={index} className='bg-blue-100 text-blue-600 text-sm font-semibold py-1 px-2 rounded-lg shadow-md'>
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                                <h1 className='mb-2'>
                                    <span className='text-indigo-600 font-medium'>{lan.liveLink}</span>
                                    <span className='text-indigo-400 cursor-pointer hover:underline hover:text-indigo-500 transition-colors duration-300' onClick={() => window.open(repo.homepage)}>
                                        {repo.homepage}
                                    </span>
                                </h1>
                                <h1>
                                    <span className='text-indigo-600 font-medium'>{lan.githubRepo}</span>
                                    <span className='text-indigo-400 cursor-pointer hover:underline hover:text-indigo-500 transition-colors duration-300' onClick={() => window.open(repo.clone_url)}>
                                        {repo.clone_url}
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button to toggle more or less projects */}
            <div className='mt-10 flex justify-center'>
                {!showAll ? (
                    <button
                        onClick={handleShowMore}
                        className='bg-indigo-500 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-600 transition duration-300 ease-in-out'
                    >
                        {lan.showMore}
                    </button>
                ) : (
                    <button
                        onClick={handleShowLess}
                        className='bg-red-500 text-white font-bold py-2 px-6 rounded-full hover:bg-red-600 transition duration-300 ease-in-out'
                    >
                        {lan.showLess}
                    </button>
                )}
            </div>
        </div>
    );
}

export default Projects;
