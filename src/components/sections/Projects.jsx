import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Github,
  Mail,
  Server,
  Shield,
  CheckCircle,
  ChevronDown,
  Layers,
  Terminal,
  Cpu,
  ExternalLink,
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
      'CORS proxy API with JWT login, user API key generation, and MongoDB usage tracking (total, monthly, daily, and per endpoint call counts). Includes a React and Tailwind dashboard for issuing keys and charting usage.',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'React', 'Docker', 'Tailwind CSS'],
    image: projectImages['EduCors-Helper'],
    github: 'https://github.com/bsingh6636/EduCors-Helper',
    live: 'https://cors-proxy.brijeshhq.com',
    highlight: 'Endpoint Usage Analytics',
  },
  {
    id: 'web-hook-service',
    name: 'Webhook Relay & Forwarding Service',
    category: 'backend',
    featured: true,
    description:
      'Multi source webhook relay (Facebook, WhatsApp, Zoom, and a generic /:source route) that forwards events to target endpoints. Failed deliveries are stored in MongoDB with payload, headers, and error, and listed via GET /missed-requests.',
    tags: ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Webhooks', 'REST API'],
    image: null,
    github: 'https://github.com/bsingh6636/web-hook-service',
    highlight: 'Failed Delivery Capture',
  },
  {
    id: 'infra',
    name: 'Self Hosted Production Cloud Stack',
    category: 'backend',
    featured: true,
    description:
      'Declarative Docker Compose and Nginx stack on AWS EC2: one stack.yaml renders compose and Nginx configs, with validation checks, local previews, release snapshots, and rollback. TLS via Certbot DNS-01 (Cloudflare) per root domain.',
    tags: ['Docker Compose', 'Nginx', 'AWS EC2', 'Certbot', 'Bash', 'Node.js', 'SSL/TLS'],
    image: null,
    github: 'https://github.com/bsingh6636/infra',
    highlight: 'Release Snapshots + Rollback',
  },
  {
    id: 'sahayog-crowdfunding',
    name: 'Sahayog Crowdfunding Platform',
    category: 'fullstack',
    featured: false,
    description:
      'Fundraising and crowdfunding platform for Nepal: users create campaigns, admins review them, and donors record pledges (eSewa, Khalti, bank transfer). Includes JWT auth, organiser updates, a blog, and rate limited APIs.',
    tags: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    image: null,
    github: 'https://github.com/bsingh6636/sahayog-crowdfunding',
    live: 'https://nepalfundme.com',
  },
  {
    id: 'swiggy.clone',
    name: 'Food Delivery Application (Swiggy Clone)',
    category: 'fullstack',
    featured: false,
    description:
      'Food delivery web app that loads live Swiggy restaurant data through the EduCors proxy (with mock data fallback), a Redux Toolkit cart, Firebase phone OTP verification at checkout, lazy loaded routes, and shimmer loading placeholders.',
    tags: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Firebase Phone Auth', 'Leaflet'],
    image: projectImages['swiggy.clone'],
    github: 'https://github.com/bsingh6636/swiggy.clone',
  },
  {
    id: 'Hospital_Management_System',
    name: 'Hospital Management System (MERN)',
    category: 'fullstack',
    featured: false,
    description:
      'MERN hospital application with a patient portal and admin dashboard: registration, appointment booking with status workflows, contact messages, and doctor profiles with Cloudinary avatars. Role based JWT cookies and bcrypt hashing.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Cloudinary'],
    image: null,
    github: 'https://github.com/bsingh6636/Hospital_Management_System',
  },
  {
    id: 'ShopifyOrder-FrontEnd',
    name: 'Shopify Sales Analytics Dashboard',
    category: 'data',
    featured: false,
    description:
      'React dashboard that charts a sample Shopify orders and customers dataset with Chart.js: sales over time, growth rate, new and repeat customers, cohort lifetime value, and a Leaflet map of customers by city.',
    tags: ['React.js', 'Chart.js', 'Leaflet', 'Tailwind CSS'],
    image: projectImages['ShopifyOrder-FrontEnd'],
    github: 'https://github.com/bsingh6636/ShopifyOrder-FrontEnd',
  },
  {
    id: 'NetflixGpt',
    name: 'NetflixGPT (AI Movie Search)',
    category: 'data',
    featured: false,
    description:
      'Movie discovery app where natural language queries are sent to Google Gemini for movie suggestions, then looked up on TMDB for posters and trailers. Firebase authentication and Redux Toolkit state management.',
    tags: ['React.js', 'Redux Toolkit', 'Gemini API', 'TMDB API', 'Firebase'],
    image: projectImages['NetflixGpt'],
    github: 'https://github.com/bsingh6636/NetflixGpt',
    live: 'https://nwtflixgpt.web.app',
  },
  {
    id: 'Stock_Market',
    name: 'Stock Market Dashboard',
    category: 'data',
    featured: false,
    description:
      'Stock dashboard with Chart.js price charts (intraday, weekly, monthly) and company search via Alpha Vantage, sector performance and market quotes via Financial Modeling Prep, a rotating news sentiment card, and Firebase auth.',
    tags: ['React.js', 'Alpha Vantage API', 'Financial Modeling Prep API', 'Chart.js', 'Tailwind CSS', 'Firebase'],
    image: projectImages['Stock_Market'],
    github: 'https://github.com/bsingh6636/Stock_Market',
    live: 'https://stock-market-eosin.vercel.app',
  },
  {
    id: 'Artwork-Data-Table',
    name: 'Artwork Data Table',
    category: 'data',
    featured: false,
    description:
      'TypeScript React app that lists Art Institute of Chicago artworks in a PrimeReact DataTable with server side pagination, multi row selection, an overlay panel to select N rows across pages, and a loading spinner.',
    tags: ['TypeScript', 'React.js', 'PrimeReact', 'Vite', 'Art Institute of Chicago API'],
    image: null,
    github: 'https://github.com/bsingh6636/Artwork-Data-Table',
  },
  {
    id: 'travel_planner_weather_dashboard',
    name: 'Travel Planner',
    category: 'fullstack',
    featured: false,
    description:
      'Travel planner with Ixigo airport and city autocomplete (via an Express CORS proxy), trip date pickers, and a community places feed; photos are uploaded to Cloudinary by an Express and MongoDB backend service.',
    tags: ['React', 'Node.js', 'Express', 'Ixigo API', 'Cloudinary', 'MongoDB'],
    image: projectImages['travel_planner_weather_dashboard'],
    github: 'https://github.com/bsingh6636/travel_planner.weather_dashboard',
  },
];

