
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, MessageSquare, Globe, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-charcoal">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-left space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Initiate Contact</span>
              </div>
              <h2 className="text-6xl lg:text-[8vw] font-black tracking-tighter text-white leading-none">
                START <br /> <span className="text-gray-800">TALKING.</span>
              </h2>
            </div>

            <div className="stagger space-y-8">
              <a href="mailto:faeez@engineer.com" className="flex items-center gap-8 p-10 glass rounded-[3rem] hover:bg-white hover:text-black transition-all group duration-700">
                <Mail size={32} className="text-accent group-hover:text-black" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1 group-hover:text-black/50">Personal Uplink</div>
                  <div className="text-2xl lg:text-3xl font-black">faeez@engineer.com</div>
                </div>
              </a>
              
              <div className="flex gap-6">
                {[Github, Linkedin, Globe].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-16 h-16 rounded-3xl glass flex items-center justify-center text-gray-500 hover:text-white hover:border-white/20 transition-all">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right">
             <div className="p-12 glass rounded-[4rem] relative overflow-hidden">
                {submitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-700">
                    <div className="text-accent text-6xl font-black mb-6 tracking-tighter">SENT.</div>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Muhammad will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-10">
                    <div className="space-y-2 group">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Identification</label>
                      <input 
                        required
                        className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-10 py-6 text-white focus:outline-none focus:border-accent transition-all text-lg font-bold placeholder:opacity-20"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Neural Relay</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-10 py-6 text-white focus:outline-none focus:border-accent transition-all text-lg font-bold placeholder:opacity-20"
                        placeholder="Your Email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-4">Mission Brief</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/5 rounded-[2rem] px-10 py-6 text-white focus:outline-none focus:border-accent transition-all text-lg font-bold placeholder:opacity-20 resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button className="w-full py-8 bg-white text-black rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-accent transition-all duration-500 flex items-center justify-center gap-4">
                      Deploy Message <ArrowRight size={20} />
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
