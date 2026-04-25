
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Work', id: 'projects' },
    { name: 'Expertise', id: 'skills' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-charcoal/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-white text-charcoal flex items-center justify-center font-black text-lg rounded-xl group-hover:bg-accent transition-colors duration-500">
            MF
          </div>
          <span className={`text-xs font-black tracking-[0.4em] uppercase text-white hidden sm:block ${isScrolled ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
            MUHAMMAD FAEEZ
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-accent ${
                activeSection === link.id ? 'text-accent' : 'text-slate-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-px bg-white/10"></div>
          <a
            href="Faeez Resume-.pdf"
            target="_blank"
            className="px-6 py-2 bg-white text-charcoal rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-accent transition-all shadow-lg shadow-accent/20">
            RESUME
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-b border-white/5 p-10 flex flex-col gap-8 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-black uppercase tracking-tighter text-white"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
