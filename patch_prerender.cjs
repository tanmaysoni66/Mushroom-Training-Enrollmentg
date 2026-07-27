const fs = require('fs');
let code = fs.readFileSync('scripts/prerender.ts', 'utf-8');

// We add the logic to also prerender a 404 page.
// In the `for (const url of paths)` loop we can handle it.
// Or just add it at the end of the script.

code = code.replace(
  "await vite.close();",
  `
  // Generate 404.html for Vercel
  try {
    const { html, seoData } = render('/404-not-found-page'); // A route that triggers NotFoundPage
    let cleanHtml = html;
    const rootIndex = html.indexOf('<div');
    if (rootIndex > 0) cleanHtml = html.substring(rootIndex);
    
    let appHtml = template.replace('<div id="root"></div>', \`<div id="root">\${cleanHtml}</div>\`);
    const helmetContent = seoData ? \`
      <title>\${seoData.title}</title>
      <meta name="description" content="\${seoData.description}" />
    \` : '';
    appHtml = appHtml.replace('<!--title-placeholder-->', helmetContent);
    fs.writeFileSync(path.join(__dirname, '../dist/404.html'), appHtml, 'utf-8');
    console.log('✓ Prerendered 404.html');
  } catch (err) {
    console.error('Failed to prerender 404.html', err);
  }
  await vite.close();
  `
);

fs.writeFileSync('scripts/prerender.ts', code, 'utf-8');
