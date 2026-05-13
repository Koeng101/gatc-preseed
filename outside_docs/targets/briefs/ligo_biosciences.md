# Ligo Biosciences

**Score: 4/5** · (Tier 2 — Warm) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: San Francisco, USA · Founded: 2024

> Deep-learning enzyme design for sustainable chemical manufacturing

## What they do

<cite index="1-1,1-2">Ligo develops generative models to design new enzymes for industry. By learning from nature and extending beyond it, their technology enables more efficient and scalable ways to make the materials and products the world depends on.</cite> <cite index="2-34,2-35">They are building foundational enzyme design models that learn from huge amounts of data to understand the principles of catalysis. The model generates structures capable of catalysing reactions directly from transition state models, meaning they will expand the number of reactions that can feasibly be accelerated using enzymes.</cite>

**AI role**: <cite index="2-1">Ligo uses deep learning to design novel enzymes to make chemical manufacturing cheaper and more sustainable.</cite> <cite index="1-20,1-21,1-22">Their models are trained on billions of protein sequences and structures from diverse datasets. This vast knowledge enables them to design proteins at atomic accuracy. They are working towards true de novo design—generating entirely new proteins engineered for novel functions that do not exist in nature.</cite>

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Generative Enzyme Design Platform | enzyme | Pharmaceutical, agricultural, detergent, fragrance, and chemical manufacturing | research_only | Adaptyv Bio, Basecamp Research | Open-source model in preparation; partnerships announced for data pipeline and protein foundry (2024-03) |
| AlphaFold3 Open-Source Implementation | software | Biomolecular structure prediction for research community | research_only | — | Single-chain prediction capability released; multimer, ligand, nucleic acid support in development (2025-12) |

## Funding

- **Total raised**: $500.0K
- **Last round**: Seed · — · 2024-06 · led by Y Combinator (also: 468 Capital, A.Capital Ventures, Hawktail, Liquid 2 Ventures, Multimodal Ventures)

## Commercial deals

- **Adaptyv Bio** (2024) — upfront —, total potential —. Data pipeline development using Adaptyv's ProteinFlow bioinformatics tool for enzyme design models
- **Basecamp Research** (2024) — upfront —, total potential —. Sequence diversity data collaboration to improve open-source enzyme design model

## Founders & key people

- **Edward Harris** — CEO _(founder)_
  Second-time founder. Studied Computer Science at Princeton before transferring to Oxford Medical School, where he worked across three top synthetic biology labs. Bootstrapped his first startup at 19 in the food markets of Guadalajara, Mexico, and took it to USD 1M in annual revenue.
- **Emily Egerton-Warburton** — Chief Scientific Officer (CSO) _(founder)_
  Top biochemist from Oxford University with extensive wet lab protein engineering experience in biotech startups. Worked on projects ranging from bacterial biofuel production to vaccine design. Deeply experienced in hands-on protein and enzyme engineering with high-throughput screening techniques.
- **Arda Goreci** — Chief Technology Officer (CTO) _(founder)_
  Studied Cell and Systems Biology at Oxford University where he became a Google Cloud Research Innovator for work in computational biology. Specialist in deep learning, scaling laws, geometric deep learning, and biomolecular design. His focus on AI for protein design intensified following the original AlphaFold paper release.

## Customer fit

