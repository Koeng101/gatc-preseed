# Evolvere BioSciences

**Score: 5/5** · (Tier 1 — Hot) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: Oxford, United Kingdom · Founded: 2021

> AI-driven protein design platform using co-evolutionary models to develop next-generation antibiotics that outpace bacterial resistance.

## What they do

Evolvere BioSciences develops next-generation antibiotics using AI-driven co-evolutionary protein-interaction models to design antibacterial molecules that precisely target pathogenic bacteria while minimizing resistance emergence. The platform leverages generative AI (diffusion models, language models) for computational protein design, combined with high-throughput experimental evolution and synthesis of designed proteins to validate designs against bacterial resistance development.

**AI role**: Core to platform. AI generates novel protein structures via generative models (RFDesign, RFDiffusion, ProteinMPNN, ESMFold, AlphaFold) constrained by co-evolutionary protein-protein interaction datasets. AI predicts bacterial escape mutations and designs antibodies/proteins that remain effective against evolved bacterial variants. Founders published on generative AI for de novo protein design (Current Opinion in Structural Biology, 2024).

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Co-evolutionary antibacterial protein platform | engineered protein / antibody (bacteriocin-like) | broad-spectrum antibiotic-resistant bacterial infections | preclinical | — | Designed and synthesized protein molecules with selective bacterial targeting in physiological conditions; proofs-of-concept for diagnostic and therapeutic applications (2022) |

## Funding

- **Total raised**: $500.0K
- **Last round**: Seed · $500.0K · 2024 · led by —
- **Non-dilutive**: Y Combinator Summer 2024 batch; BioEscalator prize lab space (Oxford University incubator); AWS Activate for Startups (BioEscalator partnership)

## Founders & key people

- **Adam Winnifrith** — CEO & Co-Founder _(founder)_
  MBioChem from University of Oxford with background in biochemistry and bioengineering. Works at the intersection of protein AI and automation. Published on generative AI for de novo protein design in Current Opinion in Structural Biology (2024) and contributed to AWS blog on macromolecule design. Co-author with Carlos Outeiral and Brian Hie on generative protein design review.
- **Piotr Jedryszek** — CTO & Co-Founder _(founder)_
  Computational biologist and deep learning specialist from University of Oxford. Expertise in bacterial evolution, molecular dynamics simulations, and nanopore engineering. Contributed to AWS technical blog on Evolvere's macromolecule design pipeline. Authored papers on protein-protein interactions and evolutionary computation.
- **Weronika Slesak** — CSO & Co-Founder _(founder)_
  Evolutionary biologist and microbiologist from University of Oxford (Worcester College). Biology degree with emphasis on evolution. Prior research experience at University of Oxford and Institut Pasteur in high-throughput experimental evolution and antibiotic resistance genes. Brings wet-lab expertise in bacterial genetics and resistance development.
- **Oliver Waterhouse** — Advisor / Investor
  Serial biotech entrepreneur and scientific advisor. Founded and exited Base Genomics (Oxford) for $410 million. Provides strategic guidance and industry relationships. Serves as mentor/investor to Evolvere team.

## Customer fit

- **Bench headcount**: 3 (_high_) — Company is 3-person founding team (CEO, CTO, CSO). No additional bench scientists, technicians, or support staff evident from public sources. Likely rely on BioEscalator shared lab access and academic collaborators for wet-lab work.
- **Primary modality**: enzyme
- **Expression systems**: E. coli (inferred from protein design platform focus and bacterial target specificity), Cell-free (possible, mentioned as emerging alternative in protein design workflows)
- **In-house DNA synthesis**: no
- **In-house protein production**: no

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Company generates hundreds of designed protein variants per design cycle via generative AI (RFDesign, RFDiffusion). Each variant requires DNA synthesis of the gene construct (typically <2 kb for engineered proteins / miniproteins / nanobodies). Preclinical stage suggests iterative design-build-test-learn cycle with high throughput. Early-stage startup (no in-house synthesis) is ideal fit for cost-effective clonal DNA. Estimated 1000–10000 annual orders based on: (1) 100s of designs per cycle, (2) multiple rounds of variant optimization, (3) technical replicates, (4) 3-year preclinical horizon before Series A. |
| E. coli KRX expression | high | 1000-10000 | Evolvere's platform focuses on engineered proteins designed to bind/inhibit bacterial targets (conceptually similar to antibodies, enzymes, antimicrobial peptides). AWS blog details their use of protein design tools (RFDesign, RFDiffusion) to generate novel protein scaffolds. These are overwhelmingly expressed in E. coli for rapid validation (cost-effective, fast turnaround, suitable for soluble mini-proteins and engineered antimicrobial proteins). Company has no in-house expression capacity evident. E. coli KRX platform (high-yield expression strain + immediate purification post-assembly) is perfect fit for their design-validate cycle. Estimated 1000–10000 annual orders matching DNA synthesis volume. |
| Cell-free expression | medium | 100-1000 | Cell-free may be valuable for rapid prototyping of toxic antimicrobial proteins or extreme throughput early in design cycle (parallel expression of 100s of variants). However, E. coli KRX likely primary modality. Cell-free could serve as secondary validation platform for subset of candidates, or for expression of non-canonical amino acids if needed. Moderate demand signal. |
| End-to-end binder workflow | high | 100-1000 | Evolvere's designed proteins are functionally analogous to binders (engineered to bind/inhibit bacterial proteins with high specificity). End-to-end workflow (DNA synthesis → E. coli expression → BLI characterization) directly matches their need to validate designed binders against target bacterial proteins and against evolved bacterial variants. Helps them generate quantitative kinetic data to feed back into AI model refinement. High fit, though volume likely smaller than raw design throughput (only top candidates progress to characterization). |

