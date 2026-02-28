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
      role: "Distributed Systems Intern",
      org: "Core Infrastructure Group",
      period: "Summer 2023",
      type: "Research Internship",
      domain: "Cloud Infrastructure",
      systems: ["Go", "Kubernetes", "etcd", "gRPC"],
      responsibilities: "Optimized the consensus layer of a proprietary distributed key-value store. Focused on reducing tail latency during leader election cycles in multi-region deployments.",
      constraints: "Required zero-downtime migration paths and strict adherence to p99 latency SLAs under simulated network partitions.",
      outcomes: "Reduced average leader election time by 22% and eliminated a class of race conditions in the membership change protocol."
    },
    {
      role: "Junior Software Engineer",
      org: "Autonomous Robotics Lab",
      period: "2022 - 2023",
      type: "Part-time Engineering",
      domain: "Robotics / Embedded",
      systems: ["C++", "ROS2", "Linux Kernel", "RTOS"],
      responsibilities: "Developed low-latency drivers for high-frequency LIDAR sensors. Integrated real-time telemetry pipelines into the core navigation stack.",
      constraints: "Extremely limited memory overhead (under 64MB) and hard real-time constraints for safety-critical obstacle avoidance.",
      outcomes: "Stabilized sensor data throughput at 100Hz with zero frame drops, enabling higher-speed autonomous navigation in dynamic environments."
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
