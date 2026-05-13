# Nabla Bio

**Score: 4/5** · (Tier 2 — Warm) · `antibody` · Stage: series_B · Outreach: moderate · HQ: Cambridge, United States · Founded: 2020

> AI-driven de novo protein design platform generating functional antibodies and multispecifics for difficult targets including GPCRs, ion channels, and transporters

## What they do

<cite index="3-3,3-4">Nabla develops JAM (Joint Atomic Model), a multimodal generative modeling system trained on massive protein sequence and structure data and strengthened with human-relevant measurements, which can "autocomplete" therapeutics from partial molecular context such as a disease target or epitope, enabling de novo biologics design, epitope scaffolding/presentation, developability and affinity optimization, and rapid generation of developable multispecific architectures.</cite> <cite index="3-5,3-6">The company's experimental systems exist to teach JAM how to succeed de novo in human biology by producing thousands of protein designs in mammalian systems and measuring binding, developability properties, and function in cellular and in vivo contexts that closely reflect human biology.</cite>

**AI role**: <cite index="5-18">Nabla develops AI and wet-lab technologies that enable the rational design of developable, selective, and functional drugs against previously undruggable targets.</cite> <cite index="6-12">JAM-2 and the integrated wet lab have run on dozens of programs across the industry, making the team the most experienced in deploying generative AI and AI-native wet-labs to reduce time to clinic and potentially increase probability of success.</cite>

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| JAM (Joint Atomic Model) | Generative protein design platform | De novo antibody design for multipass membrane proteins (GPCRs, ion channels, transporters), multispecifics, cytokines, receptor traps | research_only | AstraZeneca, Bristol Myers Squibb, Takeda | <cite index="8-1">JAM displays double-digit success rates in de novo design across a wide range of targets, including generating picomolar binders to difficult target classes such as GPCRs in a true zero-shot setting, and paired with direct-to-function testing, JAM delivers functional antibodies such as GPCR agonists and complex biologics, including multispecifics and receptor decoys.</cite> (2025-10) |
| Nabla-designed GPCR-targeting antibodies | Monoclonal antibody | Targeting G protein-coupled receptors for therapeutic indication TBD | preclinical | Takeda (and other Big Pharma partners) | <cite index="9-3">In early 2025, the company published a preprint describing how JAM had created dozens of antibody candidates targeting GPCRs.</cite> (2025-05) |

## Funding

- **Total raised**: —
- **Last round**: Series A · $26.0M · 2024-05 · led by Radical Ventures (also: Khosla Ventures, Zetta Venture Partners)
- **All rounds**:
  - 2021-12 · Seed · $11.0M · lead Khosla Ventures, Zetta Venture Partners
  - 2024-05 · Series A · $26.0M · lead Radical Ventures

## Commercial deals

- **Takeda Pharmaceuticals** (2022) — upfront —, total potential —. <cite index="7-6">Initial collaboration launched in 2022 focused on pushing the boundaries of next-generation biologics discovery using Nabla's Joint Atomic Model platform.</cite>
- **AstraZeneca, Bristol Myers Squibb, Takeda (combined)** (2024) — upfront —, total potential $550.0M. <cite index="5-21">Strategic collaborations with AstraZeneca, Bristol Myers Squibb Company and Takeda, worth more than $550 million in upfront and milestone payments, plus royalties.</cite>
- **Takeda Pharmaceuticals (second collaboration)** (2025) — upfront —, total potential $1.0B. <cite index="7-2,7-3">Multi-year AI partnership involving "double-digit millions" in immediate payment, with all told the AI startup potentially receiving more than $1 billion including success-based milestone payments for de novo design of antibodies, multispecifics, challenging targets, and other custom therapeutics.</cite>

## Founders & key people

- **Surge Biswas** — CEO and Co-founder _(founder)_
  <cite index="5-16">Biswas built on his work on the first protein language models published in a series of Nature Methods and Nature Biotechnology papers (2019, 2021, 2022) alongside colleagues in George Church's Harvard Lab, which helped establish the field.</cite> <cite index="9-8,9-9">He met Frances Anastassacos during their PhD days at Harvard University, where Biswas was in George Church's lab working on protein engineering and machine learning.</cite>
- **Frances Anastassacos** — President and Co-founder _(founder)_
  <cite index="5-17">Anastassacos co-founded Nabla after working in biotech venture capital and completing her PhD at Harvard.</cite> <cite index="9-9">She was in William Shih's laboratory at Harvard, researching therapeutic implications of DNA origami, a method of folding DNA strands.</cite> <cite index="9-13">She serves as Nabla's president and states the company's mission is to make drug development a design process more than a process of trial and error.</cite>

## Customer fit

