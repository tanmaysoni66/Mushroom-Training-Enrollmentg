const fs = require('fs');
let content = fs.readFileSync('src/components/SEO.tsx', 'utf-8');
content = content.replace('const path = url || location.pathname;', 'const path = location.pathname;');
content = content.replace('generateLocalBusinessSchema(url || "")', 'generateLocalBusinessSchema(location.pathname)');
fs.writeFileSync('src/components/SEO.tsx', content);
