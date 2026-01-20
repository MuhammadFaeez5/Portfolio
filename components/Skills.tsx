
import React from 'react';
import { 
  Terminal, 
  BrainCircuit, 
  Code2, 
  Cloud, 
  Cpu,
  Activity,
  Box,
  Zap
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const SkillModule: React.FC<{ category: any, index: number, icon: React.ReactNode, accent: string }> = ({ category, index, icon, accent }) => {
  const accentColor = accent === 'accent' ? '#38BDF8' : '#818CF8';
  
  return (
    <div 
      className="reveal-up group relative p-1 rounded-[3rem] bg-white/5 hover:bg-gradient-to-br hover:from-white/10 hover:to-transparent transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-surface rounded-[2.9rem] p-10 h-full flex flex-col border border-white/5 soft-shadow">
        <div className="flex items-center justify-between mb-10">
          <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10`} style={{ color: accentColor }}>
            {icon}
          </div>
          <div className="text-right">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mb-1">Performance</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[10px] font-mono font-bold text-white">MAX_OUTPUT</span>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }}></span>
            </div>
          </div>
        </div>

        <h4 className="text-2xl font-black text-white mb-8 tracking-tighter">{category.title}</h4>

        <div className="grid grid-cols-1 gap-5 mb-auto">
          {category.skills.map((skill: string, i: number) => (
            <div key={skill} className="group/item">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover/item:text-white transition-colors">{skill}</span>
                <span className="text-[10px] font-mono text-slate-600">{90 - (i * 4)}%</span>
              </div>
              <div className="h-[3px] w-full bg-charcoal rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-1000 ease-out origin-left shadow-[0_0_10px_rgba(56,189,248,0.2)]" 
                  style={{ 
                    width: `${90 - (i * 10)}%`, 
                    backgroundColor: accentColor,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-30 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-slate-500" />
            <span className="text-[8px] font-black uppercase tracking-widest text-slate-500">IO_Latency: 0.2ms</span>
          </div>
          <div className="text-[8px] font-black uppercase tracking-widest text-slate-500">CORE_V{index + 1}</div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const icons = [<Terminal size={24} />, <BrainCircuit size={24} />, <Code2 size={24} />, <Cloud size={24} />];
  const accents = ['accent', 'violet', 'accent', 'violet'];

  return (
    <section id="skills" className="py-32 bg-[#121b2d] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="reveal flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Technical Matrix</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none">THE <br /> <span className="text-slate-700">FOUNDRY.</span></h2>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            <div className="p-5 glass rounded-2xl flex items-center gap-4 bg-charcoal border-white/5">
              <Cpu size={20} className="text-accent" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">AI_OPTIMIZED_BUILD</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <SkillModule 
              key={cat.title} 
              category={cat} 
              index={idx} 
              icon={icons[idx]} 
              accent={accents[idx]} 
            />
          ))}
        </div>

        <div className="reveal scale-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Architectures', value: 'Scalable', icon: <Box size={16} /> },
            { label: 'Stability', value: 'High', icon: <Zap size={16} /> },
            { label: 'Uptime', value: '100%', icon: <Activity size={16} /> },
            { label: 'Logic', value: 'Clean', icon: <Code2 size={16} /> }
          ].map((stat) => (
            <div key={stat.label} className="p-8 bg-surface rounded-[2rem] border border-white/5 flex items-center gap-6 group hover:bg-charcoal hover:soft-shadow transition-all">
              <div className="text-slate-500 group-hover:text-accent transition-colors">{stat.icon}</div>
              <div>
                <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
