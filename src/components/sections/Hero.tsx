import React from 'react';
import { ArrowDownCircle, Mail } from 'lucide-react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -left-20 top-1/4 w-72 h-72 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4">
              Software Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Vivek Shrivas</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
              Building innovative digital experiences with clean code and creative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
              href="/resume.pdf" 
              variant="primary" 
              size="lg" 
              icon={<ArrowDownCircle size={20} />}
              >
              Download Resume
              </Button>
              <Button 
                href="#contact" 
                variant="outline" 
                size="lg" 
                icon={<Mail size={20} />}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-8 border-white dark:border-gray-800 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-400 flex items-center justify-center text-white text-6xl font-bold">
                VS
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={e => {
              e.preventDefault();
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center p-1">
              <div className="w-1.5 h-1.5 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mt-1"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;