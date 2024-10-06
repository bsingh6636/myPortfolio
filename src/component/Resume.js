import React, { useEffect, useState } from 'react';
import { FaDownload, FaEye } from 'react-icons/fa';
import { backEndPort } from '../import';

const Resume = () => {
  const resumeLink = 'https://drive.google.com/file/d/1TSoF-gtUcMRnZ5BVALNVfSgSRyUY8LmB/view?usp=sharing'
  // https://www.dropbox.com/scl/fi/ygjj8sseed2m8att3n5sy/Brijesh.pdf?rlkey=tgelitjgra3900vdib1qxg4to&st=64f715n8&dl=0'

  useEffect(() => {
    // async function fetchResume(){
    //  try {
    //   const response = await fetch(`${backEndPort}/api/resume`)
    //   const data =await response.json()
    //   setPdfLink(data.resumeLink)
    //  } catch (error) {
    //   console.log('error fetching latest resume')
    //  }

    const API_KEY = 'f8f3014500f47476';
    const EDUCORS_URL = 'https://educorssolver.host/api/getData';
    const TARGET_URL = `${backEndPort}/api/resume`;

    async function fetchData() {
      try {
        const response = await fetch(EDUCORS_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ApiKey: API_KEY, Target: TARGET_URL }),
        });
        if(!response.ok) return console.log('error fetching')
        const data = await response.json();
        setPdfLink(data.resumeLink)
        console.log('Data fetched successfully:', data);
      } catch (error) {
        console.log('error fetching data')
      }
    }

    fetchData();

    //  async function fetchResume(){
    //   const response = await fetch(`${backEndPort}/api/resume`)
    //   if(!response.ok) console.log('network response not ok')
    //     const data =await response.json()
    //     setPdfLink(data.resumeLink)
    //  }

    // fetchResume()
    //     .then((data)=>console.log(data)) 
    //     .catch(()=>console.log('error fetching latest resume'))
  }, [])
  const [pdfLink, setPdfLink] = useState(resumeLink)
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
