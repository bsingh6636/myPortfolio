import React from 'react'

const Header = () => {
  return (
    <div className="bg-black flex justify-around items-center  sm:p-6 text-white  md:py-10">
    <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 text-lg">
      <a href="#portfolio" className="hover:underline  bg-blue-400 p-2 text-black rounded-lg font-serif text-xl">MY PORTOFOLIO</a>
      <a href="#about" className="hover:underline p-2 hover:bg-custom-gradient">ABOUT ME</a>
      <a href="#education" className="hover:underline p-2">EDUCATION</a>
      <a href="#experience" className="hover:underline p-2">EXPERIENCE</a>
      <a href="#projects" className="hover:underline p-2">RESUME</a>
      <a href="#projects" className="hover:underline p-2">PROJECT</a>
      <a href="#contact" className="hover:underline p-2">CONTACT</a>
    </nav>
  </div>
  )
}

export default Header
