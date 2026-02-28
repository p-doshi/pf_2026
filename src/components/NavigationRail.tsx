import React from 'react';
import { motion } from 'motion/react';
import { Terminal, FlaskConical, Cpu, BookOpen, Search, Briefcase } from 'lucide-react';

interface NavItemProps {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem = ({ icon: Icon, label, active, onClick }: NavItemProps) => (
  <button
    onClick={onClick}
    className={`group relative flex items-center justify-center w-12 h-12 transition-colors duration-200 ${
      active ? 'text-focus' : 'text-focus/40 hover:text-focus/80'
    }`}
  >
    <Icon size={20} />
    <span className="absolute left-14 px-2 py-1 bg-panel border border-accent/30 text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono">
      {label}
    </span>
    {active && (
      <motion.div
        layoutId="active-nav"
        className="absolute left-0 w-0.5 h-6 bg-focus"
      />
    )}
  </button>
);

export const NavigationRail = ({ activeSection, onSectionChange }: { activeSection: string, onSectionChange: (s: string) => void }) => {
  return (
    <nav className="fixed left-0 top-0 h-screen w-16 bg-panel border-r border-accent/20 flex flex-col items-center py-8 z-50">
      <div className="mb-12 text-focus/20 font-mono text-[10px] rotate-180 [writing-mode:vertical-rl]">
        SYSTEM_ID: 0x4F2A
      </div>
      
      <div className="flex-1 flex flex-col gap-6">
        <NavItem icon={Terminal} label="Identity" active={activeSection === 'identity'} onClick={() => onSectionChange('identity')} />
        <NavItem icon={Briefcase} label="Practice" active={activeSection === 'practice'} onClick={() => onSectionChange('practice')} />
        <NavItem icon={FlaskConical} label="Experiments" active={activeSection === 'experiments'} onClick={() => onSectionChange('experiments')} />
        <NavItem icon={BookOpen} label="Research Log" active={activeSection === 'log'} onClick={() => onSectionChange('log')} />
        <NavItem icon={Search} label="Investigations" active={activeSection === 'investigations'} onClick={() => onSectionChange('investigations')} />
        <NavItem icon={Cpu} label="System Map" active={activeSection === 'system'} onClick={() => onSectionChange('system')} />
      </div>

      <div className="mt-auto flex flex-col items-center gap-4">
        <div className="w-px h-12 bg-accent/20" />
        <div className="text-[10px] font-mono text-focus/40">v1.0.2</div>
      </div>
    </nav>
  );
};
