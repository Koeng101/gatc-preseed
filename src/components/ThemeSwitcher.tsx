import React from 'react';
import { Palette } from 'lucide-react';

export const ThemeSwitcher: React.FC = () => {
  const setTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 group">
      <button className="p-3 bg-white border border-slate-200 rounded-full shadow-lg text-slate-500 hover:text-indigo-600 transition-all">
        <Palette size={20} />
      </button>
      
      <div className="absolute bottom-full left-0 mb-2 flex flex-col gap-2 bg-white p-2 rounded-xl shadow-xl border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
        <button onClick={() => setTheme('default')} className="px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded">Clean Slate</button>
        <button onClick={() => setTheme('swiss')} className="px-3 py-1 text-xs font-bold font-mono text-black hover:bg-black hover:text-white rounded border-2 border-black">SWISS</button>
        <button onClick={() => setTheme('organic')} className="px-3 py-1 text-xs font-serif text-[#2c3e2e] bg-[#f0ebe5] hover:bg-[#e0dad5] rounded">Organic</button>
      </div>
    </div>
  );
};
