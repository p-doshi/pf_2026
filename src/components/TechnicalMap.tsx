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
          label="Edge Systems"
          level={8}
          tags={["Rust", "C++", "TFLite", "Edge Deployment", "OS Internals"]}
        />
        <Competency
          label="Web & Cloud"
          level={7}
          tags={["Docker", "AWS", "Terraform", "Web Services", "Cloudfare", "Vercel"]}
        />
        <Competency
          label="Machine Learning & AI"
          level={9}
          tags={["PyTorch", "JAX", "Transformers", "RL"]}
        />
        <Competency
          label="Geospatial & Maritime"
          level={8}
          tags={["AIS Data", "Trajectory Modeling", "ArcGIS", "QGIS", "Physics-Informed Modeling", "Maritime Analytics"]}
        />
        <Competency
          label="Data & Infrastructure"
          level={8}
          tags={["PostgreSQL", "Data Modeling", "FAISS", "ETL Pipelines"]}
        />
        <Competency
          label="Research & Tooling"
          level={8}
          tags={["Python", "NumPy", "Pandas", "MuJoCo", "Simulation", "LaTeX", "Experimentation"]}
        />
      </div>

      </div>
    </section>
  );
};
