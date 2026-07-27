const fs = require('fs');
let code = fs.readFileSync('tsconfig.json', 'utf8');
const config = JSON.parse(code);
config.exclude = ["dist", "node_modules", "scripts", "build", "coverage", ".next"];
fs.writeFileSync('tsconfig.json', JSON.stringify(config, null, 2), 'utf8');
