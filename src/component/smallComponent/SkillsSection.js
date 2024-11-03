import React, { useContext } from 'react';
import { MyContext } from '../..';
import { SkillsLan } from '../../Language/AboutLan';

const SkillsSection = () => {
  const { language } = useContext(MyContext);
  const lan = SkillsLan[language];

  return (
    <div className="text-white mt-14">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">{lan.title}</h2>

        {/* Languages */}
        <div className="mb-3">
          <h3 className="text-2xl text-blue-400 mb-1">{lan.categories.languages.title}</h3>
          <div className="flex flex-wrap gap-4">
            {lan.categories.languages.skills.map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg">{skill}</div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div className="mb-3">
          <h3 className="text-2xl text-green-400 mb-1">{lan.categories.frontend.title}</h3>
          <div className="flex flex-wrap gap-4">
            {lan.categories.frontend.skills.map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg">{skill}</div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="mb-3">
          <h3 className="text-2xl text-purple-400 mb-1">{lan.categories.backend.title}</h3>
          <div className="flex flex-wrap gap-4">
            {lan.categories.backend.skills.map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg">{skill}</div>
            ))}
          </div>
        </div>

        {/* Testing */}
        <div className="mb-3">
          <h3 className="text-2xl text-red-400 mb-1">{lan.categories.testing.title}</h3>
          <div className="flex flex-wrap gap-4">
            {lan.categories.testing.skills.map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg">{skill}</div>
            ))}
          </div>
        </div>

        {/* Version Control */}
        <div className="mb-3">
          <h3 className="text-2xl text-yellow-400 mb-1">{lan.categories.versionControl.title}</h3>
          <div className="flex flex-wrap gap-4">
            {lan.categories.versionControl.skills.map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg">{skill}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
