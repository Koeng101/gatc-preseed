# FinalDose

**Score: 4/5** · (Tier 1 — Hot) · `other` · Stage: stealth_or_pre_seed · Outreach: easy · HQ: London, United Kingdom · Founded: 2025

> Programmable DNA-recognition drug platform that encodes disease-specific genetic sequences to identify and destroy target cells upon DNA binding.

## What they do

FinalDose is developing a single smart drug molecule that can be reprogrammed by inserting different diseased genetic codes. The platform works by scanning the genome for hardcoded target sequences and triggering a kill switch upon successful recognition, enabling cell destruction based on DNA-level disease markers rather than protein epitopes. The company claims the platform unlocks 80% of undruggable targets (disease drivers lacking druggable proteins) and is starting with cancer.

**AI role**: Machine learning is used for target identification from high-throughput genetic data and for computational modeling of coevolution biology to identify genetic targets. The platform itself uses DNA-sensing proteins with structural changes as recognition mechanisms, though the 'programmability' aspect is more about modular construct design than AI-driven synthesis.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Programmable DNA-recognition platform (FD-001 program, cancer focus) | Small molecule / engineered DNA conjugate | Cancer (multimodal, target-agnostic) | discovery | — | YC P26 acceptance and launch; public platform description (2026-04) |

## Funding

- **Total raised**: —
- **Last round**: Seed · — · 2026-04 · led by Y Combinator

## Founders & key people

- **Jeff Liu** — CEO _(founder)_
  Oxford PhD in Oncology. Previously founded Vivid Dx, a sepsis diagnostics company (raised $5M seed + $10M Pre-Series A), which solved biomass isolation bottleneck by building the world's fastest diagnostic system (5 days → 30 minutes). Track record closing institutional rounds. Deep expertise in translating bench discoveries to clinical diagnostics and product development.
- **Li-Yao Huang** — CSO (Chief Scientific Officer) _(founder)_
  Oxford DPhil in Biochemistry, 5 years postdoctoral researcher at MRC Weatherall Institute of Molecular Medicine. Led CRISPR screening projects uncovering novel druggable targets in cancer cells and built pipelines reducing hit validation time from months to 7 days. Expertise in Cas9 derivatives for target identification and validation, molecular biology, cellular assays, construct engineering. Research focus: BRCA1-deficient cancers and PARP inhibitor resistance mechanisms.
- **Steven Lin** — CTO (Chief Technology Officer) _(founder)_
  Oxford PhD in Computational Biology with Wellcome Trust full scholarship. Previously Data Lead at Gutsee Biotech. Developed novel machine learning methods using coevolution biology to identify genetic targets conferring drug resistance in viruses. Led UK biobank analysis of human genetics susceptibility for infections during SARS-CoV-2 pandemic. Specialization: computational biology, machine learning for target discovery, viral genomics.

## Customer fit

- **Bench headcount**: 3 (_medium_) — FinalDose has 5 employees total. Based on founder roles (CEO, CSO, CTO), the bench team likely comprises 2-3 scientists/engineers (Li-Yao Huang + 1-2 wet lab / postdoc-level researchers) doing construct design, cellular assays, CRISPR screening, and molecular biology. CEO (Jeff Liu) is management-focused given prior startup track record.
- **Primary modality**: other
- **Expression systems**: Unknown - platform is DNA-recognition based, not traditional protein expression. May require transient mammalian expression or cell-free expression for DNA-sensing protein characterization, or bacterial for domain validation.
- **In-house DNA synthesis**: unknown
- **In-house protein production**: unknown

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | FinalDose's core platform is built on iterative construction and optimization of short DNA elements encoding disease-specific target sequences, DNA-sensing domains, and linker/payload elements. Each new cancer target (or variant of the same target with different biomarker combinations) requires new short DNA constructs. Early discovery phase (current) will demand high-volume, low-cost cloning of variants. Targets are likely <2 kb (small guide sequences, protein domains, modular payloads). At 3 FTE wet lab and iterative optimization (50+ variants per target), ~1000-5000 constructs/year is plausible in Seed-to-Series A phase. |
| E. coli KRX expression | medium | 100-1000 | The DNA-sensing protein domain(s) may be bacterial-expressible for initial characterization and domain validation (e.g., small proteins, engineered domains). However, if the platform requires mammalian cell context for proper delivery, cellular assays, or in vivo work, bacterial expression is limited. Likely 5-20 constructs per design cycle for protein characterization, not bulk production. Suitable for early-stage exploratory protein engineering but not mainstream workflow post-Series A. |
| Cell-free expression | low | <100 | Cell-free systems are useful for toxic proteins or ultra-rapid prototyping, but FinalDose's platform core is DNA-recognition (not protein toxicity), and the team's CRISPR screening background implies cellular assays and mammalian contexts are standard. Cell-free unlikely to be a primary modality. May be used opportunistically for domain screening but not core to the workflow. |
| End-to-end binder workflow | low | <100 | This service is oriented to AI/ML protein-design teams making many binders and needing BLI characterization. FinalDose is not designing arbitrary binders; they are engineering DNA-sensing proteins with a specific mechanism (recognition + kill switch). Their primary need is construct assembly and cellular assays (CRISPR screening for efficacy), not high-throughput binder characterization. End-to-end binder workflow does not match their modality or stage. |

