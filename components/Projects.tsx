
import React from 'react';
import AiImage from './AiImage';
import { ExternalLink, Github, ArrowUpRight, Plus } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-charcoal">
      <div className="container mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row justify-between items-end mb-24 gap-10 max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-violet"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-violet">Portfolio Archive</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white">SELECTED <br /> <span className="text-gray-800">WORKS.</span></h2>
          </div>
          <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-white transition-colors">
            View All Experiments <Plus size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="reveal-up group relative rounded-[4rem] overflow-hidden bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[16/11] overflow-hidden">
                <AiImage 
                  prompt={project.imagePrompt} 
                  className="w-full h-full scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent opacity-80"></div>
              </div>

              <div className="p-12">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 glass rounded-full text-[9px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-4xl font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tighter">
                  {project.title}
                </h3>
                
                <p className="text-gray-500 text-lg leading-relaxed mb-10 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-8">
                    <a href={project.githubUrl} className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
                    <a href={project.liveUrl} className="text-gray-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                  </div>
                  <button className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