const emailSystemDetails = {
  architecture: [
    { name: 'Receive & Forward', tool: 'ImprovMX', icon: Mail },
    { name: 'Send Emails', tool: 'Brevo (SMTP relay)', icon: Server },
    { name: 'DNS Management', tool: 'Cloudflare DNS', icon: Globe },
  ],
  configured: ['MX', 'SPF', 'CNAME', 'A Records'],
  impact: [
    'No paid mailbox subscription (ImprovMX and Brevo free tiers)',
    'Inbound mail routed via MX records; outbound sent through Brevo SMTP',
    'Custom address brijesh@brijeshhq.com instead of a Gmail address',
    'Used for my own inbound and outbound email',
  ],
  learnings: [
    'A custom domain address can run on free forwarding and SMTP services instead of Google Workspace',
    'SPF, DKIM, and DMARC let receiving servers check that mail from a domain is authorised',
    'Receiving (MX forwarding) and sending (SMTP relay) can be handled by separate providers',
    'Direct practice configuring MX, TXT, and CNAME records for reliable mail routing',
  ],
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);
  const filteredProjects =
    selectedCategory === 'all'
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-3 py-1 border-primary-500/30 bg-primary-500/5">
              <Layers className="w-3.5 h-3.5 mr-1 text-primary-500" />
              Software & Systems
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Production systems, API services, cloud infrastructure, and full stack applications
            </p>
          </div>

          {/* Featured Highlight: Domain Email System */}
          <div className="mb-16">
            <Card className="overflow-hidden bg-gradient-to-br from-primary-500/5 via-background to-accent-500/5 border-primary-500/20 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="gradient" className="text-xs">
                    Infrastructure Spotlight
                  </Badge>
                  <Badge variant="outline" className="text-xs border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/5">
                    Free Tier Services
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-sm">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  Custom Domain Email Setup
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Set up a custom domain address on free tiers: ImprovMX forwards inbound mail for brijeshhq.com,
                  Brevo SMTP sends outbound mail, and Cloudflare DNS holds the MX and SPF records, instead of paying
                  for Google Workspace.
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
                      <p className="text-xs text-muted-foreground">Address</p>
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
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
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
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                className="min-w-0"
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
                      <p className="text-xs font-mono text-muted-foreground flex items-center break-all">
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
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-xs text-primary-500 hover:text-primary-400 transition-colors"
                        >
                          Live Demo
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Show More / Less Button */}
          {filteredProjects.length > 6 && (
            <div className="mt-12 text-center">
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
            </div>
          )}

          {/* GitHub Profile Callout */}
          <div className="mt-16 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
