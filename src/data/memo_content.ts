export interface MemoSubsection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
  vizId?: string;
  vizLabel?: string;
}

export interface MemoSection {
  id: string;
  title: string;
  subsections: MemoSubsection[];
}

export const memoSections: MemoSection[] = [
  {
    id: 'summary',
    title: 'Summary',
    subsections: [
      {
        paragraphs: [
          'Using the latest software tools and AI models, you\'ve just designed an awesome new biological drug to treat Alzheimer\'s (or any other industrial/consumer biotech application, perhaps a longevity drug, or a new food ingredient). Now you have to actually test it in real life, because the algorithms sometimes mess up. How do you test your brand new idea?',
          'Right now, this involves working with an opaque chain of companies to produce material to test, and then you have to run it in your own lab. If you don\'t specialize in robotics (and as biologists, you shouldn\'t), you have to both equip this lab, costing ~$50k-$500k, and then you have to run it yourself, which usually takes an incredible amount of manual labor — nearly always requiring several new hires just to operate the lab.',
          'Alternatively, you could hire a contract research organization (CROs), which can do your experiments for you. Yet still — they run the experiments with fallible humans in a lab, and your communication is with other humans to plan and do the experiments. You have to pay for all that communication and specialized labor. And yet, even with these inefficiencies, the market for CROs is approximately $85B and expected to reach $125B by 2030.',
        ],
        vizId: 'current-workflow',
        vizLabel: 'CURRENT WORKFLOW',
      },
      {
        paragraphs: [
          'What if, instead, we replaced all those manual-labor laboratories and humans writing emails with robots and software? Genetic Assemblies is solving the problem of building and operating labs by building a system that allows you to go from biological idea to biological data without ever stepping into a lab or talking to a human. You define the experiment, and with the help of an AI coding system it is translated to robot-friendly language and it is executed in our automated lab.',
          'The future is inevitably headed in this direction: AI systems from companies like OpenAI are able to make theories and plan experiments but unable to run the actual experiments without outsourcing to humans in a lab. We want to enable these systems — and more importantly the humans controlling them — to get actual biological results without resorting to purchasing in-house equipment and manually running experiments.',
          'Describe your experiment. Run it with us. Get back real data to inform your next round of experiments or train your model.',
        ],
        vizId: 'ga-workflow',
        vizLabel: 'GA WORKFLOW',
      },
    ],
  },
  {
    id: 'team',
    title: 'Team',
    subsections: [
      {
        paragraphs: [
          'Genetic Assemblies is solo-founded by Keoni Gandall. Keoni worked at UCI for 4 years in Chang Liu\'s lab in directed evolution and mitochondrial engineering, and then worked for 3 years in Drew Endy\'s lab at Stanford, running the FreeGenes Project. Afterwards, he cofounded Trilobio, a company manufacturing fully-automated lab robots. However, simply making hardware was not his calling, so he founded Genetic Assemblies, with the goal of full automation as a service. At Trilobio, Keoni was in charge of building the software systems for fully automated labs.',
          'Ben Ray has joined as our first founding engineer. Ben led the automation team at Retro Biosciences, a large and successful longevity startup, for 3.5 years before leaving and joining Genetic Assemblies. At Retro, Ben was in charge of building and maintaining the hardware for fully automated robotic systems using used robots and clever engineering.',
          'We plan on hiring the most cracked engineers we can get our hands on. Most likely, this will be a software or hardware engineer. We do not plan on hiring many if any biologists.',
        ],
        vizId: 'team-overview',
        vizLabel: 'TEAM',
      },
    ],
  },
  {
    id: 'first-step',
    title: 'First step',
    subsections: [
      {
        paragraphs: [
          'While we want to automate experiments end-to-end, a segmented chunk of the vision has a clear and profitable value prop that we are executing on today which builds towards our ultimate goal.',
          'Right now, we are building synthetic DNA for customers. DNA encodes biological information that can be converted into biological actions, and so is the perfect place to start for our end-to-end biological foundry because it is, very often, the beginning of an experiment.',
          'Genetic Assemblies\'s core competency is logistics — including operation of machines, production or acquisition of necessary materials, or running experiments to streamline protocols — all backed by software, instead of humans. This is a stark contrast to current competitors who primarily compete with a specific technology, like enzymatic DNA synthesis or a few narrow optimized protocols. This informs how we enter and compete in markets.',
        ],
        vizId: 'dna-pipeline',
        vizLabel: 'DNA ASSEMBLY PIPELINE',
      },
      {
        heading: 'The details',
        paragraphs: [
          'In synthetic DNA assembly, we have a very simple pipeline: we take DNA made from oligo pool providers and we assemble it with known protocols. While conceptually simple, the devil is in the details:',
        ],
        bullets: [
          'How do you design the oligo pool for customer assemblies?',
          'How much enzyme should you use? Which enzyme should you use?',
          'How does DNA transformation work on a robotic deck?',
          'How do you plate the cells without round petri dishes?',
          'How do we validate the outputs?',
          'How do you know which to repeat?',
        ],
      },
      {
        paragraphs: [
          'Rather than scope a new technology, we rigorously optimize each basic step in a way that we can reuse for other experiments. We build a library of these basic protocols that can be recombined in new experiments.',
          'For synthetic DNA assembly, we focused on the small things that nobody else really cares about, like competent cell usage, specialized plasmid barcoding, and operational simplicity for moving plates around. These add up to significant savings: we predict we can synthesize 1kbp of clonal DNA at scale for approximately 1/6 to 1/3 ($10-$20) of the incumbent\'s (Twist Bioscience) current cost-of-goods ($60), which has not significantly changed in approximately 10 years.',
        ],
        vizId: 'cost-comparison',
        vizLabel: 'COST COMPARISON',
      },
    ],
  },
  {
    id: 'current-progress',
    title: 'Current Progress',
    subsections: [
      {
        paragraphs: [
          'We have 3 current customers. We choose these customers because their workflows are generally useful to lots of other people, and can be used as material input for future protocols.',
          'We have additional demand for each category that we are currently unable to serve with our current level of automation.',
        ],
      },
      {
        heading: 'Customer A: Cloned Plasmids — animal testing',
        paragraphs: [
          'We build and validate synthetic DNA that is used to test DNA-based drugs in animals. We charged approximately $100 per construct and have delivered 150 constructs (total revenue: $15,000). Market size: ~$2B, based on Twist\'s IPO documents.',
        ],
      },
      {
        heading: 'Customer B: Cloned Plasmids — AI protein testing',
        paragraphs: [
          'We build and validate synthetic DNA that is used to express AI-designed proteins. We charged approximately $60 per construct and delivered 192 constructs (total revenue: $12,000). Market size: ~$2B.',
        ],
      },
      {
        heading: 'Customer C: Linear DNA — AI protein testing',
        paragraphs: [
          'We provide synthetic DNA that is used to express AI-designed proteins. We charged approximately $10 per construct and delivered 1000 constructs (total revenue: $10,000). These are significantly simpler than Customer A and B\'s constructs. Market size: $10M to low $100M (little data), but this protocol is useful as material input to more valuable processes.',
        ],
        vizId: 'revenue-breakdown',
        vizLabel: 'REVENUE BREAKDOWN',
      },
      {
        heading: 'What we learned',
        paragraphs: [],
        bullets: [
          'Customers value the ability to recursively clone much more than we expected — it is the primary value draw.',
          'AI protein companies are more price-sensitive but timeline-and-failure accepting than traditional biotech customers. Great for a small biotech company like us.',
          'Figuring out sequencing is absolutely essential — it was our primary operational material cost (>80% of spend before switching providers).',
        ],
      },
      {
        heading: 'Unit economics',
        paragraphs: [
          'All services are independently profitable from a material cost perspective. Customer A: brought per construct cost from ~$90 to ~$30, while selling for $100. Customer C: per construct cost of approximately $5, while selling for $10.',
          'Labor isn\'t profitable yet. To create around $10k of revenue, 2 to 4 weeks of human labor is required. Once we have automated systems we get a ~5x-10x decrease in labor costs, with only a ~20% increase in cost due to automation-compatible plastics.',
        ],
        vizId: 'unit-economics',
        vizLabel: 'UNIT ECONOMICS',
      },
    ],
  },
  {
    id: 'dirty-work',
    title: 'The dirty work ahead',
    subsections: [
      {
        paragraphs: [
          'Our most difficult challenges have been technical. The protocols which we run for customers are very labor intensive. While this labor is automatable, we\'ve only been running a partially automated system while we figure out exactly what to build by working with customers. Without full integration of the robotic and software systems we can only serve limited customers, but also learn exactly what we need to build.',
          'So far, sales have not been a problem. There is demand for our services, but we have not been able to serve it due to the labor-intensive nature without our robotic systems in place. For example, we have a prospective customer that wants to buy ~200 genes from us, but we haven\'t had the time to process the order. We foresee this to be largely the case in the future, as our edge is ultra-low-cost robotic labor, and we only move into markets where we know there is demand and that we can hedge our unique advantage.',
          'Our hypothesis is that, like with deploying software, there will be a massive transition away from in-house labs to remote cloud labs. Right now, the market is approximately $50B to $80B for more bespoke CRO services. If we see a transition away from companies managing both the lab and the software/services on top of those labs and towards companies only managing software/services in our lab, we can create and capture billions in value.',
        ],
        vizId: 'market-transition',
        vizLabel: 'MARKET TRANSITION',
      },
    ],
  },
  {
    id: 'raise',
    title: 'Our raise',
    subsections: [
      {
        paragraphs: [
          'We are raising $1.5M to fund capex and operations for 18 months. We hope to hit the following milestones:',
        ],
        bullets: [
          'Public launch of DNA assembly services (delivering ~96 plasmids per week)',
          'Grow from 3 to 20 customers',
          'One fully functioning automated workstation (pipette, thermocycle, incubate — static and shaking, plate read, centrifuge, 4°C storage)',
        ],
      },
      {
        paragraphs: [
          'If you need more details, talk to us.',
        ],
        vizId: 'milestones',
        vizLabel: 'MILESTONE TIMELINE',
      },
    ],
  },
];
