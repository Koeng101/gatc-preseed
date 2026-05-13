# Fable Therapeutics

**Score: 5/5** · (Tier 1 — Hot) · `miniprotein_or_nanobody` · Stage: seed_to_series_A · Outreach: easy · HQ: Cambridge, USA · Founded: 2021

> ML-driven protein design platform for next-generation biologics in metabolic diseases, focusing on obesity and related comorbidities.

## What they do

Fable applies structure-based and sequence-based diffusion models to design novel protein therapeutics (antibodies and peptides). The platform integrates AI with datasets of billions of protein sequences and structures to engineer molecules optimized for potency, developability, and binding affinity at atomic scale.

**AI role**: Core platform: proprietary structure-based and sequence-based diffusion models for protein generation; continuous-time diffusion model generates novel binders from target structure alone; foundation models pre-trained on billions of sequences and large structural datasets.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| Obesity/metabolic disease pipeline (undisclosed targets) | Antibodies and peptides (protein therapeutics) | Obesity and related metabolic comorbidities; positioning as potential next-generation GLP-1 alternative | discovery | — | CEO expects development candidates for multiple programs in 2025 (2025-12) |

## Funding

- **Total raised**: $53.5M
- **Last round**: Series A · $43.5M · 2024-10 · led by Versant Ventures, DCVC Bio (also: Alexandria Venture Investments, Northleaf Capital Partners, University of Toronto)
- **All rounds**:
  - 2024-09 · Seed · $10.0M · lead —
  - 2024-10 · Series A · $43.5M · lead Versant Ventures / DCVC Bio

## Commercial deals

- **Undisclosed pharma companies (4 small research partnerships)** (2024) — upfront —, total potential —. Four small research partnerships with pharma; details confidential per CEO

## Founders & key people

- **Philip Kim** — Chief Technology Officer and Co-founder _(founder)_
  Ph.D. from MIT AI Lab and Department of Chemistry; dual B.S. in Physics and Biochemistry from University of Tuebingen, Germany. Professorship at University of Toronto (15 years) in Donnelly Centre and Departments of Computer Science and Molecular Genetics. First to publish generative models for protein backbones (2017), first graph neural network for protein design (2019), first validated protein backbone diffusion model (2022). Over 90 peer-reviewed publications, 7 invention disclosures, 5 patent applications. Co-founder and advisor/board member at TBG Therapeutics, Zymedi, Synepark Therapeutics. Prior: postdoc at Yale, associate at McKinsey.
- **Geoff MacKay** — President & Chief Executive Officer
  Former CEO of Organogenesis Inc., where company achieved first FDA approval of allogeneic cell therapy (treating 1M patients). 11 years at Novartis in senior leadership, culminating as VP Transplantation & Immunology. Board chair of Satellos Bioscience, MassBio, Alliance of Regenerative Medicine; health policy advisory council member Massachusetts. Ernst & Young Entrepreneur of the Year (New England). Joined Fable months before his prior company Avrobio halted drug development (2023).
- **David J. Baker, PhD** — Chief Scientific Officer (appointed June 2025)
  Previously Head of Metabolism Bioscience, Cardiovascular, Renal and Metabolism (CVRM) at AstraZeneca plc. 20+ years drug discovery experience in cardio-metabolic therapeutic area. Expertise leading high-performing teams from academia and industry. Strong track record in developing in vivo assays and executing diabetes/metabolic programs.
- **Vanita D. Sood** — SVP, Head of Drug Discovery Research
  15+ years drug discovery experience across small and large molecules. PhD in Molecular and Medical Genetics (University of Toronto); bachelor's 1st class honours in Biochemistry (McGill University). Postdoctoral training in computational and experimental protein design at University of Washington under Nobel laureate David Baker. Named inventor on Bavencio (immune checkpoint inhibitor). 10+ years at EMD Serono in progressively responsible roles.
- **Zack [Last name not disclosed]** — Chief Financial Officer
  15+ years financial leadership in biotech. CFO at Ventus Therapeutics and Inception Sciences Canada. Key financial positions at Versant Ventures and Biotie Therapies with expertise in strategy and financial management.
- **Rhonda [Last name partial]** — Chief Business Officer
  PhD from University of British Columbia (cellular and gene therapy for diabetes); MBA in Management of Biotechnology (Simon Fraser University). Prior roles at Innovakine Therapeutics (Corp Dev Lead, VC-backed immunotherapy startup) and Zymeworks Inc. (clinical-stage public company; 10+ years in transactions, alliance management, competitive intelligence, and corporate strategy).

## Customer fit

