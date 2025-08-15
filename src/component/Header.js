import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { MyContext } from '..';
import { HeaderLan } from '../Language/HeaderLan';
import { Globe } from 'lucide-react'; // Icon for the language selector

const Header = () => {
  // Access language state and setter from context
  const { language, setLanguage } = useContext(MyContext);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Get the correct text for the current language
  const lan = HeaderLan[language];

  // Data for navigation links, making the JSX cleaner
  const navLinks = [
    { to: 'portfolio', label: lan.portfolio },
    { to: 'about', label: lan.about },
    { to: 'education', label: lan.education },
    { to: 'experience', label: lan.experience },
    { to: 'projects', label: lan.projects }, // BUG FIX: Was previously lan.education
    { to: 'resume', label: lan.resume },
    { to: 'contact', label: lan.contact },
  ];

  // Data for the language dropdown
  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
  ];

  // Effect to close the language menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50 bg-black/30 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Navigation Links for medium screens and up */}
          <nav className="hidden md:flex md:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                activeClass="text-cyan-400" // Style for the active link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80} // Offset to account for the header's height
                duration={500}
                className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Simple Title for small screens. A hamburger menu could be added here later. */}
          <div className="md:hidden text-lg font-bold text-white">
             <Link to="portfolio" smooth={true} duration={500}>My Portfolio</Link>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangMenuOpen(!isLangMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 border border-transparent text-sm font-medium rounded-md text-gray-300 hover:bg-white/10 focus:outline-none transition"
            >
              <Globe size={20} />
              <span className='hidden sm:inline'>{language.toUpperCase()}</span>
            </button>

            {/* Dropdown Menu Panel */}
            {isLangMenuOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg py-1 bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangMenuOpen(false); // Close menu after selection
                    }}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;