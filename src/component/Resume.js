import React, { useEffect, useState, useContext } from 'react';
import { Download, Eye } from 'lucide-react'; // Switched to consistent icons
import { backEndPort } from '../import';
import { MyContext } from '..';
import { ResumeLan } from '../Language/ResumeLan';

const Resume = () => {
  const { language } = useContext(MyContext);
  const lan = ResumeLan[language];

  // Your fetching logic is preserved exactly as it was.
  const resumeLink = 'https://drive.google.com/file/d/1TSoF-gtUcMRnZ5BVALNVfSgSRyUY8LmB/view?usp=sharing';

  useEffect(() => {
    const API_KEY = 'b7281e6314960112';
    const EDUCORS_URL = 'https://educorssolver.host/api/getData';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [pdfLink, setPdfLink] = useState(resumeLink);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfLink;
    link.download = 'Brijesh_Singh_Resume.pdf'; // It's good practice to name the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewOnline = () => {
    window.open(pdfLink, '_blank');
  };

  return (
    <div className="py-20 md:py-28">
      {/* === Call-to-Action Card === */}
      <div className="max-w-4xl mx-auto bg-gray-800/50 border border-white/10 rounded-lg shadow-xl text-center p-8 md:p-12">

        {/* --- Section Title (Consistent) --- */}
        <h2 className='uppercase font-extrabold text-3xl md:text-5xl font-serif text-white tracking-wider'>
          {lan.title}
        </h2>
        <div className='h-1.5 w-24 bg-cyan-400 mt-4 rounded-full mx-auto'></div>
        <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
          {lan.description}
        </p>

        {/* --- Action Buttons --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-cyan-500 text-black font-bold py-3 px-6 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <Download size={20} />
            <span>{lan.downloadButton}</span>
          </button>
          <button
            onClick={handleViewOnline}
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-cyan-400 border border-cyan-400 font-bold py-3 px-6 rounded-full hover:bg-cyan-400/10 hover:text-cyan-300 transition-all duration-300"
          >
            <Eye size={20} />
            <span>{lan.viewButton}</span>
          </button>
        </div>
        
        <p className="mt-8 text-gray-400">{lan.footer}</p>
      </div>
    </div>
  );
};

export default Resume;