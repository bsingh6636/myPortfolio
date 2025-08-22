import React from 'react';
import { motion } from 'framer-motion';

const SkeletonLoader = ({ 
  width = '100%', 
  height = '20px', 
  className = '', 
  rounded = 'rounded-lg',
  animated = true 
}) => {
  const baseClasses = `bg-gradient-to-r from-gray-800/50 to-gray-700/50 ${rounded} ${className}`;
  
  if (!animated) {
    return (
      <div 
        className={baseClasses}
        style={{ width, height }}
      />
    );
  }

  return (
    <motion.div
      className={baseClasses}
      style={{ width, height }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export const SkeletonCard = ({ className = '' }) => (
  <div className={`bg-glass backdrop-blur-sm border border-white/10 rounded-3xl p-6 ${className}`}>
    <SkeletonLoader height="200px" className="mb-4" rounded="rounded-2xl" />
    <SkeletonLoader width="80%" height="24px" className="mb-2" />
    <SkeletonLoader width="60%" height="16px" className="mb-4" />
    <div className="flex gap-2 mb-4">
      <SkeletonLoader width="60px" height="24px" rounded="rounded-full" />
      <SkeletonLoader width="80px" height="24px" rounded="rounded-full" />
      <SkeletonLoader width="70px" height="24px" rounded="rounded-full" />
    </div>
    <div className="flex justify-between items-center">
      <SkeletonLoader width="100px" height="20px" />
      <SkeletonLoader width="32px" height="32px" rounded="rounded-full" />
    </div>
  </div>
);

export const SkeletonText = ({ lines = 3, className = '' }) => (
  <div className={`space-y-2 ${className}`}>
    {Array.from({ length: lines }).map((_, index) => (
      <SkeletonLoader 
        key={index}
        width={index === lines - 1 ? '75%' : '100%'}
        height="16px"
      />
    ))}
  </div>
);

export const SkeletonAvatar = ({ size = 'w-12 h-12', className = '' }) => (
  <SkeletonLoader 
    width={size.split(' ')[0]} 
    height={size.split(' ')[1]} 
    rounded="rounded-full"
    className={className}
  />
);

export const SkeletonButton = ({ className = '' }) => (
  <SkeletonLoader 
    width="120px" 
    height="40px" 
    rounded="rounded-2xl"
    className={className}
  />
);

export default SkeletonLoader;