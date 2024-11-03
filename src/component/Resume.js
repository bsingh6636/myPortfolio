import React, { useEffect, useState, useContext } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { backEndPort } from '../import';
import { MyContext } from '..';
import { ResumeLan } from '../Language/ResumeLan';

const Resume = () => {
  const { language } = useContext(MyContext);
  const lan = ResumeLan[language];
  console.log('%cORDER STOP', 'color: red; background-color: black; font-size: 20px; font-weight: bold; padding: 4px;');


  const resumeLink = 'https://drive.google.com/file/d/1TSoF-gtUcMRnZ5BVALNVfSgSRyUY8LmB/view?usp=sharing';

  useEffect(() => {
    const API_KEY = 'b7281e6314960112';
    // const EDUCORS_URL = 'https://educorssolver.host/api/getData';
    const EDUCORS_URL = 'http://localhost:3001/api/getData';
    const TARGET_URL = `${backEndPort}/api/resume`;

    async function fetchData() {
      try {
        const response = await fetch(EDUCORS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ApiKey: API_KEY, Target: TARGET_URL }),
        });
        if (!response.ok) return console.log('error fetching');
        const data = await response.json();
        setPdfLink(data.resumeLink);
      } catch (error) {
        console.log('error fetching data');
      }
    }

    fetchData();
  }, []);

  const [pdfLink, setPdfLink] = useState(resumeLink);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };

  const handleViewOnline = () => {
    window.open(pdfLink, '_blank');
  };

  return (
    <div className="text-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">{lan.title}</h1>
        <p className="text-gray-400">{lan.description}</p>
      </div>
      <div className="flex justify-center space-x-6">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <FaDownload className="text-xl" />
          <span>{lan.downloadButton}</span>
        </button>
        <button
          onClick={handleViewOnline}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <FaEye className="text-xl" />
          <span>{lan.viewButton}</span>
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg">{lan.footer}</p>
      </div>
    </div>
  );
};

export default Resume;
