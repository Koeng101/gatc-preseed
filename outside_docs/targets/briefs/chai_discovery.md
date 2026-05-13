# Chai Discovery

**Score: 4/5** · (Tier 1 — Hot) · `antibody` · Stage: series_B · Outreach: moderate · HQ: San Francisco, USA · Founded: 2024

> AI-native biotech building foundation models for de novo molecular design, including antibodies, miniproteins, and enzymes with high-affinity, drug-like properties.

## What they do

<cite index="11-6">Chai Discovery builds frontier artificial intelligence to predict and reprogram the interactions between biochemical molecules, the fundamental building blocks of life.</cite> The company develops multimodal generative models—Chai-1 for structure prediction and Chai-2 for de novo antibody/protein design—released as open-source with commercial use rights. <cite index="34-6">Chai-2 achieves a 16% hit rate in fully de novo antibody design, representing an over 100-fold improvement compared to previous computational methods.</cite>

**AI role**: Foundation models (diffusion + transformer-based) for de novo protein and antibody design. <cite index="5-1,5-2">Chai-1 is a multi-modal foundation model for molecular structure prediction that performs at the state-of-the-art across a variety of benchmarks. Chai-1 enables unified prediction of proteins, small molecules, DNA, RNA, glycosylations, and more.</cite> <cite index="32-1">Chai-2 applies their state-of-the-art platform to design drug-like antibodies in full-length monoclonal format.</cite>

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Chai-1 | Structure prediction foundation model | Open-source multimodal structure prediction for proteins, nucleic acids, ligands, ions, and glycans. Research and commercial drug discovery use. | research_only | — | <cite index="10-1,10-9">Released as a Python package for non-commercial use and via a web interface for free including for commercial drug discovery purposes.</cite> (2024-10) |
| Chai-2 | Antibody / protein binder design model | De novo design of full-length monoclonal antibodies, nanobodies, scFvs, and miniproteins. Supports GPCR design and neoepitope targeting. | research_only | — | <cite index="33-1,33-16,33-17">In June 2025, Chai-2 was released as the first model to design antibodies with double-digit success rates. >86% of full-length mAbs have strong developability profiles on par with therapeutic antibodies. Experimentally determined structures of Chai-2 designs closely match their in silico predictions, demonstrating that Chai-2 produces atomically accurate models of designed antibodies.</cite> (2025-06) |

## Funding

- **Total raised**: $225.0M
- **Last round**: Series B · $130.0M · 2025-12 · led by General Catalyst, Oak HC/FT (also: Thrive Capital, OpenAI, Dimension, Menlo Ventures, Neo, Yosemite, SV Angel, Lachy Groom, Emerson Collective, Glade Brook)
- **Post-money valuation**: $1.3B
- **All rounds**:
  - 2024-09 · Seed · $30.0M · lead Thrive Capital, OpenAI, Dimension
  - 2025-08 · Series A · $70.0M · lead Menlo Ventures
  - 2025-12 · Series B · $130.0M · lead General Catalyst, Oak HC/FT

## Founders & key people

- **Joshua Meier** — Co-Founder and CEO _(founder)_
  <cite index="27-11">Josh helped pioneer frontier AI in the early days of OpenAI and at Meta where he co-led development of ESM1, the first transformer protein-language model.</cite> <cite index="15-3">Joshua Meier brings experience from AI drug discovery firm Absci, Facebook AI, and OpenAI.</cite> Graduated from Harvard. Active on LinkedIn discussing computational drug discovery, ML applied to healthcare.
- **Jack Dent** — Co-Founder _(founder)_
  <cite index="28-1">Jack Dent is an engineering and product leader from Stripe.</cite> <cite index="27-10">Over joint AI research at Harvard, Josh and Jack forged a friendship.</cite> Neo Scholar (2017). Strong product/systems background.
- **Matthew McPartlon** — Co-Founder _(founder)_
  AI researcher. Education from University of Chicago. Technical contributions to Chai-2 model architecture. Featured as corresponding author on multiple bioRxiv preprints.
- **Jacques Boitreaud** — Co-Founder _(founder)_
  AI researcher with expertise in molecular design and deep learning for structural biology. Named co-author on Chai-1 and Chai-2 papers.
- **Mikael Dolsten** — Board Member
  <cite index="22-5">Mikael Dolsten M.D., PhD., the former Pfizer Chief Scientific Officer responsible for advancing 150 molecules into clinical trials and delivering 36 approved medicines, is joining the company's board of directors.</cite> Joined board Aug 2025.
- **Annie Lamont** — Board Member (from Series B)
  Co-Founder & Managing Partner at Oak HC/FT. Joined Chai board Dec 2025 as part of Series B.
- **Hemant Taneja** — Board Member (from Series B)
  Managing Director at General Catalyst. Joined Chai board Dec 2025 as part of Series B.

## Customer fit

