import React, { useEffect, useState, useContext, memo } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Star } from 'lucide-react';
import toast from 'react-hot-toast';
import { backEndPort } from '../import';
import { MyContext } from '..';
import { ResumeLan } from '../Language/ResumeLan';
import { useInView, useAnimationVariants } from '../hooks/usePerformance';
import { useTheme } from '../contexts/ThemeContext';

const Resume = memo(() => {
  const { language } = useContext(MyContext);
  const { isDark } = useTheme();
  const lan = ResumeLan[language];
  const [ref, inView] = useInView();
  const variants = useAnimationVariants();

  const resumeLink = 'https://drive.google.com/file/d/1TSoF-gtUcMRnZ5BVALNVfSgSRyUY8LmB/view?usp=sharing';

  useEffect(() => {
    const API_KEY = 'b7281e6314960112';
    const EDUCORS_URL = 'https://educorssolver.host/api/getData';
    const TARGET_URL = `${backEndPort}/api/resume`;

    async function fetchData() {
      try {
        const response = await fetch(EDUCORS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ApiKey: API_KEY, Target: TARGET_URL }),
        });
        if (!response.ok) return console.log('error fetching');
        const data = await response.json();
        setPdfLink(data.resumeLink);
      } catch (error) {
        console.log('error fetching data');
      }
    }

    fetchData();
  }, []);

  const [pdfLink, setPdfLink] = useState(resumeLink);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const link = document.createElement('a');
      link.href = pdfLink;
      link.download = 'Brijesh_Singh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Resume download started!', {
        icon: '📄',
      });
    } catch (error) {
      toast.error('Failed to download resume. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleViewOnline = () => {
    window.open(pdfLink, '_blank');
    toast.success('Opening resume in new tab!', {
      icon: '👀',
    });
  };

  return (
    <div className="py-32" ref={ref}>
      {/* Enhanced Section Header */}
      <motion.div 
        initial={variants.fadeIn.initial}
        animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
        transition={variants.fadeIn.transition}
        className='text-center mb-20'
      >
        <div className="flex items-center justify-center space-x-4 mb-6">
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-400"></div>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight'>
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {lan.title}
            </span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-accent-400"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {lan.description}
        </p>
      </motion.div>

      {/* Enhanced Resume Card */}
      <motion.div
        initial={variants.slideUp.initial}
        animate={inView ? variants.slideUp.animate : variants.slideUp.initial}
        transition={variants.slideUp.transition}
        className="max-w-4xl mx-auto"
      >
        <div className="relative group">
          {/* Background glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Main Card */}
          <div className="relative bg-white/70 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl shadow-glass text-center p-8 md:p-12 hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-500">
            
            {/* Icon */}
            <motion.div
              initial={variants.scale.initial}
              animate={inView ? variants.scale.animate : variants.scale.initial}
              transition={{ ...variants.scale.transition, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mb-8"
            >
              <FileText className="w-10 h-10 text-white" />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={variants.fadeIn.initial}
              animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
              transition={{ ...variants.fadeIn.transition, delay: 0.4 }}
              className="mb-8"
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                {lan.description}
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={variants.fadeIn.initial}
              animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
              transition={{ ...variants.fadeIn.transition, delay: 0.6 }}
              className="flex justify-center space-x-8 mb-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500">2+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-500">15+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <div className="text-2xl font-bold text-yellow-500">4.9</div>
                  <Star className="w-5 h-5 text-yellow-500 ml-1" fill="currentColor" />
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Rating</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={variants.slideUp.initial}
              animate={inView ? variants.slideUp.animate : variants.slideUp.initial}
              transition={{ ...variants.slideUp.transition, delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} className={isDownloading ? 'animate-bounce' : ''} />
                <span>{isDownloading ? 'Downloading...' : lan.downloadButton}</span>
              </motion.button>
              
              <motion.button
                onClick={handleViewOnline}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 w-full sm:w-auto text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 font-bold py-4 px-8 rounded-2xl hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-dark-900 transition-all duration-300"
              >
                <Eye size={20} />
                <span>{lan.viewButton}</span>
              </motion.button>
            </motion.div>
            
            {/* Footer Note */}
            <motion.p
              initial={variants.fadeIn.initial}
              animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
              transition={{ ...variants.fadeIn.transition, delay: 1 }}
              className="mt-8 text-gray-500 dark:text-gray-400 text-sm"
            >
              {lan.footer}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
});

Resume.displayName = 'Resume';

export default Resume;