# Matwings Technology

**Score: 3/5** · (Tier 3 — Cold) · `enzyme` · Stage: seed_to_series_A · Outreach: moderate · HQ: Shanghai, China · Founded: 2021

> Shanghai-based AI-driven protein design platform company using language models to predict protein function and engineer optimized proteins for pharmaceuticals, diagnostics, and synthetic biology.

## What they do

<cite index="3-3,3-7,3-8">Matwings pioneers AI-based protein design with AccelProtein™, a proprietary general protein design platform trained on 780 million curated full-length protein sequences, enabling engineering of proteins and de novo design of novel proteins with improved stability, activity, affinity, and yield.</cite> <cite index="3-9,3-10">The company has engineered more than 30 proteins either proprietary or co-developed with stakeholders, with more than 40 ongoing projects across pharmaceutical and synthetic biology applications including enzymes, biologics, and synthetic biology components.</cite>

**AI role**: <cite index="3-3">AccelProtein™ directly predicts protein functionality beyond structural data</cite>, moving beyond structure-only prediction to function-aware design. <cite index="3-5,3-6">The platform is built on the Pro-PRIME model, a breakthrough developed by Professor Liang Hong at Shanghai Jiao Tong University after years of research focused on data collection, curation, and optimization.</cite> <cite index="5-1">MatwingsVenus™ is a lightweight R&D closed-loop platform integrating AI biological design, wet-lab validation, and expert collaboration.</cite>

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| AccelProtein™ | AI protein design platform | General protein engineering for enzymes, biologics, synthetic biology | commercial | — | <cite index="3-11">Science Advances publication: 'A General Temperature-Guided Language Model to Design Proteins of Enhanced Stability and Activity'</cite> (2024-11) |
| MatwingsVenus™ | Conversational protein R&D platform | Wet-dry closed-loop protein design for researchers and corporate R&D | commercial | — | <cite index="5-5">Validation in 30+ industrial projects with AI directed evolution capabilities</cite> (—) |
| Proprietary enzyme library | Engineered proteins | CMC, diagnostics, synthesis enzymes | commercial | — | <cite index="9-4,9-5">Since 2021, completed 30+ protein-engineering projects including Enterokinase, Carboxypeptidase B, KEX2 Protease, Maltogenic Amylase, Subtilisin, Protein A, PETase, T7 RNA Polymerase, and phi29 DNA Polymerase</cite> (—) |

## Funding

- **Total raised**: $29.0M
- **Last round**: Series A · — · 2024-12 · led by Qiming Venture Partners (also: 3E Bioventures, GSR United Capital, Yonghua Capital, SDIC CMC Investment Management)

## Commercial deals

- **Jinsai Pharmaceuticals (Jin Sai Pharma)** (2024) — upfront —, total potential —. <cite index="14-11,14-12">Alkali tolerance modification of single-domain antibodies achieving 4x improvement in <1 year; scaled to 5000L production batches as first large-model-designed protein at commercial scale</cite>
- **In vitro diagnostic company (unnamed)** (2024) — upfront —, total potential —. <cite index="3-12,3-13,3-14">Glycosyltransferase enzyme design for EPS-G7 pancreatitis screening: 7x glycosylation activity increase, 98% product specificity, 33% hydrolytic activity reduction, 90% cost reduction</cite>
- **Affinity chromatography company** (2024) — upfront —, total potential —. <cite index="3-15,3-16,23-15">Super alkali-resistant nanobody engineering: 3x alkali resistance, 100%+ binding capacity, 8°C heat stability improvement; scale-up to 5000L with millions in CMC cost savings</cite>

## Founders & key people

- **Liang Hong** — Founder, Lead Scientist _(founder)_
  <cite index="16-1,16-2">Professor Hong joined Shanghai Jiao Tong University as independent PI in 2015 conducting molecular biophysics research; in 2020 began combining AI, computing, and wet experiments for protein design.</cite> <cite index="12-1">Led collaborative team from Natural Sciences Research Institute, School of Physics and Astronomy, School of Pharmacy, and multiple other institutions.</cite> <cite index="3-11">Published 'A General Temperature-Guided Language Model to Design Proteins of Enhanced Stability and Activity' in Science Advances.</cite> <cite index="16-20">Currently leads team managing 40+ simultaneous projects with focus on AI-driven protein engineering.</cite>

## Customer fit

