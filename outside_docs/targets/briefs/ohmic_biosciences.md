# Ohmic Biosciences

**Score: 3/5** · (Tier 3 — Cold) · `plant_or_ag` · Stage: seed_to_series_A · Outreach: easy · HQ: Alameda, United States · Founded: 2021

> Protein engineering platform to design pathogen-resistant crop traits that are robust to pathogen evolution

## What they do

Ohmic Biosciences uses protein engineering and synthetic biology to design resistance genes for crops that directly block pathogen attack mechanisms. Instead of screening for naturally occurring traits, they rationally engineer resistance proteins (called R-proteins) that inhibit pathogen effector proteins. Current focus: soybean cyst nematode (SCN) resistance, which causes >$1.5B annual crop loss in the US.

**AI role**: Protein design/ML likely used in silico engineering of resistance proteins to optimize inhibition of pathogen effectors; computational approach to identify targets and design molecules, though not explicitly stated as core differentiator.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Soybean cyst nematode (SCN) resistance trait | plant_genetic_modification | Disease resistance in soybean crops; targets parasitic nematode that causes >$1.5B annual yield loss in US | discovery | — | Described as first product in development; World Agri-Tech pitch (March 2024) (2024-03) |

## Funding

- **Total raised**: $500.0K
- **Last round**: Seed · $500.0K · 2023 · led by Y Combinator (also: Climate Capital)

## Founders & key people

- **PJ Steiner** — Co-Founder, CEO _(founder)_
  Computer scientist and protein engineer with SB/MEng in computer science from MIT and PhD in synthetic biology from Cambridge. Postdoc at UCSD in synthetic biology. Spent two years as scientist at Bolt Threads engineering yeast for protein production. Worked on DARPA project at University of Colorado Boulder using protein engineering to turn plants into chemical biosensors, where he met co-founder Matthew Bedewitz. Technical specialization: protein engineering, synthetic biology, computational biology.
- **Matthew Bedewitz** — Co-Founder _(founder)_
  Plant biochemist with BS in Horticulture Science and PhD in Plant Breeding, Genetics, and Biotechnology from Michigan State University. Doctoral research characterized enzymes in tropane alkaloid production (nerve agent antidotes and stimulants including cocaine). Met PJ Steiner during DARPA protein engineering project on plant bioengineering. Technical specialization: plant biochemistry, protein engineering, genetics, analytical chemistry.

## Customer fit

- **Bench headcount**: 2 (_high_) — Confirmed headcount from multiple sources (Y Combinator, PitchBook, Tracxn) as of mid-2025. Only founders currently employed; no wet-lab staff reported.
- **Primary modality**: plant_or_ag
- **Expression systems**: Plant transformation (likely Agrobacterium tumefaciens), Bacterial expression (likely E. coli for protein characterization and validation)
- **In-house DNA synthesis**: unknown
- **In-house protein production**: unknown

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | medium | 100-1000 | Protein engineering platform requires iterative design of R-protein expression constructs. Likely need for cloned VH/VL-like protein domains, inhibitory peptides, and promoter-fusion constructs for transient and stable plant transformation. At 2-person pre-product stage, volume is modest but growing; likely <500 constructs/year currently. Would increase substantially post-Series A if development accelerates. E. coli expression constructs for rapid validation of engineered proteins also a use case (e.g., MBP-fusion purification). |
| E. coli KRX expression | high | 100-1000 | Core workflow likely involves rapid prototyping and validation of engineered R-proteins and binding assays with pathogen effectors. E. coli expression ideal for quick iteration: expressed proteins, protein-protein binding assays, structural studies. KRX strain useful for toxic protein expression (some engineered proteins may be antimicrobial). Would support 50-200 expression runs/year at current stage, scaling to 500+ if platform matures. |
| Cell-free expression | medium | <100 | Useful as secondary method for difficult-to-express engineered proteins or rapid prototyping of toxic variants. Not primary bottleneck; E. coli likely sufficient for most needs. Potential use for plant-optimized codon variants or toxic effector proteins during assay development, but lower priority than bacterial expression. |
| End-to-end binder workflow | low | <100 | Company designs plant R-proteins (which are large, multi-domain PRRs/NB-LRRs), not mini-binders or nanobodies. No evidence of AI/ML binder design. While they may eventually use designed small-binder inhibitors of pathogen effectors, primary focus is rational engineering of native plant immune proteins. Not ideal customer for high-throughput binder discovery workflow. BLI throughput not a current bottleneck. |

### Key lab contacts

