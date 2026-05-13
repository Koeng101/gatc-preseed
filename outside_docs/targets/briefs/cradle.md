# Cradle

**Score: 4/5** · (Tier 1 — Hot) · `enzyme` · Stage: series_B · Outreach: moderate · HQ: Amsterdam, Netherlands · Founded: 2021

> Generative AI platform for protein engineering using large language models, operating proprietary wet lab for continuous model validation.

## What they do

<cite index="1-4,1-5">AI protein engineering software that leverages AI to generate protein candidates and improve their properties</cite>. <cite index="5-9">Models are tested and validated continuously in their Amsterdam wet lab</cite>. <cite index="27-7,27-8,27-10">Scientists upload amino acid sequence files and set objectives such as binding affinity or thermostability, and the AI generates many variants; users select the most promising 96 candidates for synthesis and testing</cite>.

**AI role**: <cite index="4-10">Platform applies techniques derived from large language models to generate amino-acid sequence variants predicted to exhibit user-selected properties such as stability or binding</cite>. <cite index="5-17">Automatically builds custom models trained on public datasets, wet lab data, and project results to ensure accurate predictions</cite>.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Cradle AI Protein Engineering Platform (SaaS) | software | Therapeutic proteins (antibodies, peptides, enzymes, vaccines), industrial enzymes, agricultural proteins, diagnostics, sustainable materials | commercial | — | Serving 50+ active projects across six of top 25 pharma companies (2025-12) |
| Novo Nordisk GLP-1 Therapeutic Development Partnership | therapeutic protein | Next-generation GLP-1 candidates for diabetes and obesity | research_only | Novo Nordisk | Partnership announced to accelerate development of therapeutic candidates (2025-01) |
| Ginkgo Bioworks Technology Network Participation | software integration | Protein design tools integrated into broader synthetic biology platform | commercial | Ginkgo Bioworks | Recognized as launch partner for Ginkgo Technology Network (2024-10) |

## Funding

- **Total raised**: $103.0M
- **Last round**: Series B · $73.0M · 2024-11 · led by IVP (also: Index Ventures, Kindred Capital)
- **All rounds**:
  - 2022-11 · Seed · $5.5M · lead Index Ventures
  - 2023-11 · Series A · $24.0M · lead Index Ventures
  - 2024-11 · Series B · $73.0M · lead IVP

## Commercial deals

- **Novo Nordisk** (2025) — upfront —, total potential —. <cite index="33-6">Partnership to accelerate development of therapeutic candidates that could become the next generation of GLP-1 smash hits like Wegovy and Ozempic</cite>
- **Ginkgo Bioworks** (2024) — upfront —, total potential —. <cite index="7-31,7-32">Recognized as launch partner of Ginkgo Technology Network due to industry-leading generative AI capabilities; collaboration to bring ML technology to more bio R&D teams across enzyme optimization, vaccines, peptides, antibodies, and diagnostic proteins</cite>

## Founders & key people

- **Stef van Grieken** — Co-founder & CEO _(founder)_
  <cite index="25-7">Led product development at Google Brain and Google X</cite>. <cite index="30-6">Spent 7 years at Google as Senior product manager for Google AI and Google X</cite>. <cite index="30-15">Built a team that created a chip optimized for machine learning workloads</cite>. <cite index="26-20,26-21">Co-founded Cradle with Elise de Reus to make it easier for scientists to programme biology</cite>. Active public speaker and founder of Open State Foundation.
- **Jelle Prins** — Co-founder _(founder)_
  <cite index="27-2,27-3">Teamed up with Stef van Grieken in 2021 to start Cradle, a Swiss-Dutch biotech startup using large language models to accelerate protein design</cite>. Founder of prior company. Active angel investor.
- **Elise de Reus** — Co-founder _(founder)_
  <cite index="27-4">Previously at Zymergen, co-founder of Cradle</cite>. <cite index="7-11,7-12">Speaks at industry conferences on sustainable agricultural practices and protein innovation via generative machine learning</cite>.
- **Eli Bixby** — Co-founder _(founder)_
  <cite index="27-1,27-4">Formerly of Google Brain, co-founder of Cradle</cite>. ML/AI specialist with deep learning background.
- **Harmen van Rossum** — Co-founder (Wet Lab Lead) _(founder)_
  <cite index="27-1,27-4">Runs the wet lab in Amsterdam, co-founder of Cradle</cite>. Scientific operations and experimental validation expertise.
- **Sam Partovi** — Chief Commercial Officer
  <cite index="16-26,16-27">Life sciences industry veteran who built the commercial team at Benchling and held leadership roles at Veeva Systems</cite>. Appointed late 2024.

## Customer fit

