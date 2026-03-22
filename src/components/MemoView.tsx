import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { memoSections } from '../data/memo_content';
import { VisualizationPlaceholder } from './VisualizationPlaceholder';
import { getMemoViz } from './MemoViz';
import { replaceSection } from '../hooks/useHashTab';

interface MemoViewProps {
  section?: string | null;
}

export const MemoView: React.FC<MemoViewProps> = ({ section }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [activeViz, setActiveViz] = useState<{ id: string; label: string } | null>(null);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to section on mount
  const initialScrollDone = useRef(false);
  useEffect(() => {
    if (initialScrollDone.current || !section) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView();
        initialScrollDone.current = true;
      }
    });
  }, [section]);

  // Scroll-based viz switching + section URL sync
  useEffect(() => {
    const container = isMobile ? null : scrollRef.current;
    const scrollTarget = container || document.querySelector('.h-full.overflow-y-auto') as HTMLElement;
    if (!scrollTarget) return;

    const handleScroll = () => {
      // Viz switching (desktop only)
      if (!isMobile && container) {
        const triggerY = container.getBoundingClientRect().top + container.clientHeight * 0.35;
        let lastViz: { id: string; label: string } | null = null;

        sectionRefs.current.forEach((el) => {
          const vizId = el.getAttribute('data-viz-id');
          const vizLabel = el.getAttribute('data-viz-label');
          if (vizId && vizLabel && el.getBoundingClientRect().top < triggerY) {
            lastViz = { id: vizId, label: vizLabel };
          }
        });

        if (lastViz) {
          setActiveViz(lastViz);
        }
      }

      // Section URL sync
      const viewportMid = window.innerHeight / 2;
      let visibleSection: string | null = null;
      for (const sec of memoSections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < viewportMid && rect.bottom > 0) {
            visibleSection = sec.id;
          }
        }
      }
      if (visibleSection) {
        replaceSection(visibleSection === memoSections[0].id ? null : visibleSection);
      }
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

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
      <div ref={scrollRef} className="flex-[1.2] bg-[#fdfdfd] border-2 border-black shadow-hard overflow-y-auto p-12">
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
              {getMemoViz(activeViz.id) || <VisualizationPlaceholder label={activeViz.label} className="h-[300px]" />}
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

      {(() => {
        const renderedVizIds = new Set<string>();
        return memoSections.map((section, i) => (
          <div key={section.id} id={section.id} className="mb-12">
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
              const showInlineViz = inline && sub.vizId && sub.vizLabel && !renderedVizIds.has(sub.vizId);
              if (inline && sub.vizId) renderedVizIds.add(sub.vizId);
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
                  {/* Inline viz for mobile — rendered above text */}
                  {showInlineViz && (
                    <div className="mb-6">
                      {getMemoViz(sub.vizId!) || <VisualizationPlaceholder label={sub.vizLabel!} />}
                    </div>
                  )}

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
                </div>
              );
            })}
          </div>
        ));
      })()}
      <p className="mt-12 text-base leading-relaxed font-mono text-slate-800 border-t border-slate-200 pt-4">
        Disclaimer: there was a previous legal spat due to cofounder issues with my last startup — this has been completely settled as of &gt;9 months ago.
      </p>
    </>
  );
};
