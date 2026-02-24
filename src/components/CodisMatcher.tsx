import React, { useState } from 'react';
import { Fingerprint, ShieldCheck, AlertOctagon } from 'lucide-react';

const MARKERS = ['CSF1PO', 'FGA', 'TH01', 'TPOX', 'VWA', 'D13S317', 'D16S539', 'D21S11'];

// Crime Scene Profile
const CRIME_SCENE = {
  CSF1PO: [10, 12],
  FGA: [20, 24],
  TH01: [6, 9.3],
  TPOX: [8, 8],
  VWA: [14, 17],
  D13S317: [11, 14],
  D16S539: [11, 12],
  D21S11: [28, 30]
};

const SUSPECTS = [
  {
    id: 1,
    name: "Suspect A",
    profile: {
      CSF1PO: [10, 12], FGA: [20, 24], TH01: [6, 9.3], TPOX: [8, 8],
      VWA: [14, 17], D13S317: [11, 14], D16S539: [11, 12], D21S11: [28, 30]
    } // Match
  },
  {
    id: 2,
    name: "Suspect B",
    profile: {
      CSF1PO: [11, 12], FGA: [21, 24], TH01: [6, 7], TPOX: [8, 11],
      VWA: [14, 18], D13S317: [9, 14], D16S539: [11, 13], D21S11: [29, 30]
    } // Mismatch
  },
  {
    id: 3,
    name: "Suspect C",
    profile: {
      CSF1PO: [10, 10], FGA: [22, 22], TH01: [7, 9.3], TPOX: [8, 9],
      VWA: [16, 17], D13S317: [12, 14], D16S539: [9, 12], D21S11: [28, 32.2]
    } // Mismatch
  }
];

const CodisMatcher: React.FC = () => {
  const [selectedSuspect, setSelectedSuspect] = useState<number | null>(null);

  const checkMatch = (suspectId: number) => {
    const suspect = SUSPECTS.find(s => s.id === suspectId);
    if (!suspect) return false;
    
    // Check all markers
    return MARKERS.every(m => {
      const sVals = suspect.profile[m as keyof typeof suspect.profile].sort().join(',');
      const cVals = CRIME_SCENE[m as keyof typeof CRIME_SCENE].sort().join(',');
      return sVals === cVals;
    });
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
           <Fingerprint className="text-blue-600" /> CODIS Lab (Forensics)
        </h2>
        <p className="text-sm text-slate-600 mb-6">
           <strong>Task:</strong> Compare the Crime Scene DNA (STR markers) against the suspects. 
           Find the perfect match.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {/* Crime Scene Card */}
           <div className="bg-slate-900 text-white p-6 rounded-xl border border-slate-700">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 border-b border-slate-700 pb-2">Evidence #492-A</h3>
              <div className="grid grid-cols-2 gap-y-2 text-sm font-mono">
                 {MARKERS.map(m => (
                    <div key={m} className="flex justify-between">
                       <span className="text-slate-400">{m}</span>
                       <span className="font-bold text-blue-400">
                          {CRIME_SCENE[m as keyof typeof CRIME_SCENE].join(', ')}
                       </span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Suspect Selector */}
           <div className="space-y-4">
              {SUSPECTS.map(suspect => (
                 <button
                   key={suspect.id}
                   onClick={() => setSelectedSuspect(suspect.id)}
                   className={`w-full p-4 rounded-xl border-2 text-left transition-all ${selectedSuspect === suspect.id ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-slate-300'}`}
                 >
                    <div className="font-bold text-slate-900">{suspect.name}</div>
                    <div className="text-xs text-slate-500 mt-1">Profile ID: {1000 + suspect.id}</div>
                 </button>
              ))}
           </div>
        </div>
      </div>

      {/* Comparison Result */}
      {selectedSuspect && (
         <div className={`p-6 rounded-xl border-l-4 shadow-lg animate-in slide-in-from-bottom-4 ${checkMatch(selectedSuspect) ? 'bg-red-50 border-red-500' : 'bg-slate-100 border-slate-400'}`}>
            <div className="flex items-center gap-4">
               {checkMatch(selectedSuspect) ? (
                  <>
                     <AlertOctagon size={32} className="text-red-600" />
                     <div>
                        <h3 className="text-xl font-bold text-red-800">POSITIVE MATCH</h3>
                        <p className="text-red-700 text-sm">
                           All 13 CODIS loci match. The probability of a random match is 1 in 1 quintillion.
                        </p>
                     </div>
                  </>
               ) : (
                  <>
                     <ShieldCheck size={32} className="text-slate-500" />
                     <div>
                        <h3 className="text-xl font-bold text-slate-700">EXCLUSION</h3>
                        <p className="text-slate-600 text-sm">
                           Alleles do not align. This suspect is excluded.
                        </p>
                     </div>
                  </>
               )}
            </div>
         </div>
      )}
    </div>
  );
};

export default CodisMatcher;
