import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  parseResearchSections,
  reportsByTopic,
  type ResearchSection,
} from '../data/secret_content';
import {
  parseStrategy,
  type StrategyBlock,
} from '../data/strategy_content';
import { decryptAll, type DecryptedContent } from '../lib/crypto';
import { replaceSection } from '../hooks/useHashTab';

type SecretTab = 'strategy' | 'market_research';

interface SecretViewProps {
  section?: string | null;
}

/* ------------------------------------------------------------------ */
/*  Password Gate                                                      */
/* ------------------------------------------------------------------ */

const PasswordGate: React.FC<{ onUnlock: (content: DecryptedContent) => void }> = ({ onUnlock }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(false);

    const result = await decryptAll(value.trim());
    if (result) {
      onUnlock(result);
    } else {
      setError(true);
      setValue('');
      setLoading(false);
      setTimeout(() => setError(false), 1500);
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-black p-8 sm:p-12 max-w-md w-full"
        style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
      >
        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
          Access Restricted
        </div>
        <h2 className="text-2xl font-black uppercase mb-2">Internal Research</h2>
        <p className="font-mono text-sm text-slate-600 mb-8">
          Enter the password to view market research data.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="PASSWORD"
            disabled={loading}
            className={`w-full border-2 ${error ? 'border-red-500 bg-red-50' : 'border-black'} px-4 py-3 font-mono text-sm tracking-wider outline-none transition-colors disabled:opacity-50`}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-[#ff4d00] text-white border-2 border-black px-4 py-3 font-mono text-sm font-bold uppercase tracking-wider hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-50"
            style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
          >
            {loading ? 'Decrypting...' : 'Unlock'}
          </button>
        </form>

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-mono text-xs text-red-600 uppercase font-bold"
          >
            // ACCESS DENIED
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Rant Modal                                                         */
/* ------------------------------------------------------------------ */

const RantModal: React.FC<{ text: string; onClose: () => void }> = ({ text, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border-2 border-black w-full max-w-4xl max-h-[85vh] flex flex-col"
        style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
          <span className="font-mono text-xs font-bold uppercase">RANT://founder_memo</span>
          <button
            onClick={onClose}
            className="w-6 h-6 border-2 border-black bg-white font-mono text-xs font-bold flex items-center justify-center hover:bg-[#ff4d00] hover:text-white transition-colors"
          >
            X
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-[700px] mx-auto">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-4">
              Founder Rant (Cleaned)
            </div>
            <h2 className="text-2xl font-black uppercase mb-6">Strategy Voice Memo</h2>
            {text.split('\n\n').map((para, i) => {
              if (para.startsWith('---')) {
                return <hr key={i} className="border-t-2 border-black my-8" />;
              }
              return (
                <p key={i} className="text-sm leading-relaxed text-slate-800 font-mono mb-4">
                  {para}
                </p>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Report Viewer Modal                                                */
/* ------------------------------------------------------------------ */

const ReportModal: React.FC<{ content: string; label: string; reportKey: string; onClose: () => void }> = ({ content, label, reportKey, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white border-2 border-black w-full max-w-4xl max-h-[85vh] flex flex-col"
        style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
          <span className="font-mono text-xs font-bold uppercase truncate mr-2">REPORT://{reportKey}</span>
          <button
            onClick={onClose}
            className="w-6 h-6 border-2 border-black bg-white font-mono text-xs font-bold flex items-center justify-center hover:bg-[#ff4d00] hover:text-white transition-colors shrink-0"
          >
            X
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-[700px] mx-auto">
            <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-4">
              Research Report
            </div>
            <h2 className="text-xl font-black uppercase mb-6">{label}</h2>
            <pre className="text-sm leading-relaxed text-slate-800 font-mono whitespace-pre-wrap break-words">
              {content}
            </pre>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/*  Sub-Tab Header                                                     */
/* ------------------------------------------------------------------ */

const SECRET_TABS: { id: SecretTab; label: string }[] = [
  { id: 'strategy', label: 'STRATEGY' },
  { id: 'market_research', label: 'MARKET_RESEARCH' },
];

const SecretTabNav: React.FC<{ active: SecretTab; onChange: (t: SecretTab) => void }> = ({ active, onChange }) => (
  <div className="border-b-2 border-black bg-white shrink-0">
    <div className="flex gap-1.5 px-4 py-2 overflow-x-auto">
      {SECRET_TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-3 py-1.5 whitespace-nowrap border-2 border-black text-xs font-bold font-mono uppercase tracking-wider transition-all ${
            active === tab.id
              ? 'bg-[#ff4d00] !text-white !shadow-none translate-x-[2px] translate-y-[2px]'
              : 'bg-white text-black hover:bg-zinc-50'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Strategy View                                                      */
/* ------------------------------------------------------------------ */

/** Render text with colored [1], [2a], etc. references */
const StrategyText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\[\d+[a-z]?\])/g);
  return (
    <>
      {parts.map((part, i) => {
        if (/^\[\d+[a-z]?\]$/.test(part)) {
          const ref = part.slice(1, -1);
          const isSub = /[a-z]$/.test(ref);
          return (
            <span key={i} className={`inline-flex items-center justify-center px-1.5 py-0 text-white text-[11px] font-bold border border-black mx-0.5 align-baseline ${isSub ? 'bg-black/80' : 'bg-[#ff4d00]'}`}>
              {ref}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
};

const StrategyBlockRenderer: React.FC<{ block: StrategyBlock }> = ({ block }) => {
  switch (block.type) {
    case 'text': {
      // Detect numbered lists (lines starting with "1.", "2.", etc.)
      if (/^\d+\.\s/.test(block.content.trim())) {
        const items = block.content.trim().split('\n').filter(Boolean);
        return (
          <ol className="mb-4 space-y-2 list-none">
            {items.map((item, i) => {
              const m = item.match(/^(\d+)\.\s+(.*)/);
              return (
                <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-800 font-mono">
                  <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 bg-black text-white font-mono text-xs font-bold">
                    {m ? m[1] : i + 1}
                  </span>
                  <span className="flex-1">{m ? m[2] : item}</span>
                </li>
              );
            })}
          </ol>
        );
      }
      return (
        <p className="text-sm leading-relaxed text-slate-800 font-mono mb-4">
          <StrategyText text={block.content} />
        </p>
      );
    }

    case 'plan':
      return (
        <div className="mb-6 border-2 border-black bg-white" style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}>
          <div className="px-4 py-2 bg-[#e0e0e0] border-b-2 border-black">
            <span className="font-mono text-xs font-bold uppercase">Execution Roadmap</span>
          </div>
          <div className="divide-y divide-black/10">
            {block.items.map((item) => {
              const isSub = /[a-z]$/.test(item.id);
              return (
              <div key={item.id} className={`px-4 py-3 flex items-start gap-3${isSub ? ' pl-12' : ''}`}>
                <span className={`shrink-0 inline-flex items-center justify-center w-8 h-6 font-mono text-xs font-bold border border-black text-white ${isSub ? 'bg-black/80' : 'bg-[#ff4d00]'}`}>
                  {item.id}
                </span>
                <span className="font-mono text-sm text-slate-800 flex-1">{item.text}</span>
                {item.timeline && (
                  <span className="shrink-0 font-mono text-[10px] text-slate-500 uppercase border border-black/20 px-2 py-0.5">
                    {item.timeline}
                  </span>
                )}
              </div>
              );
            })}
          </div>
        </div>
      );

    case 'cost':
      return (
        <div className="mb-6 border-2 border-black bg-[#f8f7f4]" style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}>
          <div className="px-4 py-2 bg-[#e0e0e0] border-b-2 border-black">
            <span className="font-mono text-xs font-bold uppercase">Cost Breakdown (per 96-well build)</span>
          </div>
          <div className="p-4">
            <div className="space-y-1 mb-3">
              {block.rows.map((row, i) => (
                <div key={i} className="flex justify-between font-mono text-sm text-slate-700">
                  <span>{row.replace(/^\$[\d.]+\s+/, '')}</span>
                  <span className="font-bold">{row.match(/^\$[\d.]+/)?.[0]}</span>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-black pt-3">
              <p className="font-mono text-sm font-bold text-black">{block.total}</p>
            </div>
          </div>
        </div>
      );

    case 'tech':
      return (
        <div className="mb-6 border-l-4 border-[#ff4d00] bg-[#fff5f0] p-4">
          <div className="inline-block bg-[#ff4d00] text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase mb-2">
            Unique Technology
          </div>
          <p className="text-sm leading-relaxed text-slate-800 font-mono">
            {block.content}
          </p>
        </div>
      );

    case 'note':
      return (
        <div className="mb-6 border-2 border-black bg-[#f8f7f4] p-4">
          <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase mb-2">
            Note
          </div>
          <p className="text-sm leading-relaxed text-slate-700 font-mono">
            <StrategyText text={block.content} />
          </p>
        </div>
      );
  }
};

const StrategyView: React.FC<{ text: string }> = ({ text }) => {
  const sections = parseStrategy(text);

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 py-8 sm:px-12 sm:py-12 max-w-[800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
            Internal Strategy
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-black mb-4 leading-[0.95] uppercase">
            Genetic Assemblies
          </h1>
          <p className="font-mono text-xs text-slate-500 uppercase mb-8">Strategy Document // Confidential</p>
        </motion.div>

        {sections.map((sec, si) => {
          const isSubSection = /^[0-9]+[a-z]/.test(sec.number);
          const isNumbered = sec.number !== '';

          return (
            <div key={si} className={isSubSection ? 'mb-10 ml-4 sm:ml-8' : 'mb-12'}>
              {isNumbered ? (
                isSubSection ? (
                  <motion.h3
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + si * 0.04 }}
                    className="text-lg font-black text-black mb-4 uppercase flex items-center gap-3"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center px-2 py-0.5 bg-black/80 text-white text-sm font-bold border border-black">
                      {sec.number}
                    </span>
                    {sec.title}
                  </motion.h3>
                ) : (
                  <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + si * 0.04 }}
                    className="text-2xl font-black text-black mb-6 uppercase border-b-4 border-black pb-2 flex items-center gap-3"
                  >
                    <span className="shrink-0 inline-flex items-center justify-center px-2 py-0.5 bg-[#ff4d00] text-white text-base font-bold border border-black">
                      {sec.number}
                    </span>
                    {sec.title}
                  </motion.h2>
                )
              ) : (
                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + si * 0.04 }}
                  className="text-xl font-black text-black mb-6 uppercase"
                >
                  {sec.title}
                </motion.h2>
              )}

              {sec.blocks.map((block, bi) => (
                <StrategyBlockRenderer key={bi} block={block} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Research Synthesis (Left Panel Content)                            */
/* ------------------------------------------------------------------ */

const ResearchContent: React.FC<{ preamble: string; sections: ResearchSection[] }> = ({ preamble, sections }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
          Market Research Synthesis
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-black mb-4 leading-[0.95] uppercase">
          Genetic Assemblies
        </h1>
        <p className="font-mono text-xs text-slate-500 uppercase mb-8">March 2026 // 16 Automated Research Reports</p>
      </motion.div>

      {preamble && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-12 bg-[#f8f7f4] border-2 border-black p-6"
        >
          {preamble.split('\n\n').map((para, i) => (
            <p key={i} className="text-sm leading-relaxed text-slate-700 font-mono mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </motion.div>
      )}

      {sections.map((sec, i) => (
        <div key={sec.number || `exec-${i}`} id={`sec-${sec.number || 'exec'}`} className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + i * 0.04 }}
            className="text-2xl font-black text-black mb-6 uppercase border-b-4 border-black pb-2"
          >
            {sec.number ? `${sec.number}. ` : ''}{sec.title}
          </motion.h2>

          {sec.body.split('\n\n').map((block, j) => {
            if (block.startsWith('The rant says:')) {
              return (
                <blockquote key={j} className="border-l-4 border-[#ff4d00] pl-4 mb-6 italic">
                  <p className="text-sm leading-relaxed text-slate-600 font-mono">{block}</p>
                </blockquote>
              );
            }
            if (block.startsWith('VERDICT:')) {
              return (
                <div key={j} className="bg-[#fff5f0] border-2 border-[#ff4d00] p-4 mb-6">
                  <p className="text-sm leading-relaxed text-slate-800 font-mono font-bold">{block}</p>
                </div>
              );
            }
            if (block.match(/^[A-Z][A-Z\s/()#:]+:/) && block.split('\n').length === 1) {
              return (
                <h3 key={j} className="text-base font-black text-black mb-3 uppercase font-mono">
                  {block}
                </h3>
              );
            }
            if (block.match(/^\s{2,}/m)) {
              return (
                <pre key={j} className="text-xs leading-relaxed text-slate-700 font-mono mb-4 whitespace-pre-wrap overflow-x-auto bg-[#f8f7f4] border border-black/10 p-3">
                  {block}
                </pre>
              );
            }
            return (
              <p key={j} className="text-sm leading-relaxed text-slate-800 font-mono mb-4">
                {block}
              </p>
            );
          })}
        </div>
      ))}
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Reports Panel (Right Panel Content)                                */
/* ------------------------------------------------------------------ */

const ReportsPanel: React.FC<{
  onOpenRant: () => void;
  onOpenReport: (key: string, label: string) => void;
}> = ({ onOpenRant, onOpenReport }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ff4d00] border border-black" />
          <div className="w-3 h-3 bg-black border border-black" />
          <div className="w-3 h-3 bg-[#f2f0e9] border border-black" />
        </div>
        <span className="font-mono text-xs font-bold uppercase">SOURCE://reports</span>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-8">
          <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase mb-3">
            Source Material
          </div>
          <button
            onClick={onOpenRant}
            className="w-full text-left bg-white border-2 border-black p-4 font-mono text-sm hover:bg-[#fff5f0] transition-colors"
            style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[#ff4d00] font-bold">//</span>
              <span className="font-bold uppercase text-xs">Founder Strategy Rant</span>
            </div>
            <p className="text-xs text-slate-500 ml-5">
              Voice memo transcript — cleaned and formatted. The original source material that drove the research.
            </p>
          </button>
        </div>

        <div>
          <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase mb-3">
            Research Reports (16)
          </div>
          <div className="space-y-3">
            {Object.entries(reportsByTopic).map(([topic, reports]) => (
              <div key={topic} className="border-2 border-black bg-white" style={{ boxShadow: '2px 2px 0px 0px #1a1a1a' }}>
                <div className="px-3 py-2 border-b border-black/10 bg-[#f8f7f4]">
                  <span className="font-mono text-xs font-bold uppercase">{topic}</span>
                </div>
                <div className="divide-y divide-black/10">
                  {reports.map((report) => (
                    <button
                      key={report.key}
                      onClick={() => onOpenReport(report.key, report.label)}
                      className="w-full text-left px-3 py-2 hover:bg-[#fff5f0] transition-colors flex items-center gap-2"
                    >
                      <span className={`font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 border ${
                        report.source === 'claude'
                          ? 'border-[#ff4d00] text-[#ff4d00]'
                          : 'border-black text-black'
                      }`}>
                        {report.source === 'claude' ? 'CLD' : 'OAI'}
                      </span>
                      <span className="font-mono text-xs text-slate-700 truncate">{report.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main SecretView                                                    */
/* ------------------------------------------------------------------ */

export const SecretView: React.FC<SecretViewProps> = ({ section }) => {
  const [content, setContent] = useState<DecryptedContent | null>(null);
  const [secretTab, setSecretTab] = useState<SecretTab>('strategy');
  const [showRant, setShowRant] = useState(false);
  const [viewingReport, setViewingReport] = useState<{ key: string; label: string } | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const scrollRef = useRef<HTMLDivElement>(null);

  const parsed = content ? parseResearchSections(content.research) : null;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll to section on mount
  const initialScrollDone = useRef(false);
  useEffect(() => {
    if (!content || initialScrollDone.current || !section) return;
    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView();
        initialScrollDone.current = true;
      }
    });
  }, [section, content]);

  // Section URL sync
  useEffect(() => {
    if (!parsed) return;
    const container = scrollRef.current;
    const scrollTarget = container || document.querySelector('.h-full.overflow-y-auto') as HTMLElement;
    if (!scrollTarget) return;

    const secs = parsed.sections;
    const handleScroll = () => {
      const viewportMid = window.innerHeight / 2;
      let visibleSection: string | null = null;
      for (const sec of secs) {
        const id = `sec-${sec.number || 'exec'}`;
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < viewportMid && rect.bottom > 0) {
            visibleSection = id;
          }
        }
      }
      if (visibleSection) {
        replaceSection(visibleSection === `sec-${secs[0]?.number}` ? null : visibleSection);
      }
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [parsed, isMobile]);

  if (!content) {
    return <PasswordGate onUnlock={setContent} />;
  }

  return (
    <div className="h-full flex flex-col">
      <SecretTabNav active={secretTab} onChange={setSecretTab} />

      {secretTab === 'strategy' && <StrategyView text={content.strategy} />}

      {secretTab === 'market_research' && (
        <div className="flex-1 min-h-0">
          {isMobile ? (
            /* Mobile layout */
            <div className="h-full overflow-y-auto">
              <div className="px-4 py-8 max-w-[750px] mx-auto">
                <ResearchContent preamble={parsed!.preamble} sections={parsed!.sections} />

                <div className="mt-12 border-t-4 border-black pt-8">
                  <button
                    onClick={() => setShowRant(true)}
                    className="w-full text-left bg-white border-2 border-black p-4 font-mono text-sm mb-6"
                    style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[#ff4d00] font-bold">//</span>
                      <span className="font-bold uppercase text-xs">View Founder Strategy Rant</span>
                    </div>
                  </button>

                  <div className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase mb-3">
                    Research Reports (16)
                  </div>
                  <div className="space-y-2">
                    {Object.entries(reportsByTopic).map(([topic, reports]) => (
                      <div key={topic} className="border-2 border-black bg-white">
                        <div className="px-3 py-2 border-b border-black/10 bg-[#f8f7f4]">
                          <span className="font-mono text-xs font-bold uppercase">{topic}</span>
                        </div>
                        {reports.map((report) => (
                          <button
                            key={report.key}
                            onClick={() => setViewingReport({ key: report.key, label: report.label })}
                            className="w-full text-left px-3 py-2 hover:bg-[#fff5f0] transition-colors flex items-center gap-2 border-b border-black/5 last:border-b-0"
                          >
                            <span className={`font-mono text-[10px] font-bold uppercase px-1.5 py-0.5 border shrink-0 ${
                              report.source === 'claude' ? 'border-[#ff4d00] text-[#ff4d00]' : 'border-black text-black'
                            }`}>
                              {report.source === 'claude' ? 'CLD' : 'OAI'}
                            </span>
                            <span className="font-mono text-xs text-slate-700">{report.label}</span>
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Desktop layout */
            <div className="flex h-full p-8 gap-8 max-w-[1800px] mx-auto overflow-hidden">
              <div ref={scrollRef} className="flex-[1.2] bg-[#fdfdfd] border-2 border-black shadow-hard overflow-y-auto p-12">
                <div className="max-w-[700px] mx-auto">
                  <ResearchContent preamble={parsed!.preamble} sections={parsed!.sections} />
                </div>
              </div>

              <div className="w-80 shrink-0 flex flex-col border-2 border-black bg-white shadow-hard">
                <ReportsPanel
                  onOpenRant={() => setShowRant(true)}
                  onOpenReport={(key, label) => setViewingReport({ key, label })}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <AnimatePresence>
        {showRant && <RantModal text={content.rantFixed} onClose={() => setShowRant(false)} />}
        {viewingReport && (
          <ReportModal
            content={content.reports[viewingReport.key] || 'Report not found.'}
            label={viewingReport.label}
            reportKey={viewingReport.key}
            onClose={() => setViewingReport(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
