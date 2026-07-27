const fs = require('fs');

const appContent = fs.readFileSync('src/App.tsx', 'utf-8');
const servicesContent = fs.readFileSync('src/data/services.ts', 'utf-8');
const articleContent = fs.readFileSync('src/pages/ArticlePage.tsx', 'utf-8');

const urls = [
  '/cities',
  '/training images/trainingmushroom.jpg',
  '/training images/mushroomgrowth.jpg',
  '/site-visit-consultation',
  '/blog/9', '/blog/8', '/blog/3', '/blog/5', '/blog/4', '/blog/7', '/blog/6',
  '/blog/mushroom-farming-training-online-offline-certificate',
  '/project-specs',
  '/spawn-seeds',
  '/compost-unit',
  '/blog/oyster-mushroom-cultivation-india',
  '/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026',
  '/blog/turnkey-commercial-setup',
  '/training/online',
  '/training/offline',
  '/services/milky-mushroom',
  '/services/turnkey-setup',
  '/services/oyster-mushroom',
  '/services/button-mushroom',
  '/articles/oyster-mushroom-cultivation-process',
  '/articles/white-button-mushroom-business-plan'
];

urls.forEach(url => {
  let status = "Not Found";
  if (url.startsWith('/training images/')) {
     const path = 'public' + url;
     if (fs.existsSync(path)) status = "Found (Static Image)";
  } else if (appContent.includes(`path="${url}"`)) {
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
     }
  }
  
  if (status === "Not Found" && appContent.includes(url)) {
      status = "Found (Exists in App.tsx somehow)";
  }

  console.log(`${url}: ${status}`);
});
