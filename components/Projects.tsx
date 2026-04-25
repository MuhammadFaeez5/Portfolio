
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
              <span className="text-[13px] font-black uppercase tracking-[0.5em] text-violet">PROTOTYPE TO PRODUCTION</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white">FEATURED <br /> <span className="text-slate-700">WORKS.</span></h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className="reveal-up group relative rounded-[3.5rem] overflow-hidden bg-surface border border-white/5 hover:shadow-2xl hover:border-white/10 transition-all duration-700"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden bg-charcoal">
                <AiImage 
                  prompt={project.imagePrompt} 
                  className="w-full h-full scale-100 group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
              </div>

              <div className="p-12">
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-charcoal rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors tracking-tighter">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed mb-10 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-8">
                    <a href={project.githubUrl} className="text-slate-500 hover:text-white transition-colors"><Github size={25} /></a>
                  </div>
                  <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-charcoal transition-all shadow-sm"
                  onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}>
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
