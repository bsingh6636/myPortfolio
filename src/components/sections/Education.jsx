import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const coreSubjects = [
  'Data Structures & Algorithms',
  'DBMS',
  'Operating Systems',
  'Computer Networks',
  'Machine Learning',
];

const certifications = [
  { name: 'React.js & Node.js', issuer: 'NamasteDev' },
  { name: 'AICTE Programs', issuer: 'AICTE' },
];

const Education = () => {
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
    <section id="education" className="py-24 sm:py-32 bg-muted/30">
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
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My academic journey and continuous learning path
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Education Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="gradient">University</Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    Bachelor of Engineering in Computer Science
                  </CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium text-foreground">
                      Visvesvaraya Technological University (VTU)
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                        Karnataka, India
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary-500" />
                        Dec 2020 – June 2024
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-4 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2 text-primary-500" />
                      Core Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {coreSubjects.map((subject) => (
                        <Badge
                          key={subject}
                          variant="secondary"
                          className="text-xs"
                        >
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Right Column - Certifications & Stats */}
            <div className="space-y-6">
              {/* Certifications */}
              <motion.div variants={itemVariants}>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                        <Award className="h-5 w-5 text-white" />
                      </div>
                      Certifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {certifications.map((cert, index) => (
                        <div
                          key={cert.name}
                          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-foreground text-sm">
                              {cert.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {cert.issuer}
                            </p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Verified
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Learning Philosophy */}
              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center mr-3">
                        📚
                      </span>
                      Continuous Learning
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Beyond formal education, I believe in learning by doing. I
                      actively build projects, experiment with production-grade
                      tools, and focus on understanding how real systems work
                      outside of tutorials.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Stats */}
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary-500 mb-1">
                        4
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Years of Study
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-4 text-center">
                      <p className="text-3xl font-bold text-primary-500 mb-1">
                        5+
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Core CS Subjects
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