- **Bench headcount**: 8 (_medium_) — Ligo is a 6-person (confirmed) early-stage startup with 3 founders (CEO + CSO + CTO structure) plus 3 additional employees. Typical organization: ~2 ML/computational researchers, 1 wet lab scientist, 1 support/ops. No vendor partnerships team yet. Estimated bench-level technical staff who would directly engage with DNA synthesis and protein validation workflows: ~3–4 (CSO + wet lab hire + possibly 1–2 machine learning engineers doing wet lab integration).
- **Primary modality**: enzyme
- **Expression systems**: Partner-outsourced (Adaptyv Bio foundry, unspecified expression host), Planned cell-free for rapid prototyping
- **In-house DNA synthesis**: no
- **In-house protein production**: no
- **Known vendors (inferred)**: None publicly disclosed; likely Twist/IDT/GenScript or custom synthesis vendors for large-scale gene libraries

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Enzyme design requires rapid iteration on variant constructs. Each design cycle tests dozens to hundreds of sequence variants. Target: <2 kb single-gene enzymes or enzyme-domain fusions for bacterial expression. Ligo's workflow is iterative: design → synthesize → express → test → refine. At 100+ variants per design cycle and multiple parallel design projects, annual volume easily exceeds 1,000 constructs. Perfect match for clonal assembly at $50/construct cost. |
| E. coli KRX expression | high | 100-1000 | CSO (Emily) has extensive biochemical wet lab background; Ligo explicitly hires for wet lab enzyme/protein engineering roles. Enzymes are typically soluble, bacterially-expressible proteins. KRX is ideal for high-throughput variant screening. Ligo's platform is centered on designing enzymes optimized for industrial synthesis—many of which are bacterial-expressed. Estimated 100–1000 expressions/purifications per year across validation pipeline. |
| Cell-free expression | high | 100-1000 | For rapid prototyping and toxic/unstable enzyme variants, cell-free expression is ideal. Ligo benefits from rapid turnaround without cloning bottlenecks. Used for quick validation before moving to bacterial expression. Estimated 100–300 cell-free reactions per year during peak design cycles. |
| End-to-end binder workflow | low | <100 | Ligo focuses on enzymes (catalytic proteins), not binders (antibodies, nanobodies for target engagement). Enzyme design is orthogonal to binder discovery. No public signal of antibody/nanobody engineering programs. BLI workflow not relevant unless Ligo diversifies into engineered protein-protein interactions (unlikely near-term). |

### Key lab contacts

- Edward Harris — CEO
- Emily Egerton-Warburton — Chief Scientific Officer
- Arda Goreci — Chief Technology Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Junior wet lab roles (1+ years hands-on protein/enzyme engineering)
  - Senior wet lab roles (3+ years protein/enzyme engineering, organic chemistry, high-throughput screening)
  - Junior ML/AI roles (Maths/Physics/CS/Engineering background, deep learning experience)
  - Senior ML/AI roles (3+ years deep learning at PhD or industry level)
- Evidence: https://www.ligo.bio/

## Recommended pitch

Ligo's iterative enzyme design workflow demands high-volume short-construct DNA synthesis combined with rapid protein expression—exactly what we deliver at half the cost of incumbent vendors. Your current partnership with Adaptyv Bio is great for validation; our clonal DNA + E. coli KRX service can accelerate your variant screening cycles upstream, letting you focus resources on enzyme characterization. We're built for teams like yours: low-friction vendor engagement, 48-hour turnaround on short constructs, and integrated expression-purification. Let's explore a pilot on your next enzyme design cycle—100 variants, $5K, 2 weeks.

## Why this score

Strong fit on three service lines (clonal DNA, E. coli expression, cell-free). Primary modality (enzyme) aligns perfectly with bacterial/cell-free expression and short iterative construct design. Estimated 1000+ annual DNA orders + 100–1000 expression runs + 100–300 cell-free batches. Early-stage, well-funded (Y Combinator), actively hiring, and easy to reach. Founders have wet lab credibility (CSO from biotech startups, CEO worked in synbio labs). Only downside: no revenue yet, no public customer pilots, and cannot confirm exact synthesis volumes without deeper conversation. Score reflects high commercial potential but moderate execution confidence at this early stage.

## Recent signals (24 mo)

