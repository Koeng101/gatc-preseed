# Profluent

**Score: 3/5** · (Tier 3 — Cold) · `CRISPR_or_guide` · Stage: series_B · Outreach: moderate · HQ: Emeryville, USA · Founded: 2022

> AI-first frontier protein design platform using large language models to generate novel functional proteins including CRISPR editors, base editors, and custom enzymes.

## What they do

<cite index="1-5,1-23">Profluent is a provider of an artificial intelligence-based protein design platform that uses deep generative models to design novel, functional proteins for use in drug discovery</cite>. <cite index="12-11,12-12">The company is an AI-first company pushing the frontier of de novo protein design to author new biology, grounded in nature with AI as an interpreter, with a powerful foundation model platform that unlocks solutions in medicine, agriculture, and beyond</cite>.

**AI role**: <cite index="2-4">Profluent builds on Ali Madani's work as the architect of the ProGen moonshot at Salesforce AI Research, which demonstrated that large language models (LLMs) can generate functional protein sequences from scratch</cite>. <cite index="11-18,11-19,11-20">The company trained its large protein language model ProGen2 on a custom dataset called the CRISPR–Cas Atlas, mined from 26.2 terabases of microbial genomes, yielding over 1.2 million CRISPR operons and more than 240,000 Cas9 sequences; the model was fine-tuned on Cas-specific sequences and prompted to generate 350,000 synthetic proteins</cite>.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| OpenCRISPR-1 | CRISPR/Base Editor | Precision genome editing; open-source for research and commercial use in therapeutics and agriculture | commercial | — | <cite index="12-1">Publication in Nature describing the design of OpenCRISPR-1, the world's first AI-created genome editor to successfully edit the human genome</cite> (2025-07) |
| ProGen3 | Protein Design Foundation Model | Demonstration of scaling laws for foundation models in writing biology; next-generation protein design | research_only | — | Announced as demonstrating scaling laws for frontier AI models in protein design (2025) |
| Custom Base Editors (via Ensoma partnership) | Base Editor | In vivo hematopoietic stem cell therapies for rare genetic diseases | preclinical | Ensoma | <cite index="1-28">Profluent announces strategic collaboration with Ensoma to develop AI-designed base editors for in vivo hematopoietic stem cell therapies</cite> (2025-12) |
| AI-Driven Gene Editing for Agriculture | CRISPR/Gene Editor | Developing sustainable crops and crop resilience | discovery | Corteva Agriscience | <cite index="1-28">Profluent and Corteva partner on AI-driven gene editing for sustainable crops</cite> (2025-10) |
| AI-Enhanced Base Editing Systems | Base Editor | Research and therapeutic applications for base editing | discovery | Revvity | <cite index="1-28">Revvity and Profluent collaborate to launch AI-enhanced base editing systems</cite> (2025-09) |

## Funding

- **Total raised**: $150.0M
- **Last round**: Series B · $106.0M · 2025-11 · led by Insight Partners, Altimeter Capital (also: Air Street Capital)
- **All rounds**:
  - 2023-01 · Seed · $9.0M · lead —
  - 2024 · Series A · $35.0M · lead —
  - 2025-11 · Series B · $106.0M · lead Insight Partners

## Commercial deals

- **Ensoma** (2025) — upfront —, total potential —. Develop AI-designed base editors for in vivo hematopoietic stem cell therapies for rare genetic diseases
- **Corteva Agriscience** (2025) — upfront —, total potential —. AI-driven gene editing for sustainable crops
- **Revvity** (2025) — upfront —, total potential —. AI-enhanced base editing systems
- **Rett Syndrome Research Trust (RSRT)** (2025) — upfront —, total potential —. AI-designed custom genomic medicines for Rett syndrome

## Founders & key people

- **Ali Madani** — Co-Founder & CEO _(founder)_
  <cite index="2-2,2-3,2-4">Ali is a machine learning researcher with a PhD from UC Berkeley who loves building startups with previous experience as a founder and early employee. Leading up to Profluent, Ali was the architect of the ProGen moonshot at Salesforce AI Research demonstrating to the world that large language models (LLMs) can generate functional protein sequences from scratch</cite>.
- **Alexander Meeske** — Co-Founder _(founder)_
  Co-founder of Profluent Bio (specific background details not available in accessible sources).
- **Hilary Eaton** — Chief Business Officer
  <cite index="2-20,2-21,2-22">Hilary leads all aspects of business development as Chief Business Officer, is a rare disease patient-advocate passionate about developing next-generation genetic medicines with more than a decade driving partnerships at leading gene editing companies including Editas, Vor, and Tome, and received her PhD from Duke University and completed a postdoc at Harvard Medical School / Dana-Farber Cancer Institute</cite>.
