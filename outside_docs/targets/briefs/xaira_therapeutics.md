# Xaira Therapeutics

**Score: 4/5** · (Tier 2 — Warm) · `antibody` · Stage: series_C_plus · Outreach: moderate · HQ: South San Francisco, United States · Founded: 2023

> AI-driven end-to-end drug discovery platform combining generative protein/antibody design (RFdiffusion/RFantibody), biological data generation, and therapeutic development.

## What they do

Xaira integrates machine learning research, large-scale biological data generation, and therapeutic product development to reimagine drug discovery. The platform leverages foundational AI models from David Baker's Institute for Protein Design (RFdiffusion and RFantibody for protein and antibody design), combined with Illumina functional genomics capabilities and Interline Therapeutics proteomics expertise. Focus is on computational methods, AI-driven predictive models for therapeutic candidates, and end-to-end translational research.

**AI role**: Central; generative AI models (RFdiffusion, RFantibody) for de novo protein and antibody design; foundational models trained on biological datasets; AI-driven drug candidate prediction and optimization. Company explicitly positioned as leveraging recent breakthroughs in generative AI for biology.

## Funding

- **Total raised**: $1.0B
- **Last round**: Series D · $1.0B · 2024-04 · led by ARCH Venture Partners, Foresite Labs (also: F-Prime, NEA, Sequoia Capital, Lux Capital, Lightspeed Venture Partners, Menlo Ventures, Two Sigma Ventures, SV Angel)
- **Post-money valuation**: $4.0B

## Founders & key people

- **David Baker** — Co-founder _(founder)_
  Ph.D. professor of biochemistry and director of the Institute for Protein Design at University of Washington School of Medicine. Developer of RFdiffusion and RFantibody generative models for protein and antibody design. Leading computational biologist with foundational work in de novo protein design. Brings ~20+ years of research in protein engineering and structure prediction.
- **Marc Tessier-Lavigne** — Chief Executive Officer
  Ph.D. in neuroscience (Stanford, 1986). Former Chief Scientific Officer at Genentech; former President of Stanford University. Extensive experience spanning drug discovery, R&D leadership, and academic research. Witnessed multiple waves of technology transformation in pharma and positioned to lead translation of AI into therapeutics. Strong relationships across biopharma and academic communities.
- **Hetu Kamisetty** — Chief Technology Officer _(founder)_
  Ph.D. from Stanford. Previously researcher at Facebook parent Meta and Institute for Protein Design under David Baker. Deep expertise in machine learning and computational biology, particularly protein design and structure prediction. Effective immediately as of company announcement in late 2024.
- **Arvind Rajpal** — Head of Drug Discovery (inferred)
  Ph.D. Ran large molecule drug discovery (antibodies/biologics) at Roche's Genentech. Brings enterprise biopharma development experience and therapeutic translation expertise. Key hire for bridging AI-designed molecules to clinical development.
- **Paulo Fontoura** — Chief Medical Officer (effective early 2025)
  M.D. 16-year tenure at Roche overseeing translational medicine and clinical development in neuroscience, immunology, infectious disease, and rare disease. Track record of breakthrough medicine approvals. Brings clinical development and digital health innovation experience.
- **Bo Wang** — SVP and Head of Biomedical AI
  Appointed April 2025. Limited public background available; title indicates focus on biomedical AI applications and likely ML research leadership.

## Customer fit

- **Bench headcount**: 60 (_medium_) — Xaira has ~170 total employees. Estimate ~35% directly in 'bench' roles (bioinformatics, experimental biology, ML research, protein characterization). This includes computational biologists, wet-lab scientists running validation assays (expression, purification, BLI binding assays), and biomedical AI researchers. Remaining ~110 in ops, clinical development, leadership, business development.
- **Primary modality**: antibody
- **Expression systems**: E. coli (inferred from RFantibody design for antibody scaffolds, nanobodies, scFv formats), Mammalian (CHO/HEK) for full-length IgG antibodies (likely planned for clinical programs), Cell-free systems (possible for rapid prototyping)
- **In-house DNA synthesis**: partial
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 10000+ | RFdiffusion and RFantibody generate de novo protein sequences constantly. Each designed protein/antibody variant requires DNA synthesis and expression validation. With 60 bench scientists and AI-driven design generating 10s-100s of candidates per design cycle, annual orders likely in 10k+ range for short cloned constructs (<2kb VH/VL genes, scaffold domains, nanobodies, enzyme variants). High-throughput variant screening inherent to generative design workflow. |
| E. coli KRX expression | high | 1000-10000 | Nanobodies, scFv antibody fragments, miniproteins, and enzymes designed by platform are natural fits for E. coli expression. Xaira will need rapid turnover expression for validation; KRX or similar strains ideal for soluble protein production from high-construct volume. However, some antibodies will require mammalian expression (full IgG, glycosylation). Likely 60-70% of early-stage constructs suitable for bacterial expression. |
| Cell-free expression | medium | 100-1000 | Cell-free systems useful for rapid prototyping toxic proteins or very tight iteration cycles. Lower probability than E. coli but plausible for specific design challenges. Not core workflow but valuable as secondary option. |
| End-to-end binder workflow | high | 1000-10000 | RFantibody + RFdiffusion generate antibody and binder designs constantly. Xaira will validate binding (KD, kinetics) to targets at scale. BLI throughput (Gator or similar) is likely a bottleneck if internal capacity is limited. End-to-end workflow (DNA → expression → BLI quantification) could compress iteration time and reduce internal overhead. Fits perfectly with Xaira's bench workflow. |

