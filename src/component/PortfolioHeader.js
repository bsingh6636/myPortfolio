import React from 'react';

const PortfolioHeader = () => {
  return (
    <div className="min-h-screen text-white">
     
      {/* Content */}
      <div className="flex  flex-col-reverse md:flex-row items-center justify-between  py-20 md:py-20">
        <div className="text-left max-w-lg">
          <h2 className="text-blue-400 text-xl sm:text-2xl">Hello !!!</h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mt-2 leading-tight">
            I'm <span className="block">BRIJESH KUSHWAHA</span>
          </h1>
          <p className="mt-4 px-2 w-max bg-blue-400 p-1 rounded-lg text-black text-lg sm:text-xl uppercase">
            FULL STACK WEB DEVELOPER
          </p>
          <p className="mt-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          A passionate Full Stack Web Developer with a Bachelor's degree in Computer Science and hands-on experience in web development. Proficient in ReactJS, Java and cloud technologies such as AWS. Experienced in optimizing
          performance and integrating efficient data retrieval systems. Enthusiastic about ensuring software quality,
          implementing best practices, and working in Agile and DevOps environments

          {/* I am a passionate and motivated web developer with a solid foundation in frontend technologies like React, HTML, CSS, and JavaScript.
           My journey in software development is fueled by a desire to create intuitive and dynamic user experiences. I have a strong eye for 
           detail and am dedicated to continuous learning and growth in the tech industry. I aim to contribute to innovative projects that make
            a real impact. */}
          </p>
        </div>

        <div className="max-w-xs sm:max-w-sm md:max-w-lg mb-6 md:mb-0">
          <img src='./images/photo2.jpg' alt="Brijesh SIngh" className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="p-4 sm:p-6 text-center md:text-right">
        <p className="text-gray-400">PORTOFOLIO 2023</p>
      </footer> */}
    </div>
  );
};

export default PortfolioHeader;
