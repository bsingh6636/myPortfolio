import React, { useContext } from 'react';

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-16 md:py-24">

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
                className="text-blue-400 text-xl md:text-2xl font-medium tracking-wider"
              >
                {lan.greeting}
              </motion.h2>


              <div className="space-y-2">
                {lan.name.split(' ').map((word, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group"
                  >
                    <span className="text-4xl md:text-6xl lg:text-7xl font-bold inline-block transform transition-all duration-300 group-hover:translate-x-4 group-hover:text-blue-400">
                      {word}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>


            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-block"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-600 rounded-lg blur group-hover:blur-md transition-all duration-300"></div>
                <div className="relative bg-blue-500 px-6 py-3 rounded-lg transform transition-all duration-300 group-hover:translate-y-[-2px] group-hover:scale-105">
                  <p className="text-sm md:text-base font-bold uppercase tracking-widest">
                    {lan.role}
                  </p>
                </div>
              </div>
            </motion.div>


            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl font-light"
            >
              {lan.description}
            </motion.p>
          </motion.div>


          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="hidden md:block w-full h-full">
              <Hover 
                imageUrl={imageUrl} 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:hidden">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl"
              >
                <img 
                  src={imageUrl} 
                  alt="Profile" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};


const Hover = ({ imageUrl, className }) => {
  return (
    <div className="relative group perspective-1000">
      <motion.div
        whileHover={{ rotateY: 10, rotateX: -10 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
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
      
      {/* Floating elements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute -right-4 -top-4 bg-blue-500/90 px-4 py-2 rounded-lg shadow-lg transform -rotate-6"
      >
        <span className="text-sm font-bold">Full Stack Dev</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute -left-4 -bottom-4 bg-purple-500/90 px-4 py-2 rounded-lg shadow-lg transform rotate-6"
      >
        <span className="text-sm font-bold">Problem Solver</span>
      </motion.div>
    </div>
  );
};

export default PortfolioHeader;