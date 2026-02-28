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
      title: "Multimodal Acoustic Signal Analysis",
      description: "Exploring the integration of raw waveforms and spectrogram-based representations (e.g., LOFARgrams) for robust ship detection and classification. Evaluating physics-informed approaches versus deep learning methods, and studying cross-medium generalization (air, water).",
      questions: [
        "Do multimodal representations outperform single-modality frameworks across different environments (air vs water)?",
        "Is classical feature engineering still competitive, or do modern deep learning methods like CBAM-based CNNs capture more relevant patterns?",
        "How can physical properties of acoustic propagation be incorporated into model architectures or pre-processing steps?"
      ]
    },
    {
      title: "Climate and Environmental Factors in the Gulf of St. Lawrence",
      description: "Analyzing the impact of climate-related variables on maritime operations and AIS data reliability. Focus on unique winter conditions, ice coverage, and the limitations of reanalysis datasets like ERA5 for wind and sea state estimation.",
      questions: [
        "Which environmental factors most strongly affect vessel trajectories and navigational safety in GSL?",
        "How do thin ice sheets (<1m) influence transmission, maneuvering, and collision risk, and how can models account for intermittent data?",
        "What adjustments are needed when ERA5 or other reanalysis datasets underestimate or overestimate local wind speeds by up to 40%?"
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
