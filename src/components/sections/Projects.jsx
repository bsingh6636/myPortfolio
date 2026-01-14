import React, { useState, useEffect } from 'react';
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

const emailSystemDetails = {
  architecture: [
    { name: 'Receive & Forward', tool: 'ImprovMX', icon: Mail },
    { name: 'Send Emails', tool: 'Brevo (SMTP + DKIM)', icon: Server },
    { name: 'DNS Management', tool: 'Namecheap', icon: Globe },
  ],
  configured: ['SPF', 'DKIM', 'DMARC', 'CNAME', 'A Records'],
  impact: [
    'Zero monthly cost',
    'Full control over domain and mail flow',
    'Real-world understanding of email infrastructure',
    'Production-grade system used daily',
  ],
  learnings: [
    "You don't need Google Workspace to look professional",
    'DNS + free tools = powerful',
    'SPF, DKIM, DMARC improve deliverability',
    'Email infra is just another system',
  ],
};

const Projects = () => {
  const [githubRepos, setGithubRepos] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/bsingh6636/repos'
        );
        const data = await response.json();
        const filtered = data
          .filter((repo) => projectImages.hasOwnProperty(repo.name))
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        setGithubRepos(filtered);
      } catch (error) {
        console.error('Error fetching repos:', error);
      }
    };
    fetchProjects();
  }, []);

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
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my work and creative solutions
            </p>
          </motion.div>

          {/* Featured Project - Email System */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="overflow-hidden bg-gradient-to-br from-primary-500/5 via-background to-accent-500/5 border-primary-500/20">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="gradient" className="text-xs">
                    Featured Project
                  </Badge>
                  <Badge variant="success" className="text-xs">
                    Zero Cost
                  </Badge>
                </div>
                <CardTitle className="text-2xl sm:text-3xl flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  Professional Domain Email System
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  I built a complete professional email system using my own
                  domain—without paying for Google Workspace or any email
                  hosting.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6 p-4 bg-muted/50 rounded-xl">
                  <Globe className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Domain</p>
                    <p className="font-semibold text-foreground">brijesh.fun</p>
                  </div>
                  <Separator orientation="vertical" className="h-10" />
                  <Mail className="h-5 w-5 text-primary-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Example</p>
                    <p className="font-semibold text-foreground">
                      hello@brijesh.fun
                    </p>
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
                          <p className="text-sm text-muted-foreground">
                            {item.name}
                          </p>
                          <p className="font-semibold text-foreground">
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
                          className="px-3 py-1.5"
                        >
                          <Shield className="h-3 w-3 mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="impact">
                    <ul className="space-y-2">
                      {emailSystemDetails.impact.map((item) => (
                        <li
                          key={item}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="learnings">
                    <ul className="space-y-2">
                      {emailSystemDetails.learnings.map((item) => (
                        <li
                          key={item}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>

                <Separator className="my-6" />

                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      Next Step:
                    </span>{' '}
                    Experiment with self-hosted mail servers (Postfix / Exim) or
                    hybrid reliability setups.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub Projects Grid */}
          {githubRepos.length > 0 && (
            <>
              <motion.h3
                variants={itemVariants}
                className="text-xl font-semibold text-foreground mb-6"
              >
                More Projects
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubRepos.slice(0, visibleProjects).map((repo, index) => (
                  <motion.div
                    key={repo.id}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full overflow-hidden group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                      {/* Project Image */}
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={projectImages[repo.name]}
                          alt={repo.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {repo.homepage && (
                          <Badge className="absolute top-3 right-3 bg-primary-500/90 backdrop-blur-sm">
                            Live Demo
                          </Badge>
                        )}
                      </div>

                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg group-hover:text-primary-500 transition-colors">
                          {repo.name.replace(/[-_]/g, ' ')}
                        </CardTitle>
                        <CardDescription className="line-clamp-2">
                          {repo.description || 'No description available'}
                        </CardDescription>
                      </CardHeader>

                      <CardContent>
                        {/* Tech Tags */}
                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {repo.topics.slice(0, 4).map((topic) => (
                              <Badge
                                key={topic}
                                variant="secondary"
                                className="text-xs"
                              >
                                {topic}
                              </Badge>
                            ))}
                            {repo.topics.length > 4 && (
                              <span className="text-xs text-muted-foreground self-center">
                                +{repo.topics.length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Action Links */}
                        <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center text-sm text-primary-500 hover:text-primary-400 transition-colors"
                            >
                              <ExternalLink className="h-4 w-4 mr-1" />
                              Demo
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Show More Button */}
              {githubRepos.length > 3 && (
                <motion.div
                  variants={itemVariants}
                  className="mt-10 text-center"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      setVisibleProjects((prev) =>
                        prev === 3 ? githubRepos.length : 3
                      )
                    }
                    className="group"
                  >
                    {visibleProjects === 3 ? 'Show All Projects' : 'Show Less'}
                    <ChevronDown
                      className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                        visibleProjects !== 3 ? 'rotate-180' : ''
                      }`}
                    />
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
