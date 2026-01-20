
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  imagePrompt: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light'
}
