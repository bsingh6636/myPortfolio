import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Background
                  </h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      I'm a Full Stack Engineer with 2 years of experience building multi-service 
                      Node.js and TypeScript backends, cloud infrastructure, and modern React frontends. 
                      I hold a Bachelor of Engineering in Computer Science from Visvesvaraya Technological University (VTU).
                    </p>
                    <p>
                      On the backend, I have owned integration surfaces end to end for payments (Cashfree), 
                      video conferencing (Zoom), LLM APIs (OpenAI Assistants), and Datadog monitoring. 
                      I have built HMAC-SHA256 signature verification, media ingestion into S3 with retry handling, 
                      and database-driven schedulers on MySQL and Redis that replaced host crontabs.
                    </p>
                    <p>
                      On the frontend, I build the customer-facing and internal interfaces those services power, 
                      delivering real-time WebSocket notifications for 500+ concurrent users, dynamic filtering tools, 
                      and cutting bundle sizes by 35% with code-splitting.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reliability Note */}
              <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
                <CardContent className="p-6">
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    System Reliability & Ownership
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I focus on building resilient services with clear failure boundaries, idempotent handlers 
                    for repeated webhook triggers, and actionable telemetry for production observability.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Core Areas
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <motion.div
                    key={item.title}
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
                  <h4 className="text-base font-semibold text-foreground mb-3">
                    Engineering Focus
                  </h4>
                  <ul className="space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Idempotency and retry handling in asynchronous webhook pipelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Zero-downtime database-driven job scheduling with MySQL and Redis
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Centralized error logging and Datadog monitoring cutting MTTR by 45%
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3" />
                      Self-hosted infrastructure with Docker Compose, Nginx reverse proxy, and Certbot SSL
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
