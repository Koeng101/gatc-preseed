# Modulari-T

**Score: 4/5** · (Tier 2 — Warm) · `miniprotein_or_nanobody` · Stage: seed_to_series_A · Outreach: easy · HQ: Montreal, Canada · Founded: 2021

> Synthetic gene programming platform using modular immune receptors (MARCs) to reprogram T cells and other immune cells for oncology and regenerative medicine.

## What they do

Modulari-T develops synthetic immune receptors and delivery vehicles to engineer immune cells for cell and gene therapy. Their core platform, MARC (Modular Actuation Receptor Complex), mimics the modular architecture of natural immune receptors to achieve superior CAR-T efficacy while reducing toxicity and immune exhaustion. The company claims 2x tumor-clearing power versus conventional CAR-T with 90% reduction in harmful side effects.

**AI role**: AI protein design engine powers receptor engineering and optimization; company applies computational protein design to generate optimized receptor sequences for cell reprogramming.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| MARC (Modular Actuation Receptor Complex) | synthetic immune receptor | Oncology (primary), autoimmunity, regenerative medicine, fibrosis | preclinical | — | MARC publication demonstrating improved T cell persistence and efficacy in JITC (Journal for ImmunoTherapy of Cancer) (2025-01) |
| MoVe (Modular Vectors) | delivery platform | In vivo delivery of MARC to immune cells | preclinical | — | Platform under development for targeted in vivo delivery (—) |

## Funding

- **Total raised**: $500.0K
- **Last round**: Seed · $500.0K · 2023-04 · led by Pioneer Fund (also: Y Combinator, Creative Destruction Lab, Merck Digital Sciences Studio, MassBio)

## Founders & key people

- **David Cotnoir-White** — CEO & Co-Founder _(founder)_
  PhD in protein receptor engineering with expertise in synthetic biology. During his PhD, he discovered how protein receptors form complex structures that alter cell behavior—knowledge that became the foundation for Modulari-T's MARC technology. He completed Y Combinator Winter 2023 cohort. Has published on protein signaling mechanisms and receptor modulation.
- **Stephanie Mok** — COO & Co-Founder _(founder)_
  PhD in Chemical Engineering from McGill University with technical background in synthetic biology, advanced 3D cell culture systems, and biomaterials in the cancer microenvironment. Fascinated by innovations in cell-based therapies and scale-up of manufacturing. Gave unconference talk on growing world's hottest peppers (signal of biotechnology integration mindset).
- **Étienne Gagnon** — Co-Founder & Scientific Advisor _(founder)_
  Post-doc at Dana-Farber Cancer Institute where he characterized the resting state of immune receptors (TCR) and proper activation steps. Currently a professor at the Institute for Research in Immunology and Cancer (IRIC) with focus on molecular and translational immunology. Provides scientific guidance on immune receptor biology.

## Customer fit

- **Bench headcount**: 4 (_medium_) — Y Combinator profile reports 4 employees as of ~2023, PitchBook reports 9 as of 2026. Bench estimate of 4 reflects estimated wetlab/engineering staff (vs. CEO/COO/admin) dedicated to construct design, testing, and optimization. Modest headcount suggests high reliance on outsourced synthesis and expression.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: mammalian cells (T cells primarily), cell-free expression (likely for initial screens), bacterial expression (for recombinant receptor domains)
- **In-house DNA synthesis**: no
- **In-house protein production**: no

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | MARC platform requires continuous design and synthesis of many short gene sequences encoding modular receptor domains (~300-500 bp per domain, assembled in combinations). Multi-input logic gates, variable-domain libraries, optimization cycles, and parallel testing of antigen recognition domains all drive high-volume short construct demand. AI protein design engine likely generates 10s to 100s of variants per month for testing. |
| E. coli KRX expression | high | 100-1000 | E. coli expression well-suited for bacterial-friendly receptor domains (extracellular antigen-binding portions, signaling domain fragments). Useful for rapid biophysical characterization, binding validation, and structural studies before mammalian cell transfection. KRX expression speed aligns with iterative design cycles. |
| Cell-free expression | medium | 100-1000 | Cell-free systems valuable for rapid prototyping of difficult-to-express receptor fragments (membrane proteins, aggregation-prone signaling domains). Less critical than clonal DNA and E. coli; likely secondary validation tool rather than primary platform. |
| End-to-end binder workflow | medium | 100-1000 | MARC designs include novel synthetic antigen-recognition domains that could benefit from high-throughput binder discovery/validation. BLI screening of receptor variant libraries could accelerate optimization cycles. Not core workflow but complementary to design-build-test loop. |

### Key lab contacts

