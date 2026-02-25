export interface PitchSlide {
  id: string;
  layout: 'hook' | 'bullets' | 'visualization' | 'steps' | 'insights' | 'team' | 'placeholder';
  headline: string;
  subheadline?: string;
  bullets?: string[];
  steps?: { number: number; title: string; description: string }[];
  teamMembers?: { name: string; role: string; bio: string }[];
  vizId?: string;
  vizLabel?: string;
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
      },
      {
        number: 2,
        title: 'Execute',
        description: 'Your experiment runs in our automated lab. Only pay for machine time you use.',
      },
      {
        number: 3,
        title: 'Deliver',
        description: 'Get back real biological data to inform your next round of experiments or train your model.',
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
        title: 'Nobody wants to run their own robots',
        description: 'Maintenance, training, programming, and material input/output are all hard. Why deal with that when you have on-demand access to guaranteed working systems?',
      },
      {
        number: 2,
        title: 'Logistics, logistics, logistics',
        description: 'Cloud biology labs have failed when they don\'t provide easy ways to get started and be useful to the median scientist.',
      },
      {
        number: 3,
        title: 'AI changed everything',
        description: 'AI scientists are bottlenecked by experiments in the lab. As they get better, demand will only go up for remote labs.',
      },
    ],
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
  {
    id: 'ask',
    layout: 'placeholder',
    headline: 'The ask',
    subheadline: 'Raising $1.5M to fund capex and operations for 18 months.',
    bullets: [
      'Public launch of DNA assembly services (~96 plasmids/week)',
      'Grow from 3 to 20 customers',
      'One fully functioning automated workstation (pipette, thermocycle, incubate, plate read, centrifuge, 4°C storage)',
    ],
    vizId: 'milestones',
    vizLabel: 'MILESTONE TIMELINE',
  },
];
