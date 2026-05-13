# ProteinQure

**Score: 3/5** · (Tier 3 — Cold) · `miniprotein_or_nanobody` · Stage: series_B · Outreach: moderate · HQ: Toronto, Canada · Founded: 2017

> AI-powered computational platform for peptide-drug conjugate and exotic peptide therapeutic design

## What they do

ProteinQure designs novel peptide therapeutics using proprietary computational platform (ProteinStudio™) that combines quantum computing, molecular dynamics simulations, machine learning, and structural biology to discover peptides using natural and non-natural amino acids for therapeutic applications.

**AI role**: Central; ML/reinforcement learning integrated with physics-based molecular simulations to explore peptide chemical space (~10^65 potential sequences) for lead generation and optimization; includes large language models in PQ Librarian tool for peptide library selection.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| PQ203 | peptide-drug conjugate (sortilin-targeting) | Triple-negative breast cancer (TNBC) and advanced solid tumors | Phase 1 | — | First patient dosed in Phase 1 clinical trial (2025-05) |
| Neurology program | peptide therapeutic | Neurological indication (undisclosed) | discovery | — | Series A funding to advance program (2025-05) |
| Nephrology program | peptide therapeutic | Renal/kidney indication (undisclosed) | discovery | — | Series A funding to advance program (2025-05) |
| PQ Librarian | Software tool / platform feature | Peptide library selection and virtual screening for drug discovery | research_only | — | Public release of AI-driven library selection tool (2024-12) |

## Funding

- **Total raised**: $16.0M
- **Last round**: Series A · $11.0M · 2025-05 · led by Heron Rock Fund (Tom Williams) (also: Golden Ventures, Kensington Capital Partners)
- **All rounds**:
  - 2019-08 · Seed · $4.0M · lead Felicis Ventures
  - 2025-05 · Series A · $11.0M · lead Heron Rock Fund
- **Non-dilutive**: CAD $700,000 federal funding for quantum computing integration (date unknown); Federal Economic Development Agency for Southern Ontario; Ontario Genomics; Canadian Medical Isotope Ecosystem

## Founders & key people

- **Lucas Siow** — CEO and Co-founder _(founder)_
  MBA from Rotman (Toronto), MA in Economics from Penn, applied math background from UC Berkeley. Worked as data scientist for major banks and management consultant. Led Series A financing in May 2025.
- **Tomas Brans** — Chief Technology Officer and Co-founder _(founder)_
  Double MSc in computer science with focus on machine learning, cybersecurity, and quantum computing. Prior software engineering lead at Red Hat. Deep technical expertise in quantum-classical algorithm integration.
- **Christopher Ing** — Chief R&D Officer and Co-founder _(founder)_
  PhD in Biochemistry from University of Toronto, MSc in Physics from University of Waterloo. Computational biophysicist with expertise in molecular simulations across 1 to 1 million atom scales. Active speaker at Gordon Research Conferences on peptide drug conjugates.
- **David Cescon** — Board/Advisor - Medical Oncology
  Medical Oncologist and Clinician Scientist at UHN Princess Margaret Cancer Centre. 30+ years experience leading clinical therapeutic development. Provides clinical validation and strategy for PQ203 program.
- **Rafael Gomez-Bombarelli** — Board/Advisor - AI/ML
  Assistant Professor at MIT. Expert in machine learning, computational chemistry, and materials science. Research integrates ML with chemical discovery and design.
- **Stuart Pollard** — Board/Advisor - BD/Strategy
  25+ years in biotech BD and strategy. Prior roles at Alnylam and Maxygen across multiple modalities. Corporate VC experience at Sanofi Sunrise; advised top biotech VC funds.
- **Ron Levy** — Board/Advisor - Business Development
  Life sciences investor with emphasis on biotech and molecular diagnostics. Served on boards of 18 companies; founding CEO of Protometrix Inc. and CGI Pharmaceuticals Inc. (acquired by Gilead).
- **Dave Garman** — Senior Hire - Clinical Operations (2025)
  PhD from Stanford University. 25+ years human therapeutic development experience at NoNO Inc. and other executives roles. Expertise in GMP manufacturing, preclinical development, and clinical operations.
- **Shannon** — Senior Scientist - Experimental Biology
  Bachelor's in Nanotechnology Engineering, Master's in Pharmaceutical Sciences. Graduate research on targeted mRNA nanomedicines for cancer immunotherapy. Drives internal drug discovery experimental workflows.
