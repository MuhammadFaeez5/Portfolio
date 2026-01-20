
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [theme] = useState<'dark'>('dark');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('stagger')) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              (child as HTMLElement).style.transitionDelay = `${i * 100}ms`;
            });
          }
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .scale-up, .stagger');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-charcoal text-slate-300 min-h-screen hero-gradient">
      <Navbar theme="dark" toggleTheme={() => {}} />
      
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="py-24 border-t border-white/5 bg-[#0b1221] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="reveal scale-up bg-surface p-6 rounded-[2rem] border border-white/5 mb-12">
              <span className="text-2xl font-black tracking-widest text-white uppercase">FAEEZ.DIGITAL</span>
            </div>
            <div className="stagger flex flex-wrap justify-center gap-12 mb-16">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble', 'Medium'].map((social) => (
                <a key={social} href="#" className="text-slate-500 hover:text-accent transition-all text-[10px] font-black uppercase tracking-[0.4em]">
                  {social}
                </a>
              ))}
            </div>
            <p className="reveal text-slate-600 text-[9px] font-mono uppercase tracking-[0.6em]">
              MUHAMMAD FAEEZ // &copy; {new Date().getFullYear()} ENGINEERED IN MID-TONE SLATE
            </p>
          </div>
        </div>
      </footer>

      {/* Subtle Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}></div>
    </div>
  );
};

export default App;
