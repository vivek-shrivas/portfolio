export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'backend' | 'other';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'EcoTrack Dashboard',
    description: 'A comprehensive dashboard for monitoring environmental metrics with interactive visualizations and real-time data updates.',
    imageUrl: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'MongoDB'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '2',
    title: 'HealthSync App',
    description: 'Mobile application for tracking health metrics, setting fitness goals, and receiving personalized wellness recommendations.',
    imageUrl: 'https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React Native', 'Redux', 'Firebase', 'HealthKit API'],
    category: 'mobile',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '3',
    title: 'SmartHome Hub',
    description: 'IoT platform for managing smart home devices with automated routines, energy usage tracking, and voice control integration.',
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Python', 'MQTT', 'AWS IoT', 'React', 'GraphQL'],
    category: 'backend',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: '4',
    title: 'CodeCollab',
    description: 'Real-time collaborative code editor with syntax highlighting, version control integration, and video conferencing.',
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Vue.js', 'Socket.io', 'Express', 'PostgreSQL', 'Docker'],
    category: 'web',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: '5',
    title: 'FinTrack API',
    description: 'Secure financial data aggregation API with transaction categorization, budget analysis, and custom reporting features.',
    imageUrl: 'https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'JWT'],
    category: 'backend',
    githubUrl: '#'
  },
  {
    id: '6',
    title: 'UrbanExplorer',
    description: 'Location-based application for discovering local attractions, events, and hidden gems with personalized recommendations.',
    imageUrl: 'https://images.pexels.com/photos/7412056/pexels-photo-7412056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Flutter', 'Dart', 'Google Maps API', 'Firebase', 'ML Kit'],
    category: 'mobile',
    demoUrl: '#',
    githubUrl: '#'
  }
];