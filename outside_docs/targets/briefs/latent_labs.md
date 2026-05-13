# Latent Labs

**Score: 5/5** · (Tier 1 — Hot) · `miniprotein_or_nanobody` · Stage: series_A_to_B · Outreach: easy · HQ: London, United Kingdom · Founded: 2023

> Generative AI platform for de novo protein binder design (macrocycles, mini-binders, nanobodies, antibodies) with lab validation infrastructure.

## What they do

Latent Labs builds frontier generative AI models that enable biotechnology and pharmaceutical partners to computationally design new therapeutic molecules—macrocycles, mini-binders, nanobodies, and antibodies—without requiring internal AI expertise. The company combines AI model development in London with wet lab validation in San Francisco to iterate and prove designs experimentally before customers test them.

**AI role**: Core to product: all-atom generative models (Latent-X, Latent-X2, Latent-Y) that jointly generate sequences and structures of protein binders at atomic resolution, directly modeling non-covalent interactions. Also developing autonomous AI agents (Latent-Y) that execute end-to-end design campaigns from text prompts.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Latent-X | Macrocycles, mini-binders | Research and therapeutic applications; de novo protein binder design | launched | — | Launched web-based platform with 91-100% hit rates for macrocycles and 10-64% for mini-binders in head-to-head lab validation against RFdiffusion, RFpeptides, AlphaProteo. (2025-07) |
| Latent-X2 | Antibodies (VHH, scFv), macrocyclic peptides | Therapeutic antibody and peptide design; oncology and difficult targets (e.g., K-Ras) | launched | — | Demonstrated drug-like antibodies with low ex vivo immunogenicity and picomolar binding affinities; 50% success rate on 18 diverse targets in zero-shot design (4-24 designs per target). (2025-12) |
| Latent-Y | Autonomous agent for antibodies (VHH, scFv), macrocycles, mini-binders | End-to-end autonomous drug discovery campaigns from text prompts | research_only | — | Lab-validated autonomous agent: 67% target-level success rate across 9 targets, 56x faster than expert manual workflows, confirmed nanomolar-range binders without human filtering. (2026-03) |

## Funding

- **Total raised**: $50.0M
- **Last round**: Series A · $40.0M · 2025-02 · led by Radical Ventures, Sofinnova Partners (also: Flying Fish, Isomer, 8VC, Kindred Capital, Pillar VC)
- **All rounds**:
  - — · Pre-seed or Seed · $10.0M · lead —
  - 2025-02 · Series A · $40.0M · lead Radical Ventures, Sofinnova Partners

## Founders & key people

- **Simon Kohl** — Founder & CEO _(founder)_
  PhD from German Cancer Research Center (DKFZ), Heidelberg; co-developed AlphaFold2 and developed the pLDDT confidence prediction system (now widely used in protein design); co-led DeepMind's protein design team and established DeepMind's wet lab at Francis Crick Institute, London. Left DeepMind late 2022, incorporated Latent Labs mid-2023. Highly cited researcher (71,787 citations) with expertise in protein structure prediction, generative models, and computational biology. Active public speaker and advisor.
- **Alex Bridgland** — Senior model developer
  Worked on AlphaFold 1, 2, and 3 at DeepMind—built and evaluated models, developed biological software tools and data pipelines. Now leads frontier model development at Latent Labs.
- **Annette Obika-Mbatha** — Operations
  Previously founded DeepMind's Science Team and led personalization teams at Amazon (10 years). Now oversees operational infrastructure at Latent Labs.
- **Rebecca Bartke-Croughan** — Wet lab lead
  Developed novel high-throughput gene editing tools, screening methods, and cell culture systems. Leads experimental validation of AI designs at San Francisco lab.
- **David Yuan** — Senior model developer
  Previously at Zymergen and Mammoth Biosciences (synthetic biology/gene editing); now builds frontier models for protein design.
- **Henry Kenlay** — Model developer
  DPhil from University of Oxford (graph machine learning). Previously worked on antibody language models at Exscientia. Now builds frontier models.
- **Jonathan Crabbé** — Model developer
  PhD from University of Cambridge on machine learning interpretability. Contributed to Microsoft's Mattergen (foundation model for materials). Now builds frontier models.

## Customer fit