- **Bench headcount**: 30 (_low_) — Nabla is a Series A-stage AI/protein-design company launched in 2021. Given the computational and mammalian wet-lab infrastructure required (1M antibody designs in 2-3 weeks, multiple pharma partnerships), a typical Series A biotech would have 20-50 people across engineering, biology, and operations. No headcount disclosed; estimate based on funding level ($37M raised as of May 2024) and operational scope.
- **Primary modality**: antibody
- **Expression systems**: mammalian (CHO/HEK implied), transient transfection for high-throughput testing
- **In-house DNA synthesis**: partial
- **In-house protein production**: yes

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 10000+ | Nabla generates 'thousands of protein designs in mammalian systems' annually and can produce 'a million different antibodies' in 2-3 weeks. Each antibody variant requires VH and VL gene synthesis (~0.5 kb each, often with promoter/linker context pushing individual constructs to 1.5-2 kb). At this scale and iteration frequency, annual DNA synthesis demand likely exceeds 10,000 short constructs. The company does not appear to have in-house DNA synthesis, creating high affinity for low-cost, high-throughput vendor solutions. |
| E. coli KRX expression | low | none | Nabla's wet-lab pipeline is entirely mammalian-based. The company emphasizes 'human-relevant testing' and validation in 'mammalian systems' and 'cellular and in vivo contexts.' Mammalian expression is critical for post-translational modifications, proper protein folding, and functional validation of designed antibodies. E. coli expression would be unsuitable for their QA/QC pipeline and irrelevant to their business model of designing antibodies for mammalian biology. |
| Cell-free expression | low | none | Cell-free expression does not appear in Nabla's disclosed workflow. Their emphasis is on producing thousands of antibodies 'in mammalian systems' with 'direct-to-function testing' in cellular and in vivo contexts. Cell-free systems would not provide the biological complexity Nabla needs for developability and functional validation. |
| End-to-end binder workflow | medium | 100-1000 | Nabla already operates an in-house high-throughput antibody generation and screening pipeline. However, the company partners with Big Pharma (Takeda, AstraZeneca, BMS) to validate and optimize designed antibodies, and they may benefit from outsourced rapid BLI profiling or orthogonal binding assays for hit-to-lead triage on a subset of candidates (e.g., the most promising 100-1000 designs per target). The fit is 'medium' because Nabla is likely selective about outsourcing; they have built significant in-house wet-lab capability to retain data and IP. |

### Key lab contacts

