const fs = require('fs');
let content = fs.readFileSync('src/pages/Equipment.tsx', 'utf8');

content = content.replace(
  'Essential infrastructure and professional-grade materials required for industrial mushroom production.',
  'Essential tools and materials needed for commercial mushroom farming.'
);

content = content.replace(
  'Automated ultrasonic systems to maintain 80-90% relative humidity essential for pinning.',
  'Automatic systems to keep the air moist, which is important for mushroom growth.'
);

content = content.replace(
  'Industrial AC units and high-speed exhaust fans for precise thermodynamic balance.',
  'Air conditioners and fans to control the temperature and fresh air.'
);

content = content.replace(
  'Galvanized vertical racking systems designed to maximize cubic growth area.',
  'Strong shelves to save space and grow more mushrooms.'
);

content = content.replace(
  'Balanced spectrum LED setups specifically for mushroom pinning induction.',
  'Special LED lights to help mushrooms start growing.'
);

content = content.replace(
  'Fine-mist sprayer pumps for maintaining hydration without damaging mycelium.',
  'Sprayers that give a fine mist to water mushrooms gently.'
);

content = content.replace(
  'Industrial-grade sensors for real-time monitoring of temp and moisture.',
  'High-quality sensors to check temperature and humidity.'
);

content = content.replace(
  'BPA-free polypropylene bags and wooden/plastic incubation trays.',
  'Safe plastic bags and trays for growing.'
);

content = content.replace(
  'High-yield hybrid mushroom seeds (spawn) verified for genetic stability.',
  'High-quality mushroom seeds (spawn) that give good yields.'
);

content = content.replace(
  'Premium wheat straw, paddy straw, and hardwood sawdust sourcing.',
  'Good quality wheat straw, paddy straw, and sawdust.'
);

content = content.replace(
  'Industrial-grade autoclaves and chemical sterilization tanks for substrate prep.',
  'Equipment to clean and prepare the growing material.'
);

content = content.replace(
  'Not sure which equipment to buy? We provide turnkey project assistance, sourcing high-quality machinery at wholesale rates for our students.',
  'Not sure what to buy? We help you choose and get high-quality equipment at wholesale prices.'
);

fs.writeFileSync('src/pages/Equipment.tsx', content, 'utf8');
