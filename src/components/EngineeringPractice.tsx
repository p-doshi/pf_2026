import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Layers, Settings, Target } from 'lucide-react';

interface ExperienceEntryProps {
  role: string;
  org: string;
  period: string;
  type: string;
  domain: string;
  systems: string[];
  responsibilities: string;
  constraints: string;
  outcomes: string;
  key?: React.Key;
}

const ExperienceEntry = ({ 
  role, org, period, type, domain, systems, responsibilities, constraints, outcomes 
}: ExperienceEntryProps) => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-12 pb-20 border-l border-accent/30 last:pb-0"
  >
    {/* Timeline Node */}
    <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-focus border border-base" />
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <div className="sticky top-24">
          <div className="flex flex-col gap-1 mb-4">
            <span className="text-[10px] font-mono text-focus/40 uppercase tracking-[0.2em]">
              {type} // {period}
            </span>
            <h3 className="text-2xl font-sans font-medium text-focus">{role}</h3>
            <span className="text-lg font-serif italic text-focus/70">{org}</span>
          </div>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <Layers size={14} className="text-focus/30" />
              <span className="text-xs font-mono text-focus/50 uppercase tracking-widest">{domain}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {systems.map((s, i) => (
                <span key={i} className="text-[9px] font-mono text-focus/40 px-2 py-0.5 bg-accent/10 border border-accent/20">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8 bg-panel/40 border border-accent/20 p-8 lg:p-10 shadow-inner">
        <div className="space-y-10">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Settings size={16} className="text-focus/30" />
              <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest">Technical Responsibilities</h4>
            </div>
            <p className="text-focus/80 leading-relaxed font-light">{responsibilities}</p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Briefcase size={16} className="text-focus/30" />
              <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest">Environmental Constraints</h4>
            </div>
            <p className="text-focus/80 leading-relaxed font-light italic opacity-80">{constraints}</p>
          </section>

          <section className="pt-6 border-t border-accent/10">
            <div className="flex items-center gap-3 mb-4">
              <Target size={16} className="text-focus/30" />
              <h4 className="text-[10px] font-mono text-focus/40 uppercase tracking-widest">System Outcomes</h4>
            </div>
            <p className="text-focus/90 leading-relaxed font-medium">{outcomes}</p>
          </section>
        </div>
      </div>
    </div>
  </motion.div>
);

export const EngineeringPractice = () => {
  const experiences = [
    {
      role: "Machine Learning Research Assistant",
      org: "MAPS Lab — Dalhousie University",
      period: "Jan 2025 – Present",
      type: "Research",
      domain: "Trajectory Modeling / Multimodal Learning",
      systems: ["PyTorch", "AIS Data", "LSTM", "NPINN", "T2Vec", "LLMs", "MARL", "Acoustic Signal Processing"],
      responsibilities: "Designed and optimized large-scale AIS preprocessing pipelines handling 60GB+ maritime data across 1,000+ vessels. Developed and evaluated physics-informed trajectory models (LSTM, NPINN, T2Vec), fine-tuned large language models using parameter-efficient methods (LoRA) and GRPO-style optimization, applied LLM-based reward shaping to guide MARL policies, and currently developing a multi-modal acoustic signal classification framework for ship detection.",
      constraints: "Irregular sampling, noisy geospatial signals, physically inconsistent motion patterns, and multi-modal integration challenges requiring constraint-aware and multimodal learning approaches.",
      outcomes: "Increased usable trajectory data volume by 40%, reduced preprocessing time by 35%, improved positional RMSE and stability of forecastable trajectories, and enabled advanced AI-driven maritime analytics combining AIS, acoustic, and LLM-guided learning."
    },
    {
      role: "Research Engineer Intern",
      org: "Dalhousie University",
      period: "Sept 2025 – Dec 2025",
      type: "Applied Research / Systems Engineering",
      domain: "Computer Vision / Distributed Systems",
      systems: ["YOLO11n", "DeepCut", "React", "TypeScript", "Node.js", "LLMs", "Cloudflare", "Vercel"],
      responsibilities:
        "Built end-to-end ML and infrastructure systems including a quantization-aware vision pipeline and a production serverless platform forecasting Arctic rescue response times across multiple operational zones.",
      constraints:
        "On-device inference limits, distributed deployment requirements, and reliability constraints for real-world operational decision systems.",
      outcomes:
        "Achieved 88% mAP on detection tasks and shipped a globally distributed LLM-integrated platform with automated CI/CD and edge routing.",
    },
    {
      role: "Machine Learning Engineer",
      org: "RBC Borealis — LSi",
      period: "Oct 2025 – Dec 2025",
      type: "Applied Machine Learning",
      domain: "Environmental Modeling",
      systems: ["Python", "Gradient Boosting", "Time-Series Modeling"],
      responsibilities:
        "Developed predictive models for eelgrass biomass dynamics using ecological growth constraints and seasonally-aware response modeling.",
      constraints:
        "Strong environmental variability and biological realism requirements preventing unconstrained statistical modeling.",
      outcomes:
        "Produced a 7-day forecasting model achieving MAE of 4.42 across validation datasets using rolling-window temporal inputs.",
    },
    {
      role: "Data Science Intern",
      org: "DeepSense",
      period: "Jan 2025 – May 2025",
      type: "Industry Research",
      domain: "Oceanographic Data Systems",
      systems: ["Python", "FastAPI", "PCA", "Geospatial Data"],
      responsibilities:
        "Standardized multi-terabyte environmental datasets combining satellite, AIS, and oceanographic sources while building automated preprocessing and validation infrastructure.",
      constraints:
        "Heterogeneous schemas, large-scale datasets, and cross-project deployment requirements.",
      outcomes:
        "Improved data integration efficiency by 45% and reduced model onboarding time from hours to minutes.",
    },
    {
      role: "AI Engineer",
      org: "Project MANTIS — Dalhousie Space Systems Society",
      period: "Oct 2023 – Feb 2025",
      type: "Applied Research / Edge AI",
      domain: "Remote Sensing / Autonomous Systems",
      systems: ["PyTorch", "ResNet", "DBSCAN", "C++", "NVIDIA Jetson Orin"],
      responsibilities:
        "Developed hybrid computer vision pipelines for harmful algal bloom detection using satellite imagery and deployed models on satellite edge hardware.",
      constraints:
        "Limited onboard compute, power-state variability, and real-time inference requirements in orbital environments.",
      outcomes:
        "Enabled sub-second onboard inference with fault-tolerant scheduling for nano-satellite deployment (launch planned 2026).",
    },
     {
      role: "Machine Learning Engineer",
      org: "Zeuron — Project GamBit",
      period: "June 2024 – Feb 2025",
      type: "Applied Research / Edge ML",
      domain: "BCI / Signal Classification",
      systems: ["Python", "PyTorch", "TFLite", "EEG", "Microcontrollers"],
      responsibilities:
        "Developed learning pipelines for classification of SSVEP EEG signals from the occipital lobe to enable thought-driven gameplay interaction. Designed continuous time-series processing workflows optimized for real-time inference.",
      constraints:
        "Non-stationary EEG signals, temporal drift across sessions, and strict compute limitations requiring deployment on low-powered edge microcontrollers.",
      outcomes:
        "Deployed an end-to-end inference pipeline on embedded hardware achieving stable F1-score performance under signal drift using adaptive temporal modeling approaches."
    },
    {
      role: "Junior Game Developer",
      org: "Zeuron — Project GamBit",
      period: "May 2024 – Aug 2024",
      type: "Game Development",
      domain: "Interactive Systems / Human-Computer Interaction",
      systems: ["Unity", "C#", "Arduino", "BLE", "UDP", "Computer Vision"],
      responsibilities:
        "Developed gameplay systems and accessibility features including configurable settings for volume, brightness, and colorblind-friendly modes. Built a custom networking API connecting a Unity environment to an Arduino-based BLE controller via UDP.",
      constraints:
        "Real-time synchronization between hardware controllers and gameplay systems while maintaining low interaction latency.",
      outcomes:
        "Integrated real-time eye-tracking models to dynamically adjust player camera movement based on gaze position, enabling adaptive interaction mechanisms."
    }
  ];

  return (
    <section id="practice" className="py-24 px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-20">
          <span className="text-xs font-mono text-focus/40 tracking-[0.3em] uppercase">
            Engineering Practice
          </span>
          <div className="flex-1 h-px bg-accent/20" />
        </div>
        
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};
