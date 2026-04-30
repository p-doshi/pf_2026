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
    title: "Adaptive AIS MAC Policy via Reinforcement Learning",
    problem: "Standard AIS Medium Access Control (MAC) protocols are static, leading to high collision rates in congested maritime zones and suboptimal slot utilization. Current policies do not adapt to real-time channel conditions or learn from historical congestion patterns.",
    approach: "Formulated AIS transmission scheduling as a sequential decision process. Developed a reinforcement learning-based adaptive MAC policy using PPO to optimize transmission timing based on spatial context, vessel dynamics, local density, and historical success metrics while respecting regulatory and safety constraints.",
    technicalDecisions: [
      "State vector includes latitude/longitude, speed, heading, vessel class, local vessel density, time since last transmission, and historical success rates",
      "Action space: transmit immediately or defer by 1–n slots within regulatory transmission window",
      "Reward function: +1 for successful transmission, -0.1 per deferred slot, -5 for exceeding regulatory maximum interval",
      "Simulated AIS environment incorporates collision probability, VHF propagation effects, realistic vessel movements, and heterogeneous vessel classes",
      "Policy trained using Proximal Policy Optimization (PPO) for continuous state and constrained action spaces"
    ],
    learnings: "Adaptive MAC policies can significantly reduce collisions and improve successful transmission rates in high-density regions. Reinforcement learning enables context-aware scheduling that balances throughput, fairness, and regulatory compliance. Early results indicate policy can be executed efficiently on resource-constrained onboard hardware.",
    status: 'completed' as const
  },  
  {
    title: "RAGosaurus: Lightweight Codebase RAG",
    problem: "No practical RAG pipeline exists for analyzing codebases on low-memory GPUs; deploying large LLaMA models is prohibitively expensive.",
    approach: "Built a lightweight, functional notebook-based RAG pipeline where users point it at a Python code folder and can query it directly. Combines token-aware chunking, embeddings, and retrieval.",
    technicalDecisions: [
      "Used CodeT5 for code-aware embeddings, optional SBERT for semantic matching",
      "Mean-pooled embeddings with attention masks for stability",
      "FAISS flat L2 index persisted to disk for fast retrieval",
      "Generator: microsoft/phi-2 for natural-language answer generation",
      "Chunking: 500-token max with 100-token stride to preserve function/class context",
      "Batch embedding and caching to fit within 6GB GPU memory"
    ],
    learnings: "Efficient retrieval and generation is feasible on low-memory GPUs. Overlapping chunking significantly improved answer completeness for function-level queries. Found SBERT + FAISS to be surprisingly competitive with code-only embeddings in small-scale setups.",
    status: 'completed' as const
  },
  {
    title: "IRL-CSFT: Curiosity via Successor Feature Transitions",
    problem: "Existing curiosity-driven IRL approaches (e.g., RND, SFM) struggle with temporal abstraction and policy consistency, especially under partial observability.",
    approach: "Augmented successor-feature IRL with an intrinsic reward r = r_env + α · Var(ψ(s)) to encourage exploration aligned with long-term behavioral structure. Modified agents to incorporate this reward while training with SFM baselines.",
    technicalDecisions: [
      "sfm_td7.py — main logic for training with intrinsic rewards",
      "sfm_td7_org.py — baseline SFM implementation for comparison",
      "Evaluated on MuJoCo locomotion tasks (Walker Run, Cheetah Run)",
      "Analyzed convergence speed, training variance, and imitation fidelity against expert trajectories"
    ],
    learnings: "CSFT reduced training variance and improved early convergence. Intrinsic reward based on successor feature variance encouraged exploration aligned with long-term behavior, outperforming standard curiosity-driven methods in partially observable environments.",
    status: 'completed' as const
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
