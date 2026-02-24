import React, { useState, useEffect } from 'react';
import { Thermometer, Timer, Copy } from 'lucide-react';

const PCRSimulator: React.FC = () => {
  const [temp, setTemp] = useState(25);
  const [cycle, setCycle] = useState(0);
  const [dnaCount, setDnaCount] = useState(1);
  const [stage, setStage] = useState<'idle' | 'denature' | 'anneal' | 'extend'>('idle');

  useEffect(() => {
    if (stage === 'idle') return;

    let targetTemp = 25;
    let nextStage: 'idle' | 'denature' | 'anneal' | 'extend' = 'idle';
    let duration = 1000;

    if (stage === 'denature') { targetTemp = 95; nextStage = 'anneal'; duration = 2000; }
    if (stage === 'anneal') { targetTemp = 55; nextStage = 'extend'; duration = 2000; }
    if (stage === 'extend') { targetTemp = 72; nextStage = 'denature'; duration = 2000; }

    // Animate temp
    setTemp(targetTemp);

    const timer = setTimeout(() => {
      if (stage === 'extend') {
         setCycle(c => c + 1);
         setDnaCount(d => d * 2);
         if (cycle >= 30) {
            setStage('idle');
            return;
         }
      }
      setStage(nextStage);
    }, duration);

    return () => clearTimeout(timer);
  }, [stage, cycle]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Thermal Cycler (PCR)</h2>
          <p className="text-sm text-slate-500">Amplify DNA exponentially.</p>
        </div>
        <div className="text-right">
           <div className="text-2xl font-bold text-slate-700">{dnaCount.toLocaleString()}</div>
           <div className="text-xs text-slate-400 uppercase tracking-widest">Copies</div>
        </div>
      </div>

      <div className="relative h-[300px] bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex flex-col items-center justify-center">
         {/* Temperature Graph Background (Static for now) */}
         <div className="absolute inset-0 opacity-10 flex items-end">
            <svg width="100%" height="100%" preserveAspectRatio="none">
               <path d="M0,300 L50,50 L100,200 L150,100 L200,300" stroke="black" strokeWidth="2" fill="none" vectorEffect="non-scaling-stroke" />
            </svg>
         </div>

         {/* DNA Visualization */}
         <div className="flex flex-wrap gap-1 max-w-[80%] justify-center z-10 transition-all">
            {Array.from({ length: Math.min(50, dnaCount) }).map((_, i) => (
               <div key={i} className="w-1 h-4 bg-blue-500 rounded-full animate-pulse" />
            ))}
            {dnaCount > 50 && <div className="text-xs text-slate-500 font-bold ml-2">...and millions more</div>}
         </div>

         {/* Status Overlay */}
         <div className={`absolute bottom-4 px-6 py-2 rounded-full font-bold text-white shadow-lg transition-colors duration-500
            ${stage === 'denature' ? 'bg-red-500' : stage === 'anneal' ? 'bg-blue-500' : stage === 'extend' ? 'bg-green-500' : 'bg-slate-400'}
         `}>
            {stage === 'idle' ? 'Ready' : `${stage.toUpperCase()} (${temp}°C)`}
         </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
         <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <Thermometer className="mx-auto mb-2 text-slate-400" />
            <div className="text-2xl font-bold">{temp}°C</div>
            <div className="text-xs text-slate-500">Current Temp</div>
         </div>
         <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
            <Timer className="mx-auto mb-2 text-slate-400" />
            <div className="text-2xl font-bold">{cycle} / 30</div>
            <div className="text-xs text-slate-500">Cycle</div>
         </div>
         <button 
           onClick={() => { setStage('denature'); setCycle(0); setDnaCount(1); }}
           disabled={stage !== 'idle'}
           className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex flex-col items-center justify-center disabled:opacity-50"
         >
            <Copy className="mb-2" />
            Start Run
         </button>
      </div>
    </div>
  );
};

export default PCRSimulator;
