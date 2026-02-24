import AlignmentGame from './AlignmentGame';
import TrimmingGame from './TrimmingGame';
import VcfExplorer from './VcfExplorer';
import PcaExplainer from './PcaExplainer';
import AncestryPainter from './AncestryPainter';
import DriftSimulator from './DriftSimulator';
import VariantInterpreter from './VariantInterpreter';
import VolcanoPlot from './VolcanoPlot';
import ProteinViewer from './ProteinViewer';
import ManhattanPlot from './ManhattanPlot';
import RiskSimulator from './RiskSimulator';
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

export const WidgetFactory = ({ id }: { id: string }) => {
  switch(id) {
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
    default: return <div className="flex items-center justify-center h-full text-zinc-400">Select a lesson</div>;
  }
};
