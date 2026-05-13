# Numen (operating as Cleancard)

**Score: 4/5** · (Tier 2 — Warm) · `enzyme` · Stage: seed_to_series_A · Outreach: easy · HQ: London, United Kingdom · Founded: 2021

> Synbio + AI at-home cancer diagnostics enabling rapid multi-biomarker detection from urine in 30 minutes.

## What they do

<cite index="31-4,31-5">Cleancard is a pair of Rhodes Scholars on a mission to reinvent cancer diagnostics, combining synthetic biology + AI to create powerful at-home cancer tests, with results from urine in just 30 minutes</cite>. <cite index="31-1">Cleancard technology combines synthetic biology, machine learning, and computer vision into a multiplexable, machine-readable format which allows us to detect multiple cancer biomarkers from a single sample</cite>.

**AI role**: <cite index="31-16">Cleancard technology combines synthetic biology, machine learning, and computer vision into a multiplexable, machine-readable format</cite>. AI/ML powers biomarker pattern recognition and computer vision for machine-readable output decoding.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Cleancard Cancer Screening Platform (Prostate, Bladder, Ovarian) | Urine-based biomarker detection (synthetic biology + ML) | Early detection and at-home screening for prostate, bladder, and ovarian cancers | preclinical | — | <cite index="31-18">Successfully targeted 10 new cancer biomarkers during YC batch</cite> (2023-09) |
| Expandable Biomarker Panel | Urine-based synthetic biomarker platform | Platform extensibility for additional cancer types and conditions beyond initial three (prostate, bladder, ovarian) | discovery | — | <cite index="32-7">Constantly expanding the number of conditions we can detect from a single sample using platform technology</cite> (—) |

## Funding

- **Total raised**: $5.0M
- **Last round**: Pre-seed · $5.0M · 2023-09 · led by TQ Ventures, Urban Innovation Fund (also: Mayo Clinic Platform, Y Combinator, Creative Destruction Lab)

## Founders & key people

- **Luca Springer** — CEO & Co-Founder _(founder)_
  <cite index="23-17,23-18,23-19,23-20,23-24">Expert in network science and computational game theory with a strong policy background focused on healthcare systems. Previously worked at Stockdale Street analyzing and investing in healthcare, consumer, and technology companies. Holds an MSc in Computer Science and an MSc in Global Governance from the University of Oxford where he studied as a Rhodes Scholar and is a Schmidt Futures ISF Fellow</cite>.
- **Thomas Carroll** — CSO & Co-Founder _(founder)_
  <cite index="30-1,30-3,30-18,30-19,30-20">Clinical cancer researcher and clinical bioinformatician who made medical discoveries focusing on new biomarkers impacting patient treatments. Double majored in biochemistry and classical studies and was a Rhodes Scholar. Multiple family members diagnosed with cancer, all BRCA carriers</cite>. <cite index="26-14,26-15,26-16">Published work on predictive biomarkers for metastatic esophageal cancer in Cancer Cell; work conducted in honor of uncle who passed away from the disease</cite>.
- **Amber Casillas** — Clinical Research Scientist
  Involved in clinical research operations supporting Cleancard's diagnostic development and validation. Details sparse in public sources.

## Customer fit

