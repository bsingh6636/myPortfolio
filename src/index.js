import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import axios from 'axios';

// import reportWebVitals from './reportWebVitals';
export const MyContext = createContext({})
const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  const [language, setLanguage] = useState('en')
  const languageMapping = {
    'us': 'en',
    'es': 'es',
    'fr': 'fr',
    'cn': 'zh',
  };

  async function getLocation() {
    try {
      const ipResponse = await axios.get('https://api.ipify.org/?format=json');
      const locationResponse = await axios.get(`https://ipinfo.io/${ipResponse.data.ip}/json`);
      const countryCode = locationResponse.data.country.toLowerCase();
      const lang = languageMapping[countryCode] || 'en'; // default to 'en' if not found
      setLanguage(lang);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  }

  useEffect(() => {
    getLocation();
    // eslint-disable-next-line
  }, [ ]);
  return (
    <MyContext.Provider value={{ language, setLanguage }}>
      <App />
    </MyContext.Provider>
  )
}
root.render(
  <Main />
);
