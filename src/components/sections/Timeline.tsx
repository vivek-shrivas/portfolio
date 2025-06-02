import React, { useState } from 'react';
import Section from '../ui/Section';
import { timelineData, TimelineItem } from '../../data/timeline';
import { BriefcaseIcon, GraduationCap, Calendar, MapPin } from 'lucide-react';

type FilterType = 'all' | 'education' | 'experience';

const Timeline = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const filteredData = timelineData.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <Section
      id="experience"
      title="My Journey"
      subtitle="Education and professional experience that shaped my career"
    >
      {/* Filter Buttons */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'all'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('experience')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'experience'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Work Experience
          </button>
          <button
            onClick={() => setFilter('education')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filter === 'education'
                ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
          >
            Education
          </button>
        </div>
      </div>
      
      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        {/* Timeline Items */}
        <div className="space-y-12">
          {filteredData.map((item, index) => (
            <TimelineCard 
              key={item.id} 
              item={item} 
              position={index % 2 === 0 ? 'left' : 'right'} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

interface TimelineCardProps {
  item: TimelineItem;
  position: 'left' | 'right';
}

const TimelineCard = ({ item, position }: TimelineCardProps) => {
  // On mobile, all cards are full width
  // On desktop, cards alternate between left and right
  return (
    <div className={`relative flex items-center justify-between md:justify-normal ${
      position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
    }`}>
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 bg-blue-500 dark:bg-blue-400 z-10"></div>
      
      {/* Card */}
      <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${
        position === 'right' ? 'md:ml-8' : 'md:mr-8'
      }`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
          {/* Icon and Title */}
          <div className="flex items-center mb-3">
            <div className="mr-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              {item.type === 'education' ? (
                <GraduationCap size={20} />
              ) : (
                <BriefcaseIcon size={20} />
              )}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
          </div>
          
          {/* Organization and Location */}
          <div className="mb-3">
            <div className="text-lg font-medium text-gray-800 dark:text-gray-200">{item.organization}</div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{item.period}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                <span>{item.location}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
          
          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium rounded bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Empty space for alignment on desktop */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  );
};

export default Timeline;