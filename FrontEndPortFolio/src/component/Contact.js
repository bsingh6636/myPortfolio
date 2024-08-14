import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import FloatingContact from './smallComponent/FloatingContact';
import ContactForm from './smallComponent/Form';

const Contact = () => {
  return (
    <div className=" text-white min-h-screen">
      <div className="flex justify-center">
        <FloatingContact />
      </div>
      <div className="mt-10 max-sm:mt-0 py-10 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">GET IN TOUCH</h1>
          <p className="text-blue-400">Let's Work Together</p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 justify-center items-center">
          <div className="text-center">
            <FaPhone className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">Phone & Mobile</h2>
            <p>+91 8050578803</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">Email & Website</h2>
            <p>bsingh6636@outlook.com</p>
            <p className="break-words">brijeshkushwaha6636.netlify.app/</p>
            {/* https://brijeshkushwaha6636.netlify.app/ */}
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">Address</h2>
            <p>Bengaluru-64</p>
          </div>
          <div className="text-center">
            <FaLinkedin className="text-4xl text-blue-400 mx-auto mb-2" />
            <h2 className="text-lg font-semibold">LinkedIn</h2>
            <p>@bsingh6636</p>
          </div>
        </div>
        <div className="mt-20 text-center border-t-2 border-gray-600 pt-10">
          <h1 className="text-5xl font-extrabold uppercase">Brijesh Kumar Kushwaha</h1>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
};

export default Contact;
