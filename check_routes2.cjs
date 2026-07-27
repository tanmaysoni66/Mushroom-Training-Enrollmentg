const fs = require('fs');
function getAppRoutes() {
  const content = fs.readFileSync('src/App.tsx', 'utf-8');
  const routeRegex = /<Route[\s\S]*?path="([^"]+)"[\s\S]*?(?:>|\/>)/g;
  let match;
  const routes = [];
  while ((match = routeRegex.exec(content)) !== null) {
    const fullTag = match[0];
    if (!fullTag.includes('<Navigate ')) {
      if (match[1] !== '*' && match[1] !== '/') {
        routes.push(match[1]);
      }
    }
  }
  return routes;
}
console.log(getAppRoutes());
