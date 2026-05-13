# Emerald Cloud Lab

**Score: 4/5** · (Tier 2 — Warm) · `miniprotein_or_nanobody` · Stage: series_B · Outreach: moderate · HQ: Austin, United States · Founded: 2014

> Remote-access automated life sciences laboratory platform enabling researchers to design, execute, and analyze experiments via software from anywhere in the world.

## What they do

Emerald Cloud Lab (ECL) operates a highly automated, remote-controlled laboratory facility accessible 24/7 via cloud software. Scientists ship samples to ECL facilities and design experiments using ECL Command Center, a unified software interface. ECL's robotic systems execute experiments exactly as specified using 200+ instrument types (HPLC, mass spectrometry, NMR, qPCR, BLI, flow cytometry, etc.) and return annotated data organized in a knowledge graph (ECL Constellation). The platform supports in vitro biology, chemistry, and analytical workflows at scales from discovery through manufacturing.

**AI role**: AI is integrated throughout ECL's platform: (1) LLM-assisted experiment design and protocol optimization; (2) AI-driven experiment simulation; (3) automated data quality monitoring and error detection; (4) intelligent reagent and instrument scheduling; (5) autonomous learning systems that improve protocol recommendations based on outcome data; (6) the Coscientist system (developed with CMU, powered by GPT-4) for autonomous experimental design and execution. ECL positions itself as AI-native, with clean digital data and metadata feeding ML models.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| ECL Command Center | software platform | Unified software interface for remote experiment design, execution, and data analysis; supports scriptable experimental workflows encoded in Symbolic Lab Language (SLL) | commercial | — | SLL programming language made open source (August 2023); has been used to conduct 600,000+ experiments on 230+ instruments (2023-08) |
| ECL Constellation | knowledge graph / data platform | Organizes and connects all experimental data and metadata to experimental commands; supports reproducibility, auditability, and integration with ELN/LIMS/LES systems; supports ALCOA+ compliance | commercial | — | Continuously growing as customers run experiments (—) |
| Austin Facility (ECL) | remote lab infrastructure | State-of-the-art cloud lab facility with 200+ instrument types; supports in vitro biology, chemistry, and analytical workflows | commercial | — | Brought online in 2023 after relocation from South San Francisco (2023-08) |
| Coscientist | AI system for autonomous laboratory | GPT-4-powered system (developed with Carnegie Mellon) for autonomous experimental design and execution; demonstrates AI-driven lab workflows | research_only | Carnegie Mellon University | Published research on autonomous experimental design and execution (2024-04) |
| CMU Cloud Lab | academic cloud lab | First university cloud lab in US; enables remote access to 100+ instrument types for academic research and education; 40M USD project | commercial | Carnegie Mellon University | Opened in 2022; operational for faculty, students, and external researchers (2022-06) |

## Funding

- **Total raised**: $151.0M
- **Last round**: Series C · — · — · led by Alcazar Capital (also: Founders Fund, Schooner Capital, OS Fund, Western Technology Investment, Sound Ventures, SciFi VC, Incite Ventures, Spike Ventures)
- **All rounds**:
  - 2014-07 · Series B · $13.5M · lead Founders Fund (led by Max Levchin, PayPal co-founder)
  - — · Series C · — · lead Alcazar Capital

## Commercial deals

