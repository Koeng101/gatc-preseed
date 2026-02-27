export interface PitchSlide {
  id: string;
  layout: 'hook' | 'bullets' | 'visualization' | 'steps' | 'insights' | 'strategy' | 'progress' | 'team' | 'ask' | 'placeholder';
  headline: string;
  subheadline?: string;
  bullets?: string[];
  steps?: { number: number; title: string; description: string; code?: string[]; image?: string; table?: { headers: string[]; rows: string[][] } }[];
  strategyPhases?: { number: number; title: string; description: string; code?: string[] }[];
  progressPanels?: { label: string; lines: string[] }[];
  teamMembers?: { name: string; role: string; bio: string }[];
  milestones?: { month: number; title: string; description: string }[];
  footnote?: string;
  vizId?: string;
  vizLabel?: string;
  vizImage?: string;
}

export const pitchSlides: PitchSlide[] = [
  {
    id: 'hook',
    layout: 'hook',
    headline: 'biological idea to biological data.',
    subheadline: 'Genetic Assemblies is building automated labs so you never have to step into one.',
  },
  {
    id: 'problem',
    layout: 'bullets',
    headline: 'The problem',
    subheadline: 'Testing biological ideas takes expensive human labor.',
    bullets: [
      'You designed a new drug with AI — now you need to actually test it in real life.',
      'Building your own lab costs $50k–$500k, plus several new hires just to operate it.',
      'Contract research orgs (CROs) still use fallible humans in labs — you pay for all that communication and labor.',
      'No good way to outsource the labor but keep the IP',
    ],
    vizId: 'manual-labor-problem',
    vizLabel: 'TIME IN LAB',
    vizImage: 'problem.png',
  },
  {
    id: 'solution',
    layout: 'visualization',
    headline: 'Our solution',
    subheadline: 'Replace manual labs and human emails with robots and software.',
    bullets: [
      'Define your experiment. Run it with us. Get back real data.',
      'AI coding system translates experiments to robot-friendly language.',
      'No stepping into a lab. No talking to a human.',
    ],
    vizId: 'solution-diagram',
    vizLabel: 'EXPERIMENT PIPELINE',
    vizImage: 'solution.png',
  },
  {
    id: 'how-it-works',
    layout: 'steps',
    headline: 'How it works',
    steps: [
      {
        number: 1,
        title: 'Define',
        description: 'Describe your experiment — what materials to prepare, what to test, what data you need.',
        code: [
          '# nanobody binding experiment',
          'nb = synthesize(nanobody_seq)',
          'nb_protein = express(nb)',
          'data = measure_binding(nb_protein, antigen)',
        ],
      },
      {
        number: 2,
        title: 'Execute',
        description: 'Your experiment runs in our automated lab. Only pay for machine time you use.',
        image: 'plate0_magsep.gif',
      },
      {
        number: 3,
        title: 'Deliver',
        description: 'Get back real biological data to inform your next round of experiments or train your model.',
        table: {
          headers: ['nanobody', 'Kd (nM)', 'expression'],
          rows: [
            ['Nb-α-HER2', '3.2', '58 mg/L'],
            ['Nb-α-EGFR', '8.7', '41 mg/L'],
            ['Nb-α-PD-L1', '1.9', '63 mg/L'],
            ['Nb-α-VEGF', '12.4', '35 mg/L'],
          ],
        },
      },
    ],
  },
  {
    id: 'strategy',
    layout: 'strategy',
    headline: 'Strategy',
    strategyPhases: [
      {
        number: 1,
        title: 'Profitable services',
        description: 'Offer basic services — DNA synthesis, protein expression, cell line transformation — that generate revenue from day one.',
        code: [
          '# simple synthesis',
          'nb = synthesize(nanobody_seq)',
        ],
      },
      {
        number: 2,
        title: 'Programmatic composition',
        description: 'Let users string services together with code.',
        code: [
          '# synthesis and testing',
          'nb = synthesize(nanobody_seq)',
          'nb_protein = express(nb)',
          'data = measure_binding(nb_protein, antigen)',
        ],
      },
      {
        number: 3,
        title: 'Workstation access',
        description: 'Enable general access to full workstation control API — manual pipetting, measuring, incubation — to run your novel experiment.',
        code: [
          '# full workstation control',
          'ws = connect_workstation()',
          'ws.pipette(nb_protein, plate_1)',
          'reading = ws.measure_binding(plate_1)',
        ],
      },
    ],
  },
  {
    id: 'key-insights',
    layout: 'insights',
    headline: 'Key insights',
    steps: [
      {
        number: 1,
        title: 'AI changes everything',
        description: 'AI scientists are the future, but are bottlenecked by lab experiments. We are building a lab that allows agents — and more importantly, the people controlling the agents — to express their full power.',
      },
      {
        number: 2,
        title: 'Nobody wants to run their own robots',
        description: 'Maintenance, training, reliability, and material input/output are all hard. This takes significant skilled human labor. Why deal with that when you have on-demand access to guaranteed working systems?',
      },
      {
        number: 3,
        title: 'Logistics, logistics, logistics',
        description: 'Cloud biology labs have failed when they don\'t provide easy ways to get started and be useful to the median scientist. No other cloud lab has attempted our route of first providing simple, reliable, and cheap basic services that can be built upon.',
      },
    ],
  },
  {
    id: 'progress',
    layout: 'progress',
    headline: 'Progress',
    progressPanels: [
      {
        label: 'Now',
        lines: ['$22k in 3 months (it\'s hard!)', '1 person fulfilling orders manually', 'Validated demand, learned customer needs'],
      },
      {
        label: 'Next',
        lines: ['5–10x capacity with a single workstation', 'Then scale by adding more workstations', '**We need your help**'],
      },
    ],
  },
  {
    id: 'ask',
    layout: 'ask',
    headline: 'The ask',
    subheadline: 'Raising $1.5M. We have the hardware for our first workstation. We need capital for:',
    bullets: [
      'Materials to test and validate protocols',
      'A second workstation and backup hardware',
      'Time to implement the necessary software (with the help of Claude)',
    ],
    milestones: [
      { month: 3, title: 'Automated workstation', description: 'One fully functioning automated workstation. All services and protocols will be developed using this workstation, with the absolute minimum human intervention.' },
      { month: 6, title: 'Public launch', description: 'Public launch of DNA assembly services (~96 plasmids/week)*.' },
      { month: 12, title: 'Profitability', description: 'We aim for profitability before next raise with our basic services.' },
    ],
    footnote: '* We\'ll continue serving customers before public launch, just more selectively. More workstations will come online as we need them.',
  },
  {
    id: 'team',
    layout: 'team',
    headline: 'The team',
    teamMembers: [
      {
        name: 'Keoni Gandall',
        role: 'Founder',
        bio: '4 years at UCI in directed evolution and mitochondrial engineering. 3 years at Stanford running the FreeGenes Project in Drew Endy\'s lab. Co-founded Trilobio (fully-automated lab robots). Built the software systems for fully automated labs.',
      },
      {
        name: 'Ben Ray',
        role: 'Founding Engineer',
        bio: 'Led the automation team at Retro Biosciences for 3.5 years. Built and maintained hardware for fully automated robotic systems using used robots and clever engineering.',
      },
    ],
  },
];
