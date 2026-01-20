
import React from 'react';
import { 
  Terminal, 
  BrainCircuit, 
  Code2, 
  Cloud, 
  Cpu,
  Zap,
  Activity,
  Box
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../constants';

const SkillModule: React.FC<{ category: any, index: number, icon: React.ReactNode, accent: string }> = ({ category, index, icon, accent }) => {
  const accentColor = accent === 'accent' ? '#00d2ff' : '#7000ff';
  
  return (
    <div 
      className="reveal-up group relative p-1 rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-700"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="bg-surface/90 backdrop-blur-3xl rounded-[3.4rem] p-10 h-full flex flex-col border border-white/5">
        {/* Module Header */}
        <div className="flex items-center justify-between mb-10">
          <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]`} style={{ color: accentColor }}>
            {icon}
          </div>
          <div className="text-right">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 mb-1">Status</div>
            <div className="flex items-center gap-2 justify-end">
              <span className="text-[10px] font-mono font-bold text-white">OPTIMIZED</span>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: accentColor }}></span>
            </div>
          </div>
        </div>

        <h4 className="text-3xl font-black text-white mb-8 tracking-tighter">{category.title}</h4>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 gap-4 mb-auto">
          {category.skills.map((skill: string, i: number) => (
            <div key={skill} className="flex items-center gap-4 group/item">
              <div className="w-2 h-2 rounded-full bg-white/10 group-hover/item:bg-white transition-all"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover/item:text-white transition-colors">{skill}</span>
                  <span className="text-[10px] font-mono text-gray-700">{85 + (index * 2) - (i * 3)}%</span>
                </div>
                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-out origin-left group-hover:scale-x-110" 
                    style={{ 
                      width: `${90 - (i * 10)}%`, 
                      backgroundColor: accentColor,
                      boxShadow: `0 0 10px ${accentColor}`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Metrics */}
        <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between opacity-40 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-gray-500" />
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Latency: 2ms</span>
          </div>
          <div className="text-[8px] font-black uppercase tracking-widest text-gray-500">Node_ID: 0x{index + 1}F</div>
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const icons = [<Terminal size={28} />, <BrainCircuit size={28} />, <Code2 size={28} />, <Cloud size={28} />];
  const accents = ['accent', 'violet', 'accent', 'violet'];

  return (
    <section id="skills" className="py-32 bg-charcoal relative overflow-hidden">
      {/* Dynamic Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,210,255,0.05)_0%,transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="reveal flex flex-col md:flex-row items-end justify-between mb-32 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Technical Core</span>
            </div>
            <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none">THE <br /> <span className="bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">MATRIX.</span></h2>
          </div>
          <div className="hidden lg:flex items-center gap-12">
            <div className="text-right">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.4em] mb-2">Systems Active</div>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <div key={i} className="w-1.5 h-6 bg-accent/20 rounded-full group-hover:bg-accent"></div>)}
              </div>
            </div>
            <div className="h-12 w-px bg-white/10"></div>
            <div className="p-4 glass rounded-2xl flex items-center gap-4">
              <Cpu size={20} className="text-accent" />
              <span className="text-xs font-mono font-bold text-white">GEN_AI_READY</span>
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

        {/* Floating Expertise Metadata */}
        <div className="reveal scale-up mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Complexity', value: 'Scalable', icon: <Box size={16} /> },
            { label: 'Stability', value: '99.9%', icon: <Zap size={16} /> },
            { label: 'Uptime', value: 'Constant', icon: <Activity size={16} /> },
            { label: 'Logic', value: 'Linear', icon: <Code2 size={16} /> }
          ].map((stat) => (
            <div key={stat.label} className="p-8 glass rounded-[2.5rem] border-white/5 flex items-center gap-6 group hover:border-white/20 transition-all">
              <div className="text-gray-500 group-hover:text-accent transition-colors">{stat.icon}</div>
              <div>
                <div className="text-[9px] font-black text-gray-500 uppercase tracking-widest">{stat.label}</div>
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
