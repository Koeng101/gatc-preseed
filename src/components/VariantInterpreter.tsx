import React, { useState } from 'react';
import { Microscope, ArrowRight, AlertTriangle, CheckCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const EXAMPLES = {
  sickle: {
    name: "Sickle Cell Anemia (HBB)",
    type: "Missense (Substitution)",
    desc: "A single letter swap (A -> T) changes Glu to Val.",
    prefix: "ACC GTA ",
    target: { ref: "GAA", alt: "GTA" },
    suffix: " CCT AGG",
    refAA: "Glu",
    altAA: "Val",
    consequence: "Hydrophobic 'sticky' patch causes protein clumping."
  },
  cf: {
    name: "Cystic Fibrosis (CFTR)",
    type: "Deletion (In-frame)",
    desc: "The famous DeltaF508 mutation. Three letters deleted.",
    prefix: "ATC ATC ",
    target: { ref: "TTT", alt: "---" },
    suffix: " GGT GTT",
    refAA: "Phe",
    altAA: "DEL",
    consequence: "Missing Phenylalanine (Phe) causes the protein to misfold and be destroyed by the cell."
  },
  brca: {
    name: "Breast Cancer (BRCA1)",
    type: "Nonsense (Premature Stop)",
    desc: "Code changes to a STOP signal.",
    prefix: "TCA GAA ",
    target: { ref: "TTA", alt: "TAA" },
    suffix: " GCA TCC",
    refAA: "Leu",
    altAA: "STOP",
    consequence: "Protein production stops halfway. The truncated protein is useless."
  }
};

const VariantInterpreter: React.FC = () => {
  const [variantState, setVariantState] = useState<'ref' | 'alt'>('ref');
  const [activeExample, setActiveExample] = useState<keyof typeof EXAMPLES>('sickle');

  const ex = EXAMPLES[activeExample];
  const currentCodon = variantState === 'ref' ? ex.target.ref : ex.target.alt;
  const aminoAcid = variantState === 'ref' ? ex.refAA : ex.altAA;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-12">
      
      {/* Header & Selector */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
          <Microscope className="text-purple-600" />
          The Central Dogma Simulator
        </h2>
        
        <div className="relative">
          <select 
            value={activeExample}
            onChange={(e) => { setActiveExample(e.target.value as any); setVariantState('ref'); }}
            className="w-full appearance-none bg-slate-100 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3 pr-8 font-bold"
          >
            <option value="sickle">Sickle Cell (Missense)</option>
            <option value="cf">Cystic Fibrosis (Deletion)</option>
            <option value="brca">BRCA1 (Nonsense/Stop)</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-700">
            <ChevronDown size={16} />
          </div>
        </div>
        
        <p className="text-sm text-slate-500 mt-2 italic">{ex.desc}</p>
      </div>

      {/* Simulator */}
      <div className="bg-slate-900 rounded-2xl p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
        
        <div className="flex justify-center items-center gap-2 text-3xl font-mono font-bold mb-8">
          <span className="text-slate-500">{ex.prefix}</span>
          
          <div className="relative group">
            <motion.span 
              key={`${activeExample}-${currentCodon}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-block px-2 py-1 rounded border-2 ${variantState === 'ref' ? 'border-green-500 text-green-400 bg-green-500/10' : 'border-red-500 text-red-400 bg-red-500/10'}`}
            >
              {currentCodon}
            </motion.span>
          </div>

          <span className="text-slate-500">{ex.suffix}</span>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setVariantState('ref')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${variantState === 'ref' ? 'bg-green-600 text-white shadow-lg shadow-green-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Healthy (Ref)
          </button>
          <button 
            onClick={() => setVariantState('alt')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${variantState === 'alt' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
          >
            Mutant (Alt)
          </button>
        </div>

        {/* Translation Output */}
        <div className="bg-slate-800 rounded-xl p-6 max-w-lg mx-auto border border-slate-700">
          <div className="flex justify-between items-center text-sm text-slate-400 mb-4 border-b border-slate-700 pb-2">
            <span>DNA Codon</span>
            <ArrowRight size={14} />
            <span>Amino Acid</span>
          </div>
          
          <div className="flex justify-between items-center">
             <div className="text-2xl font-bold text-white">{currentCodon}</div>
             <div className="h-px bg-slate-600 w-12"></div>
             <motion.div 
                key={`${activeExample}-${aminoAcid}`}
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className={`text-2xl font-bold ${variantState === 'ref' ? 'text-green-400' : 'text-red-400'}`}
             >
                {aminoAcid}
             </motion.div>
          </div>
        </div>
      </div>

      {/* Consequence Box */}
      <div className={`p-6 rounded-xl border-l-4 ${variantState === 'ref' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          {variantState === 'ref' ? <CheckCircle className="text-green-600"/> : <AlertTriangle className="text-red-600"/>}
          Biological Outcome
        </h3>
        
        <p className={variantState === 'ref' ? 'text-green-800' : 'text-red-800'}>
           {variantState === 'ref' ? "Protein functions normally." : ex.consequence}
        </p>
      </div>
    </div>
  );
};

export default VariantInterpreter;
