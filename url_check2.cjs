const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const servicesContent = fs.readFileSync('src/data/services.ts', 'utf-8');
const articleContent = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf-8');
const mushroomDetailsContent = fs.existsSync('src/data/mushroomDetailData.ts') ? fs.readFileSync('src/data/mushroomDetailData.ts', 'utf-8') : '';

const urls = [
  '/cities',
  '/mushroom-price-today',
  '/on-site-consultation',
  '/articles/mushroom-farming-beginner-guide-india-2026-2027',
  '/compost-unit-specs',
  '/pan-india-global-operations',
  '/mushroom-franchise',
  '/articles/medicinal-mushrooms-income-guide-usa',
  '/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  '/articles/what-is-mushroom-spawn-beginner-guide-india',
  '/articles/mushroom-farming-training-online-offline-certificate',
  '/articles/oyster-mushroom-cultivation-india',
  '/articles/mushroom-farming-training-hindi-india',
  '/articles/mushroom-farming-business-plan-hindi-2026',
  '/articles/mushroom-training-profit-guide-usa',
  '/articles/mushroom-farming-complete-guide-hinglish-india',
  '/mushroom-types/oyster',
  '/mushroom-types/cordyceps',
  '/mushroom-types/paddy-straw',
  '/mushroom-types/lions-mane',
  '/mushroom-types/milky-mushroom',
  '/mushroom-types/reishi',
  '/mushroom-types/white-button',
  '/mushroom-types/shiitake',
  '/project-specs',
  '/blog/mushroom-farming-training-online-offline-certificate',
  '/spawn-seeds',
  '/operations',
  '/blog/oyster-mushroom-cultivation-india',
  '/blog/turnkey-commercial-setup',
  '/compost-unit',
  '/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  '/training/offline',
  '/services/milky-mushroom',
  '/training/online',
  '/services/turnkey-setup',
  '/services/oyster-mushroom',
  '/services/button-mushroom',
  '/articles/white-button-mushroom-business-plan',
  '/articles/oyster-mushroom-cultivation-process'
];

urls.forEach(url => {
  let status = "Not Found";
  if (appContent.includes(`path="${url}"`)) {
     status = "Found (Direct Route)";
  } else if (appContent.includes(`path="${url}" element={<Navigate`)) {
     status = "Found (Redirect)";
  } else {
     // Check dynamic routes
     if (url.startsWith('/blog/') && !url.includes('-')) {
        const id = url.split('/').pop();
        if (articleContent.includes(`"${id}": {`)) status = "Found (Dynamic Blog ID)";
     } else if (url.startsWith('/services/')) {
        const id = url.split('/').pop();
        if (servicesContent.includes(`id: '${id}'`)) status = "Found (Dynamic Service)";
        else status = "Not Found (Service ID doesn't exist)";
     } else if (url.startsWith('/articles/')) {
        if (appContent.includes(`path="${url}"`)) status = "Found (Article Route)";
     } else if (url.startsWith('/mushroom-types/')) {
        const slug = url.split('/').pop();
        if (mushroomDetailsContent.includes(`slug: "${slug}"`)) status = "Found (Mushroom Type)";
     }
  }
  
  if (status.includes("Not Found")) {
      // Let's do a more robust redirect check
      if (appContent.match(new RegExp(`<Route[^>]+path="${url}"[^>]+element={<Navigate`))) {
          status = "Found (Redirect regex match)";
      }
  }

  console.log(`${url}: ${status}`);
});
