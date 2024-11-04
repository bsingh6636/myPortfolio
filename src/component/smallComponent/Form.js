import React, { useState, useContext } from 'react';
import { backEndPort } from '../../import';
import { MyContext } from '../..';
import { ContactFormLan } from '../../Language/ContactLan';
import axios from 'axios';

const ContactForm = () => {
  const { language } = useContext(MyContext);
  const lan = ContactFormLan[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(lan.sending);

   try {
     const response = await fetch(`${backEndPort}/api/contact`, {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify(formData),
     });
 
     const result = await response.json();
      if (result.status === 'success') {
       setStatus(lan.success);
       setFormData({ name: '', email: '', message: '' });
     } else {
       setStatus(lan.error);
     }
   } catch (error) {
    console.log(error)
   }
    // const API_KEY = 'b7281e6314960112';
    // const EDUCORS_URL = 'http://localhost:3001/api/getData';
    // const TARGET_URL = `${backEndPort}/api/contact`;

    // async function fetchData() {
    //   try {
    //     //const result = axios.post(`${EDUCORS_URL}?ApiKey=${API_KEY}?Target=${encodeURIComponent(TARGET_URL)}` , formData)
    //     const response = axios.post(`${EDUCORS_URL}?ApiKey=${API_KEY}&Target=${encodeURIComponent(TARGET_URL)}`);
    //     // if (!response.ok) return console.log('error fetching');
    //     // const data = await response.json();
    //     // setPdfLink(data.resumeLink);
    //     console.log(response)
    //   } catch (error) {
    //     console.log('error fetching data');
    //   }
    // }

    // fetchData();

   
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">{lan.title}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium" htmlFor="name">{lan.nameLabel}</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="email">{lan.emailLabel}</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium" htmlFor="message">{lan.messageLabel}</label>
          <textarea
            id="message"
            name="message"
            className="w-full p-3 mt-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 rounded text-white font-bold transition duration-300"
        >
          {lan.sendButton}
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default ContactForm;