export const textbook = {
  vcf: {
    title: "Decoding the VCF",
    sections: [
      {
        id: "intro",
        title: "The Raw Data",
        content: "A VCF (Variant Call Format) file is a text file that lists every position where your DNA differs from the 'Reference Genome'. If you match the reference, there is no line. If you differ, there is a line."
      },
      {
        id: "columns",
        title: "Reading the Columns",
        content: "CHROM (Chromosome) and POS (Position) are the GPS coordinates. REF (Reference) is what 'most people' have. ALT (Alternate) is what you have."
      },
      {
        id: "genotype",
        title: "The Genotype (GT)",
        content: "0/0 = You match the reference (usually implied). 0/1 = Heterozygous (One parent gave you REF, one gave you ALT). 1/1 = Homozygous Alternate (Both parents gave you the ALT)."
      },
      {
        id: "rsid",
        title: "What is an rsID?",
        content: "rsID stands for 'Reference SNP ID'. It is a permanent address assigned by the dbSNP database. Even if scientists change the numbering of Chromosome 1, 'rs12345' will always refer to the same biological mutation."
      }
    ]
  },
  pca: {
    title: "Principal Component Analysis (PCA)",
    sections: [
      {
        id: "input",
        title: "The Input Data",
        content: "We started with a massive spreadsheet: 2,504 rows (people) by 450,000 columns (genetic variants). Each cell is a simple number: 0, 1, or 2 (representing how many copies of the variant they have)."
      },
      {
        id: "math",
        title: "The Transformation",
        content: "PCA is a mathematical trick to simplify data. It asks: 'Which combination of variants explains the most difference between these people?' It draws a line through the data along that axis of maximum difference. That line becomes 'PC1'."
      },
      {
        id: "pc1",
        title: "Interpreting PC1 (X-Axis)",
        content: "PC1 usually captures the split between African and Non-African populations. This is because humans originated in Africa and migrated out; the groups that left took only a subset of genetic diversity with them."
      },
      {
        id: "pc2",
        title: "Interpreting PC2 (Y-Axis)",
        content: "PC2 captures the next biggest difference, often separating East/West Eurasia. The distance between points represents 'Genetic Distance'—roughly how many thousands of years ago those two individuals shared a common ancestor."
      },
      {
        id: "orientation",
        title: "Why this quadrant?",
        content: "The sign (+/-) is arbitrary in PCA. The chart could be flipped upside down or mirrored, and the biological meaning would be identical. What matters is *relative* distance: Are you closer to the Blue cluster or the Red cluster?"
      }
    ]
  },
  impact: {
    title: "Functional Consequences",
    sections: [
      {
        id: "central_dogma",
        title: "The Central Dogma",
        content: "DNA is transcribed into RNA, which is translated into Protein. Proteins are strings of Amino Acids. The code is read in groups of 3 letters (Codons)."
      },
      {
        id: "missense",
        title: "Missense Mutation",
        content: "A change in DNA that results in a DIFFERENT amino acid (e.g., Glu -> Val). This changes the chemical properties of the protein at that specific spot."
      },
      {
        id: "structure",
        title: "Structure = Function",
        content: "Proteins aren't static; they are 3D machines. Their shape is held together by chemical bonds. Changing a 'Water-Loving' part to a 'Water-Hating' part forces the protein to fold differently to hide that spot, potentially breaking the machine."
      }
    ]
  },
  theory: {
    title: "Critical Theory & Bioethics",
    sections: [
      {
        id: "reference_bias",
        title: "The Reference Genome Bias",
        content: "The 'Human Reference Genome' (GRCh38) is mostly based on a few people from Buffalo, NY. It is 70% European. This means variants common in Africa might be labeled 'Alternate' or 'Deviant' simply because they weren't in that one Buffalo guy."
      },
      {
        id: "privacy",
        title: "The End of Anonymity",
        content: "You cannot anonymize DNA. If your 3rd cousin uploads their data to GEDmatch, *you* can be identified by law enforcement. This was used to catch the Golden State Killer, but it implies a surveillance state where consent is collective, not individual."
      },
      {
        id: "race",
        title: "Race vs. Ancestry",
        content: "PCA plots show clusters, but they are gradients (clines), not hard borders. 'Race' is a social category enforced by laws and culture. 'Ancestry' is a biological measurement of shared history. They correlate but are not the same."
      }
    ]
  }
};