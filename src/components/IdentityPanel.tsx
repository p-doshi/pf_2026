import React from 'react';
import { motion } from 'motion/react';

export const IdentityPanel = () => {
  return (
    <section id="identity" className="min-h-screen flex flex-col justify-center px-12 lg:px-24">
      <div className="max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-focus/30" />
            <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
              System Initialization
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-sans font-light tracking-tight text-focus mb-12 leading-[0.9]">
            Parth Doshi <br />
            <span className="italic font-serif opacity-80">ML Engineer & Researcher</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7">
              <p className="text-xl text-focus/80 leading-relaxed font-light">
                Modeling movement, signals, and interactions in complex environments, with past work spanning maritime trajectory analysis and oceanographic data systems.
Now focused on multimodal and acoustic learning approaches for vessel identification</p>
            </div>
            
            <div className="md:col-span-5 border-l border-accent/20 pl-8 pt-2">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest mb-2">Current Focus</h4>
                  <p className="text-sm font-mono text-focus/70">Uncertainty-aware multi-modality frameworks for geospatial-temporal areas</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest mb-2">University</h4>
                  <p className="text-sm font-mono text-focus/70"> PhD Student<br/> MAPS Lab <br/> Faculty of Computer Science <br/> Dalhousie University</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest mb-2">Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <p className="text-sm font-mono text-focus/70">Active Researcher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
