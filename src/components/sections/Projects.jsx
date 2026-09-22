import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe,
  Github,
  Mail,
  Server,
  Shield,
  CheckCircle,
  ExternalLink,
  ChevronDown,
  Layers,
  Terminal,
  Cpu,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Separator } from '../ui/separator';

const projectImages = {
  Stock_Market:
    'https://res.cloudinary.com/bsingh6636/image/upload/v1723477057/projects/stock_market.png',
  NetflixGpt:
    'https://res.cloudinary.com/bsingh6636/image/upload/v1723416500/projects/NetflixGpt.png',
  YouTube_Project:
    'https://res.cloudinary.com/bsingh6636/image/upload/v1723416542/projects/YouTube%20Clone.png',
  'swiggy.clone':
    'https://res.cloudinary.com/bsingh6636/image/upload/v1723477113/projects/swiggy.clone.png',
  'ShopifyOrder-FrontEnd':
    'https://res.cloudinary.com/bsingh6636/image/upload/v1724309642/projects/shopifyProject.png',
  'EduCors-Helper':
    'https://res.cloudinary.com/bsingh6636/image/upload/v1728199901/travelPlannerProject/x1nekxuithyrjrqqawgy.png',
  travel_planner_weather_dashboard:
    'https://res.cloudinary.com/bsingh6636/image/upload/v1728201066/travelPlannerProject/ptiuqg3nuspbcrrr9s3f.png',
};

const curatedProjects = [
  {
    id: 'EduCors-Helper',
    name: 'CORS Proxy Platform (EduCors)',
    category: 'backend',
    featured: true,
    description:
      'Public API proxy handling 50,000+ monthly requests with JWT & API-key authentication, per-key rate limiting, and request-level analytics. Shipped a React/Tailwind console for key issuance and quota visibility.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React', 'Docker', 'Tailwind CSS'],
    image: projectImages['EduCors-Helper'],
    github: 'https://github.com/bsingh6636/EduCors-Helper',
    highlight: '50,000+ Monthly Requests',
  },
  {
    id: 'web-hook-service',
    name: 'Webhook Relay & Forwarding Service',
    category: 'backend',
    featured: true,
    description:
      'Multi-source webhook relay forwarding inbound events to per-source targets. Persists failed deliveries into MongoDB with a complete retrieval API for manual and automated replay.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webhooks', 'REST API'],
    image: null,
    github: 'https://github.com/bsingh6636/web-hook-service',
    highlight: 'Idempotent Replay API',
  },
  {
    id: 'infra',
    name: 'Self-Hosted Production Cloud Stack',
    category: 'backend',
    featured: true,
    description:
      'Production Docker Compose and Nginx stack hosting personal web applications on an Azure VM. Features multi-domain reverse proxy routing, wildcard SSL via Certbot, and automated renewal checks.',
    tags: ['Docker Compose', 'Nginx', 'Certbot', 'Azure VM', 'Bash', 'SSL/TLS'],
    image: null,
    github: 'https://github.com/bsingh6636/infra',
    highlight: 'Automated Wildcard SSL',
  },
  {
    id: 'sahayog-crowdfunding',
    name: 'Sahayog Crowdfunding Platform',
    category: 'fullstack',
    featured: false,
    description:
      'Minimal GoFundMe-style crowdfunding platform built for transparent community causes in Nepal. Features campaign creation, fund tracking, backer pledges, and an intuitive modern UI.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: null,
    github: 'https://github.com/bsingh6636/sahayog-crowdfunding',
  },
  {
    id: 'swiggy.clone',
    name: 'Food Delivery Application (Swiggy Clone)',
    category: 'fullstack',
    featured: false,
    description:
      'End-to-end food delivery web app with Firebase mobile OTP authentication, real-time WebSocket order status tracking, lazy loading, and code chunking for fast sub-2 second load times.',
    tags: ['React.js', 'Redux', 'Tailwind CSS', 'Firebase OTP', 'WebSockets'],
    image: projectImages['swiggy.clone'],
    github: 'https://github.com/bsingh6636/swiggy.clone',
  },
  {
    id: 'Hospital_Management_System',
    name: 'Cloud-Native Hospital Management',
    category: 'fullstack',
    featured: false,
    description:
      'Healthcare platform with AWS EC2 hosting, RDS MySQL for ACID-compliant patient data, S3 for encrypted medical records, IAM role-based access control, and secure multi-tier JWT authentication.',
    tags: ['MERN Stack', 'AWS EC2', 'AWS RDS', 'AWS S3', 'IAM', 'JWT'],
    image: null,
    github: 'https://github.com/bsingh6636/Hospital_Management_System',
  },
  {
    id: 'ShopifyOrder-FrontEnd',
    name: 'Shopify E-Commerce Analytics Suite',
    category: 'data',
    featured: false,
    description:
      'Interactive visual dashboard for Shopify merchants using Chart.js: tracks sales growth rates over time, customer lifetime values by cohort, repeat vs new buyer ratios, and geographic breakdowns.',
    tags: ['React.js', 'Node.js', 'Express', 'Chart.js', 'Tailwind CSS'],
    image: projectImages['ShopifyOrder-FrontEnd'],
    github: 'https://github.com/bsingh6636/ShopifyOrder-FrontEnd',
  },
  {
    id: 'NetflixGpt',
    name: 'NetflixGPT (AI Movie Discovery)',
    category: 'data',
    featured: false,
    description:
      'AI-powered movie recommendation platform leveraging the OpenAI API for natural language conversational movie search, TMDB API for high-res media metadata, and Firebase authentication.',
    tags: ['React.js', 'Redux', 'OpenAI API', 'TMDB API', 'Firebase'],
    image: projectImages['NetflixGpt'],
    github: 'https://github.com/bsingh6636/NetflixGpt',
  },
  {
    id: 'Stock_Market',
    name: 'Stock Market Sentiment Dashboard',
    category: 'data',
    featured: false,
    description:
      'Financial analysis web app consuming Alpha Vantage APIs for dynamic stock movement charts, sector performance comparisons, and real-time market sentiment indicators.',
    tags: ['React.js', 'Alpha Vantage API', 'Chart.js', 'Tailwind CSS'],
    image: projectImages['Stock_Market'],
    github: 'https://github.com/bsingh6636/Stock_Market',
  },
  {
    id: 'Artwork-Data-Table',
    name: 'Artwork Paginated Data Platform',
    category: 'data',
    featured: false,
    description:
      'TypeScript React enterprise application showcasing a paginated data table of artworks using PrimeReact with multi-row selection, dynamic lazy loading, and custom loading states.',
    tags: ['TypeScript', 'React.js', 'PrimeReact', 'REST APIs'],
    image: null,
    github: 'https://github.com/bsingh6636/Artwork-Data-Table',
  },
  {
    id: 'travel_planner_weather_dashboard',
    name: 'Travel Planner & Weather Dashboard',
    category: 'fullstack',
    featured: false,
    description:
      'Travel discovery portal integrating Ixigo APIs for route ticket pricing, real-time weather forecasts, and Cloudinary media uploading for user-contributed recommendations.',
    tags: ['Node.js', 'Express', 'React', 'Ixigo API', 'Cloudinary'],
    image: projectImages['travel_planner_weather_dashboard'],
    github: 'https://github.com/bsingh6636/travel_planner.weather_dashboard',
  },
];

