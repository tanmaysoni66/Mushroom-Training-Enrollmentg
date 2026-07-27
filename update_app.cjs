const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const importStatement = `import ArticleOrganicMushroomHealthBenefits from "./pages/ArticleOrganicMushroomHealthBenefits";\n`;
content = content.replace('import ArticleMushroomTrainingGuidePunjabi from "./pages/ArticleMushroomTrainingGuidePunjabi";', `import ArticleMushroomTrainingGuidePunjabi from "./pages/ArticleMushroomTrainingGuidePunjabi";\n${importStatement}`);

const routeStatement = `<Route path="/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses" element={<ArticleOrganicMushroomHealthBenefits />} />\n`;
content = content.replace('<Route path="/blog/mushroom-training-guide-punjabi" element={<ArticleMushroomTrainingGuidePunjabi />} />', `<Route path="/blog/mushroom-training-guide-punjabi" element={<ArticleMushroomTrainingGuidePunjabi />} />\n              ${routeStatement}`);

fs.writeFileSync('src/App.tsx', content);