- **2024-06** — Y Combinator Summer 2024 batch; company founded and publicly launched with $500K seed funding
- **2024-09** — Strategic partnerships announced with Adaptyv Bio and Basecamp Research for enzyme design data pipeline
- **2024-12** — Open-source AlphaFold3 implementation released on GitHub; single-chain prediction capability available
- **2025-01** — Website and active hiring for ML/AI and wet lab roles (junior and senior)
- **2025-03** — Public launch and media coverage; waitlist signup for open-source enzyme design model

## Risks / concerns

- Very early stage (founded 2024; only 6 employees). No revenue evidence to date.
- Unproven commercialization: no announced customer pilots, partnerships with industrial end-users, or revenue deals. Open-source model release still pending.
- Dependency on partners (Adaptyv Bio, Basecamp) for protein production and data validation.
- Competitive landscape crowded: BRAIN, Novozymes, Carbios, and multiple stealth-mode AI protein design startups targeting same chemical/pharma verticals.
- Enzyme design is not guaranteed to be manufacturable or scalable at commercial volumes; regulatory and technical hurdles not yet de-risked.
- Limited external scientific publication track record from team; no visible PubMed or bioRxiv output from founders post-YC launch.

## Sources

- [Ligo Biosciences Home](https://www.ligo.bio/) _[company_site]_
- [Y Combinator: Ligo Biosciences](https://www.ycombinator.com/companies/ligo-biosciences) _[other]_
- [PitchBook: Ligo Biosciences 2026 Company Profile](https://pitchbook.com/profiles/company/664203-88) _[crunchbase]_
- [Tracxn: Ligo Company Profile](https://tracxn.com/d/companies/ligo/__E1-UOD4a8uRus2HJcXsRVSHAVrVY-SMZYQGgmq5cTRY) _[crunchbase]_
- [Crunchbase: Ligo Biosciences](https://www.crunchbase.com/organization/ligo-biosciences) _[crunchbase]_
- [HireTop: Ligo Biosciences Profile](https://hiretop.com/blog2/ligo-biosciences-chemical-industry-generative-enzyme-design/) _[other]_
- [GitHub: Ligo Biosciences AlphaFold3 Implementation](https://github.com/Ligo-Biosciences/AlphaFold3) _[other]_
- [Fondo: Ligo Biosciences Launch](https://www.fondo.com/blog/ligo-biosciences-launches) _[other]_
- [Lab Critics: Ligo Biosciences Profile](https://labcritics.com/revolutionize-the-chemical-manufacturing-industry-with-ai-how-ligo-biosciences-is-solving-the-6-trillion-industry-crisis/) _[other]_
- [Dealroom: Ligo Biosciences](https://app.dealroom.co/companies/ligo_biosciences) _[other]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Company is very early stage (founded June 2024, ~6 months old at time of brief). Strong primary sources: official website, Y Combinator profile, and multiple press mentions. Confirmed founding team, HQ, and basic product positioning. However, limited quantitative data on actual synthesis volumes, customer traction, or partnership scope. No SEC filings, clinical trials, or peer-reviewed publications to cross-validate. Headcount estimate based on cited YC team size (4) and later PitchBook data (6); slight variance suggests rapid hiring. Synthesis demand inferred from platform description and hiring signals rather than confirmed usage data. Customer-fit scoring relies on educated mapping of enzyme design workflow to service lines; actual annual order volumes unconfirmed pending direct conversation.
- **Data gaps**:
  - No public revenue or customer count disclosed.
  - Funding amount for Seed round not disclosed publicly (only $500K total raised cited, but per-round amounts not specified).
  - No announced customer pilots, partnerships with end-user chemical/pharma companies, or commercial revenue deals.
  - No published peer-reviewed papers from Ligo founders post-launch (pre-2024 publications not searchable; focus is on proprietary models).
  - Exact expression system(s) used by Adaptyv Bio partner not specified (bacterial strain, E. coli vs. other hosts).
  - Post-money valuation not disclosed.
  - Specific gene synthesis vendors (if any) currently used not named.

---
_Source brief: `surface_claude/runs/20260513T212252Z_ligo_biosciences/brief.json`_
