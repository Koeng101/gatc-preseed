import React from 'react';
import { GlossaryTerm } from '../components/GlossaryTerm';
import { Diagrams } from '../components/Diagrams';

export type CourseSection = {
  id: string;
  title: string;
  module: string;
  content: React.ReactNode;
  widget?: 'aligner' | 'trimming' | 'vcf' | 'pca' | 'painting' | 'drift' | 'central_dogma' | 'volcano' | 'protein' | 'gwas' | 'risk' | 'crispr' | 'microbiome' | 'single_cell' | 'phacking' | 'bayes' | 'phylogeny' | 'epigenetics' | 'pcr' | 'plasmid' | 'codis';
};

export const courseContent: CourseSection[] = [
  // Module 1: The Code
  {
    id: 'intro',
    title: '1. Sequencing (Reads)',
    module: 'Fundamentals',
    content: (
      <div className="space-y-6">
        <p className="text-xl text-slate-700 leading-relaxed">
          Bioinformatics is the science of reading the code of life. It starts with a simple question: 
          <strong>How do we get from a biological sample (saliva) to a computer file?</strong>
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4 text-slate-900">1.1 Sequencing is not Reading</h3>
        <p>
          We use machines called "Sequencers" (mostly from Illumina). They can't read chromosomes from end-to-end. 
          Instead, they shatter DNA into millions of tiny fragments called <GlossaryTerm term="read">Short Reads</GlossaryTerm> (about 150 letters long).
        </p>
        
        <div className="my-8">
          <Diagrams.IlluminaSequencing />
          <p className="text-xs text-center text-slate-500 mt-2">Figure 1.1: Illumina Sequencing by Synthesis (SBS)</p>
        </div>

        <h3 className="font-bold text-2xl mt-8 mb-4 text-slate-900">1.2 Alignment: The Jigsaw Puzzle</h3>
        <p>
          Our job is to map these reads back to the <GlossaryTerm term="Reference Genome">Reference Genome</GlossaryTerm>. 
          This process is called <strong>Alignment</strong>. It's computationally expensive because we have millions of pieces and the "picture" (the reference) is 3 billion pixels wide.
        </p>
        
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
          <h4 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-2">Interactive Task</h4>
          <p className="text-blue-800">
            <strong>Try the Aligner (Right):</strong> Drag the short reads to their matching position on the Reference Genome. 
            Watch what happens when a read contains a typo!
          </p>
        </div>
      </div>
    ),
    widget: 'aligner'
  },
  {
    id: 'trimming',
    title: '2. Quality Control (QC)',
    module: 'Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Sequencing machines are not perfect. As they read DNA, the chemical signal fades. 
          The beginning of a read is usually high quality ("Q30+"), but the end gets messy.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">Quality Scores (Phred)</h3>
        <p>
          Every letter gets a score. A score of Q30 means 99.9% accuracy. A score of Q10 means 90% accuracy (1 error in 10).
        </p>
        <div className="my-4">
           <Diagrams.PhredScore />
        </div>

        <h3 className="font-bold text-2xl mt-8 mb-4">The Trimming Game</h3>
        <p>
          Bioinformaticians must decide: How much bad data do we throw away? 
          If you keep everything, you get errors. If you trim too much, you lose valuable length for alignment.
        </p>
        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 my-6 shadow-sm">
           <strong className="text-green-900">Task:</strong> Use the slider on the right to trim the noisy end of the read until the Average Quality is &gt; 30.
        </div>
      </div>
    ),
    widget: 'trimming'
  },
  {
    id: 'vcf',
    title: '3. Variant Calling (VCF)',
    module: 'Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Once aligned, we look for differences. If you have a 'T' where the reference has a 'C', that is a <GlossaryTerm term="Variant Call">Variant Call</GlossaryTerm>.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">3.1 The VCF Format</h3>
        <p>
          The <strong>Variant Call Format (VCF)</strong> is the industry standard. It's a tab-delimited text file. 
          Lets break down the columns:
        </p>
        <ul className="list-disc pl-5 space-y-3 mt-4 marker:text-blue-500">
          <li><strong>CHROM / POS:</strong> The address. e.g., <code>chr1:10,492</code>.</li>
          <li><strong>ID:</strong> The <GlossaryTerm term="rsID">rsID</GlossaryTerm>.</li>
          <li><strong>REF / ALT:</strong> Reference vs. Alternate letters.</li>
          <li><strong>GT (Genotype):</strong> The most important column. Since you have two copies of every chromosome:
            <ul className="mt-2 space-y-1 text-xs font-mono bg-slate-50 p-2 rounded">
              <li><strong>0/0:</strong> Both copies match the reference.</li>
              <li><strong>0/1:</strong> One copy matches ref, one matches alt (Heterozygous).</li>
              <li><strong>1/1:</strong> Both copies are the alternate (Homozygous).</li>
            </ul>
          </li>
        </ul>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">3.2 Indels: The "- to T" Mystery</h3>
        <p>
          You asked about <code>-</code> becoming <code>T</code>. This is an <strong>Insertion</strong>. 
          The reference genome had nothing there (represented as a gap), but your DNA has an extra 'T'. 
          These "Indels" (Insertions/Deletions) can be devastating because they shift the reading frame of the entire gene.
        </p>
      </div>
    ),
    widget: 'vcf'
  },

  // Module 2: Evolution
  {
    id: 'drift',
    title: '4. Evolution & Drift',
    module: 'Evolution',
    content: (
      <div className="space-y-6">
        <p>
          Why do populations differ? Often, it's not because of "Survival of the Fittest" (Selection), but simple "Survival of the Luckiest" (<GlossaryTerm term="Genetic Drift">Genetic Drift</GlossaryTerm>).
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">4.1 The Drunken Walk</h3>
        <p>
          Imagine a jar of red and blue marbles. If you pick 10 at random to start a new jar, you might accidentally pick 7 red and 3 blue. 
        </p>
        
        <div className="flex justify-center gap-12 my-8">
           <div className="text-center">
              <div className="w-24 h-32 border-4 border-slate-200 rounded-b-3xl relative p-2 flex flex-wrap content-end gap-1">
                 {Array.from({length: 12}).map((_, i) => <div key={i} className={`w-4 h-4 rounded-full ${i % 2 === 0 ? 'bg-red-500' : 'bg-blue-500'}`} />)}
              </div>
              <div className="text-[10px] font-bold mt-2 uppercase">Gen 1 (50/50)</div>
           </div>
           <div className="flex items-center text-slate-300">→</div>
           <div className="text-center">
              <div className="w-24 h-32 border-4 border-slate-200 rounded-b-3xl relative p-2 flex flex-wrap content-end gap-1">
                 {Array.from({length: 12}).map((_, i) => <div key={i} className={`w-4 h-4 rounded-full ${i < 9 ? 'bg-red-500' : 'bg-blue-500'}`} />)}
              </div>
              <div className="text-[10px] font-bold mt-2 uppercase text-red-600">Gen 2 (Lucky Drift)</div>
           </div>
        </div>

        <p>
          The next generation will be redder. Over time, one color might disappear completely *purely by chance*.
        </p>

        <h3 className="font-bold text-2xl mt-8 mb-4">4.2 The Founder Effect</h3>
        <p>
          When a small group of humans left Africa 60,000 years ago, they carried only a subset of African genetic diversity. 
          This is a <GlossaryTerm term="Bottleneck">Bottleneck</GlossaryTerm>.
        </p>
        
        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-6 shadow-sm">
          <h4 className="font-bold text-amber-900 uppercase tracking-widest text-xs mb-2">Simulation Lab</h4>
          <ul className="list-decimal pl-5 space-y-2 text-amber-800 text-sm">
             <li><strong>Drift:</strong> Click "Next Gen" repeatedly. Notice how colors vanish randomly? That's drift.</li>
             <li><strong>Bottleneck:</strong> Click "Trigger Bottleneck". Watch the population crash to 5 survivors. Diversity is lost instantly and never recovers.</li>
          </ul>
        </div>
      </div>
    ),
    widget: 'drift'
  },
  {
    id: 'phylogeny',
    title: '5. Phylogenetics',
    module: 'Evolution',
    content: (
      <div className="space-y-6">
        <p>
           Nothing in biology makes sense except in the light of evolution. 
           We can track the history of life by comparing DNA sequences.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">5.1 Distance Matrices</h3>
        <p>
           We count the number of differences between species. 
           Humans and Chimps differ by ~1.2%. Humans and Mice differ by ~15%.
        </p>
        <p>
           <strong>Clustering:</strong> We group the most similar species first, then the next most similar. 
           This builds a "Tree" (Phylogeny).
        </p>
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
           <strong className="text-blue-900">Task:</strong> Build the tree on the right by merging the species with the smallest genetic distance.
        </div>
      </div>
    ),
    widget: 'phylogeny'
  },
  {
    id: 'pca',
    title: '6. Ancestry (PCA)',
    module: 'Evolution',
    content: (
      <div className="space-y-6">
        <p>
          How do we know you are "48% European"? We don't look at one gene. We look at <strong>all of them at once</strong>.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">6.1 Dimensionality Reduction</h3>
        <p>
          Imagine a spreadsheet with 2,504 rows (people) and 450,000 columns (variants). 
          We can't graph 450,000 dimensions. We need to squash them down to 2 dimensions (X and Y) while keeping the "distance" between people roughly the same.
        </p>
        
        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-6">
           <h4 className="font-bold text-slate-900 mb-2">How PCA Works (Simplified)</h4>
           <p className="text-sm text-slate-600 mb-2">1. <strong>Input:</strong> A table of 2,504 people x 1,000,000 genetic variants (0, 1, or 2).</p>
           <p className="text-sm text-slate-600 mb-2">2. <strong>Math:</strong> Calculate the covariance matrix (who is similar to whom?).</p>
           <p className="text-sm text-slate-600">3. <strong>Output:</strong> Eigenvectors (PC1, PC2). These are the mathematical axes that explain the most variation.</p>
        </div>

        <h3 className="font-bold text-2xl mt-8 mb-4">6.2 Interpreting the Plot</h3>
        <p>
          <strong>PC1 (X-Axis):</strong> Measures the "African vs. Non-African" split. Why? Because Africa contains the most diversity (see Chapter 3).<br/>
          <strong>PC2 (Y-Axis):</strong> Measures the "East vs. West Eurasia" split.
        </p>
      </div>
    ),
    widget: 'pca'
  },
  {
    id: 'painting',
    title: '7. Admixture Painting',
    module: 'Evolution',
    content: (
      <div className="space-y-6">
        <p>
          PCA gives us a single dot on a map. But you are not a dot. You are a mosaic.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">7.1 Recombination</h3>
        <p>
          Before your parents passed their DNA to you, their own chromosomes swapped arms. This is called <GlossaryTerm term="recombination">Recombination</GlossaryTerm>.
          It creates a "Patchwork Quilt" of ancestry.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">7.2 Chromosome Painting</h3>
        <p>
          We can walk along your chromosome and ask: "Does this chunk look African? Does the next chunk look European?"
        </p>
        <p>
          <strong>The Result (Right):</strong> A barcode of history. Long solid bars mean recent ancestors. Tiny slivers mean ancient admixture.
        </p>
      </div>
    ),
    widget: 'painting'
  },

  // Module 3: Molecular Biology
  {
    id: 'central_dogma',
    title: '8. Central Dogma',
    module: 'Molecular',
    content: (
      <div className="space-y-6">
        <div className="my-6">
           <Diagrams.CentralDogma />
           <p className="text-xs text-center text-slate-500 mt-2">Figure 8.1: The Central Dogma of Biology</p>
        </div>

        <p>
          What does a variant actually <em>do</em>? It depends on where it lands in the machine code.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">8.1 Mutation Types</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Missense:</strong> Swaps one amino acid for another (e.g., Sickle Cell). Like swapping a brick.</li>
          <li><strong>Nonsense:</strong> Introduces a STOP signal, cutting the protein short (e.g., BRCA1). Like tearing the blueprint in half.</li>
          <li><strong>Deletion:</strong> Removes parts of the protein (e.g., Cystic Fibrosis). Like removing a gear.</li>
        </ul>
      </div>
    ),
    widget: 'central_dogma'
  },
  {
    id: 'protein',
    title: '9. 3D Structure',
    module: 'Molecular',
    content: (
      <div className="space-y-6">
        <p>
          Ultimately, biology is physics. Proteins are 3D machines. A mutation matters only if it breaks the machine.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">9.1 The Chemistry of Folding</h3>
        <p>
          Proteins fold because some parts hate water (<GlossaryTerm term="hydrophobic">Hydrophobic</GlossaryTerm>) and hide inside, while others love water (<GlossaryTerm term="hydrophilic">Hydrophilic</GlossaryTerm>) and stay outside.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">9.2 The Sickle Cell Glitch</h3>
        <p>
          In the viewer, toggle between <strong>Healthy</strong> and <strong>Sickle</strong>.
          Notice how <strong>Glutamic Acid (Gold)</strong> changes to <strong>Valine (Red)</strong>.
        </p>
        <p>
          Glutamic Acid loves water. Valine hates it. When Valine is exposed on the surface, it panics and sticks to other Hemoglobin molecules to hide. This clumping causes the disease.
        </p>
      </div>
    ),
    widget: 'protein'
  },
  {
    id: 'epigenetics',
    title: '10. Epigenetics',
    module: 'Molecular',
    content: (
      <div className="space-y-6">
        <p>
           Every cell in your body has the same DNA. So why is a neuron different from a skin cell?
           <br/><strong>Epigenetics.</strong>
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">10.1 DNA Methylation</h3>
        <p>
           Cells can "turn off" genes by adding a Methyl Group (CH3) to the promoter region. 
           This is like putting a padlock on the gene.
        </p>
        <p>
           <strong>Cancer & Aging:</strong> As we age, our methylation patterns get messy. 
           We might accidentally methylate a Tumor Suppressor gene (like BRCA1), turning it off and causing cancer.
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
           <strong>Lab:</strong> Click the CpG sites to methylate the promoter. Watch transcription stop as you "lock" the gene.
        </div>
      </div>
    ),
    widget: 'epigenetics'
  },
  {
    id: 'volcano',
    title: '11. RNA-Seq (Expression)',
    module: 'Molecular',
    content: (
      <div className="space-y-6">
        <p>
          DNA is the cookbook. RNA is what the chef is actually cooking. 
          Just because you have a gene doesn't mean it's turned on.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">11.1 Differential Expression</h3>
        <p>
          In cancer, tumor suppressors (like TP53) are often turned OFF, while oncogenes (like MYC) are turned ON to 1000%.
          We measure this with <strong>RNA-Seq</strong>.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">11.2 The Volcano Plot</h3>
        <p>
          This chart visualizes change. 
          <strong>X-Axis (Fold Change):</strong> How much more/less is this gene produced?
          <strong>Y-Axis (Significance):</strong> Are we sure it's not random noise?
        </p>
        <p>
           Genes in the <strong>Top Corners</strong> are the most interesting targets for drugs.
        </p>
      </div>
    ),
    widget: 'volcano'
  },

  // Module 4: Disease & Health
  {
    id: 'gwas',
    title: '12. GWAS (Finding Genes)',
    module: 'Health',
    content: (
      <div className="space-y-6">
        <p>
          We know Sickle Cell is caused by <em>HBB</em>. But what causes Diabetes? Or Height? 
          These are complex traits controlled by hundreds of genes. To find them, we use <strong>GWAS (Genome-Wide Association Studies)</strong>.
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">12.1 The Manhattan Plot</h3>
        <p>
          We compare the DNA of 10,000 "Tall" people vs. 10,000 "Short" people at 1 million spots in the genome.
          We calculate a P-value for every spot.
        </p>
        <p>
          Then we plot them. The result looks like a city skyline. The "skyscrapers" are the genomic regions that are statistically linked to the trait.
        </p>
        
        <div className="bg-slate-100 p-4 rounded-xl my-6 text-sm font-mono border-l-4 border-slate-400">
           <strong>Significance Threshold:</strong><br/>
           P &lt; 5 × 10<sup>-8</sup><br/>
           Because we test 1,000,000 variants, we need a very strict threshold to avoid false positives. This is the "Red Line" on the chart.
        </div>
      </div>
    ),
    widget: 'gwas'
  },
  {
    id: 'risk',
    title: '13. Polygenic Risk Scores',
    module: 'Health',
    content: (
      <div className="space-y-6">
        <p>
          Sickle Cell is simple: One broken gene. But most things (Height, Heart Disease, Diabetes) are complex.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">The Bell Curve</h3>
        <p>
          These traits are controlled by thousands of variants, each adding a tiny amount of risk. 
          We sum these up into a <strong>Polygenic Risk Score (PRS)</strong>.
        </p>
        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 my-6 shadow-sm">
          <strong>Try the Simulator:</strong> Toggle the variants on the right. Notice how no single one moves the needle much, but together they can push you into the "High Risk" tail of the distribution.
        </div>
      </div>
    ),
    widget: 'risk'
  },
  {
    id: 'crispr',
    title: '14. CRISPR Engineering',
    module: 'Health',
    content: (
      <div className="space-y-6">
        <p>
           We have read the code. We have found the bug. Now, can we fix it?
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">14.1 Programmable Editing</h3>
        <p>
           <strong>CRISPR-Cas9</strong> is a bacterial immune system we repurposed as a text editor for DNA.
           It has two parts:
        </p>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>Cas9:</strong> The scissors (cuts the DNA).</li>
           <li><strong>Guide RNA:</strong> The GPS (tells Cas9 where to cut).</li>
        </ul>

        <h3 className="font-bold text-2xl mt-8 mb-4">14.2 The PAM Constraint</h3>
        <p>
           There is a catch. Cas9 can't cut just anywhere. It needs a password. 
           It only binds to DNA if there is a <strong>PAM Sequence (NGG)</strong> right next to the target.
        </p>
        
        <div className="bg-amber-50 p-6 rounded-xl border-l-4 border-amber-500 my-6 shadow-sm">
           <strong className="text-amber-900">Design Challenge:</strong> Find the PAM (GG) in the sequence on the right to program the cut.
        </div>
      </div>
    ),
    widget: 'crispr'
  },
  {
    id: 'microbiome',
    title: '15. Metagenomics',
    module: 'Health',
    content: (
      <div className="space-y-6">
        <p>
           Human cells make up only 43% of your body's cell count. The rest are bacteria, viruses, and fungi. 
           This is your <strong>Microbiome</strong>.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">15.1 Who is in there?</h3>
        <p>
           We sequence all the DNA in a poop sample (Metagenomics) to take a census.
        </p>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>Bacteroidetes:</strong> The "Good Guys". They digest fiber and keep you lean.</li>
           <li><strong>Firmicutes:</strong> Often linked to obesity. They love sugar.</li>
           <li><strong>Proteobacteria:</strong> The "Weeds". E. coli, Salmonella. They bloom when the ecosystem is damaged.</li>
        </ul>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">15.2 Dysbiosis</h3>
        <p>
           Taking antibiotics is like dropping a nuclear bomb on a rainforest. It kills the good guys, leaving room for the weeds (Proteobacteria) to take over.
        </p>
        
        <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 my-6 shadow-sm">
           <strong className="text-green-900">Ecosystem Sim:</strong> Feed your gut fiber or sugar. See what happens when you take antibiotics!
        </div>
      </div>
    ),
    widget: 'microbiome'
  },
  {
    id: 'single_cell',
    title: '16. Single-Cell (scRNA-Seq)',
    module: 'Health',
    content: (
      <div className="space-y-6">
        <p>
           Traditional sequencing is like a fruit smoothie. You blend all the cells together and taste the average. 
           <strong>Single-Cell Sequencing (scRNA-Seq)</strong> is like a fruit salad. You taste every piece of fruit individually.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">16.1 The t-SNE Plot</h3>
        <p>
           We sequence 10,000 cells individually. Then we use an algorithm called t-SNE (or UMAP) to group similar cells together.
        </p>
        <p>
           Each dot on the map is one cell. Cells that are close together are similar types (e.g., all T-Cells clump together).
        </p>
        
        <h3 className="font-bold text-2xl mt-8 mb-4">16.2 Finding Markers</h3>
        <p>
           How do we know a cluster is "T-Cells"? We look for marker genes like <strong>CD3</strong>. 
           In the viewer, toggle to "Gene View" to see which cells are expressing CD3.
        </p>
      </div>
    ),
    widget: 'single_cell'
  },

  // Module 5: Critical Statistics
  {
    id: 'phacking',
    title: '17. The P-Hacking Crisis',
    module: 'Critical Thinking',
    content: (
      <div className="space-y-6">
        <p>
           We are living in an era of <strong>Big Data</strong>. In genomics, we routinely measure millions of variables at once. This is a statistical landmine.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">17.1 The Multiple Testing Trap</h3>
        <p>
           A standard "Significant" result is defined as P &lt; 0.05. This means there is only a 5% chance the result is due to random luck.
        </p>
        <p>
           But if you test 100 random genes, you <em>expect</em> 5 of them to hit that threshold purely by luck. If you test 1,000,000 variants (like in GWAS), you get 50,000 false positives!
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">17.2 The Replication Crisis</h3>
        <p>
           This is why many scientific papers "don't hold up." Researchers "mine" the data until they find a significant P-value, but they don't correct for how many times they tried.
        </p>
        <div className="bg-rose-50 p-6 rounded-xl border-l-4 border-rose-500 my-6 shadow-sm">
           <h4 className="font-bold text-rose-900 mb-2">The Solution: Bonferroni</h4>
           <p className="text-sm text-rose-800">
              To fix this, we divide our threshold (0.05) by the number of tests. If we test 1 million SNPs, we need <strong>P &lt; 0.00000005</strong> to be sure. This is the "Skyscraper" line in Chapter 12.
           </p>
        </div>
      </div>
    ),
    widget: 'phacking'
  },
  {
    id: 'bayes',
    title: '18. The Bayesian Trap',
    module: 'Critical Thinking',
    content: (
      <div className="space-y-6">
        <p>
           A genetic test is 99% accurate. You test positive. Are you sick?
           <br/><strong>Answer: Probably not.</strong>
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">18.1 Base Rate Neglect</h3>
        <p>
           If a disease is rare (1 in 1000), there are 999 healthy people. 
           Even with a 1% error rate, that's ~10 False Positives.
           <br/>But there is only 1 True Positive.
        </p>
        <p>
           So if you get flagged, you are one of 11 people. Only 1 is sick. Your chance is 1/11 (9%), not 99%.
        </p>
        <div className="bg-slate-100 p-4 rounded-xl text-center font-bold">
           Look at the visualization to see the False Positive army drowning out the True Positives.
        </div>
      </div>
    ),
    widget: 'bayes'
  },

  // Module 6: Lab Skills (HTGAA)
  {
    id: 'pcr',
    title: '19. PCR (Copying DNA)',
    module: 'Lab Skills',
    content: (
      <div className="space-y-6">
        <p>
           Before we can sequence DNA, we need more of it. 
           <strong>Polymerase Chain Reaction (PCR)</strong> is the "Copy Paste" command for biology.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">19.1 The Thermal Cycles</h3>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>95°C (Denature):</strong> Melt the DNA strands apart.</li>
           <li><strong>55°C (Anneal):</strong> Primers stick to the target.</li>
           <li><strong>72°C (Extend):</strong> Polymerase builds the new strand.</li>
        </ul>
        <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 my-6 shadow-sm">
           <strong className="text-blue-900">Virtual Lab:</strong> Set the temperatures and watch the DNA count double every cycle. 1 → 2 → 4 → 8...
        </div>
      </div>
    ),
    widget: 'pcr'
  },
  {
    id: 'plasmid',
    title: '20. Synthetic Biology (Plasmids)',
    module: 'Lab Skills',
    content: (
      <div className="space-y-6">
        <p>
           How do we program bacteria? We give them a circular piece of DNA called a <strong>Plasmid</strong>.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">20.1 The Anatomy of a Gene Circuit</h3>
        <ul className="list-disc pl-5 space-y-2">
           <li><strong>Promoter:</strong> The "Start Button".</li>
           <li><strong>RBS:</strong> Ribosome Binding Site (Translation start).</li>
           <li><strong>CDS:</strong> Coding Sequence (The actual protein, e.g., GFP).</li>
           <li><strong>Terminator:</strong> The "Stop Button".</li>
        </ul>
        <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 my-6 shadow-sm">
           <strong className="text-purple-900">Design Studio:</strong> Assemble the parts on the right to build a functional plasmid.
        </div>
      </div>
    ),
    widget: 'plasmid'
  },
  {
    id: 'codis',
    title: '21. Forensics (CSI: DNA)',
    module: 'Lab Skills',
    content: (
      <div className="space-y-6">
        <p>
           We don't sequence the whole genome for forensics. We look at 13 specific spots called <strong>STRs (Short Tandem Repeats)</strong>.
        </p>
        <h3 className="font-bold text-2xl mt-8 mb-4">21.1 The Fingerprint</h3>
        <p>
           At these spots, DNA repeats itself (e.g., GATA-GATA-GATA). 
           You might have 10 repeats. Your neighbor might have 12. 
           The chance of two people matching at all 13 spots is 1 in a quintillion.
        </p>
        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
           <strong>Investigation:</strong> Compare the Crime Scene profile against the 3 suspects. Who matches?
        </div>
      </div>
    ),
    widget: 'codis'
  }
];