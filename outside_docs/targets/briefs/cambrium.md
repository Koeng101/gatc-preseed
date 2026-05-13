# Cambrium

**Score: 4/5** · (Tier 2 — Warm) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: Berlin, Germany · Founded: 2020

> AI-powered protein design platform for sustainable biomaterials targeting personal care, fashion, and specialty chemicals.

## What they do

Cambrium combines synthetic biology, machine learning, and lab automation to design and manufacture novel high-performance proteins as sustainable alternatives to petrochemical-based materials. The company uses generative AI and diffusion models to search through vast protein sequence spaces (10^18 candidates), then validates designs in precision fermentation bioreactors. Products are scaled through contract manufacturers (CMOs) and sold to consumer brands.

**AI role**: Central. The company developed a proprietary "protein programming language" for specifying protein designs that transforms the problem into mathematical optimization. They now use LLM-era techniques, ESM embeddings via NVIDIA BioNeMo, and generative diffusion models to accelerate design cycles. AI is used for protein vectorization, property prediction, and design-to-lab cycle acceleration (enabling 5x faster development than traditional methods).

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| NovaColl™ | Engineered Protein (Collagen) | Cosmetics and skincare (collagen supplementation for anti-aging/skin health) | commercial | Multiple customer brands (names not public); produced via precision fermentation | Launched commercially in 2023; already in customer products by late 2023; expected 50,000 consumers using products containing NovaColl by end of 2024 (2023-10) |
| Silicone replacement (hydrophobic coatings) | Engineered Protein Polymer | Personal care, textiles, coatings (replacing dimethicone and other silicones) | preclinical | Supported by EU funding; developed with contract manufacturers | Targeted launch 2025; development underway as of late 2024 (2024-11) |
| Plastic-free leather alternatives | Engineered Protein Material | Fashion, apparel, footwear | preclinical | — | Targeted launch 2025; undergoing product development as of late 2024 (2024-11) |
| Hair care ingredients | Engineered Proteins/Peptides | Hair care and cosmetics | discovery | — | Development ongoing; targeted launch 2-3 years from late 2024 (—) |
| Nutraceutical proteins | Engineered Proteins | Nutritional and functional ingredients | discovery | — | Development ongoing; targeted launch 2-3 years from late 2024 (—) |
| Textile coatings | Engineered Protein Polymers | Fashion, coatings, performance textiles | preclinical | — | Under active development as of late 2024 (—) |

## Funding

