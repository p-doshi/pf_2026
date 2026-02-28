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
      date: "2024.02.15",
      title: "Observations on Latent Space Drift",
      content: "Noticed a significant drift in the attention weights of the second layer during training on the synthetic dataset. This seems to correlate with the model's inability to generalize to out-of-distribution samples. Hypothesizing that the layer is overfitting to local noise early in the training process.",
      tags: ["ML", "TRANSFORMERS", "OBSERVATION"]
    },
    {
      date: "2024.01.28",
      title: "Implementing a Custom Gossip Protocol",
      content: "The standard gossip protocol was too aggressive for our low-bandwidth simulation environment. Switched to a pull-based mechanism where nodes request updates only when their local state hash differs from the network average. Reduced overhead by 40%.",
      tags: ["DISTRIBUTED", "NETWORKING", "OPTIMIZATION"]
    },
    {
      date: "2024.01.10",
      title: "Formal Verification of State Machine",
      content: "Using TLA+ to model the consensus state machine. Found a potential deadlock scenario when three nodes attempt to join the network simultaneously under high latency. Redesigning the join phase to include a randomized backoff strategy.",
      tags: ["FORMAL_METHODS", "TLA+", "SYSTEM_DESIGN"]
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
