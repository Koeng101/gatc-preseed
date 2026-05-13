# Menten AI

**Score: 3/5** · (Tier 3 — Cold) · `miniprotein_or_nanobody` · Stage: seed_to_series_A · Outreach: easy · HQ: San Francisco, USA · Founded: 2019

> Quantum-computing and ML platform for designing novel peptide and protein therapeutics

## What they do

Menten AI develops computational methods and a generative AI platform (MAUD 1.0) for protein design that combines machine learning, physics-based models, and quantum simulations to design and optimize drug-like peptides de novo, particularly for complex targets including protein-protein interfaces and macrocyclic peptides.

**AI role**: Core to platform: generative AI for peptide design, graph neural networks (GCN, XENet) for protein structure prediction, quantum machine learning for combinatorial optimization, and classical-quantum hybrid algorithms for molecular design.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| MAUD 1.0 | Peptide macrocycle | Drug discovery platform; designed for protein-protein interface targets | research_only | Multiple (Bristol Myers Squibb named; others confidential) | Platform validated across preclinical discovery pipeline; capable of de novo design of peptide macrocycles (—) |

## Funding

- **Total raised**: —
- **Last round**: Seed · — · — · led by Y Combinator

## Commercial deals

- **Bristol Myers Squibb** (None) — upfront —, total potential —. Generative AI platform leveraged to accelerate design and optimization of peptide macrocycles
- **Xanadu Quantum** (2022) — upfront —, total potential —. Partnership to develop quantum machine learning solutions using PennyLane open-source library for protein-based drug discovery
- **D-Wave Systems** (None) — upfront —, total potential —. Hybrid quantum-classical computing partnership using D-Wave quantum annealer for peptide and protein design
- **AWS** (None) — upfront —, total potential —. Cloud compute infrastructure for AI and quantum computing in drug discovery

## Founders & key people

- **Hans Melo** — CEO and Co-founder _(founder)_
  PhD in computational chemistry. Co-founder of Menten AI. Background in protein design and computational drug discovery. Active public speaker at industry events (BioEurope 2025, APS 2023, 2025 Peptide Therapeutics Forum). Leads R&D on quantum-classical hybrid approaches for peptide design.
- **Tamas Gorbe** — Co-founder _(founder)_
  Co-founder of Menten AI. Specialization not detailed in available sources.
- **Vikram K. Mulligan** — Co-founder and shareholder (title not specified) _(founder)_
  PhD in computational biology. Key contributor to Rosetta macromolecular modeling suite. Co-author of Nature review on tools for macromolecular design (2023). Specializes in protein structure prediction and de novo protein design. Active researcher with publications in high-impact journals (Protein Science, Journal of Chemical Theory and Computation).
- **Jack Maguire** — Research scientist / team member
  Employed by Menten AI with granted stock options. Contributor to macromolecular design literature and Rosetta community. Co-author on Nature review article on protein design tools.
- **Ian MacCormack** — Senior Quantum Computing Scientist
  PhD level expertise in quantum computing. Leads quantum algorithm development and integration of quantum simulators and NISQ devices. Focus on hybrid quantum-classical algorithms for peptide design.
- **Andrea McNeal** — Vice President of Business Development
  Recently joined (2025). Leads strategic collaborations and scaling of the AI-driven peptide design platform. Presented at BioEurope 2025 and NextGen Biomed.

## Customer fit

