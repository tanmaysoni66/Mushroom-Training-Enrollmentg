const fs = require('fs');

function getAppRoutes() {
  const content = fs.readFileSync('src/App.tsx', 'utf-8');
  const lines = content.split('\n');
  const routes = [];
  for (const line of lines) {
     if (line.includes('<Route ') && line.includes('path="') && !line.includes('<Navigate ')) {
        const match = line.match(/path="([^"]+)"/);
        if (match && match[1] !== '*' && match[1] !== '/') {
           routes.push(match[1]);
        }
     }
  }
  return routes;
}
console.log(getAppRoutes());