- [PJ Steiner](https://www.linkedin.com/in/pjsteiner/) — Co-Founder, CEO
- Matthew Bedewitz — Co-Founder

## Recommended pitch

Position as research partner for rapid prototyping of engineered R-protein variants: 'We specialize in quick-turnaround cloning and E. coli expression for protein validation workflows. Your protein-engineering platform will benefit from fast iteration on construct design—DNA synthesis at $50/assembly and same-day KRX expression lets you test dozens of engineered variants per week rather than weeks. As you scale post-Series A, we can bundle expression + BLI characterization to de-risk lead candidates before plant transformation.' Emphasize speed and cost advantage vs. Twist/IDT; position as scalable vendor for growth phase.

## Why this score

Moderate fit on E. coli expression services (high) and clonal DNA synthesis (medium), but primary modality is plant genetic modification, which falls outside core DNA synthesis/bacterial expression focus. No near-term revenue signal (pre-product, discovery stage). Very small headcount and budget. Plant biotech timelines are long; immediate synthesis volume likely <500 constructs/year. However, founders have strong protein engineering pedigree (MIT, Cambridge, Bolt Threads, DARPA) and deep molecular biology knowledge, suggesting they will need robust expression/characterization capabilities as they scale. Potential warm-up once they announce Series A funding (which would unlock increased bench hiring and R&D spending).

## Recent signals (24 mo)

- **2024-03** — Highlighted as company to watch at World Agri-Tech 2024 startup arena in San Francisco; pitched SCN resistance as first product
- **2023** — Completed Y Combinator S23 batch and raised $500K seed from Y Combinator and Climate Capital

## Risks / concerns

- Very early stage: only $500K raised, 2 employees, pre-product (discovery stage only). No commercial partnerships or customer validation announced.
- Regulatory uncertainty: plant genetic modification faces regulatory scrutiny (EPA, USDA, FDA approval pathways for GE crops vary by country). Approval timelines for new crop traits are 7-10+ years.
- Market concentration risk: major seed companies (Corteva, Bayer, BASF) are consolidating crop biotech. Licensing deals may be difficult to close.
- Unproven platform: no published data or milestones demonstrating that engineered R-proteins actually confer durable disease resistance in field trials.
- Technical risk: pathogen evolution and multi-gene redundancy in pathogen effector suites could defeat single-target engineered resistance.
- Capital intensity: plant biotech development and regulatory approval is extremely capital-intensive; likely to require significant Series A+ funding.
- No evidence of in-house synthesis or protein production capability; dependent on vendors for critical bottleneck activities.

## Sources

- [Ohmic Biosciences official website](https://www.ohmicbiosciences.com/) _[company_site]_
- [Y Combinator company profile for Ohmic Biosciences](https://www.ycombinator.com/companies/ohmic-biosciences) _[crunchbase]_
- [PitchBook Ohmic Biosciences profile](https://pitchbook.com/profiles/company/534583-27) _[crunchbase]_
- [Tracxn Ohmic Biosciences profile](https://tracxn.com/d/companies/ohmic-biosciences/__f0P7SjaHpAkrM1SdlOCq8n-01ZIGqwUfAed1Cu8W0MI) _[crunchbase]_
- [Crunchbase Ohmic Biosciences profile](https://www.crunchbase.com/organization/ohmic-biosciences) _[crunchbase]_
- [LinkedIn Ohmic Biosciences company page](https://www.linkedin.com/company/ohmic-biosciences) _[linkedin]_
- [Y Combinator Launch: Ohmic Biosciences](https://www.ycombinator.com/launches/J5Y-ohmic-biosciences-genetically-engineering-disease-resistant-plants) _[press]_
- [Seed World: Companies to Watch from World Agri-Tech 2024](https://www.seedworld.com/us/2024/03/27/companies-to-watch-from-the-start-up-arena-at-world-agri-tech/) _[press]_
- [CB Insights Ohmic Biosciences profile](https://www.cbinsights.com/company/ohmic-biosciences) _[crunchbase]_
- [PJ Steiner LinkedIn profile](https://www.linkedin.com/in/pjsteiner/) _[linkedin]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on basic facts (founding date, founders, location, funding amount, current stage, Y Combinator batch) from multiple consistent sources. Medium confidence on wet-lab intensity and synthesis demand signal—inferred from company's protein-engineering focus and typical molecular biology workflows, but no public documentation of their specific lab setup or vendor relationships. Low confidence on near-term demand (synthesis volume estimates are extrapolations from typical early-stage biotech bench size). No access to internal operations or vendor selection criteria. Risk: company may have already established preferred vendors or in-house capability not publicly disclosed.
- **Data gaps**:
  - Exact funding date for 2023 Seed round (only '2023' confirmed, not specific month)
  - Post-money valuation from Seed round (not disclosed)
  - Whether company has in-house DNA synthesis or protein production capability (no evidence either way)
  - Current or projected R&D spending and synthesis volume (not publicly disclosed)
  - Any publications or patent filings by founders post-Ohmic founding (no PubMed or USPTO results found)
  - Details on current wet-lab infrastructure or partnerships (not disclosed)
  - Commercial partnerships or licensing discussions (no announcements found)
  - Series A fundraising status or timeline (no recent signals)

---
_Source brief: `surface_claude/runs/20260513T212242Z_ohmic_biosciences/brief.json`_
