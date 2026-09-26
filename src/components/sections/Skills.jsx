import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Cpu, Database, KeyRound, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';

const skillCategories = [
  {
    title: 'Backend & System Architecture',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'REST API Design', level: 'Advanced' },
      { name: 'WebSockets (Socket.IO)', level: 'Advanced' },
      { name: 'Event-Driven Architecture', level: 'Advanced' },
      { name: 'Webhooks & HMAC-SHA256', level: 'Advanced' },
      { name: 'Idempotency & Retries', level: 'Advanced' },
      { name: 'Sequelize ORM', level: 'Advanced' },
      { name: 'Job Scheduling (DB Crons)', level: 'Advanced' },
    ],
  },
  {
    title: 'Frontend & UI Engineering',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Redux Toolkit', level: 'Advanced' },
      { name: 'Vite', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'Shadcn/ui', level: 'Advanced' },
      { name: 'Code-Splitting & Bundling', level: 'Advanced' },
      { name: 'Responsive UI Design', level: 'Advanced' },
      { name: 'WebSocket Clients', level: 'Advanced' },
    ],
  },
  {
    title: 'Cloud, DevOps & Infra',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'AWS S3 (Streaming & SDK v3)', level: 'Advanced' },
      { name: 'AWS SQS & EC2', level: 'Intermediate' },
      { name: 'AWS Lambda & RDS', level: 'Intermediate' },
      { name: 'Azure VMs', level: 'Intermediate' },
      { name: 'Docker & Compose', level: 'Advanced' },
      { name: 'Nginx Reverse Proxy', level: 'Advanced' },
      { name: 'SSL/TLS (Certbot)', level: 'Advanced' },
      { name: 'Datadog Monitoring', level: 'Advanced' },
      { name: 'CI/CD (GitHub Actions)', level: 'Intermediate' },
    ],
  },
  {
    title: 'Databases & In-Memory',
    icon: Database,
    color: 'from-amber-500 to-yellow-500',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MySQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'Redis (Caching & Pub/Sub)', level: 'Advanced' },
      { name: 'DynamoDB', level: 'Intermediate' },
      { name: 'Database Migrations', level: 'Advanced' },
    ],
  },
  {
    title: 'Integrations, Auth & Security',
    icon: KeyRound,
    color: 'from-rose-500 to-red-500',
    skills: [
      { name: 'Cashfree Verification Suite', level: 'Advanced' },
      { name: 'Zoom API & SDK v3', level: 'Advanced' },
      { name: 'OpenAI Assistants API', level: 'Advanced' },
      { name: 'JWT & OAuth 2.0', level: 'Advanced' },
      { name: 'RBAC (Role Access)', level: 'Advanced' },
      { name: 'DNS (SPF, DKIM, DMARC)', level: 'Advanced' },
    ],
  },
  {
    title: 'Core Computer Science',
    icon: Cpu,
    color: 'from-indigo-500 to-violet-500',
    skills: [
      { name: 'Data Structures & Algorithms', level: 'Strong' },
      { name: 'DBMS & Query Optimization', level: 'Strong' },
      { name: 'Operating Systems & Linux', level: 'Strong' },
      { name: 'Computer Networks', level: 'Strong' },
      { name: 'System Design Patterns', level: 'Strong' },
    ],
  },
];

const languages = ['JavaScript (ES6+)', 'TypeScript', 'SQL', 'Python', 'Bash', 'HTML5 & CSS3', 'C/C++'];

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Core engineering competencies, frameworks, and infrastructure tools
            </p>
          </div>

          {/* Languages Badge Row */}
          <div className="mb-12">
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
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
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
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="outline"
                          className="px-3 py-1.5 text-sm bg-background/50 hover:bg-primary-500/10 hover:border-primary-500/30 transition-colors cursor-default"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tooling Section */}
          <div className="mt-12">
            <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3">
                    <Terminal className="h-4 w-4 text-primary-500" />
                  </span>
                  Tooling & Workflow
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Docker', 'Datadog', 'Nginx', 'Postman', 'Git & GitHub', 'GitHub Actions', 'VS Code', 'Linux / Bash', 'npm & yarn', 'Chrome DevTools', 'Claude AI (Daily use)'].map(
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
