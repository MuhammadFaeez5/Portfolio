
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
          
          // Handle child staggers
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
    <div className="bg-charcoal text-white min-h-screen selection:bg-accent selection:text-black">
      <Navbar theme={theme} toggleTheme={() => {}} />
      
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <footer className="py-24 border-t border-white/5 bg-[#08080a] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,210,255,0.05),transparent_70%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center">
            <div className="reveal scale-up bg-white/[0.03] p-6 rounded-[2rem] border border-white/10 mb-12 sweep-effect">
              <span className="text-2xl font-black tracking-widest text-white uppercase">FAEEZ.DESIGN</span>
            </div>
            <div className="stagger flex flex-wrap justify-center gap-12 mb-16">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble', 'Medium'].map((social) => (
                <a key={social} href="#" className="text-gray-500 hover:text-white transition-all text-[10px] font-black uppercase tracking-[0.4em]">
                  {social}
                </a>
              ))}
            </div>
            <p className="reveal text-gray-700 text-[9px] font-mono uppercase tracking-[0.6em]">
              MUHAMMAD FAEEZ ARCHIVE // &copy; {new Date().getFullYear()} ALL SYSTEMS OPERATIONAL
            </p>
          </div>
        </div>
      </footer>

      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};

export default App;
