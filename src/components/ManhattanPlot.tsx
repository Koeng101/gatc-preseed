import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { Search, Activity, Ruler } from 'lucide-react';

// Mock GWAS Data: Chromosome, Position (simplified), -log10(P-value), Gene Name
const DATASETS = {
  height: [
    { chr: 1, pos: 15, p: 2, gene: "." },
    { chr: 1, pos: 45, p: 3, gene: "." },
    { chr: 2, pos: 20, p: 8, gene: "HMGA2" }, // Height gene
    { chr: 3, pos: 10, p: 1, gene: "." },
    { chr: 4, pos: 55, p: 9, gene: "LCORL" }, // Height gene
    { chr: 5, pos: 30, p: 2, gene: "." },
    { chr: 6, pos: 80, p: 12, gene: "GDF5" }, // Height gene
    // Noise
    ...Array.from({ length: 50 }).map((_, i) => ({ chr: (i % 22) + 1, pos: Math.random() * 100, p: Math.random() * 4, gene: "." }))
  ],
  diabetes: [
    { chr: 6, pos: 30, p: 2, gene: "." },
    { chr: 10, pos: 15, p: 15, gene: "TCF7L2" }, // Classic T2D gene
    { chr: 11, pos: 60, p: 10, gene: "KCNQ1" },
    { chr: 2, pos: 80, p: 1, gene: "." },
    // Noise
    ...Array.from({ length: 50 }).map((_, i) => ({ chr: (i % 22) + 1, pos: Math.random() * 100, p: Math.random() * 4, gene: "." }))
  ]
};

const ManhattanPlot: React.FC = () => {
  const [trait, setTrait] = useState<'height' | 'diabetes'>('height');
  const data = DATASETS[trait];

  // Colors for chromosomes to create the alternating effect
  const getColor = (chr: number) => chr % 2 === 0 ? "#94a3b8" : "#475569";

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
           <div>
              <h2 className="text-xl font-bold text-slate-900">Manhattan Plot Explorer</h2>
              <p className="text-sm text-slate-500">Visualizing Genome-Wide Association Studies (GWAS)</p>
           </div>
           <div className="flex gap-2">
              <button 
                onClick={() => setTrait('height')}
                className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 ${trait === 'height' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                <Ruler size={16} /> Height
              </button>
              <button 
                onClick={() => setTrait('diabetes')}
                className={`px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 ${trait === 'diabetes' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
              >
                <Activity size={16} /> Diabetes
              </button>
           </div>
        </div>

        <div className="h-[400px] w-full">
           <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <XAxis 
                    type="number" 
                    dataKey="chr" 
                    name="Chromosome" 
                    domain={[0, 23]} 
                    tickCount={10}
                    label={{ value: 'Chromosomes (1-22)', position: 'insideBottom', offset: -10 }} 
                 />
                 <YAxis 
                    type="number" 
                    dataKey="p" 
                    name="Significance" 
                    label={{ value: '-log10(P-value)', angle: -90, position: 'insideLeft' }} 
                 />
                 <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                       if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                             <div className="bg-slate-900 text-white p-3 rounded-lg text-xs shadow-xl">
                                <p className="font-bold mb-1">Chr{d.chr}</p>
                                <p>Score: {d.p.toFixed(2)}</p>
                                {d.gene !== "." && <p className="text-green-400 font-bold mt-1">Gene: {d.gene}</p>}
                             </div>
                          );
                       }
                       return null;
                    }}
                 />
                 <ReferenceLine y={5} stroke="red" strokeDasharray="3 3" label={{ value: 'Significance Threshold', fill: 'red', fontSize: 10 }} />
                 <Scatter data={data} fill="#8884d8">
                    {data.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={entry.gene !== "." ? "#ef4444" : getColor(entry.chr)} />
                    ))}
                 </Scatter>
              </ScatterChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
         <h3 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
            <Search className="text-blue-500" />
            How to read this skyline
         </h3>
         <ul className="space-y-2 text-sm text-slate-700">
            <li><strong>The X-Axis:</strong> Represents the entire genome, laid out from Chr1 to Chr22.</li>
            <li><strong>The Y-Axis:</strong> Represents statistical significance (Log scale). The higher the dot, the lower the P-value (more significant).</li>
            <li><strong>The Red Line:</strong> The "Discovery Threshold". Anything above this line is a statistically significant discovery.</li>
            <li><strong>The Peaks:</strong> Look like skyscrapers in Manhattan (hence the name). They point to the specific genes causing the trait.</li>
         </ul>
      </div>
    </div>
  );
};

export default ManhattanPlot;