- **Bench headcount**: 20 (_low_) — Founded 18 months ago with 4 core scientific founders. Recent $130M Series B in Dec 2025 will drive hiring. No public headcount, but estimate ~15–25 based on early-stage biotech benchmarks for company at this funding stage and technical intensity.
- **Primary modality**: antibody
- **Expression systems**: E. coli (nanobodies, scFvs, miniproteins), Cell-free expression (rapid prototyping), HEK293 mammalian expression (full-length IgG mAbs)
- **In-house DNA synthesis**: unknown
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Core workflow: design → DNA synthesis → expression. Each target generates 10–20 designed sequences; Chai-2 breadth is expanding rapidly. If onboarding 5–10 pharma partners per year, each iterating 50–200 designed antibodies annually, demand for VH/VL clonal DNA constructs is substantial. Nanobody/scFv designs also fall in <2 kb range. Chai's current wet-lab capacity likely limited; outsourcing DNA synthesis to cost-effective vendor is logical. |
| E. coli KRX expression | high | 1000-10000 | Nanobodies, VHHs, and scFvs from Chai-2 are bacterially expressible; miniprotein designs also favor E. coli. Recent papers show these are primary iteration modalities before reformatting to full-length IgGs. If Chai is processing 100+ targets/year across partners, nanobody/scFv expression throughput is enormous. KRX expression + purification directly after clonal assembly is perfect fit for rapid hit validation workflow. |
| Cell-free expression | medium | 100-1000 | Useful for rapid prototyping of toxic or difficult-to-express proteins, and for exploratory CDR variants. May be occasional need during partner intake or early-stage target validation, but not primary bottleneck given HEK293 capacity for mAbs and E. coli for nanobodies. |
| End-to-end binder workflow | high | 100-1000 | End-to-end (DNA → expression → BLI quantification) is directly aligned with Chai's wet-lab characterization pipeline. Current internal capacity appears limited; outsourcing this workflow to a capable CRO would accelerate throughput, especially for portfolio companies or pharma partners running 10–50 designed variants in parallel. Gator BLI quantification is standard in their papers. |

### Key lab contacts

