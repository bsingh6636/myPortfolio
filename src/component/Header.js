import React, { useContext, useState, useEffect, useRef, memo } from 'react';
import { MyContext } from '..';
import { HeaderLan } from '../Language/HeaderLan';
import { Globe } from 'lucide-react';
import ThemeToggle from '../components/ui/ThemeToggle';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const Header = memo(() => {
  const { language, setLanguage } = useContext(MyContext);
  const { scrollTo } = useSmoothScroll();
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  
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

  // Enhanced click outside handler with performance optimization
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    };
    
    if (isLangMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside, { passive: true });
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isLangMenuOpen]);

  // Custom scroll handler for better performance
  const handleNavClick = (target) => {
    scrollTo(`#${target}`);
    setLangMenuOpen(false);
  };


  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl z-50 animate-slide-up">
      {/* Glassmorphism Container with Theme Support */}
      <div className="bg-glass-light dark:bg-glass backdrop-blur-xl border border-black/10 dark:border-white/20 rounded-2xl shadow-glass">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">

            {/* Navigation Links for medium screens and up */}
            <nav className="hidden md:flex md:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="cursor-pointer text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-300 transition-all duration-300 font-medium text-sm uppercase tracking-wider px-3 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </button>
              ))}
            </nav>
            
            {/* Mobile Logo/Title */}
            <div className="md:hidden">
              <button 
                onClick={() => handleNavClick('portfolio')}
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-300 transition-colors duration-300 cursor-pointer"
              >
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Portfolio
                </span>
              </button>
            </div>

            {/* Controls Group */}
            <div className="flex items-center space-x-3">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Language Selector Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 text-sm font-medium rounded-xl text-gray-600 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/20 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-400/50 transition-all duration-300 group"
                >
                  <Globe size={18} className="text-primary-400 group-hover:rotate-12 transition-transform duration-300" />
                  <span className='hidden sm:inline font-mono text-xs tracking-wider'>{language.toUpperCase()}</span>
                </button>

                {/* Enhanced Dropdown Menu */}
                {isLangMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-3 w-48 rounded-xl shadow-glass py-2 bg-white/90 dark:bg-dark-800/90 backdrop-blur-xl border border-black/10 dark:border-white/20 z-50 animate-slide-up">
                    {availableLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className="w-full text-left flex items-center px-4 py-3 text-sm text-gray-600 dark:text-gray-300 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 hover:text-gray-900 dark:hover:text-white transition-all duration-300 group"
                      >
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-xs font-bold mr-3 group-hover:scale-110 transition-transform duration-300 text-white">
                          {lang.code.toUpperCase()}
                        </span>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;