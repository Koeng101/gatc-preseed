export interface EssaySection {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Essay {
  id: string;
  title: string;
  subtitle: string;
  sections: EssaySection[];
}

export const essay01: Essay = {
  id: 'monopolization',
  title: 'Monopolization of Centralized Experimentation',
  subtitle: 'Genetic Assemblies Theory',
  sections: [
    {
      paragraphs: [
        'Technological monopolies share some combination of the following characteristics:',
      ],
      bullets: [
        'Network Effects',
        'Economies of Scale',
        'Proprietary Technology',
        'Branding',
      ],
    },
    {
      paragraphs: [
        'We believe that running biological laboratories is particularly prone to monopolization for several reasons. We lay out our argument for this, and conclude with how this impacts the direction of our company.',
      ],
    },
    {
      heading: '1. Biology has product and customer network effects',
      paragraphs: [
        'Product network effects are when a particular product becomes more valuable as a function of how many people use it, with social networks being a perfect example. Customer network effects are when the value of a product can increase the more customers use it, with search engines being a perfect example.',
        'Biological experimentation has both, so long as the protocols being run are open. Science is based on replicating published papers: through people simply replicating and tweaking experiments, we can know what operations need optimization (customer network effects). But more importantly, so long as people publish with experiments run in our lab, the lab itself becomes more valuable. Any scientist who wants to expand on previous research will read publications in their field. If everyone is running their experiments with Genetic Assemblies, this makes them feel secure in running it with us. In fact, if they didn\'t run their experiment with our labs, it would be less scientifically rigorous: they are changing a variable (whose lab) that everyone else has agreed on, and therefore they have to personally investigate the downstream effects of that. Better to just stay safe and run it with us, where it is easier and cheaper.',
        'All other cloud labs ignore this dynamic. All have targeted pharma companies and larger industrial clients who do not publish their experimental protocols. For this reason, we plan to begin with smaller companies and academics who will share, in niche markets, before expanding.',
      ],
    },
    {
      heading: '2. Biology has economies of scale',
      paragraphs: [
        'Our most common reaction called "GoldenGate Assembly" (for assembling DNA) costs about $1 in enzymes from New England Biolabs. If you produce it yourself, for about $100 to $200 you can produce 10,000,000 reactions worth. Academic labs actually sometimes do do this, but normally companies do not because it takes effort and troubleshooting, which if they just need 1 great enzyme doesn\'t help the bottom line.',
        'Companies that can take advantage of economies of scale make massive amounts of profit, like Illumina or NEB. Often, however, the problem is distribution of those advancements.',
        'Biology is rife with examples of economies of scale — from transformation efficiency, to enzyme production, to sequencing, but often they\'re too disparate and innovating doesn\'t impact much profit usually. Distribution of innovations, like new cloning strains, is too difficult and people don\'t want to put the effort into changing. Genetic Assemblies has the unique advantage of centralization and trust, meaning we can immediately distribute innovations. All the protocols are running in our own lab anyway, and are controlled by software, not by trained humans. Our focus is on the pedagogy of the machine rather than the lab technician, which scales much better. This distribution allows us to effectively create and capture the value of any economy of scale we discover.',
      ],
    },
    {
      heading: '3. Proprietary Technology',
      paragraphs: [
        'We\'re not a biology company; our users are. Much like TSMC doesn\'t design chips, we do not compete with our customers. Labs like Ginkgo, and to some degree Twist, can and do compete with their own customers with proprietary technology. This is short term thinking.',
        'Our proprietary technology is in the ways we put together and run experiments, and in the logistics of our operations. Weakening of proprietary biotechnology, through open source enzymes or open source strains, is effectively commoditizing our complement, and driving more demand towards our services.',
      ],
    },
    {
      heading: '4. Branding',
      paragraphs: [
        'We want Genetic Assemblies to be known for biological innovation and doing awesome biology experiments. Genuine and authentic joy for synthetic biology is core to who we are! Sometimes, we run fun experiments to just do things — maybe a genetically engineered logo, or unique Genetic Assemblies-only GMO foods for events. I founded this company because I believe in open source biotechnology for all, and the route of a centralized corporation running experiments is the only structure I could think of that aligns my motivations with a ruthless profit-motive, and hence, growth of my goals (tracked by revenue).',
        'We care about awesome biological innovation and making experimentation cheaper for everyone. We don\'t want just anti-vaxxers, we want rogue-vaxxers, making their own vaccines! We want high schoolers and family farmers and patients to be able to make their own awesome biological creations. This fundamental power, the power of what we are, belongs not to just a handful of corporations, but to all. We care about the ones who can\'t afford to build their own lab, we want to free the ones chained to a bench doing experiments by hand. If you are to die from a disease, who is to say you should not fight against the dying of the light with the power of your own mind and the graceful actuation of our machines? Let\'s build biotechnology that is more imaginative, more accessible, and more free; let\'s build beautiful biotechnology, driven not only by the invisible hand but by the dreams of human beings.',
        'This kind of rhetoric is unique in the corporatized and "safe" world of biology. Rather than explain it, we chose to demonstrate above. It is polarizing yet truthful in our founding motivations, and may be an effective tool in hiring and selling the vision of our corporation.',
        'We know that other kinds of branding will be important in effectively communicating our company\'s values, and we do not shy away from expecting this to be an important part of the company, rather than an afterthought.',
      ],
    },
    {
      heading: '5. Conclusion',
      paragraphs: [
        'To review:',
      ],
      bullets: [
        'Publication of biological experiments makes for natural network effects.',
        'There are many economies of scale in biology: centralization solves the problem of distributing solutions.',
        'We are focused on where we develop our proprietary technology.',
        'We have unique, opinionated, and polarizing beliefs and a strong belief in the power of storytelling, rather than simply advertising, for branding.',
      ],
    },
    {
      paragraphs: [
        'The basic fundamentals of biological experimentation make it primed for monopoly, and so far has only been free of monopoly due to human communication costs. This is changing right now, and we believe now will be the only time to capture a lasting monopolistic position in this multi-billion dollar market.',
      ],
    },
  ],
};

export const essay02: Essay = {
  id: 'general-automation',
  title: 'General Automation will beat Specific Automation',
  subtitle: 'Or: CPUs over Circuits',
  sections: [
    {
      paragraphs: [
        'Plasmidsaurus, a company doing nanopore sequencing, is the most laudable example of a startup in the biotechnology space which has taken off. Their business model worked because they replaced the existing Sanger sequencing infrastructure of dropboxes with superior technology, and then got great at logistics. Sequencing gets back to most customers within a couple hours of pickup using a lab with many Opentrons liquid handlers and optimized workflows, and then the data is delivered to customers in a convenient format.',
        'This is a successful deep-tech company, bootstrapped, and profitable. But in our mind, also limited, in that they\'ve gotten very efficient at one specific niche (sequencing services), without building the capacities to automate other experiments — which is very difficult to integrate to build later. This limits their ability to become a multi-billion dollar company, as the moat to competition is relatively low — as shown by companies like Angstrom Innovation undercutting Plasmidsaurus by 3x in their core business — and the fact that adaptation slows when you need humans to run your lab.',
      ],
    },
    {
      paragraphs: [
        'Genetic Assemblies is fundamentally a services business. People pay us to do something. What is our strategy to become a multi-billion dollar business?',
        'The theory of Genetic Assemblies is that:',
      ],
      bullets: [
        'Aggregation of services in one lab lowers the human labor cost of any given service.',
        'A general lab system improves the velocity of developing or improving any specific service.',
      ],
    },
    {
      heading: 'Aggregation lowers labor cost',
      paragraphs: [
        'For idea #1, we can take an extremely simple example, loading SYBR Green. SYBR Green is used to quantify DNA. Quantification of DNA is needed in a bunch of different systems: both for DNA sequencing and for cell-free protein expression. While there are economies of scale when purchasing, the simple fact that you only need humans to load the automated system once with a certain chemical doubles the efficiency compared to having to load the system twice in two different labs doing two different services. You can then aggregate all inputs to biological experiments, and see how this dramatically lowers the relative human-labor time per experiment.',
        'As you add more services, this advantage compounds. As you increase the number of services running out of a single automated system, you decrease the relative human labor needed to run any one of those individual services. At a certain point, running many customer experiments will essentially require zero human labor, other than the marginal cost of adding more of a given reagent.',
      ],
    },
    {
      heading: 'General systems improve velocity',
      paragraphs: [
        'For idea #2, the simple idea is that if a lab system is developed for general purpose use, it will naturally be optimized for research and development. For a counter-example, Plasmidsaurus uses a bunch of Opentrons OT2 robots, which makes for killer economics since they\'re low cost robots. But they are very difficult to add more automation onto, which is fine: their economics work well with techs+robots, and they just need to add more labs and better logistics.',
        'For us, Opentrons OT2 are insufficient. We\'re starting with DNA cloning, where there are incubation steps and centrifugation steps (the labor intensive nature is why we have a market edge right now). Our process requires methods that can\'t just run on a single robot, and so we must develop capability to handle that. As a convenient consequence (and in part why we started where we did), our system can handle autonomously loading, running, and unloading material without human intervention. This allows us to run the lab as software, rather than as an esoteric and idiosyncratic protocol to be run by humans.',
        'We\'re betting that this software-based rather than protocol-based development of services means we can iterate at a much faster pace than companies which work in a singular niche, akin to how CPUs took over the world compared to circuits. Circuits may be more efficient at certain tasks, but CPUs could be controlled by software rather than hardware, and allowed far more rapid iteration speed. In the end, tasks being defined by software changed everything. We are building a CPU, not a circuit, for lab work.',
      ],
    },
  ],
};

export const essay03: Essay = {
  id: 'bitter-lesson',
  title: 'More Data is Needed',
  subtitle: 'The Bitter Lesson of Synthetic Biology',
  sections: [
    {
      paragraphs: [
        'Let\'s say we have centralized facilities capable of running any experiment you can dream of, remotely, without your involvement. Let\'s use it for something awesome!',
        'The hardest problem shifts from the physical implementation of an experiment (ie, the actual by-hand process of experimentation) to the theoretical design of the experiment. For 40 years, we\'ve thought about how to move biology to an engineering discipline, and unfortunately, we have thus far largely failed.',
      ],
    },
    {
      heading: 'Modularity failed',
      paragraphs: [
        'The theory behind the original synthetic biology manifestos was that we could build biological systems up from their component genetic parts, and recombine them in a modular fashion. We, largely, could not — or at least not in a way we could predict what they\'d actually do. The biggest and most bitter lesson that can be learned from the last 20 years of synthetic biology is that full context creates far more useful knowledge than individually controlled or simulated cases.',
        'Biological systems are all interconnected — every change can affect everything else — and so the idea of modularity just doesn\'t really work. We can\'t really predict what biological systems will do from first principles, and this is alarmingly unsatisfactory for many biologists.',
      ],
    },
    {
      heading: 'Biology mirrors AI',
      paragraphs: [
        'In fields like software engineering the entire stack is designed so you can have abstractions and interfacing, where each abstraction or interface is sufficiently small such that a human can understand them. These stacks are then built on top of each other. This is the same for most fields of human endeavor from mechanical engineering to VLSI to civil engineering. But biology is different: no abstraction really exists between components, and everything interacts with each other.',
        'There is one field where "everything interacting with everything" is actually embraced: AI. AI is one field where full context (with LLM systems) seems to lead to more intelligent decision making. AI systems can be remarkably simple (fewer than 5000 lines of code for implementing LLMs), yet leverage a massive amount of data and computation to get good results. Biological systems, likewise, can operate over remarkably simple ingredients: bacteria can be grown with a basic chemical slurry and an incubator — yet with billions of dollars and decades of research we still don\'t understand them fully. It could be that full context, with all those seemingly irrelevant details, could be required for simulating sufficiently complex systems like intelligence or biology.',
        'In this way, AI systems naturally mirror biological systems. We roughly understand how they work from first principles (linear algebra or molecules, respectively), but once you put them together we really don\'t know how the emergent properties of intelligence or life arise. This black box is frustrating! But we might be able to leverage this property: we may be able to effectively simulate biological systems — not through first principle understanding of the components, but through massive data collection with the full context of our modifications.',
      ],
    },
    {
      heading: 'Data is the way forward',
      paragraphs: [
        'While this is in the early stages of development, we already have evidence or preliminary evidence in two places where this works fairly well: protein folding and transcriptomic simulation. But we have yet to collect sufficient data to characterize interesting properties in other areas. The unfortunate chore, the most bitter lesson of synthetic biology, is that the true way to fully understand a cell is not to rigorously study each component. Rather, it is to design systems that collect an absurd quantity of good quality data about both the entire cell and each component interacting with each other, that can be compared and trained upon.',
        'Once efficient centralized capacities are established and robust execution of protocols as code is realized, we will unlock this fundamentally different way to look at and engineer biology — and it\'ll actually work. The most valuable biologists will be like GPU programmers, creating AI algorithms, except that they are programming remote biology labs, creating data to be swallowed by AI. Rather than biological insight and intuition, insight and intuition into the data creation and usage process will become much, much more valuable.',
      ],
    },
    {
      heading: 'Where Genetic Assemblies fits',
      paragraphs: [
        'Fortunately, just as AI training requires GPU farms, biological AI will require large labs running experiments. As these models improve in their capabilities, there will be a race to generate as much biological data as possible to create new proprietary models. And we will be there, providing the raw experimental capacity that these companies will need.',
      ],
    },
  ],
};