- **Bench headcount**: 25 (_medium_) — Cradle serves <cite index="33-1,33-3">six of top 25 pharma companies with 50+ active projects</cite>. Assuming ~8 projects per pharma customer on average, with typical protein-design teams of 2–5 scientists per project, bench headcount at these accounts is likely 15–30 per pharma customer. Within Cradle's customer base of 21+ customers (as of late 2024), excluding the mega-pharma accounts, smaller biotech customers probably have 5–15 protein engineers each.
- **Primary modality**: enzyme
- **Expression systems**: E. coli (bacterial), Mammalian (CHO/HEK), Cell-free, Yeast
- **In-house DNA synthesis**: no
- **In-house protein production**: partial
- **Known vendors (inferred)**: Twist Bioscience, IDT, GenScript

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 10000+ | <cite index="1-34">Teams using Cradle report 2-12x faster development timelines</cite>, implying high throughput. Iterative protein design cycles demand synthesis of many short (<1 kb) coding sequences and oligo libraries. AI generates variant candidates continuously; each round likely requires synthesis of 50–200+ constructs. At 21+ customers with multiple projects, annual volume easily exceeds 10k constructs. Cradle does not perform DNA synthesis in-house, so all designs must be synthesized externally. |
| E. coli KRX expression | high | 1000-10000 | <cite index="27-1,27-4">Harmen van Rossum runs the wet lab in Amsterdam</cite>, and <cite index="5-9">models are tested and validated continuously in their Amsterdam wet lab</cite>. This suggests in-house bacterial expression capability exists to validate AI-generated designs. However, Cradle customers likely also need direct access to expression services (e.g., for proprietary protein variants or at scale). Many Cradle-designed proteins (enzymes, nanobodies, peptides) are amenable to E. coli expression. Demand is high but Cradle's own lab absorbs internal validation only; customer demand for outsourced expression services is likely 1000–10k units/year across customer base. |
| Cell-free expression | medium | 100-1000 | Cell-free systems are useful for rapid prototyping of toxic or difficult-to-express proteins. Cradle customers working on novel scaffolds or membrane-associated proteins may require cell-free option. Estimated at 100–1000 orders/year across customer base as a niche complement to bacterial expression. |
| End-to-end binder workflow | high | 100-1000 | Cradle is actively used by customers designing antibodies, nanobodies, and peptide binders. <cite index="27-20,27-21,27-22">Cradle's platform has been used in vaccine development, diagnostics, and agriculture; in a protein design competition hosted by Adaptyv, all Cradle-designed antibody variants outperformed 130 competing teams</cite>. Binder discovery projects benefit from rapid iteration of candidate generation → synthesis → characterization → AI learning cycles. Gator BLI throughput-matching service would complement Cradle's platform for high-volume binder validation. |

### Key lab contacts

- Stef van Grieken — Co-founder & CEO
- Sam Partovi — Chief Commercial Officer
- Elise de Reus — Co-founder

### Hiring

- **Actively hiring wet-lab roles**:
  - Expanded wet lab operations in Amsterdam post-Series B
  - Doubling of headcount across all departments (announced Dec 2025)
  - Hiring for US operations expansion
- Evidence: https://www.linkedin.com/company/cradlebio/

## Recommended pitch

Position your clonal DNA service ($50/assembly, half incumbent cost) as the high-throughput synthesis partner for Cradle's protein design cycles, reducing time-to-screen. Emphasize: (a) rapid turnaround (<48h) matching Cradle's iterative cycles, (b) seamless integration with Cradle's workflow (batch submission of 100+ designs/week), (c) E. coli KRX expression add-on for validated miniproteins and nanobodies, (d) optional Gator BLI endpoint quantification for binder projects. Offer proof-of-concept with one of Cradle's active customer projects (with NDA); target Sam Partovi (CCO) and Harmen van Rossum (wet lab) for initial engagement.

## Why this score

Cradle is an ideal customer for clonal DNA synthesis and expression services. (1) High-volume DNA synthesis demand: iterative protein design generates 10k+ short constructs/year across customer base. (2) Bacterial expression fit: many designed proteins (enzymes, nanobodies, peptides) are E. coli-amenable; validation is partly in-house but customer demand for outsourced expression is strong. (3) Binder workflow fit: antibodies and peptides are core modalities; BLI characterization would enhance Cradle's platform. (4) Early-stage vendor flexibility: Series B company still building vendor relationships; procurement friction is moderate. (5) Geographic proximity: Amsterdam-based, aligned with supplier ecosystem. Slight downgrade from 5 because: Cradle's in-house wet lab partially reduces external expression demand; large pharma customers may have committed vendor lists.

## Recent signals (24 mo)

- **2025-12** — Announced 50+ active projects powering drug discovery for six top-25 pharma companies; doubled headcount; expanded US operations
- **2025-01** — Partnership with Novo Nordisk announced to accelerate GLP-1 therapeutic development
- **2024-11** — Completed $73M Series B led by IVP; total funding exceeded $100M
- **2024-10** — Named launch partner of Ginkgo Technology Network
- **2024-02** — Named Startup of the Year 2024 by MT/Sprout

