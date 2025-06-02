import React from 'react';
import Section from '../ui/Section';
import { Code, Cpu, Globe, Rocket } from 'lucide-react';

const aboutContent = {
  introduction: "Hello! I'm Vivek Shrivas, a passionate software developer with a love for building innovative and efficient solutions to complex problems. My journey in the world of programming began during my college years, and I've been on an exciting learning adventure ever since.",
  
  philosophy: "I believe in writing clean, maintainable code that not only works well today but can adapt to future requirements. My approach combines technical excellence with user-centered design principles to create software that's both powerful and a joy to use.",
  
  interests: "Outside of coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing knowledge with the developer community. When I'm not in front of a computer, you might find me hiking, reading sci-fi novels, or experimenting with new recipes in the kitchen."
};

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-transform hover:translate-y-[-4px]">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400">{description}</p>
  </div>
);

const About = () => {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Get to know me and my passion for software development"
      className="bg-gray-50 dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who I Am</h3>
          <div className="h-1 w-16 bg-blue-600 dark:bg-blue-400 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {aboutContent.introduction}
          </p>
        </div>
        
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Approach</h3>
          <div className="h-1 w-16 bg-blue-600 dark:bg-blue-400 mb-6 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {aboutContent.philosophy}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {aboutContent.interests}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <AboutCard 
          icon={<Code size={24} />}
          title="Clean Code"
          description="I write maintainable, well-documented code that follows best practices and design patterns."
        />
        <AboutCard 
          icon={<Cpu size={24} />}
          title="Technical Skills"
          description="Proficient in multiple programming languages, frameworks, and development tools."
        />
        <AboutCard 
          icon={<Globe size={24} />}
          title="Web Technologies"
          description="Experienced in building responsive, accessible, and performant web applications."
        />
        <AboutCard 
          icon={<Rocket size={24} />}
          title="Continuous Learning"
          description="Always exploring new technologies and methodologies to improve my craft."
        />
      </div>
    </Section>
  );
};

export default About;