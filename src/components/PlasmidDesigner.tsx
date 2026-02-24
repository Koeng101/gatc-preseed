import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RotateCw, Play } from 'lucide-react';

type Part = { type: 'Promoter' | 'RBS' | 'CDS' | 'Terminator' | 'Antibiotic'; name: string; color: string; angle: number };

const PlasmidDesigner: React.FC = () => {
  const [parts, setParts] = useState<Part[]>([
    { type: 'Antibiotic', name: 'AmpR', color: '#ef4444', angle: 45 }
  ]);
  const [rotation, setRotation] = useState(0);

  const addPart = (type: Part['type']) => {
    const colors = { Promoter: '#3b82f6', RBS: '#a855f7', CDS: '#10b981', Terminator: '#f59e0b', Antibiotic: '#ef4444' };
    const newAngle = (parts.length * 60 + 45) % 360;
    setParts([...parts, { type, name: type, color: colors[type], angle: newAngle }]);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Plasmid Architect</h2>
          <p className="text-sm text-slate-500">Design a circular DNA vector.</p>
        </div>
        <div className="flex gap-2">
           <button onClick={() => addPart('Promoter')} className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs font-bold">+ Pro</button>
           <button onClick={() => addPart('RBS')} className="px-3 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bold">+ RBS</button>
           <button onClick={() => addPart('CDS')} className="px-3 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">+ CDS</button>
           <button onClick={() => addPart('Terminator')} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-bold">+ Ter</button>
        </div>
      </div>

      <div className="relative h-[400px] bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden">
         {/* The Plasmid Backbone */}
         <motion.div 
           className="relative w-64 h-64 border-[12px] border-slate-700 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)]"
           animate={{ rotate: rotation }}
           transition={{ type: 'spring', damping: 20 }}
         >
            {parts.map((part, i) => (
               <div 
                 key={i}
                 className="absolute top-0 left-1/2 -ml-3 w-6 h-[12px] origin-[50%_128px]"
                 style={{ transform: `rotate(${part.angle}deg)` }}
               >
                  <div className="w-full h-full rounded-sm" style={{ backgroundColor: part.color, boxShadow: `0 0 10px ${part.color}` }} />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white whitespace-nowrap bg-black/50 px-2 rounded backdrop-blur transform -rotate-[${part.angle}deg]">
                     {part.name}
                  </div>
               </div>
            ))}
         </motion.div>

         {/* Center Label */}
         <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
               <div className="text-2xl font-bold text-white">pGem-v1</div>
               <div className="text-xs text-slate-400">{2000 + parts.length * 500} bp</div>
            </div>
         </div>
         
         <button 
           onClick={() => setRotation(r => r + 90)}
           className="absolute bottom-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur"
         >
            <RotateCw size={20} />
         </button>
      </div>
      
      {parts.find(p => p.type === 'CDS') && parts.find(p => p.type === 'Promoter') ? (
         <div className="bg-green-100 text-green-800 p-4 rounded-xl flex items-center gap-3">
            <Play fill="currentColor" />
            <div className="text-sm">
               <strong>Functional Circuit!</strong> This plasmid can express protein in <em>E. coli</em>.
            </div>
         </div>
      ) : (
         <div className="bg-slate-100 text-slate-500 p-4 rounded-xl text-sm italic">
            Tip: You need at least a Promoter and a CDS to make a functional gene.
         </div>
      )}
    </div>
  );
};

export default PlasmidDesigner;
