import React, { useState, useMemo } from 'react';
// @ts-ignore
import createPlotlyComponent from 'react-plotly.js/factory';
// @ts-ignore
import Plotly from 'plotly.js-dist-min';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { realAncestryData } from '../data/real_ancestry';

const Plot = createPlotlyComponent(Plotly);

const PcaExplainer: React.FC = () => {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Step 1: Just You",
      desc: "This black star is you. A single point in 450,000-dimensional space.",
      filter: (p: any) => p.is_user
    },
    {
      title: "Step 2: + Africa (Red)",
      desc: "Adding the 1000 Genomes African reference samples. They cluster tightly.",
      filter: (p: any) => p.is_user || p.pop === 'AFR'
    },
    {
      title: "Step 3: + Europe (Blue)",
      desc: "Adding Europeans. The X-Axis (PC1) separates these two major groups.",
      filter: (p: any) => p.is_user || p.pop === 'AFR' || p.pop === 'EUR'
    },
    {
      title: "Step 4: Full Map",
      desc: "Adding Asians (Green/Orange). You can see where you fit in the global context.",
      filter: () => true
    }
  ];

  // Memoize data processing
  const plotData = useMemo(() => {
    const currentFilter = steps[step].filter;
    const filteredData = realAncestryData.pca_data.filter(currentFilter);

    const populations: Record<string, any> = {};
    filteredData.forEach(p => {
      if (!populations[p.pop]) {
        populations[p.pop] = { x: [], y: [], color: p.color, name: p.pop, symbol: p.is_user ? 'star' : 'circle', size: p.is_user ? 18 : 6, opacity: p.is_user ? 1 : 0.6 };
      }
      populations[p.pop].x.push(p.pc1);
      populations[p.pop].y.push(p.pc2);
    });

    const traces = Object.values(populations).map((pop: any) => ({
      x: pop.x,
      y: pop.y,
      mode: 'markers',
      type: 'scatter',
      name: pop.name,
      marker: { 
        color: pop.color, 
        size: pop.size,
        symbol: pop.symbol,
        opacity: pop.opacity,
        line: pop.name === 'YOU' ? { color: 'black', width: 2 } : { width: 0 }
      },
      hoverinfo: 'name'
    }));
    
    traces.sort((a: any) => (a.name === 'YOU') ? 1 : -1);
    return traces;
  }, [step]);

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col min-h-[400px]">
        <div className="flex justify-between items-center mb-2">
           <div>
              <h3 className="font-bold text-slate-900">{steps[step].title}</h3>
              <p className="text-xs text-slate-500">{steps[step].desc}</p>
           </div>
           <div className="flex gap-2">
             <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg disabled:opacity-30 transition-colors"><ArrowLeft size={16}/></button>
             <button onClick={() => setStep(Math.min(steps.length - 1, step + 1))} disabled={step === steps.length - 1} className="p-2 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg disabled:opacity-30 transition-colors"><ArrowRight size={16}/></button>
           </div>
        </div>

        <div className="flex-1 rounded-lg bg-slate-50 border border-slate-100 overflow-hidden relative">
          <Plot
            data={plotData}
            layout={{
              autosize: true,
              showlegend: true,
              legend: { orientation: 'h', y: 0, x: 0 },
              margin: { t: 20, l: 40, r: 20, b: 40 },
              xaxis: { title: 'PC1', range: [-0.05, 0.08], zeroline: false }, 
              yaxis: { title: 'PC2', range: [-0.05, 0.08], zeroline: false },
              hovermode: 'closest'
            }}
            config={{ displayModeBar: false, responsive: true }}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};

export default PcaExplainer;