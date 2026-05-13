# Ailurus Bio

**Score: 4/5** · (Tier 2 — Warm) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: London, United Kingdom · Founded: 2020

> Biocomputer company using synthetic organelles (TEARS) to simplify protein expression, purification, and high-throughput screening via E. coli cell programming.

## What they do

<cite index="2-2">Ailurus program living systems to simplify, streamline, and automate research workflow.</cite> The company's core platform, <cite index="1-23,1-24">PandaPure, enables single-step purification with synthetic organelles, using 0 resin, 0 column, 0 bead.</cite> <cite index="1-6">PandaPure workflow drastically cuts down active bench time, resulting in ~85% reduction in hands-on operations compared to typical batch protocols.</cite> Services include <cite index="8-1">custom DNA design, optimization, synthesis, cloning, and sequence-confirmed construct delivery for PandaPure workflows</cite>, plus AI-assisted protein engineering and high-throughput screening.

**AI role**: <cite index="4-17">Ailurus has been working at the forefront of developing AI-Bio native workflows since 2017.</cite> <cite index="26-22,26-23">By recognizing the synergy between artificial intelligence and biological programming, by blending cutting-edge AI models with bioprograms, and robotic lab automation, they are creating self-driving labs.</cite> The company emphasizes AI-ready data generation from massively parallel experiments for model training.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| PandaPure Protein System | E. coli expression & purification | High-throughput protein expression and tag-free purification for research, drug discovery, protein engineering, bioproduction | commercial | — | <cite index="3-9,3-10">PandaPure Toolkit Release announced at SynBioBeta 2024; CEO announced Biocomputers discussion on May 7, 2024</cite> (2024-05) |
| PandaPure Construct Service | DNA synthesis & cloning | Custom gene synthesis, codon optimization, cloning of PandaPure expression constructs | commercial | — | Service offerings expanded to support construct design and plasmid delivery (—) |
| Ailurus vec (Ailurus Vector) | High-throughput vector library screening | Screening of 1000s of expression vectors in parallel to optimize protein production or accumulate AI-ready data | research_only | — | <cite index="2-13,2-14">Optimal expression: screen 1000 vectors at once; assaying across vast combinatorial libraries to optimize protein production or accumulate AI-ready data in massive parallel</cite> (—) |
| TEAR-2 Development Kit | Synthetic organelle engineering | Customer kit for engineering phase-separated synthetic organelles and spatial control of metabolic pathways in E. coli | commercial | — | <cite index="27-6,27-7">TEAR-2 development kit released as beta version and available for all customers of Ailurus</cite> (2022-09) |
| Ailurus Protein Service | AI-aided protein engineering and production | Protein design, codon optimization, high-throughput variant screening, expression optimization, purification at scale | commercial | — | <cite index="16-10,16-11">Introduced at SynBioBeta 2023; service for users without AI to design proteins or labs to test 1K variants, screen 1M strains, or produce pilots</cite> (2023-09) |

## Funding

- **Total raised**: —
- **Last round**: Seed · — · 2021-10 · led by — (also: MiraclePlus, 5Y Capital, GeniLink Capital)
- **All rounds**:
  - 2021-10 · Seed · — · lead —
  - 2022-12 · Seed or Follow-on · — · lead —
- **Non-dilutive**: Hello Tomorrow Challenge (investor/recognition)

## Founders & key people

- **Haotian Guo** — Founder & CEO _(founder)_
  <cite index="24-10,24-11,24-12,24-13">PhD thesis: Universal RNA designs of genetic and spatial regulations; on deep learning guided design of anti-CRISPR RNA, and phase-separating synthetic RNA organelle; Instructor for iGEM Paris Bettencourt 2017 and 2018; iGEM Fudan Team Leader on Design principles for RNA synthetic biology; Won iGEM 2013 Overgraduate Section Gold Medal and World Championship</cite>. Educated at Université de Paris. Founded Ailurus to commercialize TEARS (transcriptionally engineered addressable RNA solvent droplets) synthetic organelle technology from Cell 2022 publication. Active speaker at SynBioBeta and other synthetic biology venues; maintains active research engagement.