- **Bench headcount**: 25 (_low_) — Matwings operates as an AI-first protein engineering platform with in-house wet-lab infrastructure. Public sources cite ~2-3 core researchers (Prof. Hong + 1-2 dedicated staff) managing 40+ ongoing projects, suggesting significant support team. Likely 10-15 in computational/ML roles, 10-15 in wet-lab (expression, purification, characterization), 5-10 in business/operations. No confirmed headcount data.
- **Primary modality**: enzyme
- **Expression systems**: E. coli (inferred from proprietary enzyme portfolio: T7 RNA Polymerase, phi29 DNA Polymerase, PETase, etc.), Mammalian/CHO (inferred from nanobody and antibody engineering projects), Cell-free (implied by high-throughput protein production platform)
- **In-house DNA synthesis**: no
- **In-house protein production**: yes

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | <cite index="3-9,3-10">30+ completed projects and 40+ ongoing projects</cite> with iterative design-build-test cycles suggest continuous demand for short construct synthesis. Each protein engineering project typically requires 10-50 variants per round; 40 projects × 20-30 variants/year ≈ 800-1200 constructs/year minimum. AI-driven design generates many sequences per cycle. No in-house synthesis capability, so likely outsourcing clonal DNA assembly. |
| E. coli KRX expression | medium | 100-1000 | <cite index="23-17">Proprietary enzyme portfolio includes T7 RNA Polymerase, phi29 DNA Polymerase, Subtilisin, Carboxypeptidase B—all bacterially expressible</cite>, suggesting in-house E. coli expression capability. However, <cite index="3-15">nanobody and antibody engineering projects</cite> imply mammalian expression needs. In-house automation platform reduces outsourcing need, but may still need boutique expression for toxic/difficult-to-express variants or rapid prototyping before scale-up. |
| Cell-free expression | medium | 100-1000 | Cell-free systems valuable for rapid screening of toxic proteins or small batches before scale-up in fermenter. <cite index="17-4,17-5">In-house integrated automation implies high-throughput cell-based expression already available</cite>, reducing cell-free demand, but may still use for exploratory cycles or when E. coli/mammalian unsuitable. |
| End-to-end binder workflow | low | <100 | <cite index="3-15">Matwings has engineered nanobodies for affinity chromatography</cite>, so in-house characterization capability exists. <cite index="17-4,17-5">Integrated automation platform for expression, purification, and functional testing</cite> suggests they handle end-to-end workflows internally. May outsource BLI only if throughput bottleneck emerges or for validation by independent third party, but not a primary workflow need. |

### Key lab contacts

- Liang Hong — Founder, Professor, Lead Scientist

### Hiring

- **Actively hiring wet-lab roles**:
  - Implicit: Managing 40+ ongoing projects with small core team suggests need for additional protein engineers, bioprocess specialists, and automation engineers

## Recommended pitch

Matwings designs many protein variants per project cycle. Our clonal DNA assembly ($50/construct, half incumbent cost) + immediate E. coli KRX expression (you skip fermentation overhead for initial screening) could compress design-build-test cycles and reduce per-variant cost. For your 40+ ongoing projects doing 10-30 variants/round: 100-1200 constructs/year at $50 vs. $100 = $25-35K annual savings + 1-2 week faster iteration. We've worked with other AI protein-design teams (Absci, Evolutis, [name-check with your actual portfolio]); offer a pilot on 10-20 constructs to benchmark speed + cost.

## Why this score

Matwings is a high-profile protein-design company with strong funding, published science, and industrial traction, but scores lower for direct DNA synthesis partnerships because: (1) In-house protein production automation means they self-serve expression & characterization (downgrade expression services fit). (2) No confirmed outsourcing of clonal DNA to third parties; their internal AI platform likely integrates synthesis via existing vendor relationships (Twist, IDT, GenScript). (3) Geographic/regulatory barriers (China-based; US tech controls on advanced bio synthesis). (4) Series A stage suggests procurement may still favor established incumbent relationships. (5) Heavy focus on enzyme/nanobody/diagnostic proteins—mostly bacterially expressible, but they have in-house E. coli platform. Strong fit would require demonstrable cost/speed advantage vs. their current vendor (Twist/GenScript) and formal partnership discussion. Not a "hot" outreach target but plausible if your clonal DNA + KRX combo can underprice + accelerate their design cycles by 20%+.

## Recent signals (24 mo)

- **2024-12** — <cite index="3-2">Series A funding announced from Qiming Venture Partners (tens of millions USD)</cite>
- **2024-11** — <cite index="12-3,12-7">Science Advances publication of Pro-PRIME/Pro-series framework paper</cite>
- **2025-03** — <cite index="11-19,11-20">Venus-Pod dataset release: 9 billion protein sequences including 3.62B terrestrial microbial, 2.94B marine microbial, 2.43B antibody, 60M viral sequences</cite>
- **2025-03** — <cite index="17-4,17-5">Public unveiling of integrated automation platform for high-volume protein expression, purification, and testing (100+ tasks/24 hours)</cite>

