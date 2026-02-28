import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Terminal, FlaskConical, Cpu, BookOpen, X, Briefcase } from 'lucide-react';

interface Command {
  id: string;
  label: string;
  icon: React.ElementType;
  sectionId: string;
}

const commands: Command[] = [
  { id: '1', label: 'Identity / Initialization', icon: Terminal, sectionId: 'identity' },
  { id: '2', label: 'Engineering Practice', icon: Briefcase, sectionId: 'practice' },
  { id: '3', label: 'Experimental Prototypes', icon: FlaskConical, sectionId: 'experiments' },
  { id: '4', label: 'Research Log & Notes', icon: BookOpen, sectionId: 'log' },
  { id: '5', label: 'Investigation Areas', icon: Search, sectionId: 'investigations' },
  { id: '6', label: 'System Capability Map', icon: Cpu, sectionId: 'system' },
];

export const CommandPalette = ({ onSelect }: { onSelect: (id: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (sectionId: string) => {
    onSelect(sectionId);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-base/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-xl bg-panel border border-accent/30 shadow-2xl z-[101] overflow-hidden"
          >
            <div className="flex items-center px-6 py-4 border-b border-accent/20">
              <Search size={18} className="text-focus/40 mr-4" />
              <input
                autoFocus
                type="text"
                placeholder="Search system commands... (Identity, Experiments, Log)"
                className="flex-1 bg-transparent border-none outline-none text-focus placeholder:text-focus/20 font-mono text-sm"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') {
                    setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
                  } else if (e.key === 'ArrowUp') {
                    setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
                  } else if (e.key === 'Enter') {
                    if (filteredCommands[selectedIndex]) {
                      handleSelect(filteredCommands[selectedIndex].sectionId);
                    }
                  }
                }}
              />
              <div className="flex items-center gap-2 px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] font-mono text-focus/40">
                ESC
              </div>
            </div>

            <div className="max-h-96 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, i) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd.sectionId)}
                    onMouseEnter={() => setSelectedIndex(i)}
                    className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-colors font-mono text-sm ${
                      i === selectedIndex ? 'bg-accent/20 text-focus' : 'text-focus/40 hover:bg-accent/10'
                    }`}
                  >
                    <cmd.icon size={16} />
                    <span>{cmd.label}</span>
                    {i === selectedIndex && (
                      <span className="ml-auto text-[10px] opacity-40">ENTER</span>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-focus/30 font-mono text-xs">
                  No matching system modules found.
                </div>
              )}
            </div>

            <div className="px-6 py-3 bg-accent/5 border-t border-accent/10 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex items-center gap-1 text-[10px] font-mono text-focus/30">
                  <span className="px-1 bg-accent/10 border border-accent/20 rounded">↑↓</span> Navigate
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-focus/30">
                  <span className="px-1 bg-accent/10 border border-accent/20 rounded">↵</span> Select
                </div>
              </div>
              <div className="text-[10px] font-mono text-focus/20 tracking-widest">
                SYSTEM_ACCESS_V1
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
