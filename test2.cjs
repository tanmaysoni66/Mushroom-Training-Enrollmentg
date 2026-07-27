const fs = require('fs');
const files = [
  'src/App.tsx',
  'src/pages/MushroomPriceTodayPage.tsx',
  'src/pages/CareersPage.tsx',
  'src/pages/MushroomFranchisePage.tsx',
  'src/pages/WorkshopPage.tsx',
  'src/pages/ArticleGharParMushroomFarming.tsx',
  'src/pages/MushroomTypeDetails.tsx',
  'src/pages/ServiceDetailPage.tsx'
];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  console.log(`\n--- ${file} ---`);
  const matches = content.match(/<h[1-6].*?>.*?<\/h[1-6]>/gs);
  if (matches) {
    matches.forEach(m => console.log(m.substring(0, 100).replace(/\n/g, ' ')));
  }
}