### Key lab contacts

- [Adam Winnifrith](https://www.linkedin.com/in/adam-winnifrith-b438ab182/) — CEO & Co-Founder
- Piotr Jedryszek — CTO & Co-Founder
- Weronika Slesak — CSO & Co-Founder

## Why this score

Evolvere is a tier-1 hot prospect for multiple reasons: (1) Primary modality (engineered protein/enzyme) requires high-throughput DNA synthesis and bacterial expression—we offer exactly this stack at superior cost and turnaround; (2) Design-validate-iterate cycle predicts 1000+ annual orders of short constructs (<2 kb), matching our strength; (3) No in-house synthesis or expression capability—they need us; (4) Early stage (seed/Series A), founder-driven, no entrenched vendor relationships; (5) Located in Oxford, accessible for direct outreach; (6) Founders publish, speak, and engage publicly—signals openness to partnerships; (7) High growth trajectory (Y Combinator, $500K seed, strong technical pedigree, proven advisor network). Only downside: preclinical stage means current spend is likely modest, but opportunity to become primary vendor as they scale toward IND.

## Recent signals (24 mo)

- **2024-06** — Joined Y Combinator Summer 2024 batch (S24). Team expanded to 3 founders; active in startup accelerator environment.
- **2024** — Closed $500K seed funding round; increased activity signaling readiness for Series A.
- **2024-04** — Adam Winnifrith published on generative AI for protein design in Current Opinion in Structural Biology—high-profile validation of core platform technology.
- **2023-04** — Featured in AWS HPC blog on macromolecule design pipeline; demonstrates infrastructure maturity and cloud-native engineering capabilities.
- **2023-10** — Adam Winnifrith presented on protein design at Oxford/BioEscalator; active in thought leadership and community engagement.

## Risks / concerns

- Very early stage (3 employees, ~$500K raised, preclinical). Long timeline to first clinical candidate (typical 5–7 years for antibiotics from IND to approval).
- Antibiotic development is capital-intensive and regulatory path is complex; limited funding to date suggests dependency on Series A capital or partnerships.
- Platform validation still in progress—no published peer-reviewed data yet on co-evolutionary design approach achieving resistance-evading antibiotics in vivo.
- Competitive landscape: multiple well-funded antibiotic-discovery startups (Spero, Vividion, Cyrus, Synthetic Biology companies) using alternative approaches (screening, rational design, phage engineering).
- Regulatory risk: FDA approval of novel antibiotics with new mechanisms requires extensive preclinical and clinical evidence; co-evolutionary design framework is novel and may require novel biomarkers for resistance prediction.
- Market risk: antibiotics are historically a challenging commercial market (low pricing, short treatment courses, regulatory incentives). Exit likely via acquisition or partnership rather than IPO.
- Founder concentration: three-person team concentrated in protein AI/computational biology; limited business development or operations capacity.

## Relevant papers

- [Generative artificial intelligence for de novo protein design](https://doi.org/10.1016/j.sbi.2024.102794) — Winnifrith, Adam, Current Opinion in Structural Biology (2024)  
  _Co-authored by Evolvere CEO Adam Winnifrith. Comprehensive review of generative AI methods (diffusion, language models) for protein design—core to Evolvere's platform. Discusses state-of-the-art design protocols achieving ~20% experimental success rates and challenges in prioritizing designs for testing._
- [How Evolvere Biosciences performs macromolecule design on the AWS Cloud](https://aws.amazon.com/blogs/hpc/how-evolvere-biosciences-performs-macromolecule-design-on-the-aws-cloud/) — Wicks, George (Evolvere BioSciences), AWS Blog / Amazon Web Services (2023)  
  _Technical deep dive by Evolvere founders on their protein design pipeline. Details use of RFDesign, RFDiffusion, ProteinMPNN, ESMFold, and AlphaFold for generative design and scoring. Shows computational infrastructure and orchestration (Nextflow, AWS Batch, SageMaker) for protein engineering workflows._

## Sources

- [Evolvere BioSciences: Making Next-Generation Antibiotics that Outpace Bacterial Evolution | Y Combinator](https://www.ycombinator.com/companies/evolvere-biosciences) _[press]_
- [Evolvere Biosciences 2026 Company Profile: Valuation, Funding & Investors | PitchBook](https://pitchbook.com/profiles/company/572292-82) _[crunchbase]_
- [Evolvere BioSciences - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/evolvere-biosciences) _[crunchbase]_
- [Evolvere BioSciences - Products, Competitors, Financials, Employees, Headquarters Locations](https://www.cbinsights.com/company/evolvere-biosciences) _[crunchbase]_
- [Evolvere Biosciences](https://evolverebiosciences.com/) _[company_site]_
- [Evolvere BioSciences - 2025 Company Profile, Funding & Competitors - Tracxn](https://tracxn.com/d/companies/evolvere-biosciences/) _[crunchbase]_
- [Ēvolvere Biosciences | LinkedIn](https://www.linkedin.com/company/evolvere-biosciences) _[linkedin]_
- [Introducing Evolvere Biosciences — BioEscalator](https://www.bioescalator.ox.ac.uk/news-and-events/news/introducing-evolvere-biosciences) _[press]_
- [Building the Next Generation of Antibiotics: Inside Evolvere BioSciences' Innovative Strategy](https://hiretop.com/blog2/evolvere-bioscience-next-generation-antibiotics/) _[press]_
- [Generative artificial intelligence for de novo protein design - PubMed](https://pubmed.ncbi.nlm.nih.gov/38663170/) _[pubmed]_
- [How Evolvere Biosciences performs macromolecule design on the AWS Cloud | Amazon Web Services](https://aws.amazon.com/blogs/hpc/how-evolvere-biosciences-performs-macromolecule-design-on-the-aws-cloud/) _[press]_
- [[2310.09685] Generative artificial intelligence for de novo protein design](https://arxiv.org/abs/2310.09685) _[pubmed]_
- [Adam Winnifrith on LinkedIn: Protein Design and AI](https://www.linkedin.com/posts/adam-winnifrith-b438ab182_drugdiscovery-aiinmedicine-proteindesign-activity-7119604524507373568-uNL8) _[linkedin]_

## Confidence & gaps

- **Self-rated confidence**: high
- Core company information (founding, founders, location, stage, funding, modality, AI platform) sourced from primary sources: Y Combinator official listing, Crunchbase, CB Insights, LinkedIn company page, company website, and BioEscalator press release. Founders' technical credentials and platform details confirmed via peer-reviewed publication (Current Opinion in Structural Biology, 2024, PubMed indexed) and AWS technical blog authored by Evolvere team. Financial metrics ($500K seed, 3 employees, 2021 founding) consistent across multiple independent sources (PitchBook, Tracxn, Crunchbase, CB Insights). Stage and go-to-market trajectory corroborated by Y Combinator batch status and presence at BioEscalator (Oxford accelerator). Only low-confidence area: detailed synthesis/expression vendor relationships and current headcount (>6 months old), but these do not materially affect prospect scoring. Overall confidence in customer fit analysis is high due to strong signal on design-centric platform, high DNA synthesis demand, and no in-house production capability.
- **Data gaps**:
  - Exact founding date / month in 2021 not available; only year confirmed
  - Identity of seed funding investor(s) not publicly disclosed; total $500K confirmed but lead investor name(s) not found
  - Specific known synthesis vendors (IDT, Twist, GenScript, etc.) not named in available sources; assumed to be using external vendors based on lack of in-house capacity
  - No specific clinical trial data or regulatory filings found (expected for preclinical stage)
  - Headcount as of May 2026 not available; last confirmed count was 3 (June 2024 Y Combinator batch); may have grown
  - Commercial partnerships or licensing deals not found in available sources
  - Series A timeline / target valuation not publicly disclosed

---
_Source brief: `surface_claude/runs/20260513T212258Z_evolvere_biosciences/brief.json`_
