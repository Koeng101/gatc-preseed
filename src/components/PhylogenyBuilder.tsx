import React, { useState } from 'react';
import { GitMerge } from 'lucide-react';

// Simple Distance Matrix (Lower triangular)
// Human, Chimp, Mouse, Fish
const INITIAL_MATRIX = [
  { name: 'Human', dists: [] },
  { name: 'Chimp', dists: [1.2] }, // Human-Chimp
  { name: 'Mouse', dists: [15.5, 16.0] }, // Human-Mouse, Chimp-Mouse
  { name: 'Fish', dists: [40.0, 40.5, 38.0] } // Human-Fish, Chimp-Fish, Mouse-Fish
];

const PhylogenyBuilder: React.FC = () => {
  const [step, setStep] = useState(0);
  
  // Hardcoded visual state for the tutorial
  const getTreeSVG = () => {
    if (step === 0) {
      return (
        <g>
           <circle cx="100" cy="50" r="20" fill="#3b82f6" /> <text x="100" y="55" textAnchor="middle" fill="white" fontSize="10">Human</text>
           <circle cx="200" cy="50" r="20" fill="#3b82f6" /> <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Chimp</text>
           <circle cx="300" cy="50" r="20" fill="#ef4444" /> <text x="300" y="55" textAnchor="middle" fill="white" fontSize="10">Mouse</text>
           <circle cx="400" cy="50" r="20" fill="#10b981" /> <text x="400" y="55" textAnchor="middle" fill="white" fontSize="10">Fish</text>
        </g>
      );
    }
    if (step === 1) {
      // Human + Chimp merged
      return (
        <g>
           {/* H-C Clade */}
           <path d="M150,150 L150,100 L100,100 L100,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
           <path d="M150,100 L200,100 L200,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
           
           <circle cx="100" cy="50" r="20" fill="#3b82f6" /> <text x="100" y="55" textAnchor="middle" fill="white" fontSize="10">Human</text>
           <circle cx="200" cy="50" r="20" fill="#3b82f6" /> <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Chimp</text>
           
           {/* Others independent */}
           <circle cx="300" cy="50" r="20" fill="#ef4444" /> <text x="300" y="55" textAnchor="middle" fill="white" fontSize="10">Mouse</text>
           <circle cx="400" cy="50" r="20" fill="#10b981" /> <text x="400" y="55" textAnchor="middle" fill="white" fontSize="10">Fish</text>
        </g>
      );
    }
    if (step === 2) {
      // (H+C) + Mouse merged
      return (
        <g>
           {/* H-C-M Clade */}
           <path d="M225,200 L225,150 L150,150" stroke="#94a3b8" strokeWidth="2" fill="none" />
           <path d="M225,150 L300,150 L300,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
           
           {/* Previous H-C */}
           <path d="M150,150 L150,100 L100,100 L100,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
           <path d="M150,100 L200,100 L200,50" stroke="#94a3b8" strokeWidth="2" fill="none" />

           <circle cx="100" cy="50" r="20" fill="#3b82f6" /> <text x="100" y="55" textAnchor="middle" fill="white" fontSize="10">Human</text>
           <circle cx="200" cy="50" r="20" fill="#3b82f6" /> <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Chimp</text>
           <circle cx="300" cy="50" r="20" fill="#ef4444" /> <text x="300" y="55" textAnchor="middle" fill="white" fontSize="10">Mouse</text>
           
           <circle cx="400" cy="50" r="20" fill="#10b981" /> <text x="400" y="55" textAnchor="middle" fill="white" fontSize="10">Fish</text>
        </g>
      );
    }
    // Final
    return (
      <g>
         {/* Root */}
         <path d="M312,250 L312,200 L225,200" stroke="#94a3b8" strokeWidth="2" fill="none" />
         <path d="M312,200 L400,200 L400,50" stroke="#94a3b8" strokeWidth="2" fill="none" />

         {/* Previous */}
         <path d="M225,200 L225,150 L150,150" stroke="#94a3b8" strokeWidth="2" fill="none" />
         <path d="M225,150 L300,150 L300,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
         <path d="M150,150 L150,100 L100,100 L100,50" stroke="#94a3b8" strokeWidth="2" fill="none" />
         <path d="M150,100 L200,100 L200,50" stroke="#94a3b8" strokeWidth="2" fill="none" />

         <circle cx="100" cy="50" r="20" fill="#3b82f6" /> <text x="100" y="55" textAnchor="middle" fill="white" fontSize="10">Human</text>
         <circle cx="200" cy="50" r="20" fill="#3b82f6" /> <text x="200" y="55" textAnchor="middle" fill="white" fontSize="10">Chimp</text>
         <circle cx="300" cy="50" r="20" fill="#ef4444" /> <text x="300" y="55" textAnchor="middle" fill="white" fontSize="10">Mouse</text>
         <circle cx="400" cy="50" r="20" fill="#10b981" /> <text x="400" y="55" textAnchor="middle" fill="white" fontSize="10">Fish</text>
      </g>
    );
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
           <GitMerge className="text-blue-500" /> Phylogenetic Tree Builder
        </h2>
        <p className="text-sm text-slate-600 mb-6">
           <strong>Goal:</strong> Build the tree of life by finding the closest relatives. 
           Look at the matrix below. Which two numbers are the smallest?
        </p>

        <div className="grid grid-cols-2 gap-8">
           {/* Matrix */}
           <div className="bg-slate-50 p-4 rounded-xl font-mono text-sm">
              <div className="grid grid-cols-5 gap-2 text-center mb-2 font-bold text-slate-400">
                 <div></div><div>H</div><div>C</div><div>M</div><div>F</div>
              </div>
              {INITIAL_MATRIX.map((row, i) => (
                 <div key={i} className="grid grid-cols-5 gap-2 text-center mb-2 items-center">
                    <div className="font-bold text-slate-700">{row.name[0]}</div>
                    {Array.from({length: 4}).map((_, j) => {
                       if (j >= i) return <div key={j} className="text-slate-200">-</div>;
                       const val = row.dists[j];
                       // Highlight logic
                       const isSmallest = val === 1.2;
                       const isNextSmallest = val < 16 && val > 1.2;
                       
                       let active = false;
                       if (step === 0 && isSmallest) active = true;
                       if (step === 1 && isNextSmallest) active = true;
                       
                       return (
                          <div 
                            key={j} 
                            className={`p-1 rounded ${active ? 'bg-blue-500 text-white font-bold animate-pulse' : 'bg-white text-slate-500'}`}
                          >
                             {val.toFixed(1)}
                          </div>
                       );
                    })}
                 </div>
              ))}
           </div>

           {/* Controls */}
           <div className="flex flex-col justify-center gap-4">
              <button 
                onClick={() => setStep(s => Math.min(3, s + 1))}
                disabled={step === 3}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-6 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-3 active:scale-95"
              >
                <GitMerge size={20} />
                {step === 0 ? "Merge Human & Chimp" : step === 1 ? "Merge Primates & Mouse" : step === 2 ? "Merge Mammals & Fish" : "Phylogeny Complete"}
              </button>
              <button onClick={() => setStep(0)} className="text-slate-400 hover:text-indigo-600 text-xs font-bold uppercase tracking-widest">Reset Simulation</button>
           </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 h-[300px] flex items-center justify-center">
         <svg width="500" height="300" viewBox="0 0 500 300">
            {getTreeSVG()}
         </svg>
      </div>
    </div>
  );
};

export default PhylogenyBuilder;