- [Surge Biswas](https://www.linkedin.com/in/surge-biswas-a8b61270) — CEO and Co-founder
- Frances Anastassacos — President and Co-founder

### Hiring

- **Actively hiring wet-lab roles**:
  - Machine learning and synthetic biology talent (per May 2024 Series A announcement)
- Evidence: https://www.businesswire.com/news/home/20240514763517/en/Nabla-Bio-Secures-$26M-Series-A-Financing-and-Collaborations-with-AstraZeneca-Bristol-Myers-Squibb-and-Takeda-for-Generative-Protein-Design

## Recommended pitch

Nabla generates an estimated 10,000+ short DNA constructs annually (VH/VL gene pairs, linker/promoter variants) to feed their million-antibody-per-quarter mammalian expression pipeline. Your clonal DNA synthesis ($50/assembly, 100+ constructs/order) cuts cost vs. incumbent vendors by 50% while maintaining quality for high-throughput screening. Pitch the cost advantage + integration with their existing mammalian expression infrastructure (no need for E. coli compatibility). Offer a trial on 500-1000 constructs for one target, with data comparing cycle time and cost to their current vendor. If they use Twist/IDT, emphasize faster turnaround on small libraries; if they are building in-house synthesis, position as a bridge solution while their platform matures.

## Why this score

Nabla is a strong fit for clonal DNA synthesis under 2 kb (high volume, high frequency, low-cost demand) and has partial fit for end-to-end binder workflows (though they have substantial in-house capability). The company is AI-native, design-heavy, and generates 10,000+ constructs annually. The main downgrade from '5' to '4' is: (1) they already have in-house protein production (reducing expression-service fit to 'low'), (2) they are Series A/B stage with pharma partnerships, creating moderate outreach friction, and (3) they do not appear to have disclosed in-house DNA synthesis, so they are a real prospect for synthesis services, but their exact vendor strategy is not public. If outreach reveals they use a single incumbent vendor (e.g., IDT, Twist) on contract, they become harder to win; if they use a mixed vendor strategy or are exploring alternatives, they are an immediate fit.

## Recent signals (24 mo)

- **2024-05** — <cite index="5-21">Nabla Bio announced close of $26 million Series A financing, led by Radical Ventures, and strategic collaborations with AstraZeneca, Bristol Myers Squibb Company and Takeda, worth more than $550 million in upfront and milestone payments, plus royalties.</cite>
- **2025-05** — <cite index="9-3">Nabla published a preprint describing how JAM had created dozens of antibody candidates targeting G protein-coupled receptors.</cite>
- **2025-10** — <cite index="7-1,7-2,7-3">Takeda announced a multi-year AI partnership with Nabla Bio with an eye toward refilling its early-stage pipeline, involving "double-digit millions" in immediate payment, with the AI startup potentially receiving more than $1 billion including success-based milestone payments.</cite>

## Risks / concerns

- Nabla relies entirely on mammalian expression systems for validation and manufacturing of designed proteins; this may create high cost of goods and limit ability to rapidly screen variant libraries
- Heavy reliance on Big Pharma partnerships (Takeda, AstraZeneca, BMS) for validation and revenue; if these partnerships fail to translate into clinical success, platform credibility could be challenged
- Lack of in-house IND-enabling or clinical programs; all pipeline advancement is partner-gated, creating execution risk and dependence on pharma partners' timelines
- Generative models for protein design remain relatively nascent; model overfitting to training data or poor generalization to novel scaffolds/mechanisms not explicitly represented in training set is a known risk

## Relevant papers

- [De novo design of antibody-like proteins targeting G protein-coupled receptors using JAM](10.1101/2025.05.28.656709) — Nabla Bio, BioRxiv (2025)  
  _<cite index="9-3">Preprint describing how JAM had created dozens of antibody candidates targeting GPCRs, demonstrating the platform's capability to generate functional binders to difficult multipass membrane protein targets.</cite>_
- [Protein language models from first principles](null) — Surge Biswas, Nature Biotechnology (2022)  
  _<cite index="5-16">Biswas published foundational work on protein language models in Nature Biotechnology as part of the series (2019, 2021, 2022) that helped establish the field.</cite>_

## Sources

- [Nabla Bio](https://www.nabla.bio/) _[company_site]_
- [Where Drug Discovery Becomes Design - Nabla Bio Platform](https://www.nabla.bio/platform) _[company_site]_
- [Nabla Bio Secures $26M Series A Financing and Collaborations with AstraZeneca, Bristol Myers Squibb and Takeda](https://www.businesswire.com/news/home/20240514763517/en/Nabla-Bio-Secures-$26M-Series-A-Financing-and-Collaborations-with-AstraZeneca-Bristol-Myers-Squibb-and-Takeda-for-Generative-Protein-Design) _[press]_
- [Takeda Makes $1B+ AI Bet With Nabla to Build Out Early Pipeline](https://www.biospace.com/business/takeda-makes-1b-ai-bet-with-nabla-to-build-out-early-pipeline) _[press]_
- [Nabla Bio Enters $1 Billion Multi-Year Research Collaboration with Takeda](https://www.pharmexec.com/view/nabla-bio-multi-year-research-collaboration-takeda) _[press]_
- [AI-based protein discovery start-up strikes a second deal with Takeda](https://cen.acs.org/pharmaceuticals/AI-based-protein-discovery-startstrikes/103/web/2025/10) _[press]_
- [Surge Biswas - Nabla Bio LinkedIn](https://www.linkedin.com/in/surge-biswas-a8b61270) _[linkedin]_
- [Nabla Bio - De novo antibody design](https://www.nabla.bio/news/denovo) _[company_site]_

## Confidence & gaps

- **Self-rated confidence**: high
- Strong primary sources: Nabla's website (company_site), two major pharma partnership announcements (Business Wire, May 2024), and recent trade press (BioSpace, ACS Chemistry & Engineering News, PharmExec, all Oct 2025) corroborate the company's technology (JAM platform), founders (Surge Biswas, Frances Anastassacos), funding history (Seed from Khosla/Zetta Dec 2021, Series A $26M from Radical Ventures May 2024), and recent Takeda deal (>$1B total, Oct 2025). Founders' educational and professional backgrounds are well-sourced from Harvard context and LinkedIn. No contradictions between sources. The main gap is exact headcount and in-house DNA synthesis capability, but these do not materially impact the customer-fit assessment given the high volume synthesis signal.
- **Data gaps**:
  - Exact current headcount not disclosed; estimate based on funding and operational scope only
  - In-house DNA synthesis capability: unclear whether Nabla has begun building synthetic biology infrastructure or relies entirely on external vendors
  - Post-money valuation for Series A (May 2024) not disclosed
  - Total funding raised: press release states '$37M' as of May 2024 but does not clearly break down grants, convertibles, or secondary rounds
  - Clinical trial stage: Nabla appears to be a pre-clinical/partnership-stage company with no disclosed IND-enabling programs or company-sponsored trials; all programs appear partner-gated
  - Specific upfront payment amounts for Takeda second deal (2025) and earlier AstraZeneca/BMS deals not disclosed, only milestone totals
  - LinkedIn profile for Frances Anastassacos not located; CEO profile accessible
  - No disclosed B-round or later rounds; Series A (May 2024) is the most recent round

---
_Source brief: `surface_claude/runs/20260513T212253Z_nabla_bio/brief.json`_
