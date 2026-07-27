const fs = require('fs');
let code = fs.readFileSync('src/components/SEO.tsx', 'utf-8');
code = code.replace(
  'const SEO: React.FC<SEOProps> = ({\n  title, description, keywords, url, schemas }) => { console.log("SEO rendered!");',
  `const SEO: React.FC<SEOProps> = ({
  title, description, keywords, url, schemas }) => { console.log("SEO rendered!");
  const location = useLocation();`
);
code = code.replace(
  'const fullUrl = url ? `${siteUrl}${url}` : siteUrl;',
  'const path = url || location.pathname;\n  const fullUrl = `${siteUrl}${path === "/" ? "" : path}`;'
);
fs.writeFileSync('src/components/SEO.tsx', code);
