import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Apple, Skull, Candy, RotateCcw, Bug, Ghost, Biohazard } from 'lucide-react';

type BugType = 'good' | 'bad' | 'ugly';

interface Bug {
  id: string;
  type: BugType;
  x: number;
  y: number;
}

const MicrobiomeSim: React.FC = () => {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [log, setLog] = useState<string>("Gut initialized. Ecosystem balanced.");
  
  useEffect(() => {
    reset();
  }, []);

  const reset = () => {
    const initBugs: Bug[] = [];
    for (let i = 0; i < 20; i++) addBug(initBugs, 'good');
    for (let i = 0; i < 15; i++) addBug(initBugs, 'bad');
    for (let i = 0; i < 5; i++) addBug(initBugs, 'ugly');
    setBugs(initBugs);
    setLog("Microbiome Reset.");
  };

  const addBug = (arr: Bug[], type: BugType) => {
    arr.push({
      id: Math.random().toString(36),
      type,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    });
  };

  const handleAction = (action: 'fiber' | 'sugar' | 'antibiotic') => {
    setBugs(prev => {
      let next = [...prev];
      if (action === 'fiber') {
        const goods = next.filter(b => b.type === 'good');
        if (goods.length < 50) for (let i=0; i<5; i++) addBug(next, 'good');
        if (Math.random() > 0.5) {
            const badIdx = next.findIndex(b => b.type === 'bad');
            if (badIdx > -1) next.splice(badIdx, 1);
        }
        setLog("Fiber feeds the Good Guys (Green). They multiply!");
      } 
      else if (action === 'sugar') {
        const bads = next.filter(b => b.type === 'bad');
        if (bads.length < 50) for (let i=0; i<5; i++) addBug(next, 'bad');
        if (Math.random() > 0.5) {
            const goodIdx = next.findIndex(b => b.type === 'good');
            if (goodIdx > -1) next.splice(goodIdx, 1);
        }
        setLog("Sugar feeds Firmicutes (Yellow). Good bacteria are crowded out.");
      } 
      else if (action === 'antibiotic') {
        next = next.filter(() => Math.random() > 0.8);
        for (let i=0; i<5; i++) addBug(next, 'ugly');
        setLog("Antibiotics caused a mass extinction! Pathogens (Red) exploit the chaos.");
      }
      return next;
    });
  };

  const counts = {
    good: bugs.filter(b => b.type === 'good').length,
    bad: bugs.filter(b => b.type === 'bad').length,
    ugly: bugs.filter(b => b.type === 'ugly').length,
  };
  const total = bugs.length || 1;

  return (
    <div className="w-full h-full flex flex-col gap-4 bg-slate-50 p-2">
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col gap-4 z-10">
         <div className="flex justify-between items-center">
            <h2 className="font-bold text-slate-800">Gut Ecosystem</h2>
            <button onClick={reset} className="text-slate-400 hover:text-slate-600"><RotateCcw size={16}/></button>
         </div>

         <div className="flex gap-2">
            <button onClick={() => handleAction('fiber')} className="flex-1 bg-green-50 hover:bg-green-100 text-green-700 py-2 rounded-lg text-xs font-bold flex flex-col items-center gap-1 transition-colors border border-green-200">
               <Apple size={18} /> Fiber
            </button>
            <button onClick={() => handleAction('sugar')} className="flex-1 bg-amber-50 hover:bg-amber-100 text-amber-700 py-2 rounded-lg text-xs font-bold flex flex-col items-center gap-1 transition-colors border border-amber-200">
               <Candy size={18} /> Sugar
            </button>
            <button onClick={() => handleAction('antibiotic')} className="flex-1 bg-red-50 hover:bg-red-100 text-red-700 py-2 rounded-lg text-xs font-bold flex flex-col items-center gap-1 transition-colors border border-red-200">
               <Skull size={18} /> Antibiotic
            </button>
         </div>
      </div>

      <div className="flex-1 bg-slate-900 rounded-full border-4 border-slate-700 shadow-inner relative overflow-hidden mx-auto aspect-square w-full max-w-[350px]">
         <AnimatePresence mode='popLayout'>
            {bugs.map(bug => (
               <motion.div
                  key={bug.id}
                  layoutId={bug.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                      scale: 1, 
                      opacity: 1,
                      x: bug.x * 3 + (Math.random() * 10 - 5), 
                      y: bug.y * 3 + (Math.random() * 10 - 5)
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className={`absolute flex items-center justify-center`}
                  style={{ left: `${bug.x}%`, top: `${bug.y}%` }}
               >
                  {bug.type === 'good' && <Bug size={14} className="text-green-500 fill-green-500/50" />}
                  {bug.type === 'bad' && <Ghost size={14} className="text-amber-400 fill-amber-400/50" />}
                  {bug.type === 'ugly' && <Biohazard size={16} className="text-red-500 fill-red-500/50 animate-pulse" />}
               </motion.div>
            ))}
         </AnimatePresence>
         
         <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 text-[10px] font-bold text-white/80 pointer-events-none">
             <div className="flex items-center gap-1"><Bug size={10} className="text-green-500"/> Good ({Math.round(counts.good/total*100)}%)</div>
             <div className="flex items-center gap-1"><Ghost size={10} className="text-amber-400"/> Firmicutes ({Math.round(counts.bad/total*100)}%)</div>
             <div className="flex items-center gap-1"><Biohazard size={10} className="text-red-600"/> Pathogen ({Math.round(counts.ugly/total*100)}%)</div>
         </div>
      </div>

      <div className="bg-white p-3 rounded-xl border border-slate-200 text-center min-h-[60px] flex items-center justify-center shadow-sm">
         <p className="text-sm font-medium text-slate-700 animate-in fade-in slide-in-from-bottom-2 key={log}">
            {log}
         </p>
      </div>
    </div>
  );
};

export default MicrobiomeSim;
