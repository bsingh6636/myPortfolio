import React from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';

const Resume= () => {
    const pdfLink = 'https://www.dropbox.com/scl/fi/69bi7cyjk7cx21pu0fsts/Brijesh_2.pdf?rlkey=7eottvi52lped40wn2i3rlgy8&st=j9kiww5s&dl=0'
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
    <div className=" text-white py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Resume</h1>
        <p className="text-gray-400">Download or View My Resume Online</p>
      </div>
      <div className="flex justify-center space-x-6">
        <button
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <FaDownload className="text-xl" />
          <span>Download PDF</span>
        </button>
        <button
          onClick={handleViewOnline}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2"
        >
          <FaEye className="text-xl" />
          <span>View Online</span>
        </button>
      </div>
      <div className="mt-10 text-center">
        <p className="text-lg">
          Feel free to download my resume and reach out if you’re interested in working together!
        </p>
      </div>
    </div>
  );
};

export default Resume;
