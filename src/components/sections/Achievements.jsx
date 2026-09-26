import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Star, Target, Package, Zap, Activity } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const achievements = [
  {
    icon: Trophy,
    title: 'College Coding Competition Winner',
    description:
      'Demonstrated algorithmic problem solving in competitive college programming contests.',
    color: 'from-amber-500 to-yellow-500',
    badge: 'Competition Winner',
  },
  {
    icon: Package,
    title: 'Published Internal NPM Package',
    description:
      'Consolidated Sequelize models, migrations, and schema contracts, adopted across multi repository backend services.',
    color: 'from-emerald-500 to-teal-500',
    badge: 'Architecture',
  },
  {
    icon: Zap,
    title: '45% MTTR Reduction & Production Cutover',
    description:
      'Led the production migration to database job scheduling and Datadog monitoring, cutting incident response time by 45%.',
    color: 'from-purple-500 to-indigo-500',
    badge: 'Reliability',
  },
  {
    icon: Users,
    title: 'Class Representative (CR)',
    description:
      'Coordinated department activities and represented student cohort across four years of engineering at VTU.',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Leadership',
  },
];

const stats = [
  { label: 'Engineering Experience', value: '2+ Years', icon: Activity },
  { label: 'Monthly API Requests', value: '50k+', icon: Target },
  { label: 'Concurrent WebSocket Users', value: '500+', icon: Users },
  { label: 'Frontend Bundle Cut', value: '35%', icon: Star },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Key engineering milestones, internal tooling, and operational reliability impact
            </p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <achievement.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {achievement.badge}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-6 w-6 text-primary-500 mx-auto mb-3" />
                    <p className="text-3xl font-bold text-foreground mb-1">
                      {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
