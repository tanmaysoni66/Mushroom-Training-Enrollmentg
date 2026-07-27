const fs = require('fs');
let content = fs.readFileSync('server.ts', 'utf8');

const regex = /\/\/ Global SEO Header\s*app\.use\(\(req, res, next\) => \{\s*res\.setHeader\('X-Robots-Tag', 'index, follow'\);\s*next\(\);\s*\}\);/m;

const replacement = `// Global SEO Header
app.use((req, res, next) => {
  if (req.path.startsWith('/payment-cancelled') || req.path.startsWith('/payment-success')) {
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  } else {
    res.setHeader('X-Robots-Tag', 'index, follow');
  }
  next();
});`;

content = content.replace(regex, replacement);
fs.writeFileSync('server.ts', content);
