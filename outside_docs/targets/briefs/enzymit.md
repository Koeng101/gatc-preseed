# Enzymit

**Score: 4/5** · (Tier 2 — Warm) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: Ness Ziona, Israel · Founded: 2020

> AI-driven cell-free biomanufacturing platform using CoSaNN deep-learning enzyme design to replace fermentation for specialty chemicals, HMOs, and biopolymers.

## What they do

Enzymit designs novel enzymes using proprietary CoSaNN deep-learning algorithms and high-throughput DNA assembly, then manufactures complex biomolecules (hyaluronic acid, HMOs, other specialty chemicals) in cell-free enzymatic systems. The platform eliminates living cells, reducing capital costs, development time, and enabling faster, cleaner production of molecules previously unattainable or prohibitively expensive via fermentation.

**AI role**: Core: CoSaNN (Conformation Sampling using Neural Network) uses deep neural networks to computationally design enzyme conformations from sequence-structure relationships, generating millions of candidates. Additional ML suite adapts enzymes for high-throughput DNA assembly, enabling billions of DNA sequences. Continuous learning loop: experimental screening data feeds back to refine next-generation algorithms.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Hyaluronic Acid (HA) | Biopolymer/specialty chemical | Dermal fillers, wound healing, drug delivery, tissue engineering, medical devices | commercial | Cosun (agricultural cooperative) | Pilot-scale production (200L) achieved; multi-kg quantities of high-purity HA demonstrated with superior process efficiency and consistency vs. fermentation (2025-11) |
| Human Milk Oligosaccharides (HMOs) | Specialty ingredient/dietary supplement | Infant formula, prebiotics, immune support, infection prevention | preclinical | — | Cell-free platform designed to overcome fermentation limitations; claimed advantages in speed, yield, and flexibility for complex HMO structures (—) |
| Generic Cell-Free Enzyme Manufacturing Platform | Process technology | Contract manufacturing for pharmaceuticals, cosmetics, specialty chemicals, food ingredients | research_only | NIZO (enzyme production scale-up), Cosun (process integration) | Platform-level validation via HA pilot success; expanding to other high-value molecules (2025-12) |

## Funding

- **Total raised**: $15.0M
- **Last round**: Series A · $10.0M · 2024-09 · led by Grove Ventures, Khosla Ventures (also: First Star Ventures)
- **All rounds**:
  - 2020-03 · Pre-seed or Seed · — · lead —
  - 2022-04 · Seed or Series A · $5.0M · lead —
  - 2024-09 · Series A · $10.0M · lead Grove Ventures
- **Non-dilutive**: Israeli Innovation Authority grants (mentioned in COO bio; specific amounts not disclosed)

## Commercial deals

- **Cosun** (2025) — upfront —, total potential —. Collaborative pilot-scale manufacturing of hyaluronic acid at 200L scale using Enzymit's cell-free enzymatic process; Cosun provides manufacturing assets and expertise
- **NIZO** (2025) — upfront —, total potential —. Partnership for scale-up of enzyme production; NIZO contributes decades of protein expression/fermentation expertise; described as key step in industrializing cell-free manufacturing
- **Aleph Farms** (2023) — upfront —, total potential —. Collaboration on cultivated meat cost reduction; development of cost-effective insulin substitutes for cell-based meat production

## Founders & key people

- **Gideon Lapidoth** — CEO & Co-Founder _(founder)_
  PhD in Computational Biology from Weizmann Institute of Science; MSc in Biochemistry from Tel Aviv University. Developed Enzymit's proprietary enzyme-design platform, specializing in computational algorithms for antibody and enzyme design with precision. Active on LinkedIn discussing company strategy and biotech innovation; published work on protein design. Key technical architect of CoSaNN platform.
- **Dror Baran** — COO & Co-Founder _(founder)_
  Master's degree from Weizmann Institute of Science; Bachelor's in Biology from Ben Gurion University. 10+ years of biotech experience; co-developer of Enzymit's core cell-free bioproduction technology. Expertise in synthetic biology, protein engineering, antibody engineering, molecular biology, NGS, and biochemistry. Leads daily operations; secured pre-seed, seed, and Series A funding; managed Israeli Innovation Authority grants.