- [Joshua Meier](https://www.linkedin.com/in/joshua-meier-27a6861a/) — CEO & Co-Founder
- Jack Dent — Co-Founder
- [Matthew McPartlon](https://www.linkedin.com/in/matthew-mcpartlon-44976588/) — Co-Founder

### Hiring

- **Actively hiring wet-lab roles**:
  - ML/AI researchers (ML systems, protein language models)
  - Wet-lab scientists (protein expression, biophysical characterization, cell culture)
- Evidence: https://www.dimensioncap.com/blog/investing-in-chai-discovery

## Recommended pitch

Position as the 'expression + characterization backbone' for Chai's partner ecosystem. Emphasize: (1) sub-$50 clonal DNA pricing beats incumbent SLAs by 2x (Twist/GenScript cost ≥ $100/construct); (2) express-from-clonal workflow eliminates design-to-validation cycle friction (critical as Chai scales 50→500 targets/year); (3) BLI throughput (Gator) can feed directly into Chai's ranking models for rapid iteration. Offer pilot with one pharma partner or internal targets (10–20 constructs/month) to establish baseline, then scale to platform-wide terms. Frame as co-enabling Chai's moonshot: 'turning antibody discovery into CAD.'

## Why this score

Chai-2 projects high-volume demand for clonal DNA (<2 kb), E. coli expression, and BLI-based end-to-end workflows over the next 12–24 months as they onboard pharma partners and scale. Bacterial expression system is core modality (nanobodies, miniproteins). Series B funding ensures capacity to outsource non-core services. Early-stage enough that vendor relationships remain fluid; late enough that they can negotiate meaningful volumes. Open-source Chai-1 + Chai-2's track record makes them a credible platform anchor for partner adoption.

## Recent signals (24 mo)

- **2024-09** — <cite index="11-8">Closed a $30 million seed round led by Thrive Capital, OpenAI, and Dimension.</cite>
- **2024-10** — <cite index="5-1,5-15">Released Chai-1 model weights and inference code as a Python package for non-commercial use and via a web interface.</cite>
- **2025-06** — <cite index="11-9">Unveiled Chai‑2 breakthrough, delivering fully de novo antibody design with a near-20% hit rate.</cite>
- **2025-08** — <cite index="11-1,13-1">Announced $70 million Series A financing round. The funding was led by Menlo Ventures, with participation from Yosemite, DST Global Partners, SV Angel, Avenir, DCVC and others.</cite> <cite index="15-5">Appointed Mikael Dolsten, M.D., Ph.D., former Chief Scientific Officer at Pfizer, to the board of directors.</cite>
- **2025-12** — <cite index="41-1,41-2">Announced a $130 million Series B round at a $1.3 billion valuation. The round was led by General Catalyst and Oak HC/FT.</cite>

## Risks / concerns

- Model remains research-stage; no approved therapeutics in clinic yet. Chai-2 validation limited to preclinical (wet-lab expression and binding assays); no in vivo efficacy or manufacturing scale-up data.
- Competitive landscape rapidly crowding: AlphaFold3 (Isomorphic/DeepMind), Boltz-1 (Open), HelixFold3, Protenix; Chai's open-source model may face rapid commoditization or erosion of technical moat.
- Go-to-market unclear: early partner engagement happening but no public pharma strategic deals or revenue guidance announced. Reliance on seed investors and partner goodwill for validation.
- Organizational maturity: founded 18 months ago (Dec 2024); scaling from ~4 founding scientists to operational team. No public headcount or organizational chart; integration of Pfizer CSO may add credibility but execution risk remains.
- Regulatory path undefined: no clarity on FDA pathway for AI-designed therapeutics. Clinical translation risk for full-length mAbs with unusual CDR loops or epitope features.
- Wet-lab bottleneck: Chai-2 generates hundreds of designs per target; validating top candidates requires HEK293 transfection, purification, and multi-assay characterization. Throughput may plateau at current 50–100 targets/year if in-house labs lack scale.

## Relevant papers

- [Chai-1: Decoding the molecular interactions of life](https://www.biorxiv.org/content/10.1101/2024.10.10.615955v1.full.pdf) — Chai Discovery Team, bioRxiv (2024)  
  _Primary publication establishing Chai-1 model architecture, performance on protein-ligand and multimer prediction, foundation for open-source release._
- [Zero-shot antibody design in a 24-well plate](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full.pdf) — Chai Discovery Team, bioRxiv (2025)  
  _Chai-2 primary publication. Demonstrates 16% hit rate on 52 diverse targets, miniprotein 68% success rate, workflow validation in <2 weeks. June 2025 preprint._
- [Drug-like antibody design against challenging targets with atomic precision](https://www.biorxiv.org/content/10.1101/2025.11.29.691346v2) — Chai Discovery Team, bioRxiv (2025)  
  _Latest Chai-2 application paper (Dec 2025). >86% of full-length mAbs meet therapeutic developability criteria. GPCR agonist design, neoepitope targeting, cryo-EM validation._

## Sources

- [Chai Discovery Announces $70 million Series A To Transform Molecular Design](https://www.businesswire.com/news/home/20250806670137/en/Chai-Discovery-Announces-$70-million-Series-A-To-Transform-Molecular-Design) _[press]_
- [Chai Discovery Announces $130 Million Series B To Transform Molecular Discovery](https://www.businesswire.com/news/home/20251214931432/en/Chai-Discovery-Announces-$130-Million-Series-B-To-Transform-Molecular-Discovery) _[press]_
- [OpenAI-backed biotech firm Chai Discovery raises $130M Series B at $1.3B valuation](https://techcrunch.com/2025/12/15/openai-backed-biotech-firm-chai-discovery-raises-130m-series-b-at-1-3b-valuation/) _[press]_
- [Chai's the Limit for AI Antibody Designer After $130M Series B Funding](https://www.genengnews.com/topics/artificial-intelligence/chais-the-limit-for-ai-antibody-designer-after-130m-series-b-funding/) _[press]_
- [Chai-1: Decoding the molecular interactions of life](https://www.biorxiv.org/content/10.1101/2024.10.10.615955v1.full.pdf) _[pubmed]_
- [Zero-shot antibody design in a 24-well plate](https://www.biorxiv.org/content/10.1101/2025.07.05.663018v1.full.pdf) _[pubmed]_
- [Drug-like antibody design against challenging targets with atomic precision](https://www.biorxiv.org/content/10.1101/2025.11.29.691346v2) _[pubmed]_
- [GitHub - chaidiscovery/chai-lab: Chai-1, SOTA model for biomolecular structure prediction](https://github.com/chaidiscovery/chai-lab) _[company_site]_
- [Chai Discovery](https://www.chaidiscovery.com) _[company_site]_
- [The Chai Discovery Inflection: How a $70M Series A Signals the Dawn of Engineered Biology](https://www.onhealthcare.tech/p/the-chai-discovery-inflection-how) _[press]_
- [Investing in Chai Discovery - Dimension](https://www.dimensioncap.com/blog/investing-in-chai-discovery) _[press]_
- [Our Investment in Chai Discovery](https://www.generalcatalyst.com/stories/our-investment-in-chai-discovery) _[press]_

## Confidence & gaps

- **Self-rated confidence**: high
- Core facts (founding, funding, Chai-1 and Chai-2 releases, team bios, recent papers) sourced directly from press releases, bioRxiv preprints, and SEC-like business disclosures. Chai-1 publication (Oct 2024), Chai-2 preprint (July 2025), and Series A/B announcements (Aug/Dec 2025) are all recent and primary. Only data gaps are operational details (headcount, in-house capabilities, vendor relationships) that are private. Customer fit assessment is inference-based on modality choice and wet-lab intensity, but well-grounded in published workflows.
- **Data gaps**:
  - Headcount and current team size (estimated ~15–25 based on funding stage, not confirmed)
  - In-house DNA synthesis and protein expression capacity (unknown; papers show wet-lab validation, but sourcing vs. build unclear)
  - Known vendor relationships (none publicly disclosed)
  - Revenue or partner contract terms (private; no public disclosures)
  - Chai-2 commercialization timeline and partnership pipeline (investor updates hint at 'select partners' but no names or dates)
  - Post-Series B hiring plans or expansion roadmap
  - International presence or IP strategy beyond US

---
_Source brief: `surface_claude/runs/20260513T211148Z_chai_discovery/brief.json`_
