import React from 'react';
import { motion } from 'motion/react';

const Area = ({ title, description, questions }: { title: string, description: string, questions: string[], key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="border-b border-accent/20 py-12 group"
  >
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <h3 className="text-2xl font-sans font-normal text-focus group-hover:text-focus/100 transition-colors">
          {title}
        </h3>
      </div>
      <div className="md:col-span-8">
        <p className="text-focus/70 mb-6 leading-relaxed">
          {description}
        </p>
        <div className="space-y-3">
          {questions.map((q, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="text-xs font-mono text-focus/30 mt-1">Q_{i+1}</span>
              <p className="text-sm font-mono text-focus/50 italic">{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export const InvestigationAreas = () => {
  const areas = [
    {
      title: "Latent Space Dynamics",
      description: "Investigating how high-dimensional representations evolve during training in transformer-based architectures. Focus on identifying structural phase transitions in the attention maps.",
      questions: [
        "Can we predict model convergence by observing topological changes in latent space?",
        "How do specific architectural constraints influence the geometry of the learned manifold?"
      ]
    },
    {
      title: "Decentralized Consensus in Noisy Environments",
      description: "Exploring robust consensus algorithms for swarm robotics where communication links are intermittent and high-latency. Applying game-theoretic models to ensure stability.",
      questions: [
        "What is the minimum information exchange required for global synchronization?",
        "How do we handle Byzantine actors in a purely peer-to-peer research network?"
      ]
    },
    {
      title: "Hardware-Aware Neural Architecture Search",
      description: "Developing automated methods to find optimal neural architectures that respect strict power and latency constraints of edge devices without sacrificing significant accuracy.",
      questions: [
        "Is there a fundamental limit to model compression before semantic loss occurs?",
        "How can we integrate hardware telemetry directly into the loss function?"
      ]
    }
  ];

  return (
    <section id="investigations" className="py-24 px-12 lg:px-24 bg-panel/30">
      <div className="max-w-5xl">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
            Current Investigation Areas
          </span>
          <div className="flex-1 h-px bg-accent/10" />
        </div>
        
        <div className="space-y-0">
          {areas.map((area, i) => (
            <Area 
              key={i} 
              title={area.title}
              description={area.description}
              questions={area.questions}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
