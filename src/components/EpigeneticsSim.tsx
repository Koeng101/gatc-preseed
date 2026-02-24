import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

const EpigeneticsSim: React.FC = () => {
  // 8 CpG sites in the promoter
  const [methylated, setMethylated] = useState([false, false, false, false, false, false, false, false]);
  const [mrna, setMrna] = useState<number[]>([]);

  const toggleMethyl = (i: number) => {
    const newM = [...methylated];
    newM[i] = !newM[i];
    setMethylated(newM);
  };

  const methylationLevel = methylated.filter(Boolean).length / 8;
  const transcriptionRate = Math.max(0, 1 - methylationLevel); // 100% methyl = 0 rate

  useEffect(() => {
    const interval = setInterval(() => {
      // Produce mRNA probabilistically based on rate
      if (Math.random() < transcriptionRate) {
        setMrna(prev => [...prev, Date.now()]); // Add particle
      }
      // Decay mRNA
      setMrna(prev => prev.filter(t => Date.now() - t < 2000));
    }, 100);
    return () => clearInterval(interval);
  }, [transcriptionRate]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
           <Lock className={transcriptionRate < 0.2 ? 'text-red-500' : 'text-slate-400'} />
           The Epigenetic Switch
        </h2>
        <p className="text-sm text-slate-600 mb-6">
           <strong>Task:</strong> Click the "CpG" circles on the DNA to add methyl groups (CH3).
           Watch what happens to the gene expression when the promoter gets clogged.
        </p>

        <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl">
           <div className="text-xs font-bold uppercase text-slate-500">Expression Rate</div>
           <div className="flex-1 h-4 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${transcriptionRate > 0.5 ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${transcriptionRate * 100}%` }}
              />
           </div>
           <div className="font-mono font-bold">{(transcriptionRate * 100).toFixed(0)}%</div>
        </div>
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl relative overflow-hidden h-[300px] flex flex-col justify-center select-none">
         {/* Polymerase */}
         <div className="absolute left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-20 bg-purple-500/50 rounded-full blur-xl animate-pulse"></div>
         
         {/* DNA Strand */}
         <div className="relative h-4 bg-slate-700 w-full rounded-full flex justify-around items-center px-10">
            {methylated.map((isM, i) => (
               <div key={i} className="relative group">
                  {/* Stem */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-6 bg-slate-500"></div>
                  {/* CpG Circle */}
                  <button 
                    onClick={() => toggleMethyl(i)}
                    className={`
                       relative z-10 w-8 h-8 rounded-full border-2 transition-all duration-300 flex items-center justify-center font-bold text-[10px]
                       ${isM ? 'bg-red-500 border-red-400 text-white shadow-[0_0_15px_rgba(239,68,68,0.6)]' : 'bg-white border-slate-300 text-slate-400 hover:scale-110'}
                    `}
                  >
                     {isM ? 'CH3' : 'CpG'}
                  </button>
               </div>
            ))}
         </div>
         
         <div className="text-center mt-8 text-slate-500 font-mono text-xs tracking-[0.5em]">PROMOTER REGION</div>

         {/* Floating mRNA particles */}
         {mrna.map(t => (
            <div 
               key={t}
               className="absolute w-20 h-2 bg-green-400 rounded-full shadow-[0_0_10px_lime] animate-float-right"
               style={{ left: '100px', top: Math.random() * 200 + 50 }}
            />
         ))}
      </div>
      
      <style>{`
        @keyframes float-right {
          0% { transform: translateX(0); opacity: 1; }
          100% { transform: translateX(400px); opacity: 0; }
        }
        .animate-float-right {
          animation: float-right 2s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default EpigeneticsSim;