### Key lab contacts

- Li-Yao Huang — CSO
- [Jeff Liu](https://www.linkedin.com/in/jeff-liu-dphil-194a1372/) — CEO
- Steven Lin — CTO

## Recommended pitch

Hi Li-Yao, we noticed FinalDose's focus on rapid construct iteration for DNA-sensing platform discovery. We offer clonal DNA assembly (<2 kb, $50/reaction) 10x faster than IDT/Twist with bulk discounts (100+ constructs/year). Combined with optional E. coli expression for quick protein domain characterization, you can compress variant-screening cycles from weeks to days without hiring. Given your CRISPR screening background, we anticipate 1000+ constructs/year in your discovery phase. We've worked with early-stage cancer biology teams at Seed stage and can flex volumes as you scale. Curious if you'd benefit from a trial batch on your next target variant set.

## Why this score

FinalDose is a strong fit on 1-2 of our four service lines (clonal DNA assembly, possibly E. coli expression for protein domain characterization). They are at optimal company stage (Seed/YC, not entrenched), have proven founders with capital, and operate in high-throughput iterative discovery (perfect for low-cost bulk DNA assembly). The primary modality (DNA-recognition small molecule) is orthogonal to traditional protein-design vendors, reducing competitive noise. Bench headcount (~3 FTE) implies moderate order volumes. Risks: very early-stage (unproven modality, no published validation), no clear protein expression intensity, and possible in-house capabilities (unknown). Recommend early-stage outreach to CSO (Li-Yao Huang) with focus on clonal DNA cost/speed + optional protein expression for domain validation.

## Recent signals (24 mo)

- **2025-10** — Company incorporated (28 October 2025) as FINALDOSE LTD in UK under company number 16816175.
- **2026-04** — Accepted into Y Combinator Spring 2026 (P26) cohort; public launch with platform description and founder bios.
- **2026-04** — Public messaging emphasizes programmable DNA-recognition platform for 'undruggable' cancer targets, with 5-person team based in London.

## Risks / concerns

- Very early-stage (stealth ~6 months at time of data collection). No published peer-reviewed validation of the core DNA-sensing kill-switch mechanism in the open literature; reliance on private YC narrative.
- Mechanism novelty and regulatory pathway unclear: DNA-recognizing small molecules are relatively novel; pathway to IND and clinical development for programmable constructs is untested in regulatory precedent.
- Founders' prior experience (Vivid Dx diagnostics, CRISPR screening) is strong but not in therapeutic modality or drug development beyond early biomarkers; CEO's prior startup was diagnostics, not therapeutics.
- Heavy dependence on rapid DNA synthesis and variant testing; supply chain and manufacturing scalability not yet addressed.
- The claim to address 85% of undruggable targets is ambitious and not yet mechanistically demonstrated in preclinical studies.
- Stealth stage implies no external partnerships, validations, or pilot data publicly visible.

## Sources

- [FinalDose: Programmable DNA drug destroying all cancers, unlocking 80% of targets | Y Combinator](https://www.ycombinator.com/companies/finaldose) _[company_site]_
- [FINALDOSE LTD - Companies House (UK)](https://find-and-update.company-information.service.gov.uk/company/16816175) _[other]_
- [FinalDose official website](https://finaldose.ai/) _[company_site]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence in founding team backgrounds, company incorporation, YC acceptance, and basic platform narrative (all sourced from Y Combinator, Companies House UK, and founder LinkedIn). Medium confidence in wet-lab intensity, synthesis demand, and headcount composition because the company is stealth-stage with minimal public technical detail; inferences about construct complexity, iteration volume, and internal capabilities are reasonable extrapolations from founder experience and modality but not independently validated. No independent peer-reviewed publications, press releases, or partner announcements to corroborate claims about undruggable targets or kill-switch efficacy. Recommend follow-up technical conversation with CSO to refine synthesis demand and protein expression intensity.
- **Data gaps**:
  - Total funding raised: YC investment amount not disclosed; unclear if FinalDose has raised external seed capital beyond YC.
  - Exact post-money valuation not available.
  - In-house DNA/protein synthesis capability: not stated; unclear if team has internal lab space or fully outsources.
  - Commercial partnerships: none identified as of May 2026 (stealth stage).
  - Peer-reviewed publications validating the core mechanism: not found in public domain; platform likely proprietary.
  - IND timeline, preclinical data, or clinical plans: not disclosed.
  - Pipeline stage clarity: described as 'discovery' pending more detail on which cancer indications are in focus or whether 'FD-001' exists as a formal program code.

---
_Source brief: `surface_claude/runs/20260513T215605Z_finaldose/brief.json`_
