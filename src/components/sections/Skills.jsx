import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Server, Cloud, Cpu } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'HTML5', level: 'Advanced' },
      { name: 'CSS3', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'Express.js', level: 'Intermediate' },
      { name: 'MongoDB', level: 'Intermediate' },
    ],
  },
  {
    title: 'Infra / DevOps',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Nginx', level: 'Intermediate' },
      { name: 'PM2', level: 'Intermediate' },
      { name: 'DNS (SPF, DKIM, DMARC)', level: 'Intermediate' },
      { name: 'Vercel', level: 'Advanced' },
      { name: 'Azure VM', level: 'Intermediate' },
      { name: 'Linux Server', level: 'Intermediate' },
      { name: 'Domain & Email Systems', level: 'Advanced' },
    ],
  },
  {
    title: 'Core CS',
    icon: Cpu,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Strong' },
      { name: 'DBMS', level: 'Strong' },
      { name: 'Operating Systems', level: 'Strong' },
      { name: 'Computer Networks', level: 'Strong' },
    ],
  },
];

const languages = ['C', 'C++', 'Java', 'Python', 'JavaScript'];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="skills" className="py-24 sm:py-32 bg-muted/30">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Languages Badge Row */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <span className="text-sm text-muted-foreground mr-2 self-center">
                Languages:
              </span>
              {languages.map((lang) => (
                <Badge
                  key={lang}
                  variant="secondary"
                  className="px-4 py-1.5 text-sm font-medium"
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                      >
                        <category.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-lg font-semibold">
                        {category.title}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            duration: 0.3,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary-500/10 hover:border-primary-500/30 transition-colors cursor-default"
                          >
                            {skill.name}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tooling Section */}
          <motion.div variants={itemVariants} className="mt-12">
            <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3">
                    🛠️
                  </span>
                  Tooling & Workflow
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['VS Code', 'Git', 'GitHub', 'Postman', 'Figma', 'Terminal', 'npm/yarn', 'Chrome DevTools'].map(
                    (tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="px-3 py-1.5"
                      >
                        {tool}
                      </Badge>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Bottom Note */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-sm text-muted-foreground inline-flex items-center">
              <span className="w-2 h-2 rounded-full bg-primary-500 mr-2 animate-pulse" />
              Always learning and exploring new technologies
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
