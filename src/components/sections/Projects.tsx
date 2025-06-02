import React, { useState } from 'react';
import Section from '../ui/Section';
import { projectsData, Project } from '../../data/projects';
import { ExternalLink, Github, Eye } from 'lucide-react';
import Button from '../ui/Button';

type FilterType = 'all' | 'web' | 'mobile' | 'backend' | 'other';

const Projects = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  
  const filteredProjects = projectsData.filter(project => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  return (
    <Section
      id="projects"
      title="My Projects"
      subtitle="Check out some of my recent work"
      className="bg-gray-50 dark:bg-gray-900"
    >
      {/* Filter Buttons */}
      <div className="flex justify-center mb-12 overflow-x-auto pb-2">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          <FilterButton label="All" filter="all" currentFilter={filter} onClick={setFilter} />
          <FilterButton label="Web" filter="web" currentFilter={filter} onClick={setFilter} />
          <FilterButton label="Mobile" filter="mobile" currentFilter={filter} onClick={setFilter} />
          <FilterButton label="Backend" filter="backend" currentFilter={filter} onClick={setFilter} />
          <FilterButton label="Other" filter="other" currentFilter={filter} onClick={setFilter} />
        </div>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {/* More Projects Button */}
      <div className="text-center mt-12">
        <Button
          href="#"
          variant="outline"
          size="lg"
          icon={<ExternalLink size={18} />}
        >
          View All Projects
        </Button>
      </div>
    </Section>
  );
};

interface FilterButtonProps {
  label: string;
  filter: FilterType;
  currentFilter: FilterType;
  onClick: (filter: FilterType) => void;
}

const FilterButton = ({ label, filter, currentFilter, onClick }: FilterButtonProps) => (
  <button
    onClick={() => onClick(filter)}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
      currentFilter === filter
        ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
    }`}
  >
    {label}
  </button>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-100 dark:border-gray-700 transition-all hover:shadow-lg">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {project.featured && (
          <div className="absolute top-2 right-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
            Featured
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full">
            {project.category}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Actions */}
        <div className="flex gap-3">
          {project.demoUrl && (
            <Button
              href={project.demoUrl}
              variant="primary"
              size="sm"
              icon={<Eye size={16} />}
              className="flex-1"
            >
              Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              variant={project.demoUrl ? 'outline' : 'primary'}
              size="sm"
              icon={<Github size={16} />}
              className="flex-1"
            >
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;