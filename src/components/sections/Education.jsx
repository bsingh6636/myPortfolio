import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';

const coreSubjects = [
  'Data Structures & Algorithms',
  'DBMS & SQL',
  'Operating Systems',
  'Computer Networks',
  'Cloud Computing',
  'OOP & System Design',
];

const certifications = [
  { name: 'React.js & Node.js', issuer: 'NamasteDev' },
  { name: 'AWS Cloud Fundamentals & Core Services', issuer: 'Amazon Web Services Training' },
  { name: 'AICTE Technical Certifications', issuer: 'AICTE' },
];

const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in computer engineering and continuous technical learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Education Card */}
            <div>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary-500/30 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500" />
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <GraduationCap className="h-7 w-7 text-white" />
                    </div>
                    <Badge variant="gradient">First Class (74%)</Badge>
                  </div>
                  <CardTitle className="text-xl sm:text-2xl mb-2">
                    Bachelor of Engineering in Computer Science
                  </CardTitle>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-semibold text-foreground">
                      KNS Institute of Technology
                    </p>
                    <p className="text-sm font-medium text-primary-500">
                      Visvesvaraya Technological University (VTU)
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm pt-1">
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-primary-500" />
                        Bengaluru, Karnataka, India
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-primary-500" />
                        Dec 2020 to Jul 2024
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
            </div>

            {/* Right Column - Certifications & Stats */}
            <div className="space-y-6">
              {/* Certifications */}
              <div>
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
              </div>

              {/* Technical Foundations & Lab Work */}
              <div>
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      Curriculum & Lab Practicals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 bg-muted/40 rounded-lg border border-border/40 text-sm">
                      <p className="font-semibold text-foreground">Relational Systems & Algorithms</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Rigorous coursework in normalization, ACID transactions, relational indexing, and algorithmic complexity analysis.
                      </p>
                    </div>
                    <div className="p-3 bg-muted/40 rounded-lg border border-border/40 text-sm">
                      <p className="font-semibold text-foreground">Operating Systems & Networking</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        UNIX process management, concurrency models, socket communication, and TCP/IP protocol architectures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
