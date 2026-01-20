
import React, { useState, useEffect } from 'react';
import AiImage from './AiImage';
import { ArrowRight, ChevronDown } from 'lucide-react';

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
      {/* Background Lighting Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Ghostly Background Name */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <h1 className="text-[35vw] font-black tracking-tighter leading-none text-white">FAEEZ</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-12">
            <div className="reveal-left inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 soft-shadow">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Muhammad Faeez // Portfolio 2025</span>
            </div>

            <div className="reveal-left">
              <h2 className="text-[12vw] lg:text-[7.5vw] font-black leading-[0.85] tracking-tighter text-white mb-8">
                CRAFTING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-violet">INTELLIGENCE</span>.
              </h2>
            </div>

            <div className="reveal-left flex items-center gap-4 text-2xl font-mono text-slate-500">
               <span className="text-accent italic">{"//"}</span>
               <span className="text-white font-bold">{displayText}</span>
               <span className="w-1.5 h-8 bg-accent animate-pulse"></span>
            </div>

            <p className="reveal-left text-slate-400 text-xl max-w-xl leading-relaxed font-medium">
              Bridging the gap between sophisticated AI architectures and high-performance digital experiences. Crafting the invisible logic of tomorrow.
            </p>

            <div className="reveal-left flex flex-wrap gap-6 items-center">
               <a href="#projects" className="px-12 py-6 bg-white text-charcoal font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-accent transition-all duration-500 flex items-center gap-3 shadow-2xl shadow-white/5">
                  EXPLORE WORKS <ArrowRight size={16} />
               </a>
               <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-charcoal bg-surface"></div>
                  ))}
                  <div className="pl-6 text-[10px] font-black uppercase tracking-widest text-slate-500">Collaborating Worldwide</div>
               </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal scale-up hidden lg:block">
            <div className="relative z-10 aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl">
              <AiImage 
                prompt="Stunning minimalist conceptual portrait of an engineer light beams and digital circuits deep slate background professional photography" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 p-8 glass rounded-3xl">
                 <div className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-2">Focus Area</div>
                 <div className="text-lg font-bold text-white">Neural Pipelines & High-Scale Cloud Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 reveal animate-bounce text-slate-600">
         <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;
