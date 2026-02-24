import React from 'react';
import { RefreshCw, Settings2, Activity } from 'lucide-react';

interface SimulatorFrameProps {
  title: string;
  children: React.ReactNode;
}

export const SimulatorFrame: React.FC<SimulatorFrameProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-zinc-700 shadow-2xl lab-screen">
      {/* Header (Instrument Panel) */}
      <div className="bg-zinc-100 border-b border-zinc-200 h-10 px-4 flex justify-between items-center shrink-0">
        <div className="flex items-center gap-2">
           <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
           </div>
           <div className="h-4 w-px bg-zinc-300 mx-2"></div>
           <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider flex items-center gap-1">
              <Activity size={10} className="text-indigo-500" />
              {title}
           </span>
        </div>
        <div className="flex gap-3 text-zinc-400">
           <Settings2 size={12} className="cursor-pointer hover:text-zinc-600" />
           <RefreshCw size={12} className="cursor-pointer hover:text-zinc-600" />
        </div>
      </div>
      
      {/* Viewport */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-slate-50 p-6 widget-viewport">
         {children}
      </div>
    </div>
  );
};