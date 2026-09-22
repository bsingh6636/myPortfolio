import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Zap,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const experiences = [
  {
    role: 'Full Stack Engineer',
    company: 'Vedak',
    subtitle: 'The Expert Network',
    type: 'Full-time',
    period: 'Nov 2024 to Present',
    location: 'Bengaluru, India',
    current: true,
    summary:
      'Engineered multi-service Node.js & TypeScript backends and production React interfaces. Owned integration surfaces (payments, video, LLM, observability), data pipelines, and real-time systems.',
    metrics: [
      { label: 'Concurrent Users', value: '500+' },
      { label: 'Bundle Size Cut', value: '35%' },
      { label: 'MTTR Cut', value: '45%' },
      { label: 'Page Load Speed', value: '2.4s (from 3.2s)' },
    ],
    accomplishments: [
      'Built webhook-driven ingestion pipeline for Zoom cloud recordings, streaming media directly to AWS S3 via SDK v3 with idempotency guarantees and retry handling, eliminating duplicate ingestion under repeated webhook delivery.',
      'Replaced host-level crontab with a database-driven job scheduler on MySQL and Redis, adding execution history, Datadog failure alerting, and runtime schedule changes without redeployment; planned and led the production cutover.',
      'Delivered customer-facing and internal React interfaces end to end: real-time WebSocket notifications (Socket.IO) for 500+ concurrent users, an expert rating and dynamic filtering system, and a CRM reporting module; cut bundle size 35% (3.2s to 2.4s load) via code-splitting.',
      'Integrated Cashfree Verification Suite end to end across its full API surface, implementing HMAC-SHA256 webhook signature verification and a polling-based workaround for an unavailable balance endpoint.',
      'Designed and shipped an LLM-based project classification service on the OpenAI Assistants API with injected domain taxonomy, replacing manual categorisation of incoming records.',
      'Established centralized error logging and Datadog monitoring across backend services, cutting mean time to resolution by 45%.',
      'Authored and published an internal npm package consolidating Sequelize models and migrations, adopted across a multi-repository backend codebase.',
      'Integrated enterprise client APIs into backend workflows, including an automated transcript-delivery pipeline for a global consulting firm.',
    ],
    technologies: [
      'Node.js',
      'TypeScript',
      'React.js',
      'AWS S3 & SQS',
      'AWS EC2',
      'MySQL',
      'PostgreSQL',
      'Redis',
      'Socket.IO',
      'Sequelize ORM',
      'Datadog',
      'Docker',
      'Cashfree API',
      'OpenAI Assistants',
      'Tailwind CSS',
    ],
  },
  {
    role: 'Frontend Developer Intern',
    company: 'AQMENZ Automation Pvt. Ltd',
    subtitle: 'Industrial Automation & Software',
    type: 'Internship',
    period: 'Aug 2023 to Oct 2023',
    location: 'Bengaluru, India',
    current: false,
    summary:
      'Engineered interactive, responsive web applications in React and Redux, optimizing frontend load performance and user workflows.',
    metrics: [
      { label: 'Performance Boost', value: '30%' },
      { label: 'User Engagement', value: '+25%' },
    ],
    accomplishments: [
      'Developed modular web applications using ReactJS and Redux, optimizing rendering cycles and improving client performance by 30%.',
      'Enhanced front-end feature sets and responsiveness, contributing to a 25% increase in user engagement.',
      'Built unit test suites with Jest and collaborated on cross-functional UI delivery and API integration.',
    ],
    technologies: [
      'React.js',
      'Redux',
      'JavaScript (ES6+)',
      'Jest',
      'Tailwind CSS',
      'HTML5/CSS3',
      'REST APIs',
    ],
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary-500/30 bg-primary-500/5">
              <Briefcase className="w-3.5 h-3.5 mr-1 text-primary-500" />
              Experience
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production engineering on scalable distributed backends, cloud infrastructure, and responsive React web apps
            </p>
          </motion.div>

          {/* Experience List */}
          <div className="space-y-10">
            {experiences.map((exp, expIndex) => (
              <motion.div key={exp.company} variants={itemVariants}>
                <Card className="overflow-hidden bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Top Highlight Accent */}
                  <div
                    className={`h-1.5 w-full ${
                      exp.current
                        ? 'bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600'
                        : 'bg-muted'
                    }`}
                  />
                  
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Badge
                            variant={exp.current ? 'gradient' : 'secondary'}
                            className="text-xs font-semibold"
                          >
                            {exp.type}
                          </Badge>
                          {exp.current && (
                            <Badge variant="outline" className="text-xs border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/5">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5" />
                              Current Role
                            </Badge>
                          )}
                        </div>

                        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                          {exp.role}
                          <span className="text-primary-500 font-normal">@</span>
                          <span className="text-foreground">{exp.company}</span>
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 font-medium">
                          {exp.subtitle}
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1.5 text-primary-500" />
                          {exp.period}
                        </span>
                        <span className="hidden sm:inline text-border">/</span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1.5 text-primary-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground/80 mt-4 leading-relaxed bg-muted/40 p-3.5 rounded-xl border border-border/40">
                      {exp.summary}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Impact Metrics Row */}
                    {exp.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {exp.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="p-3 rounded-xl bg-background/60 border border-border/40 text-center"
                          >
                            <p className="text-lg sm:text-xl font-bold text-primary-500">
                              {metric.value}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Accomplishments */}
                    <div>
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center">
                        <Zap className="h-4 w-4 text-primary-500 mr-2" />
                        Key Contributions & Engineering Impact
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.accomplishments.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-muted-foreground leading-relaxed"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2.5 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="pt-4 border-t border-border/40">
                      <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
                        Technologies & Tools Used
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs px-2.5 py-1 bg-muted hover:bg-primary-500/10 hover:text-primary-500 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
