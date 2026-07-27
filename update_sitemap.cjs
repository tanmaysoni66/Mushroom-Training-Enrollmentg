const fs = require('fs');
let content = fs.readFileSync('public/sitemap-main.xml', 'utf8');

const sitemapEntry = `
  <url>
    <loc>https://organicmushroomsfarm.com/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses</loc>
    <lastmod>2026-07-21T00:00:00+00:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;

content = content.replace('</urlset>', `${sitemapEntry}\n</urlset>`);
fs.writeFileSync('public/sitemap-main.xml', content);
