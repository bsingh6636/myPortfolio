import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { PortfolioHeaderLan } from '../Language/PortfolioHeaderLan';
import { MyContext } from '..';

const PortfolioHeader = () => {
  const { language } = useContext(MyContext);
  const lan = PortfolioHeaderLan[language];
  const imageUrl = `${process.env.PUBLIC_URL}/images/photo2.jpg`;

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Flex for mobile, grid for desktop */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24">

          {/* TEXT CONTENT */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 text-lg md:text-xl lg:text-2xl font-medium tracking-wider"
              >
                {lan.greeting}
              </motion.h2>

              {/* Name split animation */}
              <div className="space-y-2">
                {lan.name.split(' ').map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <span className="text-[clamp(2rem,4vw,4rem)] font-bold inline-block transform transition-all duration-300 group-hover:translate-x-4 group-hover:text-blue-400">
                      {word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Role badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-blue-500 px-6 py-3 rounded-lg transform transition-all duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                  <p className="text-xs md:text-sm lg:text-base font-bold uppercase tracking-widest">
                    {lan.role}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-light"
            >
              {lan.description}
            </motion.p>
          </motion.div>

          {/* IMAGE SECTION */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Desktop Hover Tilt */}
            <div className="hidden md:block w-full h-full">
              <Hover imageUrl={imageUrl} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl" />
            </div>

            {/* Mobile Image with overlay */}
            <div className="md:hidden relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={imageUrl} 
                alt="Profile" 
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-lg font-semibold">{lan.name}</h3>
                <p className="text-gray-300 text-sm">{lan.role}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Hover component with cursor tilt
const Hover = ({ imageUrl, className }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotate({ x, y });
  };

  return (
    <div className="relative group perspective-1000">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setRotate({ x: 0, y: 0 })}
        animate={{ rotateY: rotate.x, rotateX: rotate.y }}
        transition={{ duration: 0.3 }}
        className="preserve-3d"
      >
        <div className="relative">
          <img 
            src={imageUrl} 
            alt="Profile" 
            className={`rounded-2xl shadow-2xl ${className}`}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-black/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -right-4 -top-4 bg-blue-500/90 px-4 py-2 rounded-lg shadow-lg transform -rotate-6"
      >
        <span className="text-xs md:text-sm font-bold">Full Stack Dev</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="absolute -left-4 -bottom-4 bg-purple-500/90 px-4 py-2 rounded-lg shadow-lg transform rotate-6"
      >
        <span className="text-xs md:text-sm font-bold">Problem Solver</span>
      </motion.div>
    </div>
  );
};

export default PortfolioHeader;
