# SynsoryBio

**Score: 4/5** · (Tier 2 — Warm) · `antibody` · Stage: seed_to_series_A · Outreach: easy · HQ: Somerville, USA · Founded: 2023

> Conditionally activated protein therapeutics with 'if-then' logic that sense disease markers and activate only at diseased tissue.

## What they do

SynsoryBio engineers protein therapeutics with synthetic sensing functions using conditional-logic mechanisms (modeled on 'if-then' statements) that allow drugs to detect specific disease biomolecules and activate only at the site of disease. The platform is applied to cancer immunotherapies and targeted protein degradation approaches, including optogenetic control via the LOVdeg tag (light-activated protein degradation) and tissue-selective bispecific antibodies driving EGFR degradation.

**AI role**: Not prominently featured; company is focused on rational protein engineering and synthetic biology rather than AI-first drug design.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| EpiTAC-EGFR (tissue-selective bispecific antibody) | bispecific antibody / protein degrader | Solid tumors (lung cancer, EGFR-dependent cancers; resistance-mechanism tumors) | preclinical | — | Preclinical efficacy demonstrated in mouse models; goal to enter clinic within ~1 year of late 2024 (2024-07) |
| Optogenetic protein degradation (LOVdeg tag) | light-activated protein degrader / research tool | Bacterial synthetic biology; bioreactor control; microbiome therapeutics (exploratory) | research_only | — | LOVdeg tag designed for bacterial use; expanding toward mammalian applications (exploratory) (—) |

## Funding

- **Total raised**: $510.0K
- **Last round**: Grant · $275.0K · 2024-07 · led by US National Science Foundation
- **All rounds**:
  - 2024-04 · Pre-seed · $500.0K · lead Y Combinator
  - 2024-07 · Grant · $275.0K · lead US National Science Foundation
- **Non-dilutive**: SBIR/STTR grant from NSF (2024-07, $275K); Y Combinator W24 batch

## Founders & key people

- **Elliot Tague** — Co-founder _(founder)_
  PhD in Biomedical Engineering from Boston University. Visiting graduate student in George Church's lab at Harvard. Inventor in synthetic biology and protein engineering with background in biotech startups. Specializes in conditional logic protein design and disease-sensing therapeutics.
- **Nathan Tague** — Co-founder _(founder)_
  PhD in Biomedical Engineering. Synthetic biologist and protein engineer. Published research on optogenetic protein degradation (LOVdeg tag derived from oat phototropin domain); co-authored work on light-activated protein degradation for synthetic biology and therapeutic applications. Deep tech entrepreneurship focused on conditional activation.

## Customer fit

- **Bench headcount**: 2 (_high_) — Company founded 2023, YC W24 batch, only 2 employees as of early 2024. All bench work (cloning, expression, bioanalysis) currently outsourced or minimal in-house.
- **Primary modality**: antibody
- **Expression systems**: mammalian (bispecific antibody production), bacterial (LOVdeg-tagged constructs; synthetic biology), cell-free (exploratory for toxic proteins)
- **In-house DNA synthesis**: no
- **In-house protein production**: no

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Bispecific antibody engineering requires rapid iteration of VH/VL gene constructs, linker variants, and domain swaps. Optogenetic constructs (LOVdeg-tagged proteins) also demand frequent plasmid redesign. Small team moving fast from discovery to preclinical milestone (IND-prep) by 2025 implies sustained high-velocity prototyping: likely 50–200 unique constructs in first 18 months. |
| E. coli KRX expression | high | 100-1000 | Optogenetic protein-degradation constructs (LOVdeg-tagged substrates, control proteins) and bacterial-optimized tools are primary use cases. LOVdeg tag designed for bacteria; LOV domain fusions and prototype degradation assays fit well with E. coli KRX rapid expression. Bispecific antibodies are mammalian-expressed (CHO/HEK), limiting E. coli use for those; but early-stage characterization (scFv fragments, VHH nanobodies, mini-binder controls) could use bacterial hosts. |
| Cell-free expression | medium | 100-1000 | Useful for toxic protein variants (e.g., uncontrolled degraders, disease-marker-sensing domains that are inherently unstable or toxic when expressed in cells). Also attractive for rapid prototyping cycles and scale-down of production. Early-stage preclinical work may favor cell-free for high-throughput library screening or small-batch characterization. |
| End-to-end binder workflow | high | 100-1000 | Bispecific antibodies and nanobodies (disease-marker binding domains, target-engagement validation) benefit from rapid DNA→expression→BLI workflow. Team lacks in-house BLI throughput; outsourced workflows allow fast cycles of design→build→measure. Conditional activation logic may require many binding-domain variants and affinity tuning. |

### Key lab contacts

