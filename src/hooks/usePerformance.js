import { useEffect, useState, useCallback, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Optimized intersection observer hook
export const useInView = (options = {}) => {
  const [inView, setInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();
  const { isReducedMotion } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options]);

  // If reduced motion is preferred, show immediately
  useEffect(() => {
    if (isReducedMotion) {
      setInView(true);
      setHasAnimated(true);
    }
  }, [isReducedMotion]);

  return [ref, inView];
};

// Optimized animation variants
export const useAnimationVariants = () => {
  const { isReducedMotion } = useTheme();

  return {
    fadeIn: {
      initial: { opacity: isReducedMotion ? 1 : 0 },
      animate: { opacity: 1 },
      transition: { duration: isReducedMotion ? 0 : 0.6 }
    },
    slideUp: {
      initial: { 
        opacity: isReducedMotion ? 1 : 0, 
        y: isReducedMotion ? 0 : 30 
      },
      animate: { opacity: 1, y: 0 },
      transition: { duration: isReducedMotion ? 0 : 0.6 }
    },
    slideLeft: {
      initial: { 
        opacity: isReducedMotion ? 1 : 0, 
        x: isReducedMotion ? 0 : -30 
      },
      animate: { opacity: 1, x: 0 },
      transition: { duration: isReducedMotion ? 0 : 0.6 }
    },
    slideRight: {
      initial: { 
        opacity: isReducedMotion ? 1 : 0, 
        x: isReducedMotion ? 0 : 30 
      },
      animate: { opacity: 1, x: 0 },
      transition: { duration: isReducedMotion ? 0 : 0.6 }
    },
    scale: {
      initial: { 
        opacity: isReducedMotion ? 1 : 0, 
        scale: isReducedMotion ? 1 : 0.8 
      },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: isReducedMotion ? 0 : 0.6 }
    },
    stagger: {
      animate: {
        transition: {
          staggerChildren: isReducedMotion ? 0 : 0.1
        }
      }
    }
  };
};

// Throttled scroll hook
export const useThrottledScroll = (callback, delay = 16) => {
  const lastRun = useRef(Date.now());

  const throttledCallback = useCallback(
    (...args) => {
      if (Date.now() - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = Date.now();
      }
    },
    [callback, delay]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback, { passive: true });
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};

// Debounced resize hook
export const useDebouncedResize = (callback, delay = 250) => {
  const timeoutRef = useRef();

  const debouncedCallback = useCallback(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(callback, delay);
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('resize', debouncedCallback);
    return () => {
      window.removeEventListener('resize', debouncedCallback);
      clearTimeout(timeoutRef.current);
    };
  }, [debouncedCallback]);
};

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fps: 60,
    memory: null,
    timing: null
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Start FPS monitoring
    animationId = requestAnimationFrame(measureFPS);

    // Get memory info if available
    if ('memory' in performance) {
      setMetrics(prev => ({ ...prev, memory: performance.memory }));
    }

    // Get navigation timing
    if ('getEntriesByType' in performance) {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        setMetrics(prev => ({ ...prev, timing: navEntries[0] }));
      }
    }

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return metrics;
};