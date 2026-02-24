import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Filter, Users, Play, Pause } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Allele = 'red' | 'blue' | 'green' | 'yellow';

const DriftSimulator: React.FC = () => {
  const [population, setPopulation] = useState<Allele[]>([]);
  const [generation, setGeneration] = useState(0);
  const [isBottleneck, setIsBottleneck] = useState(false);
  const [history, setHistory] = useState<{gen: number, red: number, blue: number, green: number, yellow: number}[]>([]);
  const [autoPlay, setAutoPlay] = useState(false);

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    let interval: any;
    if (autoPlay) {
      interval = setInterval(nextGeneration, 500);
    }
    return () => clearInterval(interval);
  }, [autoPlay, population, isBottleneck]);

  const reset = () => {
    const pop: Allele[] = [];
    for (let i = 0; i < 40; i++) {
      if (i < 10) pop.push('red');
      else if (i < 20) pop.push('blue');
      else if (i < 30) pop.push('green');
      else pop.push('yellow');
    }
    setPopulation(pop);
    setGeneration(0);
    setIsBottleneck(false);
    setHistory([{ gen: 0, red: 25, blue: 25, green: 25, yellow: 25 }]);
    setAutoPlay(false);
  };

  const nextGeneration = () => {
    const newPop: Allele[] = [];
    
    // Bottleneck logic: Only sample from the first 5 if bottleneck is active
    const parentPoolSize = isBottleneck ? 5 : 40;

    for (let i = 0; i < 40; i++) {
      const parentIndex = Math.floor(Math.random() * parentPoolSize);
      newPop.push(population[parentIndex]); 
    }
    
    if (isBottleneck) setIsBottleneck(false);

    setPopulation(newPop);
    setGeneration(g => g + 1);
    
    // Update Stats
    const counts = { red: 0, blue: 0, green: 0, yellow: 0 };
    newPop.forEach(p => counts[p]++);
    setHistory(h => [...h, { 
      gen: h.length, 
      red: (counts.red/40)*100, 
      blue: (counts.blue/40)*100, 
      green: (counts.green/40)*100, 
      yellow: (counts.yellow/40)*100 
    }]);
  };

  return (
    <div className="flex flex-col h-full gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 shrink-0">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-xl font-bold text-slate-900">Population Sim</h2>
           <div className="flex gap-2">
              <button onClick={() => setAutoPlay(!autoPlay)} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700">
                 {autoPlay ? <Pause size={18}/> : <Play size={18}/>}
              </button>
              <button onClick={reset} className="p-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-slate-700">
                 <RefreshCw size={18}/>
              </button>
           </div>
        </div>

        <div className="grid grid-cols-10 gap-2 p-4 bg-slate-100 rounded-xl">
           {population.map((p, i) => (
              <motion.div 
                key={`${generation}-${i}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className={`w-6 h-6 rounded-full shadow-sm border-2 border-white ${
                   p === 'red' ? 'bg-red-500' : 
                   p === 'blue' ? 'bg-blue-500' : 
                   p === 'green' ? 'bg-green-500' : 'bg-yellow-400'
                }`}
              />
           ))}
        </div>

        <div className="flex gap-2 mt-4">
           <button onClick={nextGeneration} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
             <Users size={16} /> Next Gen
           </button>
           <button onClick={() => { setIsBottleneck(true); nextGeneration(); }} className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
             <Filter size={16} /> Bottleneck
           </button>
        </div>
      </div>

      {/* The Data Chart */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex-1 min-h-[200px] flex flex-col">
         <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Allele Frequency (%)</h3>
         <div className="flex-1">
            <ResponsiveContainer width="100%" height="100%">
               <LineChart data={history}>
                  <XAxis dataKey="gen" hide />
                  <YAxis domain={[0, 100]} hide />
                  <Tooltip />
                  <Line type="monotone" dataKey="red" stroke="#ef4444" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="blue" stroke="#3b82f6" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="green" stroke="#10b981" strokeWidth={2} dot={false} />
                  <Line type="monotone" dataKey="yellow" stroke="#facc15" strokeWidth={2} dot={false} />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
};

export default DriftSimulator;