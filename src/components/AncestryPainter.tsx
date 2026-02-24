import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shuffle } from 'lucide-react';

const AncestryPainter: React.FC = () => {
  // 22 Chromosomes + X/Y (We'll just do 22 autosomes for simplicity)
  // Each chr has 2 copies (Mom/Dad)
  const [seed, setSeed] = useState(0);

  const generateSegments = (length: number) => {
    // Generate random ancestry blocks
    // 0=AFR (Red), 1=EUR (Blue), 2=EAS (Green)
    const blocks = [];
    let remaining = length;
    while (remaining > 0) {
      const segLen = Math.min(remaining, Math.max(10, Math.random() * 50));
      const pop = Math.floor(Math.random() * 3);
      blocks.push({ len: segLen, pop });
      remaining -= segLen;
    }
    return blocks;
  };

  const CHROMOSOMES = Array.from({ length: 22 }).map((_, i) => ({
    id: i + 1,
    len: 100 - (i * 3) // Visual length scaling
  }));

  const getColor = (pop: number) => {
    if (pop === 0) return '#ef4444'; // Red (AFR)
    if (pop === 1) return '#3b82f6'; // Blue (EUR)
    return '#10b981'; // Green (EAS)
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
           <div>
              <h2 className="text-xl font-bold text-slate-900">Chromosome Painting</h2>
              <p className="text-sm text-slate-500">Visualizing Local Ancestry (Admixture)</p>
           </div>
           <button 
             onClick={() => setSeed(s => s + 1)}
             className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700 font-bold text-sm"
           >
             <Shuffle size={16} /> Reshuffle History
           </button>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-xs">
           {CHROMOSOMES.map((chr) => (
             <div key={chr.id} className="flex items-center gap-2">
                <span className="w-6 text-slate-400 text-right">{chr.id}</span>
                <div className="flex-1 flex flex-col gap-[2px]">
                   {/* Paternal Copy */}
                   <div className="h-2 rounded-full flex overflow-hidden bg-slate-100 w-full">
                      {generateSegments(chr.len).map((seg, i) => (
                        <motion.div 
                          key={`p-${seed}-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          style={{ width: `${seg.len}%`, backgroundColor: getColor(seg.pop) }}
                        />
                      ))}
                   </div>
                   {/* Maternal Copy */}
                   <div className="h-2 rounded-full flex overflow-hidden bg-slate-100 w-full">
                      {generateSegments(chr.len).map((seg, i) => (
                        <motion.div 
                          key={`m-${seed}-${i}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          style={{ width: `${seg.len}%`, backgroundColor: getColor(seg.pop) }}
                        />
                      ))}
                   </div>
                </div>
             </div>
           ))}
        </div>

        <div className="flex justify-center gap-6 mt-6 text-xs font-bold uppercase tracking-widest">
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div> African
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div> European
           </div>
           <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div> East Asian
           </div>
        </div>
      </div>
      
      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
         <h3 className="font-bold text-slate-900 mb-2">Why is it painted in blocks?</h3>
         <p className="text-sm text-slate-700 leading-relaxed">
            You don't inherit "15% Asian" like a soup. You inherit <strong>physical chunks</strong> of DNA. 
            These chunks (Haplotypes) are cut and pasted during <strong>Recombination</strong>. 
            Older ancestry (from 50 generations ago) appears as tiny slivers. Recent ancestry (Grandma) appears as huge blocks.
         </p>
      </div>
    </div>
  );
};

export default AncestryPainter;