- **Bench headcount**: 8 (_medium_) — 16-person team: ~2 founders + 1 CSO-equivalent (Thomas) + ~3-4 scientists/bioinformaticians for biomarker design and validation + ~2 engineers/software for ML/vision pipeline + ~2-3 clinical/ops. Estimated 8 FTEs engaged in iterative design, construct testing, and biomarker validation that would demand short DNA constructs, protein purification, and rapid iteration.
- **Primary modality**: enzyme
- **Expression systems**: E. coli (implied: synthetic biology platform development requires expression of biomarker targets and detection proteins), Cell-free systems (possible: for rapid prototyping of synthetic constructs)
- **In-house DNA synthesis**: partial
- **In-house protein production**: partial

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Cleancard's platform requires iterative design and validation of synthetic biomarkers and detection constructs. Targeting 10 new cancer biomarkers in a single YC batch implies rapid iteration cycles. Each biomarker validation likely requires ~5–20 construct variants (promoters, linkers, ribosome binding sites, codon optimization). At 500–2000 bp per construct, demand for short cloned DNA would be substantial (1000s of orders/year). This is exactly the 'variant screening' use case described in the ICP. |
| E. coli KRX expression | high | 100-1000 | Synthetic biomarkers and detection proteins likely involve bacterially-expressible enzymes, peptides, or small protein domains (e.g., β-galactosidase fusion, anti-cancer biomarker-binding domains, signal amplification enzymes). E. coli KRX expression with immediate purification would match Cleancard's iterative validation cycle and supply of reference standards or positive controls needed for assay development. |
| Cell-free expression | medium | 100-1000 | Cell-free systems useful for rapid prototyping of toxic or difficult-to-express biomarker components, or for in-vitro validation before live cell testing. Lower priority than E. coli but valuable for exploratory constructs. |
| End-to-end binder workflow | medium | <100 | Cleancard's core focus is synthetic biomarker systems, not antibody/binder discovery at scale. However, designed binding proteins (e.g., aptamers, engineered domains) may be needed for biomarker capture or signal transduction. BLI quantification would be useful for validating binding kinetics of newly designed biomarker-binding constructs, but likely not a bottleneck (in-house or academic partnerships may suffice). Lower throughput than DNA/expression services. |

### Key lab contacts