- **Bench headcount**: 12 (_medium_) — Based on Latent Labs' published validation data: 7 targets for Latent-X (30-100 designs per target), 18 targets for Latent-X2, suggesting 25-30 FTE equivalent across protein design, bioinformatics, and lab validation. Estimated wet lab bench staff (expression, BLI/SPR, immunogenicity assays) ~8-10 people; bioinformatics/ML ~5-7 people.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (implied in validation workflows, likely BL21/KRX for protein expression), Mammalian display (human cell-free extracts for immunogenicity assays)
- **In-house DNA synthesis**: no
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Latent Labs generates hundreds of designs per target (30-100 per target, 7-18 targets in reported studies). Each design requires DNA synthesis of VH/VL genes (VHH, scFv, mini-binder scaffolds, macrocycle template sequences). Typical constructs <2 kb. At current pace (multiple targets per quarter in lab validation), cumulative demand is easily 1000+ short constructs/year, likely growing as platform adoption scales. Perfect fit for high-volume, low-cost clonal DNA. |
| E. coli KRX expression | high | 1000-10000 | Latent Labs expresses all designed binders for validation: VHH, scFv, mini-binders in E. coli. Each design requires expression and purification for BLI/SPR binding kinetics. They currently run this in-house but with only 23 employees, expression bottleneck is likely constraint. Outsourcing clonal DNA assembly + KRX expression + purification would dramatically accelerate their iteration cycles (currently 56x speedup with Latent-Y, but wet lab remains rate-limiting). VHH and scFv are ideal for E. coli/KRX; mini-binders likely soluble in bacterial host. Ideal customer. |
| Cell-free expression | medium | 100-1000 | Latent Labs already uses human cell-free extracts for ex vivo immunogenicity assessment (mentioned in Latent-X2 paper). They may use CFPS for rapid prototyping of problematic designs or for mammalian display selections. Complementary to E. coli for designs showing toxicity or poor folding, but not primary path. |
| End-to-end binder workflow | high | 100-1000 | Exact match for their validation bottleneck: DNA synthesis → E. coli expression → BLI quantification. Latent Labs currently runs BLI in-house (mentioned in technical reports), but outsourcing the entire workflow (DNA→expr→BLI) would free their bench staff to focus on assay design, data interpretation, and AI feedback loops. High-volume miniprotein/nanobody teams are their ideal user—they generate dozens of candidates per round. Outsourcing full workflow enables 10-50x faster iteration. |

### Key lab contacts

- Rebecca Bartke-Croughan — Wet Lab Lead
- Simon Kohl — Founder & CEO

### Hiring

- **Actively hiring wet-lab roles**:
  - Team page mentions recent additions from DeepMind, Microsoft, Stability AI, Exscientia; rapid hiring expected post-Series A
- Evidence: https://www.latentlabs.com/

## Recommended pitch

Latent Labs is generating hundreds of novel protein sequences per target cycle across macrocycles, mini-binders, and antibodies. Each design requires rapid DNA synthesis, E. coli expression, and binding validation—a workflow we've optimized for protein design teams. We can compress your design-to-validation cycle by outsourcing clonal DNA assembly and KRX expression, freeing your San Francisco bench to focus on biophysical characterization and AI feedback loops. At your current pace (7-18 targets per study), you're likely ordering 1000-5000 short constructs per year. Our pricing ($50/assembly, half incumbent cost) and expression service (direct purification post-culture) are designed for exactly this use case. Let's discuss a pilot: 500 constructs from your next Latent-Y campaign, measured via BLI on our platform, to show you the throughput gain and cost savings.

## Why this score

Latent Labs is an exceptional fit across all service lines. Primary modality (miniprotein/nanobody + antibodies) requires bacterial expression and rapid DNA synthesis—core DNA synthesis house strength. High-volume, short-construct demand (1000-10000 per year estimated). In-house expression is likely becoming bottleneck given 23-person team and growing platform adoption. End-to-end binder workflow is direct match for their validation pipeline. Company is Series A, lean, no vendor lock-in, leadership accessible. Multiple service lines are high-fit; potential for significant volume (~5000+ constructs/year) and long-term partnership (DNA synthesis + protein expression + BLI characterization). Outreach difficulty is low (startup stage, no procurement friction). Recommended engagement window: Q2-Q3 2026, before they mature and develop in-house or exclusive vendor deals.

