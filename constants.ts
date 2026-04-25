
import { Project, SkillCategory, ExperienceEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MedBot AI Health Assistant',
    description: 'A sophisticated LLM-powered chatbot using RAG (Retrieval-Augmented Generation) for real-time company knowledge base interaction.',
    techStack: ['Python', 'Llama-3.3-70B', 'Groq', 'Streamlit'],
    githubUrl: '#',
    liveUrl: 'https://medicalaibot.streamlit.app/',
    imagePrompt: 'A futuristic digital brain avatar neon blue and purple glowing lines'
  },
  {
    id: '2',
    title: 'Traffic Congestion Control',
    description: '',
    techStack: ['PyTorch', 'Pandas', 'Streamlit', 'NumPy'],
    githubUrl: '#',
    liveUrl: '#',
    imagePrompt: 'Cyberpunk eye with digital scanning lines matrix effect'
  },
  {
    id: '3',
    title: 'Superstore Visual Search',
    description: '',
    techStack: ['Python', 'Streamlit', 'Numpy', 'CLIP'],
    githubUrl: '#',
    liveUrl: 'https://searchgoodsbyimage.streamlit.app/',
    imagePrompt: 'Abstract data visualization waves with neon highlights'
  },
  {
    id: '4',
    title: 'Salary Prediction App',
    description: '',
    techStack: ['Python', 'Streamlit', 'Linear Regression'],
    githubUrl: '#',
    liveUrl: 'https://salaryprediction56.streamlit.app/',
    imagePrompt: 'Abstract human faces silhouettes connected by digital pulses'
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
    description: 'ments.',
    tech: ['Python', 'PyTorch', 'AWS', 'RLHF']
  },
  {
    role: 'AI/ML engineering intern',
    company: 'Developers Hub Corporation',
    period: 'June 2025 - July 2025',
    description: '',
    tech: ['Python', 'scikit-learn', 'RAG Chatbots']
  },
  
];
