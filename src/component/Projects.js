import React, { useEffect, useState } from 'react'


const Projects = () => {

    const projects = {
        'Stock_Market': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
        'NetflixGpt': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416500/projects/NetflixGpt.png',
        'YouTube_Project': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723416542/projects/YouTube%20Clone.png',
        'swiggy.clone': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477113/projects/swiggy.clone.png',
        'myPortfolio': 'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png'
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
    },[])

    return filteredGithubRepos === null ? null : (
        <div className='mt-20'>
            <span className=' uppercase font-extrabold text-5xl font-serif' style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '25px' }} > Projects </span>
            <div className='flex flex-wrap'>
                {
                    filteredGithubRepos.map((filteredGithubRepos) =>
                        <div key={filteredGithubRepos.name} className='mt-20 p-2 w-1/3   max-sm:w-1/2 '>
                            <img className='w-max p-2 rounded-3xl hover:scale-105 transform transition-transform duration-600 ease-out' src={projects[filteredGithubRepos.name]} alt={filteredGithubRepos.name} />
                            <h1 className='text-2xl p-2 text-green-500 '>{filteredGithubRepos.name}</h1>
                            <h1 className='p-2'>Live Link : <span className='text-indigo-600 cursor-pointer hover:underline '
                                onClick={() => window.open(filteredGithubRepos.homepage)}>{filteredGithubRepos.homepage}</span> </h1>
                            <h1 className='p-2'>GitHub repository : <span className='text-indigo-600 cursor-pointer hover:underline '
                                onClick={() => window.open(filteredGithubRepos.clone_url)}>{filteredGithubRepos.clone_url}</span> </h1>
                            <p className='p-2 text-xl'>{filteredGithubRepos.description}</p>
                            <span className='p-2'>Technologies used : {filteredGithubRepos.topics.join(', ')}</span>
                        </div>)
                }
            </div>
        </div>
        
    )
}

export default Projects

