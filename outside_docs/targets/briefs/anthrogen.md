# Anthrogen

**Score: 4/5** · (Tier 2 — Warm) · `miniprotein_or_nanobody` · Stage: seed_to_series_A · Outreach: easy · HQ: San Francisco, USA · Founded: 2024

> AI research lab building protein foundation models (Odyssey 102B) for de novo protein and peptide generation with integrated wet-lab validation.

## What they do

Anthrogen trains large multimodal protein language models for sequence and structure generation, protein editing, and conditional design. Their flagship model Odyssey scales to 102 billion parameters and uses discrete diffusion training with a novel Consensus mechanism replacing self-attention. The company emphasizes a 'damp lab' approach, coupling AI model generation with massively parallelized wet-lab experimentation to close the 'asymmetry of verification' gap.

**AI role**: Core platform: Odyssey is a generative foundation model trained on protein sequences, 3D structures, and functional context. It generates novel protein sequences and structures, performs protein editing under user-defined constraints (e.g., stability, potency, manufacturability), and supports multi-objective design. The model is positioned as enabling researchers to move from design iteration to real wet-lab validation loops.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Odyssey (Protein Language Model Family) | Protein/Peptide Design Platform | De novo protein generation, protein editing, enzyme engineering, antibody design, conditional design (potency, specificity, stability, manufacturability targets) | research_only | Stanford University Fordyce Lab (microfluidic assay partnership) | 102B-parameter model released; API in early access; bioRxiv preprint published; Fordyce Lab partnership announced for data generation (2025-10) |

## Funding