- [David Cotnoir-White](https://www.linkedin.com/in/david-white-modulari-t/) — CEO & Co-Founder
- Stephanie Mok — COO & Co-Founder

### Hiring

- **Actively hiring wet-lab roles**:
  - Research Assistant (synthetic biology/molecular biology experience preferred)
  - Synthetic biologist or immunologist roles mentioned in job postings
- Evidence: https://www.ycombinator.com/companies/modulari-t

## Recommended pitch

Modulari-T's MARC platform requires rapid iteration on synthetic receptor constructs—thousands of variants per year to test antigen-binding domains, signaling domain combinations, and delivery improvements. Your clonal DNA service at $50/assembly + 50% cost savings vs. Twist enables 2-3x faster design cycles at lower cost, freeing R&D budget for wet lab validation. Our E. coli KRX expression + BLI characterization accelerates your receptor domain optimization from weeks to days, ideal for AI-guided variant screening. As you scale toward Series A and in vivo studies, we grow with you—and we're flexible partners for early-stage teams.

## Why this score

Strong fit on clonal DNA (high volume, high priority, <2 kb constructs) and E. coli expression (domain characterization, iteration speed). Modest fit on cell-free and binder workflow. Primary modality (synthetic immune receptors as minibinder-like antigen-recognition domains) aligns with miniprotein category. No in-house synthesis/expression = zero downgrade. Stage (early Seed) = easy outreach. Team size & hiring signals suggest readiness to outsource construct manufacturing. Only limitation: preclinical stage means burn rate and construction volume will scale with funding success. Near-term (next 12 months) budget capacity unknown.

## Recent signals (24 mo)

- **2025-01** — Modulari-T MARC platform publication in JITC demonstrating improved T cell persistence and efficacy
- **2025-03** — Company listed as exhibitor at BIO International Convention 2026, indicating active market presence and fundraising phase
- **2024-12** — Confirmed participation in Merck Digital Sciences Studio (North American cohort) — strategic partnership signal for protein design and AI integration

## Risks / concerns

- Very early stage with only $500K raised as of May 2023 (over 20 months ago); likely requires substantial additional funding to advance to IND-stage
- Preclinical-only platform; no disclosed animal efficacy data, manufacturing demonstrations, or clinical pathway timelines
- Crowded CAR-T/synthetic receptor space (Juno Therapeutics, Kite Pharma, Cellectis, etc.); differentiation claim (2x potency) requires rigorous head-to-head validation
- Small team (9 employees) with limited disclosed go-to-market experience; COO is PhD engineer, not biz dev veteran
- In vivo delivery (MoVe platform) is critical but early-stage; no disclosed partners or data on tropism/efficiency
- Founder diversity: CEO + COO both co-founders; succession risk if either depart; no disclosed external board
- Montreal-based; may face talent/funding geography bias vs. Boston/SF hubs despite strong local ecosystem
- Dependency on external partners for drug manufacturing and clinical development; no disclosed manufacturing partnerships

## Relevant papers

- [MARC, a novel modular chimeric antigen receptor, improves T cell-based cancer immunotherapies by preventing early T cell exhaustion and enhancing persistence](https://sitcancer.org/publications/jitc) — Tual et al., Journal for ImmunoTherapy of Cancer (JITC) (2025)  
  _Key peer-reviewed validation of Modulari-T's core MARC platform demonstrating improved efficacy, reduced exhaustion, and enhanced persistence vs. conventional CAR-T. Published in high-impact immunotherapy journal (IF 10.6 as of 2024)._

## Sources

- [Modulari-T: We teach your immune system to attack and cure cancer | Y Combinator](https://www.ycombinator.com/companies/modulari-t) _[company_site]_
- [Modulari-T Bioscience](https://modularit.bio/) _[company_site]_
- [Team | Modulari-T Bioscience](https://modularit.bio/team) _[company_site]_
- [Modulari-T Bioscience 2026 Company Profile: Valuation, Funding & Investors | PitchBook](https://pitchbook.com/profiles/company/467819-29) _[other]_
- [Modulari-T Biosciences - Crunchbase Company Profile & Funding](https://www.crunchbase.com/organization/modulari-t-biosciences) _[crunchbase]_
- [Modulari-T Biosciences - Products, Competitors, Financials, Employees, Headquarters Locations](https://www.cbinsights.com/company/modulari-t-biosciences) _[other]_
- [Modulari-T Biosciences - 2026 Company Profile, Team, Funding & Competitors | Tracxn](https://tracxn.com/d/companies/modulari-t-biosciences/__Vokv-b11kJ4Oq4zgZWipdn1ocZVzZ43GFDumxPX0KR0) _[other]_
- [Modulari-T Bio | LinkedIn](https://ca.linkedin.com/company/modulari-t-bio) _[linkedin]_
- [Modulari-T Bio - BIO International Convention 2026](https://convention.bio.org/exhibitors/modulari-t-bio) _[other]_
- [Modulari-T Biosciences - MassBio](https://www.massbio.org/mb-drive-participant/modulari-t-biosciences/) _[other]_
- [Journal for ImmunoTherapy of Cancer (JITC)](https://www.sitcancer.org/publications/jitc) _[other]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on company status, founders, funding, and platform technology based on multiple corroborating sources (Y Combinator, Crunchbase, PitchBook, company website, LinkedIn, BIO Convention 2026 listing). Publication in JITC 2025 confirms preclinical validation. Headcount data from PitchBook (9 employees, 2026) more recent than Y Combinator (4 employees, 2023). Synthesis demand signal strongly inferred from platform architecture (modular design = many constructs) and AI/design focus, but no disclosed vendor relationships or internal synthesis data. Customer fit assessment is high confidence for modality/stage but medium confidence on annual order volume (not publicly disclosed; estimated from team size and YC-cohort typical burn rates). No material risk of company failure detected in 24-month window (sufficient venture capital + strong science), but Series A success not guaranteed given crowded space.
- **Data gaps**:
  - Post-money valuation from Seed round (April 2023) not disclosed; inferred from minimal public funding data.
  - Specific publications authored by David Cotnoir-White or Stephanie Mok (beyond MARC paper by Tual et al. 2025); background PhD institutions not explicitly confirmed.
  - Exact count of clonal constructs synthesized/designed to date; annual synthesis volume estimates are extrapolated.
  - Commercial partnerships or pharma collaborations (e.g., with delivery companies, contract manufacturers) not publicly disclosed.
  - In-house lab capabilities: specific equipment, biosafety level, cell culture capacity not detailed on website.
  - Etienne Gagnon's formal role (board member, scientific advisor, consultant status) not explicitly defined.
  - Series B fundraising timeline or current round status (as of May 2026) not confirmed in public sources.

---
_Source brief: `surface_claude/runs/20260513T215613Z_modulari_t/brief.json`_
