import { BarChart3 } from 'lucide-react';

interface VisualizationPlaceholderProps {
  label: string;
  className?: string;
}

export const VisualizationPlaceholder: React.FC<VisualizationPlaceholderProps> = ({ label, className = '' }) => {
  return (
    <div className={`border-2 border-dashed border-black bg-[#f2f0e9] flex flex-col items-center justify-center gap-4 p-8 min-h-[200px] ${className}`}>
      <BarChart3 size={32} className="text-black" />
      <span className="font-mono text-xs font-bold uppercase tracking-widest text-black">
        {label}
      </span>
    </div>
  );
};
