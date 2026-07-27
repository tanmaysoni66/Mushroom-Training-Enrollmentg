const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  content = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
    if (attrs.includes('width=') || attrs.includes('height=')) {
      return match;
    }
    changed = true;
    
    let w = "800", h = "600";
    if (attrs.includes('IMG_1329_optimized_30')) {
       w = "120"; h = "120";
    }
    
    return `<img ${attrs.replace(/\/?\s*$/, '')} width="${w}" height="${h}" />`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
