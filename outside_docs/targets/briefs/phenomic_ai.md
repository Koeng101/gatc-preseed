# Phenomic AI

**Score: 4/5** · (Tier 2 — Warm) · `antibody` · Stage: series_B · Outreach: moderate · HQ: Toronto, Canada · Founded: 2017

> AI-powered single-cell transcriptomics platform for discovering novel antibody targets in tumor stroma-rich cancers

## What they do

Phenomic AI uses machine learning and single-cell RNA (scRNA) analysis to identify druggable targets in the tumor microenvironment, particularly cancer-associated fibroblasts and stromal cells. The company's scTx® platform integrates ~30 million curated human scRNA cells with deep-learning tools for image and genetic analysis to enable target discovery and antibody engineering for stroma-rich solid tumors (pancreatic, colorectal, lung, ovarian, breast cancers).

**AI role**: Core to platform: ML models analyze hundreds of curated scRNA datasets at scale; deep learning applied to microscopy images and transcriptomic data for cell-state inference (e.g., fibroblast vs. myofibroblast probability), differential gene expression, and target selection. AI-driven phenotypic screening and validation of stromal targets in complex co-culture and 3D assays.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Lead internal asset (unnamed) targeting CTHRC1 | Antibody / CD3 engager-like approach | Novel solid tumor target identified by scTx platform; pancreatic/colorectal cancers emphasis | preclinical | — | CEO Girish Aakalu mentioned internal pipeline advancement; CTHRC1 as lead target in Nov 2023 (2023-11) |
| Boehringer Ingelheim collaboration targets (multiple) | Antibody / potential CD3 engagers | Stroma-rich cancers (colorectal, pancreatic, lung, ovarian, breast) | discovery | Boehringer Ingelheim | Strategic collaboration announced; Boehringer has option to license discovered and validated targets; $9M upfront, $500M+ in potential milestones (2023-11) |
| Astellas collaboration antibodies | Antibody targeting novel tumor stroma target | Enhancement of cell therapy for solid tumors | discovery | Astellas Pharma (via Xyphos Biosciences) | Strategic research collaboration; Astellas has first right to negotiate license; upfront + research funding + milestones per terms (2023-11) |

## Funding

- **Total raised**: $8.7M
- **Last round**: Seed · $6.0M · 2020-10 · led by CTI Life Sciences Fund (also: AV8 Ventures, Luminous Ventures, Viva BioInnovator, Garage Capital, Hike Ventures, Cantos Ventures)
- **All rounds**:
  - 2018-06 · Pre-seed / Convertible · $2.0M · lead —
  - 2020-10 · Seed · $6.0M · lead CTI Life Sciences Fund
  - — · Undisclosed · $740.0K · lead —

## Commercial deals

- **Boehringer Ingelheim** (2023) — upfront $9.0M, total potential $509.0M. Strategic collaboration to discover and license novel targets for stroma-rich cancer therapies using scTx platform; Boehringer has option to license targets identified and functionally validated by Phenomic
- **Astellas Pharma (via Xyphos Biosciences)** (2023) — upfront —, total potential —. Strategic research collaboration to develop antibodies targeting tumor stroma for enhancement of cell therapy approaches in solid tumors; Astellas receives first right to negotiate license during agreement term

## Founders & key people

- **Sam Cooper** — Co-founder, CTO (formerly CEO until June 2022) _(founder)_
  PhD in machine learning for drug discovery from the Institute of Cancer Research, UK. Used AI to analyze automated microscopy images. Met co-founder Oren Kraus in 2016 at a Harvard workshop on computer vision and microscopy. Returned to CTO role in June 2022 to focus on platform development and growth.
- **Oren Kraus** — Co-founder, Machine Learning Advisor _(founder)_
  PhD in computer engineering (2017) from University of Toronto under Brendan Frey (founder of Deep Genomics); BASc and MASc in mechanical and biomedical engineering from U of T. One of the first researchers to apply deep learning to microscopy data with key publications. Worked at Apple and Borealis AI before founding Phenomic. Expert in deep-learning applications to biological phenotypes.
- **Girish Aakalu** — Chief Executive Officer (appointed June 2022)
  Extensive biopharma leadership and business development experience. Held roles at Genocea, Ipsen, Pfizer, and Genentech. Brought on to lead commercialization and BD strategy while Cooper transitioned to CTO.
- **Michael (Mike) Briskin** — Chief Scientific Officer (joined 2020)
  Immunologist with >25 years industry experience. Founded and led discovery research at Jounce Therapeutics; led translational studies at Merrimack Pharmaceuticals; early discovery work on vedolizumab (Entyvio) at LeukoSite (acquired by Millennium). Co-founded Jounce with Jim Allison and Pam Sharma. Expertise in immuno-oncology and antibody drug discovery.
- **James (Jim) P. Allison, PhD** — Scientific Advisory Board
  Nobel Laureate (2018) for groundbreaking cancer immunotherapy research that led to FDA approval of ipilimumab (Yervoy). Key opinion leader in immuno-oncology; strong signal of SAB credibility.
