const fs = require('fs');
let config = JSON.parse(fs.readFileSync('vercel.json', 'utf-8'));
config.rewrites = config.rewrites.filter(r => r.destination !== '/index.html');
fs.writeFileSync('vercel.json', JSON.stringify(config, null, 2), 'utf-8');
