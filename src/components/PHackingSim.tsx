import React, { useState } from 'react';
import { Dice5, RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const PHackingSim: React.FC = () => {
  const [experiments, setExperiments] = useState<any[]>([]);
  const [running, setRunning] = useState(false);
  const [correction, setCorrection] = useState(false);

  // Simulation: Test 1 random gene against a random trait in 100 people
  const runExperiment = () => {
    // Null Hypothesis: No effect. Real effect size = 0.
    // We generate a Z-score from a normal distribution.
    // If |Z| > 1.96, p < 0.05.
    
    const z = (Math.random() * 6) - 3; // Random Z between -3 and 3
    // Simplified P-value for simulation visual
    
    return {
      id: experiments.length + 1,
      z,
      p: Math.abs(z) > 1.96 ? (Math.random() * 0.049) : (Math.random() * 0.95 + 0.05), // Fake P distribution
      significant: Math.abs(z) > 1.96
    };
  };

  const runBatch = () => {
    setRunning(true);
    const newExps: any[] = [];
    for(let i=0; i<100; i++) {
      newExps.push(runExperiment());
    }
    setTimeout(() => {
       setExperiments(prev => [...prev, ...newExps]);
       setRunning(false);
    }, 500);
  };

  const reset = () => setExperiments([]);

  const sigThreshold = correction ? (0.05 / experiments.length) : 0.05;
  const significantHits = experiments.filter(e => e.p < sigThreshold).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
           <Dice5 className="text-purple-500" /> The P-Hacking Engine
        </h2>
        <p className="text-sm text-slate-600 mb-6">
           In this simulation, <strong>there is no real biological signal</strong>. Every gene is random noise.
           But if you test enough of them, "Significant" results will appear by luck.
        </p>

        <div className="flex gap-4 mb-6">
           <button 
             onClick={runBatch}
             disabled={running}
             className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-colors disabled:opacity-50"
           >
             {running ? 'Running...' : 'Test 100 Random Genes'}
           </button>
           <button 
             onClick={reset}
             className="px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl"
           >
             <RefreshCw size={20} />
           </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
           <div className={`p-4 rounded-xl border-2 text-center ${significantHits > 0 ? 'border-red-500 bg-red-50' : 'border-slate-200'}`}>
              <div className="text-xs font-bold uppercase text-slate-500">False Positives</div>
              <div className="text-3xl font-bold text-red-600">{significantHits}</div>
              <div className="text-xs text-red-400">"Discoveries"</div>
           </div>
           <div className="p-4 rounded-xl border-2 border-slate-200 text-center">
              <div className="text-xs font-bold uppercase text-slate-500">Total Tests</div>
              <div className="text-3xl font-bold text-slate-700">{experiments.length}</div>
           </div>
        </div>

        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
           <input 
             type="checkbox" 
             id="bonferroni" 
             checked={correction} 
             onChange={(e) => setCorrection(e.target.checked)}
             className="w-5 h-5 accent-purple-600 cursor-pointer"
           />
           <label htmlFor="bonferroni" className="text-sm font-bold text-slate-700 cursor-pointer">
              Apply Bonferroni Correction
           </label>
        </div>
        <p className="text-xs text-slate-500 mt-2 pl-9">
           New Threshold: P &lt; {correction ? (0.05 / (experiments.length || 1)).toExponential(2) : '0.05'}
        </p>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl min-h-[200px] flex flex-wrap gap-1 content-start">
         {experiments.map((e, i) => (
            <div 
              key={i} 
              className={`w-3 h-3 rounded-full ${e.p < sigThreshold ? 'bg-red-500 animate-pulse scale-125' : 'bg-slate-700'}`}
              title={`P = ${e.p.toFixed(4)}`}
            />
         ))}
         {experiments.length === 0 && (
            <div className="w-full text-center text-slate-600 italic mt-10">
               No data yet. Start mining for noise.
            </div>
         )}
      </div>

      {significantHits > 0 && !correction && (
         <div className="bg-red-100 text-red-800 p-4 rounded-xl flex items-center gap-3 border border-red-200 animate-in fade-in">
            <AlertTriangle size={24} />
            <div>
               <h4 className="font-bold">You found a "Link"!</h4>
               <p className="text-sm">You just published a paper claiming Gene #{experiments.find(e => e.p < 0.05)?.id} causes the trait. But it's a lie. It was just random chance.</p>
            </div>
         </div>
      )}
      
      {significantHits === 0 && experiments.length > 0 && (
         <div className="bg-green-100 text-green-800 p-4 rounded-xl flex items-center gap-3 border border-green-200 animate-in fade-in">
            <CheckCircle size={24} />
            <div>
               <h4 className="font-bold">Honest Science</h4>
               <p className="text-sm">No false discoveries found. This is statistically robust.</p>
            </div>
         </div>
      )}
    </div>
  );
};

export default PHackingSim;