- Elliot Tague — Co-founder
- [Nathan Tague](https://www.linkedin.com/in/nathan-tague-533019198/) — Co-founder

### Hiring

- **Actively hiring wet-lab roles**:
  - Implicit signal: tiny team (2 ppl) moving EGFR degrader toward IND-enabling studies and preclinical efficacy expansion suggests hiring for protein expression/purification, bioanalysis, and regulatory affairs likely in next 6–12 months.

## Recommended pitch

Position SynsoryBio as your outsourced 'protein engineering infrastructure partner' for rapid iteration cycles. Emphasize: (1) clonal DNA assembly speed and cost for bispecific antibody VH/VL variants and optogenetic construct design; (2) E. coli KRX expression for rapid LOVdeg-tag validation and bacterial-expression-friendly prototypes; (3) end-to-end binder workflow (DNA→expression→BLI) to accelerate disease-marker-binding validation. Highlight cost advantage vs. incumbent vendors (50% cheaper DNA at scale) and low friction onboarding for pre-Seed/Seed teams. Suggest a 6-month partnership to support IND-enabling studies (Q1–Q2 2025) with bundled pricing on DNA + expression for volume discount. Lead with case study: bispecific antibody teams that shipped 150+ constructs in <12 months.

## Why this score

Strong fit on multiple service lines (clonal DNA, E. coli KRX, cell-free, end-to-end binder workflow) due to (a) primary modality = antibody/protein engineering, (b) high DNA/protein synthesis demand for preclinical prototyping, (c) zero in-house synthesis capability, (d) small team that values outsourced infrastructure, (e) very early stage (easy outreach). Score not 5 because: (i) preclinical attrition risk (no clinical data yet), (ii) tiny headcount limits immediate order volume, (iii) only ~18 months into preclinical program (could pivot or be acquired before scaling orders). Score is 4 (strong warm lead) rather than 3 because multiple service lines fit and team is highly accessible.

## Recent signals (24 mo)

- **2024-02** — Y Combinator W24 batch inclusion; public launch of SynsoryBio with conditionally activated protein-drug platform.
- **2024-04** — Y Combinator Pre-Seed round ($500K) completed.
- **2024-07** — NSF SBIR/STTR grant awarded ($275K), signaling academic/government validation of optogenetic and conditional-logic approaches.
- **2024-12** — Preclinical milestone: EGFR degrader demonstrated tumor shrinkage in mouse models; anticipated clinic entry in ~2025.

## Risks / concerns

- Preclinical-stage risk: Lead program (EGFR degrader) not yet IND-ready; typical biotech attrition applies.
- Team size: Only 2 employees limits internal capacity; heavy reliance on external partners/CROs for expression, bioanalysis, and regulatory support.
- Tissue selectivity validation: Early-stage data on tumor penetration and tissue-specific activation in vivo; scaling to humans uncertain.
- Competitive landscape: Bispecific antibodies and targeted protein degradation crowded; conditional logic adds differentiation but not yet proven clinically.
- Funding runway: $510K total raised against preclinical program costs; Series A capital likely needed by mid-to-late 2025.
- LOVdeg tag maturity: Optogenetic approaches in humans face practical challenges (light delivery); mammalian optimization ongoing.
- No published peer-reviewed papers yet; IP strength and novelty harder to assess.

## Sources

- [SynsoryBio: 'If-then' conditional logic for protein drugs | Y Combinator](https://www.ycombinator.com/companies/synsorybio) _[company_site]_
- [SynsoryBio - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/synsorybio) _[crunchbase]_
- [SynsoryBio 2026 Company Profile: Valuation, Funding & Investors | PitchBook](https://pitchbook.com/profiles/company/590183-47) _[crunchbase]_
- [SynsoryBio - 2025 Company Profile, Team, Funding & Competitors - Tracxn](https://tracxn.com/d/companies/synsorybio/__OR4THxWmivoXvrmXWKBNecXbw77qvu5DFPu-9EZ1Rgo) _[crunchbase]_
- [SynsoryBio - Products, Competitors, Financials, Employees, Headquarters Locations](https://www.cbinsights.com/company/synsorybio) _[other]_
- [SynsoryBio: Pioneering Conditional Logic in Protein Therapeutics](https://hiretop.com/articles-archive/synsorybio-next-generation-protein-therapeutics/) _[other]_
- [Nathan Tague - Synthetic Biologist, Protein Engineer](https://www.linkedin.com/in/nathan-tague-533019198/) _[linkedin]_

## Confidence & gaps

- **Self-rated confidence**: medium
- Strong confidence on founding team, funding rounds, and platform strategy (all sourced from Y Combinator, Crunchbase, PitchBook, CB Insights). Medium confidence on technical details (EGFR degrader preclinical readout, optogenetic roadmap) because primary sources are limited to CB Insights and hiretop articles citing unnamed 'Lee-Karlon' and 'Gardai' (likely advisors or board members, not publicly named leaders). No company website, no SEC filings (private), no ClinicalTrials.gov entry yet. Headcount estimate firm for 2024-02 but potentially outdated. Hiring and bench operations not directly observable. Overall: founder/stage/funding profile high-confidence; technical depth and near-term roadmap medium-confidence; hiring/operational detail low-confidence.
- **Data gaps**:
  - No published peer-reviewed papers found for Elliot Tague or Nathan Tague under SynsoryBio name; optogenetic work by Nathan likely predates company but specific citations unavailable.
  - Company website (synsorybio.com) inactive ('More info coming soon'); no technical white papers or method descriptions publicly accessible.
  - No commercial partnerships, licensing deals, or CRO/academic collaborations announced.
  - Exact post-money valuation and equity structure of Y Combinator pre-seed round ($500K) not disclosed.
  - LinkedIn profile for Elliot Tague not located; headcount confidence based on Y Combinator company profile.
  - No public information on hiring plans, open roles, or internal hiring velocity.
  - Bench headcount estimate of 2 is as of Feb 2024; may have grown by May 2026 but no updates found.
  - EGFR degrader manuscript status (preclinical data) not yet published; no preprint found.

---
_Source brief: `surface_claude/runs/20260513T212245Z_synsorybio/brief.json`_
