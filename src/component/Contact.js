import React, { useContext, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import { MyContext } from '..';
import { ContactLan } from '../Language/ContactLan';
import { Phone, Mail, MapPin, Linkedin, Github, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useInView, useAnimationVariants } from '../hooks/usePerformance';
import { useTheme } from '../contexts/ThemeContext';

// Form validation schema
const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
  message: yup
    .string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be less than 500 characters'),
});

const Contact = memo(() => {
  const { language } = useContext(MyContext);
  const { isDark } = useTheme();
  const lan = ContactLan[language];
  const [ref, inView] = useInView();
  const variants = useAnimationVariants();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  // Watch form values for real-time validation feedback
  const watchedFields = watch();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form data submitted:', data);
      toast.success('Message sent successfully! I\'ll get back to you soon.', {
        duration: 5000,
        icon: '🚀',
      });
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.', {
        icon: '❌',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactDetails = [
    { 
      icon: Phone, 
      label: lan.phone, 
      value: lan.phoneNumber, 
      href: `tel:${lan.phoneNumber}`,
      color: 'text-green-400'
    },
    { 
      icon: Mail, 
      label: lan.email, 
      value: lan.emailAddress, 
      href: `mailto:${lan.emailAddress}`,
      color: 'text-blue-400'
    },
    { 
      icon: MapPin, 
      label: lan.address, 
      value: lan.addressDetail, 
      href: "#",
      color: 'text-red-400'
    },
  ];

  // Enhanced form field component
  const FormField = ({ label, name, type = 'text', rows, ...props }) => {
    const isTextarea = type === 'textarea';
    const Component = isTextarea ? 'textarea' : 'input';
    const hasError = errors[name];
    const hasValue = watchedFields[name];
    const isValid = hasValue && !hasError;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <label 
          htmlFor={name} 
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
        >
          {label}
        </label>
        <div className="relative">
          <Component
            {...register(name)}
            {...props}
            id={name}
            type={type}
            rows={rows}
            className={`w-full bg-white/50 dark:bg-glass backdrop-blur-sm border rounded-2xl py-3 px-4 text-gray-900 dark:text-white transition-all duration-300 focus:outline-none focus:ring-2 placeholder-gray-500 dark:placeholder-gray-400 ${
              hasError 
                ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                : isValid
                ? 'border-green-400 focus:border-green-500 focus:ring-green-200'
                : 'border-gray-300 dark:border-white/10 focus:border-primary-500 focus:ring-primary-200'
            }`}
          />
          {/* Validation Icons */}
          {hasValue && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {hasError ? (
                <AlertCircle className="w-5 h-5 text-red-400" />
              ) : (
                <CheckCircle className="w-5 h-5 text-green-400" />
              )}
            </div>
          )}
        </div>
        {/* Error Message */}
        {hasError && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1 text-sm text-red-400 flex items-center"
          >
            <AlertCircle className="w-4 h-4 mr-1" />
            {hasError.message}
          </motion.p>
        )}
      </motion.div>
    );
  };

  return (
    <>
      <div className="py-32" ref={ref}>
        {/* Enhanced Section Header */}
        <motion.div 
          initial={variants.fadeIn.initial}
          animate={inView ? variants.fadeIn.animate : variants.fadeIn.initial}
          transition={variants.fadeIn.transition}
          className='text-center mb-20'
        >
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary-400"></div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight'>
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {lan.title}
              </span>
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-accent-400"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Let's connect and discuss opportunities together
          </p>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Enhanced Contact Info */}
          <motion.div 
            initial={variants.slideLeft.initial}
            animate={inView ? variants.slideLeft.animate : variants.slideLeft.initial}
            transition={variants.slideLeft.transition}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {lan.description}
              </p>
            </div>

            <div className="space-y-6">
              {contactDetails.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <motion.a 
                    key={detail.label}
                    href={detail.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-4 p-4 bg-white/50 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl hover:bg-white/70 dark:hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{detail.label}</h4>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                        {detail.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="pt-8 border-t border-gray-200 dark:border-white/10"
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/bsingh6636/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/bsingh6636" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={variants.slideRight.initial}
            animate={inView ? variants.slideRight.animate : variants.slideRight.initial}
            transition={variants.slideRight.transition}
            className="relative"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Form Card */}
              <div className="relative bg-white/70 dark:bg-glass backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-3xl p-8 shadow-glass">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send Message</h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    label={lan.formName}
                    name="name"
                    placeholder="Enter your full name"
                  />
                  
                  <FormField
                    label={lan.formEmail}
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                  
                  <FormField
                    label={lan.formMessage}
                    name="message"
                    type="textarea"
                    rows={5}
                    placeholder="Tell me about your project or just say hello!"
                  />

                  <motion.button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{lan.formButton}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-glass backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-8">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {lan.footerName}. {lan.footerRights}
          </p>
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/bsingh6636/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com/bsingh6636" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub" 
              className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;