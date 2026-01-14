import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Users, Globe, Terminal } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

const highlights = [
  {
    icon: Globe,
    title: 'Full-Stack Ownership',
    description: 'From domain to delivery, I own every layer of the stack.',
  },
  {
    icon: Terminal,
    title: 'Production Systems',
    description: 'Experience with Vercel, Azure VM, Nginx, PM2, DNS, SMTP.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Always eager to learn new technologies and best practices.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborate effectively with cross-functional teams.',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    My Story
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a Computer Science graduate and full-stack developer with 
                      strong foundations in web development, system design, and core 
                      CS subjects. I enjoy building real-world systems end-to-end—from 
                      frontend UI to backend APIs, cloud deployment, and even 
                      infrastructure-level setups like DNS, Nginx, and email delivery.
                    </p>
                    <p>
                      <span className="text-foreground font-medium">
                        What excites me most is owning the full stack:
                      </span>{' '}
                      domain → DNS → server → app → delivery.
                    </p>
                    <p>
                      I actively experiment with production-grade tooling (Vercel, 
                      Azure VM, Nginx, PM2, DNS, SMTP) and focus on learning how 
                      real systems behave outside tutorials.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy Section */}
              <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3">
                      💡
                    </span>
                    My Philosophy
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I believe the best way to learn is by building real systems that 
                    solve real problems. Theory matters, but production experience 
                    teaches lessons that tutorials never will.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What I Bring
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full bg-card/50 hover:bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                      <CardContent className="p-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent-500/10 flex items-center justify-center mb-4">
                          <item.icon className="h-5 w-5 text-primary-500" />
                        </div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {item.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Currently Exploring */}
              <Separator className="my-6" />
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center mr-3">
                      🔭
                    </span>
                    Currently Exploring
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Self-hosted mail servers (Postfix / Exim)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Hybrid reliability setups for infrastructure
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Advanced system design patterns
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Kubernetes and container orchestration
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
