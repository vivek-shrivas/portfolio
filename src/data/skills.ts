export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export const skillsData: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 5 },
      { name: 'JavaScript', level: 5 },
      { name: 'TypeScript', level: 4 },
      { name: 'React', level: 5 },
      { name: 'Angular', level: 3 },
      { name: 'Tailwind CSS', level: 4 },
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 5 },
      { name: 'Express', level: 4 },
      { name: 'Python', level: 4 },
      { name: 'Django', level: 3 },
      { name: 'Java', level: 3 },
      { name: 'RESTful APIs', level: 5 }
    ]
  },
  {
    id: 'database',
    name: 'Database',
    skills: [
      { name: 'MongoDB', level: 4 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'MySQL', level: 3 },
      { name: 'Firebase', level: 4 }
    ]
  },
  {
    id: 'devops',
    name: 'DevOps & Tools',
    skills: [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 4 },
      { name: 'CI/CD', level: 4 },
      { name: 'AWS', level: 3 },
      { name: 'Kubernetes', level: 2 },
      { name: 'Linux', level: 4 },
      { name: 'Testing', level: 4 }
    ]
  },
  {
    id: 'other',
    name: 'Other Skills',
    skills: [
      { name: 'UI/UX Design', level: 3 },
      { name: 'Agile/Scrum', level: 4 },
      { name: 'Technical Writing', level: 4 },
      { name: 'Problem Solving', level: 5 },
      { name: 'Team Leadership', level: 4 }
    ]
  }
];