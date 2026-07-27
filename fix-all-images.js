const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // We find all <img ... >
  content = content.replace(/<img\s+([^>]+)>/gi, (match, attrs) => {
    if (attrs.includes('width=') || attrs.includes('height=')) {
      return match; // already has size
    }
    changed = true;
    
    // Add default width and height just before the closing slash or >
    // Let's use width="800" height="600" as a fallback, or if we can infer from className.
    let w = "800", h = "600";
    
    if (attrs.includes('IMG_1329_optimized_30')) {
       w = "120"; h = "120";
    }
    
    // if it's full screen or anything, just providing a size is enough to fix the warning.
    return `<img ${attrs.replace(/\/?\s*$/, '')} width="${w}" height="${h}" />`;
  });

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