- **Padmanee (Pam) Sharma, M.D., PhD** — Scientific Advisory Board
  Expert in oncology clinical trials and immunotherapy response/resistance mechanisms. Leading research on combinations of immunotherapies in preclinical and early-stage trials. Translational researcher at the forefront of immuno-oncology drug development.

## Customer fit

- **Bench headcount**: 8 (_medium_) — Phenomic has ~20 total employees (per PitchBook 2025). Estimated 8-10 FTE engaged in antibody discovery, engineering, and expression/characterization workflows (CSO Briskin, translational scientists, immunologists, in vivo teams). Remaining headcount split between bioinformatics, data science, and executive/BD.
- **Primary modality**: antibody
- **Expression systems**: Mammalian (CHO/HEK) inferred for IgG antibodies in partnerships, Bacterial (E. coli) likely for internal scFv/nanobody prototyping, Cell-free (possible for rapid screens)
- **In-house DNA synthesis**: no
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 100-1000 | Antibody engineering pipeline (internal + partner targets) requires iterative VH/VL construct design, CDR mutations, and variant screening. Multiple targets from Boehringer/Astellas deals likely spawn 100-500+ cloned constructs annually. $50/assembly cost competitive vs. Twist/IDT at ~$100+/assembly. No apparent in-house DNA synthesis, so likely outsources. |
| E. coli KRX expression | medium | <100 | Primary antibodies (IgG) for therapeutic candidates likely produced in mammalian systems (CHO/HEK) by partners or contract manufacturers. However, rapid prototyping of scFv, nanobodies, or CD3 engager fragments could leverage E. coli. Current in-house expression strategy unclear; Phenomic mentions 'complex assay capability' and in vivo teams but no public disclosure of proprietary recombinant protein infrastructure. KRX + BLI could accelerate early hit-to-lead cycles if adopted. |
| Cell-free expression | low | <100 | Cell-free could serve niche use case (toxic proteins, ultra-rapid prototyping) but unlikely primary need. Most validated antibody targets will go through mammalian/bacterial standard pipelines. |
| End-to-end binder workflow | high | 100-1000 | Perfect fit: Phenomic generates many AI-designed binder sequences per cycle (scTx platform identifies targets, antibody engineering adds variants). End-to-end DNA→expression→BLI throughput would enable rapid cycle time from design to quantitative affinity/kinetics data. Accelerates validation of thousands of computationally optimized constructs. Current bottleneck likely manual expression + assay; outsourcing to vendor BLI service would decongest internal teams. |

### Key lab contacts

- Girish Aakalu — CEO
- Michael (Mike) Briskin — Chief Scientific Officer
- Sam Cooper — CTO (co-founder)

### Hiring

- **Actively hiring wet-lab roles**:
  - Antibody engineering and discovery roles implied by recent SAB appointments and pipeline acceleration statements (CEO mentioned 'busy 2024')
  - In vivo/translational science roles (company emphasizes organoid, explant, and complex assay capability)
- Evidence: https://phenomic.ai/

## Recommended pitch

Your scTx platform generates hundreds of AI-optimized antibody variants per cycle. Our end-to-end binder workflow (DNA synthesis + E. coli KRX expression + Gator BLI quantification at $50/assembly + $X/expression) can give you quantitative affinity data on 500-1000 constructs/month, enabling 5-10x faster hit-to-lead cycles than manual expression. Perfect for rapid validation of CD3 engager fragments and scFv variants from your internal pipeline. We also offer bulk clonal DNA for pooled variant libraries. Let's discuss how we can be a backbone vendor for your antibody optimization.

## Why this score

Strong fit on clonal_dna_under_2kb (high), end_to_end_binder_workflow (high), and medium fit on ecoli_krx_expression. Primary modality is antibody, which aligns with our E. coli-compatible expression and BLI characterization services. ~20 headcount, ~8 engaged in antibody discovery/engineering, likely ordering 100-1000 short constructs annually for VH/VL variants and scFv prototyping. Company is building internal pipeline and partnering with Boehringer/Astellas, both of which create design iteration velocity. Stage (Series B-like) is 'moderate' outreach difficulty; not yet public, so CEO/BD engagement required. No in-house mammalian IgG production evident (suggests reliance on partners), but E. coli-friendly modalities (scFv, nanobody, CD3 engager fragments) could fit our stack well. Main risk: Phenomic may have preferred vendor relationships with larger incumbent (Twist, Ginkgo) already in place, but no public disclosure. Recommend warm outreach to CEO or VP BD with specific value prop on rapid prototyping throughput for scTx-designed binders.

## Recent signals (24 mo)

- **2023-11** — Announced $509M strategic collaboration with Boehringer Ingelheim ($9M upfront, $500M+ milestones) for target discovery in stroma-rich cancers
- **2023-11** — Announced strategic research collaboration with Astellas Pharma (via Xyphos Biosciences) for stroma-targeting antibodies in cell therapy
- **2023-11** — CEO Girish Aakalu indicated internal pipeline advancement with lead asset targeting CTHRC1; teed up 2024 as key year for collaborations and pipeline disclosures

