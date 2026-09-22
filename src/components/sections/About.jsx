import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, Globe, Server, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';

const highlights = [
  {
    icon: Server,
    title: 'Distributed Backends',
    description: 'Node.js & TypeScript microservices, event-driven pipelines, and DB-driven job scheduling.',
  },
  {
    icon: Globe,
    title: 'High-Performance UI',
    description: 'React, Vite, Redux & Tailwind interfaces with code-splitting cutting bundle size by 35%.',
  },
  {
    icon: Zap,
    title: 'Real-Time & Integrations',
    description: 'WebSockets for 500+ users, Cashfree HMAC payments, Zoom S3 streams, and OpenAI Assistants.',
  },
  {
    icon: TrendingUp,
    title: 'Cloud & Observability',
    description: 'AWS S3/SQS/EC2, Azure VMs, Docker Compose, Nginx, Datadog monitoring cutting MTTR by 45%.',
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
                    My Story & Background
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a Full Stack Engineer with 2 years of experience building multi-service 
                      Node.js and TypeScript backends, cloud-native infrastructure, and modern React frontends. 
                      I hold a Bachelor of Engineering in Computer Science from Visvesvaraya Technological University (VTU).
                    </p>
                    <p>
                      <span className="text-foreground font-medium">
                        Backend is where I go deepest:
                      </span>{' '}
                      I've owned third-party integration surfaces end to end (payments via Cashfree, video conferencing via Zoom SDK, LLM APIs via OpenAI Assistants, and observability with Datadog). 
                      I've engineered HMAC-SHA256 webhook verification, idempotent ingestion pipelines into S3, and database-driven schedulers on MySQL and Redis that replaced host crontabs.
                    </p>
                    <p>
                      On the frontend, I build the customer-facing and internal interfaces those services power—shipping 
                      real-time WebSocket notifications sustaining 500+ concurrent users, dynamic filtering tools, and optimizing 
                      bundles by 35% via intelligent code-splitting.
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
                    Engineering Philosophy
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I believe in true end-to-end ownership: <span className="text-foreground font-medium">architecture → code → testing → containerization → deployment → observability</span>. 
                    Systems must be resilient under failure, idempotent under repeated triggers, and measurable through clear telemetry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                What I Bring to Teams
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

              {/* Production Practices */}
              <Separator className="my-6" />
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-accent-500/10 flex items-center justify-center mr-3">
                      ⚡
                    </span>
                    Key Engineering Competencies
                  </h4>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Idempotency & retry handling in asynchronous webhook pipelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Zero-downtime database-driven job scheduling (MySQL + Redis)
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Centralized error logging & Datadog dashboards cutting MTTR by 45%
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Self-hosted infrastructure: Docker Compose, Nginx reverse proxy, Certbot SSL
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
