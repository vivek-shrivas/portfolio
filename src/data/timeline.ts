export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
  tags?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    id: '1',
    title: 'Freelancer Web Developer',
    organization: 'Shrinivas Auto Engineering',
    location: 'Pune , Mahashtra',
    period: 'OCT 2024 - MAR 2025',
    description: 'Designed and built a user centric web page , Based on Client demand',
    type: 'experience',
    tags: ['Algorithms', 'Machine Learning', 'Software Architecture']
  },
  {
    id: '2',
    title: 'Master Of Computer Applications',
    organization: 'Vishwakarma University Pune',
    location: 'Pune , Mahashtra',
    period: '2024 - Persuing',
    description: 'Specialized in software engineering and artificial intelligence. ',
    type: 'education',
    tags: ['Algorithms', 'Machine Learning', 'Software Architecture']
  },
  {
    id: '3',
    title: 'Bachelor Of Computer Applications',
    organization: 'Savitri Bai Phule Pune University',
    location: 'Pune , Mahashtra',
    period: '2021 -2024',
    description: 'Graduated with honors. Coursework included data structures, computer architecture, and software design principles.',
    type: 'education',
    tags: ['Data Structures', 'Computer Architecture', 'Software Design']
  }
];