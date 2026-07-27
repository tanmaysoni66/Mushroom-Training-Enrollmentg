const fs = require('fs');

const skipList = `
const legacyRoutesToSkip = [
  "/cities",
  "/project-specs",
  "/spawn-seeds",
  "/compost-unit",
  "/blog/mushroom-farming-training-online-offline-certificate",
  "/blog/oyster-mushroom-cultivation-india",
  "/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026",
  "/blog/turnkey-commercial-setup",
  "/training/online",
  "/training/offline",
  "/site-visit-consultation",
  "/services/milky-mushroom",
  "/services/turnkey-setup",
  "/services/oyster-mushroom",
  "/services/button-mushroom",
  "/articles/oyster-mushroom-cultivation-process",
  "/articles/white-button-mushroom-business-plan",
  "/operations"
];
`;

let crawlContent = fs.readFileSync('scripts/crawl.ts', 'utf-8');

if (!crawlContent.includes('legacyRoutesToSkip')) {
    crawlContent = crawlContent.replace('const staticPaths = getAppRoutes();', skipList + '\nconst staticPaths = getAppRoutes().filter(p => !legacyRoutesToSkip.includes(p));');
    fs.writeFileSync('scripts/crawl.ts', crawlContent);
}

