import React, { useEffect, useState } from 'react'


const Projects = () => {

    const projects = {
        'Stock_Market': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
        'NetflixGpt': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416500/projects/NetflixGpt.png',
        'YouTube_Project': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416542/projects/YouTube%20Clone.png',
        'swiggy.clone': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477113/projects/swiggy.clone.png',
        'myPortfolio': 'https://res.cloudinary.com/bsingh6636/image/upload/v1724309730/projects/portFolio.png',
        'ShopifyOrder-FrontEnd': 'https://res.cloudinary.com/bsingh6636/image/upload/v1724309642/projects/shopifyProject.png'
    }
    const [filteredGithubRepos, setFilteredGithubRepos] = useState(null)
    useEffect(() => {
        (async function fetchProject() {
            const response = await fetch('https://api.github.com/users/bsingh6636/repos')
            const data = await response.json()
            const filteredData = data.filter((d) => projects.hasOwnProperty(d.name))
            setFilteredGithubRepos(filteredData)
        })();
        // eslint-disable-next-line
    }, [])

    return filteredGithubRepos === null ? null : (
        <div className='mt-20'>
            <span className='uppercase font-extrabold text-3xl md:text-5xl font-serif border-b-4 md:border-b-8 border-blue-400 pb-2 md:pb-4'>
                Projects
            </span>
            <div className='flex flex-wrap justify-center md:justify-start'>
                {
                    filteredGithubRepos.map((repo) => (
                        <div key={repo.name} className='mt-10 p-2 w-full sm:w-1/2 lg:w-1/3'>
                            <div className='rounded-3xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-out'>
                                <img className='w-full p-2' src={projects[repo.name]} alt={repo.name} />
                            </div>
                            <h1 className='text-2xl p-2 text-green-500 font-bold'>{repo.name}</h1>
                            <h1 className='p-2 break-words ml-2'>
                                Live Link:
                                <span className='text-indigo-400 cursor-pointer hover:underline' onClick={() => window.open(repo.homepage)}>
                                    {repo.homepage}
                                </span>
                            </h1>
                            <h1 className='p-2 w-full sm:w-fit break-words ml-2'>
                                GitHub repository:
                                <span className='text-indigo-400 cursor-pointer hover:underline' onClick={() => window.open(repo.clone_url)}>
                                    {repo.clone_url}
                                </span>
                            </h1>

                            <p className='p-2 text-xl'>{repo.description}</p>
                            <span className='p-2'>Technologies used: {repo.topics.join(', ')}</span>
                        </div>
                    ))
                }
            </div>
        </div>


    )
}

export default Projects