## Recent signals (24 mo)

- **2025-02** — Emerged from stealth with $50M Series A (Radical Ventures, Sofinnova Partners leads). Announced AI-driven programmable biology platform with wet lab in San Francisco.
- **2025-07** — Launched Latent-X (public platform) with 91-100% macrocycle hit rates and picomolar mini-binder affinities in head-to-head lab validation.
- **2025-12** — Published Latent-X2 technical report: drug-like antibodies with low ex vivo immunogenicity, 50% success rate on 18 targets, picomolar binding affinities.
- **2026-03** — Launched Latent-Y autonomous agent: 67% target success rate, 56x faster than manual workflows, lab-validated across diverse targets.
- **2026-05** — Keynote participation at Synthetic Biology Summit 2026 (Simon Kohl); positioning as leader in autonomous drug discovery.

## Risks / concerns

- Limited public information on commercial partnerships or customer acquisition velocity; no announced pharma partnerships yet (unlike Isomorphic Labs with Eli Lilly/Novartis).
- Wet lab validation at San Francisco scale may become a throughput bottleneck if customer demand exceeds internal capacity; dependency on outsourced DNA/protein synthesis vendors could introduce supply chain friction.
- Platform monetization strategy unclear: free tier may cannibalize paid adoption; enterprise pricing not disclosed.
- Autonomous agent (Latent-Y) is very early (March 2026 launch); real-world user feedback and iterative improvement cycle not yet visible.
- Early-stage team (23 employees); execution risk on scaling wet lab, partnerships, and commercialization simultaneously.
- Regulatory pathway for AI-designed therapeutics not yet tested; no indication of clinical programs in development.
- Competitive landscape includes well-funded entrants (Isomorphic Labs, Generate Biomedicines, Cradle); unclear if Latent Labs' approach (licensing vs. proprietary pipeline) is more sustainable long-term.

## Relevant papers