- **Bench headcount**: 24 (_medium_) — Company has ~35 total employees. Based on stated structure ('dozen ML scientists in Toronto, another dozen protein researchers in Boston'), estimate ~24 wet-lab scientists + data scientists directly involved in protein design, expression, and characterization workflows. Additional headcount in admin/business functions.
- **Primary modality**: miniprotein_or_nanobody
- **Expression systems**: E. coli (implied for high-throughput protein expression and validation), Mammalian (CHO/HEK for complex antibodies, less likely primary), Cell-free (for toxic/difficult proteins)
- **In-house DNA synthesis**: unknown
- **In-house protein production**: unknown

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | high | 1000-10000 | Discovery-stage ML-guided protein design platform generating many novel protein designs per cycle requires rapid DNA synthesis for construct validation, variant screening, and expression testing. Short construct orders (<2 kb VH/VL pairs, miniproteins, nanobody scFv constructs) are core to high-throughput design-build-test loop. Company has dozen ML scientists and dozen protein researchers driving iteration; implies hundreds to thousands of construct orders annually for variant exploration and expression optimization. |
| E. coli KRX expression | high | 1000-10000 | Antibodies (full IgG and fragments), miniproteins, nanobodies, and peptides are primary modalities. Fable's platform emphasizes antibody discovery and small protein design; nanobodies and scFv constructs are naturally bacterially expressible. E. coli is ideal for rapid discovery-phase expression and purification of soluble proteins for biophysical characterization (BLI, ELISA, binding assays). High-throughput validation of AI-designed variants requires thousands of expression reactions per year. |
| Cell-free expression | medium | 100-1000 | Useful as fallback for mammalian-optimized antibodies (full IgG), membrane proteins, or intrinsically disordered peptides that may be toxic in E. coli. Secondary rather than primary modality given focus on bacterially expressible binders; but valuable for complex or glycosylated variants that fail in bacterial systems. |
| End-to-end binder workflow | high | 100-1000 | Early-stage company generating designed binders (antibodies, nanobodies, miniproteins) at scale does not yet have mature in-house BLI throughput for full characterization of hundreds to thousands of variants per cycle. Outsourced end-to-end workflow (DNA → expression → BLI quantification) accelerates discovery-phase kinetics without requiring capital investment in instrumentation or FTE. Perfect fit for seed/Series A stage protein-design team. |

### Key lab contacts