- **Sungwon** — Senior Scientist - Experimental Biology
  Drives experimental prosecution for internal drug discovery programs. Collaborates with Shannon on workflow execution for peptide validation.

## Customer fit

- **Bench headcount**: 12 (_medium_) — ProteinQure headcount ~34; of which ~3 are executive/admin, ~10 are computational/ML/software engineers, ~3 are wet lab scientists (Shannon, Sungwon, plus support staff). Bench scientists conducting peptide validation and assay development likely ~8–12 FTE. Dave Garman hire (clinical ops) suggests scaling toward manufacturing/GMP rather than expanding research bench.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: Cell-free protein synthesis (for rapid prototyping, toxic peptides), Recombinant peptide synthesis (custom synthesis CROs, non-canonical amino acids)
- **In-house DNA synthesis**: no
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | low | <100 | ProteinQure designs computationally generated peptides, many incorporating non-canonical amino acids. These require custom chemical synthesis from CROs (e.g., GL Biochem, LifeTein, Apeptico) rather than DNA cloning and E. coli expression. DNA synthesis need would only arise if: (a) they generate plasmids for transient mammalian expression of validation constructs, or (b) they assemble display libraries (phage/yeast) from designed peptide gene sequences. No public signals of high-throughput DNA construct ordering. Estimated <100 constructs/year if any. |
| E. coli KRX expression | low | <100 | Exotic peptides with non-natural amino acids cannot be expressed in E. coli KRX or standard bacterial hosts. Company uses cell-free expression for rapid prototyping when needed, but primary modality is chemical peptide synthesis (CRO outsourced). Bacterial expression not part of their standard workflow. Fit = low. |
| Cell-free expression | medium | 100-1000 | ProteinQure mentions cell-free as option for toxic proteins and rapid prototyping. For designed peptides incorporating natural amino acids only (subset of pipeline), cell-free could accelerate validation before chemical synthesis. However, company does not emphasize cell-free as core capability. Estimated 100–500 reactions/year for validation of natural peptide sequences or rapid testing. |
| End-to-end binder workflow | high | 1000-10000 | ProteinQure's ProteinStudio™ platform generates designed binders (peptides and mini-binders targeting diverse receptors). Internal wet lab validates via binding assays and cellular assays. Company benefits from outsourced DNA synthesis → expression → BLI quantification workflow to accelerate validation of computationally generated variants without building full in-house characterization infrastructure. For each lead target, could generate 100s–1000s of designed variants per cycle; BLI throughput is key bottleneck. Score high due to: (1) AI/ML protein design core competency, (2) generating many binder candidates per cycle, (3) limited in-house BLI infrastructure (no mention), (4) pre-Series B stage (now Series A post-May 2025, which means relatively open to new vendors). |

### Key lab contacts

