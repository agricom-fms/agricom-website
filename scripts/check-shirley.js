const fs = require('fs');
const xml = fs.readFileSync('scripts/shirley_extracted/word/document.xml', 'utf8');
const parts = xml.split(/(<w:drawing>[\s\S]*?<\/w:drawing>)/);

parts.forEach((p, idx) => {
  if (p.includes('<w:drawing>')) {
    const match = p.match(/r:embed="([^"]+)"/);
    console.log(`=== Drawing (embed: ${match ? match[1] : 'none'}) ===`);
  } else {
    const clean = p.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (clean) {
      console.log(`Text: ${clean.slice(0, 150)}...\n`);
    }
  }
});
