# Arpeggio Bio

**Score: 3/5** · (Tier 3 — Cold) · `small_molecule` · Stage: seed_to_series_A · Outreach: moderate · HQ: Boulder, USA · Founded: 2018

> AI-driven drug discovery platform using nascent RNA sequencing to identify and modulate transcription factors for oncology, rare disease, and neurodegeneration.

## What they do

Arpeggio Bio develops proprietary chemotranscriptomics platform combining high-throughput nascent RNA sequencing (PRO-Seq) with machine learning to profile cellular responses to drug treatment. Platform screens chemical libraries against 100,000+ transcripts, reconstructs transcriptional networks affected by compounds, and identifies novel modulators of 'undruggable' transcription factors. The company operates a dual-business model: (1) drug discovery pipeline targeting transcriptional dysregulation in oncology (NRF2, TEAD, GPX4, ferroptosis) and (2) R&D service contracts with pharma partners (40+ pharma companies have contracted platform services for drug characterization).

**AI role**: Machine learning core to business: Azofeifa's founding IP from PhD in AI + Cancer Genomics; proprietary algorithms analyze time-series nascent-RNA profiles to infer causality and identify transcriptional network mechanisms. GRETA™ platform reduces global mRNA sequencing cost 300-fold. DRUG-NET™ uses generative AI (GAN/Transformer architectures) to design drug-like molecules guided by transcriptome and predict toxicity before synthesis.

## Pipeline / products