- [Christopher Ing](https://ca.linkedin.com/in/christopher-ing) — Chief R&D Officer and Co-founder
- Shannon — Senior Scientist - Experimental Biology
- Sungwon — Senior Scientist - Experimental Biology

### Hiring

- **Actively hiring wet-lab roles**:
  - Careers page invites interdisciplinary scientists/engineers
  - Dave Garman hired May 2025 for clinical ops/manufacturing
  - Company states 'WE WOULD LOVE TO HEAR FROM YOU IF YOU'RE INTERESTED IN JOINING OUR INTERDISCIPLINARY TEAM'
- Evidence: https://www.proteinqure.com/company/

## Recommended pitch

ProteinQure is designing exotic peptides, but your internal protein-engineering team may also benefit from rapid iteration on mini-binder scaffolds or recombinant protein validation constructs. Our end-to-end BLI workflow (DNA synthesis + cell-free expression + Gator quantification) could accelerate your binder characterization 3–5x at 50% the cost of incumbent vendors. We're particularly well-suited for computationally-generated variant libraries (100s–1000s per cycle). Given your Series A momentum and upcoming preclinical milestones for your neurology/nephrology programs, outsourcing expression and BLI could free your wet lab to focus on lead optimization. Let's explore a pilot on one target.

## Why this score

ProteinQure scores 3 (plausible fit, modest volume). Reasoning: (1) End-to-end binder workflow fit is high (tier1 signal), but ProteinQure's primary business is internal pipeline development (PQ203 oncology), not binder generation for partners. (2) Clonal DNA and E. coli expression fit both low because modality is synthetic peptides, not recombinant proteins. (3) Cell-free fit is medium but not core. (4) Company is Series A/B (moderate outreach friction). (5) No public evidence of high-volume construct ordering or expression outsourcing partnerships. (6) Clinical-stage pipeline means risk/capital efficiency prioritized; less likely to engage new vendors without strong track record or cost advantage. Score 3 reflects: potential upside if they expand internal protein engineering (e.g., scaffold binders alongside peptides), but low probability of near-term revenue. Prospect is not 'warm' because DNA synthesis and protein expression are not primary pain points.

## Recent signals (24 mo)

- **2025-05** — Series A close: $11M led by Heron Rock Fund; PQ203 Phase 1 enrollment initiated for TNBC
- **2025-05** — Hired Dave Garman as VP/SVP Clinical Operations with GMP manufacturing expertise
- **2024-12** — Public release of PQ Librarian, AI-driven peptide library selection tool with LLM and peptide-receptor database
- **2025-Q1** — Federal funding received for quantum computing integration into ProteinStudio™ platform (CAD $700K)
- **2024-Q4** — Christopher Ing (CRO) presented peptide drug conjugate progress at Chemistry and Biology of Peptides Gordon Research Conference

## Risks / concerns

- Heavy computational platform may face data-scarcity risk if internal wet lab validation throughput insufficient to generate proprietary training data at scale
- Clinical trial for PQ203 is early-stage (Phase 1); sortilin targeting mechanism still novel in oncology, regulatory path uncertain
- Peptide therapeutics historically face manufacturing scale-up and stability challenges; reliance on external manufacturing partners introduces supply/quality risk
- Competitive landscape crowded: Manifold Bio, Deep Genomics, LabGenius, Relay, Molecule.one, and others pursue similar computational peptide/protein design
- Series A valuation and terms not disclosed; $11M Series A on $16M total raised suggests modest post-money or longer funding runway than typical
- No disclosed pharma partnerships yet; platform monetization depends on achieving clinical milestones and attracting BD partners

## Sources

- [ProteinQure Company Website - Homepage](https://www.proteinqure.com/) _[company_site]_
- [ProteinQure Company Website - Company Page](https://www.proteinqure.com/company/) _[company_site]_
- [ProteinQure Company Website - Science/Platform](https://www.proteinqure.com/science/) _[company_site]_
- [ProteinQure Company Website - Team](https://www.proteinqure.com/team/) _[company_site]_
- [ProteinQure Press Release - Series A Financing](https://www.proteinqure.com/proteinqure-raises-series-a-financing-to-advance-first-ai-designed-peptide-therapeutic-into-clinical-trials/) _[press]_
- [ProteinQure - Crunchbase Profile](https://www.crunchbase.com/organization/proteinqure) _[crunchbase]_
- [ProteinQure - PitchBook Profile](https://pitchbook.com/profiles/company/267759-19) _[other]_
- [ProteinQure - LinkedIn Company Page](https://ca.linkedin.com/company/proteinqure) _[linkedin]_
- [ProteinQure - BiopharmaTrend Profile](https://www.biopharmatrend.com/m/company/proteinqure/) _[other]_
- [ProteinQure - LeadIQ Profile](https://leadiq.com/c/proteinqure/5b9016e6210000220bd3b97a) _[other]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on company status, founding date, Series A funding, team, and primary business model (AI-peptide design). Medium confidence on exact headcount (LinkedIn says 11–50, PitchBook says 32, LeadIQ says 34; used 34 as most recent). Low confidence on detailed synthesis/expression vendor relationships and internal lab throughput because company does not publicly disclose vendor strategy. Customer fit assessment is speculative (no public evidence of DNA synthesis or protein expression orders) but grounded in known modality (synthetic peptides) and company stage. Recommended to validate with direct outreach to Christopher Ing or contact via info@proteinqure.com.
- **Data gaps**:
  - No public partnerships or commercial deal details disclosed
  - Series A post-money valuation not disclosed
  - No published peer-reviewed papers on ProteinStudio™ platform; validation is via internal pipeline (PQ203) and industry talks
  - Exact breakdown of external vendor usage (peptide synthesis CROs, cell-free providers) not public
  - Timing and details of federal quantum computing grant ($700K CAD) not fully specified
  - Clinical trial site locations, enrollment target, and PQ203 trial details not in available sources
  - Employee surnames for Shannon and Sungwon (wet lab scientists) not provided on public team page

---
_Source brief: `surface_claude/runs/20260513T212251Z_proteinqure/brief.json`_
