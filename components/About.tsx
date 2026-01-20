
import React from 'react';
import { Target, Users, Zap, Award, Layers, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#030303] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="reveal-left space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Personal Story</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black tracking-tighter text-white leading-none">
                I ARCHITECT <br />
                <span className="text-gray-700">THE UNSEEN</span>.
              </h2>
              
              <div className="space-y-8 text-xl text-gray-400 font-medium leading-relaxed">
                <p>
                  I'm <span className="text-white">Muhammad Faeez</span>, a creator driven by the obsession of making technology feel natural. I don't just write code; I design systems that empower users and businesses to perform at their peak.
                </p>
                <p>
                  With half a decade of deep immersion in AI research and full-stack engineering, I've developed a signature approach that combines rigid technical excellence with a fluid design sensibility.
                </p>
              </div>

              <div className="p-10 glass rounded-[3rem] border-l-4 border-l-accent flex items-start gap-8 group">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                  <Sparkles size={32} />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">My Philosophy</h4>
                  <p className="text-gray-500 italic text-lg">"The best software isn't just functional—it's transformative."</p>
                </div>
              </div>
            </div>

            <div className="reveal-right grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass p-10 rounded-[3rem] hover:border-accent/30 transition-all group">
                <Award size={32} className="text-accent mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">05+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Years of Precision</div>
              </div>

              <div className="glass p-10 rounded-[3rem] hover:border-violet/30 transition-all group">
                <Target size={32} className="text-violet mb-6 group-hover:scale-110 transition-transform" />
                <div className="text-5xl font-black text-white mb-2 tracking-tighter">40+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Production Ships</div>
              </div>

              <div className="md:col-span-2 glass p-12 rounded-[3rem] flex flex-col justify-between h-72 overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                  <Layers size={200} />
                </div>
                <Users size={32} className="text-accent mb-8" />
                <div>
                  <div className="text-5xl font-black text-white mb-2 tracking-tighter">Global Partners</div>
                  <p className="text-gray-500 text-lg">Collaborating with visionary founders and enterprise leaders worldwide.</p>
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
