// Inlines pdf-lib into src/template.html to produce a single self-contained PDFMerge.html.
import { readFileSync, writeFileSync } from 'node:fs';

const template = readFileSync('src/template.html', 'utf8');
const lib = readFileSync('node_modules/pdf-lib/dist/pdf-lib.min.js', 'utf8')
  .replace(/\/\/# sourceMappingURL=.*$/m, '')
  .replace(/<\/script/gi, '<\\/script');

if (!template.includes('/*__PDF_LIB__*/')) throw new Error('placeholder not found');
writeFileSync('PDFMerge.html', template.replace('/*__PDF_LIB__*/', () => lib));
console.log('wrote PDFMerge.html');