- [Thomas Carroll](https://www.linkedin.com/in/thomas-carroll-62a60367/) — CSO & Co-Founder
- Luca Springer — CEO & Co-Founder
- Amber Casillas — Clinical Research Scientist

### Hiring

- **Actively hiring wet-lab roles**:
  - Diagnostics Clinical Lead (clinical study design, FDA pathway, QMS)
  - Lab & Operations Manager (EHS compliance, procurement, equipment management)
- Evidence: https://www.ycombinator.com/companies/numen/jobs/fb3p9ZM-diagnostics-clinical-lead

## Recommended pitch

Position clonal DNA + KRX expression services as the 'iteration engine' for Cleancard's biomarker targeting velocity. Emphasize: (1) cost ($50/assembly vs. $100–150 incumbent) allows rapid design cycles without budget drag; (2) fast turnaround (48–72h) supports the '10 biomarkers per batch' velocity they've demonstrated; (3) end-to-end workflow (synthesis → expression → purification) eliminates handoff delays. Offer discounted pilot block (100–200 constructs) at Series A close, tied to long-term volume commitment once clinical validation data support scale-up. Reference Mayo Clinic Platform investment as validation of regulatory / commercial credibility.

## Why this score

Strong fit on two of four service lines (clonal DNA, E. coli expression) with credible high-volume demand (1000–10k short constructs/year). Founders' deep biotech expertise and Rhodes Scholar credibility indicate serious execution. Pre-seed stage = easy outreach, no procurement overhead. Partial in-house synthesis and expression capability downgrades score by 1 level (from 5) per rubric. Risks: regulatory/clinical pathway uncertainty for at-home cancer diagnostics may delay pivot to manufacturing scale-up; wet lab cash burn may constrain vendor engagement until Series A close.

## Recent signals (24 mo)

- **2024-02** — Hiring for Diagnostics Clinical Lead role on Y Combinator jobs board; evidence of clinical team expansion and regulatory pathway preparation
- **2024-02** — Hiring for Lab & Operations Manager role; infrastructure scaling for increased throughput and compliance (EHS, GLP/GMP readiness)
- **2025-05** — Team size confirmed at 16 employees (Y Combinator batch S23 data as of Feb 2026)

## Risks / concerns

- Clinical validation and regulatory pathway: At-home cancer diagnostics face high FDA scrutiny; false-positive/false-negative rates must be exceptionally low to avoid patient harm and oncology resource strain
- Market perception and adoption: Consumer skepticism regarding at-home cancer tests; potential liability if tests yield inconclusive or false results
- Competitive landscape: Multiple established players in liquid biopsy and at-home diagnostics; incumbent molecular labs (Myriad, Foundation Medicine) have regulatory approvals and clinical evidence
- Synthetic biology IP and reproducibility: Dependence on proprietary biomarker designs and synthetic constructs; manufacturing consistency at scale is non-trivial
- Funding stage risk: Still pre-seed as of late 2023; no Series A announced; limited runway and cash burn for wet-lab operations
- London-based operations in a US-centric market: Regulatory approvals and commercialization timelines may be complicated by dual-jurisdiction requirements

## Relevant papers

- [Predictive biomarkers for metastatic esophageal cancer](Published during PhD; exact DOI not sourced) — Thomas Carroll, Cancer Cell (2023)  
  _Co-founder Carroll's foundational research identifying biomarkers for early cancer detection, directly motivating Cleancard's mission to translate biomarker science into rapid at-home diagnostics_

## Sources

- [Numen: Engineering a future without cancer deaths | Y Combinator](https://www.ycombinator.com/companies/numen) _[company_site]_
- [Numen Homepage](https://www.numen.com/) _[company_site]_
- [Cleancard Homepage (cleancard.bio domain)](https://www.cleancard.bio/) _[company_site]_
- [Cleancard - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/cleancard) _[crunchbase]_
- [Cleancard 2025 Company Profile: Valuation, Funding & Investors | PitchBook](https://pitchbook.com/profiles/company/534565-27) _[crunchbase]_
- [Cleancard - 2025 Company Profile, Funding & Competitors - Tracxn](https://tracxn.com/d/companies/cleancard/__wuCvVWcyBpnuFfqa6nRyFh4NxlcN4OQ5tSI-v-3wODk) _[crunchbase]_
- [Cleancard | LinkedIn Company Page](https://www.linkedin.com/company/cleancardbio) _[linkedin]_
- [Better Diagnostics | Rice Magazine](https://magazine.rice.edu/summer-2023/better-diagnostics) _[press]_
- [Thomas Carroll - CSO & Co-Founder at Numen | LinkedIn](https://www.linkedin.com/in/thomas-carroll-62a60367/) _[linkedin]_
- [Diagnostics Clinical Lead at Numen | Y Combinator](https://www.ycombinator.com/companies/numen/jobs/fb3p9ZM-diagnostics-clinical-lead) _[press]_
- [Cleancard - Health Care Company Profile | Bounce Watch](https://bouncewatch.com/explore/startup/cleancard) _[crunchbase]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on founding team credentials, Y Combinator batch, basic funding (Crunchbase + PitchBook), and current product focus (multiple sources corroborate synthetic biology + AI, urine-based, 30-min runtime, 3 initial cancers, 10 new biomarkers in YC23). Medium confidence on wet-lab intensity and DNA/protein synthesis demand: inferred from synthetic biology methods and iterative biomarker design, but not explicitly detailed in public materials. No peer-reviewed publications from the team on the Cleancard platform itself; clinical validation and regulatory strategy remain opaque. Headcount and hiring signals are current (Feb 2026 data from Y Combinator and RocketReach). London HQ confirmed via Crunchbase legal registration; SF operations mentioned in Rice Magazine but not formally confirmed. No recent (2025–2026) press announcements on funding, partnerships, or clinical progress; last major signal was Aug 2023 YC Launch.
- **Data gaps**:
  - Post-money valuation from pre-seed round (Sept 2023) not publicly disclosed
  - Detailed breakdown of in-house synthesis vs. outsourced supply chain unclear
  - No published papers by Cleancard team on platform methodology; preprints or early-stage validation data not available in public sources
  - Clinical trial status or regulatory feedback (FDA pre-submission, etc.) not disclosed
  - Commercial partnerships or pilot agreements beyond Mayo Clinic Platform backing not announced
  - Series A timeline and target raise size not communicated

---
_Source brief: `surface_claude/runs/20260513T215613Z_numen/brief.json`_
