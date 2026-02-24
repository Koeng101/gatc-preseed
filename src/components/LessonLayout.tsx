import React, { useEffect, useRef } from 'react';
import type { CourseSection } from '../data/course_content';
// ... Widget Imports ...
import VcfExplorer from './VcfExplorer';
import PcaExplainer from './PcaExplainer';
import VariantInterpreter from './VariantInterpreter';
import ProteinViewer from './ProteinViewer';
import AlignmentGame from './AlignmentGame';
import TrimmingGame from './TrimmingGame';
import RiskSimulator from './RiskSimulator';
import ManhattanPlot from './ManhattanPlot';
import AncestryPainter from './AncestryPainter';
import DriftSimulator from './DriftSimulator';
import VolcanoPlot from './VolcanoPlot';
import CrisprLab from './CrisprLab';
import MicrobiomeSim from './MicrobiomeSim';
import SingleCellViewer from './SingleCellViewer';
import PHackingSim from './PHackingSim';
import BayesianReasoning from './BayesianReasoning';
import PhylogenyBuilder from './PhylogenyBuilder';
import EpigeneticsSim from './EpigeneticsSim';
import PCRSimulator from './PCRSimulator';
import PlasmidDesigner from './PlasmidDesigner';
import CodisMatcher from './CodisMatcher';

interface LessonLayoutProps {
  sections: CourseSection[];
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const LessonLayout: React.FC<LessonLayoutProps> = ({ sections, activeSection, onSectionChange }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeSection && scrollRef.current) {
      const el = document.getElementById(`section-${activeSection}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeSection]);

  const currentSection = sections.find(s => s.id === activeSection) || sections[0];
  const currentWidget = currentSection.widget || 'default';

  const renderWidget = () => {
    switch(currentWidget) {
      case 'aligner': return <AlignmentGame />;
      case 'trimming': return <TrimmingGame />;
      case 'vcf': return <VcfExplorer />;
      case 'pca': return <PcaExplainer />;
      case 'painting': return <AncestryPainter />;
      case 'drift': return <DriftSimulator />;
      case 'central_dogma': return <VariantInterpreter />;
      case 'volcano': return <VolcanoPlot />;
      case 'protein': return <ProteinViewer />;
      case 'gwas': return <ManhattanPlot />;
      case 'risk': return <RiskSimulator />;
      case 'crispr': return <CrisprLab />;
      case 'microbiome': return <MicrobiomeSim />;
      case 'single_cell': return <SingleCellViewer />;
      case 'phacking': return <PHackingSim />;
      case 'bayes': return <BayesianReasoning />;
      case 'phylogeny': return <PhylogenyBuilder />;
      case 'epigenetics': return <EpigeneticsSim />;
      case 'pcr': return <PCRSimulator />;
      case 'plasmid': return <PlasmidDesigner />;
      case 'codis': return <CodisMatcher />;
      default: return <div className="flex items-center justify-center h-full text-slate-400">Select a lesson to load simulator</div>;
    }
  };

  return (
    <div className="flex h-screen bg-white text-slate-900 font-sans overflow-hidden">
      
      {/* Left: Textbook */}
      <div 
        ref={scrollRef}
        className="w-[500px] shrink-0 border-r border-slate-200 bg-white overflow-y-auto"
      >
        <div className="p-12 pb-64">
          {sections.map((section) => (
            <div 
              key={section.id} 
              id={`section-${section.id}`}
              className={`mb-32 transition-opacity duration-500 ${activeSection === section.id ? 'opacity-100' : 'opacity-50'}`}
              onMouseEnter={() => onSectionChange(section.id)}
            >
              <div className="text-indigo-600 text-xs font-bold uppercase mb-4 tracking-widest bg-indigo-50 inline-block px-2 py-1 rounded">
                {section.module}
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 leading-tight">{section.title}</h2>
              <div className="prose prose-slate prose-lg leading-relaxed">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Simulator Stage */}
      <div className="flex-1 bg-slate-50 flex flex-col relative">
        <div className="absolute inset-4 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col">
           <div className="h-12 border-b border-slate-100 flex items-center px-6 justify-between bg-white shrink-0">
              <span className="font-bold text-xs text-slate-400 uppercase tracking-widest">
                 Simulation Deck // {currentSection.title}
              </span>
           </div>
           
           <div className="flex-1 overflow-auto p-8 widget-viewport">
              {renderWidget()}
           </div>
        </div>
      </div>
    </div>
  );
};

export default LessonLayout;