- **Andrew (Last name not available)** — Engineering/Bioinformatics Lead
  <cite index="2-5,2-6">Andrew brings over a decade of expertise from Zymergen to Ginkgo Bioworks in developing innovative software solutions for genomics, blending a passion for bioinformatics with cutting-edge engineering, having delivered transformative projects including the creation of DNA design pipelines, optimizing compute and data infrastructure, and creating flexible tools for data tracking and analysis</cite>.
- **Aaron (Last name not available)** — Business Development / Partnerships
  <cite index="2-7,2-8,2-9,2-10,2-11,2-12,2-13">While at Ginkgo, Aaron established new partnerships with Pharma and Biotech from early discovery through process optimization/scale-up. Before joining Ginkgo, Aaron was a Director in Novo Nordisk's Search & Evaluation team for Global Drug Discovery from 2016, where he was hired as their first employee in Boston to establish a presence and set up early partnerships, responsible for the search and evaluation of new therapeutics and enabling technologies for protein, peptide, and antibody drugs, helping Novo Nordisk access over 70 different external opportunities. Prior to Novo Nordisk, Aaron worked in the MIT Technology Licensing Office for 13.5 years, working on license and sponsored research agreements with life sciences companies</cite>.
- **Adeline (Last name not available)** — Lab Automation / Operations
  <cite index="2-14,2-15">Adeline is passionate about providing lab automation solutions to scientists that improve workflow efficiency, scalability, and supports high-quality data generation. Prior to joining Profluent, Adeline has built new automation labs from ground up and led the development of high throughput workflows at leading genetic medicine and cell therapy companies such as Sangamo Therapeutics and Kite Pharma (Gilead)</cite>.

## Customer fit

- **Bench headcount**: 12 (_medium_) — Profluent has ~57 employees as of March 2025. Typical bench structure: Protein/computational design (6–8), Molecular biology/cell culture (3–4), Automation engineering (1–2), QA/analytics (1–2). Remaining are business, finance, IT, admin.
- **Primary modality**: CRISPR_or_guide
- **Expression systems**: Mammalian cell culture (HEK293T documented in OpenCRISPR-1 paper), E. coli (inferred from protein expression needs), Cell-free systems (not explicitly confirmed but typical for protein design houses)
- **In-house DNA synthesis**: unknown
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Profluent generates hundreds to thousands of synthetic protein sequences annually. Each candidate requires plasmid construction for expression testing. Clonal DNA assemblies (<2 kb) for expression cassettes are core to their high-throughput pipeline. Cost-sensitive vendor (e.g., $50/assembly vs. $100+) is attractive at scale. |
| E. coli KRX expression | medium | 100-1000 | Profluent has in-house mammalian cell culture (HEK293T) and automation lab capability for expression. However, soluble bacterial protein (E. coli) is used for early-stage characterization of Cas proteins and other enzymes. Outsourcing E. coli expression is plausible for non-critical batch work or rapid prototyping, but not their primary bottleneck. |
| Cell-free expression | medium | <100 | Cell-free systems can be useful for toxic proteins or rapid turnaround, but Profluent's mammalian cell culture capability (documented in team backgrounds and OpenCRISPR-1 paper) suggests they handle most expression in-house. May use cell-free for specific exploratory protein designs not amenable to mammalian or bacterial expression. |
| End-to-end binder workflow | low | <100 | Profluent's focus is genome editors (CRISPR), base editors, and enzymes—not antibodies or mini-binders. While they may design binders, this is not a core modality and would not drive volume orders. Antigen-binding assays (BLI) are not their primary characterization method. |

### Key lab contacts

- Ali Madani — Co-Founder & CEO
- Hilary Eaton — Chief Business Officer
- Aaron — Business Development / Partnerships

### Hiring

- **Actively hiring wet-lab roles**:
  - No specific roles listed in public accessible data, but team page shows recent additions and exp scaling from Series A to Series B (57 employees as of Mar 2025, ~65 headcount by late 2025 implied).
- Evidence: https://www.profluent.bio/careers

## Recommended pitch

Target DNA synthesis for scale: Position clonal DNA as cost-effective bulk synthesis for Profluent's high-throughput protein design cycles. Emphasize: (a) $50/assembly undercuts Twist/IDT for volumes >100/year, (b) rapid turnaround for iteration-heavy protein design, (c) easy API integration with their design pipelines. Secondary: Offer E. coli KRX expression as supplementary service for early-stage Cas variant characterization (e.g., initial 2–3 top candidates before mammalian scale-up). Reach out to Aaron (partnerships lead) or Hilary (CBD) via partnerships@profluent.bio with a tailored use case: 'We see AI protein design teams ordering 2,000–5,000 short constructs/year; our platform reduces synthesis friction and cost at your scale.'

## Why this score

Profluent is a strong fit for clonal DNA synthesis (high volume, cost-sensitive, short constructs for variant screening) but weak-to-medium fit for expression services (in-house mammalian capability + automation lab). The primary modality (CRISPR/genome editors, enzymes) does require DNA synthesis for candidate plasmid construction, but Profluent's partial in-house protein production and bacterial expression experience limit outsourcing need for E. coli KRX. No binder workflow fit. Series B stage adds moderate outreach friction. Score reflects: (1) strong clonal DNA fit, (2) moderate to low fit on other services, (3) Series B procurement complexity, (4) likely existing vendor relationships not yet exposed.