### Key lab contacts

- Hetu Kamisetty — Chief Technology Officer
- Arvind Rajpal — Head of Drug Discovery (inferred title from background)

### Hiring

- **Actively hiring wet-lab roles**:
  - Rapid expansion 2024-2025 evident from headcount growth and leadership appointments (Paulo Fontoura CMO Jan 2025, Bo Wang SVP Biomedical AI Apr 2025)
- Evidence: https://tracxn.com/d/companies/xaira/__PE8-W4eauAodAW56LGlgLehVGwq_hdQp4WZEPaoQ3fY

## Recommended pitch

Xaira's RFdiffusion and RFantibody platform generates de novo antibodies, nanobodies, and scaffolds at unprecedented scale. Our clonal DNA synthesis ($50/assembly, 2kb limit, high throughput) and E. coli KRX expression + purification pair directly with your validation workflow, eliminating vendor friction and cost for the 10k+ constructs/year your bench will iterate. Our end-to-end BLI quantification bridges design-to-binding, compressing iteration cycles. We're built for AI/ML teams at your stage generating many designed binders per cycle. Let's discuss a pilot on your next nanobody or enzyme scaffold panel.

## Why this score

Strong fit across three of four service lines (clonal DNA <2kb, E. coli KRX, end-to-end binder workflow); high estimated order volumes (10k+ DNA constructs/year); primary modality (antibody + nanobody + enzyme) aligns with bacterial expression. Xaira's bench (~60 scientists) doing high-throughput protein design validation is textbook match for clonal synthesis + expression outsourcing. Downside: company is post-Series C (moderate outreach difficulty vs. Seed-Series A targets); likely already in vendor evaluation or locked-in discussions; $1B raise suggests in-house capability development underway. But growth-stage expansion + no disclosed in-house synthesis partnerships suggests opportunity to be early vendor. Recommend outreach to Hetu Kamisetty (CTO) or Arvind Rajpal (discovery head) for pilot engagement.

## Recent signals (24 mo)

- **2024-04** — Emerged from stealth with $1B Series D funding led by ARCH and Foresite Labs; announced leadership team including Marc Tessier-Lavigne (CEO), David Baker (co-founder), Hetu Kamisetty (CTO).
- **2024-12** — Announced Paulo Fontoura as Chief Medical Officer (effective early 2025), 16-year Roche veteran. Bolstered clinical development leadership for pipeline advancement.
- **2025-04** — Appointed Bo Wang as SVP and Head of Biomedical AI, expanding AI research leadership.

## Risks / concerns

- No internal drug candidates disclosed as of April 2024 launch; 'ready to start developing drugs' but timeline to IND/clinical data unknown.
- Heavy reliance on computational models (RFdiffusion, RFantibody) for core value; execution risk on translating AI designs to developable molecules.
- Limited explicit signal of commercial partnerships or licensing deals; business model (internal pipeline vs. licensing platform) not fully clear.
- Competitive pressure from other AI drug design platforms (Recursion, Genesis Therapeutics, Absci, etc.) and academia publishing same methods.
- Data quality and availability constraints in biology (as noted by Foresite Labs CEO) may limit model improvement velocity.
- Marc Tessier-Lavigne previously faced misconduct allegations at Stanford (reportedly exonerated); potential reputational risk to early hiring/partnerships.

## Relevant papers

