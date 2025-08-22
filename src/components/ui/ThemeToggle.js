import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = ({ className = '' }) => {
  const { isDark, toggleTheme, isReducedMotion } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative p-3 bg-glass backdrop-blur-xl border border-white/20 rounded-2xl shadow-glass hover:bg-white/10 transition-all duration-300 group ${className}`}
      whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
      whileTap={!isReducedMotion ? { scale: 0.95 } : {}}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 90 : 0,
          }}
          transition={{ duration: isReducedMotion ? 0 : 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="w-5 h-5 text-yellow-400" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : -90,
          }}
          transition={{ duration: isReducedMotion ? 0 : 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon className="w-5 h-5 text-blue-400" />
        </motion.div>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/0 to-blue-400/0 group-hover:from-yellow-400/10 group-hover:to-blue-400/10 transition-all duration-300 pointer-events-none" />
    </motion.button>
  );
};

export default ThemeToggle;