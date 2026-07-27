const fs = require('fs');
const files = [
  'src/pages/ArticleTurnkeyCommercialSetup.tsx',
  'src/pages/ArticleGharParMushroomFarming.tsx',
  'src/pages/ArticleBusinessPlanIndia.tsx',
  'src/pages/ArticleWhiteButtonPlan.tsx',
  'src/pages/TrainingPage.tsx',
  'src/pages/OperationsPage.tsx',
  'src/pages/ArticleOysterMushroomCultivation.tsx',
  'src/pages/ArticleOysterMushroomCultivationIndia.tsx',
  'src/pages/CitiesPage.tsx',
  'src/pages/StatesPage.tsx',
  'src/pages/CompostUnit.tsx',
  'src/pages/ArticleMushroomTrainingGuide.tsx',
  'src/pages/ArticleWhiteButtonBusinessPlan.tsx',
  'src/pages/CitiesMainPage.tsx',
  'src/pages/ProjectSpecs.tsx'
];

for (let file of files) {
  if (!fs.existsSync(file)) {
      console.log('Not found:', file);
      continue;
  }
  let code = fs.readFileSync(file, 'utf8');
  if (code.includes('metaDesc?: string')) continue;

  const match = code.match(/const ([A-Za-z0-9_]+) = \(\) => \{/);
  if (!match) continue;
  const compName = match[1];

  code = code.replace(
      new RegExp(`const ${compName} = \\(\\) => \\{`),
      `const ${compName} = ({ metaDesc }: { metaDesc?: string }) => {`
  );

  code = code.replace(
      /<SEO\s+title=([^>]+)\s+description=\{?["'](.*?)["']\}?\s*\/>/g,
      (match, title, desc) => {
          return `<SEO \n        title=${title}\n        description={metaDesc || "${desc}"}\n      />`;
      }
  );

  // Multi-line SEO
  code = code.replace(
      /description=(["'])(.*?)\1/gs,
      (match, quote, desc) => {
          if (code.includes(`metaDesc || ${quote}${desc}${quote}`)) return match;
          return `description={metaDesc || ${quote}${desc}${quote}}`;
      }
  );

  fs.writeFileSync(file, code, 'utf8');
  console.log('Patched:', file);
}
