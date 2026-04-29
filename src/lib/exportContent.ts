import { pitchSlides, type PitchSlide } from '../data/pitch_content';
import { memoSections, type MemoSection } from '../data/memo_content';
import { essay01, essay02, essay03, type Essay } from '../data/essay_content';

const formatBullets = (items: string[]) => items.map((b) => `- ${b}`).join('\n');

const formatSlide = (slide: PitchSlide, index: number): string => {
  const out: string[] = [];
  out.push(`### Slide ${index + 1} — ${slide.headline}`);
  if (slide.subheadline) out.push(slide.subheadline);
  if (slide.bullets?.length) out.push(formatBullets(slide.bullets));

  if (slide.steps?.length) {
    for (const step of slide.steps) {
      out.push(`**${step.number}. ${step.title}** — ${step.description}`);
      if (step.code?.length) out.push('```\n' + step.code.join('\n') + '\n```');
      if (step.table) {
        const { headers, rows } = step.table;
        out.push(`| ${headers.join(' | ')} |`);
        out.push(`| ${headers.map(() => '---').join(' | ')} |`);
        for (const row of rows) out.push(`| ${row.join(' | ')} |`);
      }
    }
  }

  if (slide.strategyPhases?.length) {
    for (const p of slide.strategyPhases) {
      out.push(`**${p.number}. ${p.title}** — ${p.description}`);
      if (p.code?.length) out.push('```\n' + p.code.join('\n') + '\n```');
    }
  }

  if (slide.progressPanels?.length) {
    for (const panel of slide.progressPanels) {
      out.push(`**${panel.label}**`);
      out.push(formatBullets(panel.lines));
    }
  }

  if (slide.teamMembers?.length) {
    for (const m of slide.teamMembers) {
      out.push(`**${m.name} — ${m.role}**`);
      out.push(m.bio);
    }
  }

  if (slide.economicsData) {
    const e = slide.economicsData;
    const annualRevenue = e.unitsPerDay * e.pricePerUnit * e.daysPerWeek * e.weeksPerYear;
    const annualCost = e.unitsPerDay * e.costPerUnit * e.daysPerWeek * e.weeksPerYear;
    out.push(
      `Per workstation: ${e.unitsPerDay} units/day at $${e.pricePerUnit} (cost $${e.costPerUnit}), ` +
        `${e.daysPerWeek} days/wk × ${e.weeksPerYear} wks/yr → ` +
        `~$${annualRevenue.toLocaleString()} revenue / ~$${annualCost.toLocaleString()} COGS. ` +
        `Monthly burn ~$${e.monthlyBurn.toLocaleString()}.`,
    );
  }

  if (slide.footnote) out.push(`_${slide.footnote}_`);
  return out.join('\n\n');
};

const formatMemoSection = (sec: MemoSection): string => {
  const out: string[] = [`### ${sec.title}`];
  for (const sub of sec.subsections) {
    if (sub.heading) out.push(`**${sub.heading}**`);
    for (const p of sub.paragraphs) out.push(p);
    if (sub.bullets?.length) out.push(formatBullets(sub.bullets));
  }
  return out.join('\n\n');
};

const formatEssay = (essay: Essay): string => {
  const out: string[] = [`## ${essay.title}`, `_${essay.subtitle}_`];
  for (const sec of essay.sections) {
    if (sec.heading) out.push(`### ${sec.heading}`);
    for (const p of sec.paragraphs) out.push(p);
    if (sec.bullets?.length) out.push(formatBullets(sec.bullets));
  }
  return out.join('\n\n');
};

export function buildFullContentMarkdown(): string {
  const parts: string[] = [];

  parts.push('# Genetic Assemblies — Full Investor Brief');
  parts.push(
    'This document contains every public section of preseed.geneticassemblies.com, flattened for easy paste into an LLM. Sections: Pitch Deck, Memo, Essay 01, Essay 02, Essay 03.',
  );

  parts.push('---');
  parts.push('## Pitch Deck');
  pitchSlides.forEach((slide, i) => parts.push(formatSlide(slide, i)));

  parts.push('---');
  parts.push('## Memo');
  memoSections.forEach((sec) => parts.push(formatMemoSection(sec)));

  parts.push('---');
  parts.push(formatEssay(essay01));

  parts.push('---');
  parts.push(formatEssay(essay02));

  parts.push('---');
  parts.push(formatEssay(essay03));

  return parts.join('\n\n');
}
