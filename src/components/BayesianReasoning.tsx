import React from 'react';

const BayesianReasoning: React.FC = () => {
  const TOTAL_POP = 1000;
  const PREVALENCE = 0.01; // 1% (10 people)
  const SENSITIVITY = 0.99; // True Positive Rate
  const SPECIFICITY = 0.90; // True Negative Rate (90% specificity = 10% false positive rate)

  // Calculate counts
  const sick = TOTAL_POP * PREVALENCE; // 10
  const healthy = TOTAL_POP - sick; // 990

  const truePositives = sick * SENSITIVITY; // ~10
  const falseNegatives = sick - truePositives; // ~0

  const trueNegatives = healthy * SPECIFICITY; // 990 * 0.9 = 891
  const falsePositives = healthy * (1 - SPECIFICITY); // 990 * 0.1 = 99

  const totalPositives = truePositives + falsePositives; // 10 + 99 = 109
  const ppv = (truePositives / totalPositives) * 100; // 10 / 109 = ~9%

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">The False Positive Paradox</h2>
        <p className="text-sm text-slate-600 mb-6">
           <strong>Scenario:</strong> A rare disease affects 1% of people. The test is 99% sensitive and 90% specific.
           <br/>You test <strong>Positive</strong>. What is the chance you are actually sick?
        </p>

        <div className="grid grid-cols-2 gap-4 mb-6">
           <div className="p-4 rounded-xl border-2 border-red-100 bg-red-50 text-center">
              <div className="text-xs font-bold uppercase text-red-400">Total Positives</div>
              <div className="text-3xl font-bold text-red-700">{Math.round(totalPositives)}</div>
              <div className="text-xs text-red-400">People flagged</div>
           </div>
           <div className="p-4 rounded-xl border-2 border-blue-100 bg-blue-50 text-center">
              <div className="text-xs font-bold uppercase text-blue-400">Actual Probability</div>
              <div className="text-3xl font-bold text-blue-700">{ppv.toFixed(1)}%</div>
              <div className="text-xs text-blue-400">Chance you are sick</div>
           </div>
        </div>

        <div className="bg-slate-100 p-4 rounded-xl text-xs text-slate-600">
           Wait... the test is accurate, but only <strong>9%</strong> of positive results are real? 
           Why? Because the <strong>False Positives</strong> from the massive healthy population drown out the few True Positives.
        </div>
      </div>

      <div className="bg-slate-900 p-6 rounded-2xl">
         <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Population Visualization (1,000 People)</h3>
         <div className="flex flex-wrap gap-[2px]">
            {/* True Positives (Sick & Detected) */}
            {Array.from({ length: Math.round(truePositives) }).map((_, i) => (
               <div key={`tp-${i}`} className="w-2 h-2 rounded-full bg-red-500" title="True Positive (Sick)"></div>
            ))}
            
            {/* False Negatives (Sick & Missed) */}
            {Array.from({ length: Math.round(falseNegatives) }).map((_, i) => (
               <div key={`fn-${i}`} className="w-2 h-2 rounded-full bg-red-900" title="False Negative (Sick but missed)"></div>
            ))}

            {/* False Positives (Healthy & Flagged) */}
            {Array.from({ length: Math.round(falsePositives) }).map((_, i) => (
               <div key={`fp-${i}`} className="w-2 h-2 rounded-full bg-yellow-400" title="False Positive (Healthy but flagged)"></div>
            ))}

            {/* True Negatives (Healthy & Cleared) */}
            {Array.from({ length: Math.round(trueNegatives) }).map((_, i) => (
               <div key={`tn-${i}`} className="w-2 h-2 rounded-full bg-slate-700" title="True Negative (Healthy)"></div>
            ))}
         </div>
         
         <div className="flex gap-4 mt-4 text-[10px] text-white font-bold uppercase">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"></div> True Positive</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"></div> False Positive</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-slate-700"></div> Healthy</div>
         </div>
      </div>
    </div>
  );
};

export default BayesianReasoning;
