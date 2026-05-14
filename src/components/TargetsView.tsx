import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TargetRow } from '../lib/crypto';
import { Markdown } from './Markdown';

interface TargetsViewProps {
  methodology: string;
  rows: TargetRow[];
  briefs: Record<string, string>;
}

type SortKey =
  | 'score'
  | 'company'
  | 'tier'
  | 'modality'
  | 'stage'
  | 'outreach_difficulty'
  | 'max_estimated_annual_orders'
  | 'total_raised_usd'
  | 'bench_headcount';

const TIER_LABEL: Record<string, string> = {
  tier1_hot: 'T1·HOT',
  tier2_warm: 'T2·WARM',
  tier3_cold: 'T3·COLD',
  tier4_unfit: 'T4·UNFIT',
};

const TIER_COLOR: Record<string, string> = {
  tier1_hot: 'bg-[#ff4d00] text-white',
  tier2_warm: 'bg-[#ffb700] text-black',
  tier3_cold: 'bg-[#3a8de0] text-white',
  tier4_unfit: 'bg-slate-300 text-slate-700',
};

const OUTREACH_COLOR: Record<string, string> = {
  easy: 'bg-emerald-100 text-emerald-900 border-emerald-700',
  moderate: 'bg-amber-100 text-amber-900 border-amber-700',
  hard: 'bg-rose-100 text-rose-900 border-rose-700',
};

const ORDER_RANK: Record<string, number> = {
  'unknown': 0,
  '<100': 1,
  '100-1000': 2,
  '1000-10000': 3,
  '10000+': 4,
};

const slugFromBriefPath = (briefPath: string): string => {
  // e.g. "targets/briefs/archon_biosciences.md" -> "archon_biosciences"
  const m = /([^/]+)\.md$/.exec(briefPath);
  return m ? m[1] : briefPath;
};

