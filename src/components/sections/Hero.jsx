import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, ChevronDown, FileText } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/5 dark:bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/5 dark:bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-500/3 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Role Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Badge variant="outline" className="px-3.5 py-1 text-xs font-medium border-border/60 bg-muted/40 text-muted-foreground">
            Full Stack Engineer, Bengaluru
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500 bg-clip-text text-transparent">
              Brijesh Kushwaha
            </span>
          </h1>
        </motion.div>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium mb-6 max-w-2xl mx-auto"
        >
          Building reliable Node.js backends, React interfaces, and real-time systems.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full stack engineer with 2 years of experience developing multi-service Node.js and TypeScript
          backends and production React frontends. Hands-on experience with WebSocket notifications,
          event-driven pipelines, payment integrations, and cloud infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('#projects')}
            className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 border-primary-500/40 hover:bg-primary-500/10 text-foreground"
            >
              <FileText className="mr-2 h-4 w-4 text-primary-500" />
              View Resume
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('#contact')}
            className="px-8 border-border hover:bg-muted"
          >
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/bsingh6636"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub: bsingh6636"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/bsingh6636"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn: bsingh6636"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:brijesh@brijeshhq.com"
            title="Email: brijesh@brijeshhq.com"
            className="p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
