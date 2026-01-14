import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Star, Target } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const achievements = [
  {
    icon: Trophy,
    title: 'Winner – College Coding Competition',
    description:
      'Demonstrated problem-solving skills and algorithmic thinking in a competitive environment.',
    color: 'from-amber-500 to-yellow-500',
    badge: 'Competition',
  },
  {
    icon: Users,
    title: 'Class Representative',
    description:
      'Led and coordinated class activities, demonstrating leadership and communication skills.',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Leadership',
  },
];

const stats = [
  { label: 'Projects Built', value: '15+', icon: Target },
  { label: 'Technologies', value: '20+', icon: Star },
];

const Achievements = () => {
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
    <section id="achievements" className="py-24 sm:py-32">
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
              Achievements
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognition along my journey
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
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
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
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
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-6 w-6 text-amber-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-1">1</p>
                  <p className="text-xs text-muted-foreground">
                    Competition Won
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-6 w-6 text-blue-500 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-1">CR</p>
                  <p className="text-xs text-muted-foreground">
                    Leadership Role
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Motivational Note */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Card className="inline-block bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground italic">
                  "Every project I build, every problem I solve, is another step
                  towards mastery."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