const emailSystemDetails = {
  architecture: [
    { name: 'Receive & Forward', tool: 'ImprovMX', icon: Mail },
    { name: 'Send Emails', tool: 'Brevo (SMTP + DKIM)', icon: Server },
    { name: 'DNS Management', tool: 'Namecheap', icon: Globe },
  ],
  configured: ['SPF', 'DKIM', 'DMARC', 'CNAME', 'A Records'],
  impact: [
    'Zero monthly recurring cost',
    '100% deliverability with DKIM/SPF cryptographic signatures',
    'Custom domain branding with brijesh@brijeshhq.com on brijeshhq.com',
    'Production system used daily for professional inbound and outbound communications',
  ],
  learnings: [
    "You don't need Google Workspace or expensive SaaS to build a professional mail pipeline",
    'DNS records (SPF, DKIM, DMARC) provide critical domain authority and anti-spoofing',
    'SMTP relay architecture allows clean decoupling of receiving and sending pipelines',
    'Owning domain infrastructure builds deep networking fundamentals',
  ],
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects =
    selectedCategory === 'all'
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
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
              <Layers className="w-3.5 h-3.5 mr-1 text-primary-500" />
              Software & Systems
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real-world systems, API services, cloud infrastructure, and full-stack applications
            </p>
          </motion.div>

          {/* Featured Highlight - Domain Email System */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="overflow-hidden bg-gradient-to-br from-primary-500/5 via-background to-accent-500/5 border-primary-500/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="gradient" className="text-xs">
                    Infrastructure Spotlight
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/5">
                    Zero Cost / Active Daily
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-sm">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  Professional Domain Email Architecture
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Engineered a zero-cost professional email infrastructure using custom domain routing, SMTP relay,
                  and cryptographic DKIM/SPF verification, avoiding expensive SaaS subscriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-muted/50 rounded-xl border border-border/40">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Domain</p>
                      <p className="font-semibold text-foreground text-sm">brijeshhq.com</p>
                    </div>
                  </div>
                  <Separator orientation="vertical" className="h-8 hidden sm:block" />
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary-500" />
                    <div>
                      <p className="text-xs text-muted-foreground">Active Inbound Endpoint</p>
                      <p className="font-semibold text-foreground text-sm">
                        brijesh@brijeshhq.com
                      </p>
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="architecture" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-6">
                    <TabsTrigger value="architecture">Architecture</TabsTrigger>
                    <TabsTrigger value="configured">Config</TabsTrigger>
                    <TabsTrigger value="impact">Impact</TabsTrigger>
                    <TabsTrigger value="learnings">Learnings</TabsTrigger>
                  </TabsList>

                  <TabsContent value="architecture" className="space-y-4">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {emailSystemDetails.architecture.map((item) => (
                        <div
                          key={item.name}
                          className="p-4 bg-card rounded-xl border border-border/50"
                        >
                          <item.icon className="h-5 w-5 text-primary-500 mb-2" />
                          <p className="text-xs text-muted-foreground">
                            {item.name}
                          </p>
                          <p className="font-semibold text-foreground text-sm mt-0.5">
                            {item.tool}
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="configured">
                    <div className="flex flex-wrap gap-2">
                      {emailSystemDetails.configured.map((item) => (
                        <Badge
                          key={item}
                          variant="outline"
                          className="px-3 py-1.5 text-xs bg-background/50"
                        >
                          <Shield className="h-3 w-3 mr-1 text-primary-500" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="impact">
                    <ul className="space-y-2.5">
                      {emailSystemDetails.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="learnings">
                    <ul className="space-y-2.5">
                      {emailSystemDetails.learnings.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2.5 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Category Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-10">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'backend', label: 'Backend & Cloud' },
              { id: 'fullstack', label: 'Full Stack Apps' },
              { id: 'data', label: 'AI & Analytics' },
            ].map((tab) => (
              <Button
                key={tab.id}
                variant={selectedCategory === tab.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setVisibleCount(6);
                }}
                className={`rounded-full px-4 text-xs font-medium transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-primary-500 hover:bg-primary-600 text-white'
                    : 'border-border/60 hover:bg-muted'
                }`}
              >
                {tab.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full flex flex-col overflow-hidden group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300 shadow-sm hover:shadow-md">
                  {/* Card Header Media or Styled Badge Banner */}
                  {project.image ? (
                    <div className="relative overflow-hidden aspect-video bg-muted/40">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {project.highlight && (
                        <Badge className="absolute top-3 right-3 bg-primary-500/90 text-white backdrop-blur-sm text-xs">
                          {project.highlight}
                        </Badge>
                      )}
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-primary-500/10 via-background to-accent-500/10 flex flex-col justify-between p-5 border-b border-border/40">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-background/80 border border-border/50 flex items-center justify-center shadow-sm">
                          {project.category === 'backend' ? (
                            <Server className="h-5 w-5 text-primary-500" />
                          ) : project.category === 'data' ? (
                            <Cpu className="h-5 w-5 text-accent-500" />
                          ) : (
                            <Layers className="h-5 w-5 text-primary-500" />
                          )}
                        </div>
                        {project.highlight && (
                          <Badge variant="outline" className="text-xs bg-background/80 border-primary-500/30 text-primary-600 dark:text-primary-400">
                            {project.highlight}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs font-mono text-muted-foreground flex items-center">
                        <Terminal className="h-3.5 w-3.5 mr-1.5 text-primary-500" />
                        github.com/bsingh6636/{project.id}
                      </p>
                    </div>
                  )}

                  <CardHeader className="pb-2 flex-1">
                    <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary-500 transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-xs text-muted-foreground self-center">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs font-medium text-foreground hover:text-primary-500 transition-colors"
                      >
                        <Github className="h-4 w-4 mr-1.5" />
                        View Code
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs text-primary-500 hover:text-primary-400 transition-colors"
                      >
                        Details
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Show More / Less Button */}
          {filteredProjects.length > 6 && (
            <motion.div variants={itemVariants} className="mt-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  setVisibleCount((prev) =>
                    prev === 6 ? filteredProjects.length : 6
                  )
                }
                className="group border-border hover:bg-muted"
              >
                {visibleCount === 6
                  ? `Show All (${filteredProjects.length}) Projects`
                  : 'Show Less'}
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                    visibleCount !== 6 ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </motion.div>
          )}

          {/* GitHub Profile Callout */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <Card className="inline-block bg-muted/40 border-border/50 max-w-xl">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-foreground">
                      Explore All Repositories on GitHub
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      30+ open source repositories covering microservices, CLIs, clones, and data structures.
                    </p>
                  </div>
                  <a
                    href="https://github.com/bsingh6636"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="sm" variant="outline" className="border-primary-500/40 text-primary-600 dark:text-primary-400 hover:bg-primary-500/10 whitespace-nowrap">
                      <Github className="h-4 w-4 mr-1.5" />
                      @bsingh6636
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
