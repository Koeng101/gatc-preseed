import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import { Filter, ChevronUp, ChevronDown } from 'lucide-react';

const GENES = Array.from({ length: 200 }).map((_, i) => {
  // Simulate biology: Most genes don't change (center). Some explode (corners).
  const isDiff = Math.random() > 0.8;
  const foldChange = isDiff ? (Math.random() * 10 - 5) : (Math.random() * 2 - 1);
  const pVal = isDiff ? (Math.random() * 10) : (Math.random() * 1.3); // -log10 scale
  
  let name = `Gene_${i}`;
  if (foldChange > 4 && pVal > 5) name = "MYC (Oncogene)";
  if (foldChange < -4 && pVal > 5) name = "TP53 (Suppressor)";

  return { id: i, x: foldChange, y: pVal, name };
});

const VolcanoPlot: React.FC = () => {
  const [fcCutoff, setFcCutoff] = useState(2); // Log2 Fold Change
  const [pCutoff, setPCutoff] = useState(1.3); // -Log10(0.05) ~ 1.3

  const classify = (x: number, y: number) => {
    if (y < pCutoff) return 'ns'; // Not significant
    if (x > fcCutoff) return 'up';
    if (x < -fcCutoff) return 'down';
    return 'ns';
  };

  const getColor = (status: string) => {
    if (status === 'up') return '#ef4444'; // Red
    if (status === 'down') return '#3b82f6'; // Blue
    return '#cbd5e1'; // Gray
  };

  const counts = {
    up: GENES.filter(g => classify(g.x, g.y) === 'up').length,
    down: GENES.filter(g => classify(g.x, g.y) === 'down').length
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
           <div>
              <h2 className="text-xl font-bold text-slate-900">Volcano Plot (RNA-Seq)</h2>
              <p className="text-sm text-slate-500">Comparing Cancer vs. Healthy Tissue Expression</p>
           </div>
           <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
              <div className="text-red-500 flex items-center gap-1">
                 <ChevronUp size={16}/> {counts.up} Upregulated
              </div>
              <div className="text-blue-500 flex items-center gap-1">
                 <ChevronDown size={16}/> {counts.down} Downregulated
              </div>
           </div>
        </div>

        <div className="h-[350px] w-full">
           <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <XAxis type="number" dataKey="x" name="Log2 Fold Change" label={{ value: 'Fold Change (Log2)', position: 'bottom', offset: 0 }} />
                 <YAxis type="number" dataKey="y" name="Significance" label={{ value: '-Log10 P-Value', angle: -90, position: 'left' }} />
                 <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                       if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                             <div className="bg-slate-900 text-white p-2 rounded text-xs shadow-xl z-50">
                                <strong>{d.name}</strong><br/>
                                FC: {d.x.toFixed(2)}<br/>
                                P: {d.y.toFixed(2)}
                             </div>
                          );
                       }
                       return null;
                    }}
                 />
                 <ReferenceLine x={fcCutoff} stroke="black" strokeDasharray="3 3" />
                 <ReferenceLine x={-fcCutoff} stroke="black" strokeDasharray="3 3" />
                 <ReferenceLine y={pCutoff} stroke="black" strokeDasharray="3 3" />
                 <Scatter data={GENES} fill="#8884d8">
                    {GENES.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={getColor(classify(entry.x, entry.y))} />
                    ))}
                 </Scatter>
              </ScatterChart>
           </ResponsiveContainer>
        </div>

        {/* Controls */}
        <div className="flex gap-8 mt-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
           <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2 mb-2">
                 <Filter size={14} /> Fold Change Threshold: {fcCutoff}x
              </label>
              <input 
                 type="range" min="0.5" max="5" step="0.5" 
                 value={fcCutoff} onChange={(e) => setFcCutoff(Number(e.target.value))}
                 className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
           </div>
           <div className="flex-1">
              <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2 mb-2">
                 <Filter size={14} /> P-Value Threshold: {pCutoff}
              </label>
              <input 
                 type="range" min="0.5" max="5" step="0.1" 
                 value={pCutoff} onChange={(e) => setPCutoff(Number(e.target.value))}
                 className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
           </div>
        </div>
      </div>
    </div>
  );
};

export default VolcanoPlot;
