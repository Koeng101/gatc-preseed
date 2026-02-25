import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { memoSections } from '../data/memo_content';
import { VisualizationPlaceholder } from './VisualizationPlaceholder';

export const MemoView: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeViz, setActiveViz] = useState<{ id: string; label: string } | null>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Find all viz IDs from sections for IntersectionObserver
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const vizId = entry.target.getAttribute('data-viz-id');
            const vizLabel = entry.target.getAttribute('data-viz-label');
            if (vizId && vizLabel) {
              setActiveViz({ id: vizId, label: vizLabel });
            }
          }
        }
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((el) => {
      if (el.getAttribute('data-viz-id')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [isMobile]);

  // Set initial viz
  useEffect(() => {
    for (const section of memoSections) {
      for (const sub of section.subsections) {
        if (sub.vizId && sub.vizLabel) {
          setActiveViz({ id: sub.vizId, label: sub.vizLabel });
          return;
        }
      }
    }
  }, []);

  if (isMobile) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="px-4 py-8 md:px-6 md:py-12 max-w-[750px] mx-auto">
          <MemoContent sectionRefs={sectionRefs} inline />
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full p-8 gap-8 max-w-[1800px] mx-auto overflow-hidden">
      {/* Left panel: prose */}
      <div className="flex-[1.2] bg-[#fdfdfd] border-2 border-black shadow-hard overflow-y-auto p-12">
        <div className="max-w-[700px] mx-auto">
          <MemoContent sectionRefs={sectionRefs} />
        </div>
      </div>

      {/* Right panel: sticky viz */}
      <div className="flex-1 flex flex-col h-full border-2 border-black bg-white shadow-hard relative">
        <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#ff4d00] border border-black" />
            <div className="w-3 h-3 bg-black border border-black" />
            <div className="w-3 h-3 bg-[#f2f0e9] border border-black" />
          </div>
          <span className="font-mono text-xs font-bold uppercase">VIZ://{activeViz?.id || 'none'}</span>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          {activeViz ? (
            <motion.div
              key={activeViz.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <VisualizationPlaceholder label={activeViz.label} className="h-[300px]" />
            </motion.div>
          ) : (
            <span className="font-mono text-xs text-zinc-400 uppercase">Scroll to activate</span>
          )}
        </div>
      </div>
    </div>
  );
};

// Extracted prose renderer
const MemoContent: React.FC<{
  sectionRefs: React.MutableRefObject<Map<string, HTMLDivElement>>;
  inline?: boolean;
}> = ({ sectionRefs, inline = false }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
          Investor Memo
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-12 leading-[0.95] uppercase">
          Genetic Assemblies
        </h1>
      </motion.div>

      {memoSections.map((section, i) => (
        <div key={section.id} className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
            className="text-3xl font-black text-black mb-6 uppercase border-b-4 border-black pb-2"
          >
            {section.title}
          </motion.h2>

          {section.subsections.map((sub, j) => {
            const refKey = `${section.id}-${j}`;
            return (
              <div
                key={j}
                ref={(el) => {
                  if (el) sectionRefs.current.set(refKey, el);
                }}
                data-viz-id={sub.vizId || undefined}
                data-viz-label={sub.vizLabel || undefined}
                className="mb-8"
              >
                {sub.heading && (
                  <h3 className="text-lg font-black text-black mb-3 uppercase">
                    {sub.heading}
                  </h3>
                )}

                {sub.paragraphs.map((p, k) => (
                  <p key={k} className="text-base leading-relaxed text-slate-800 font-mono mb-4">
                    {p}
                  </p>
                ))}

                {sub.bullets && (
                  <ul className="space-y-2 mb-4 ml-4">
                    {sub.bullets.map((bullet, k) => (
                      <li key={k} className="flex gap-3 text-sm font-mono text-slate-800">
                        <span className="text-[#ff4d00] font-bold shrink-0">//</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Inline viz for mobile */}
                {inline && sub.vizId && sub.vizLabel && (
                  <VisualizationPlaceholder label={sub.vizLabel} className="my-6" />
                )}
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};
