import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { HeaderLan } from '../Language/HeaderLan';
import { MyContext } from '..';

const Header = () => {
  const { language } = useContext(MyContext)
  const lan = HeaderLan[language]
  return (
    <div className=" bg-gray-900 fixed left-1/2 transform -translate-x-1/2 w-full flex justify-center items-center h-12 sm:p-4 text-white rounded-2xl max-sm:py-10  z-50">
      <nav className="flex flex-wrap justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-sm sm:text-base md:text-lg overflow-x-auto w-auto px-4 max-sm:text-xs">
        {/* Navigation Links */}
        <Link 
          to="portfolio" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white "
        >
          {lan.portfolio}
        </Link>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-green-500 to-teal-500 p-2 rounded-lg text-white"
        >
         {lan.about}
        </Link>
        <Link 
          to="education" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-lg text-white"
        >
         {lan.education}
        </Link>
        <Link 
          to="experience" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-red-500 to-pink-500 p-2 rounded-lg text-white"
        >
         {lan.experience}
        </Link>
        <Link 
          to="projects" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-indigo-500 to-blue-500 p-2 rounded-lg text-white"
        >
          {lan.education}
        </Link>
        <Link 
          to="resume" 
          smooth={true} 
          duration={500} 
          className="cursor-pointer hover:bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg text-white"
        >
          {lan.resume}
        </Link>
        <Link 
          to="contact" 
          smooth={true} 
          duration={1200} 
          className="cursor-pointer hover:bg-gradient-to-r from-pink-500 to-red-500 p-2 rounded-lg text-white"
        >
          {lan.contact}
        </Link>
      </nav>
    </div>
  );
}

export default Header;