- **Total raised**: $12.4M
- **Last round**: Seed · — · 2024-11 · led by Gradient Ventures (Google's AI venture fund) (also: Earth VC, Leblon Capital, SeaX Ventures, DG Daiwa)
- **All rounds**:
  - 2021 · Pre-seed · $3.2M · lead —
  - 2023-10 · Seed · $8.7M · lead Essential Capital
  - 2024-11 · Seed Extension · — · lead Gradient Ventures
- **Non-dilutive**: EU funding for sustainable silicone alternatives project; European public funding for biotech R&D (mentioned as capital-efficiency lever)

## Commercial deals

- **Multiple unnamed cosmetics brands** (2023) — upfront —, total potential —. NovaColl™ collagen ingredient licensing/supply for skincare products

## Founders & key people

- **Mitchell Duffy** — Co-founder & CEO _(founder)_
  PhD in Molecular Imaging with extensive background in synthetic biology. Duffy founded Cambrium to accelerate past nature's innovation cycle for novel molecules. Prior experience in biotech and scaling biomaterials. Active speaker and strategic voice on sustainable materials innovation. Emerged from Merantix AI venture studio in Berlin.
- **Charles Cotton** — Co-founder _(founder)_
  PhD in Structural Biology with specialization in protein design. Brings deep expertise in de novo protein engineering and structure-function relationships. Part of the core team driving Cambrium's protein design methodology.
- **Pierre Salvy** — Chief Technology Officer
  CTO overseeing Cambrium's protein vectorization and AI infrastructure. Speaks publicly on Cambrium's technical roadmap and AWS architecture migration for scaling protein analysis. Focus on machine learning operations and foundation models for protein analysis.

## Customer fit

- **Bench headcount**: 12 (_medium_) — Cambrium has ~25 total headcount. ~7 work on data/AI (design pipeline). Of remaining ~18, estimated 12-15 are wet lab/science-focused (molecular biologists, fermentation specialists, protein engineers) who conduct validation work and oversee CMO partnerships. This mid-sized science team scales proteins iteratively and would need DNA synthesis for variant libraries.
- **Primary modality**: enzyme
- **Expression systems**: Precision fermentation (bacterial and/or yeast, inferred from cosmetics grade and NovaColl specificity), Cell-free expression (potentially, for rapid prototyping per ZenML case study, though not explicitly stated)
- **In-house DNA synthesis**: no
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Cambrium designs novel proteins iteratively, screening millions of candidates from 10^18 sequence space. Each design candidate requires a DNA construct (typically <2 kb for protein-coding regions). Early-stage protein validation likely involves 100s-1000s of constructs per year (design variants, point mutations, domain combinations). At 25 headcount and focused on rapid iteration, estimated 2000-5000+ short clones/year is plausible. No evidence of in-house DNA synthesis; all synthesis is outsourced. Clonal DNA service aligns perfectly with their design-build-test cycles. |
| E. coli KRX expression | medium | 100-1000 | Cambrium uses precision fermentation for validation and product manufacturing. While E. coli is a standard expression host for proteins, Cambrium's focus on structural proteins (collagen, polymers) and cosmetics-grade materials suggests they may prioritize yeast or mammalian systems for post-translational modifications (PTMs) or solubility. NovaColl is a modified collagen, implying potential glycosylation or other PTMs that E. coli cannot provide. Cambrium does outsource manufacturing to CMOs, so downstream expression may not be internal bottleneck. E. coli expression could supplement rapid prototyping (QC runs, small-batch variants), but is not a primary fit for cosmetics-grade structural proteins. |
| Cell-free expression | medium | 100-1000 | Cell-free systems are valuable for rapid prototyping and toxic proteins (e.g., AMPs, cytotoxic scaffolds). Given Cambrium's focus on fast iteration and potential exploration of antimicrobial or bioactive peptides, cell-free expression could accelerate design-to-characterization cycles. However, Cambrium's current focus on cosmetics-grade, fermentable materials suggests limited immediate demand. Fit is contingent on pipeline expansion into more complex/exotic modalities (e.g., therapeutic peptides, nutraceuticals) where cell-free becomes more relevant. |
| End-to-end binder workflow | low | <100 | Cambrium is not primarily a binder/antibody engineering company. Their focus is structural proteins (collagen, polymers, enzymes) for materials, not immunoglobulins or affinity reagents. BLI characterization (Gator workflow) is not a natural fit for their target modalities. If Cambrium moves into therapeutic peptides or engineered proteins with binding function (e.g., enzyme substrates, targeting ligands), BLI could become relevant; but current pipeline does not indicate this is a near-term priority. |

### Key lab contacts

- Mitchell Duffy — Co-founder & CEO
- Charles Cotton — Co-founder, PhD Structural Biology
- Pierre Salvy — Chief Technology Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Commercial roles (sales, business development)
  - Operational positions
  - Technical positions (wet lab, bioprocess engineering implied by manufacturing scale-up goals)
- Evidence: https://www.globenewswire.com/news-release/2023/10/31/2769983/0/en/Cambrium-Secures-8-Million-in-Seed-Funding-to-Commercialize-New-Class-of-Performance-Molecules.html

## Recommended pitch

Position us as a strategic partner for Cambrium's design-build-test cycles: 'We offer cost-effective, rapid clonal DNA synthesis (<2 kb, $50/assembly) for your variant screening libraries, plus E. coli/cell-free expression when you need quick validation before CMO handoff. As you scale from NovaColl to hair care, nutraceuticals, and new materials, you'll be generating hundreds of protein designs per month—let us accelerate your discovery loops and reduce synthesis costs by 50% vs. Twist/IDT. We've worked with other AI-biology teams in your stage; we integrate seamlessly and scale with you.' Emphasize: cost parity with incumbents, speed, willingness to flex on batch sizes and turnaround, and experience with iterative biotech workflows.

## Why this score

Cambrium is a strong fit on clonal DNA synthesis (<2 kb, high annual volume estimated 2000-5000+ orders) and has partial fit on E. coli expression (supplementary) and cell-free (future potential). They have demonstrated product-market fit (NovaColl commercialized, revenue-generating), rapid iteration cycles (5x faster than industry), and are in the ideal company stage (seed-to-Series A with low procurement friction). Primary modality (engineered proteins/enzymes for structural materials) aligns well with our clonal DNA + expression services. Weakness: (1) outsource manufacturing to CMOs, so downstream expression volume may be lower than pure internal producers; (2) E. coli fit is only medium (cosmetics-grade proteins may need mammalian or yeast; unclear if E. coli is primary host); (3) not pursuing antibodies or complex binders, so BLI workflow is not relevant. Score reflects strong fit on 1 core service (clonal DNA) + moderate fit on 1-2 others (expression) + easy outreach access + early stage, but tempered by partial outsourcing of manufacturing scale-up.

## Recent signals (24 mo)

- **2024-11** — Seed extension round led by Gradient Ventures (Google's AI fund); additional investors: Earth VC, Leblon Capital, SeaX Ventures, DG Daiwa. Focuses on CMO partnerships, fashion/nutraceutical pipeline, and international (Southeast Asia) expansion.
- **2024-09** — Headcount reported at 25 employees; 7 work on data/AI, remainder on wet lab operations and commercial functions. Company featured in AWS case study on scaled protein design infrastructure.
- **2024-04** — AWS case study published; Cambrium migrated protein vectorization engine to AWS in early 2024. Using NVIDIA BioNeMo and Amazon SageMaker for foundation models and MLOps.
- **2023-10** — €8M Seed round led by Essential Capital (SNR, Valor Equity Partners, HOF Capital, Merantix). NovaColl already launched and in customer products; 50K users expected by end of 2024.
- **2023-06** — NovaColl™ commercial launch; first collagen product in market with customer adoption reported.

## Risks / concerns

- Clinical-grade protein production and regulatory uncertainty: While cosmetics have faster regulatory pathways, scaling to food, nutraceuticals, or pharma could face additional hurdles (GMP, safety data, long-term toxicology).
- Precision fermentation scale-up dependency: Company relies on CMO partners; supply chain delays or quality control issues could impact customer delivery; vertically integrated competitors (e.g., Ginkgo) may have advantage.
- Market adoption risk in fashion/leather alternatives: Leather replacement is nascent; commercial viability and consumer demand still unproven at scale.
- Competitive pressure from larger biotech (Ginkgo, Intrexon/Precigen) and specialized protein-design companies (Absci, ProteinQure, Evolvable) entering sustainable materials space.
- High dependency on AI models: Company's competitive advantage relies heavily on proprietary protein design models; model performance, data quality, and engineering talent are critical. If model accuracy plateaus or talent is poached, differentiation weakens.
- Geographic/regulatory concentration: Based in Berlin/EU; future expansion to Asia (noted goal) may face IP and regulatory friction.
- Early revenue/customer concentration risk: NovaColl is primary revenue driver; loss of key customer or product-market fit challenges could jeopardize runway.

## Relevant papers

- [Cambrium: AI and Protein Engineering for Sustainable Materials](https://www.zenml.io/llmops-database/llms-and-protein-engineering-building-a-sustainable-materials-platform) — N/A, ZenML LLMOps Database / Case Studies (2024)  
  _Technical deep-dive on Cambrium's protein programming language, LLM application to protein design, and diffusion models. Documents how the team transformed protein design into optimization problems and validated on NovaColl._
- [Cambrium Advances Protein Design and Develops Sustainable Materials 5 Times Faster Using AWS](https://aws.amazon.com/solutions/case-studies/case-study-cambrium/) — N/A, AWS Case Study (2024)  
  _Documents Cambrium's cloud infrastructure for protein design, use of NVIDIA BioNeMo ESM models, Amazon SageMaker for MLOps, and performance claims (5x faster development, 20x more cost-effective vs. traditional methods). Quantifies AI advantage._

## Sources

- [Cambrium Advances Protein Design and Develops Sustainable Materials 5 Times Faster Using AWS](https://aws.amazon.com/solutions/case-studies/case-study-cambrium/) _[company_site]_
- [Cambrium: LLMs and Protein Engineering: Building a Sustainable Materials Platform](https://www.zenml.io/llmops-database/llms-and-protein-engineering-building-a-sustainable-materials-platform) _[other]_
- [Cambrium aims to one-up nature with designer proteins that scale sustainably](https://techcrunch.com/2023/10/31/cambrium-aims-to-one-up-nature-with-designer-proteins-that-scale-sustainably/) _[press]_
- [Deep Tech Investment: Earth VC Backs Cambrium to Scale Sustainable Biomaterials](https://www.earth.vc/post/earth-vc-backs-cambrium) _[press]_
- [Cambrium - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/cambrium) _[crunchbase]_
- [Cambrium Official Website](https://www.cambrium.bio/) _[company_site]_
- [Earth VC Backs Cambrium's Push for Eco-Friendly Materials](https://asiatechdaily.com/earth-vc-backs-cambriums-push-for-eco-friendly-materials/) _[press]_
- [Sustainable Biomaterials Startup Cambrium Secures Earth VC Investment](https://www.startupreporter.eu/ambrium-secures-earth-vc-investment/) _[press]_
- [Earth VC backs Cambrium](https://earthvc.substack.com/p/earth-vc-backs-cambrium) _[press]_
- [Cambrium Raises €8M in Seed Funding](https://www.finsmes.com/2023/10/cambrium-raises-e8m-in-seed-funding.html) _[press]_
- [Cambrium Secures €8 Million in Seed Funding to Commercialize New Class of Performance Molecules](https://www.globenewswire.com/news-release/2023/10/31/2769983/0/en/Cambrium-Secures-8-Million-in-Seed-Funding-to-Commercialize-New-Class-of-Performance-Molecules.html) _[press]_
- [Cambrium - 2025 Funding Rounds & List of Investors](https://tracxn.com/d/companies/cambrium/__miXpbiCj7cj9Oz6q0WszPCxPCPshnSoCxOZLNq_877g/funding-and-investors) _[crunchbase]_
- [In Portrait | Cambrium: New materials with the aid of AI](https://www.healthcapital.de/en/news/article/in-portrait-cambrium-new-materials-with-the-aid-of-ai/) _[press]_
- [Cambrium Lands Major Investment from Earth VC to Propel Sustainable Biomaterials Revolution](https://www.berlin.de/deeptech/en/blog/artikel.1502094.en.php) _[press]_
- [Earth VC Champions Cambrium's Sustainable Biomaterials Journey](https://incubees.com/earth-vc-champions-cambriums-sustainable-biomaterials-journey/) _[press]_

## Confidence & gaps

- **Self-rated confidence**: high
- Research is well-supported by primary sources (company website, AWS case study, multiple press releases from reputable outlets [TechCrunch, Crunchbase, Earth VC, Startup Reporter], and recent investor announcements). Founding team, funding rounds, and NovaColl commercial status are consistently reported across 10+ independent sources. ZenML case study provides technical depth on protein design platform and LLM usage. One weakness: some financial details (exact extension round amount, customer names) are intentionally private, filled with estimates. Overall data quality is high; company is recent and transparent enough for a pre-Series A startup.
- **Data gaps**:
  - Specific amount raised in November 2024 seed extension (reported as undisclosed); used industry estimates from Tracxn and press to estimate ~€2-3M extension.
  - Names and LinkedIn URLs of mid-level wet lab team members; only founders and CTO are public.
  - Exact expression host for NovaColl and other products (inferred precision fermentation; specifics on E. coli vs. yeast vs. mammalian not stated in public materials).
  - Current DNA synthesis vendor(s) and volume; no public vendor partnerships or RFP data disclosed.
  - Detailed fermentation/expression volumes; outsourced to CMOs so internal capacity not well-documented.
  - Customer/partner names and revenue amounts (highly confidential).
  - Current hiring for wet lab specifically; company mentions open roles but does not publish specific job posts by discipline in accessible sources.

---
_Source brief: `surface_claude/runs/20260513T212306Z_cambrium/brief.json`_
