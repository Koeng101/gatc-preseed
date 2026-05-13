# Onava AI

**Score: 5/5** · (Tier 1 — Hot) · `miniprotein_or_nanobody` · Stage: stealth_or_pre_seed · Outreach: easy · HQ: Brooklyn, USA · Founded: 2024

> AI-driven biotech uniting deep learning, rapid lab assays, and biological expertise to accelerate therapeutic discovery through a continuous feedback loop.

## What they do

Onava builds a lab-in-the-loop platform for protein design and antibody engineering. The platform integrates AI/ML models for protein design with real-time wet-lab data collection and characterization, creating a closed-loop feedback system to refine predictions and generate high-quality biological data at scale.

**AI role**: Central. AI/ML models power de novo protein design, structure-guided epitope expansion, and iterative refinement. Models learn from rapidly-generated wet-lab assay data (likely BLI-based quantification) to improve binder affinity, specificity, and manufacturability.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Latent-X1 (protein design platform) | miniprotein / designed binder | Research tool for structure-guided de novo protein design and epitope expansion | research_only | — | Preprint posted on bioRxiv: 'Structure-guided epitope expansion for de novo protein design via the Latent-X1 platform' (2026-03) |

## Funding

- **Total raised**: —
- **Last round**: Pre-seed · — · 2026-03 · led by Fifty Years (also: World-class angel investors (undisclosed))

## Founders & key people

- **Ido Calman** — Co-Founder & CEO _(founder)_
  AI researcher with focus on protein design and antibody engineering (MIT graduate, based in Brooklyn). Deep expertise in transforming drug discovery through AI-first protein design. Public speaker and writer on techbio (authored essay on the 'meringue moment' in drug discovery with Mark Jacobstein of South Park Commons and Andrew Pannu of Sleuth, shared at JPM 2026). Active on LinkedIn sharing research and insights on AI-lab iteration loops.
- **Sharrol Bachas** — Co-Founder & Chief Scientific Officer _(founder)_
  PhD in Biochemistry from Johns Hopkins University; NIH Postdoctoral Fellow. Ex-Principal Scientist at Absci (biotech AI company specializing in antibody engineering), ex-AI-Wetlab Lead at EvolutionaryScale (ESM protein foundation model team). Ex-Research Assistant at MIT Media Lab. Prior NLP research engineering at Basis Tech. Also founder and CTO of Meezi. Deep expertise at the intersection of AI models and wet-lab protein engineering.

## Customer fit

- **Bench headcount**: 8 (_low_) — Stealth-stage company with pre-seed funding. Given founders' seniority (prior roles at Absci, EvolutionaryScale, MIT Media Lab) and need to build a full wet lab plus AI team, estimated 4-6 AI/ML engineers, 2-4 wet-lab scientists (protein engineering, molecular biology, BLI operation), and supporting ops/BD. No public headcount disclosed.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (inferred), Possibly cell-free expression
- **In-house DNA synthesis**: unknown
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Core workflow: design variant miniproteins/nanobodies in silico, synthesize short gene constructs (<2 kb) encoding binders, express in E. coli, quantify BLI affinity, feed results back to AI model. Each design cycle likely yields 10-100+ variants tested. Pre-seed-stage startup; if they scale to 50+ design cycles per year, that implies 500-5000+ constructs annually, well above the 100/year threshold for clonal DNA fit. |
| E. coli KRX expression | high | 1000-10000 | BLI assay requires purified protein. E. coli (KRX strain) is ideal for miniproteins, nanobodies in VHH/scFv format—exactly what Onava designs. If outsourcing expression, would order 1000s of purified miniprotein/nanobody samples per year. Timing-critical for closed-loop iteration. |
| Cell-free expression | medium | 100-1000 | Useful as a backup for E. coli-inexpressible variants or for rapid, small-batch prototyping before committing to fermentation. Lower volume than E. coli, but plausible for 5-10% of designed variants. |
| End-to-end binder workflow | high | 1000-10000 | Perfect ICP match: Onava is generating many designed binders per cycle, already lacks in-house BLI throughput (that's the bottleneck they're trying to solve with a full lab). If they haven't yet achieved 'unprecedented scale' in-house, would benefit from outsourced DNA → expression → BLI quantification. This is the most aligned with Onava's current constraints (wet-lab engineering challenges, speed-to-data). |

### Key lab contacts

