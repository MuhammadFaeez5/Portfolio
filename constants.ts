
import { Project, SkillCategory, ExperienceEntry } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cognitive AI Chatbot',
    description: 'A sophisticated LLM-powered chatbot using RAG (Retrieval-Augmented Generation) for real-time company knowledge base interaction.',
    techStack: ['Python', 'LangChain', 'OpenAI', 'Next.js'],
    githubUrl: '#',
    liveUrl: '#',
    imagePrompt: 'A futuristic digital brain avatar neon blue and purple glowing lines'
  },
  {
    id: '2',
    title: 'Neural Vision Classifier',
    description: 'Deep learning application for multi-class image recognition with 98% accuracy on complex datasets.',
    techStack: ['PyTorch', 'FastAPI', 'React', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
    imagePrompt: 'Cyberpunk eye with digital scanning lines matrix effect'
  },
  {
    id: '3',
    title: 'E-commerce Pulse',
    description: 'Real-time dashboard for e-commerce analytics with predictive inventory management using time-series forecasting.',
    techStack: ['React', 'D3.js', 'Node.js', 'AWS'],
    githubUrl: '#',
    liveUrl: '#',
    imagePrompt: 'Abstract data visualization waves with neon highlights'
  },
  {
    id: '4',
    title: 'Sentiment Flow',
    description: 'NLP tool for analyzing social media sentiment in real-time with geographic heatmaps and trend prediction.',
    techStack: ['Python', 'NLTK', 'Flask', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
    imagePrompt: 'Abstract human faces silhouettes connected by digital pulses'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C++', 'SQL']
  },
  {
    title: 'AI & Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLP', 'Computer Vision', 'GenAI']
  },
  {
    title: 'Web Development',
    skills: ['React', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Redux']
  },
  {
    title: 'Tools & Cloud',
    skills: ['Docker', 'AWS', 'Kubernetes', 'Git', 'CI/CD', 'Jupyter']
  }
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Senior AI Engineer',
    company: 'NeuralSync Technologies',
    period: '2022 - Present',
    description: 'Leading the development of generative AI pipelines and optimizing model inference performance for enterprise-scale deployments.',
    tech: ['Python', 'PyTorch', 'AWS', 'K8s']
  },
  {
    role: 'Full Stack Developer',
    company: 'Skyline Solutions',
    period: '2020 - 2022',
    description: 'Built and maintained highly scalable React applications and Node.js microservices for high-traffic financial platforms.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    role: 'ML Researcher (Intern)',
    company: 'Core AI Labs',
    period: '2019 - 2020',
    description: 'Focused on NLP research specifically in the domain of few-shot learning and sentiment analysis across multilingual datasets.',
    tech: ['Python', 'TensorFlow', 'BERT', 'Pandas']
  }
];
