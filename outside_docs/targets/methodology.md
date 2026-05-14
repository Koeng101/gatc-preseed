# How these prospects were scored

This document explains what we looked for when ranking companies in `overview.md`, `briefs/*.md`, and `targets.csv`. Read this if you want to understand a score, defend it to a colleague, or adjust the rubric and re-rank.

## TL;DR

For each of ~255 AI-biology companies, we generated a structured intelligence brief using a model with web-search access, then asked it to score the company against our specific service mix using a fixed rubric. Scoring inputs included modality, expression systems used, in-house synthesis capability, funding stage, and hiring signals. Output is a `prospect_score` from 1–5 and a tier (`tier1_hot` … `tier4_unfit`), along with per-service-line fit calls and an estimated annual order volume bucket.

---

## Data source

- **Tool**: Anthropic Claude Haiku 4.5 + `web_search` (5 searches per company)
- **Volume**: ~255 unique briefs (real-time + Batch API combined)
- **Cost**: ~$50 total across both runs
- **Limit**: This is "surface-mode" research. Each brief uses 5 web searches and ~10K output tokens — adequate for ICP fit + recommended pitch, but shallower than a 70-search Deep Research pass. Treat surface briefs as triage-grade. Spend DR budget on the Tier 1 names you actually plan to contact.