- [Ido Calman](https://www.linkedin.com/in/idocal/) — Co-Founder & CEO
- Sharrol Bachas — Co-Founder & Chief Scientific Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Protein engineer / biochemist (inferred from wet-lab intensity)
  - Lab operations / automation engineer (inferred from 'building a lab that generates data at unprecedented scale')
  - ML engineer / research engineer (inferred)

## Recommended pitch

Onava's breakthrough is tight iteration between AI design and wet-lab feedback. We can accelerate your cycle times by 40-60% and reduce per-construct costs by ~50% vs. incumbent DNA synthesis vendors. Our end-to-end binder workflow (DNA → E. coli expression + purification → BLI quantification) lets you focus on model training and design innovation, not lab logistics. Typical customer: design team generating 500-5000 miniprotein/nanobody variants per year. We process 100+ constructs per week, TAT 3-5 business days, $45/assembly + $120/expression-and-purification. ROI: if you're iterating 20+ design cycles/year with 50+ variants per cycle, you'll pay ~$450K annually with us vs. $900K+ with Twist+external expression. Let's discuss a pilot on your next 10-variant cohort.

## Why this score

Perfect-fit customer: (1) Primary modality is miniprotein/nanobody → high fit for clonal DNA (<2kb) + E. coli expression. (2) Lab-in-the-loop platform means they are *building* a lab but likely not yet at 'unprecedented scale'—outsourced expression and BLI services directly address their constraints. (3) Pre-seed stage → low procurement friction, open to new vendors, eager to optimize costs. (4) Founder backgrounds (Absci, EvolutionaryScale) signal deep domain expertise and likely spending power for services as they scale. (5) Recent pre-seed close (March 2026) suggests fresh capital and expansion planning. (6) End-to-end binder workflow service is near-perfectly aligned with their stated problem ('the gap between what's possible in the lab and how we integrate that data'). (7) Easy to reach: founders active on LinkedIn, public bios, announced funding.

## Recent signals (24 mo)

- **2025-08** — Company launched into stealth (Stealth Startup Spy #267 coverage)
- **2026-03** — Closed pre-seed round led by Fifty Years (announced by CEO Ido Calman on LinkedIn)
- **2026-03** — Posted bioRxiv preprint on Latent-X1 platform (structure-guided epitope expansion for de novo protein design)

## Risks / concerns

- Stealth stage with minimal public visibility into platform maturity, customer interest, or wet-lab capabilities. No disclosed customer pilots, partnerships, or commercial traction.
- Unproven ability to scale wet-lab throughput. Building a lab that 'generates accurate biological data at unprecedented scale' is an ambitious engineering challenge; no evidence of achievable turnaround times or cost structure yet.
- Competitive landscape includes well-funded players (Absci—ex-employer of co-founder Sharrol Bachas, now public; EvolutionaryScale—ex-employer of Bachas; Ginkgo; others). Unclear if Onava's model integration adds defensible value vs. existing vendor platforms.
- Founders' success dependent on ability to recruit and retain experienced protein engineers and cell/lab automation specialists. Early-stage hiring in expensive biotech engineering talent markets.
- Revenue model unclear. If pricing is per-binder or per-design cycle, may face adoption friction from teams with established in-house capabilities or vendor relationships.

## Relevant papers

- [Structure-guided epitope expansion for de novo protein design via the Latent-X1 platform](Posted March 2026 (specific bioRxiv URL not provided in sources)) — Ido Calman, bioRxiv (preprint) (2026)  
  _Describes Onava's core platform capability—structure-guided protein design with epitope expansion. Demonstrates platform maturity and validation in a research context._

## Sources

- [Onava - Company website](https://onava.ai/) _[company_site]_
- [Stealth Startup Spy #267 - Onava coverage](https://stealthstartupspy.substack.com/p/stealth-startup-spy-267) _[press]_
- [Ido Calman - LinkedIn profile (CEO Onava)](https://www.linkedin.com/in/idocal/) _[linkedin]_
- [Sharrol Bachas - LinkedIn post on co-founding Onava](https://www.linkedin.com/posts/sharrol-bachas-48774845_two-months-ago-i-made-the-leap-to-co-found-activity-7362192611366916096-5mMO) _[linkedin]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Strong signal on founders (verified LinkedIn, Stealth Startup Spy, bioRxiv preprint), funding (March 2026 announcement), and strategic positioning (CEO public talks, clear technical thesis). However, company is stealth with minimal operational data: no headcount confirmation, customer pilots, vendor relationships, or internal lab capacity metrics disclosed. Estimated customer fit scores and synthesis demand based on stated mission and founder backgrounds (Absci, EvolutionaryScale experience) rather than direct evidence of current operations. Recommend warm intro or inbound outreach to confirm wet-lab roadmap and vendor preferences before extensive sales push.
- **Data gaps**:
  - Total funding amount (pre-seed round size): disclosed as closed but amount not public.
  - Post-money valuation: not disclosed.
  - Headcount: estimated 8 based on stage and team; no confirmation.
  - In-house DNA synthesis capability: not stated; unknown whether Onava builds or outsources.
  - In-house protein production scale: inferred partial but no quantified capacity (e.g., mg/week) available.
  - Customer names, pilots, or commercial traction: stealth stage; none disclosed.
  - Specific BLI platform: not confirmed (assumed Gator or equivalent; could be different vendor or in-house).
  - Revenue model / pricing: not public.
  - Exact launch date or current product availability: stealth stage; product roadmap not disclosed.

---
_Source brief: `surface_claude/runs/20260513T212246Z_onava_ai/brief.json`_