| Name | Modality | Indication / use | Stage | Partner | Milestone |
|---|---|---|---|---|---|
| NRF2-targeted small molecule degrader / pathway inhibitor | small_molecule | KEAP1-mutant lung adenocarcinoma, potentially other NRF2-driven oncology indications | preclinical | — | Novel NRF2 pathway inhibitor showing significant activity in KEAP1-mutant lung adenocarcinomas; NRF2 degrader demonstrated tumor regression in aggressive adenocarcinoma models in vivo (—) |
| Ferroptosis pathway modulator / GPX4 inhibitor | small_molecule | Chronic kidney disease (diabetic nephropathy), neurodegeneration (Parkinson's) | preclinical | — | Targeted ferroptosis blocker demonstrated efficacy preventing renal injury in mouse models (—) |
| IO-resistant melanoma lead program | small_molecule | IO-resistant melanoma (checkpoint blockade-resistant tumors) | preclinical | — | Advancing toward development candidate nomination (—) |
| Arpeggio Platform Services (pharma partnerships) | software_and_services | Drug mechanism characterization, target ID, drug-target interaction mapping for external pharma partners | commercial | 40+ pharma companies including Johnson & Johnson, FORMA Therapeutics | FORMA partnership expanded to map CBP inhibitor mechanisms; phase I clinical validation on rare disease and inflammation programs (—) |

## Funding

- **Total raised**: $67.6M
- **Last round**: Series B · $20.0M · 2025-11 · led by venBio
- **Post-money valuation**: $41.0M
- **All rounds**:
  - 2020-01 · Seed · $3.2M · lead Khosla Ventures
  - 2022-09 · Series A · $17.0M · lead Builders VC
  - 2025-11 · Series B · $20.0M · lead venBio

## Commercial deals

- **FORMA Therapeutics** (2018) — upfront —, total potential —. Transcriptomics platform services to characterize FORMA drug candidates (CBP inhibitors); early-stage collaboration later expanded to phase I clinical translation
- **Johnson & Johnson** (None) — upfront —, total potential —. Platform validation partnership; mechanism characterization of J&J drug candidates

## Founders & key people

- **Joey Azofeifa** — Co-Founder and CEO _(founder)_
  PhD in Computer Science from University of Colorado (focus: AI and cancer genomics); developed founding IP at intersection of machine learning and genomics. Prior roles at Boulder BioConsulting (Data Scientist), Merck, and FORMA Therapeutics. Named to 2020 Forbes 30 Under 30 in Healthcare. Active speaker/presenter at SLAS and biotech conferences; active on Arpeggio blog discussing transcriptomics methodology.
- **Tim Read** — Co-Founder and Chief Technology Officer _(founder)_
  PhD in Molecular Biology from University of Colorado (mechanisms of eukaryotic transcription); postdoctoral fellow at Harvard Medical School before co-founding Arpeggio. Expert in nascent RNA sequencing (PRO-Seq/GRO-Seq assay development). Leads transcriptomic drug screening and NRF2 discovery efforts. Speaker at SLAS 2024; leads platform technical development and automation strategy.
- **Laura Norris** — Co-Founder and Chief Operating Officer _(founder)_
  Co-founder and COO; background in operations and business development. Recognized as emerging business leader in Boulder Valley (2024). Drives commercialization and partnership strategy.
- **Robin Dowell** — Co-Founder (Scientific Advisor/Board) _(founder)_
  PhD; Assistant Professor at CU Boulder Department of Molecular, Cellular and Developmental Biology and BioFrontiers Institute. Developed foundational patent for transcription factor activity assessment. Graduate advisor to Azofeifa and Read; originated core platform technology in academic lab. Drove early-stage commercialization through CU Boulder Venture Partners.
- **Dave [Last name not fully disclosed in sources]** — Lab Operations / Molecular Biology Lead
  20+ years managing molecular biology labs at Harvard Medical School, Martek Biosciences, and University of Colorado. Connects lab operations to drug discovery initiatives at Arpeggio; manages wet-lab execution of assays and drug screening.
- **Sam [Last name not provided]** — Board Advisor / Scientific Advisor
  Co-founder of Enliven Therapeutics (NASDAQ: ELVN); served as Executive Director of Research at AbbVie and Head of Research at AbbVie Stemcentrx. Brings translational drug development and large-pharma perspective to Arpeggio advisory board.

## Customer fit

- **Bench headcount**: 12 (_medium_) — Team of ~17 total; estimated 12 bench scientists/engineers in drug discovery and platform operations (R&D scientists, medicinal chemists, molecular biologists, computational biologists). Excludes leadership (CEO, COO, CTO), business development, and lab operations management.
- **Primary modality**: small_molecule
- **Expression systems**: E. coli (heterologous protein expression for biochemical assays), mammalian cell culture (drug screening, transcriptome profiling), cell-free systems (for assay development, potentially toxic proteins)
- **In-house DNA synthesis**: partial
- **In-house protein production**: partial
- **Known vendors (inferred)**: Not disclosed in public sources

### Service fit

| Service | Fit | Est. annual orders | Rationale |
|---|---|---|---|
| Clonal DNA (<2 kb) | medium | 100-1000 | Arpeggio synthesizes small-molecule drugs and degraders (NRF2, ferroptosis modulators, TEAD inhibitors) requiring iterative medicinal chemistry cycles; however, primary modality is chemical synthesis, not cloning. Some need for bacterial expression constructs for target proteins (NRF2, TEAD, GPX4) and assay reagents suggests ~low-to-medium volume of short cloning. Not a high-throughput variant screening company; unlike design-intensive protein engineering teams, does not appear to require 1000+ assemblies/year. Estimated 100-1000 constructs/year for assay proteins, controls, expression systems. |
| E. coli KRX expression | high | 100-1000 | Core platform requires recombinant transcription factors (NRF2, TEAD, GPX4) and assay proteins (kinase assays, biochemical validations). Arpeggio team includes staff with expertise in protein purification from bacterial hosts (FPLC, affinity chromatography per company website). E. coli expression fits well for transcription factor validation, enzyme assays, and assay reagent production. Estimated 100-1000 constructs/year converted to protein for biochemical screening, binding kinetics, and in vitro assays. High fit but modest volume (not a 10,000+/year design shop). |
| Cell-free expression | medium | <100 | Cell-free systems could be useful for rapid prototyping of toxic transcription factors or specialized proteins difficult to express in E. coli; mentioned in Arpeggio team bios as alternative expression platform. However, primary focus is cell-based assays (PRO-Seq, transcriptomics) and small-molecule development, not protein production at scale. Likely used opportunistically for assay optimization, not core production method. Estimated <100 orders/year. |
| End-to-end binder workflow | low | <100 | Arpeggio targets small-molecule transcription-factor modulators and degraders, not antibodies or binders. No evidence of engineered antibody or nanobody programs. While team has chemical biology expertise (covalent modulators), not a primary focus on binder design. BLI assays could be relevant for kinetic characterization of designed compounds vs. targets (NRF2, TEAD), but this is orthogonal to their core drug discovery (transcriptomics-first approach). No fit for antibody workflows; low fit for binder characterization. |

### Key lab contacts

- Tim Read — Co-Founder and Chief Technology Officer
- Joey Azofeifa — Co-Founder and CEO
- Kevin Eastwood — Chief Business Officer

### Hiring

- **Actively hiring wet-lab roles**:
  - Scientists, executives, and engineers to join team pushing boundaries of medicine (general call on company website)
- Evidence: https://www.arpeggiobio.com/about-us

## Why this score

Arpeggio shows moderate fit on clonal DNA assembly (fit: medium) and E. coli KRX expression (fit: high), but with estimated low-to-moderate volume (100-1000 constructs/year vs. ideal 1000+). Primary modality is small-molecule discovery, not protein engineering or cell-line development, limiting synthesis intensity. Company has partial in-house capabilities (molecular bio lab, sequencing platform), reducing outsourcing dependency. At Series B stage with established team and funding, procurement friction is moderate (not easy). Cell-free and binder workflows are poor fits. Score of 3 reflects: (1) plausible E. coli expression fit (high fit score) but modest volume, (2) medium clonal DNA fit, (3) early-stage execution risk (preclinical pipeline), (4) moderate outreach difficulty, (5) no obvious synergy on binder or cell-free workflows. Not a tier-1 hot lead (would need 1000+ annual DNA orders + protein production at scale + antibody/binder focus). Fits 'cold' tier because modest volume, established vendor environment, and limited evidence of rapid growth in synthesis-intensive programs.

## Recent signals (24 mo)

- **2025-11** — Series B funding closed: $20M from venBio; post-money valuation $41M. Indicates continued investor confidence but modest valuation (capital efficiency 0.86x), suggesting execution risks or slower-than-expected commercial traction.
- **2024-05** — Kevin Eastwood appointed Chief Business Officer (Slone Partners placement). Signals scaling of commercial operations and partnership strategy.
- **2024-11** — Arpeggio selected as finalist for Rising Star of the Year Award by Colorado BioScience Association. Recognizes local biotech impact and emerging leadership status.
- **2024-02** — Tim Read (CTO) presents at SLAS 2024 on arpeggio RNA sequencing platform achieving <$2 per sample genome-wide transcript profiling. Demonstrates platform maturation and automation-readiness; positions for pharma partnerships.

## Risks / concerns

- Capital efficiency below 1.0x (0.86x post Series B) suggests potential revenue traction challenges or slower-than-expected commercial uptake of platform services despite 40+ pharma partnerships.
- Early-stage drug pipeline: lead program (IO-resistant melanoma) still preclinical; no clinical data disclosed. Long development timeline (5+ years estimated to IND) creates capital requirements and dilution risk; company flagged as actively raising up to $35.3M additional capital.
- Small team (17 headcount as of Feb 2026) for dual business model (drug development + service platform); execution risk if scaling R&D or commercial operations.
- Competitive threat from large pharma incumbents (J&J, Novartis) investing in internal AI-driven discovery; platform IP moat may erode if competitors build similar transcriptomics + ML capabilities in-house.
- Reliance on academic partnerships and CU Boulder infrastructure; lack of independent fully-owned facilities could limit scaling of assay throughput.
- Service revenue model depends on sustained pharma partnerships; customer concentration risk not disclosed (FORMA and J&J mentioned but terms not public).
- No publications authored by Arpeggio founders in Nature/Science/Cell; platform validation relies on partner data (FORMA, J&J, academic collaborators); limited independent peer-reviewed validation of proprietary algorithms.

## Relevant papers

- Mechanisms of ferroptosis in chronic kidney disease and type 2 diabetes — Kim, Nature (—)  
  _Arpeggio identified GPX4 as therapeutic target for diabetic nephropathy via transcriptomic analysis; publication validates ferroptosis pathway inhibition as treatment approach for kidney disease, aligns with Arpeggio's GPX4-targeted program_

## Sources

- [Arpeggio Bio Official Website](https://www.arpeggiobio.com/) _[company_site]_
- [Arpeggio Bio - About Us / Team Bios](https://www.arpeggiobio.com/about-us) _[company_site]_
- [Arpeggio Bio - Technology Platform (GRETA, DRUG-NET)](https://www.arpeggiobio.com/technology) _[company_site]_
- [Arpeggio Bio - News and Updates](https://www.arpeggiobio.com/news) _[company_site]_
- [Arpeggio Biosciences Raises $17 Million in Series A Funding (2022)](https://www.businesswire.com/news/home/20220907005277/en/Arpeggio-Biosciences-Raises-$17-Million-in-Series-A-Funding-Led-by-Builders-VC) _[press]_
- [CU Boulder Startup Arpeggio Bio Raises $3.2M in Seed Funding (2020)](https://www.colorado.edu/venturepartners/2020/01/17/cu-boulder-startup-arpeggio-bio-raises-32-million-seed-funding-and-ceo-named-2020-forbes) _[press]_
- [Arpeggio Biosciences Raises $20M in Series B (2025)](https://www.colorado.edu/venturepartners/2025/11/25/external-news/arpeggio-raises-20m-latest-offering) _[press]_
- [CB Insights - Arpeggio Biosciences Financials](https://www.cbinsights.com/company/arpeggio-biosciences/financials) _[other]_
- [Tracxn - Arpeggio Company Profile and Funding](https://tracxn.com/d/companies/arpeggio/__9GZHg-_OXuy3mdnAuM-44P0ojou3ko34lGGd0J4H16U) _[other]_
- [Crunchbase - Arpeggio Bio](https://www.crunchbase.com/organization/arpeggio-bio) _[other]_
- [CU Boulder Magazine - Arpeggio Bio Founding Story (2018)](https://www.colorado.edu/asmagazine/2018/05/03/bioscience-start-sheds-light-dark-dna) _[press]_
- [Y Combinator - Arpeggio Bio Company Profile](https://www.ycombinator.com/companies/arpeggio-bio) _[other]_
- [LinkedIn - Arpeggio Biosciences](https://www.linkedin.com/company/arpeggio-biosciences) _[linkedin]_
- [Premier Alternatives - Arpeggio Valuation](https://www.premieralts.com/companies/arpeggio/valuation) _[other]_
- [UpsideList - Arpeggio Bio Analysis](https://upsidelist.com/company/arpeggio-bio) _[other]_
- [CU Boulder Venture Partners - Arpeggio Portfolio](https://www.colorado.edu/venturepartners/startup-portfolio/arpeggio-biosciences-inc) _[other]_

## Confidence & gaps

- **Self-rated confidence**: medium
- High confidence on company fundamentals (founding date 2018, location Boulder CO, founders Joey Azofeifa/Tim Read/Laura Norris, funding stages: Seed $3.2M 2020, Series A $17M 2022, Series B $20M Nov 2025). High confidence on platform technology (nascent RNA sequencing, chemotranscriptomics database, GRETA/DRUG-NET platforms) based on company website and founding team publications/bios. Medium confidence on commercial traction: 40+ pharma partnerships claimed, FORMA/J&J partnerships confirmed via business wire, but contract terms and revenue not disclosed. Medium confidence on drug pipeline (preclinical stage, no IND filings, milestones inferred from company news rather than regulatory filings). Medium confidence on headcount (17 as of Feb 2026 per Tracxn/Crunchbase, but older YC profile says 20; likely variation over time). Low-to-medium confidence on exact total funding ($47.6M–$67.6M depending on source; Series B amount $20.04M is well-confirmed from CB Insights). Medium confidence on customer fit scoring: company clearly does biochemical assays and protein expression but volume estimates (<1000 assemblies/year) are inferred rather than directly stated. No red flags found, but limited public disclosure limits precision on revenue, customer concentration, and in-house capabilities.
- **Data gaps**:
  - Series B post-money valuation not explicitly stated in primary sources; inferred $41M from Premier Alternatives secondary data (medium confidence).
  - Total funding stated as $60M+ in CEO bio but conflicting figures in funding databases ($47.6M–$49.5M); using conservative $47.6M from multiple sources, +$20.04M Series B = $67.6M (medium confidence on exact total).
  - Commercial deal terms (upfront, milestone, royalty) for FORMA and J&J partnerships not disclosed; scope inferred from news and company website.
  - Pipeline stage details (IND timelines, preclinical study data) available only through corporate announcements; no SEC filings (company is private).
  - No founder publications on Arpeggio platform technology in top-tier journals (Nature, Science, Cell); platform validation relies on partner publications and proprietary database claims.
  - In-house DNA/protein synthesis vendor relationships and outsourcing dependencies not publicly disclosed.
  - Detailed headcount breakdown by function (wet lab vs. business vs. informatics) not available; 17 total is latest confirmed (Feb 2026), but role-by-role allocation is estimated.
  - Employee equity, secondary market activity, or insider trading signals not disclosed (private company).

---
_Source brief: `surface_claude/runs/20260513T215559Z_arpeggio_bio/brief.json`_
