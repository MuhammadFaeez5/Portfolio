
import React from 'react';
import { Target, Users, Award, Sparkles, Cpu } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#121b2d] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="reveal-left space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-[13px] font-black uppercase tracking-[0.5em] text-accent">Executive Summary</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none">
                BUILDING LOGIC <br />
                <span className="text-slate-600">INTO INNOVATION.</span>
              </h2>
              
              <div className="space-y-8 text-xl text-slate-400 font-medium leading-relaxed">
                <p>
                  I am <span className="text-white font-bold">Muhammad Faeez</span>. A software engineer with a passion for crafting elegant solutions to complex problems. With over a year of experience in the industry, I have honed my skills in building scalable and efficient systems that drive real-world impact. I enjoy solving real-world problems and turning ideas into working solutions using modern technologies.
                </p>
              </div>

              <div className="p-10 glass rounded-[3rem] border-l-4 border-l-accent flex items-start gap-8 group hover:border-white/10 transition-all duration-500">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-charcoal transition-all duration-500">
                  <Sparkles size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">The Vision</h4>
                  <p className="text-slate-500 italic text-lg leading-relaxed">"To build intelligent systems that solve real problems and create meaningful user experiences."</p>
                </div>
              </div>
            </div>

            <div className="reveal-right grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-10 rounded-[3rem] border border-white/5 hover:border-accent/30 transition-all group soft-shadow">
                <Award size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">01+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Years of Precision</div>
              </div>

              <div className="bg-surface p-10 rounded-[3rem] border border-white/5 hover:border-violet/30 transition-all group soft-shadow">
                <Target size={32} className="text-violet mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">10+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Deployments</div>
              </div>

              <div className="md:col-span-2 bg-charcoal p-12 rounded-[3rem] border border-white/5 flex flex-col justify-between h-72 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Users size={200} className="text-white" />
                </div>
                <Cpu size={32} className="text-accent mb-6" />
                <div>
                  <div className="text-4xl font-black text-white mb-3 tracking-tighter">Intelligent Solutions</div>
                  <p className="text-slate-500 text-lg leading-relaxed">Integrating advanced Machine Learning and LLM frameworks to automate complexity and drive data-driven decision making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
