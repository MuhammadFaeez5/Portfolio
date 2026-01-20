
import React from 'react';
import { Cpu, Layers, Terminal, Rocket, CheckCircle2, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="reveal flex flex-col md:flex-row justify-between items-baseline mb-32 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-black uppercase tracking-[0.5em] text-neonPurple mb-6">Temporal Record</h2>
            <h3 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white">THE <span className="text-gray-600">EVOLUTION</span></h3>
          </div>
          <div className="text-gray-500 font-mono text-xs text-right">
             EST_ARCHIVE_LOCK: 0x2A9F4 <br />
             STATUS: SECURE_HISTORY
          </div>
        </div>

        <div className="relative space-y-24">
          {/* Central Charging Rail */}
          <div className="absolute left-10 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-neonPurple via-neonBlue to-transparent h-full animate-[shimmer_3s_infinite]" style={{ backgroundSize: '200% 200%' }}></div>
          </div>

          {EXPERIENCE.map((exp, index) => (
            <div key={index} className={`reveal relative flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Date Indicator on Rail */}
              <div className="absolute left-10 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[#050505] bg-gray-900 flex items-center justify-center z-10 group-active:scale-150 transition-transform">
                 <div className="w-2 h-2 rounded-full bg-neonBlue shadow-[0_0_10px_#00f2ff]"></div>
              </div>

              {/* Spacer for Timeline */}
              <div className="hidden md:block w-1/2"></div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                <div className="glass-card p-10 rounded-[3rem] hover:border-neonPurple/50 transition-all duration-700 group relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-neonPurple shadow-2xl">
                    <Calendar size={20} />
                  </div>
                  
                  <div className="text-xs font-black text-neonPurple mb-4 uppercase tracking-[0.3em]">{exp.period}</div>
                  <h4 className="text-3xl font-bold text-white mb-2 group-hover:text-neonBlue transition-colors">{exp.role}</h4>
                  <div className="text-gray-400 font-bold mb-6 italic">@{exp.company}</div>
                  <p className="text-gray-500 leading-relaxed mb-8">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:border-neonPurple/30 transition-all">
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
           <button className="px-12 py-6 glass-card rounded-3xl text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-white hover:text-black transition-all duration-500">
              Download Full Protocol.PDF
           </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
