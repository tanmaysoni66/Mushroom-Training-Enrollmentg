const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const newRoutes = `          <Route path="/mushroom-farming-nashik-maharashtra" element={<ArticleNashikTraining />} />\n          <Route path="/mushroom-farming-nashik" element={<ArticleNashikTraining />} />`;
content = content.replace('<Route path="/cities/maharashtra/nashik" element={<ArticleNashikTraining />} />', `<Route path="/cities/maharashtra/nashik" element={<ArticleNashikTraining />} />\n${newRoutes}`);

fs.writeFileSync('src/App.tsx', content);
