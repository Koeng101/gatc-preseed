export interface ResearchSection {
  number: string;
  title: string;
  body: string;
}

export interface ResearchReport {
  key: string;
  label: string;
  source: 'claude' | 'openai';
  topic: string;
}

export function parseResearchSections(raw: string): { preamble: string; sections: ResearchSection[] } {
  const lines = raw.split('\n');
  const sections: ResearchSection[] = [];
  let preamble = '';
  let currentTitle = '';
  let currentNumber = '';
  let currentLines: string[] = [];
  let inPreamble = true;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('========') && i + 1 < lines.length) {
      const nextLine = lines[i + 1];
      const match = nextLine.match(/^(\d+)\.\s+(.+)/);
      if (match) {
        if (currentTitle) {
          sections.push({ number: currentNumber, title: currentTitle, body: currentLines.join('\n').trim() });
        } else if (inPreamble) {
          preamble = currentLines.join('\n').trim();
          inPreamble = false;
        }
        currentNumber = match[1];
        currentTitle = match[2];
        currentLines = [];
        i += 2;
        if (i < lines.length && lines[i].startsWith('========')) i++;
        continue;
      }
      if (nextLine.includes('EXECUTIVE SUMMARY')) {
        if (currentTitle) {
          sections.push({ number: currentNumber, title: currentTitle, body: currentLines.join('\n').trim() });
        }
        currentNumber = '';
        currentTitle = 'EXECUTIVE SUMMARY: STRATEGY VALIDATION';
        currentLines = [];
        i += 2;
        if (i < lines.length && lines[i].startsWith('========')) i++;
        continue;
      }
    }
    currentLines.push(line);
  }
  if (currentTitle) {
    const bodyText = currentLines.join('\n').trim();
    const footerIdx = bodyText.indexOf('========\nGenerated from');
    sections.push({
      number: currentNumber,
      title: currentTitle,
      body: footerIdx !== -1 ? bodyText.slice(0, footerIdx).trim() : bodyText,
    });
  }

  return { preamble, sections };
}

export const researchReports: ResearchReport[] = [
  { key: '01_dna_synthesis_market_claude', label: 'DNA Synthesis Market (Overall)', source: 'claude', topic: 'DNA Synthesis Market' },
  { key: '01_dna_synthesis_market_openai', label: 'DNA Synthesis Market (Overall)', source: 'openai', topic: 'DNA Synthesis Market' },
  { key: '02_clonal_dna_market_claude', label: 'Clonal DNA Market (up to 1,200 bp)', source: 'claude', topic: 'Clonal DNA Market' },
  { key: '02_clonal_dna_market_openai', label: 'Clonal DNA Market (up to 1,200 bp)', source: 'openai', topic: 'Clonal DNA Market' },
  { key: '03_dna_builders_market_claude', label: 'DNA Builders/Makers Market (DIY Assembly)', source: 'claude', topic: 'DNA Builders Market' },
  { key: '03_dna_builders_market_openai', label: 'DNA Builders/Makers Market (DIY Assembly)', source: 'openai', topic: 'DNA Builders Market' },
  { key: '04_genetic_parts_market_claude', label: 'Genetic Parts Market (iGEM, Addgene, Kits)', source: 'claude', topic: 'Genetic Parts Market' },
  { key: '04_genetic_parts_market_openai', label: 'Genetic Parts Market (iGEM, Addgene, Kits)', source: 'openai', topic: 'Genetic Parts Market' },
  { key: '05_ecoli_krx_expression_claude', label: 'E. coli KRX Expression Applications', source: 'claude', topic: 'E. coli KRX Expression' },
  { key: '05_ecoli_krx_expression_openai', label: 'E. coli KRX Expression Applications', source: 'openai', topic: 'E. coli KRX Expression' },
  { key: '06_genscript_model_claude', label: 'GenScript Service Model + Antibody Suite', source: 'claude', topic: 'GenScript Model' },
  { key: '06_genscript_model_openai', label: 'GenScript Service Model + Antibody Suite', source: 'openai', topic: 'GenScript Model' },
  { key: '07_competitor_landscape_claude', label: 'Competitor Landscape (Ansa, BuiltDNA, Clutch, Elegen, Twist)', source: 'claude', topic: 'Competitor Landscape' },
  { key: '07_competitor_landscape_openai', label: 'Competitor Landscape (Ansa, BuiltDNA, Clutch, Elegen, Twist)', source: 'openai', topic: 'Competitor Landscape' },
  { key: '08_agilent_oligo_pools_claude', label: 'Agilent Oligo Pool Pricing and Quality', source: 'claude', topic: 'Agilent Oligo Pools' },
  { key: '08_agilent_oligo_pools_openai', label: 'Agilent Oligo Pool Pricing and Quality', source: 'openai', topic: 'Agilent Oligo Pools' },
];

export const reportsByTopic = researchReports.reduce<Record<string, ResearchReport[]>>((acc, report) => {
  if (!acc[report.topic]) acc[report.topic] = [];
  acc[report.topic].push(report);
  return acc;
}, {});
