import React from 'react';
import type { CourseSection } from '../data/course_content';
import { WidgetFactory } from './WidgetFactory';

interface DesktopLayoutProps {
  section: CourseSection;
}

export const DesktopLayout: React.FC<DesktopLayoutProps> = ({ section }) => {
  return (
    <div className="flex h-full p-8 gap-8 max-w-[1800px] mx-auto overflow-hidden">
      
      {/* Textbook (The "Field Manual") */}
      <div className="flex-[1.2] bg-[#fdfdfd] border-2 border-black shadow-hard overflow-y-auto custom-scrollbar relative p-12">
        <div className="max-w-[700px] mx-auto">
           <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6 transform -rotate-1">
              Module: {section.module}
           </div>
           
           <h1 className="text-6xl font-black text-black mb-8 leading-[0.9] uppercase">
              {section.title}
           </h1>
           
           <div className="prose prose-xl prose-stone font-mono max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:uppercase prose-p:text-slate-800">
              {section.content}
           </div>
        </div>
      </div>

      {/* Simulator (The "Deck") */}
      <div className="flex-1 flex flex-col h-full border-2 border-black bg-white shadow-hard relative">
         <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
            <div className="flex items-center gap-2">
               <div className="w-3 h-3 bg-red-500 border border-black rounded-full" />
               <div className="w-3 h-3 bg-yellow-500 border border-black rounded-full" />
               <div className="w-3 h-3 bg-green-500 border border-black rounded-full" />
            </div>
            <span className="font-mono text-xs font-bold uppercase">TERM://{section.widget}</span>
         </div>
         
         <div className="flex-1 overflow-auto bg-[#f0f0f0] p-8 widget-viewport">
            <div className="bg-white border border-black p-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)] h-full">
               <WidgetFactory id={section.widget || 'default'} />
            </div>
         </div>
      </div>
    </div>
  );
};