- **Shan Jiang** — Co-Founder & COO _(founder)_
  Co-founder with background in business development and operations. Education from University of Essex Online. Active on LinkedIn discussing AI-bio integration and biotech commercialization. Limited public technical background information.

## Customer fit

- **Bench headcount**: 3 (_low_) — Ailurus' core products (PandaPure, expression vectors, cloning service) are designed for protein engineering teams. Typical bench size in AI-bio companies at Seed-Series A stage: 2-5 scientists. Assuming lean team with 1-2 protein engineers + 1 computational/ML person managing variant design and expression screening.
- **Primary modality**: enzyme
- **Expression systems**: E. coli BL21(DE3), BL21AI, and other T7-polymerase containing strains, Cell-free (compatible, not primary focus), PandaPure synthetic organelle system (proprietary)
- **In-house DNA synthesis**: partial
- **In-house protein production**: yes
- **Known vendors (inferred)**: Via 'reliable supplier network' for outsourced gene synthesis (specific vendors not disclosed)

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | PandaPure workflow is optimized for high-throughput screening of expression variants. Customers performing combinatorial variant libraries (e.g., 100-1000+ designs/round) will routinely need short expression plasmid constructs. Ailurus advertises ability to 'screen 1000 vectors at once' (Ailurus vec). Each variant = 1 unique construct (~1.5-2.5 kb for typical gene + promoter + RBS). Custom Construct Service explicitly designed for this use case. However, Ailurus outsources synthesis to 'reliable supplier network'—likely Twist, IDT, or similar. If they move synthesis in-house or partner exclusively, competitive advantage increases. |
| E. coli KRX expression | high | 1000-10000 | PandaPure is fundamentally an E. coli expression system. Targets soluble bacterially-expressible proteins (enzymes, small scaffolds, nanobodies in scFv format). ~85% time savings vs traditional lysis/affinity purification. Perfect for teams doing AI protein design + high-throughput expression screening. Not suitable for teams requiring mammalian post-translational modifications (glycosylation, complex disulfide bonds) or membrane proteins. Direct match to clonal DNA fit: if ordering 1000+ vectors/year, expect 500-5000+ expression trials/year. |
| Cell-free expression | low | <100 | Ailurus focuses on E. coli PandaPure. Cell-free systems mentioned as 'available alternative' but not primary product. No cell-free-specific marketing, products, or literature. Teams needing cell-free (toxic proteins, extreme conditions, non-standard codons) will likely source from specialist vendors (Arbor Biosciences, NEB, Takara). Low fit. |
| End-to-end binder workflow | high | 100-1000 | <cite index="1-2,1-4">Ailurus target teams designing proteins with AI who want to test them at low cost and complexity; help non-biologists successfully learn and use PandaPure to obtain tag-free, purified proteins within weeks</cite>. AI-driven mini-binder (nanobody, scFv, miniprotein) teams generating 10-100 designed binders per cycle are exact customer persona. PandaPure enables rapid, low-cost expression screening. Construct service + expression optimization + BLI quantification would form natural bundled offering. Not currently advertised as integrated BLI service, but 'end-to-end binder workflow' aligns with Ailurus vec + PandaPure + Ailurus Protein Service stack. Medium-to-high annual order volume (50-500 binder constructs/year) likely from this segment. |

### Key lab contacts

