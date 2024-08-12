import React, { useEffect, useState } from 'react'
import { projectList } from '../const/projectList'

const Projects = () => {
    console.log(projectList.NetflixGpt)
    const NetflixGpt = projectList.NetflixGpt
    const projects = ['swiggy.clone', 'Stock_Market', 'NetflixGpt', 'myPortfolio', "Jagur-car-collectionWebpage"]
    const [filteredGithubRepos, setFilteredGithubRepos] = useState(null)
    useEffect(() => {
        (async function fetchProject() {
            const response = await fetch('https://api.github.com/users/bsingh6636/repos')
            const data = await response.json()
            console.log(data)
            const filteredData = data.filter((d) => projects.includes(d.name))
            setFilteredGithubRepos(filteredData)
        })();
    }, [])

    return filteredGithubRepos === null ? null : (
        <div className='mt-20'>
            <span className=' uppercase font-extrabold text-5xl font-serif' style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '25px' }} > Projects </span>
            <div className='flex flex-wrap'>
                {
                    filteredGithubRepos.map((filteredGithubRepos) =>
                        <div key={filteredGithubRepos.name} className='mt-20 w-1/3 max-sm:w-1/2 '>
                            <img className='w-max p-2' src={NetflixGpt.CoverImage} alt={filteredGithubRepos.name} />
                            <h1 className='text-2xl p-2'>{filteredGithubRepos.name}</h1>
                            <h1 className='p-2'>Live Link : <span className='text-indigo-600 cursor-pointer ' onClick={() => window.open(filteredGithubRepos.homepage)}>{filteredGithubRepos.homepage}</span> </h1>
                            <p className='p-2 text-xl'>{filteredGithubRepos.description}</p>
                        </div>)
                }
            </div>


        </div>
    )
}

export default Projects