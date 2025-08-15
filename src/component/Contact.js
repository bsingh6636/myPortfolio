import React, { useContext, useState } from 'react';
import { MyContext } from '..';
import { ContactLan } from '../Language/ContactLan';
import { Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react'; // Consistent icons

const Contact = () => {
  const { language } = useContext(MyContext);
  const lan = ContactLan[language];

  // State for the contact form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ** IMPORTANT **
    // Add your form submission logic here (e.g., using EmailJS, Formspree, or a custom backend)
    console.log('Form data submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  const contactDetails = [
    { icon: <Phone size={20} />, label: lan.phone, value: lan.phoneNumber, href: `tel:${lan.phoneNumber}` },
    { icon: <Mail size={20} />, label: lan.email, value: lan.emailAddress, href: `mailto:${lan.emailAddress}` },
    { icon: <MapPin size={20} />, label: lan.address, value: lan.addressDetail, href: "#" },
  ];

  return (
    <>
      <div className="py-20 md:py-28">
        {/* === Section Title - Consistent with other sections === */}
        <div className='text-center mb-16'>
          <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
            {lan.title}
          </h2>
          <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
        </div>

        {/* === Main Content Grid (Info + Form) === */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          
          {/* --- Left Column: Contact Info --- */}
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">{lan.description}</p>
            <div className="space-y-6">
              {contactDetails.map((detail) => (
                <a key={detail.label} href={detail.href} className="flex items-center gap-4 group">
                  <div className="text-cyan-400">{detail.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold">{detail.label}</h3>
                    <p className="text-gray-400 group-hover:text-cyan-300 transition-colors">{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* --- Right Column: Contact Form --- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">{lan.formName}</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange}
                className="w-full bg-gray-800/50 border border-white/10 rounded-md py-2 px-3 text-white focus:border-cyan-500 focus:ring-cyan-500 transition" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">{lan.formEmail}</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange}
                className="w-full bg-gray-800/50 border border-white/10 rounded-md py-2 px-3 text-white focus:border-cyan-500 focus:ring-cyan-500 transition" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">{lan.formMessage}</label>
              <textarea name="message" id="message" rows="5" required value={formData.message} onChange={handleChange}
                className="w-full bg-gray-800/50 border border-white/10 rounded-md py-2 px-3 text-white focus:border-cyan-500 focus:ring-cyan-500 transition"></textarea>
            </div>
            <button type="submit"
              className="w-full bg-cyan-500 text-black font-bold py-3 px-6 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105">
              {lan.formButton}
            </button>
          </form>
        </div>
      </div>

      {/* === Footer Section === */}
      <footer className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 px-8">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {lan.footerName}. {lan.footerRights}</p>
            <div className="flex items-center gap-6">
                <a href="https://www.linkedin.com/in/bsingh6636/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="https://github.com/bsingh6636" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <Github size={24} />
                </a>
            </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;