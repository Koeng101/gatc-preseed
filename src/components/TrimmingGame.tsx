import React, { useState } from 'react';
import { Scissors, CheckCircle } from 'lucide-react';

const TrimmingGame: React.FC = () => {
  const [cutoff, setCutoff] = useState(0); // How many bases to trim from the END

  const READ_LENGTH = 50;
  // Deterministic mock read with quality dropoff
  const READ = Array.from({ length: READ_LENGTH }).map((_, i) => {
    // Quality starts at 40, drops slowly, then sharply after base 35
    const quality = Math.max(0, 40 - (i > 35 ? (i - 35) * 4 : i > 20 ? (i - 20) * 0.5 : 0));
    return { 
      base: ['A','C','G','T'][i % 4], 
      q: Math.floor(quality) 
    };
  });

  const remaining = READ.slice(0, READ_LENGTH - cutoff);
  const avgQ = remaining.reduce((a, b) => a + b.q, 0) / (remaining.length || 1);
  const len = remaining.length;

  const isSuccess = avgQ >= 30 && len >= 35;

  const getColor = (q: number) => {
    if (q >= 30) return 'bg-green-500';
    if (q >= 20) return 'bg-yellow-400';
    return 'bg-red-500';
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500 h-full flex flex-col justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Scissors className="text-red-500" />
          Quality Trimming Lab
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          The end of a sequencing read is often "noisy" (low quality).
          Bioinformaticians use tools like <code>Trimmomatic</code> or <code>fastp</code> to cut off the bad tail.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-4">
           <div className={`p-6 rounded-2xl border-2 text-center transition-all ${avgQ >= 30 ? 'border-emerald-500 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
              <div className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-widest">Quality (Q)</div>
              <div className={`text-4xl font-extrabold ${avgQ >= 30 ? 'text-emerald-600' : 'text-rose-600'}`}>{avgQ.toFixed(1)}</div>
              <div className="text-[10px] text-slate-400 mt-2">MIN REQ: 30.0</div>
           </div>
           <div className={`p-6 rounded-2xl border-2 text-center transition-all ${len >= 35 ? 'border-emerald-500 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
              <div className="text-[10px] uppercase font-black text-slate-400 mb-2 tracking-widest">Length (bp)</div>
              <div className={`text-4xl font-extrabold ${len >= 35 ? 'text-emerald-600' : 'text-rose-600'}`}>{len}</div>
              <div className="text-[10px] text-slate-400 mt-2">MIN REQ: 35bp</div>
           </div>
        </div>

        {isSuccess && (
           <div className="bg-green-100 text-green-800 p-3 rounded-lg text-center font-bold text-sm animate-pulse">
              <CheckCircle className="inline mr-2 w-4 h-4"/> Perfect Trim! (Q30+ & Long)
           </div>
        )}
      </div>

      <div className="bg-slate-900 p-8 rounded-2xl relative overflow-hidden min-h-[200px] flex flex-col justify-center">
         {/* The DNA Strip */}
         <div className="flex flex-wrap gap-[2px] justify-center mb-12">
            {READ.map((base, i) => {
               const isTrimmed = i >= READ_LENGTH - cutoff;
               return (
                  <div key={i} className={`w-3 h-10 flex flex-col gap-1 items-center transition-all duration-300 ${isTrimmed ? 'opacity-20 blur-[1px] scale-90 grayscale' : ''}`}>
                     <div className={`w-2 h-2 rounded-full ${getColor(base.q)}`}></div>
                     <span className="text-slate-500 font-mono text-[10px]">{base.base}</span>
                  </div>
               )
            })}
         </div>

         {/* The Slider */}
         <div className="relative px-4">
            <input 
              type="range" 
              min="0" 
              max="30" 
              value={cutoff} 
              onChange={(e) => setCutoff(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono uppercase">
               <span>Raw Data</span>
               <span>Trim Aggressively</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default TrimmingGame;