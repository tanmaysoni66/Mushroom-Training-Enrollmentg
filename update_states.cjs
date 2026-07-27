const fs = require('fs');

let ap = fs.readFileSync('src/pages/AndhraPradeshPage.tsx', 'utf8');
ap = ap.replace(
  'Find premium mushroom farming training, commercial setups, spawn supply, and agribusiness resources across cities in Andhra Pradesh.',
  'Find mushroom farming training, farm setups, seeds, and resources in Andhra Pradesh cities.'
);
ap = ap.replace(
  'Select a city in Andhra Pradesh to find local mushroom farming training centers, consultants, and premium spawn suppliers.',
  'Choose a city in Andhra Pradesh to find local mushroom training, experts, and seed suppliers.'
);
ap = ap.replace(
  'Mushroom training, cultivation resources, and commercial setups in Visakhapatnam.',
  'Get mushroom training, growing tips, and farm setups in Visakhapatnam.'
);
ap = ap.replace(
  'Mushroom training, agritech business opportunities, and cultivation resources in Vijayawada.',
  'Find mushroom training, business ideas, and growing tips in Vijayawada.'
);
fs.writeFileSync('src/pages/AndhraPradeshPage.tsx', ap, 'utf8');

let tn = fs.readFileSync('src/pages/TamilNaduPage.tsx', 'utf8');
tn = tn.replace(
  'Find premium mushroom farming training, commercial setups, spawn supply, and agribusiness resources across cities in Tamil Nadu.',
  'Find mushroom farming training, farm setups, seeds, and resources in Tamil Nadu.'
);
tn = tn.replace(
  'Select a city in Tamil Nadu to find local mushroom farming training centers, consultants, and premium spawn suppliers.',
  'Choose a city in Tamil Nadu to find local mushroom training, experts, and seed suppliers.'
);
tn = tn.replace(
  'Mushroom training, cultivation resources, and commercial setups in Chennai.',
  'Get mushroom training, growing tips, and farm setups in Chennai.'
);
tn = tn.replace(
  'Mushroom training, agritech business opportunities, and cultivation resources in Coimbatore.',
  'Find mushroom training, business ideas, and growing tips in Coimbatore.'
);
tn = tn.replace(
  'Mushroom Farming Business for Women Self-Help Groups (SHGs) in Madurai.',
  'Start a mushroom farm with Women Self-Help Groups in Madurai.'
);
tn = tn.replace(
  'Mushroom training (online & offline), premium spawn supply, commercial farm setup, and consultancy services in Tiruchirappalli.',
  'Get mushroom training, seeds, farm setups, and expert advice in Tiruchirappalli.'
);
fs.writeFileSync('src/pages/TamilNaduPage.tsx', tn, 'utf8');

let mh = fs.readFileSync('src/pages/MaharashtraPage.tsx', 'utf8');
mh = mh.replace(
  'Discover top-rated commercial mushroom farming training, turnkey setup services, and expert guidance in Maharashtra to start your successful business.',
  'Find the best mushroom farming training, farm setups, and expert advice in Maharashtra.'
);
mh = mh.replace(
  'Select a city in Maharashtra to view local mushroom farming centers, training courses, and spawn availability.',
  'Choose a city in Maharashtra to find local mushroom training, experts, and seed suppliers.'
);
mh = mh.replace(
  'Mushroom training, cultivation resources, and commercial setups in Mumbai.',
  'Get mushroom training, growing tips, and farm setups in Mumbai.'
);
mh = mh.replace(
  'Mushroom training, cultivation resources, and offline courses in Pune.',
  'Find mushroom training, growing tips, and classes in Pune.'
);
mh = mh.replace(
  'Mushroom training, cultivation resources, and commercial setups in Nagpur.',
  'Get mushroom training, growing tips, and farm setups in Nagpur.'
);
mh = mh.replace(
  'Mushroom Farming Business for Women Self-Help Groups (SHGs) in Aurangabad.',
  'Start a mushroom farm with Women Self-Help Groups in Aurangabad.'
);
mh = mh.replace(
  'Mushroom training (online & offline), premium spawn supply, commercial farm setup, and consultancy services in Nashik, Maharashtra.',
  'Get mushroom training, seeds, farm setups, and expert advice in Nashik.'
);
fs.writeFileSync('src/pages/MaharashtraPage.tsx', mh, 'utf8');