- **Carnegie Mellon University** (2021) — upfront —, total potential $40.0M. Build and operate CMU Cloud Lab (world's first academic cloud lab); ECL collaboration on facility design, construction, equipment installation, and operations
- **Lab Launch** (2024) — upfront —, total potential —. Partnership to provide integrated ecosystem combining Lab Launch's physical lab incubator space with ECL's remote cloud lab platform for biotech startups

## Founders & key people

- **Brian Frezza** — Co-founder, Co-CEO _(founder)_
  Chemistry PhD from The Scripps Research Institute; Carnegie Mellon alumnus; co-founded Emerald Therapeutics (2010) to develop antivirals, where frustrations with lab infrastructure led to creating ECL's core software and hardware architecture. Active speaker at conferences (e.g., SynBioBeta 2024 on AI × automation). Published researcher on autonomous labs and cloud lab technology.
- **DJ Kleinbaum** — Co-founder, Co-CEO _(founder)_
  BS Biological Sciences from Carnegie Mellon University; PhD from Stanford University (2005–2010), focusing on systems biology. Co-founded Emerald Therapeutics with Frezza; spun out ECL in 2014. Active in biosecurity and policy discourse; speaks on biotech, AI, and automation policy with Hill stakeholders. Known for articulating ECL's democratization mission ('Amazon Prime for science').
- **Luke Nosek** — Board Member
  Co-founder of Founders Fund and early investor in Paypal. Leads Founders Fund's involvement in ECL.
- **Brian Singerman** — Board Member
  Partner at Founders Fund; Stanford graduate; investor in early-stage biotech and deep-tech ventures.
- **Scott Yaphe** — Board Member
  McGill University graduate; Boston-based; serves on ECL board.
- **Steve Teig** — Advisor
  Princeton graduate; CEO and board member of Perceive; serial entrepreneur; advises ECL on automation and computing architecture.
- **Ben Kline** — Researcher / Author
  Published research on autonomous research with large language models (December 2023) in collaboration with Gabe Gomes and others; senior technologist at ECL.

## Customer fit

- **Bench headcount**: 15 (_medium_) — AI-biology teams using ECL are typically small (5–20 scientists) with focused protein-design or drug-discovery missions. These are pre-seed to Series B startups or well-funded academic labs. ECL customers are early adopters comfortable with programmatic, remote, high-throughput workflows. A typical customer bench would be: 1–2 computational/ML engineers, 2–3 wet-lab scientists, 1–2 chemists, 8–10 research scientists or postdocs.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (via expression in ECL facility), Cell-free protein synthesis (available on ECL), Mammalian cells (limited; CHO/HEK possible but not ECL's strength), Insect cells, Yeast
- **In-house DNA synthesis**: no
- **In-house protein production**: partial
- **Known vendors (inferred)**: IDT, Twist, GenScript

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | ECL customers designing proteins iteratively (AI-driven variant screening, directed evolution, library optimization) would order many short VH/VL gene constructs, epitope-tagged proteins, and miniprotein variants (~500–1500 bp each). AI-biology teams typically cycle 10–50 protein variants per month. A 15-person team could easily do 1500–5000 short constructs/year. Your $50/assembly is attractive vs. Twist/IDT bulk pricing. However, ECL does NOT currently offer clonal DNA synthesis in-house; they depend on external vendors. This is an INTEGRATION opportunity. |
| E. coli KRX expression | high | 1000-10000 | ECL's core strength is E. coli batch expression and purification (via liquid handlers, incubators, FPLC, etc.). Your E. coli KRX + purification service is a DIRECT SUBSTITUTE for ECL's on-facility expression workflow. However, this also means ECL customers may prefer the integrated ECL model (DNA → expression → characterization in one place) rather than outsourcing expression to you. Fit is high only if you differentiate on speed, cost, or quality; otherwise, ECL is sticky. Estimated annual orders assume a customer runs 1000–5000 protein variants/year in exploratory phase before scale-up; perhaps 5–10% make it to larger batches off-platform. |
| Cell-free expression | high | 100-1000 | ECL offers cell-free expression as backup when E. coli is unsuitable (toxic proteins, rapid prototyping). Your cell-free offering complements ECL for exploratory screens. Fit is high, but order volume is lower (only used when E. coli fails or for very early rapid cycles). Estimated 100–500 cell-free runs/year per customer. |
| End-to-end binder workflow | high | 100-1000 | This is ECL's SWEET SPOT for AI-biology teams. Your end-to-end binder workflow (DNA → E. coli expression → Gator BLI quantification) is exactly what AI-driven nanobody/minibinder design teams need. Many AI labs (protein-design companies, immunology startups) generate 50–200 designed binders per cycle and need rapid in vitro characterization. ECL can execute expression on-platform, but adding your BLI workflow either (a) on ECL or (b) as a hand-off partner creates competitive value. Estimated 200–1000 binder validations/year per customer (assuming 5–10 design cycles, 20–100 binders per cycle, 10–20% need BLI validation). |

### Key lab contacts

- [Brian Frezza](https://www.linkedin.com/in/brianfrezza) — Co-founder, Co-CEO
- [DJ Kleinbaum](https://www.linkedin.com/in/djkleinbaum) — Co-founder, Co-CEO
- Ben Kline — Senior Researcher

### Hiring

- **Actively hiring wet-lab roles**:
  - Laboratory Operations
  - Data Engineering
  - Software Engineering
  - Research roles
- Evidence: https://www.emeraldcloudlab.com/company-culture/careers/

## Recommended pitch

Position your clonal DNA synthesis + E. coli KRX expression as a *pre-cloud-lab* stage service for ECL customers in the early variant-screening phase. ECL excels at scale-up and characterization; you excel at rapid, low-cost design iteration. Propose a pilot integration: (1) your DNA synthesis + basic expression/purification for 100s of mini variants in parallel, (2) hand-off validated hits to ECL for high-throughput characterization (BLI, functional assays) on their 200+ instrument suite. For binder discovery teams, emphasize speed and cost: 50 designed nanobodies → your service (clonal DNA + E. coli + SDS-PAGE or basic purification) → pre-screened for solubility/expression → then send 10–20 hits to ECL for full BLI profiling and funnel. This *complements* ECL rather than competing with it. Additionally, explore a white-label or OEM integration where ECL can offer your services as an 'upstream DNA/protein prep module' to their customers—expanding ECL's addressable market and capturing stickier customer relationships.

## Why this score

ECL is a STRONG warm lead. Scoring rationale: (1) Primary modality is miniprotein/nanobody—textbook fit for E. coli expression + BLI; (2) No in-house DNA synthesis—they depend on external vendors; (3) Partial in-house protein production—they offer expression but as a fixed service, not a contract manufacturing partner; (4) AI-biology teams using ECL fit the early-stage, vendor-flexible profile (Series A/B); (5) Multiple service lines have high fit (clonal DNA, E. coli expression, cell-free, binder workflow); (6) Moderate outreach difficulty (established company, but not a household name, openness to partnerships). Downgrade from 5 to 4 because: (a) ECL integrates expression on-platform, so they may view your expression service as cannibalistic, (b) your DNA synthesis is NOT seamlessly integrated into ECL's workflow (no API/integration yet), and (c) customer base is small and concentrated (risks high switching costs to in-house or to competing bundles).

## Recent signals (24 mo)

- **2024-01** — Partnership with Lab Launch announced; combines ECL's cloud lab platform with physical lab incubator for biotech startup ecosystem
- **2023-08** — Symbolic Lab Language (SLL) released as open source; ECL announces new Austin facility coming online; ~600,000 experiments executed to date on 230+ instruments
- **2023-04** — ECL establishes AI Scientific Advisory Board; accelerates AI applications in autonomous lab
- **2023-02** — ECL relocates from South San Francisco to Austin, Texas; announced restructuring and job cuts; shifts to more capital-efficient model
- **2024-04** — Coscientist system (with CMU, GPT-4-powered) for autonomous experimental design and execution published

## Risks / concerns

- High capital intensity and tight margins: only surviving commercial cloud lab after Strateos folded (2023); ECL restructured in Feb 2023 with job cuts, suggesting profitability challenges
- Customer concentration: reportedly small customer base (EA Forum cites 'only a handful' using ECL); contracts start above $250k/year, limiting addressable market
- Execution risk on AI integration: many AI capabilities still in R&D or research-only phase (Coscientist); unclear when autonomous lab will be fully production-grade
- Regulatory and biosecurity scrutiny: remote lab ownership + programmatic control + AI automation creates novel biosecurity/biosafety considerations; unclear regulatory pathway
- Workflow limitations: exploratory, real-time decision-making experiments still require physical lab presence; only suitable for high-throughput, programmable assays
- Data lock-in and portability: proprietary SLL, Constellation knowledge graph, and ECL Command Center create switching costs; no clear interoperability with competing cloud labs or standard ELN/LIMS
- Dependency on external synthesis vendors: ECL does not manufacture DNA/RNA; relies on upstream suppliers for gene constructs, creating handoff risk and latency

## Relevant papers

- [Autonomous Research with Large Language Models](https://www.emeraldcloudlab.com/company-culture/press/) — Kline, Ben, Emerald Cloud Lab / external publication (2023)  
  _Demonstrates ECL's work integrating LLMs for autonomous experimental design and execution; directly relevant to AI-biology integration._
- Highly Automated, Internet-Connected Labs Could Ameliorate Reproducibility in Biomedical Research — Multiple authors, Literature analysis (2017) (2017)  
  _Peer-reviewed analysis cited by ECL as foundational; posits that automated cloud labs solve reproducibility crisis in biomedical research._
- [Self-Driving Labs and Protein Discovery](https://www.pnas.org/doi/10.1073/pnas.2406320121) — Romero, Philip, University of Wisconsin–Madison / cloud lab project (2024)  
  _Case study: AI protein design algorithm (UW–Madison) sent synthesis/testing instructions 2,000 miles to ECL facility for autonomous execution; exemplifies AI + remote lab integration._

## Sources

- [Emerald Cloud Lab official website](https://www.emeraldcloudlab.com/) _[company_site]_
- [Wikipedia: Emerald Cloud Lab](https://en.wikipedia.org/wiki/Emerald_Cloud_Lab) _[other]_
- [Crunchbase: Emerald Cloud Lab](https://www.crunchbase.com/organization/emerald-therapeutics) _[crunchbase]_
- [CB Insights: Emerald Cloud Lab Financials](https://www.cbinsights.com/company/emerald-therapeutics/financials) _[crunchbase]_
- [Carnegie Mellon University: First University Cloud Lab](https://www.cmu.edu/news/stories/archives/2021/august/first-academic-cloud-lab.html) _[press]_
- [PR Newswire: SLL Open Source Release](https://www.prnewswire.com/news-releases/emerald-cloud-lab-makes-programming-language-for-conducting-remote-scientific-experiments-open-source-301906218.html) _[press]_
- [AWS Startups: ECL Case Study](https://aws.amazon.com/startups/learn/how-emerald-cloud-lab-is-revolutionizing-the-laboratory-using-aws?lang=en-US) _[press]_
- [LinkedIn: Emerald Cloud Lab](https://www.linkedin.com/company/emerald-cloud-lab) _[linkedin]_
- [CBS Austin: DJ Kleinbaum interview](https://cbsaustin.com/news/local/remote-controlled-life-sciences-lab-in-austin-is-a-game-changer-for-bio-tech) _[press]_
- [PNAS: The Automated Lab of Tomorrow](https://www.pnas.org/doi/10.1073/pnas.2406320121) _[pubmed]_
- [EA Forum: Cloud Labs Reality Check](https://forum.effectivealtruism.org/posts/cyZdRBcRokJ8fhYEd/no-there-are-not-hundreds-of-cloud-labs-in-biology) _[other]_
- [BioPharma Trend: Remote Labs Coming of Age](https://www.biopharmatrend.com/next-gen-tools/remote-labs-are-coming-of-age-501/) _[press]_
- [PitchBook: Emerald Cloud Lab Profile](https://pitchbook.com/profiles/company/61618-24) _[crunchbase]_

## Confidence & gaps

- **Self-rated confidence**: high
- Primary sources: official ECL website, Wikipedia, CMU partnership press release, PR Newswire, AWS case study, Crunchbase, CB Insights, and multiple recent news articles (2023–2024). Founders and executives confirmed via Crunchbase and LinkedIn. Funding data from Crunchbase and ForgeGlobal (reconcile to ~$92–151M range). AI capabilities documented in AWS blog and PNAS paper. Risks and competitive position informed by 2025 PNAS review and EA Forum critique. Highest confidence on what ECL *does* (infrastructure, software, partnerships); medium confidence on customer fit and volumes (small customer base not publicly detailed). No major contradictions across sources.
- **Data gaps**:
  - Exact funding amounts and dates for Series C and later rounds not publicly disclosed; total funding estimated at $151M but breakdown by round incomplete
  - Current headcount (120 cited as of Jan 2024; May 2026 data not available; -8% YoY decline reported)
  - Post-money valuation not available; ECL is private and does not disclose
  - Customer list and volume metrics not public; 'small customer base' cited by external sources but exact counts unknown
  - Detailed pricing tiers (one-off vs. subscription) not fully transparent; $250k+/year contracts mentioned in EA Forum but not official
  - Revenue and profitability not disclosed; company is private
  - Specific partnerships or commercial deals beyond CMU and Lab Launch not detailed
  - Exact instrument count and capabilities may have expanded beyond 200+ as of 2023; no recent 2025–2026 updates found
  - In-house DNA synthesis capability status unclear; no evidence ECL offers synthetic DNA service

---
_Source brief: `surface_claude/runs/20260513T215604Z_emerald_cloud_lab/brief.json`_
