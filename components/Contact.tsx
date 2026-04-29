
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Globe, ArrowRight } from 'lucide-react';


const socialLinks = [
  { Icon: Github, url: "https://github.com/MuhammadFaeez5" },
  { Icon: Linkedin, url: "https://linkedin.com/in/faeez-salman" },
  { Icon: Globe, url: "https://muhammadfaeez.vercel.app" }
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 bg-[#121b2d]">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="reveal-left space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Availability_Status: Open</span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-black tracking-tighter text-white leading-none">
                SAY <br /> <span className="text-slate-800">HELLO.</span>
              </h2>
            </div>

            <div className="stagger space-y-8">
              <a href="mailto:faeez@engineer.com" className="flex items-center gap-8 p-10 bg-surface border border-white/5 rounded-[3rem] hover:bg-charcoal hover:soft-shadow transition-all group duration-700">
                <div className="w-16 h-16 rounded-2xl bg-charcoal border border-white/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail size={32} />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Electronic Mail</div>
                  <div className="text-2xl lg:text-3xl font-black text-white">faeezsalman939@gmail.com</div>
                </div>
              </a>
              
              <div className="flex gap-6">
                {socialLinks.map(({ Icon, url }, idx) => (
                  <a 
                    key={idx} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-3xl bg-surface border border-white/5 flex items-center justify-center text-slate-500 hover:text-white hover:bg-charcoal hover:soft-shadow transition-all"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right">
             <div className="p-12 bg-surface rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden">
                {submitted ? (
                  <div className="py-20 text-center animate-in zoom-in duration-700">
                    <div className="text-accent text-6xl font-black mb-6 tracking-tighter">SENT!</div>
                    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">I will get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => {e.preventDefault(); setSubmitted(true);}} className="space-y-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Full Name</label>
                      <input 
                        required
                        className="w-full bg-charcoal border border-white/5 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-accent focus:bg-[#1a2335] transition-all text-lg font-bold placeholder:text-slate-700"
                        placeholder="e.g. Ahmad"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Email Address</label>
                      <input 
                        required
                        type="email"
                        className="w-full bg-charcoal border border-white/5 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-accent focus:bg-[#1a2335] transition-all text-lg font-bold placeholder:text-slate-700"
                        placeholder="ahmad@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-4">Message</label>
                      <textarea 
                        required
                        rows={4}
                        className="w-full bg-charcoal border border-white/5 rounded-[2rem] px-8 py-6 text-white focus:outline-none focus:border-accent focus:bg-[#1a2335] transition-all text-lg font-bold placeholder:text-slate-700 resize-none"
                        placeholder="Your message..."
                      ></textarea>
                    </div>
                    <button className="w-full py-8 bg-white text-charcoal rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-xs hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-4 shadow-xl">
                      SEND <Send size={20} />
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
