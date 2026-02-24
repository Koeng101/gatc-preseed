import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const RiskSimulator: React.FC = () => {
  // A bell curve distribution
  const data = Array.from({ length: 40 }, (_, i) => {
    const x = i - 20;
    const y = (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x);
    return { x, y, label: x === 0 ? 'Average' : '' };
  });

  const [variants, setVariants] = useState({
    rs1: false, // Increases risk
    rs2: false, // Decreases risk
    rs3: false, // Increases risk
    rs4: false, // Increases risk
  });

  const currentRisk = 
    (variants.rs1 ? 2 : 0) + 
    (variants.rs2 ? -1.5 : 0) + 
    (variants.rs3 ? 1.5 : 0) + 
    (variants.rs4 ? 3 : 0);

  const toggle = (k: keyof typeof variants) => setVariants(prev => ({ ...prev, [k]: !prev[k] }));

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2">Polygenic Risk Score (PRS)</h2>
        <p className="text-slate-600">
          Most diseases (Heart Disease, Diabetes) aren't caused by one broken gene. They are the sum of thousands of tiny "nudges".
          Toggle the variants below to see how they shift your risk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="space-y-4">
            <h3 className="font-bold text-sm text-slate-500 uppercase tracking-widest">Your Variants</h3>
            
            <div onClick={() => toggle('rs1')} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${variants.rs1 ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
               <div className="flex justify-between font-bold mb-1">
                  <span>rs9983 (Heart)</span>
                  <span className={variants.rs1 ? 'text-red-600' : 'text-slate-400'}>+2.0 Risk</span>
               </div>
               <p className="text-xs text-slate-500">Common variant near the CDKN2B gene.</p>
            </div>

            <div onClick={() => toggle('rs2')} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${variants.rs2 ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-slate-300'}`}>
               <div className="flex justify-between font-bold mb-1">
                  <span>rs1122 (Lipids)</span>
                  <span className={variants.rs2 ? 'text-green-600' : 'text-slate-400'}>-1.5 Risk</span>
               </div>
               <p className="text-xs text-slate-500">Protective variant lowering LDL cholesterol.</p>
            </div>

            <div onClick={() => toggle('rs3')} className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${variants.rs3 ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}>
               <div className="flex justify-between font-bold mb-1">
                  <span>rs5566 (Obesity)</span>
                  <span className={variants.rs3 ? 'text-red-600' : 'text-slate-400'}>+1.5 Risk</span>
               </div>
               <p className="text-xs text-slate-500">Associated with slightly higher BMI.</p>
            </div>
         </div>

         <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col items-center justify-center relative">
            <h3 className="absolute top-4 left-4 font-bold text-sm text-slate-500 uppercase tracking-widest">Population Distribution</h3>
            
            <div className="w-full h-[300px] mt-8">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <XAxis dataKey="x" hide />
                     <Tooltip cursor={false} content={() => null} />
                     <Area type="monotone" dataKey="y" stroke="#94a3b8" fill="#f1f5f9" />
                     {/* The User Line */}
                     <ReferenceLine x={currentRisk} stroke="black" strokeDasharray="3 3" label={{ position: 'top', value: 'YOU', fill: 'black', fontSize: 12, fontWeight: 'bold' }} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>

            <div className={`mt-4 px-4 py-2 rounded-lg font-bold text-sm ${currentRisk > 3 ? 'bg-red-100 text-red-700' : currentRisk < -1 ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-700'}`}>
               Total Score: {currentRisk > 0 ? '+' : ''}{currentRisk.toFixed(1)} SD
            </div>
         </div>
      </div>
    </div>
  );
};

export default RiskSimulator;
