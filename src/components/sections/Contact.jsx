import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader2,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { Phone, FileText, AlertCircle } from 'lucide-react';
import useResume from '../../hooks/useResume';

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/bsingh6636',
    username: 'github.com/bsingh6636',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/bsingh6636',
    username: 'linkedin.com/in/bsingh6636',
  },
  {
    name: 'Domain Email (Primary)',
    icon: Mail,
    href: 'mailto:brijesh@brijeshhq.com',
    username: 'brijesh@brijeshhq.com',
  },
  {
    name: 'Direct Gmail',
    icon: Mail,
    href: 'mailto:bkushwaha.dev@gmail.com',
    username: 'bkushwaha.dev@gmail.com',
  },
  {
    name: 'Phone / WhatsApp',
    icon: Phone,
    href: 'tel:+918050578803',
    username: '+91 8050578803',
  },
  {
    name: 'Resume (PDF)',
    icon: FileText,
    href: '/resume.pdf',
    username: 'Download Latest Resume',
  },
];

const Contact = () => {
  const { resumeUrl } = useResume();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contactChannels = [
    ...socialLinks.slice(0, 5),
    {
      name: 'Resume (PDF)',
      icon: FileText,
      href: resumeUrl,
      username: 'Download Latest Resume',
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://backend-dev-beige.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setIsSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        setErrorMessage(
          result.message || 'Failed to send message. Please use direct email below.'
        );
      }
    } catch (err) {
      console.error('Contact submit error:', err);
      setErrorMessage('Network connection error. Please use direct email below.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to discuss opportunities? I'd love
              to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <Card className="bg-gradient-to-br from-primary-500/5 to-accent-500/5 border-primary-500/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <a
                    href="mailto:brijesh@brijeshhq.com"
                    className="text-xl sm:text-2xl font-bold text-primary-500 hover:text-primary-400 transition-colors break-all"
                  >
                    brijesh@brijeshhq.com
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    Primary domain inbox, directly monitored and active
                  </p>
                  <div className="mt-3 pt-3 border-t border-border/40">
                    <p className="text-xs text-muted-foreground">Alternate / Personal Gmail:</p>
                    <a
                      href="mailto:bkushwaha.dev@gmail.com"
                      className="text-sm font-semibold text-foreground hover:text-primary-500 transition-colors"
                    >
                      bkushwaha.dev@gmail.com
                    </a>
                  </div>
                  <Badge variant="outline" className="mt-4 border-green-500/40 text-green-600 dark:text-green-400 bg-green-500/5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2" />
                    Typically replies within 24 hours
                  </Badge>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Channels & Profiles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {contactChannels.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                          <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground text-sm">
                            {link.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {link.username}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </CardContent>
              </Card>

              {/* Location */}
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary-500" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Send a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        Message Delivered
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. Your message has been sent directly to brijesh@brijeshhq.com.
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsSubmitted(false)}
                        className="mt-6 text-xs border-border"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-start justify-between gap-3">
                          <div className="flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{errorMessage}</span>
                          </div>
                          <a
                            href={`mailto:brijesh@brijeshhq.com?subject=${encodeURIComponent(
                              'Portfolio message from ' + (formState.name || 'Visitor')
                            )}&body=${encodeURIComponent(formState.message || '')}`}
                            className="text-xs font-semibold underline whitespace-nowrap self-center hover:opacity-80"
                          >
                            Open Mail App
                          </a>
                        </div>
                      )}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-foreground mb-2"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-16 text-center">
            <Separator className="mb-8" />
            <p className="text-sm text-muted-foreground">
              Built with{' '}
              <span className="text-primary-500 font-medium">React</span>,{' '}
              <span className="text-primary-500 font-medium">Tailwind CSS</span>
              , and{' '}
              <span className="text-primary-500 font-medium">shadcn/ui</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} Brijesh Kushwaha. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