- [Haotian Guo](https://www.linkedin.com/in/haotian-guo-6b825062/) — Founder & CEO
- [Shan Jiang](https://www.linkedin.com/in/shan-jiang-7296a3195/) — Co-Founder & COO

## Recommended pitch

Position us as the cost-efficient, scalable DNA synthesis partner for Ailurus' rapid-iteration, high-throughput protein-design loops. Offer: (1) **Bulk pricing on short constructs (<2 kb)**—undercut their current outsourced vendor (Twist/IDT/GenScript assumed) by 20-30% on 1000+ orders/year. (2) **Dedicated integration with PandaPure workflow**—pre-optimized cloning protocols, plasmid templates, quality metrics for their expression vectors. (3) **Flexible capacity for surge demands**—Ailurus' customers doing large variant libraries will spike synthesis demand; offer surge capacity without long-lead times. (4) **Data feedback loop**—share anonymized successful designs/failures to help Ailurus refine Ailurus vec and Protein Service. Emphasis: *Enable Ailurus to pass cost savings to customers, making PandaPure even more competitive vs traditional purification and increasing their sales velocity.*

## Why this score

Ailurus is a strong strategic fit on multiple service lines: (1) **Clonal DNA fit: high**—AI protein-design teams ordering high-volume short constructs (~1000-10000/year) for variant screening are ideal customers. (2) **E. coli KRX expression: high**—PandaPure is fundamentally an E. coli expression product; direct alignment. (3) **End-to-end binder workflow: high**—AI-biology teams designing nanobodies/mini-binders match persona exactly. (4) **Cell-free: low**—not a primary focus. **Stage & reach: easy**—Seed/Series A company with accessible founder CEO, high community visibility, no procurement friction. **Downside:** Company already operates construct synthesis service (outsourced but branded) and in-house expression platform. While they outsource synthesis, they are not a high-volume production house; partnership upside is primarily (a) cost reduction on synthesis (move vendor), (b) tighter integration of DNA→expression→characterization workflow. Score of 4 reflects strong product-market overlap + accessibility but moderate deal size (Ailurus likely 5-20M total addressable service budget annually if they scale well).

## Recent signals (24 mo)

- **2024-05** — PandaPure Toolkit Release announced; CEO presented keynote 'Biocomputers: Transforming Our Work with Smarter Biology' at SynBioBeta 2024 Main Stage.
- **2024-08** — PandaPure Grant and iGEM Challenge launched for 2024 iGEM teams; results to be incorporated as co-authored publication.
- **2025-02** — CEO Haotian Guo published 'Biotech Commercialization: Challenges and Opportunities' fireside chat discussing time-scale mismatches in synthetic biology funding and business model challenges.
- **2025-01** — Ailurus published 'DeSci - A New Model for Life Science Innovation?' piece on company blog, signaling thought leadership in alternative biotech funding mechanisms.

## Risks / concerns

- Early-stage product (PandaPure launched ~2024): limited long-term customer validation data; unknown retention rates and customer lifetime value.
- Highly specialized niche (E. coli protein expression via synthetic organelles): addressable market may be smaller than broader biotech vendors; requires customer adoption of novel TEARS-based workflow.
- Conflicting founding date (2020 vs 2022) and HQ location (China vs UK) across authoritative sources raises uncertainty about legal/regulatory structure and growth narrative.
- Limited disclosed funding amounts and post-money valuations; opaque pathway to Series A or later rounds.
- Dependence on Haotian Guo as visible founder/CEO and core technical authority; potential key-person risk.
- Competition from established vendors (Twist, IDT, GenScript DNA synthesis; Thermo Fisher expression kits) with vastly larger customer bases and procurement entrenchment.
- Nascent market for synthetic organelle technology; regulatory pathway for TEAR-based products in clinical/cGMP contexts unclear.

## Relevant papers

- [Spatial engineering of E. coli with addressable phase-separated RNAs](https://doi.org/10.1016/j.cell.2022.09.016) — Haotian Guo, Cell (2022)  
  _Foundational TEARS technology paper co-authored by Ailurus CEO Guo. Demonstrates synthetic membraneless organelles in E. coli via phase-separating RNA, underpins PandaPure purification approach._
- Anti-CRISPR RNAs: designing universal riboregulators with deep learning of Csy4-mediated RNA processing — Guo et al., Research publication (2021)  
  _Earlier work by Guo on deep learning-guided RNA design for genetic regulation; demonstrates AI-biology integration approach central to Ailurus mission._

## Sources

- [Ailurus Bio: Accelerate sciences with programming biology](https://www.ailurus.bio/) _[company_site]_
- [PandaPure™ - Next-Gen Purification by Synthetic Organelles](https://www.ailurus.bio/pandapure) _[company_site]_
- [About Ailurus - Programming Biology, Changing Reality](https://www.ailurus.bio/about) _[company_site]_
- [Design & Construct | Ailurus Bio - Custom DNA for PandaPure](https://www.ailurus.bio/services) _[company_site]_
- [Ailurus Opens Toolkit Access of PandaPure](https://www.ailurus.bio/post/pandapure-toolkit-release) _[company_site]_
- [synthetic_organelles_2022](https://www.ailurus.bio/news/synthetic-organelles-2022) _[company_site]_
- [Ailurus Biotechnology 2026 Company Profile: Valuation, Funding & Investors](https://pitchbook.com/profiles/company/483240-07) _[crunchbase]_
- [Ailurus - 2025 Company Profile, Team, Funding, Competitors & Financials](https://tracxn.com/d/companies/ailurus/__sWFT2_B1mCCUrb7EB-Ux1ed6RfRLWeqyuraF8fA6rFE) _[crunchbase]_
- [Ailurus Biotechnology - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/ailurus-biotechnology) _[crunchbase]_
- [Ailurus Biotechnology - Products, Competitors, Financials, Employees, Headquarters Locations](https://www.cbinsights.com/company/ailurus-biotechnology) _[crunchbase]_
- [Haotian Guo - Founder & CEO - Ailurus Biotechnology | LinkedIn](https://www.linkedin.com/in/haotian-guo-6b825062/) _[linkedin]_
- [Shan Jiang - Ailurus Bio | LinkedIn](https://www.linkedin.com/in/shan-jiang-7296a3195/) _[linkedin]_
- [Spatial engineering of E. coli with addressable phase-separated RNAs](https://doi.org/10.1016/j.cell.2022.09.016) _[pubmed]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Primary sources (company website, LinkedIn, founder profiles) provide clear product/mission/team data. Funding information sourced from Crunchbase, PitchBook, CB Insights (secondary aggregators) with some conflicting details (founding year 2020 vs 2022). No SEC filings, press releases with specific dollar amounts, or audited financials available, limiting precision on funding. Recent signals (2024-2025 blog posts, SynBioBeta presence, iGEM sponsorships) confirm ongoing operations and customer acquisition. Key paper (Guo et al. Cell 2022) validates core TEARS technology. Headcount range is wide (11-50), and no recent hiring signals found, limiting assessment of momentum. Overall assessment: company is real, product is differentiated and market-validated at research scale, founders are credible and visible, but stage is early (Seed/Series A post-money likely <$5-10M based on visible investor composition).
- **Data gaps**:
  - Total funding raised (USD): unavailable—only round dates and investor names disclosed by secondary sources; no round sizes found.
  - Post-money valuation: unavailable.
  - Annual revenue or ARR: unavailable; only speculative IT spend ($1.1M projected 2024) from Crunchbase/Aberdeen.
  - Exact headcount: range given as '11-50 as of Jul 2024'—cannot pinpoint exact count.
  - Commercial partnership details: no announced major customers, co-development deals, or revenue-sharing agreements found.
  - Cell-free expression capability: mentioned as available but no published protocols, product offerings, or partner data.
  - In-house synthesis vendor details: Ailurus states 'reliable supplier network' for gene synthesis but does not disclose primary vendors (Twist/IDT/GenScript assumed but unconfirmed).
  - Hiring/headcount growth trends: Tracxn provides range but no granular time series.
  - Regulatory/IP status: number of patents disclosed as '2 registered' (via IPqwery) but patent numbers/titles unavailable.
  - Production scale capacity: PandaPure tested 'from microliters to liters in bench-scale bioreactors' but no cGMP or industrial-scale production facility information found.

---
_Source brief: `surface_claude/runs/20260513T211153Z_ailurus_bio/brief.json`_
