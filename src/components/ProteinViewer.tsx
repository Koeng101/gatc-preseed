import React, { useEffect, useRef, useState } from 'react';
import { Stage } from 'ngl';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Play, RotateCcw } from 'lucide-react';

const ProteinViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<any | null>(null);
  const [mutationMode, setMutationMode] = useState<'healthy' | 'sickle'>('healthy');
  const [loading, setLoading] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [tourStep, setTourStep] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const newStage = new Stage(containerRef.current, { backgroundColor: 'white' });
    setStage(newStage);
    loadStructure(newStage, mutationMode);

    const handleResize = () => newStage.handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      newStage.dispose();
    };
  }, []); // Only init once

  // Separate effect for mode change to avoid full re-init
  useEffect(() => {
    if (stage) loadStructure(stage, mutationMode);
  }, [mutationMode]);

  const loadStructure = (currentStage: any, mode: 'healthy' | 'sickle') => {
    currentStage.removeAllComponents();
    setLoading(true);
    // HBB Hemoglobin Subunit Beta
    // 1HHO (Healthy), 2HBS (Sickle)
    const pdbId = mode === 'healthy' ? "rcsb://1HHO" : "rcsb://2HBS";

    currentStage.loadFile(pdbId).then((component: any) => {
      // Chain B is Beta-Globin
      // Residue 6 is the mutation site
      
      // Cartoon representation for context
      component.addRepresentation("cartoon", { 
          colorScheme: "chainid", 
          opacity: 0.6 
      });

      // Highlight Heme group
      component.addRepresentation("spacefill", { 
          sele: "HEM", 
          color: "#cc0000", 
          radiusScale: 0.8 
      });

      // Highlight Mutation Site (Glu6 or Val6)
      // Note: NGL selection language. ":B" is chain B. "6" is residue number.
      component.addRepresentation("ball+stick", { 
          sele: ":B and 6", 
          color: mode === 'healthy' ? "#ffd700" : "#ff0000", 
          radiusScale: 3.0 
      });

      // Label
      component.addRepresentation("label", {
        sele: ":B and 6",
        color: "black",
        labelType: "text",
        labelText: { ":B and 6": mode === 'healthy' ? "Glu6 (Hydrophilic)" : "Val6 (Hydrophobic)" },
        zOffset: 20,
        attachment: "middle_center"
      });

      if (mode === 'sickle') {
         // Show surface to imply stickiness?
         component.addRepresentation("surface", { 
             sele: ":B and 6", 
             opacity: 0.3, 
             color: "#ff0000" 
         });
      }

      component.autoView();
      setLoading(false);
      
      // Tour logic
      if (tourStep === 1) {
          // Zoom to mutation
          component.autoView(":B and 6", 2000);
      }
    });
  };

  const runTour = async () => {
    if (!stage) return;
    setTourStep(1);
    setMutationMode('healthy');
    // Zoom handled in loadStructure for now, or we can animate here
    // Wait
    setTimeout(() => {
        setTourStep(2);
        setMutationMode('sickle');
    }, 4000);
    setTimeout(() => {
        setTourStep(0);
    }, 8000);
  };

  return (
    <div className="w-full h-full flex flex-col relative bg-slate-50">
      {/* Controls Header */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10 pointer-events-none">
         <div className="bg-white/90 backdrop-blur p-2 rounded-xl border border-slate-200 shadow-sm pointer-events-auto flex flex-col gap-2">
            <h3 className="font-bold text-slate-900 px-2 text-sm">Hemoglobin Viewer</h3>
            
            {/* Custom Toggle Switch */}
            <div className="relative bg-slate-200 rounded-lg p-1 flex w-48 h-10 cursor-pointer" onClick={() => setMutationMode(m => m === 'healthy' ? 'sickle' : 'healthy')}>
                <motion.div 
                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white rounded shadow-sm z-0"
                    initial={false}
                    animate={{ left: mutationMode === 'healthy' ? 4 : 'calc(50%)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
                <div className={`flex-1 flex items-center justify-center text-xs font-bold z-10 transition-colors ${mutationMode === 'healthy' ? 'text-blue-600' : 'text-slate-500'}`}>
                    Healthy
                </div>
                <div className={`flex-1 flex items-center justify-center text-xs font-bold z-10 transition-colors ${mutationMode === 'sickle' ? 'text-red-600' : 'text-slate-500'}`}>
                    Sickle Cell
                </div>
            </div>

            <div className="flex gap-2 mt-1">
                <button onClick={runTour} className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-700 py-1.5 px-3 rounded text-xs font-bold flex items-center justify-center gap-1 transition-colors">
                    <Play size={14} /> Replay Change
                </button>
                <button onClick={() => stage?.autoView()} className="bg-slate-50 hover:bg-slate-100 text-slate-600 p-1.5 rounded transition-colors" title="Reset View">
                    <RotateCcw size={14} />
                </button>
            </div>
         </div>

         {/* Legend Toggle */}
         <button 
            onClick={() => setShowLegend(!showLegend)} 
            className="pointer-events-auto bg-white/90 backdrop-blur p-2 rounded-lg border border-slate-200 shadow-sm text-slate-500 hover:text-blue-600 transition-colors"
         >
            <Info size={20} />
         </button>
      </div>

      {/* 3D Canvas */}
      <div className="flex-1 relative overflow-hidden rounded-xl border border-slate-200 shadow-inner bg-white m-4 mt-0">
         {loading && (
           <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-20 backdrop-blur">
             <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                <span className="text-blue-600 font-bold text-sm">Loading Protein Structure...</span>
             </div>
           </div>
         )}
         <div ref={containerRef} className="w-full h-full cursor-move" />
         
         {/* Overlay Legend */}
         <AnimatePresence>
            {showLegend && (
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="absolute bottom-4 right-4 w-56 bg-white/90 backdrop-blur p-4 rounded-xl shadow-xl border border-slate-200 text-xs pointer-events-none"
                >
                <h4 className="font-bold mb-2 text-slate-900 border-b border-slate-100 pb-1">Key Features</h4>
                <div className="space-y-2">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-700"></div> <span>Heme Group (Oxygen Carrier)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-slate-300 border"></div> <span>Protein Backbone</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400"></div> <span>Glu6 (Healthy / Hydrophilic)</span></div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-red-500"></div> <span>Val6 (Sickle / Hydrophobic)</span></div>
                </div>
                <div className="mt-3 text-[10px] text-slate-500 leading-tight">
                    *Note: Hydrophobic residues stick together, causing clumps.
                </div>
                </motion.div>
            )}
         </AnimatePresence>

         {/* Tour Overlay Text */}
         <AnimatePresence>
            {tourStep === 1 && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-bold pointer-events-none"
                >
                    Zooming to Residue 6...
                </motion.div>
            )}
            {tourStep === 2 && (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-4 rounded-xl text-xl font-bold pointer-events-none shadow-2xl border-4 border-white"
                >
                    MUTATION!
                </motion.div>
            )}
         </AnimatePresence>
      </div>
    </div>
  );
};

export default ProteinViewer;