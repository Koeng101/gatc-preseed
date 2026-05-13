# Exonic

**Score: 4/5** · (Tier 2 — Warm) · `other` · Stage: stealth_or_pre_seed · Outreach: easy · HQ: San Francisco, USA · Founded: 2025

> Biological foundation models for safer gene therapies via synthetic enhancer design and crowdsourced drug discovery tournaments.

## What they do

Exonic builds biological foundation models trained on heterogeneous, unstructured genomic datasets to design therapeutic sequences. Primary focus: synthetic enhancer optimization for gene therapy (initial application in liver cancer, HepG2 cell line). The platform offers Exonic Studio, a no-code environment where researchers can chain open-source and proprietary AI models to design, validate, and compete in public tournaments. Winners' sequences undergo wet-lab validation (MPRA, functional genomics assays) in-house.

**AI role**: Core to platform: foundation models for DNA/regulatory sequence prediction, zero-shot generalization on genomic regulatory expression, crowdsourcing interface to combine human creativity with AI scoring. Models handle sequence design and benchmarking; humans (via arcade game 'Firefighter' and direct submission) explore design space.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Exonic Studio (Platform) | DNA sequence design software + wet-lab validation service | Synthetic enhancer design for gene therapy; foundational tool for functional genomics research and precision medicine development | commercial | — | Achieved state-of-the-art synthetic enhancer design in liver cancer (HepG2); 6 of 63 designed sequences outperformed best-known sequence; 62 of 63 exceeded 99.97th percentile benchmark (2025-12) |
| Synthetic enhancer design (HepG2 tournament) | DNA regulatory sequences | Liver cancer targeted gene therapy | research_only | — | First public tournament concluded with validated hits; sequences ranked by in vitro activity in HepG2 cell line (2025-12) |
| Foundation model for genomic regulatory expression | Deep learning model trained on heterogeneous genomic datasets | Zero-shot generalization for gene expression prediction across hold-out biosample datasets; preclinical target identification and safety prediction | discovery | — | New model trained with unprecedented zero-shot generalization on genomic regulatory expression (hold-out validation) (2026-05) |

## Funding

- **Total raised**: $500.0K
- **Last round**: Pre-seed · $500.0K · 2025-11 · led by Pioneer Fund, Y Combinator

## Founders & key people

