import React from 'react';

/* ------------------------------------------------------------------ */
/*  Lean markdown renderer for the brutalist secret briefs.            */
/*  Supports: H1–H4, paragraphs, bold/italic/code/links, blockquotes,  */
/*  unordered + ordered lists, GitHub-style tables, horizontal rules.  */
/* ------------------------------------------------------------------ */

const escapeKey = (s: string) => s.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  // Tokenize: links, bold, italic, inline code
  const pattern = /(\[[^\]]+\]\([^)]+\))|(\*\*[^*]+\*\*)|(`[^`]+`)|(_[^_]+_)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = pattern.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('[')) {
      const lm = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(tok)!;
      nodes.push(
        <a
          key={`l${i++}`}
          href={lm[2]}
          target="_blank"
          rel="noreferrer"
          className="text-[#ff4d00] underline hover:bg-[#ff4d00] hover:text-white"
        >
          {lm[1]}
        </a>,
      );
    } else if (tok.startsWith('**')) {
      nodes.push(
        <strong key={`b${i++}`} className="font-bold text-black">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith('`')) {
      nodes.push(
        <code key={`c${i++}`} className="bg-[#f0eee6] border border-black/20 px-1 text-[0.85em]">
          {tok.slice(1, -1)}
        </code>,
      );
    } else if (tok.startsWith('_')) {
      nodes.push(
        <em key={`i${i++}`} className="italic">
          {tok.slice(1, -1)}
        </em>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function parseTable(lines: string[]): React.ReactNode | null {
  if (lines.length < 2) return null;
  const splitRow = (line: string) =>
    line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim());
  const header = splitRow(lines[0]);
  const align = splitRow(lines[1]);
  if (!align.every((c) => /^:?-+:?$/.test(c))) return null;
  const body = lines.slice(2).map(splitRow);
  return (
    <div className="overflow-x-auto mb-4 border-2 border-black">
      <table className="w-full font-mono text-xs">
        <thead className="bg-[#e0e0e0] border-b-2 border-black">
          <tr>
            {header.map((h, i) => (
              <th key={i} className="text-left px-3 py-2 font-bold uppercase border-r border-black/20 last:border-r-0">
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-black/10 last:border-b-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-3 py-2 align-top border-r border-black/10 last:border-r-0 text-slate-700">
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface MarkdownProps {
  text: string;
  className?: string;
}

export const Markdown: React.FC<MarkdownProps> = ({ text, className }) => {
  const lines = text.split('\n');
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let blockIdx = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Blank line
    if (!line.trim()) {
      i++;
      continue;
    }

    // Horizontal rule
    if (/^---+\s*$/.test(line)) {
      blocks.push(<hr key={`hr-${blockIdx++}`} className="border-t-2 border-black my-6" />);
      i++;
      continue;
    }

    // Fenced code block
    if (/^```/.test(line)) {
      i++;
      const buf: string[] = [];
      while (i < lines.length && !/^```/.test(lines[i])) {
        buf.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++; // closing fence
      blocks.push(
        <pre key={`code-${blockIdx++}`} className="text-xs leading-relaxed text-slate-800 font-mono mb-4 whitespace-pre-wrap overflow-x-auto bg-[#f0eee6] border-2 border-black p-3">
          {buf.join('\n')}
        </pre>,
      );
      continue;
    }

    // Headings
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      const level = h[1].length;
      const content = h[2].trim();
      const id = `h-${escapeKey(content)}`;
      const inner = renderInline(content);
      if (level === 1) blocks.push(<h1 key={`h-${blockIdx++}`} id={id} className="text-2xl sm:text-3xl font-black uppercase mt-8 mb-4 border-b-4 border-black pb-2">{inner}</h1>);
      else if (level === 2) blocks.push(<h2 key={`h-${blockIdx++}`} id={id} className="text-xl font-black uppercase mt-8 mb-3 border-b-2 border-black pb-1">{inner}</h2>);
      else if (level === 3) blocks.push(<h3 key={`h-${blockIdx++}`} id={id} className="text-base font-black uppercase mt-6 mb-2">{inner}</h3>);
      else blocks.push(<h4 key={`h-${blockIdx++}`} id={id} className="text-sm font-bold uppercase mt-4 mb-2 text-slate-700">{inner}</h4>);
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith('> ')) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        buf.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote key={`bq-${blockIdx++}`} className="border-l-4 border-[#ff4d00] pl-4 mb-4 italic text-slate-700 text-sm font-mono">
          {renderInline(buf.join(' '))}
        </blockquote>,
      );
      continue;
    }

    // Table (line with pipes followed by separator)
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+:?(\s*\|\s*:?-+:?)*\s*\|?\s*$/.test(lines[i + 1])) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].includes('|') && lines[i].trim()) {
        buf.push(lines[i]);
        i++;
      }
      const tableNode = parseTable(buf);
      if (tableNode) {
        blocks.push(<React.Fragment key={`tbl-${blockIdx++}`}>{tableNode}</React.Fragment>);
        continue;
      }
      // fall through if not a valid table
    }

    // Unordered list
    if (/^[-*]\s+/.test(line)) {
      const items: { text: string; subItems: string[] }[] = [];
      while (i < lines.length) {
        const cur = lines[i];
        if (/^[-*]\s+/.test(cur)) {
          items.push({ text: cur.replace(/^[-*]\s+/, ''), subItems: [] });
          i++;
        } else if (/^\s{2,}[-*]\s+/.test(cur) && items.length) {
          items[items.length - 1].subItems.push(cur.replace(/^\s+[-*]\s+/, ''));
          i++;
        } else if (/^\s{2,}\S/.test(cur) && items.length) {
          // continuation line
          items[items.length - 1].text += ' ' + cur.trim();
          i++;
        } else {
          break;
        }
      }
      blocks.push(
        <ul key={`ul-${blockIdx++}`} className="mb-4 space-y-1 list-none font-mono text-sm text-slate-700">
          {items.map((it, k) => (
            <li key={k} className="flex gap-2">
              <span className="text-[#ff4d00] font-bold shrink-0">›</span>
              <div className="flex-1">
                <div>{renderInline(it.text)}</div>
                {it.subItems.length > 0 && (
                  <ul className="mt-1 ml-4 space-y-1">
                    {it.subItems.map((s, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-slate-400 shrink-0">·</span>
                        <span>{renderInline(s)}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={`ol-${blockIdx++}`} className="mb-4 space-y-2 list-none font-mono text-sm text-slate-700">
          {items.map((it, k) => (
            <li key={k} className="flex gap-3">
              <span className="shrink-0 inline-flex items-center justify-center w-6 h-6 bg-black text-white font-mono text-xs font-bold">
                {k + 1}
              </span>
              <span className="flex-1">{renderInline(it)}</span>
            </li>
          ))}
        </ol>,
      );
      continue;
    }

    // Paragraph — gather until blank line
    const buf: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,4}\s|>\s|---+\s*$|[-*]\s+|\d+\.\s+)/.test(lines[i]) &&
      !(lines[i].includes('|') && i + 1 < lines.length && /^\s*\|?\s*:?-+:?/.test(lines[i + 1]))
    ) {
      buf.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${blockIdx++}`} className="text-sm leading-relaxed text-slate-800 font-mono mb-4">
        {renderInline(buf.join(' '))}
      </p>,
    );
  }

  return <div className={className}>{blocks}</div>;
};
