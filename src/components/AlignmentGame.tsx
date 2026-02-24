import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowDown } from 'lucide-react';

const REFERENCE = "GATTC GCTAC GTACA".split("");
const READS = [
  { id: 1, seq: "GATTC", offset: 0 },
  { id: 2, seq: "TTCGC", offset: 2 },
  { id: 3, seq: "GCTAC", offset: 6 },
  { id: 4, seq: "TACAT", offset: 11 }, // Contains 'A' instead of 'G'
  { id: 5, seq: "CGTAC", offset: 8 },
];

const AlignmentGame: React.FC = () => {
  const [alignedReads, setAlignedReads] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleAlign = (id: number) => {
    if (!alignedReads.includes(id)) {
      setAlignedReads([...alignedReads, id]);
      setScore(s => s + 1);
    }
  };

  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h2 className="text-lg font-bold text-slate-900 mb-1">Interactive: Alignment</h2>
        <p className="text-xs text-slate-500">Drag each read up to its matching position on the reference genome.</p>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl relative flex-1 min-h-[400px] overflow-hidden select-none border-4 border-slate-800 shadow-inner">
        {/* Reference Genome Track */}
        <div className="flex justify-center gap-1 mb-16 border-b border-slate-700 pb-4">
          {REFERENCE.map((base, i) => (
            <div key={i} className={`w-9 h-9 flex items-center justify-center font-bold font-mono text-lg rounded ${base === ' ' ? 'invisible' : 'bg-slate-800 text-slate-400 border border-slate-700'}`}>
              {base}
            </div>
          ))}
        </div>

        {/* Floating Reads */}
        <div className="relative h-[200px] mt-10">
          {READS.map((read, i) => {
            const isAligned = alignedReads.includes(read.id);
            return (
              <motion.div
                key={read.id}
                drag={!isAligned}
                dragConstraints={{ top: -200, bottom: 50, left: -100, right: 100 }}
                dragSnapToOrigin={!isAligned}
                onDragEnd={(_e, info) => {
                   if (info.offset.y < -80) handleAlign(read.id);
                }}
                animate={isAligned ? { x: (read.offset - 7.5) * 40, y: -140 + (i * 30), scale: 1 } : { x: (i % 2 === 0 ? -100 : 100), y: 0 }}
                className={`absolute left-1/2 flex gap-1 p-1 rounded-md cursor-grab active:cursor-grabbing transition-shadow ${isAligned ? 'bg-indigo-500/20 border border-indigo-500/50 shadow-none' : 'bg-white text-slate-900 shadow-xl border border-slate-200'}`}
                style={{ marginLeft: '-100px' }} // Adjusted centering
              >
                {read.seq.split("").map((char, charIdx) => (
                  <div key={charIdx} className={`w-8 h-8 flex items-center justify-center font-mono font-bold rounded ${isAligned ? 'text-indigo-300' : 'bg-slate-100'}`}>
                    {char}
                  </div>
                ))}
                {!isAligned && (
                   <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white flex items-center gap-1 opacity-50 font-bold uppercase tracking-widest">
                      <ArrowDown size={10} className="rotate-180"/> Match Position
                   </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Variant Call Logic */}
        <AnimatePresence>
          {score === READS.length && (
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="absolute bottom-4 left-4 right-4 bg-green-500 p-4 rounded-xl border border-green-400 text-white shadow-lg"
            >
               <h3 className="font-bold flex items-center gap-2 text-md mb-1"><Check size={18} /> Alignment Complete!</h3>
               <p className="text-xs opacity-90">
                  Read #4 found a mismatch (A) at Position 11. This is a <strong>Variant Call</strong>.
               </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AlignmentGame;