We chose Claude over the parallel OpenAI surface run on the basis of a head-to-head on 5 companies — Claude produced sharper strategic scoring (e.g. correctly flagged Absci as `score=1, tier4_unfit` because Absci's vertical integration makes vendor relationships infeasible, where OpenAI invented an "overflow tool" use case), more contacts/sources per brief, and more sales-ready pitch text. OpenAI was more conservative about funding totals (more `null`s, fewer hallucinated sums). The Claude data is canonical for scoring; if a funding number looks off, cross-check the parent `runs/` Deep Research brief or the source URL.

---

## Ideal Customer Profile (ICP) — the question we asked

The model was told, verbatim, what we sell:

1. **Clonal DNA** — assembly reactions up to 2000 bp at $50/assembly (≈half the cost of Twist / IDT / GenScript). Best fit: teams ordering 100+ short cloned constructs per year for protein-design / variant-screening workflows.
2. **E. coli KRX expression + purification** — soluble protein straight out of the clonal culture. Best fit: enzymes, miniproteins, nanobodies (scFv/VHH-friendly). Wrong fit: mammalian-only IgG, glycosylated proteins, membrane proteins.
3. **Cell-free expression** — alternative when E. coli isn't suitable (toxic proteins, rapid prototyping, very small batches).
4. **End-to-end binder workflow** — exploratory: DNA → expression → Gator BLI quantification, for mini-binders, nanobodies, and antibodies. Best fit: AI/ML protein-design teams generating many designed binders per cycle who don't yet have in-house BLI throughput.

We also said: earlier-stage startups (typically Pre-seed → Series A) are higher-priority because they have less procurement friction and no entrenched vendor lock-in.

---

## Scoring rubric

### `prospect_score` — the 1-to-5 number

| Score | Tier | Meaning |
|---|---|---|
| **5** | `tier1_hot` | Ready-to-pitch hot lead. Strong fit on multiple service lines, easy to reach. |
| **4** | `tier2_warm` | Strong fit on at least one service line plus easy outreach, OR strong fit across all lines but harder to reach. |
| **3** | `tier3_cold` | Plausible fit, but modest volume, niche service alignment, or harder access. |
| **2** | `tier4_unfit` | Niche or weak fit — would need to invent a use case. |
| **1** | `tier4_unfit` | No real fit. Wrong modality, wrong expression host, or vertically integrated competitor. |

### Modality determines the floor

Each company is classified into one `primary_modality` and we use it as the dominant factor:

| Modality | Default fit profile | Typical score range |
|---|---|---|
| `miniprotein_or_nanobody` | All four services usually `high`; ideal ICP. | 4–5 |
| `enzyme` | Bacterial expression standard, lots of variants, short constructs. | 4–5 |
| `antibody` | DNA fit high (VH/VL constructs <2 kb); E. coli fit *depends* on whether they use mammalian-only or have a bacterial fragment pipeline. | 3–5 |
| `mRNA_or_RNA` | DNA fit lower — IVT templates often exceed 2 kb. Expression usually downstream of synthesis. | 2–3 |
| `AAV_or_gene_therapy` | Viral genome work — constructs typically >2 kb. Expression services don't apply. | 1–3 |
| `microbial_strain` | DNA work yes, but constructs are often pathway-scale (>2 kb). | 2–3 |
| `plant_or_ag` | Gene cassettes typically >2 kb; outputs are seeds/biomass, not protein. | 1–2 |
| `small_molecule` | No DNA / protein workflow. Hard rule: scores ≤ 2. | 1–2 |
| `software_only` | No wet lab. Hard rule: scores ≤ 2. | 1–2 |
| `other` | Used when modality is mixed, ambiguous, or genuinely cross-cutting (e.g. platform + product). Score depends on what they actually build. | 1–5 |

### Hard rules (deterministic downgrades)

These applied regardless of other signals:

- `primary_modality == software_only` or `small_molecule` → all service fits forced to `low`/`none`, `prospect_score ≤ 2`.
- `primary_modality == antibody` **and** `expression_systems_used` contains only mammalian (CHO/HEK) **and** no bacterial host → `clonal_dna_under_2kb` can still be `high` (they need VH/VL constructs) but `ecoli_krx_expression` is forced to `low`.
- `in_house_dna_synthesis == yes` (notable: Ansa, Constructive Bio, Asimov, BigHat post-Frugi, Adaptyv) → `clonal_dna_under_2kb` fit downgraded by one level, `prospect_score` lowered by 1.
- `in_house_protein_production == yes` at industrial scale (notable: Absci, Ginkgo) → all expression-service fits downgraded.

### Outreach difficulty

| Stage | Difficulty | Rationale |
|---|---|---|
| `stealth_or_pre_seed` to `seed_to_series_A` | easy | Founder-driven, no procurement gauntlet, no entrenched vendor. |
| `series_B` | moderate | Procurement processes forming; founder reachable. |
| `series_C_plus` / `public` / `mature` | hard | Procurement-gated, often existing vendor master agreements. |

Outreach difficulty doesn't change the fit score on its own — it caps the **prospect_score**. A company can be a perfect technical fit but hard-to-reach (e.g. Absci, Recursion); they still get a fit reading, just at a lower prospect score.

---

## What the model captured per company

Every brief in `briefs/*.md` reflects extraction of these fields (full JSON in `surface_claude/runs/<ts>_<slug>/brief.json`):

- **Identity**: company name, HQ, founded year, headcount (`as_of` dated), status (`active` / `acquired` / `pivoted` / `shut_down`)
- **What & how**: `one_liner`, `what_they_do`, `ai_role`, `wet_lab_intensity` (high/medium/low/unknown) with rationale
- **Pipeline**: each program with modality, indication, stage, partner, latest milestone + date
- **Funding**: `total_raised_usd`, full round history with dates / leads / amounts, post-money valuation if disclosed, non-dilutive grants
- **Commercial deals**: pharma/industrial partnerships with disclosed upfront and total-potential values
- **People**: founders and key personnel — name, role, background, `is_founder`, `is_active`. Separately, **`key_lab_contacts`** at the operating level (Head of Biology, Director of Protein Engineering) where findable.
- **Hiring**: `actively_hiring_wet_lab` boolean + open-role examples + careers URL when present
- **Synthesis demand signals**: qualitative `high`/`medium`/`low` per DNA / protein / oligo; in-house capabilities; known vendor relationships (often inferred — treat skeptically)
- **`customer_fit.service_fit`** — for each of our four service lines: `fit` (`high`/`medium`/`low`/`none`), `estimated_annual_orders` (`<100`, `100-1000`, `1000-10000`, `10000+`, `unknown`), rationale
- **Final**: `prospect_score`, `tier`, `recommended_pitch`, `rationale`
- **Honesty fields**: `_confidence` (high/medium/low), `_confidence_rationale`, `_data_gaps` enumerating what we couldn't source

---

## How the three outputs use this data

- **`overview.md`** — every company at `score ≥ 3`, grouped by tier. For each: one-liner + the highest-fit service rationale (their reason to buy) + our recommended pitch (our angle).
- **`briefs/<slug>.md`** — full per-company detail brief, structured into Pipeline, Funding, People, Customer Fit, Service Fit table, Recommended Pitch, Recent Signals, Risks, Papers, Sources, Confidence + Gaps. Use when you're about to email someone at this company.
- **`targets.csv`** — flat 25-column spreadsheet, sortable by score. Includes `service_fit_summary` (e.g. `DNA=high Ecoli=high CF=medium E2E=high`) so you can filter by service mix.