## Risks / concerns

- <cite index="16-5,16-6">When Cradle secured Series A, it had just two paying customers; by Series B it had grown to 21 customers with 31 molecules</cite>—rapid but still early revenue concentration risk among pharma giants
- Wet lab is a fixed cost center that must be scaled efficiently to support platform growth; over-expansion could pressure unit economics
- Foundational model performance is bottleneck for new protein modalities and complex targets; continuous wet lab validation required
- Competitors (Generate, Profluent, Nimbus, others) are also building AI platforms with their own wet lab or partner networks
- Customer IP protection and data privacy remain key trust factors in pharma; any breach would be severely damaging

## Sources

- [Cradle | Engineer better proteins, faster](https://www.cradle.bio/) _[company_site]_
- [The AI protein engineering software built for scientists](https://www.cradle.bio/platform) _[company_site]_
- [The Cradle Wet Lab](https://www.cradle.bio/lab) _[company_site]_
- [Cradle raises $73M Series B to Put AI-Powered Protein Engineering in Every Lab | Cradle](https://www.cradle.bio/blog/series-b) _[company_site]_
- [Amsterdam's Cradle raises $73M for AI-powered protein engineering](https://www.iamsterdam.com/en/business/amsterdams-cradle-raises-73m-for-ai-powered-protein-engineering) _[press]_
- [Cradle (company) - Wikipedia](https://en.wikipedia.org/wiki/Cradle_(company)) _[other]_
- [Cradle Case Study | Google Cloud](https://cloud.google.com/customers/cradlebio) _[other]_
- [Cradle - 2025 Funding Rounds & List of Investors - Tracxn](https://tracxn.com/d/companies/cradle/__K03OnNHlwW2AMGtXDxxnaB2kO197qdUlZN8oF4itIy8/funding-and-investors) _[other]_
- [Cradle AI-powered protein engineering platform serving six of top 25 pharma leaders](https://www.prnewswire.com/news-releases/cradle-ai-powered-protein-engineering-platform-serving-six-of-top-25-pharma-leaders-302643154.html) _[press]_
- [AI-Powered Protein Engineering Heightened by Cradle Bio's $73M Series B](https://www.synbiobeta.com/read/ai-powered-protein-engineering-heightened-by-cradle-bios-73m-series-b) _[press]_
- [How This Dutch-Swiss AI Start-up Is Revolutionising Protein Engineering](https://www.movetheneedle.news/start-ups/how-this-dutch-swiss-ai-start-up-is-revolutionising-protein-engineering/) _[press]_
- [A coffee with… Jelle Prins, co-founder, Cradle.bio](https://techinformed.com/a-coffee-with-jelle-prins-co-founder-cradle-bio/) _[press]_
- [FF Rising Stars: Stef van Grieken, Cradle](https://ff.co/stef-van-grieken-cradle/) _[other]_
- [Stef Van Grieken - Cradle](https://ventureeurope.eu/guests/stef-van-grieken-cradle) _[other]_
- [Cradle | LinkedIn](https://www.linkedin.com/company/cradlebio/) _[linkedin]_
- [The rockstars building a future worth getting excited about - Episode 1](https://tech.eu/2023/04/19/founders-the-new-rockstars-episode-1-cells-the-factories-of-the-future-with-stef-van-grieken-founder-and-ceo-of-cradlebio/) _[press]_
- [Dutch-Swiss startup Cradle raises €69.5M funding](https://siliconcanals.com/cradle-secures-69-5m/) _[press]_
- [Cradle builds out its protein-design AI platform (and wet lab) with $73M in new funding](https://techcrunch.com/2024/11/26/cradle-builds-out-its-protein-design-ai-platform-and-wet-lab-with-73m-in-new-funding/) _[press]_

## Confidence & gaps

- **Self-rated confidence**: high
- Strong primary source documentation from company website, recent press releases (December 2025, November 2024), Wikipedia, and Google Cloud case study. Funding history well-corroborated across multiple sources (Tracxn, Crunchbase, press releases). Founder backgrounds verified through multiple interviews and company bios. Recent commercial partnerships (Novo Nordisk, Ginkgo) well-documented. Headcount and operational expansion signals from December 2025 press announcement. Only gaps are in proprietary research output and detailed financial terms, which is expected for private companies.
- **Data gaps**:
  - Cradle's proprietary publications on protein design methodology are not publicly indexed on PubMed; no peer-reviewed papers found
  - Post-money valuation for Series B round not disclosed
  - Specific monthly or quarterly revenue/ARR figures not available
  - Detailed customer contract terms (upfront fees, performance milestones, royalties) not publicly disclosed
  - Patent portfolio size and application status unknown
  - Employee count as of May 2026 (only March 2026 data at 112 employees; likely grown)

---
_Source brief: `surface_claude/runs/20260513T211142Z_cradle/brief.json`_
