const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

if(!content.includes('ArticleAgraTraining')) {
  // Find a good place to import
  content = content.replace(
    "import ArticleLucknowTraining from './pages/ArticleLucknowTraining';",
    "import ArticleLucknowTraining from './pages/ArticleLucknowTraining';\nimport ArticleAgraTraining from './pages/ArticleAgraTraining';"
  );

  // Find a good place to add the route
  content = content.replace(
    '<Route path="/cities/uttar-pradesh/lucknow" element={<ArticleLucknowTraining />} />',
    '<Route path="/cities/uttar-pradesh/lucknow" element={<ArticleLucknowTraining />} />\n          <Route path="/cities/uttar-pradesh/agra" element={<ArticleAgraTraining />} />'
  );

  fs.writeFileSync('src/App.tsx', content);
  console.log("App.tsx updated");
} else {
  console.log("App.tsx already has Agra");
}
