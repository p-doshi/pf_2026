import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { NavigationRail } from './components/NavigationRail';
import { IdentityPanel } from './components/IdentityPanel';
import { EngineeringPractice } from './components/EngineeringPractice';
import { InvestigationAreas } from './components/InvestigationAreas';
import { ExperimentLog } from './components/ExperimentLog';
import { TechnicalMap } from './components/TechnicalMap';
import { WorkLog } from './components/WorkLog';
import { CommandPalette } from './components/CommandPalette';

export default function App() {
  const [activeSection, setActiveSection] = useState('identity');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['identity', 'practice', 'experiments', 'investigations', 'system'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSectionSelect = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-base text-focus selection:bg-focus selection:text-base selection:bg-opacity-90">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-focus origin-left z-[60]"
        style={{ scaleX }}
      />

      <NavigationRail 
        activeSection={activeSection} 
        onSectionChange={handleSectionSelect} 
      />

      <CommandPalette onSelect={handleSectionSelect} />

      <main className="pl-16 lg:pl-24">
        {/* Background Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
          <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#D2C1B6 1px, transparent 1px), linear-gradient(90deg, #D2C1B6 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>

        <div className="relative z-10">
          <IdentityPanel />
          <EngineeringPractice />
          <ExperimentLog />
          <WorkLog />
          <InvestigationAreas />
          <TechnicalMap />
        </div>

        {/* Footer / System Status */}
        <footer className="py-12 px-12 lg:px-24 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-focus/30 uppercase tracking-widest">System Architecture</span>
              <span className="text-xs font-mono text-focus/60">Distributed // Research Node</span>
            </div>
            <div className="w-px h-8 bg-accent/10" />
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-focus/30 uppercase tracking-widest">Last Update</span>
              <span className="text-xs font-mono text-focus/60">2026.02.28 </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 border border-accent/20 text-[10px] font-mono text-focus/40 uppercase tracking-widest">
              CMD + K to navigate
            </div>
            <div className="text-[10px] font-mono text-focus/20">
              © 2026 PARTH_DOSHI
            </div>
          </div>
        </footer>
      </main>

      {/* Ambient Light Effect */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vh] bg-accent/5 blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[40vw] h-[40vh] bg-accent/5 blur-[100px] pointer-events-none -z-10" />
    </div>
  );
}
