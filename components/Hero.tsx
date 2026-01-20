
import React, { useState, useEffect } from 'react';
import AiImage from './AiImage';
import { ArrowRight, Terminal, Activity, Zap, Layers, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = ['AI Engineer', 'Solution Architect', 'Full Stack Dev'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(isDeleting ? currentRole.substring(0, displayText.length - 1) : currentRole.substring(0, displayText.length + 1));
      }
    }, isDeleting ? 40 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-charcoal">
      {/* Background Lighting */}
      <div className="absolute top-0 left-0 w-full h-full luminous-glow pointer-events-none opacity-40"></div>
      
      {/* Massive Background Name */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h1 className="text-[35vw] font-black tracking-tighter leading-none animate-float text-white">FAEEZ</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="reveal-left inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">Muhammad Faeez // Portfolio 2025</span>
            </div>

            <div className="reveal-left">
              <h2 className="text-[12vw] lg:text-[7vw] font-black leading-[0.8] tracking-tighter text-white mb-6">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet">INTELLIGENCE</span>.
              </h2>
            </div>

            <div className="reveal-left flex items-center gap-4 text-2xl font-mono text-gray-400">
               <span className="text-accent italic">{"//"}</span>
               <span>{displayText}</span>
               <span className="w-2 h-8 bg-accent animate-pulse"></span>
            </div>

            <p className="reveal-left text-gray-400 text-xl max-w-xl leading-relaxed font-medium">
              I specialize in bridging the gap between sophisticated AI models and high-performance digital experiences. My work is where logic meets aesthetics.
            </p>

            <div className="reveal-left flex flex-wrap gap-6 items-center">
               <a href="#projects" className="px-12 py-6 bg-white text-black font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent transition-all duration-500 flex items-center gap-3 shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                  See My Work <ArrowRight size={16} />
               </a>
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-white/10 backdrop-blur-sm"></div>
                  ))}
                  <div className="pl-6 text-[10px] font-black uppercase tracking-widest text-gray-500">Trusted by Global Partners</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal scale-up hidden lg:block">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)]">
              <AiImage 
                prompt="Stunning minimalist conceptual portrait of an engineer made of light beams and digital circuits dark background professional photography" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl">
                 <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2">Currently Focus</div>
                 <div className="text-xl font-bold text-white">Generative AI Pipelines & Neural Architecture</div>
              </div>
            </div>
            {/* Decorative Grid */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle_at_2px_2px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 reveal animate-bounce text-gray-600">
         <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