- **Total raised**: $4.0M
- **Last round**: Seed · $4.0M · 2024-11 · led by ReGen Ventures, BoxGroup (also: Y Combinator, Wayfinder Ventures, Liquid 2 Ventures, Soma Capital, Ritual Capital, Collaborative Fund, Pioneer Fund, Paul Graham (angel), Kulveer Taggar (angel), Todd Goldberg (angel), Rahul Vohra's Angel Fund)

## Founders & key people

- **Ankit Singhal** — CEO _(founder)_
  Science Research Fellow and Named Scholar at Columbia (top ~10 STEM students per class). Majoring in molecular biophysics and applied mathematics. Published first-author papers in high school; won and led national teams at international science/research competitions. Extensive wet-lab and computational lab experience focusing on catalysis and structural biology/biophysics. Named to Forbes 30 Under 30 in Energy & Green Tech (2025). Active in public speaking (TEDx talks on debate/argumentation).
- **Connor Lee** — CTO _(founder)_
  Columbia University student (dropped out as sophomore); researcher at Columbia's ROAM (Robotics, Optimization, and Motion) Lab. Youngest-ever President of Columbia Robotics. Over a decade of robotics experience: placed 3rd internationally in FIRST Robotics Competition (FRC), top 5 globally in MATE ROV. Brings hardware/systems design expertise and robotics background to the team.
- **Vignesh Karthik** — COO _(founder, former)_
  Columbia University graduate in applied mathematics and geology. Conducted machine learning and geological research at Naval Research Laboratory and Lamont-Doherty Earth Observatory (Columbia's geophysics lab). Focuses on scaling bacterial cultures and optimizing growth conditions. Left company in March 2025 for personal reasons per LinkedIn; status as of May 2026 unclear.
- **Sean Moushegian** — Team Member (ML/Engineering)
  Listed on company website. Role and background details not publicly available.
- **Mir Park** — Team Member (ML/Engineering)
  Listed on company website. Role and background details not publicly available.
- **Steven Strutt** — Team Member
  Listed on company website. Role and background details not publicly available.
- **Shyam Venkatasubramanian** — Team Member
  Listed on company website. Role and background details not publicly available.
- **Stephen Upton** — Team Member
  Listed on company website. Role and background details not publicly available.

## Customer fit

- **Bench headcount**: 8 (_medium_) — Estimated core protein design/engineering team: Ankit (CEO, leads scientific direction), Connor (CTO, robotics/lab automation), 2 ML engineers (Sean Moushegian, Mir Park likely), ~3–4 wet-lab scientists for expression, purification, and characterization (Steven Strutt, Shyam Venkatasubramanian, Stephen Upton likely roles). Non-bench: 1–2 ops/BD. Actual headcount 6–8 total; assuming 4–5 on the bench for protein design/expression directly.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (implied via Stanford Fordyce integration and scFv mentions), Cell-free (mentioned as alternative for toxic proteins), Microfluidics-based assays (partnership with Stanford)
- **In-house DNA synthesis**: no
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Odyssey generates novel protein sequences that must be cloned and expressed for validation. Protein-design iteration loops typically require 100s–1000s of constructs per campaign. VH/VL genes, miniprotein scaffolds, scFv constructs are typically <2 kb. Foundry model with massive parallelized experiments implies sustained high-volume DNA synthesis demand. No in-house synthesis mentioned; they partner with Stanford but likely use external DNA vendors for bulk orders. |
| E. coli KRX expression | high | 1000-10000 | Company explicitly mentions scFv (antibody fragment), miniproteins, and enzymes as design targets. All are bacterially expressible. Odyssey outputs are protein sequences optimized for function; validating them requires rapid expression and purification. Their robotics + high-throughput plate-reading infrastructure suggest they run 1000s of expression reactions per campaign cycle. KRX is ideal: fast, scalable, cost-effective. They would benefit from outsourcing to reduce internal friction; our $50/assembly competitive vs. Twist/IDT aligns with their cost-consciousness. |
| Cell-free expression | medium | 100-1000 | Company mentions cell-free as alternative 'when E. coli is unsuitable (e.g., toxic proteins, rapid prototyping).' Not primary focus, but relevant for iterative design where some candidates may be toxic or membrane-bound. Microfluidics (Fordyce partnership) can use cell-free lysates; this is a secondary demand lever. |
| End-to-end binder workflow | high | 100-1000 | Odyssey explicitly designs scFvs, miniproteins, nanobodies. Company mentions 'highly-optimized scFvs' as proof-of-concept. DNA → expression → BLI characterization (Gator) is exactly the workflow needed for binder validation. Foundry ethos suggests they would value outsourced characterization to accelerate iteration. This is a high-fit service line, though annual volume may be smaller than clonal-DNA (perhaps 100–500 binder campaigns/year, 5–10 variants per campaign = 500–5000 assays). |

### Key lab contacts

- [Ankit Singhal](https://www.linkedin.com/in/ankit-singhal-columbia/) — CEO
- [Connor Lee](https://www.linkedin.com/in/connor-lee-692a40263/) — CTO

### Hiring

- **Actively hiring wet-lab roles**:
  - Bench-based and computational roles (mentioned in October 2024 LinkedIn post by Connor Lee)
  - Super talented math/ML engineers with protein foundation model expertise
  - $10k referral bonus for successful hires on 90th day (suggests active recruitment)
- Evidence: https://www.linkedin.com/in/connor-lee-692a40263/

## Recommended pitch

Position as 'infrastructure for protein design iteration at scale.' Emphasize: (1) We've solved cost (50/assembly, 2x cheaper than Twist); (2) We're built for the design-build-test loop you're running—1000s of constructs/year is our sweet spot; (3) Our KRX prep and Gator BLI integration reduce your internal ops friction so you can focus on model improvement and wet-lab insights; (4) We've worked with other AI biology founders (Evo, Genesis, etc.) doing multi-round design iterations. Open with 'How many DNA constructs are you synthesizing per month today?' to qualify volume; then show cost comparison and turnaround. Offer pilot: 50-unit trial at $50/ea (~$2500 total) with 3-day turnaround. Emphasize referral/relationship-building angle rather than enterprise lock-in, which fits their stage.

## Why this score

Strong fit on clonal-DNA (high volume, iterative protein design) and ecoli-krx-expression (aligned with scFv/miniprotein/enzyme modality, cost-sensitive). End-to-end binder workflow also well-aligned. Team is at optimal stage for outsourcing partner engagement (seed, no incumbent relationships). High wet-lab intensity and protein design focus create sustained demand. However: (1) small team size means deal size and negotiation bandwidth are limited; (2) no public customer evidence yet—Odyssey is still 'early access', not revenue-generating; (3) key founder (Vignesh/COO) departed March 2025, raising execution risk questions; (4) Series A not yet closed (no growth signal beyond seed). Not tier-1 hot because of execution risk and unproven commercialization, but strong underlying fit and easy outreach push to tier-2 warm.

## Recent signals (24 mo)

- **2024-06** — Y Combinator Summer 2024 cohort participation
- **2024-11** — $4M seed round closed (co-led by ReGen Ventures, BoxGroup)
- **2025-03** — Vignesh Karthik (COO) leaves company for personal reasons
- **2025-10** — Odyssey 102B-parameter protein language model announced; bioRxiv preprint published; API in early access
- **2025-10** — Partnership announced with Stanford University's Fordyce Lab for microfluidic assay development
- **2026-01** — Ankit Singhal named to Forbes 30 Under 30 in Energy & Green Tech category

## Risks / concerns

- Business model shift: Company pivoted from CO₂-consuming microbes (Arctic Capture, 2023) to protein design (2024). Original carbon-capture narrative has been nearly abandoned; unclear which investors are still engaged or if fund terms remain aligned.
- Key founder departure: Vignesh Karthik (COO) left in March 2025 for personal reasons; no public announcement of replacement. This is a co-founder departure from a small 6-person team (33% of headcount).
- Slim team with significant technical load: 6 total employees across ML, wet-lab robotics, protein chemistry, and business. Limited redundancy.
- Unproven commercialization: Odyssey API is in 'early access' only; no announced customers, partnerships beyond academic (Stanford), or commercial pilots visible.
- Protein design is a crowded field: DeepMind AlphaFold3, Ginkgo, Evo, ProteinMPNN, OmegaFold, and others all train protein generative models; differentiation via Consensus mechanism and data efficiency may be claimed but not yet peer-validated against all benchmarks.
- Wet-lab integration creates execution risk: Company claims to run 'massively parallelized' experiments but lab-automation and high-throughput biology have execution friction; protein expression/characterization success rates vary widely.
- No disclosed patent portfolio or IP strategy: Important for a protein design company working in dense IP landscape.
- Funding runway uncertain: $4M seed is modest; no follow-on funding announced. Timeline to Series A or revenue unclear.

## Relevant papers

- [Odyssey: reconstructing evolution through emergent consensus in the global proteome](https://www.biorxiv.org/content/10.1101/2025.10.15.682677v1) — Anthrogen team (all authors are Anthrogen employees/executives), bioRxiv preprint (2025)  
  _Core technical publication describing 102B-parameter protein language model with Consensus mechanism (replaces self-attention), discrete diffusion training, and multimodal sequence+structure+function learning. Demonstrates landmark performance on protein generation and structure discretization benchmarks._

## Sources

- [Anthrogen - Y Combinator Company Profile](https://www.ycombinator.com/companies/anthrogen) _[company_site]_
- [Anthrogen Odyssey Launch Page](https://www.anthrogen.com/odyssey-launch) _[company_site]_
- [Anthrogen Company Website (Webflow)](https://anthrogen-new.webflow.io/) _[company_site]_
- [Odyssey: reconstructing evolution through emergent consensus in the global proteome](https://www.biorxiv.org/content/10.1101/2025.10.15.682677v1) _[pubmed]_
- [Anthrogen Raises $4M to Tackle Carbon Emissions with CO₂-Consuming Microbes and AI](https://www.synbiobeta.com/read/anthrogen-raises-4m-to-tackle-carbon-emissions-with-co2-consuming-microbes-and-ai) _[press]_
- [Columbia students' biotech AI startup closes $4M seed round](https://americanbazaaronline.com/2024/11/14/columbia-students-biotech-ai-startup-raises-4m/) _[press]_
- [Anthrogen - Crunchbase Company Profile](https://www.crunchbase.com/organization/anthrogen) _[crunchbase]_
- [Connor Lee - LinkedIn Profile](https://www.linkedin.com/in/connor-lee-692a40263/) _[linkedin]_
- [Ankit Singhal - LinkedIn Profile](https://www.linkedin.com/in/ankit-singhal-columbia/) _[linkedin]_
- [Anthrogen Introduces Odyssey: A 102B Parameter Protein Language Model](https://www.marktechpost.com/2025/10/22/anthrogen-introduces-odyssey-a-102b-parameter-protein-language-model-that-replaces-attention-with-consensus-and-trains-with-discrete-diffusion/) _[press]_
- [Anthrogen - Ritual Capital Portfolio Profile](https://ritualcapital.com/companies/anthrogen/) _[other]_
- [Two new co-founders join Anthrogen](https://www.anthrogen.com/journal/two-new-co-founders-join-anthrogen-providing-additional-technical-expertise-to-bring-credits-to-market) _[company_site]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on core facts: founding team, funding ($4M seed), model release (Odyssey 102B, Oct 2025), bioRxiv publication, Y Combinator affiliation all verified via multiple primary sources. Medium confidence on commercial signals: no customer evidence yet beyond early-access API; Stanford partnership is research-focused, not commercial. Execution risk elevated by Vignesh departure (no replacement announced). Timeline of business-model pivot (Arctic Capture → protein design) raises questions about investor alignment and financial runway—original carbon-capture narrative appears shelved, which may signal strategic reset or opportunity focus shift. Recommend confirming current strategy, remaining team composition, and Series A timeline with founders before detailed engagement.
- **Data gaps**:
  - No disclosed post-money valuation from seed round
  - Vignesh Karthik (COO) status as of May 2026 unclear; left in March 2025 for personal reasons, no replacement announced
  - No publicly announced customers or commercial partnerships (only Stanford Fordyce academic collaboration)
  - Odyssey API commercialization model not documented (pricing, licensing, access criteria)
  - No disclosed patent filings or IP strategy
  - Annual DNA synthesis volume not estimated; company product mix (platform licensing vs. service) remains unclear
  - No public financial projections or runway estimates

---
_Source brief: `surface_claude/runs/20260513T211145Z_anthrogen/brief.json`_
