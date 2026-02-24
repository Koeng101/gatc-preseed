import React, { useState } from 'react';
import { sampleData, type VcfLine } from '../data/sample_vcf';
import { Info, ExternalLink, HelpCircle } from 'lucide-react';

const VcfExplorer: React.FC = () => {
  const [selected, setSelected] = useState<VcfLine | null>(null);

  // Helper to explain Indels
  const getChangeDescription = (ref: string, alt: string) => {
    if (ref === '-') return `Insertion of ${alt}`;
    if (alt === '-') return `Deletion of ${ref}`;
    return `${ref} → ${alt}`;
  };

  return (
    <div className="w-full h-full flex flex-col gap-6">
      <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden flex-1 flex flex-col">
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center shrink-0">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <Info className="w-5 h-5 text-blue-600" />
            VCF Viewer
          </h2>
          <span className="text-xs text-slate-500">Showing chr1, chr11, chr17</span>
        </div>
        
        <div className="overflow-auto flex-1">
          <table className="w-full text-left text-sm font-mono">
            <thead className="bg-slate-100 text-slate-600 uppercase text-xs sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2">CHROM</th>
                <th className="px-4 py-2">POS</th>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">REF</th>
                <th className="px-4 py-2">ALT</th>
                <th className="px-4 py-2">GT</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sampleData.map((line, idx) => (
                <tr 
                  key={idx} 
                  onClick={() => setSelected(line)}
                  className={`cursor-pointer hover:bg-blue-50 transition-colors ${selected?.id === line.id ? 'bg-blue-100' : ''}`}
                >
                  <td className="px-4 py-3 font-bold text-slate-700">{line.chrom}</td>
                  <td className="px-4 py-3 text-slate-500">{line.pos.toLocaleString()}</td>
                  <td className="px-4 py-3 text-blue-600 hover:underline">{line.id}</td>
                  <td className="px-4 py-3 text-red-600 bg-red-50/50 text-center font-bold">{line.ref}</td>
                  <td className="px-4 py-3 text-green-600 bg-green-50/50 text-center font-bold">{line.alt}</td>
                  <td className="px-4 py-3 font-bold text-slate-800">{line.sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selected && (
        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-xl animate-in slide-in-from-bottom-4 shrink-0">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-blue-300" />
            Decoding {selected.id}
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <span className="text-xs text-blue-300 uppercase tracking-wider">Change Type</span>
                  <p className="font-bold text-lg">{getChangeDescription(selected.ref, selected.alt)}</p>
               </div>
               <div>
                  <span className="text-xs text-blue-300 uppercase tracking-wider">Genotype</span>
                  <p className="font-bold text-lg">
                    {selected.sample === '0/1' ? 'Heterozygous (1 copy)' : 'Homozygous (2 copies)'}
                  </p>
               </div>
            </div>
            
            <div className="pt-4 border-t border-blue-800 flex gap-4">
              <a 
                href={`https://www.ncbi.nlm.nih.gov/snp/${selected.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                <ExternalLink className="w-4 h-4" /> View on dbSNP
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VcfExplorer;