const formatMoney = (raw: string): string => {
  if (!raw) return '—';
  const n = Number(raw);
  if (!Number.isFinite(n) || n === 0) return '—';
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n / 1e3).toFixed(0)}k`;
  return `$${n}`;
};

const sortRows = (rows: TargetRow[], key: SortKey, dir: 'asc' | 'desc'): TargetRow[] => {
  const factor = dir === 'asc' ? 1 : -1;
  const cmp = (a: TargetRow, b: TargetRow): number => {
    switch (key) {
      case 'score':
        return (Number(a.score) - Number(b.score)) * factor;
      case 'max_estimated_annual_orders':
        return ((ORDER_RANK[a.max_estimated_annual_orders] ?? 0) - (ORDER_RANK[b.max_estimated_annual_orders] ?? 0)) * factor;
      case 'total_raised_usd':
        return ((Number(a.total_raised_usd) || 0) - (Number(b.total_raised_usd) || 0)) * factor;
      case 'bench_headcount':
        return ((Number(a.bench_headcount) || 0) - (Number(b.bench_headcount) || 0)) * factor;
      default:
        return String(a[key] || '').localeCompare(String(b[key] || '')) * factor;
    }
  };
  return [...rows].sort(cmp);
};

/* ------------------------------------------------------------------ */
/*  Brief modal                                                        */
/* ------------------------------------------------------------------ */

const BriefModal: React.FC<{
  slug: string;
  text: string;
  onClose: () => void;
}> = ({ slug, text, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      className="bg-white border-2 border-black w-full max-w-4xl max-h-[88vh] flex flex-col"
      style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="h-12 border-b-2 border-black bg-[#e0e0e0] flex items-center justify-between px-4 shrink-0">
        <span className="font-mono text-xs font-bold uppercase truncate mr-2">BRIEF://{slug}</span>
        <button
          onClick={onClose}
          className="w-6 h-6 border-2 border-black bg-white font-mono text-xs font-bold flex items-center justify-center hover:bg-[#ff4d00] hover:text-white transition-colors shrink-0"
        >
          X
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-6 sm:p-10">
        <div className="max-w-[720px] mx-auto">
          <Markdown text={text} />
        </div>
      </div>
    </motion.div>
  </motion.div>
);

/* ------------------------------------------------------------------ */
/*  Methodology drawer                                                 */
/* ------------------------------------------------------------------ */

const MethodologyPanel: React.FC<{ text: string }> = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-6 border-2 border-black bg-[#f8f7f4]" style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 border-b-2 border-black bg-[#e0e0e0] hover:bg-[#fff5f0] transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="inline-block bg-black text-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
            Methodology
          </span>
          <span className="font-mono text-xs font-bold uppercase">How prospects were scored</span>
        </div>
        <span className="font-mono text-xs font-bold">{open ? '[ HIDE ]' : '[ SHOW ]'}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 max-w-[760px]">
              <Markdown text={text} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Main view                                                          */
/* ------------------------------------------------------------------ */

export const TargetsView: React.FC<TargetsViewProps> = ({ methodology, rows, briefs }) => {
  const [sortKey, setSortKey] = useState<SortKey>('score');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('desc');
  const [tierFilter, setTierFilter] = useState<string>('all');
  const [openBrief, setOpenBrief] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const f = tierFilter === 'all' ? rows : rows.filter((r) => r.tier === tierFilter);
    return sortRows(f, sortKey, sortDir);
  }, [rows, sortKey, sortDir, tierFilter]);

  const tierCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of rows) counts[r.tier] = (counts[r.tier] || 0) + 1;
    return counts;
  }, [rows]);

  const totalMaxOrders = useMemo(() => {
    // Sum of max-edge of each bucket for filtered rows
    const max: Record<string, number> = { 'unknown': 0, '<100': 100, '100-1000': 1000, '1000-10000': 10000, '10000+': 50000 };
    return filtered.reduce((s, r) => s + (max[r.max_estimated_annual_orders] ?? 0), 0);
  }, [filtered]);

  const onSort = (key: SortKey) => {
    if (sortKey === key) setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    else {
      setSortKey(key);
      setSortDir(key === 'company' || key === 'modality' || key === 'stage' || key === 'outreach_difficulty' || key === 'tier' ? 'asc' : 'desc');
    }
  };

  const SortHeader: React.FC<{ k: SortKey; label: string; className?: string }> = ({ k, label, className }) => (
    <th
      onClick={() => onSort(k)}
      className={`text-left px-2 py-2 font-bold uppercase border-r border-black/20 last:border-r-0 cursor-pointer select-none hover:bg-[#fff5f0] ${className || ''}`}
    >
      <span className="flex items-center gap-1">
        {label}
        {sortKey === k && <span className="text-[#ff4d00]">{sortDir === 'asc' ? '▲' : '▼'}</span>}
      </span>
    </th>
  );

  return (
    <div className="h-full overflow-y-auto">
      <div className="px-4 py-8 sm:px-10 sm:py-12 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="inline-block bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase mb-6">
            Customer Discovery Targets
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-black mb-4 leading-[0.95] uppercase">
            Target Prospects
          </h1>
          <p className="font-mono text-xs text-slate-500 uppercase mb-8">
            {rows.length} qualified prospects · scored 3–5 against our service mix
          </p>
        </motion.div>

        <MethodologyPanel text={methodology} />

        {/* Summary strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          <button
            onClick={() => setTierFilter('all')}
            className={`border-2 border-black px-3 py-2 font-mono text-left ${tierFilter === 'all' ? 'bg-black text-white' : 'bg-white text-black hover:bg-[#fff5f0]'}`}
            style={{ boxShadow: tierFilter === 'all' ? 'none' : '2px 2px 0px 0px #1a1a1a' }}
          >
            <div className="text-[10px] uppercase font-bold opacity-70">All</div>
            <div className="text-2xl font-black">{rows.length}</div>
          </button>
          {(['tier1_hot', 'tier2_warm', 'tier3_cold', 'tier4_unfit'] as const).map((t) => {
            if (!tierCounts[t]) return null;
            const active = tierFilter === t;
            return (
              <button
                key={t}
                onClick={() => setTierFilter(t)}
                className={`border-2 border-black px-3 py-2 font-mono text-left transition-all ${active ? `${TIER_COLOR[t]}` : 'bg-white hover:bg-[#fff5f0]'}`}
                style={{ boxShadow: active ? 'none' : '2px 2px 0px 0px #1a1a1a' }}
              >
                <div className="text-[10px] uppercase font-bold opacity-80">{TIER_LABEL[t]}</div>
                <div className="text-2xl font-black">{tierCounts[t]}</div>
              </button>
            );
          })}
        </div>

        <div className="mb-3 flex flex-wrap items-baseline gap-4 font-mono text-xs text-slate-600">
          <span>
            Showing <span className="font-bold text-black">{filtered.length}</span> of {rows.length}
          </span>
          <span>
            Aggregate ceiling: <span className="font-bold text-black">{totalMaxOrders.toLocaleString()}</span> annual orders (sum of max-of-bucket)
          </span>
          <span className="text-slate-400">Click any company to open full brief</span>
        </div>

        {/* Spreadsheet */}
        <div className="border-2 border-black bg-white overflow-x-auto" style={{ boxShadow: '4px 4px 0px 0px #1a1a1a' }}>
          <table className="w-full font-mono text-xs">
            <thead className="bg-[#e0e0e0] border-b-2 border-black">
              <tr>
                <SortHeader k="score" label="#" className="w-12" />
                <SortHeader k="tier" label="Tier" className="w-24" />
                <SortHeader k="company" label="Company" className="min-w-[180px]" />
                <SortHeader k="modality" label="Modality" />
                <SortHeader k="stage" label="Stage" />
                <SortHeader k="outreach_difficulty" label="Outreach" />
                <SortHeader k="bench_headcount" label="Bench" />
                <SortHeader k="total_raised_usd" label="Raised" />
                <th className="text-left px-2 py-2 font-bold uppercase border-r border-black/20">Service fit</th>
                <SortHeader k="max_estimated_annual_orders" label="Est. orders / yr" />
                <th className="text-left px-2 py-2 font-bold uppercase">Brief</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => {
                const slug = slugFromBriefPath(r.brief_path);
                const hasBrief = Boolean(briefs[slug]);
                return (
                  <tr
                    key={slug}
                    className="border-b border-black/10 last:border-b-0 hover:bg-[#fff5f0] transition-colors"
                  >
                    <td className="px-2 py-2 align-top border-r border-black/10 font-bold text-sm">
                      {r.score}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10">
                      <span className={`inline-block px-1.5 py-0.5 text-[10px] font-bold border border-black ${TIER_COLOR[r.tier] || 'bg-slate-200'}`}>
                        {TIER_LABEL[r.tier] || r.tier}
                      </span>
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10">
                      <button
                        onClick={() => hasBrief && setOpenBrief(slug)}
                        disabled={!hasBrief}
                        className="text-left font-bold text-black hover:text-[#ff4d00] hover:underline disabled:cursor-not-allowed"
                      >
                        {r.company}
                      </button>
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        {[r.hq_city, r.hq_country].filter(Boolean).join(', ') || '—'}
                        {r.founded_year && ` · ${r.founded_year}`}
                      </div>
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 text-slate-700">
                      {r.modality.replace(/_/g, ' ')}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 text-slate-700">
                      {r.stage.replace(/_/g, ' ')}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10">
                      <span className={`inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase border ${OUTREACH_COLOR[r.outreach_difficulty] || 'border-slate-300'}`}>
                        {r.outreach_difficulty}
                      </span>
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 text-slate-700 tabular-nums">
                      {r.bench_headcount || '—'}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 text-slate-700 tabular-nums">
                      {formatMoney(r.total_raised_usd)}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 text-[10px] text-slate-600 leading-snug">
                      {r.service_fit_summary
                        .split(/\s+/)
                        .map((tok, i) => {
                          const m = /^(DNA|Ecoli|CF|E2E)=(\w+)$/.exec(tok);
                          if (!m) return <span key={i}>{tok} </span>;
                          const fit = m[2];
                          const color =
                            fit === 'high' ? 'text-emerald-700 font-bold'
                            : fit === 'medium' ? 'text-amber-700'
                            : 'text-slate-400';
                          return (
                            <span key={i} className="inline-block mr-1.5 whitespace-nowrap">
                              <span className="text-slate-500">{m[1]}=</span>
                              <span className={color}>{fit}</span>
                            </span>
                          );
                        })}
                    </td>
                    <td className="px-2 py-2 align-top border-r border-black/10 tabular-nums font-bold text-black">
                      {r.max_estimated_annual_orders === 'unknown' ? '?' : r.max_estimated_annual_orders}
                    </td>
                    <td className="px-2 py-2 align-top">
                      {hasBrief ? (
                        <button
                          onClick={() => setOpenBrief(slug)}
                          className="text-[10px] font-bold uppercase border border-black px-2 py-0.5 hover:bg-[#ff4d00] hover:text-white transition-colors"
                        >
                          Open
                        </button>
                      ) : (
                        <span className="text-[10px] text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <AnimatePresence>
        {openBrief && briefs[openBrief] && (
          <BriefModal slug={openBrief} text={briefs[openBrief]} onClose={() => setOpenBrief(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};
