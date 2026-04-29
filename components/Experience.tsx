
import React from 'react';
import { Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-charcoal relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="reveal flex flex-col md:flex-row justify-between items-baseline mb-32 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-violet mb-6">Career Path</h2>
            <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white">THE <span className="text-slate-800">PROGRESSION.</span></h3>
          </div>
          
        </div>

        <div className="relative space-y-24">
          {/* Vertical Rail */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-accent via-violet to-transparent h-full animate-[slow-pan_5s_infinite]" style={{ backgroundSize: '100% 200%' }}></div>
          </div>

          {EXPERIENCE.map((exp, index) => (
            <div key={index} className={`reveal relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Node */}
              <div className="absolute left-10 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-charcoal bg-surface shadow-lg flex items-center justify-center z-10">
                 <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>

              <div className="hidden md:block w-1/2"></div>

              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                <div className="bg-surface p-10 rounded-[3rem] border border-white/5 hover:soft-shadow transition-all duration-700 group relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-charcoal rounded-2xl border border-white/10 flex items-center justify-center text-violet shadow-sm">
                    <Calendar size={20} />
                  </div>
                  
                  <div className="text-[10px] font-black text-violet mb-4 uppercase tracking-[0.3em]">{exp.period}</div>
                  <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{exp.role}</h4>
                  <div className="text-slate-500 font-bold mb-6 italic">@{exp.company}</div>
                  <p className="text-slate-400 leading-relaxed mb-8">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-charcoal border border-white/5 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:text-accent transition-all">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal scale-up mt-32 text-center">
           <button className="px-12 py-6 bg-white text-charcoal rounded-3xl font-black uppercase tracking-[0.4em] text-xs hover:bg-accent transition-all duration-500 shadow-xl shadow-white/5">
              Download Professional Bio.PDF
           </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
