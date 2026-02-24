import React, { useState } from 'react';
import { Scissors, Zap, AlertOctagon, CheckCircle } from 'lucide-react';

const TARGET_REGION = "GCTAGCTAGCTTAGCGTACC"; // 20bp
const PAM = "GG";
const FULL_SEQ = `ATGCGTAC${TARGET_REGION}${PAM}CTAGCA`.split("");

const CrisprLab: React.FC = () => {
  const [selection, setSelection] = useState<number | null>(null);
  const [result, setFeedback] = useState<'success' | 'fail_pam' | null>(null);

  const handleClick = (index: number) => {
    // Check for PAM (GG)
    // User clicks the first G
    const char = FULL_SEQ[index];
    const nextChar = FULL_SEQ[index + 1];
    
    if (char === 'G' && nextChar === 'G') {
       setSelection(index);
       setFeedback('success');
    } else {
       setSelection(index);
       setFeedback('fail_pam');
    }
  };

  return (
    <div className="space-y-6 w-full max-w-full animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-start mb-4">
           <div>
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                 <Zap className="text-amber-500" fill="currentColor" /> CRISPR Engineer
              </h2>
              <p className="text-sm text-slate-500">Design a guide RNA to cut the mutation.</p>
           </div>
           <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
              Target: PAM (NGG)
           </div>
        </div>

        <p className="text-slate-600 mb-6 text-sm">
           <strong>Cas9</strong> is a molecular scissor. It needs a GPS coordinate (Guide RNA) and a password (PAM).
           <br/>Click on a <strong>GG</strong> sequence to program the cut.
        </p>

        <div className="bg-slate-900 p-4 sm:p-8 rounded-2xl w-full shadow-inner ring-1 ring-slate-800">
           {/* Scrollable Sequence Container */}
           <div className="overflow-x-auto pb-4 custom-scrollbar">
               <div className="flex gap-1 min-w-max px-2">
                  {FULL_SEQ.map((base, i) => (
                    <button 
                      key={i}
                      onClick={() => handleClick(i)}
                      className={`
                        w-8 h-10 flex-shrink-0 flex items-center justify-center rounded font-mono text-lg font-bold transition-all
                        ${base === 'G' ? 'text-green-400' : base === 'C' ? 'text-blue-400' : base === 'A' ? 'text-red-400' : 'text-yellow-400'}
                        ${selection === i ? 'bg-white/10 ring-2 ring-white scale-110 z-10' : 'hover:bg-white/5'}
                        ${result === 'success' && selection === i ? 'ring-green-500' : ''}
                        ${result === 'fail_pam' && selection === i ? 'ring-red-500' : ''}
                      `}
                    >
                       {base}
                       {selection === i && result === 'success' && (
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-white text-[10px] whitespace-nowrap bg-green-600 px-2 py-1 rounded flex items-center gap-1 shadow-lg animate-in fade-in slide-in-from-bottom-2">
                             <Scissors size={12} /> Cut Here
                          </div>
                       )}
                    </button>
                  ))}
               </div>
           </div>
           
           {/* Guide RNA Visualization */}
           <div className="mt-8 h-16 w-full relative overflow-hidden">
               {selection !== null && result === 'success' && (
                  <div className="absolute top-0 left-0 right-0 animate-in fade-in slide-in-from-right duration-700">
                      <div className="h-2 bg-amber-500 rounded-full w-full max-w-[200px] mx-auto shadow-[0_0_15px_orange]" />
                      <div className="text-center text-amber-500 text-xs font-bold mt-2">Guide RNA Loaded</div>
                  </div>
               )}
           </div>
        </div>

        {/* Feedback Panel */}
        <div className="mt-4 min-h-[80px]">
           {result === 'success' && (
              <div className="bg-green-50 text-green-900 p-4 rounded-xl flex items-center gap-3 border border-green-200">
                 <CheckCircle size={24} className="text-green-600" />
                 <div>
                    <h4 className="font-bold text-sm">Perfect Design!</h4>
                    <p className="text-xs">You found the PAM ('GG'). Cas9 will now bind and cut the DNA 3 bases upstream.</p>
                 </div>
              </div>
           )}
           {result === 'fail_pam' && (
              <div className="bg-red-50 text-red-900 p-4 rounded-xl flex items-center gap-3 border border-red-200">
                 <AlertOctagon size={24} className="text-red-600" />
                 <div>
                    <h4 className="font-bold text-sm">Cas9 Failed to Bind</h4>
                    <p className="text-xs">Cas9 strictly requires a 'GG' (PAM) sequence to latch onto the DNA. Try again.</p>
                 </div>
              </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CrisprLab;