## Recent signals (24 mo)

- **2025-11** — Profluent raises $106M Series B from Insight Partners, Altimeter Capital, Air Street Capital and 2 others, bringing total funding to $150M
- **2025-12** — Strategic collaboration with Ensoma announced to develop AI-designed base editors for in vivo hematopoietic stem cell therapies
- **2025-12** — Partnership with Rett Syndrome Research Trust (RSRT) to develop AI-designed custom genomic medicines
- **2025-10** — Partnership with Corteva Agriscience for AI-driven gene editing toward sustainable crops
- **2025-09** — Collaboration with Revvity to launch AI-enhanced base editing systems
- **2025-07** — OpenCRISPR-1 published in Nature as the first AI-designed CRISPR system to successfully edit the human genome

## Risks / concerns

- OpenCRISPR-1 open-sourcing may limit commercial IP moat and direct revenue from the CRISPR asset, though Profluent is positioning itself as a custom editor design service partner
- Competitive landscape includes other AI protein design platforms (Generate Biomedicines, Nimbus, Absci); differentiation may erode as more LLM-based tools mature
- Gene editing regulatory pathway and public acceptance remain complex; any off-target editing events or safety signals in partner programs could impact market adoption
- Series B stage with $106M raised; company may need to demonstrate revenue-generating partnerships or product revenue to justify valuation and future funding rounds
- Agricultural applications (Corteva) face regulatory and commercial headwinds; will take time to commercialize and may cannibalize lower-value markets

## Relevant papers

- [Design of highly functional genome editors by modelling CRISPR–Cas sequences](https://www.nature.com/articles/s41586-025-08186-5) — Ruffolo, Nature (2025)  
  _<cite index="12-1,12-15">Profluent published their work on OpenCRISPR-1 in Nature, the highest impact scientific journal, exploring Profluent's approach to AI-enabled protein design as a compelling alternative to directed evolution and structure-guided mutagenesis for engineering novel gene editing systems at scale</cite>._

## Sources

- [Profluent | Home](https://www.profluent.bio/) _[company_site]_
- [Profluent | Team](https://www.profluent.bio/team) _[company_site]_
- [Profluent Announces Publication of Generative AI Research in Nature with New Results for OpenCRISPR-1](https://www.businesswire.com/news/home/20250730820469/en/Profluent-Announces-Publication-of-Generative-AI-Research-in-Nature-with-New-Results-for-OpenCRISPR-1) _[press]_
- [Profluent's OpenCRISPR-1 published in Nature magazine](https://press.airstreet.com/p/profluent-opencrispr-1-nature-magazine) _[press]_
- [GitHub - Profluent-AI/OpenCRISPR](https://github.com/Profluent-AI/OpenCRISPR) _[other]_
- [Profluent Bio - 2026 Company Profile, Team, Funding & Competitors - Tracxn](https://tracxn.com/d/companies/profluentbio/__jvz-soeG7YL_7qouGR-1oOsswjaEx6ffLnvbi6XXHh0) _[other]_
- [Profluent Modalities | Gene Editing](https://www.profluent.bio/modality/opencrispr) _[company_site]_
- [Profluent's AI-Designed Gene Editor Glimpses into Generalizable Platform](https://www.genengnews.com/topics/artificial-intelligence/profluents-ai-designed-gene-editor-glimpses-into-generalizable-platform/) _[press]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on company basics (founding, HQ, founders, funding rounds, OpenCRISPR-1 publication, recent partnerships). Medium confidence on headcount detail (57 employees as of Mar 2025, ~65 by late 2025 estimated) and team backgrounds (some team members on website lack full surnames). Low confidence on Alexander Meeske background, internal synthesis/expression capabilities, and exact Series A terms. Customer fit assessment is reasoned but not validated by direct customer reference calls; synthesis volume estimates are inferred from typical AI protein design company workflows.
- **Data gaps**:
  - Alexander Meeske full background (education, prior roles) not publicly available
  - Exact Series A round amount and date (noted as ~$35M in 2024, but specific month unclear)
  - Internal DNA or protein synthesis capabilities—degree of in-house vs. outsourced not explicitly stated
  - Specific headcount breakdown by function (bench, clinical, admin, etc.)
  - Known synthesis vendors currently used by Profluent
  - Commercial deal terms (upfronts, milestones, totals) for Ensoma, Corteva, Revvity, RSRT
  - Public hiring/open roles as of May 2026 (careers page exists but specific roles not indexed)
  - Grant or non-dilutive funding (e.g., NSF, ARPA-H, DOE for agriculture—no data found)

---
_Source brief: `surface_claude/runs/20260513T212302Z_profluent/brief.json`_
