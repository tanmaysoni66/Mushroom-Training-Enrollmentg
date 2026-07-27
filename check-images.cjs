const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');
let hasMissing = false;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // match <img ... /> even across multiple lines
  const regex = /<img\s[^>]*>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const tag = match[0];
    if (!/width=/i.test(tag) || !/height=/i.test(tag)) {
      console.log(`Missing size in ${file}:`);
      console.log(tag);
      hasMissing = true;
    }
  }
});

if (!hasMissing) console.log("All images have width and height attributes.");