## Risks / concerns

- Limited public headcount data; unclear team scale relative to competing platforms (DeepMind, Absci, EvolutionaryScale)
- Geographic concentration in China; potential US export/IP restrictions or geopolitical friction affecting partnerships
- Heavy reliance on academic collaboration (SJTU); transition to independent commercialization may face execution risk
- Wet-lab infrastructure in-house means both capex intensity and potential bottleneck for scaling partnerships
- No disclosed manufacturing-scale partnerships beyond single customers; commercial viability at B2B scale unproven
- Competitive landscape intensifying rapidly (AlphaFold3, Absci's exascale models, others); early-mover advantage eroding

## Relevant papers

- [A General Temperature-Guided Language Model to Design Proteins of Enhanced Stability and Activity](https://www.science.org/doi/10.1126/sciadv.adr2641) — Jiang, Fan, Science Advances (2024)  
  _<cite index="12-3,12-8">Flagship paper describing Pro-PRIME model underlying AccelProtein™ platform, demonstrating language model for protein design with exceptional wet-lab performance</cite>_
- [AI-enabled Alkaline-resistant Evolution of Protein to Apply in Mass Production](https://www.biorxiv.org/content/10.1101/2024.09.04.611192v2) — Kang, Liqi, bioRxiv (2024)  
  _<cite index="19-1,19-2">Demonstrates AI-directed evolution of nanobody for industrial scale-up, co-authored by Liang Hong and team members at Shanghai Jiao Tong University</cite>_

## Sources

- [Matwings official website](https://www.matwings.com/en/) _[company_site]_
- [Matwings Series A funding announcement](https://www.prnewswire.com/news-releases/matwings-technology-raised-series-a-funding-of-tens-of-millions-usd-to-redefine-protein-design-302339150.html) _[press]_
- [CB Insights Matwings Technology profile](https://www.cbinsights.com/company/shanghai-tianqu-technology-co) _[crunchbase]_
- [Shanghai Jiao Tong University Physics & Astronomy Pro-PRIME publication](https://www.physics.sjtu.edu.cn/en/kydt/3842.html) _[other]_
- [Shanghai government announcement: Venus-Pod dataset and models](https://english.shanghai.gov.cn/en-Latest-WhatsNew/20250325/505cb301ae09438cbd943d4b8996d7cb.html) _[other]_
- [Science Advances: Temperature-Guided Language Model paper](https://www.science.org/doi/10.1126/sciadv.adr2641) _[pubmed]_
- [MatwingsVenus™ platform landing page](https://matvenus.com/) _[company_site]_
- [HyperAI: Interview with Prof. Liang Hong on protein design and AI](https://hyper.ai/en/news/33789) _[other]_
- [bioRxiv: AI-enabled Alkaline-resistant Evolution paper](https://www.biorxiv.org/content/10.1101/2024.09.04.611192v2) _[pubmed]_
- [China Daily: Scientists leverage AI to design protein dataset](https://global.chinadaily.com.cn/a/202503/28/WS67e5f420a3101d4e4dc2b50f.html) _[press]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Strong primary sources from company press releases, Science Advances publication, and Shanghai government announcements confirm core technology, funding, and flagship customer projects. Founder background (Liang Hong) well-documented in academic and news sources. However, confidential commercial details (exact vendor relationships, manufacturing margins, product roadmap beyond Venus/AccelProtein) not accessible. Headcount and go-to-market strategy inferred from project pipeline rather than direct statement. China-based company with limited English-language disclosures; some details unavailable due to language/access barriers. Confidence in market positioning and technical differentiation is high; confidence in commercial financials and vendor relationships is low-medium.
- **Data gaps**:
  - Exact team headcount unknown; only 2-3 core researchers publicly identified
  - Series A funding amount stated as 'tens of millions USD' not exact; estimated $28.98M from CB Insights but not independently verified
  - No disclosed DNA synthesis vendor(s) currently used by Matwings
  - No commercial revenue or ARR data available
  - Exact protein expression/purification platform specifications (throughput, turnaround time, cost per mg) not published
  - Seed round details (date, amount, investors) not found; only Series A visible
  - No LinkedIn company page accessible; founder contact / hiring status inferred rather than confirmed
  - MatwingsVenus™ pricing, user base, and adoption metrics not disclosed

---
_Source brief: `surface_claude/runs/20260513T212255Z_matwings_technology/brief.json`_
