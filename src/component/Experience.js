import React from 'react';

const Experience = () => {
  return (
    <div className="text-white mt-20">
  <span 
    className='uppercase font-extrabold text-5xl font-serif' 
    style={{ borderBottom: '10px ridge rgb(96,165,250)', paddingBottom: '25px' }}
  >
    Experience
  </span>
  
  <div className="mt-14 space-y-12">
    {/* Experience 1 */}
    <div className="flex flex-col  md:flex-row md:space-x-12">
      <div className="md:w-1/2 flex flex-col lg:flex-row items-center md:items-start text-3xl font-bold">
        <div className="flex flex-row items-center justify-center md:justify-start">
          <span className="material-symbols-outlined text-5xl md:text-6xl -mr-3 md:-mr-5 text-blue-500 animate-pulse">
            arrow_forward_ios
          </span>
          <span className="text-blue-500 text-5xl md:text-6xl -ml-3 md:-ml-5 material-symbols-outlined animate-pulse">
            arrow_forward_ios
          </span>
        </div>
        <div className='flex flex-col mt-2 md:ml-6 text-center md:text-left'>
          <span className="hover:text-blue-500 transition duration-300 ease-in-out">BrandShark</span>
          <span className='text-2xl text-gray-400'>SDE Intern | Apr 2024 - Jul 2024</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <ul className="text-gray-300 list-disc ml-5">
          <li>Developed a real-time collaboration tool with document editing, chat functionality, and task management using ReactJS and Node.js.</li>
          <li>Implemented secure user authentication and responsive design, increasing user engagement by 25%.</li>
          <li>Optimized effort by 40% through effective stakeholder engagement and clear technical specifications.</li>
          <li>Technologies Used: Node.js, ReactJS, AWS, MySQL, Git, Gemini, ChatGPT, Jest.</li>
        </ul>
      </div>
    </div>

    {/* Experience 2 */}
    <div className="flex flex-col md:flex-row md:space-x-12">
      <div className="md:w-1/2  flex flex-col lg:flex-row items-center md:items-start text-3xl font-bold">
        <div className="flex flex-row  items-center justify-center md:justify-start">
          <span className="material-symbols-outlined text-5xl md:text-6xl -mr-3 md:-mr-5 text-blue-500 animate-pulse">
            arrow_forward_ios
          </span>
          <span className="text-blue-500 text-5xl md:text-6xl -ml-3 md:-ml-5 material-symbols-outlined animate-pulse">
            arrow_forward_ios
          </span>
        </div>
        <div className='flex flex-col mt-2 md:ml-6 text-center md:text-left'>
          <span className="hover:text-blue-500 transition duration-300 ease-in-out">AQMENZ Automation Pvt. Ltd</span>
          <span className='text-2xl text-gray-400'>FrontEnd Dev Intern | Aug 2023 - Oct 2023</span>
        </div>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <ul className="text-gray-300 list-disc ml-5">
          <li>Developed web applications using ReactJS and Redux, improving performance by 30%.</li>
          <li>Enhanced front-end features, leading to a 25% increase in user engagement.</li>
          <li>Contributed to design projects and created web development materials.</li>
          <li>Technologies Used: ReactJs, Redux, JEST, AWS.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

  );
}

export default Experience;