- [Latent-X: An Atom-level Frontier Model for De Novo Protein Binder Design](https://arxiv.org/abs/2507.19375) — Latent Labs Team (Alex Bridgland et al.), arXiv (2025)  
  _Primary technical validation paper. Reports 91-100% hit rates for macrocycles and 10-64% for mini-binders across 7 benchmark targets, outperforming RFdiffusion, RFpeptides, and AlphaProteo in head-to-head lab validation. Demonstrates all-atom generative design with picomolar binding affinities._
- [Drug-like antibodies with low immunogenicity in human panels designed with Latent-X2](https://arxiv.org/abs/2512.20263) — Latent Labs Team, arXiv (2025)  
  _Validation of Latent-X2 on antibody design with drug-like properties. Demonstrates 50% success rate on 18 diverse targets with picomolar binding affinities, confirmed low ex vivo immunogenicity (first de novo design achieving this), and drug-like developability profiles without iteration._
- [Latent-Y: A Lab-Validated Autonomous Agent for De Novo Drug Design](https://arxiv.org/abs/2603.29727) — Latent Labs Team (Sebastian M. Schmon et al.), arXiv (2026)  
  _Demonstrates autonomous AI agent for end-to-end antibody design from text prompts. 67% target-level success rate on 9 targets with nanomolar affinities, 56x faster than expert manual workflows. Shows scalable deployment pathway._

## Sources

- [Latent Labs — Home](https://www.latentlabs.com/) _[company_site]_
- [Latent Labs secures $50M in funding](https://www.latentlabs.com/press-release/latent-labs-secures-50m-in-funding/) _[company_site]_
- [Platform — Latent Labs (Latent-X)](https://www.latentlabs.com/latent-x/) _[company_site]_
- [Latent-X2 — Latent Labs](https://www.latentlabs.com/latent-x2/) _[company_site]_
- [Latent-Y — Latent Labs](https://www.latentlabs.com/latent-y/) _[company_site]_
- [Simon Kohl — Latent Labs](https://www.latentlabs.com/team/simon-kohl/) _[company_site]_
- [Latent-X: An Atom-level Frontier Model for De Novo Protein Binder Design](https://arxiv.org/abs/2507.19375) _[pubmed]_
- [Drug-like antibodies with low immunogenicity in human panels designed with Latent-X2](https://arxiv.org/abs/2512.20263) _[pubmed]_
- [Latent-Y: A Lab-Validated Autonomous Agent for De Novo Drug Design](https://arxiv.org/abs/2603.29727) _[pubmed]_
- [Founded by DeepMind alumnus, Latent Labs launches with $50M to make biology programmable](https://techcrunch.com/2025/02/12/founded-by-deepmind-alumnus-latent-labs-launches-with-50m-to-make-biology-programmable/) _[press]_
- [Latent Labs Secures $50M in Funding — BusinessWire](https://www.businesswire.com/news/home/20250213198098/en/Latent-Labs-Secures-$50M-in-Funding-to-Realize-the-Potential-of-AI-Powered-Programmable-Biology) _[press]_
- [Introducing Latent-X — BusinessWire](https://www.businesswire.com/news/home/20250722244481/en/Introducing-Latent-X-a-Frontier-Generative-AI-Model-for-Protein-Binder-Design-Accessible-via-No-Code-Platform-for-Push-Button-Protein-Design) _[press]_
- [Latent-Y: The Autonomous AI Agent for Drug Design at Scale — BusinessWire](https://www.businesswire.com/news/home/20260323538522/en/Latent-Y-The-Autonomous-AI-Agent-for-Drug-Design-at-Scale) _[press]_
- [Latent Labs launches web-based AI model to democratize protein design — TechCrunch](https://techcrunch.com/2025/07/21/latent-labs-launches-web-based-ai-model-to-democratize-protein-design/) _[press]_
- [Latentlabs Company Profile — Tracxn](https://tracxn.com/d/companies/latentlabs/) _[crunchbase]_
- [Latent Labs — Crunchbase](https://www.crunchbase.com/organization/latent-labs) _[crunchbase]_
- [Latent Labs Company Profile — PitchBook](https://pitchbook.com/profiles/company/538978-78) _[crunchbase]_
- [Simon Kohl — personal site](https://www.simonkohl.com/) _[other]_
- [Simon Kohl — Google Scholar](https://scholar.google.com/citations?user=58pdkNIAAAAJ&hl=en) _[other]_
- [DeepMind AlphaFold's alumnus raises $40m for Latent Labs](https://www.labiotech.eu/trends-news/latent-labs-ai/) _[press]_
- [AI pioneer Dr Simon Kohl's Latent Labs emerges from stealth, raising $50M](https://tech.eu/2025/02/13/ai-pioneer-dr-simon-kohls-latent-labs-raises-50m/) _[press]_
- [Latent Labs emerges from stealth to accelerate drug discovery](https://www.siliconrepublic.com/start-ups/latent-labs-ai-drug-discovery-simon-kohl) _[press]_

## Confidence & gaps

- **Self-rated confidence**: high
- High confidence based on multiple primary sources: official Latent Labs website, published technical papers (arXiv) with experimental validation, press releases (BusinessWire, TechCrunch, Tech.eu), founder biography, team page, and funding announcements. Company is recent and transparent about its work. Weaknesses are intentional confidentiality (customer list, vendor relationships, financial metrics) rather than data unavailability. Headcount from Tracxn (Feb 2026) is recent and specific. Assessment of DNA/protein synthesis demand is inferred from published validation studies (7-18 targets, 30-100 designs per target) and lab methods described in technical reports (BLI, expression in E. coli), which are highly credible. Customer-fit scoring is based on direct alignment between published workflows and ICP service offerings.
- **Data gaps**:
  - Post-money valuation: Series A valuation not disclosed; Crunchbase/PitchBook data obfuscated.
  - Commercial partnerships: no announced pharma collaborations or licensing deals; unclear customer list or early adopters.
  - Detailed headcount breakdown by function not available; 23 total employees as of Feb 2026, but no org chart.
  - DNA/protein synthesis vendors: Latent Labs does not publicly disclose which vendors they use for DNA synthesis or bulk protein production.
  - Revenue/ARR: no financial metrics disclosed; company is still private and pre-profitability.
  - Clinical development plans: no indication whether Latent Labs plans to advance any designs into IND-enabling studies or clinical programs.
  - Patent filings: no public patent portfolio documented; trade secrets likely protected.

---
_Source brief: `surface_claude/runs/20260513T212306Z_latent_labs/brief.json`_
