export interface VcfLine {
  chrom: string;
  pos: number;
  id: string;
  ref: string;
  alt: string;
  qual: string;
  filter: string;
  info: string;
  format: string;
  sample: string;
}

export const sampleData: VcfLine[] = [
  { chrom: 'chr1', pos: 10492, id: 'rs55998931', ref: 'C', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '0/1' },
  { chrom: 'chr1', pos: 12807, id: 'rs62635285', ref: 'C', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr1', pos: 13079, id: 'rs78890234', ref: 'C', alt: 'G', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr1', pos: 13418, id: 'rs75175547', ref: 'G', alt: 'A', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr1', pos: 13912, id: 'rs2691324', ref: 'G', alt: 'A', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr11', pos: 72981, id: 'rs201960559', ref: '-', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr11', pos: 106176, id: 'rs1425850836', ref: 'C', alt: 'A', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr11', pos: 110826, id: 'rs369993856', ref: 'A', alt: 'G', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr11', pos: 113564, id: 'rs565287359', ref: 'G', alt: 'A', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '0/1' },
  { chrom: 'chr11', pos: 113579, id: 'rs1348047420', ref: 'C', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '0/1' },
  { chrom: 'chr17', pos: 62697, id: 'rs28372180', ref: 'C', alt: 'G', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '0/1' },
  { chrom: 'chr17', pos: 62789, id: 'rs28607171', ref: 'C', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '0/1' },
  { chrom: 'chr17', pos: 62821, id: 'rs11531330', ref: 'C', alt: 'T', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr17', pos: 62946, id: 'rs1329798682', ref: 'T', alt: 'C', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
  { chrom: 'chr17', pos: 63037, id: 'rs1412510075', ref: 'A', alt: 'G', qual: '.', filter: 'PASS', info: '.', format: 'GT', sample: '1/1' },
];