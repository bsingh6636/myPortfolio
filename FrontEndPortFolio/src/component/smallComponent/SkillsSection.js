import React from 'react';

const SkillsSection = () => {
  return (
    <div className=" text-white mt-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>

        {/* Languages */}
        <div className="mb-3">
          <h3 className="text-2xl text-blue-400 mb-1">Languages</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">JavaScript</div>
            <div className="bg-gray-800 p-3 rounded-lg">Python</div>
            <div className="bg-gray-800 p-3 rounded-lg">Java</div>
            <div className="bg-gray-800 p-3 rounded-lg">PL/SQL</div>
            <div className="bg-gray-800 p-3 rounded-lg">HTML/CSS</div>
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-3">
          <h3 className="text-2xl text-green-400 mb-1">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">ReactJS</div>
            <div className="bg-gray-800 p-3 rounded-lg">Redux</div>
          </div>
        </div>

        {/* Backend */}
        <div className="mb-3">
          <h3 className="text-2xl text-purple-400 mb-1">Backend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">Node.js</div>
            <div className="bg-gray-800 p-3 rounded-lg">Flask</div>
            <div className="bg-gray-800 p-3 rounded-lg">AWS</div>
            <div className="bg-gray-800 p-3 rounded-lg">Linux</div>
          </div>
        </div>

        {/* Testing */}
        <div className="mb-3">
          <h3 className="text-2xl text-red-400 mb-1">Testing</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">Jest</div>
            <div className="bg-gray-800 p-3 rounded-lg">Postman</div>
          </div>
        </div>

        {/* Version Control */}
        <div className="mb-3">
          <h3 className="text-2xl text-yellow-400 mb-1">Version Control</h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800 p-3 rounded-lg">Git</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
