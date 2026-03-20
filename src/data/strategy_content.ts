export interface StrategySection {
  number: string;   // "1", "2", "2a", "3", "3a", or "" for overview/conclusion
  title: string;
  blocks: StrategyBlock[];
}

export type StrategyBlock =
  | { type: 'text'; content: string }
  | { type: 'plan'; items: { id: string; text: string; timeline?: string }[] }
  | { type: 'cost'; rows: string[]; total: string }
  | { type: 'tech'; content: string }
  | { type: 'note'; content: string };

/**
 * Parse the strategy document (delimited by ======== headers)
 * into structured sections with typed blocks.
 */
export function parseStrategy(raw: string): StrategySection[] {
  const sections: StrategySection[] = [];

  // Match ========\nTITLE\n======== header blocks and split around them
  const headerRe = /^========\n(.+)\n========$/gm;
  const headers: { title: string; start: number; end: number }[] = [];
  let m: RegExpExecArray | null;
  while ((m = headerRe.exec(raw)) !== null) {
    headers.push({ title: m[1].trim(), start: m.index, end: m.index + m[0].length });
  }

  for (let i = 0; i < headers.length; i++) {
    const bodyStart = headers[i].end;
    const bodyEnd = i + 1 < headers.length ? headers[i + 1].start : raw.length;
    const body = raw.slice(bodyStart, bodyEnd).trim();
    const titleLine = headers[i].title;

    // Extract section number from title like "1. <1200bp Clonal DNA"
    const numMatch = titleLine.match(/^(\d+[a-z]?)\.\s+(.+)/);
    const number = numMatch ? numMatch[1] : '';
    const title = numMatch ? numMatch[2] : titleLine;

    const blocks = parseBlocks(body);
    sections.push({ number, title, blocks });
  }

  return sections;
}

function parseBlocks(body: string): StrategyBlock[] {
  const blocks: StrategyBlock[] = [];
  const paragraphs = body.split('\n\n');

  let i = 0;
  while (i < paragraphs.length) {
    const para = paragraphs[i].trim();
    if (!para) { i++; continue; }

    // PLAN: items — collect consecutive PLAN: lines
    if (para.startsWith('PLAN:')) {
      const items: { id: string; text: string; timeline?: string }[] = [];
      const planLines = para.split('\n');
      for (const line of planLines) {
        const m = line.match(/^PLAN:(\d+[a-z]?)\.\s+(.+?)(?:\s*\/\/\s*(.+))?$/);
        if (m) {
          items.push({ id: m[1], text: m[2], timeline: m[3] });
        }
      }
      blocks.push({ type: 'plan', items });
      i++;
      continue;
    }

    // COST: items — collect consecutive COST:/COST_TOTAL: lines
    if (para.startsWith('COST:')) {
      const rows: string[] = [];
      let total = '';
      for (const line of para.split('\n')) {
        if (line.startsWith('COST_TOTAL:')) {
          total = line.slice('COST_TOTAL:'.length);
        } else if (line.startsWith('COST:')) {
          rows.push(line.slice('COST:'.length));
        }
      }
      blocks.push({ type: 'cost', rows, total });
      i++;
      continue;
    }

    // TECH: callout
    if (para.startsWith('TECH:')) {
      blocks.push({ type: 'tech', content: para.slice('TECH:'.length).trim() });
      i++;
      continue;
    }

    // NOTE: callout
    if (para.startsWith('NOTE:')) {
      blocks.push({ type: 'note', content: para.slice('NOTE:'.length).trim() });
      i++;
      continue;
    }

    // Regular text
    blocks.push({ type: 'text', content: para });
    i++;
  }

  return blocks;
}