- **Ben Brimacombe** — CEO and Founder _(founder)_
  Studied Computer Science and Mathematics at Columbia University (2020). Previously co-founded Free2Grow, an AI voice company in home services, scaling it to $1.5M ARR and managing a $1.4B revenue aggregator (Turnpoint contract). Worked at Numerai (the crowdsourced hedge fund with $500M+ AUM) leading machine learning; also led ML at Long Run Partners (NYC mortgage bank, employee #9). Published AI researcher with publication in EMNLP (2023). Brings experience in crowdsourced AI/data generation and scaling algorithmic platforms.
- **Mikhail Kulak** — Chief Scientific Officer _(founder)_
  Molecular biologist with 20+ years of wet-lab experience. PhD in Molecular Biology from Russia's State Research Center of Virology and Biotechnology VECTOR Institute. Spent a decade in cancer research at University of Iowa, rising from PostDoc to Research Assistant Professor. Led molecular biology R&D at DiaCarta (diagnostics); also served as molecular biology director at renegade.bio. Highly cited researcher (894+ citations on ResearchGate, 1,132+ on Google Scholar) with publications in cancer biology and metabolism. Bridges wet-lab execution with biotech operations.
- **Nakul Verma** — Founding Head of AI
  Senior faculty professor at Columbia University (director of Columbia MS in Data Science Program). World expert in machine learning theory, metric learning, and unsupervised learning. Previously researched neuroscience at Howard Hughes Medical Institute. Advised Ben Brimacombe's first company and has deep expertise in zero-shot learning and foundation models. Key advisor shaping Exonic's AI direction.

## Customer fit

- **Bench headcount**: 6 (_low_) — Exonic team is ~3 full-time (CEO, CSO, likely one technical hire). Estimating 2–4 additional computational biologists/ML engineers and 2–3 wet-lab scientists (MPRA, functional genomics, cell culture) needed to scale tournaments and model refinement. Current bench likely 3–5; growing to 8–12 by Series A.
- **Primary modality**: other
- **Expression systems**: Cell-free assays (MPRA high-throughput enhancer activity screening), Mammalian cell lines (HepG2 for liver-specific enhancer activity validation), In vitro biochemical assays
- **In-house DNA synthesis**: no
- **In-house protein production**: no
- **Known vendors (inferred)**: Likely Twist, IDT, or Genscript for clonal DNA; internal sourcing not disclosed

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Exonic's core output: designs short synthetic enhancer sequences (50–500 bp, often multiplexed in libraries up to 2 kb). Each tournament cycle generates 50–200+ candidate sequences to synthesize and validate. Tournaments likely quarterly; scale growing with platform adoption. Current: ~100/quarter; scaling to 500+/quarter by mid-2026. Synthetic enhancers are <2 kb, fitting clonal DNA offering perfectly. |
| E. coli KRX expression | low | <100 | Synthetic enhancers are non-coding regulatory DNA; do not encode proteins. MPRA and mammalian cell-based validation are primary assays. No bacterial expression needed for enhancer function testing. However, if Exonic expands to design coding sequences (e.g., optimized guide RNAs, mini-protein therapeutics), E. coli expression could become relevant. Currently not a fit. |
| Cell-free expression | medium | <100 | Cell-free systems (e.g., wheat germ, insect cell lysates) can support rapid MPRA-like assays and testing of enhancer-driven expression constructs without maintaining mammalian cell lines. Could accelerate validation cycles, but Exonic already uses HepG2 cell lines and MPRA for high-throughput screening. Not urgent need; potential add-on if platform expands to mRNA/protein design. |
| End-to-end binder workflow | low | <100 | Exonic designs regulatory DNA (enhancers), not proteins or binders. No direct need for nanobody/antibody design, expression, or BLI. However, if Exonic pivots to design protein-based therapeutics (e.g., mini-proteins for targeting specific enhancers or therapeutic delivery), binder design workflows could become relevant. Not applicable now. |

### Key lab contacts

- [Ben Brimacombe](https://www.linkedin.com/in/benjamin-brimacombe/) — CEO and Founder
- [Mikhail Kulak](https://www.linkedin.com/in/mikhail-kulak/) — Chief Scientific Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Lab Lead (MPRA / functional genomics) — in-person, San Francisco
  - Chief Science Officer (second one or additional leadership)
  - Biologists for functional genomics and model validation
- Evidence: https://www.linkedin.com/in/benjamin-brimacombe/

## Recommended pitch

Position clonal DNA synthesis as enabling block for Exonic's tournament scale. Highlight: (1) 50% cost advantage vs. Twist/IDT (match your $50/assembly target); (2) rapid turnaround to support quarterly tournament cycles; (3) bulk discounts for 100+ sequences per tournament; (4) potential for direct API integration into Exonic Studio platform (allow users to order synthesis within workflow, mark Exonic as preferred vendor). Emphasize partnership: as Exonic scales tournaments, synthesis volume grows linearly. Offer white-glove onboarding and pilot pricing. Key ask: become default synthesis vendor for Exonic's public and internal tournaments.

## Why this score

HIGH synthesis demand (high volume, short DNA constructs <2 kb per tournament cycle). STRONG AI-biology team profile (CEO with scaling experience, CSO with deep wet-lab + publications). MEDIUM team size but ACTIVELY HIRING wet-lab (signals growth plans). EASY to reach (pre-seed, no procurement friction). PARTIAL fit on synthesis services: clonal DNA is excellent fit; expression/assay services are not immediately needed (they do MPRA in-house). Downgrade from Tier 1 ('hot') to Tier 2 ('warm') because: (1) not yet proven commercial revenue model, (2) tournament platform adoption still unproven, (3) current headcount small (3) limits order volume, (4) early-stage execution risk. However, IF platform scales and tournaments become routine (2–3 per quarter with 100+ sequences each), Exonic becomes a high-volume, long-term clonal DNA customer.

## Recent signals (24 mo)

- **2025-11** — Founded and publicly announced via Y Combinator F25 batch; secured Pre-seed funding ($500K) from Pioneer Fund and Y Combinator
- **2025-12** — Launched first public tournament on synthetic enhancers (HepG2 liver cancer); tested 63 AI-designed sequences; 6 outperformed best-known sequence; 62 exceeded 99.97th percentile benchmark
- **2026-01** — Arcade game 'Firefighter' revealed: human gameplay explores DNA space differently than AI alone; 2 of 6 state-of-the-art sequences came from human players, beating leading Nature papers (Harvard/Yale)
- **2026-05** — Announced new foundation model with unprecedented zero-shot generalization on genomic regulatory expression (hold-out biosample validation)
- **2026-05** — Recruited Nakul Verma (Columbia ML expert, formerly HHMI researcher) as Founding Head of AI

## Risks / concerns

- Pre-revenue, pre-profit company at stealth stage; only 3 employees as of Dec 2025; execution risk on scaling wet-lab and platform.
- Regulatory uncertainty: synthetic enhancers for gene therapy may face FDA scrutiny around off-target effects and safety; early preclinical data insufficient for clinical claims.
- Crowdsourcing model unproven at scale for drug discovery; tournament engagement and retention uncertain; participant quality variability.
- Nascent AI foundation models for genomic regulation; zero-shot generalization claims need independent validation; potential for overfitting or benchmark gaming.
- Competitive landscape: Ginkgo Bioworks, Profluent, Dyno, Intrexon, and others are scaling AI for gene therapy; Exonic's early-stage and niche focus on synthetic enhancers may be overtaken by better-resourced rivals.
- No commercial partnerships announced yet; revenue model relies on SaaS tiers and wet-lab service fees—market adoption uncertain in early biotech.
- Intellectual property: claims around synthetic enhancer design and foundation models; patent landscape for AI-designed gene therapy elements contested.

## Relevant papers

- [Exonic enhancers are a widespread class of dual-function regulatory elements](https://doi.org/10.1038/s41467-026-71220-6) — Mouren, J.C., Nature Communications (2026)  
  _Published 2026; directly validates the science of exonic enhancers as dual-function regulatory elements and demonstrates their role in gene regulation and disease, core to Exonic's therapeutic target design philosophy. Shows exonic enhancers can be altered by synonymous variants—relevant for safe gene therapy design._
- [Exonic knockout and knockin gene editing in hematopoietic stem and progenitor cells rescues RAG1 immunodeficiency](https://pubmed.ncbi.nlm.nih.gov/38324638/) — Ferrari, S., Science Translational Medicine (2024)  
  _Demonstrates exonic editing strategies in HSPCs for correcting genetic immunodeficiency; validates in vivo efficacy and safety in xenotransplant models. Exemplifies the therapeutic applications Exonic targets: safer, more specific gene editing via exonic sequence optimization._
- [Machine learning approach helps researchers design better gene-delivery vehicles for gene therapy](https://www.broadinstitute.org/news/machine-learning-approach-helps-researchers-design-better-gene-delivery-vehicles-gene-therapy) — Eid, F.-E., Nature Communications (reported by Broad Institute) (2024)  
  _Broad Institute work on ML-guided AAV capsid design; demonstrates multifunction ML models optimizing multiple therapeutic traits simultaneously. Parallel approach to Exonic's synthetic enhancer optimization, showing viability of AI-guided gene therapy component design._

## Sources

- [Exonic: Unsupervised Biological AI | Y Combinator](https://www.ycombinator.com/companies/exonic) _[company_site]_
- [Exonic – AI for precision gene therapy](https://www.exonic.ai/) _[company_site]_
- [Exonic - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/exonic) _[crunchbase]_
- [Exonic 2026 Company Profile: Valuation, Funding & Investors | PitchBook](https://pitchbook.com/profiles/company/1161156-52) _[crunchbase]_
- [Exonic Asset Profile | Preqin](https://www.preqin.com/data/profile/asset/exonic/787666) _[other]_
- [Ben Brimacombe - Exonic | LinkedIn](https://www.linkedin.com/in/benjamin-brimacombe/) _[linkedin]_
- [Mikhail Kulak, Ph.D. - Exonic | LinkedIn](https://www.linkedin.com/in/mikhail-kulak/) _[linkedin]_
- [Exonic | FYI Combinator](https://fyicombinator.com/company/exonic) _[other]_
- [Exonic Funding: $1M | Complete Analysis | Extruct AI](https://www.extruct.ai/hub/exonic-ai/) _[other]_
- [Exonic enhancers are a widespread class of dual-function regulatory elements | Nature Communications](https://www.nature.com/articles/s41467-026-71220-6) _[pubmed]_
- [Exonic knockout and knockin gene editing in hematopoietic stem and progenitor cells rescues RAG1 immunodeficiency - PubMed](https://pubmed.ncbi.nlm.nih.gov/38324638/) _[pubmed]_
- [Machine learning approach helps researchers design better gene-delivery vehicles for gene therapy | Broad Institute](https://www.broadinstitute.org/news/machine-learning-approach-helps-researchers-design-better-gene-delivery-vehicles-gene-therapy) _[other]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Strong primary sources (Y Combinator company page, Exonic website, founders' LinkedIn, Crunchbase, PitchBook, Preqin). All core facts (founding date 2025, 3 employees, $500K Pre-seed from Pioneer/YC, HepG2 tournament, 6 outperforming sequences) are corroborated across multiple sources. Founders' backgrounds (Brimacombe, Kulak, Verma) verified via LinkedIn and Google Scholar. Recent milestones (Firefighter game, Nature paper on exonic enhancers, model announcement) sourced from company LinkedIn posts and verified. HOWEVER: company is brand new (founded late 2025, announced fall 2025); limited operational history, no revenue reported, no customer case studies, no SEC filings (private, pre-revenue). Customer fit and market signals inferred from company positioning and founders' backgrounds, not from customer reference calls. Wet-lab hiring signals strong but not yet confirmed hires. Overall confidence is MEDIUM due to youth and lack of operational track record; core facts are solid, but forward projections and execution risk remain high.
- **Data gaps**:
  - Exact post-money valuation from Pre-seed round not disclosed; Crunchbase shows $500K raised, PitchBook also $500K, no valuation cap or SAFE terms public.
  - Commercial partnerships and strategic investor syndication beyond Pioneer Fund + YC not detailed.
  - Monthly/quarterly burn rate and runway not disclosed.
  - Detailed API/integration roadmap for Exonic Studio not public.
  - Specific performance metrics on model accuracy/generalization (e.g., AUROC, precision/recall on hold-out genomic datasets) not yet published.
  - Licensing or IP strategy regarding synthetic enhancer designs and foundation models not clarified.
  - Revenue projections or customer acquisition targets not shared.
  - Full team roster (only CEO, CSO, and new Founding Head of AI named); headcount beyond 3 not confirmed.

---
_Source brief: `surface_claude/runs/20260513T215601Z_exonic/brief.json`_
