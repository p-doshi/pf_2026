import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronRight } from 'lucide-react';

const LogEntry = ({ date, title, content, tags }: { date: string, title: string, content: string, tags: string[], key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="border-l border-accent/10 pl-8 pb-12 relative group"
  >
    <div className="absolute -left-1 top-0 w-2 h-2 rounded-full bg-accent/20 border border-base group-hover:bg-focus/40 transition-colors" />
    <div className="flex flex-col gap-2 mb-4">
      <span className="text-[10px] font-mono text-focus/20 uppercase tracking-widest">{date}</span>
      <h4 className="text-lg font-sans font-light text-focus/70 group-hover:text-focus/90 transition-colors">
        {title}
      </h4>
    </div>
    <p className="text-sm text-focus/40 leading-relaxed mb-6 max-w-2xl font-light italic">
      {content}
    </p>
    <div className="flex flex-wrap gap-3 opacity-40 group-hover:opacity-100 transition-opacity">
      {tags.map((tag, i) => (
        <span key={i} className="text-[9px] font-mono text-focus/40 uppercase tracking-widest">
          #{tag}
        </span>
      ))}
    </div>
  </motion.div>
);

export const WorkLog = () => {
 const entries = [
    {
      date: "2025.08",
      title: "RAGosaurus: Lightweight Codebase RAG",
      content:
        "Developed a functional notebook RAG pipeline for Python codebases, enabling question-answering without high-memory LLaMA deployment. Combined CodeT5 embeddings, optional SBERT, FAISS retrieval, and microsoft/phi-2 generation, optimized for low VRAM GPUs.",
      tags: ["RAG", "CODE", "ML", "EMBEDDINGS", "FAISS"]
    },
    {
      date: "2025.06",
      title: "IRL-CSFT: Curiosity via Successor Feature Transitions",
      content:
        "Enhanced successor-feature IRL methods with intrinsic reward r = r_env + α · Var(ψ(s)), encouraging exploration aligned with long-term behavior. Evaluated on MuJoCo locomotion benchmarks, achieving reduced training variance and faster early convergence.",
      tags: ["IRL", "RL", "SUCCESSOR_FEATURES", "CSFT"]
    },
    {
      date: "2025.06",
      title: "AIS Trajectory Modeling & Physics-Informed LSTMs",
      content:
        "Designed large-scale AIS preprocessing pipelines (60GB+ data, 1,000+ vessels). Developed physics-informed trajectory models (LSTM, NPINN, T2Vec) improving positional RMSE and extending stable forecast horizons.",
      tags: ["AIS", "LSTM", "NPINN", "TRAJECTORY", "PYTORCH"]
    },
    {
      date: "2026.02",
      title: "Multi-Modal Acoustic Ship Detection",
      content:
        "Building a framework integrating raw waveforms and LOFARgrams to detect ships. Investigating classical feature engineering vs CBAM-based CNNs, cross-medium generalization, and physics-informed pre-processing for improved detection accuracy.",
      tags: ["ACOUSTICS", "MULTIMODAL", "CNN", "SHIP_DETECTION"]
    },
    {
      date: "2026.03",
      title: "Adaptive AIS MAC Policy with RL",
      content:
        "Formulated AIS transmission scheduling as a sequential decision process. Developed an adaptive MAC policy using PPO to optimize transmission timing based on spatial context, vessel dynamics, local density, and historical success metrics while respecting regulatory constraints.",
      tags: ["AIS", "RL", "PPO", "COMMUNICATION", "MAC"]
    }
  ];

  return (
    <section id="log" className="py-24 px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
            Research Log & Notes
          </span>
          <div className="flex-1 h-px bg-accent/10" />
        </div>

        <div className="space-y-0">
          {entries.map((entry, i) => (
            <LogEntry 
              key={i} 
              date={entry.date}
              title={entry.title}
              content={entry.content}
              tags={entry.tags}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-4 px-8 py-3 border border-accent/20 text-xs font-mono text-focus/40 uppercase tracking-widest hover:border-focus/40 hover:text-focus/80 transition-all group">
            <BookOpen size={14} />
            View Full Archive
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
