import React, { useState } from 'react';
import type { CourseSection } from '../data/course_content';
import { WidgetFactory } from './WidgetFactory';
import { BookOpen, FlaskConical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileLayoutProps {
  section: CourseSection;
}

export const MobileLayout: React.FC<MobileLayoutProps> = ({ section }) => {
  const [tab, setTab] = useState<'learn' | 'lab'>('learn');

  return (
    <div className="flex flex-col h-full bg-zinc-50 relative">
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          {tab === 'learn' ? (
            <motion.div 
              key="learn"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="absolute inset-0 overflow-y-auto p-6 pb-24"
            >
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">{section.title}</h2>
              <div className="prose prose-zinc leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="lab"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              className="absolute inset-0 p-4 pb-24 bg-white"
            >
               <div className="h-full rounded-2xl border border-zinc-200 shadow-sm overflow-hidden bg-white">
                  <WidgetFactory id={section.widget || 'default'} />
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Tab Bar */}
      <div className="absolute bottom-6 left-6 right-6 z-50">
        <div className="bg-zinc-900 text-zinc-400 p-1 rounded-full shadow-2xl flex relative">
           <div 
             className="absolute top-1 bottom-1 w-[50%] bg-zinc-800 rounded-full transition-all duration-300"
             style={{ left: tab === 'learn' ? '4px' : '50%' }}
           />
           <button 
             onClick={() => setTab('learn')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full relative z-10 transition-colors ${tab === 'learn' ? 'text-white' : ''}`}
           >
             <BookOpen size={18} /> <span className="text-xs font-bold uppercase tracking-widest">Theory</span>
           </button>
           <button 
             onClick={() => setTab('lab')}
             className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full relative z-10 transition-colors ${tab === 'lab' ? 'text-white' : ''}`}
           >
             <FlaskConical size={18} /> <span className="text-xs font-bold uppercase tracking-widest">Simulation</span>
           </button>
        </div>
      </div>
    </div>
  );
};