- **Itay** — Scientific Leadership (Title not fully specified)
  16+ years expertise in molecular biology, biochemistry, and protein engineering. Prior roles at biotech startups; served as Senior Scientific Director at Biolojic Design. PhD from Tel Aviv University; postdoctoral research at University of Washington. Brings deep experimental and bioengineering rigor to platform validation.
- **Lior** — Machine Learning / Computational Biology (Title not fully specified)
  ML expert with background in computational biology. Likely contributor to CoSaNN algorithm development and continuous learning loops for enzyme design refinement.
- **Nelli** — Strategy & Business Development
  Strategy and business development expert in biotech and healthcare. Prior experience at Hummingbird Ventures (investor), venture-building programmes with Pioneer Group. Co-founder and operator of future.bio (global techbio community). MRes in Drug Discovery and Development from Imperial College London; MA in Natural Sciences from Cambridge. Spans UK, Europe, Israel, and US markets.

## Customer fit

- **Bench headcount**: 8 (_medium_) — Enzymit headcount is ~11 (Jul 2024). Lab-facing roles likely 8-10: molecular biologists (enzyme expression, characterization), computational biologists (CoSaNN algorithm & ML), bioengineers (process development), lab technicians (high-throughput screening). Business/ops overhead ~1-3. Estimate 60-70% of team on design/wet-lab activities.
- **Primary modality**: enzyme
- **Expression systems**: E. coli (inferred from CoSaNN design and NIZO fermentation partnership), Cell-free systems (proprietary in-house)
- **In-house DNA synthesis**: partial
- **In-house protein production**: partial
- **Known vendors (inferred)**: NIZO (fermentation/enzyme production outsourcing partner)

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Enzymit's CoSaNN generates billions of candidate DNA sequences for enzyme variants. High-throughput DNA assembly is core to their platform—testing millions of sequences per cycle to identify optimal designs. They iteratively synthesize, express, and screen short gene constructs (<2kb) encoding enzyme mutants/variants. Volume likely 1,000–10,000+ constructs/year across multiple projects. Perfect match for clonal DNA synthesis at scale. |
| E. coli KRX expression | high | 1000-10000 | Designed enzymes must be expressed and screened rapidly. E. coli is a standard host for enzyme expression (especially for non-glycosylated biocatalysts). Enzymit partners with NIZO for fermentation scale-up, indicating reliance on bacterial expression at intermediate scale. Likely 1,000–10,000+ expression runs/year for variant screening and process development. High fit. |
| Cell-free expression | medium | 100-1000 | Enzymit has proprietary cell-free platform; they likely develop in-house or outsource to specialized CROs (e.g., NIZO may offer cell-free services, or they use commercial cell-free kits for early screening). Use case: rapid prototyping of toxic/difficult proteins and proof-of-concept before scale-up. Lower volume (100–1000) than bacterial expression, as most scaling moves to fermentation or cell-free manufacturing. Medium fit; less critical than clonal DNA + E. coli. |
| End-to-end binder workflow | low | <100 | Enzymit focuses on enzymes and cell-free manufacturing, not antibody/nanobody binder discovery. They mention antibody engineering in founder bios (Dror's expertise), but no evidence of high-throughput binder screening or BLI-based affinity profiling in their product portfolio. Not a primary use case; estimated <100 binder designs/year if any. Low fit. |

### Key lab contacts

- [Gideon Lapidoth](https://www.linkedin.com/in/gideon-lapidoth-94299035/) — CEO & Co-Founder
- [Dror Baran](https://il.linkedin.com/in/gideon-lapidoth) — COO & Co-Founder
- Nelli — Strategy & Business Development

## Recommended pitch

Enzymit's CoSaNN platform generates millions of enzyme variants per cycle. You're likely synthesizing 1,000–10,000+ short gene constructs annually for high-throughput screening. Our clonal DNA service ($50/assembly, 2-3x cheaper than Twist/IDT) and E. coli KRX expression+purification directly integrate with your variant-to-phenotype loop, removing bottlenecks in your computational-to-experimental pipeline. As you scale from pilot (200L HA with Cosun) to manufacturing, we can maintain velocity on enzyme optimization and process development. Let's talk about aligning our DNA synthesis and expression capacity with your 2026 scaling roadmap.

## Why this score

Enzymit is a strong fit on two critical service lines: (1) clonal DNA under 2kb (very high volume, 1,000–10,000+ constructs/year for CoSaNN variant screening), and (2) E. coli KRX expression (high-throughput enzyme expression and characterization). Primary modality is enzyme (biocatalyst) design, not antibody/mammalian expression, which aligns well with bacterial expression offerings. Series A stage = easy procurement and high motivation to outsource non-core functions. Cell-free expression is secondary (medium fit). Binder workflow is not relevant (low fit). Company is actively scaling manufacturing (Cosun partnership) and will have rising DNA/protein synthesis demand. Deduction from 5: cell-free expression fit is medium (not 'high' across all services), and they are building some in-house synthesis capabilities (partial offset to clonal DNA fit).

## Recent signals (24 mo)

- **2024-09** — Series A funding closed: $10M from Grove Ventures and Khosla Ventures; enables pilot facility establishment and scaling
- **2024-09** — Series A press release highlights commitment to cell-free bioproduction as timely solution; CEO Gideon Lapidoth emphasizes paradigm shift from natural enzyme search to AI-designed custom enzymes
- **2025-11** — World's first scaled cell-free production of hyaluronic acid milestone: 200L pilot with Cosun achieved; multi-kg quantities of high-purity HA; demonstrated superior efficiency and consistency vs. fermentation
- **2025-12** — Partnership announcement with NIZO for enzyme production scale-up; described as 'significant step forward in industrialization of cell-free manufacturing'; validates viability at scale
- **2025-02** — Series A funding details reported: Grove Ventures and Khosla Ventures co-lead; Enzymit now positioned for industrial-scale expansion

## Risks / concerns

- Scale-up execution risk: Pilot success (200L HA) does not guarantee economic viability or reproducibility across diverse chemistries; fermentation cost-learning curves are well-established, while cell-free enzyme processes remain novel
- Enzyme robustness: Designed enzymes must achieve industrial durability, reusability, and stability under varied pH/temperature; early-stage platform may struggle with edge cases or process variability
- Competitive pressure: Protein-design tools (Absci, Genentech, ML labs) and alternative biomanufacturing (Ginkgo, Zymergen, fermentation incumbents) are rapidly advancing; CoSaNN moat may erode if algorithms commoditize
- Regulatory pathway unclear: Cell-free manufacturing of food (HMOs, HA) and pharma may face novel GMP, identity/purity, and safety assessment challenges; no precedent for large-scale cell-free regulatory approval in major markets
- Customer acquisition & procurement friction: Early-stage with limited commercial references; large pharma/specialty chem customers may require proven track record and exclusive partnerships before adopting
- Israel geopolitical risk: Operations, IP, and access to investors/talent may be affected by regional instability
- Capital intensity: Pilot facilities and process development are capital-intensive; $15M total funding may be insufficient for multi-platform industrialization without additional rounds

## Relevant papers

- [CoSaNN: Deep Learning Technology for Novel Enzyme Design / Novel Biocatalysis Design](https://www.opp.today/news2/new-research-demonstrates-application-of-enzymits-deep-learning-technology-for-novel-biocatalysis-design/18300/) — Enzymit, Published research (peer-reviewed outlet not explicitly named in available sources, but validated by external press coverage) (2023)  
  _Demonstrates core CoSaNN (Conformation Sampling using Neural Network) algorithm for computationally designing enzyme conformations from sequence-structure relationships. Proposes alternative to natural enzyme mining: modify existing enzymes for new molecules under different conditions. Shows proof-of-concept for redesigning enzymes to enable previously unattainable chemical reactions._

## Sources

- [Enzymit raises $10 million Series A for cell-free bio-production technology](https://www.calcalistech.com/ctechnews/article/b1k3mjxrr) _[press]_
- [Technology – Enzymit](https://enzymit.com/technology/) _[company_site]_
- [Enzymit Achieves World's First Scaled Cell-Free Production of Hyaluronic Acid](https://www.prnewswire.com/news-releases/enzymit-achieves-worlds-first-scaled-cell-free-production-of-hyaluronic-acid-302610025.html) _[press]_
- [Enzymit Achieves World's First Scaled Cell-Free Production of Hyaluronic Acid](https://www.synbiobeta.com/read/enzymit-and-cosun-have-successfully-pioneered-the-production-of-high-purity-hyaluronic-acid-through-a-novel-cell-free-biomanufacturing-process) _[press]_
- [About Us | Enzymit](https://www.enzymit.com/about-us) _[company_site]_
- [Products/Markets – Enzymit](https://enzymit.com/products-markets/) _[company_site]_
- [NIZO and Enzymit Joined Forces to Successfully Scale Enzyme Production](https://www.nizo.com/news/nizo-and-enzymit-scale-enzyme-production/) _[press]_
- [Cell-Free Bio-Production - Enzymit Raises $10M Series A](https://www.grovevc.com/insights/news/enzymit-raises-10m-series-a-for-cell-free-bio-production-technology/) _[press]_
- [Study Reveals Potential for New AI-Based Tools to Transform Enzyme Design](https://www.opp.today/news2/new-research-demonstrates-application-of-enzymits-deep-learning-technology-for-novel-biocatalysis-design/18300/) _[press]_
- [Enzymit - 2026 Company Profile, Team, Funding & Competitors](https://tracxn.com/d/companies/enzymit/__RuxODF-onxo1EGwg45ZhkEM5v29vkHI58aRuA_5zR9U) _[crunchbase]_
- [Contact Dror Baran, Chief Operating Officer & Co-Founder at Enzymit](https://www.zoominfo.com/p/Dror-Baran/11024928559) _[other]_
- [Israeli startup uses AI to design novel enzymes, cutting cost of ingredient production](https://www.nutraingredients.com/Article/2022/04/20/israeli-startup-uses-ai-to-design-novel-enzymes-cutting-cost-of-ingredient-production/) _[press]_
- [Gideon Lapidoth - Enzymit | LinkedIn](https://www.linkedin.com/in/gideon-lapidoth-94299035/) _[linkedin]_
- [Dror Baran - COO and Co-Founder @ Enzymit - Crunchbase Person Profile](https://www.crunchbase.com/person/dror-baran-709a) _[crunchbase]_

## Confidence & gaps

- **Self-rated confidence**: high
- Strong primary sourcing: company website (technology, about-us, products/markets pages), press releases (Series A, HA milestone, NIZO partnership), and investor/trade press (Grove VC, CTech, PRNewswire, SynBioBeta, FoodEngineering). Founder bios cross-validated across multiple sources (company site, LinkedIn, ZoomInfo, Crunchbase). Funding rounds confirmed via multiple outlets (Tracxn, Grove VC, CTech). Recent milestones (Nov 2025 HA, Dec 2025 NIZO) are current and verifiable. No red flags in sources. Minor gaps (exact pre-seed amounts, board composition) are typical for early-stage private cos. and do not materially affect confidence in core facts (founding, team, funding, product focus, recent partnerships).
- **Data gaps**:
  - Exact headcount as of 2025; Tracxn reports 11 as of Jul 2024; likely higher now post-Series A
  - Seed and pre-seed round funding amounts and dates; Tracxn notes first round Mar 25, 2020 and $5M Seed/Series A by Apr 2022, but exact allocations unclear
  - Post-money valuation for Series A (Sep 2024, $10M round)
  - Number of DNA constructs synthesized annually; inferred from CoSaNN 'billions of sequences' claim but not disclosed
  - In-house DNA/protein synthesis capacity and capital; Tracxn states 'partial' in-house capability, NIZO partnership suggests outsourcing, but specifics on internal labs not detailed
  - Specific hiring status and open roles as of May 2026; no recent HR signals found
  - Commercial deal terms: Cosun and NIZO partnership scope (equity, upfront, milestone payments) not disclosed
  - Named scientific publications (CoSaNN paper venue, authors, DOI) not found; only press coverage of 2023 publication detected
  - Board composition and governance; no publicly available board roster or investor seat details
  - Regulatory strategy for cell-free manufacturing (FDA GMP pathway, food vs. pharma classification); not addressed in available sources

---
_Source brief: `surface_claude/runs/20260513T212308Z_enzymit/brief.json`_
