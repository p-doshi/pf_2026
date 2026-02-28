import React from 'react';
import { motion } from 'motion/react';
import { FlaskConical, AlertCircle, CheckCircle2, Info, Cpu } from 'lucide-react';

const Experiment = ({ title, problem, approach, technicalDecisions, learnings, status }: { 
  title: string, 
  problem: string, 
  approach: string, 
  technicalDecisions: string[], 
  learnings: string,
  status: 'active' | 'completed' | 'failed',
  key?: React.Key
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-panel border border-accent/20 p-8 lg:p-12 mb-12 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-4">
      <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${
        status === 'active' ? 'border-emerald-500/30 text-emerald-400' : 
        status === 'completed' ? 'border-focus/30 text-focus/80' : 
        'border-red-500/30 text-red-400'
      }`}>
        {status === 'active' && <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
        {status}
      </div>
    </div>

    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <FlaskConical size={24} className="text-focus/40" />
        <h3 className="text-3xl font-sans font-light text-focus">{title}</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={14} className="text-focus/30" />
              <h4 className="text-xs font-mono text-focus/40 uppercase tracking-widest">Problem Statement</h4>
            </div>
            <p className="text-focus/80 leading-relaxed font-light">{problem}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 size={14} className="text-focus/30" />
              <h4 className="text-xs font-mono text-focus/40 uppercase tracking-widest">Approach & Methodology</h4>
            </div>
            <p className="text-focus/80 leading-relaxed font-light">{approach}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Cpu size={14} className="text-focus/30" />
              <h4 className="text-xs font-mono text-focus/40 uppercase tracking-widest">Technical Decisions</h4>
            </div>
            <ul className="space-y-2">
              {technicalDecisions.map((d, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[10px] font-mono text-focus/20 mt-1">[{i}]</span>
                  <span className="text-sm font-mono text-focus/60">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-accent/10 border border-accent/20 p-6">
            <div className="flex items-center gap-2 mb-3">
              <Info size={14} className="text-focus/30" />
              <h4 className="text-xs font-mono text-focus/40 uppercase tracking-widest">Learnings / Failures</h4>
            </div>
            <p className="text-sm italic text-focus/70 leading-relaxed">
              {learnings}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export const ExperimentLog = () => {
  const experiments = [
    {
      title: "Exp_01: Distributed State Sync",
      problem: "Maintaining causal consistency in a peer-to-peer network with high churn and unreliable links.",
      approach: "Implemented a hybrid CRDT-based synchronization layer with adaptive gossip protocols.",
      technicalDecisions: [
        "Used Rust for low-level memory control and safety",
        "Implemented Merkle Search Trees for efficient diffing",
        "Custom UDP-based transport layer to bypass TCP overhead"
      ],
      learnings: "Initial gossip frequency was too high, causing network congestion. Switched to an exponentially decaying gossip rate based on local state stability. Learned that eventual consistency is often 'good enough' for 90% of research data.",
      status: 'completed' as const
    },
    {
      title: "Exp_02: Autonomous Navigation in Sparse Feature Environments",
      problem: "Traditional SLAM algorithms fail in environments with few visual landmarks (e.g., long corridors).",
      approach: "Developed a multi-modal sensor fusion approach combining IMU data with low-resolution sonar.",
      technicalDecisions: [
        "Extended Kalman Filter for state estimation",
        "Particle filter for global localization",
        "C++ for real-time processing constraints"
      ],
      learnings: "Sonar reflections in narrow spaces created significant noise. The EKF struggled with non-linear motion models. Currently investigating if a transformer-based sequence model can better predict trajectory from raw sensor streams.",
      status: 'active' as const
    }
  ];

  return (
    <section id="experiments" className="py-24 px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
            Experimental Prototypes
          </span>
          <div className="flex-1 h-px bg-accent/10" />
        </div>
        
        <div className="space-y-0">
          {experiments.map((exp, i) => (
            <Experiment 
              key={i} 
              title={exp.title}
              problem={exp.problem}
              approach={exp.approach}
              technicalDecisions={exp.technicalDecisions}
              learnings={exp.learnings}
              status={exp.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