- [RFdiffusion: Diffusion Models for Protein Structure Prediction and Scaffold Motif Design](https://www.nature.com/articles/s41587-023-01686-w) — Watson et al., bioRxiv / Nature Biotechnology (2022)  
  _Core foundational model used by Xaira for de novo protein design and scaffold generation; developed in David Baker's lab at UW Institute for Protein Design. Published work validates the RFdiffusion approach that Xaira leverages._
- [RFantibody: Diffusion Models for Antibody Design](https://www.biorxiv.org/content/10.1101/2024.04.10.588943v1) — Trigg et al., bioRxiv (2024) (2024)  
  _Generative model for de novo antibody design from David Baker's lab; explicit platform technology highlighted in Xaira launch announcement. Demonstrates computational antibody generation capability central to Xaira's drug discovery engine._

## Sources

- [New AI drug discovery powerhouse Xaira rises with $1B in funding](https://www.fiercebiotech.com/biotech/new-ai-drug-discovery-powerhouse-xaira-rises-1b-funding) _[press]_
- [Xaira Therapeutics - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/xaira-therapeutics) _[crunchbase]_
- [Xaira Therapeutics 2026 Company Profile: Valuation, Funding & Investors](https://pitchbook.com/profiles/company/596025-73) _[other]_
- [How Xaira Therapeutics' $1B funding raise stacks up](https://www.drugdiscoverytrends.com/xaira-therapeutics-billion-dollar-ai-biotech-funding/) _[press]_
- [How Much Did Xaira Raise? Funding & Key Investors](https://www.texau.com/profiles/xaira) _[other]_
- [Xaira, an AI drug discovery startup, launches with a massive $1B, says it's 'ready' to start developing drugs](https://techcrunch.com/2024/04/24/xaira-an-ai-drug-discovery-startup-launches-with-a-massive-1b-says-its-ready-to-start-developing-drugs/) _[press]_
- [Xaira Therapeutics Launches with $1 Billion in Funding and Stellar Team](https://thehealthcaretechnologyreport.com/xaira-therapeutics-launches-with-1-billion-in-funding-and-stellar-team/) _[press]_
- [Xaira - 2026 Company Profile, Team, Funding & Competitors](https://tracxn.com/d/companies/xaira/__PE8-W4eauAodAW56LGlgLehVGwq_hdQp4WZEPaoQ3fY) _[other]_
- [Xaira Therapeutics bolsters leadership team and relocates headquarters to fuel AI-powered drug discovery](https://www.drugdiscoverytrends.com/xaira-therapeutics-bolsters-leadership-team-and-relocates-headquarters-to-fuel-ai-powered-drug-discovery/) _[press]_
- [Gunderson Dettler Advises Xaira Therapeutics From Formation and Through $1B in Committed Funding](https://www.gunder.com/en/news-insights/client-news/ai-biotech-xaira-therapeutics-emerges-from-stealth-with-dollar1b-in-funding) _[press]_

## Confidence & gaps

- **Self-rated confidence**: high
- Xaira's launch, funding, founders, and core platform (RFdiffusion/RFantibody from David Baker lab) are heavily documented in FierceBiotech, TechCrunch, Crunchbase, and company announcements. Funding rounds and valuation well-sourced. Leadership team (Tessier-Lavigne, Kamisetty, Rajpal, Fontoura, Wang) confirmed across multiple press sources and tracked on Tracxn as of Feb 2026. Primary modality (generative antibody/protein design) and wet-lab intensity (data generation + therapeutic development) are explicit in company positioning. Customer-fit analysis is supported by: (1) known reliance on RFdiffusion/RFantibody (which require DNA synthesis + expression + BLI), (2) explicit acquisition of Illumina genomics + Interline proteomics (signaling high experimental validation throughput), (3) bench headcount estimate based on published total headcount and typical pharma R&D allocation. Main gaps are pipeline stage, in-house synthesis exact scope, and commercial partnerships — these do not affect core prospect scoring (which is based on modality, workflows, and growth trajectory).
- **Data gaps**:
  - Internal drug pipeline / therapeutic programs: Xaira stated as 'ready to develop drugs' but no disclosed IND-enabling studies or clinical candidates as of April 2024 launch. Unknown stage of internal programs.
  - Commercial partnerships / licensing deals: No public announcements of pharma partnerships or licensing agreements for platform technology.
  - Exact in-house DNA synthesis capability: Illumina functional genomics acquisition suggests some synthesis/sequencing, but degree of vertical integration unknown.
  - SEC filings: Xaira remains private; no 10-K, 10-Q, or S-1 available. All data from press releases and third-party VC databases.
  - Exact bench-level headcount and department breakdown: Inferred from total ~170 employees; no public org chart.
  - Specific BLI or protein expression equipment: No disclosure of internal assay infrastructure.
  - Explicit DNA synthesis vendor relationships: Not disclosed in available sources.

---
_Source brief: `surface_claude/runs/20260513T212252Z_xaira_therapeutics/brief.json`_