- **Bench headcount**: — (_low_) — Menten AI is a computational platform company with no disclosed in-house experimental capability. They have ~2-5 research scientists (estimate) based on team size and publications. No traditional 'bench' exists at Menten AI itself; all validation is contracted to pharma partners or CROs.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (inferred for peptide validation), Cell-free expression (likely for rapid prototyping), Mammalian (CHO/HEK; inferred for pharmaceutical partners' downstream work)
- **In-house DNA synthesis**: no
- **In-house protein production**: no

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | medium | 100-1000 | Menten AI designs peptide sequences computationally and validates them experimentally. Each designed peptide requires DNA synthesis for gene construction. However, their pipeline is not high-volume: they design 20-100 molecules per target from hundreds of thousands of in-silico candidates. This suggests modest but steady demand for clonal DNA (short gene constructs, <2 kb for peptide-encoding sequences). Outsourced synthesis aligns with their model. Demand scales with pharma partnership volume but is not their core operation. |
| E. coli KRX expression | low | <100 | Menten AI's designed peptides are primarily short macrocyclic peptides, not full-length proteins requiring extensive E. coli expression infrastructure. They likely use in-house or partner-provided rapid expression systems (cell-free, mammalian bioreactors) for initial validation. Bacterial expression is not a natural fit for their modality. Very low priority. |
| Cell-free expression | medium | 100-1000 | Cell-free expression is ideal for rapid prototyping of designed peptides and small proteins, especially for toxic or membrane-bound candidates. Menten AI's workflow (in-silico design → rapid experimental validation of 20-100 candidates) is well-suited to cell-free systems. However, this is likely used by their pharma partners, not directly by Menten AI's small team. Some demand from Menten AI directly for platform validation and assay development is plausible. |
| End-to-end binder workflow | high | 100-1000 | This is the most natural fit. Menten AI designs binders (peptide macrocycles, miniproteins, nanobodies as potential future expansion). They need rapid, high-throughput characterization (BLI quantification) of designed candidates to validate binding affinity, specificity, and druggability before advancing to pharma partners. An outsourced end-to-end workflow (DNA synthesis → expression → BLI) directly enables their discovery loop. The volume (20-100 per target, multiple targets per year with pharma collaborations) aligns with 100-1000 annual orders. This is a high-fit service line if positioned as 'peptide binder validation workflow' rather than generic antibodies. |

### Key lab contacts

- Hans Melo — CEO and Co-founder
- Andrea McNeal — Vice President of Business Development
- Vikram K. Mulligan — Co-founder

## Recommended pitch

Menten AI is designing novel peptide therapeutics with your quantum-ML platform. We can accelerate your discovery cycle by offering integrated DNA synthesis + rapid cell-free expression + BLI quantification for your designed peptide candidates. This end-to-end workflow lets you validate 50-100 designs per project in parallel, reducing iteration time and derisk selection before handing off to pharma partners. At $X per complete workflow, this is cheaper than building in-house high-throughput screening or managing multiple vendor relationships. Let's pilot with your next BMS collaboration or internal target.

## Why this score

Mixed fit. Menten AI is a computational platform company with no in-house wet lab, so they are not a direct customer for our expression and purification services (E. coli KRX). However, they do have demand for DNA synthesis (designing 20-100 peptides per project) and may benefit from end-to-end binder workflow (DNA → expression → BLI) for rapid validation. The end-to-end service is a moderate-to-high fit, but volume is modest (estimated 100-1000 orders/year) and highly dependent on pharma partnerships. Company is early-stage and easy to reach, but they are software/AI-first and unlikely to outsource wet-lab validation at scale (they partner directly with pharma). Not a primary revenue driver; better as a niche, high-touch partnership. Prospect score reflects that they are a plausible but not hot lead—good if we can offer them a compelling discovery acceleration service, weak if we rely only on commodity DNA synthesis.

## Recent signals (24 mo)

- **2025-11** — Presented at BioEurope 2025 with CEO Hans Melo and VP of Business Development Andrea McNeal; showcased peptide drug innovations and strengthened industry partnerships
- **2025-11** — Andrea McNeal appointed Vice President of Business Development to expand strategic collaborations
- **2025-01** — Presented at 2025 Peptide Therapeutics Forum (Swiss Chemical Society) with CEO Hans Melo highlighting recent platform advancements
- **2025-01** — Showcased peptide innovations at NextGen Biomed conference
- **—** — Collaboration with Bristol Myers Squibb leveraging MAUD 1.0 generative AI platform for peptide macrocycle design and optimization (timeline unclear; listed on news page without date)

## Risks / concerns

- Early-stage and capital-constrained: Only 2 employees reported (as of 2021 YC listing); current headcount unknown but likely still small. Limited ability to scale sales/support infrastructure.
- Quantum computing dependency: Platform relies on quantum simulators and NISQ devices (D-Wave, Xanadu, AWS quantum). Commercial quantum advantage still unproven at scale; classical algorithms improving rapidly; risk of pivot to classical-only if quantum advantage does not materialize.
- No disclosed clinical pipeline: Platform is research-only with no owned programs in preclinical development. Entire value chain depends on pharma partner validation and advancement.
- Funding gaps: Total capital raised unknown; no Series A or later announced. Sustainability and ability to fund R&D and team expansion unclear.
- Competition from larger platforms: RosettaFold (DeepMind), ProteinMPNN, OmegaFold, and other ML-first protein design tools are increasingly available open-source; larger funded competitors (Absci, Generate, Genentech internal tools) may outpace in validation and partnerships.
- Biopharma partner concentration risk: Success heavily dependent on top-10 pharma partnerships (BMS named, others confidential); lack of diversified revenue or owned assets.
- Intellectual property clarity: No disclosed patents; reliance on trade secrets and proprietary datasets. Patent landscape around quantum-computing-assisted protein design still unsettled.

## Relevant papers

- [De novo design of a tetrameric chloride transporter](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7729722/) — Mulligan, VK, Protein Science (2020)  
  _Foundational de novo protein design work by co-founder Mulligan demonstrating computational design capabilities in high-impact venue; directly relevant to Menten AI's platform focus._
- [Design of proteins presenting discontinuous functional sites by topology-directed domain shuffling](https://science.sciencemag.org/content/359/6379/1149) — Langan, RA, Science (2018)  
  _Landmark computational protein design paper involving Mulligan; demonstrates protein design innovation that informs Menten AI's approach to complex protein architecture._

## Sources

- [Menten AI - Official Website](https://www.menten.ai/) _[company_site]_
- [Menten AI - News Page](https://www.menten.ai/news) _[company_site]_
- [Menten AI - Publications](https://www.menten.ai/publications) _[company_site]_
- [Menten AI - Y Combinator Company Profile](https://www.ycombinator.com/companies/menten-ai) _[other]_
- [Menten AI Partners with Xanadu](https://www.prnewswire.com/news-releases/menten-ai-partners-with-xanadu-to-develop-quantum-machine-learning-for-protein-based-drug-discovery-301467045.html) _[press]_
- [Menten AI Leverages AWS, AI, and Quantum Computing](https://aws.amazon.com/startups/learn/menten-ai-leverages-aws-ai-quantum-computing-to-create-drugs?lang=en-US) _[other]_
- [Menten AI Case Story - D-Wave Systems](https://www.dwavequantum.com/media/exqjbloj/dwave_menten-ai_case_story_v10.pdf) _[press]_
- [BioPharma Trend - Menten AI Company Info](https://www.biopharmatrend.com/m/company/menten-biotechnology-labs/) _[other]_
- [Menten AI - Crunchbase Profile](https://www.crunchbase.com/organization/menten-biotechnology-labs-inc) _[crunchbase]_
- [XENet Graph Convolution Paper](https://www.menten.ai/news/xenet-paper) _[company_site]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence in core business model (quantum-ML platform for peptide design) and recent activities (partnerships, team, conferences). Medium confidence in funding status (Y Combinator confirmed, but no later rounds disclosed; company may have raised but not publicized). Low confidence in detailed pipeline, financials, or customer count (all treated as confidential by the company). Headcount estimate based on 2021 YC data is stale. No access to SEC filings (private company). Relevant papers and founder credentials well-sourced from PubMed and industry sources. Recommendations for outreach based on inferred stage and modality, but actual contact pathways and current priorities unknown.
- **Data gaps**:
  - Total capital raised and full funding history: no Series A, B, or later rounds disclosed; Y Combinator backing confirmed but amount unknown.
  - Current headcount: YC listing shows 2 employees (2021); current team size unknown but likely 5-15 based on publications and hiring of VP BD.
  - Specific pipeline programs or clinical trials: no owned development programs identified; only partnership with BMS disclosed vaguely.
  - Founded year inferred as 2019 from context (YC batch likely S19 or W20); not explicitly confirmed.
  - Founder backgrounds: Tamas Gorbe's background not detailed; Hans Melo and Vikram Mulligan details inferred from publications and event participation.
  - Patents and IP: no patent numbers or filings disclosed.
  - Revenue or ARR: no financial metrics disclosed.
  - Detailed commercial deal terms: BMS, Xanadu, D-Wave partnerships exist but upfront, milestones, and total deal value not disclosed.
  - Hiring and team expansion: no current job postings or open roles identified; hiring signals unclear beyond VP BD appointment.
  - Customer list beyond BMS: other pharma partners mentioned as 'top-10 pharma' but unnamed.
  - Wet-lab infrastructure: no mention of owned labs, equipment, or expression capacity; entirely outsourced model inferred.

---
_Source brief: `surface_claude/runs/20260513T212254Z_menten_ai/brief.json`_
