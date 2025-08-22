import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useTheme } from '../contexts/ThemeContext';

export const useSmoothScroll = () => {
  const lenisRef = useRef();
  const { isReducedMotion } = useTheme();

  useEffect(() => {
    // Don't initialize smooth scroll if user prefers reduced motion
    if (isReducedMotion) return;

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, [isReducedMotion]);

  const scrollTo = (target, options = {}) => {
    if (lenisRef.current && !isReducedMotion) {
      lenisRef.current.scrollTo(target, {
        offset: -100,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      });
    } else {
      // Fallback for reduced motion
      const element = typeof target === 'string' ? document.querySelector(target) : target;
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return { scrollTo, lenis: lenisRef.current };
};