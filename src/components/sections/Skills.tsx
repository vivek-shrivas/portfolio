import React, { useState } from 'react';
import Section from '../ui/Section';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].id);
  
  const activeSkills = skillsData.find(category => category.id === activeCategory)?.skills || [];

  return (
    <Section
      id="skills"
      title="My Skills"
      subtitle="Technologies and tools I work with"
    >
      {/* Category Tabs */}
      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
        {activeSkills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {getSkillLevelText(skill.level)}
              </span>
            </div>
            <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-500 ease-out group-hover:bg-gradient-to-r from-blue-600 to-teal-400"
                style={{ width: `${skill.level * 20}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Additional Skills Showcase */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Other Technologies I've Worked With
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {getAllSkills().map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Helper function to convert numeric level to text description
const getSkillLevelText = (level: number): string => {
  switch (level) {
    case 1: return 'Beginner';
    case 2: return 'Basic';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'Unknown';
  }
};

// Helper function to get a list of additional skills
const getAllSkills = (): string[] => {
  // This is a hardcoded list of additional technologies that might not be in the main skills
  return [
    'Webpack', 'Vite', 'Redux', 'Styled Components',
    'Material UI', 'Next.js', 'Netlify', 'Vercel', 'GitHub Actions',
     'Figma', 'Storybook', 'Cypress', 
    'Socket.io', 'Framer Motion'
  ];
};

export default Skills;