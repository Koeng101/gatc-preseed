import React, { useState } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Layers, Dna } from 'lucide-react';

const CELLS = Array.from({ length: 300 }).map((_, i) => {
  // Simulate 3 clusters
  const type = Math.random();
  let x, y, cluster, color, geneExpr;

  if (type < 0.4) {
    // Cluster 1: T-Cells (CD3 high)
    x = Math.random() * 20 + 10;
    y = Math.random() * 20 + 10;
    cluster = "T-Cells";
    color = "#ef4444";
    geneExpr = Math.random() * 5 + 5; // High
  } else if (type < 0.7) {
    // Cluster 2: B-Cells (CD19 high)
    x = Math.random() * 20 + 40;
    y = Math.random() * 20 + 40;
    cluster = "B-Cells";
    color = "#3b82f6";
    geneExpr = Math.random() * 2; // Low
  } else {
    // Cluster 3: Monocytes (CD14 high)
    x = Math.random() * 20 + 70;
    y = Math.random() * 20 + 10;
    cluster = "Monocytes";
    color = "#10b981";
    geneExpr = Math.random() * 2; // Low
  }

  return { id: i, x, y, cluster, color, geneExpr };
});

const SingleCellViewer: React.FC = () => {
  const [viewMode, setViewMode] = useState<'cluster' | 'gene'>('cluster');

  const getGeneColor = (expr: number) => {
    // Heatmap: Blue (Low) -> Red (High)
    const intensity = Math.min(1, expr / 10);
    // Simple gradient approximation
    const r = Math.floor(intensity * 255);
    const b = Math.floor((1 - intensity) * 255);
    return `rgb(${r}, 0, ${b})`;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-4">
           <div>
              <h2 className="text-xl font-bold text-slate-900">Single-Cell Atlas (t-SNE)</h2>
              <p className="text-sm text-slate-500">Every dot is a single cell.</p>
           </div>
           <div className="flex bg-slate-100 p-1 rounded-lg">
              <button 
                onClick={() => setViewMode('cluster')}
                className={`px-3 py-1 text-xs font-bold rounded flex items-center gap-1 transition-all ${viewMode === 'cluster' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                <Layers size={14} /> Cluster
              </button>
              <button 
                onClick={() => setViewMode('gene')}
                className={`px-3 py-1 text-xs font-bold rounded flex items-center gap-1 transition-all ${viewMode === 'gene' ? 'bg-white shadow text-slate-900' : 'text-slate-500 hover:bg-slate-200'}`}
              >
                <Dna size={14} /> Gene (CD3)
              </button>
           </div>
        </div>

        <div className="h-[400px] w-full relative">
           <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                 <XAxis type="number" dataKey="x" name="tSNE_1" hide />
                 <YAxis type="number" dataKey="y" name="tSNE_2" hide />
                 <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    content={({ active, payload }) => {
                       if (active && payload && payload.length) {
                          const d = payload[0].payload;
                          return (
                             <div className="bg-slate-900 text-white p-2 rounded text-xs shadow-xl z-50">
                                <strong>Cell #{d.id}</strong><br/>
                                Type: {d.cluster}<br/>
                                CD3 Expr: {d.geneExpr.toFixed(1)}
                             </div>
                          );
                       }
                       return null;
                    }}
                 />
                 <Scatter data={CELLS} fill="#8884d8">
                    {CELLS.map((entry, index) => (
                       <Cell key={`cell-${index}`} fill={viewMode === 'cluster' ? entry.color : getGeneColor(entry.geneExpr)} />
                    ))}
                 </Scatter>
              </ScatterChart>
           </ResponsiveContainer>
           
           {/* Custom Legend */}
           <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2 rounded border border-slate-200 text-[10px] font-bold space-y-1">
              {viewMode === 'cluster' ? (
                 <>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500"></div> T-Cells</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500"></div> B-Cells</div>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Monocytes</div>
                 </>
              ) : (
                 <>
                    <div className="flex items-center gap-2"><div className="w-2 h-2 rounded bg-gradient-to-r from-blue-500 to-red-500"></div> Expr Level</div>
                    <div className="text-slate-500 font-normal">CD3 Marker</div>
                 </>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCellViewer;