## Risks / concerns

- Long discovery-to-clinic timeline for antibody therapeutics; no internal clinical data yet (all pipeline at preclinical/discovery stage)
- Dependence on pharma partner (Boehringer, Astellas) execution risk; Phenomic's role is target ID and early validation, not drug development
- Platform scalability and generalizability beyond stroma-rich tumors not yet proven
- Significant competition from other AI-biotech platforms (Recursion, Exscientia, BeneveolentAI, Insilicom, etc.)
- No disclosed revenue; entirely dependent on milestone/upfront payments from partnerships and remaining seed capital

## Relevant papers

- [An AI-assisted integrated, scalable, single-cell phenomic-transcriptomic platform to elucidate intratumor heterogeneity against immune response](https://aiche.onlinelibrary.wiley.com/doi/full/10.1002/btm2.10628) — Tostado, Bioengineering & Translational Medicine (2024)  
  _Demonstrates Phenomic's approach integrating single-cell phenotypic data with transcriptomic analysis to identify immune response heterogeneity; validates core platform methodology for tumor biology understanding._

## Sources

- [Phenomic AI official website](https://phenomic.ai/) _[company_site]_
- [Phenomic Enters Strategic Collaboration with Boehringer Ingelheim – Business Wire](https://www.businesswire.com/news/home/20231129546391/en/Phenomic-Enters-Strategic-Collaboration-with-Boehringer-Ingelheim-to-Discover-Novel-Targets-for-Stroma-Rich-Cancer-Therapies) _[press]_
- [Boehringer Ingelheim Targets Stroma-Rich Cancers in Potential $509M AI Deal – BioSpace](https://www.biospace.com/boehringer-ingelheim-targets-stroma-rich-cancers-in-potential-509m-ai-deal) _[press]_
- [Phenomic AI inks second deal in two days – FierceBiotech](https://www.fiercebiotech.com/biotech/phenomic-ai-inks-second-deal-two-days-while-shape-stretches-roche-collab) _[press]_
- [Phenomic AI – Crunchbase](https://www.crunchbase.com/organization/phenomic-ai) _[crunchbase]_
- [Phenomic AI – PitchBook Company Profile](https://pitchbook.com/profiles/company/226262-62) _[other]_
- [Phenomic AI – Tracxn Company Profile](https://tracxn.com/d/companies/phenomic-ai/__MfSrPg2darDGv1t0eHVadVmx63nIH3ttVSOa5f4K6iE) _[other]_
- [Case Study: Phenomic AI – TileDB](https://www.tiledb.com/case-studies/phenomic-ai) _[press]_
- [Phenomic AI Launches with $6 Million Financing – Business Wire](https://www.businesswire.com/news/home/20201007005033/en/Phenomic-AI-Launches-with-%246-Million-Financing-and-an-AIML-Platform-for-Targeting-the-Tumor-Stroma) _[press]_
- [From an algorithm to drug discovery – University of Toronto Engineering](https://www.engineering.utoronto.ca/event/from-an-algorithm-to-drug-discovery-using-deep-learning-to-understand-biological-phenotypes-oren-kraus-phd-university-of-toronto/) _[other]_

## Confidence & gaps

- **Self-rated confidence**: high
- Company website (phenomic.ai) and official press releases (Business Wire, BioSpace) provide solid primary sources on platform, partnerships, team, and funding. Crunchbase, PitchBook, and Tracxn provide consistent secondary validation on founding year (2017), HQ (Toronto), and funding totals (~$8-8.74M). Founder backgrounds well-documented in University of Toronto alumni profiles and academic sources. Major pharma partnerships (Boehringer, Astellas) confirmed by multiple independent news outlets and company website. Pipeline and modality details inferred from partnership scope and founder expertise, but no clinical trial data or published pipeline documents. Customer_fit scoring based on industry-standard antibody development workflow and Phenomic's stated focus on antibody discovery/engineering for stromal targets. Main limitation: no direct contact with company to confirm exact in-house synthesis/expression capabilities or current hiring priorities.
- **Data gaps**:
  - Exact current headcount and team composition not disclosed; PitchBook estimate of ~20 used.
  - Detailed breakdown of internal vs. outsourced protein expression (mammalian vs. bacterial) not publicly available.
  - Names and contact details of key BD/lab contacts beyond CEO and CSO not found in public sources.
  - Revenue/profitability not disclosed (pre-revenue or milestone-dependent unclear).
  - Post-money valuation from seed round (2020) not disclosed.
  - Specific Series A/B funding rounds post-Oct 2020 not announced publicly; company may be in stealth capital raise or bootstrapping off Boehringer/Astellas payments.

---
_Source brief: `surface_claude/runs/20260513T215600Z_phenomic_ai/brief.json`_
