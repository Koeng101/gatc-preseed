import { useState, useEffect } from 'react';

export const Diagrams = {
  CentralDogma: () => {
    const [mutation, setMutation] = useState<'none' | 'missense' | 'nonsense'>('none');

    return (
      <div className="space-y-4">
        <div className="flex gap-2 justify-center mb-4">
            <button onClick={() => setMutation('none')} className={`px-3 py-1 text-xs rounded-full border ${mutation === 'none' ? 'bg-blue-100 border-blue-500 text-blue-700' : 'bg-white text-slate-600'}`}>Normal</button>
            <button onClick={() => setMutation('missense')} className={`px-3 py-1 text-xs rounded-full border ${mutation === 'missense' ? 'bg-amber-100 border-amber-500 text-amber-700' : 'bg-white text-slate-600'}`}>Missense (Change)</button>
            <button onClick={() => setMutation('nonsense')} className={`px-3 py-1 text-xs rounded-full border ${mutation === 'nonsense' ? 'bg-red-100 border-red-500 text-red-700' : 'bg-white text-slate-600'}`}>Nonsense (Stop)</button>
        </div>

        <svg viewBox="0 0 850 220" className="w-full h-auto bg-white rounded-xl border border-slate-200">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
            </marker>
          </defs>

          {/* DNA Helix */}
          <path d="M50,100 Q100,50 150,100 T250,100 T350,100" fill="none" stroke="#3b82f6" strokeWidth="4" />
          <path d="M50,100 Q100,150 150,100 T250,100 T350,100" fill="none" stroke="#93c5fd" strokeWidth="4" />
          <text x="200" y="190" textAnchor="middle" className="text-sm font-bold fill-slate-500">DNA</text>
          
          {/* Arrow 1 */}
          <path d="M360,100 L440,100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="400" y="80" textAnchor="middle" className="text-xs fill-slate-400">Transcription</text>

          {/* RNA */}
          <path d="M450,100 Q500,50 550,100 Q600,150 650,100" fill="none" stroke={mutation === 'nonsense' ? "#ef4444" : "#ec4899"} strokeWidth="4" strokeDasharray="5,5" />
          <text x="550" y="190" textAnchor="middle" className="text-sm font-bold fill-slate-500">mRNA</text>
          
          {mutation !== 'none' && (
             <circle cx="550" cy="100" r="8" fill="none" stroke="red" strokeWidth="2" className="animate-ping" />
          )}

          {/* Arrow 2 */}
          <path d="M660,100 L740,100" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)" />
          <text x="700" y="80" textAnchor="middle" className="text-xs fill-slate-400">Translation</text>

          {/* Protein */}
          {mutation === 'nonsense' ? (
             <g opacity="0.5">
                <circle cx="750" cy="100" r="10" fill="#ef4444" />
                <text x="750" y="130" textAnchor="middle" className="text-[10px] fill-red-500 font-bold">TRUNCATED</text>
             </g>
          ) : mutation === 'missense' ? (
             <g>
                <circle cx="750" cy="100" r="20" fill="#f59e0b" opacity="0.8" />
                <circle cx="770" cy="110" r="15" fill="#f59e0b" opacity="0.6" />
                <text x="760" y="190" textAnchor="middle" className="text-sm font-bold fill-slate-500">Altered Protein</text>
             </g>
          ) : (
             <g>
                <circle cx="750" cy="100" r="20" fill="#10b981" opacity="0.5" />
                <circle cx="770" cy="110" r="15" fill="#10b981" opacity="0.7" />
                <circle cx="760" cy="90" r="18" fill="#10b981" opacity="0.6" />
                <text x="760" y="190" textAnchor="middle" className="text-sm font-bold fill-slate-500">Protein (Machine)</text>
             </g>
          )}
        </svg>
      </div>
    );
  },

  IlluminaSequencing: () => {
    // Simple cycle animation state
    const [step, setStep] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => setStep(s => (s + 1) % 3), 2000);
        return () => clearInterval(interval);
    }, []);

    return (
      <svg viewBox="0 0 800 300" className="w-full h-auto bg-slate-900 rounded-xl border border-slate-700">
        <rect x="50" y="250" width="700" height="20" fill="#334155" rx="4" />
        
        {/* DNA Fragments */}
        <g transform="translate(150, 250)">
           <line x1="0" y1="0" x2="0" y2="-50" stroke="#3b82f6" strokeWidth="3" />
           {/* Growing Strand */}
           <line x1="10" y1="0" x2="10" y2={step === 0 ? -10 : step === 1 ? -30 : -50} stroke="#10b981" strokeWidth="3" strokeDasharray="2,2" />
           
           {/* Incoming Base */}
           <circle cx="10" cy={step === 0 ? -20 : step === 1 ? -40 : -60} r="6" fill={step === 0 ? "#ef4444" : step === 1 ? "#f59e0b" : "#3b82f6"} className="animate-pulse" />
        </g>
  
        {/* Laser / Camera */}
        <path d="M400,20 L400,150" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4" opacity={step === 1 ? 1 : 0.2} />
        <circle cx="400" cy="20" r="15" fill="#f59e0b" opacity={step === 1 ? 1 : 0.5} />
        <text x="430" y="30" className="text-xs fill-slate-400">Camera (Captures Flash)</text>
  
        {/* Explanation Text */}
        <text x="550" y="50" className="text-sm fill-slate-300 font-bold">Step: {step + 1}</text>
        <text x="550" y="70" className="text-xs fill-slate-500">{step === 0 ? 'Add Nucleotide' : step === 1 ? 'Laser Excitation (Photo)' : 'Cleave Fluorophore'}</text>
      </svg>
    );
  },

  PhredScore: () => (
    <div className="w-full bg-white p-4 rounded-xl border border-slate-200 font-mono text-xs overflow-x-auto shadow-sm">
      <div className="flex gap-1 mb-2">
        <span className="w-12 font-bold text-slate-400">Base:</span>
        <span className="w-6 text-center font-bold border-b border-slate-200">A</span>
        <span className="w-6 text-center font-bold border-b border-slate-200">C</span>
        <span className="w-6 text-center font-bold border-b border-slate-200">G</span>
        <span className="w-6 text-center font-bold border-b border-slate-200">T</span>
        <span className="w-6 text-center font-bold text-red-500 border-b border-red-200">N</span>
      </div>
      <div className="flex gap-1 mb-2">
        <span className="w-12 font-bold text-slate-400">Qual:</span>
        <span className="w-6 text-center text-green-600 bg-green-50 rounded">30</span>
        <span className="w-6 text-center text-green-600 bg-green-50 rounded">32</span>
        <span className="w-6 text-center text-green-600 bg-green-50 rounded">35</span>
        <span className="w-6 text-center text-amber-500 bg-amber-50 rounded">15</span>
        <span className="w-6 text-center text-red-500 bg-red-50 rounded">2</span>
      </div>
      <div className="text-slate-500 mt-3 pt-3 border-t border-slate-100 flex justify-between items-center">
        <span><strong>Q30</strong> = 99.9% Accuracy</span>
        <span className="text-xs bg-slate-100 px-2 py-1 rounded">Logarithmic Scale</span>
      </div>
    </div>
  ),

  DrunkenWalk: () => {
    // Simple canvas-like SVG path generation
    const [points, setPoints] = useState<number[]>([50]);

    useEffect(() => {
        const interval = setInterval(() => {
            setPoints(prev => {
                const last = prev[prev.length - 1];
                const change = Math.random() > 0.5 ? 5 : -5;
                let next = last + change;
                if (next > 90) next = 90;
                if (next < 10) next = 10;
                
                const newPoints = [...prev, next];
                if (newPoints.length > 50) newPoints.shift();
                return newPoints;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const d = points.map((y, i) => `${i === 0 ? 'M' : 'L'}${i * 4},${y}`).join(" ");

    return (
        <div className="w-full h-32 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden relative">
            <svg viewBox="0 0 200 100" className="w-full h-full" preserveAspectRatio="none">
                <path d={d} fill="none" stroke="#6366f1" strokeWidth="2" />
                <circle cx={(points.length - 1) * 4} cy={points[points.length - 1]} r="3" fill="#6366f1" />
            </svg>
            <div className="absolute top-2 left-2 text-[10px] text-slate-400 font-mono">Generations: {points.length}</div>
        </div>
    );
  }
};