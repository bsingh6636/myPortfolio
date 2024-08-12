import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className="bg-gray-800 fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center h-10 sm:p-6 text-white rounded-3xl md:py-10">
      <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 md:space-x-8 text-lg">
        <Link to="portfolio" smooth={true} duration={500} className="cursor-pointer hover:underline bg-blue-400 p-2 text-black rounded-lg font-serif text-xl">
          MY PORTFOLIO
        </Link>
        <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:underline p-2 hover:bg-custom-gradient">
          ABOUT ME
        </Link>
        <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:underline p-2">
          EDUCATION
        </Link>
        <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:underline p-2">
          EXPERIENCE
        </Link>
       
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:underline p-2">
          PROJECTS
        </Link>
        <Link to="resume" smooth={true} duration={500} className="cursor-pointer hover:underline p-2">
          RESUME
        </Link>
        <Link to="contact" smooth={true} duration={1200} className="cursor-pointer hover:underline p-2">
          CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Header;
