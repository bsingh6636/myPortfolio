import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import FloatingContact from './smallComponent/FloatingContact';
import ContactForm from './smallComponent/Form';

const Contact = () => {
  return (
    <div className="text-white min-h-screen">
      <div className="flex justify-center">
        <FloatingContact />
      </div>
      <div className="mt-10 max-sm:mt-0 py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
          <p className="text-blue-400">Let's Work Together</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 justify-center items-center">
          <div className="text-center transform transition duration-500 hover:scale-105">
            <FaPhone className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">Phone & Mobile</h2>
            <p>+91 8050578803</p>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-105">
            <a href="mailto:bsingh6636@outlook.com" className="block">
              <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-2" />
              <h2 className="text-lg font-semibold">Email & Website</h2>
              <p>bsingh6636@outlook.com</p>
            </a>
            <a href="https://brijeshkushwaha6636.netlify.app/" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:underline">
              brijeshkushwaha6636.netlify.app
            </a>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-105">
            <FaMapMarkerAlt className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">Address</h2>
            <p>Bengaluru-64</p>
          </div>
          <div className="text-center transform transition duration-500 hover:scale-105">
            <a href="https://www.linkedin.com/in/bsingh6636/" target="_blank" rel="noopener noreferrer" className="block">
              <FaLinkedin className="text-4xl text-blue-400 mx-auto mb-2" />
              <h2 className="text-lg font-semibold">LinkedIn</h2>
              <p>@bsingh6636</p>
            </a>
          </div>
        </div>
        <div className="mt-20 text-center border-t-2 border-gray-600 pt-10">
          <h1 className="text-5xl font-extrabold uppercase">Brijesh Kumar Kushwaha</h1>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contact;
