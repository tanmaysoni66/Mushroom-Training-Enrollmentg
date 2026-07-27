const fs = require('fs');
const content = fs.readFileSync('src/App.tsx', 'utf8');

const getComponentContent = (componentName) => {
  const start = content.indexOf(`const ${componentName} = () => {`);
  if (start === -1) return '';
  let braces = 1;
  let idx = content.indexOf('{', start) + 1;
  while(braces > 0 && idx < content.length) {
    if (content[idx] === '{') braces++;
    if (content[idx] === '}') braces--;
    idx++;
  }
  return content.substring(start, idx);
};

const contactContent = getComponentContent('ContactPage');
const faqContent = getComponentContent('FAQPage');

console.log('ContactPage headers:', contactContent.match(/<h[1-6].*?>.*?<\/h[1-6]>/gs));
console.log('FAQPage headers:', faqContent.match(/<h[1-6].*?>.*?<\/h[1-6]>/gs));