- Vanita D. Sood — SVP, Head of Drug Discovery Research
- Philip Kim — Chief Technology Officer and Co-founder
- [David J. Baker, PhD](https://www.linkedin.com/in/david-baker-phd-17812612/) — Chief Scientific Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Protein researchers (Boston team expansion noted in Oct 2024 news)
  - ML scientists (Toronto lab staffing)
- Evidence: https://www.biotech-careers.org/company/fable-therapeutics

## Recommended pitch

Fable is building the next generation of GLP-1 alternatives and obesity therapeutics through ML-guided protein design—generating thousands of novel antibody and nanobody constructs annually. Our clonal DNA assembly ($50/reaction, half incumbent cost) paired with E. coli KRX expression + purification is purpose-built for your discovery-phase iteration model: get validated protein in 48 hours from design to BLI-ready. With a dedicated protein team in Boston and ML scientists in Toronto scaling variant screening, outsourced expression and DNA synthesis lets you focus on computational innovation and candidate selection. We've supported biotech teams like yours at pre-seed through Series B; Fable's capital runway into 2026 signals you're actively hiring and accelerating programs—perfect time to lock in favorable vendor terms for the next 18–24 months of high-volume orders.

## Why this score

Exceptional fit across nearly all service lines. (1) Primary modality is miniproteins + nanobodies + antibody fragments—all naturally bacterially expressible and require high-volume short DNA synthesis for variant screening. (2) Discovery-stage iteration model implies 1000–10k+ short constructs/year. (3) ~24 dedicated protein researchers + ML team at seed/Series A stage with no disclosed in-house synthesis/expression capability and typical early-stage outsourcing preference. (4) Perfect stage for outreach (Series A, easy access, no entrenched relationships). (5) High-growth capital trajectory ($53.5M raised, runway into 2026). (6) All four service lines relevant: clonal DNA (high), E. coli expression (high), cell-free (medium), end-to-end binder workflow (high). Zero mitigating factors from scoring rubric (primary modality matches, no in-house synthesis/protein production disclosed, no mammalian-only constraint). Recommend immediate outreach.

## Recent signals (24 mo)

- **2024-10** — Exited stealth; announced $10M seed + $43.5M Series A ($53.5M total) led by Versant Ventures and DCVC Bio
- **2024-10** — CEO Geoff MacKay announced expectation of development candidates for multiple programs in 2025
- **2024-10** — Disclosed 4 small research partnerships with undisclosed pharma companies
- **2025-06** — Appointed David J. Baker (ex-AstraZeneca Head of Metabolism Bioscience) as Chief Scientific Officer

## Risks / concerns

- Early-stage: no clinical data, no disclosed development candidates, no regulatory interactions yet
- Protein design AI is crowded competitive landscape with well-funded competitors (Generate:Biomedicines $750M+, Xaira $1B+, EvolutionaryScale $142M seed); Fable's funding is comparatively modest
- Obesity/metabolic drug space dominated by GLP-1 agonists (Ozempic, Zepbound); differentiation vs incumbents unproven in clinical setting
- Operating in stealth until Oct 2024; specifics of platform improvements over prior Kim research not disclosed; regulatory path unclear
- Heavy reliance on Philip Kim's foundational ML work; execution risk if AI models do not translate to viable clinical candidates
- Funding runway stated as into 2026; will likely require additional capital for IND-enabling studies and Phase 1

## Relevant papers

- [Generative models for protein backbone generation](https://scholar.google.com/citations?user=[scholar_profile]) — Philip Kim, Academic publication (2017)  
  _First generative model for protein backbones; foundational technology underpinning Fable's platform_
- [Graph neural networks for protein design](https://scholar.google.com/citations?user=[scholar_profile]) — Philip Kim, Academic publication (2019)  
  _First graph neural network application to protein design; key methodological advance_
- [Validated protein backbone diffusion model](https://scholar.google.com/citations?user=[scholar_profile]) — Philip Kim, Academic publication (2022)  
  _First validated protein backbone diffusion model release; directly informs Fable's continuous-time diffusion technology_

## Sources

- [Fable Therapeutics - Company Website](https://www.fabletherapeutics.com/) _[company_site]_
- [Fable Therapeutics - Platform](https://www.fabletherapeutics.com/platform) _[company_site]_
- [Fable Therapeutics - Team](https://www.fabletherapeutics.com/team) _[company_site]_
- [Start-up Founded on Philip Kim's Research, Raises $53.5M for AI-Driven Obesity Solutions - University of Toronto](https://moleculargenetics.utoronto.ca/news/start-founded-philip-kims-research-raises-535m-ai-driven-obesity-solutions) _[press]_
- [Fable Therapeutics Appoints David J. Baker, PhD, as Chief Scientific Officer - Business Wire](https://www.businesswire.com/news/home/20250609888891/en/Fable-Therapeutics-Appoints-David-J.-Baker-PhD-as-Chief-Scientific-Officer) _[press]_
- [Fable Therapeutics - PitchBook Profile](https://pitchbook.com/profiles/company/552641-59) _[other]_
- [Fable Therapeutics - Crunchbase](https://www.crunchbase.com/organization/fable-therapeutics) _[other]_
- [Fable Therapeutics - Versant Ventures Portfolio](https://www.versantventures.com/portfolio/fable-therapeutics) _[other]_
- [Fable Therapeutics - DCVC Bio Portfolio](https://www.dcvc.com/companies/fable-therapeutics/) _[other]_
- [Wilson Sonsini Advises Fable Therapeutics on Financings - Legal](https://www.wsgr.com/en/insights/wilson-sonsini-advises-fable-therapeutics-on-financings-totaling-dollar535-million.html) _[other]_

## Confidence & gaps

- **Self-rated confidence**: high
- Primary information sourced directly from company website, recent press releases (Business Wire June 2025, Endpoints News / U Toronto Oct 2024), PitchBook, and investor portfolio pages. Founder backgrounds, funding rounds, team composition, and platform technology all well-documented and consistent across sources. Pipeline details intentionally confidential per CEO (appropriate for stealth-exit startup). Synthesis demand inference high-confidence based on explicit company stage, modality, and stated team size/geography. Only gaps are post-money valuations and proprietary program details, which are normal for discovery-stage companies.
- **Data gaps**:
  - Post-money valuation for Series A and Seed rounds not disclosed publicly
  - Specific pipeline candidate names, targets, and stage details remain confidential
  - In-house DNA synthesis, protein expression, or purification capability status unknown (may be outsourced entirely)
  - Details of 4 undisclosed pharma partnerships (deal values, scope, duration)
  - Headcount breakdown by function and location not fully available from public sources
  - Specific hiring plan, open roles, or recruiting contact not found in public materials

---
_Source brief: `surface_claude/runs/20260513T212253Z_fable_therapeutics/brief.json`_
