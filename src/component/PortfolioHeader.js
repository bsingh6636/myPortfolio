import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioHeaderLan } from '../Language/PortfolioHeaderLan';
import { MyContext } from '..';

const PortfolioHeader = () => {
  const { language } = useContext(MyContext);
  const lan = PortfolioHeaderLan[language];
  const imageUrl = `${process.env.PUBLIC_URL}/images/photo2.jpg`;

  return (
    <div className="w-full text-white">
      <div className="max-w-7xl mx-auto">
        {/* Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">

          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10 lg:pr-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary-400 to-accent-400"></div>
              <span className="text-primary-400 text-lg md:text-xl font-medium tracking-wider uppercase">
                {lan.greeting}
              </span>
            </motion.div>

            {/* Name with enhanced typography */}
            <div className="space-y-4">
              {lan.name.split(' ').map((word, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  className="overflow-hidden"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                    <span className="inline-block bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent hover:from-primary-200 hover:via-accent-200 hover:to-primary-200 transition-all duration-500 cursor-default">
                      {word}
                    </span>
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Role Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="inline-block"
            >
              <div className="relative group cursor-default">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Main badge */}
                <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 px-8 py-4 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-glow">
                  <p className="text-white font-bold text-sm md:text-base lg:text-lg uppercase tracking-widest">
                    {lan.role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
                {lan.description}
              </p>
              
              {/* Call to Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-glow"
                >
                  View My Work
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border-2 border-accent-400 text-accent-400 font-semibold rounded-xl hover:bg-accent-400 hover:text-white transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* ENHANCED IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative lg:order-1"
          >
            <div className="relative max-w-lg mx-auto">
              {/* Background decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-2xl"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-full blur-xl animate-float"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-primary-400/30 to-accent-400/30 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
              
              {/* Main image container */}
              <div className="relative">
                <div className="hidden lg:block">
                  <EnhancedHover imageUrl={imageUrl} />
                </div>

                {/* Mobile/Tablet optimized image */}
                <div className="lg:hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl"></div>
                  <img 
                    src={imageUrl} 
                    alt="Profile" 
                    loading="lazy"
                    className="relative w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
                  />
                  
                  {/* Floating info card */}
                  <div className="absolute -bottom-6 -right-6 bg-glass backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-glass">
                    <div className="text-right">
                      <h3 className="text-white font-bold text-lg">{lan.name.split(' ')[0]}</h3>
                      <p className="text-primary-300 text-sm font-medium">{lan.role}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating skill badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-8 top-1/4 hidden lg:block"
              >
                <div className="bg-glass backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl shadow-glass animate-bounce-subtle">
                  <span className="text-primary-400 font-bold text-sm">React Expert</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
                className="absolute -left-8 bottom-1/3 hidden lg:block"
              >
                <div className="bg-glass backdrop-blur-xl border border-white/20 px-4 py-2 rounded-xl shadow-glass animate-bounce-subtle" style={{animationDelay: '0.5s'}}>
                  <span className="text-accent-400 font-bold text-sm">Full Stack</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Enhanced Hover component with better 3D effects
const EnhancedHover = ({ imageUrl }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div className="relative group perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ 
          rotateY: rotate.x, 
          rotateX: rotate.y,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="preserve-3d cursor-pointer"
      >
        <div className="relative">
          {/* Main image */}
          <img 
            src={imageUrl} 
            alt="Profile" 
            className="w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl transition-all duration-500"
          />
          
          {/* Overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-black/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-400/20 to-accent-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </div>
      </motion.div>
    </div>
  );
};


export default PortfolioHeader;
