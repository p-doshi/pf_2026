import React from 'react';
import { motion } from 'motion/react';

const Competency = ({ label, level, tags }: { label: string, level: number, tags: string[] }) => (
  <div className="border border-accent/20 p-6 bg-panel/20 hover:bg-panel/40 transition-colors">
    <div className="flex justify-between items-end mb-4">
      <h4 className="text-lg font-sans font-light text-focus">{label}</h4>
      <span className="text-[10px] font-mono text-focus/30">LVL_{level}</span>
    </div>
    <div className="w-full h-1 bg-accent/10 mb-6 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level * 10}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-focus/40"
      />
    </div>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span key={i} className="text-[10px] font-mono text-focus/50 px-2 py-0.5 border border-accent/10">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export const TechnicalMap = () => {
  return (
    <section id="system" className="py-24 px-12 lg:px-24 bg-panel/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
            System Capability Map
          </span>
          <div className="flex-1 h-px bg-accent/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Competency 
            label="Core Systems" 
            level={9} 
            tags={["Rust", "C++", "Distributed Systems", "OS Internals"]} 
          />
          <Competency 
            label="Machine Learning" 
            level={8} 
            tags={["PyTorch", "JAX", "Transformers", "RL"]} 
          />
          <Competency 
            label="Data Infrastructure" 
            level={7} 
            tags={["PostgreSQL", "Redis", "Kafka", "Data Modeling"]} 
          />
          <Competency 
            label="Research Tooling" 
            level={8} 
            tags={["Python", "NumPy", "Pandas", "LaTeX"]} 
          />
          <Competency 
            label="Cloud Systems" 
            level={6} 
            tags={["Docker", "K8s", "AWS", "Terraform"]} 
          />
          <Competency 
            label="Formal Methods" 
            level={5} 
            tags={["TLA+", "Alloy", "Model Checking"]} 
          />
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-accent/10 pt-16">
          <div className="lg:col-span-4">
            <h4 className="text-xs font-mono text-focus/40 uppercase tracking-widest mb-6">Technical Evolution</h4>
            <div className="space-y-8">
              {[
                { year: "2022", event: "Shift from application development to systems research." },
                { year: "2023", event: "Focus on distributed consensus and formal verification." },
                { year: "2024", event: "Integration of ML models into real-time control loops." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-xs font-mono text-focus/30">{item.year}</span>
                  <p className="text-sm text-focus/60 leading-relaxed">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-8">
             <div className="aspect-video bg-panel/40 border border-accent/20 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #D2C1B6 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                </div>
                <div className="text-center p-12">
                  <p className="text-xs font-mono text-focus/40 uppercase tracking-widest mb-4">System Architecture Visualization</p>
                  <div className="flex flex-col gap-4 items-center">
                    <div className="w-32 h-12 border border-focus/30 flex items-center justify-center text-[10px] font-mono">USER_INTERFACE</div>
                    <div className="w-0.5 h-8 bg-focus/20" />
                    <div className="w-48 h-12 border border-focus/30 flex items-center justify-center text-[10px] font-mono">DISTRIBUTED_ENGINE</div>
                    <div className="w-0.5 h-8 bg-focus/20" />
                    <div className="flex gap-4">
                      <div className="w-24 h-12 border border-focus/30 flex items-center justify-center text-[10px] font-mono">NODE_A</div>
                      <div className="w-24 h-12 border border-focus/30 flex items-center justify-center text-[10px] font-mono">NODE_B</div>
                      <div className="w-24 h-12 border border-focus/30 flex items-center justify-center text-[10px] font-mono">NODE_C</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
