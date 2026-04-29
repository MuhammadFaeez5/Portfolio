
import { Project, SkillCategory, ExperienceEntry } from './types';
import React from 'react';
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MedBot AI Health Assistant',
    description: '',
    techStack: ['Python', 'Llama-3.3-70B', 'Groq', 'Streamlit'],
    githubUrl: 'https://github.com/MuhammadFaeez5/Medical-Chatbot',
    liveUrl: 'https://medicalaibot.streamlit.app/',
    image: '/medbot.png'
  },
  {
    id: '2',
    title: 'Traffic Congestion Control',
    description: '',
    techStack: ['Numpy', 'Pandas','Decision Trees', 'Streamlit'],
    githubUrl: 'https://github.com/MuhammadFaeez5/Traffic-Congestion-Control',
    liveUrl: 'https://trafficcongestion.streamlit.app/',
    image: '/traffic.png'
  },
  {
    id: '3',
    title: 'Superstore Visual Search',
    description: '',
    techStack: ['Python', 'Numpy', 'CLIP', 'Streamlit'],
    githubUrl: 'https://github.com/MuhammadFaeez5/Superstore-Image-Search',
    liveUrl: 'https://searchgoodsbyimage.streamlit.app/',
    image: '/superstore.png'
  },
  {
    id: '4',
    title: 'Salary Prediction App',
    description: '',
    techStack: ['Python','Numpy','Pandas', 'Linear Regression', 'Streamlit'],
    githubUrl: 'https://github.com/MuhammadFaeez5/Salary-Prediction-APP',
    liveUrl: 'https://salaryprediction56.streamlit.app/',
    image: '/salary.png'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'C++', 'SQL']
  },
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLP', 'Computer Vision', 'GenAI']
  },
  {
    title: 'Web Development',
    skills: ['React', 'PHP', 'Tailwind CSS', 'GraphQL', 'Redux']
  },
  {
    title: 'Tools & Cloud',
    skills: ['AWS','GCP', 'Git', 'Colab', 'Jupyter']
  }
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: ' AI Intern',
    company: 'WAMO Labs',
    period: 'Aug 2025 - Nov 2025',
    description: '',
    tech: ['Python','Numpy', 'PyTorch', 'AWS', 'RLHF']
  },
  {
    role: 'AI/ML Engineering Intern',
    company: 'Developers Hub Corporation',
    period: 'June 2025 - July 2025',
    description: '',
    tech: ['Python','Pipelines', 'scikit-learn', 'RAG Chatbots','EDA','Data Visualization']
  },
  
];
