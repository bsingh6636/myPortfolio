
import React, { Suspense, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import About from './component/About';
import Contact from './component/Contact';
import Education from './component/Education';
import Experience from './component/Experience';
import Header from './component/Header';
import PortfolioHeader from './component/PortfolioHeader';
import Projects from './component/Projects';
import Resume from './component/Resume';
import SkillsSection from './component/smallComponent/SkillsSection';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import SkeletonLoader from './components/ui/SkeletonLoader';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen bg-custom-gradient dark:bg-custom-gradient bg-custom-gradient-light flex items-center justify-center">
    <div className="space-y-4 text-center">
      <SkeletonLoader width="200px" height="40px" />
      <SkeletonLoader width="150px" height="20px" />
    </div>
  </div>
);

function AppContent() {
  const { isDark } = useTheme();
  useSmoothScroll();

  useEffect(() => {
    // Apply theme class to document
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  return (
    <div className="App AppBody min-h-screen bg-custom-gradient-light dark:bg-custom-gradient text-gray-900 dark:text-white font-sans antialiased selection:bg-primary-400/30 selection:text-white transition-colors duration-300">
      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.03)_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.05)_0%,transparent_50%)] pointer-events-none"></div>
      
      {/* Gradient Orbs for Ambient Lighting - Optimized */}
      <div className="fixed top-0 -left-4 w-72 h-72 bg-primary-500/10 dark:bg-primary-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-70 will-change-transform" 
           style={{
             transform: 'translate3d(0, 0, 0)',
             animation: 'float 6s ease-in-out infinite'
           }}></div>
      <div className="fixed top-0 -right-4 w-72 h-72 bg-accent-500/10 dark:bg-accent-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-70 will-change-transform" 
           style={{
             transform: 'translate3d(0, 0, 0)',
             animation: 'float 6s ease-in-out infinite 2s'
           }}></div>
      <div className="fixed -bottom-8 left-20 w-72 h-72 bg-primary-400/10 dark:bg-primary-400/20 rounded-full mix-blend-multiply filter blur-xl opacity-50 dark:opacity-70 will-change-transform" 
           style={{
             transform: 'translate3d(0, 0, 0)',
             animation: 'float 6s ease-in-out infinite 4s'
           }}></div>
      
      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Header />
        
        <main className="space-y-32 pt-20">
          <Suspense fallback={<LoadingFallback />}>
            <section id="portfolio" className="min-h-screen flex items-center">
              <PortfolioHeader />
            </section>
            
            <section id="about" className="scroll-mt-20">
              <About />
            </section>
            
            <section id="skills" className="scroll-mt-20">
              <SkillsSection />
            </section>
            
            <section id="education" className="scroll-mt-20">
              <Education />
            </section>
            
            <section id="experience" className="scroll-mt-20">
              <Experience />
            </section>
            
            <section id="projects" className="scroll-mt-20">
              <Projects />
            </section>
            
            <section id="resume" className="scroll-mt-20">
              <Resume />
            </section>
            
            <section id="contact" className="scroll-mt-20 pb-20">
              <Contact />
            </section>
          </Suspense>
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: isDark ? 'rgba(30, 41, 59, 0.9)' : 'rgba(248, 250, 252, 0.9)',
            color: isDark ? '#ffffff' : '#0f172a',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(12px)',
          },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

