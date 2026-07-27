const fs = require('fs');
let content = fs.readFileSync('src/pages/ExpertiseDetails.tsx', 'utf8');

content = content.replace(
  'Discover how our expertise transforms traditional farming into a high-yield industrial powerhouse.',
  'See how we help you start and grow a successful commercial mushroom farm.'
);

content = content.replace(
  'Our turnkey builds employ sophisticated Internet of Things (IoT) sensors to continuously monitor and adjust climate conditions.',
  'Our farms use smart sensors to check and adjust the temperature and humidity automatically.'
);

content = content.replace(
  'Smart exhaust systems automatically trigger when CO2 levels exceed optimal thresholds (e.g., >1200ppm during spawn run, <800ppm during cropping).',
  'Automatic fans keep fresh air flowing and control CO2 levels for healthy mushrooms.'
);

content = content.replace(
  'Ultrasonic humidifiers linked to precision hygrometers maintain the strict 85-90% relative humidity required for A-grade quality button mushrooms.',
  'Special humidifiers keep the air moist, which is essential for growing high-quality mushrooms.'
);

content = content.replace(
  'We bridge the knowledge gap through intensive, hands-on education programs.',
  'We teach you everything you need to know with hands-on training.'
);

content = content.replace(
  'Immerse yourself in a fully operational commercial farm. Learn spawning, casing preparation, and harvesting techniques directly from seasoned growers.',
  'Learn directly on a working farm. Practice making beds, adding seeds, and harvesting.'
);

content = content.replace(
  'Master the theoretical foundations—from compost biology to disease identification—through structured digital modules and live webinars.',
  'Learn the basics online, including how to make compost and identify diseases.'
);

content = content.replace(
  'Our commitment to quality ensures long-term operational success and maximum yield.',
  'We use high-quality materials to make sure your farm lasts and produces a lot.'
);

content = content.replace(
  'We construct our grow rooms using heavy-duty Galvanized Iron (GI) or Mild Steel (MS) racking structures, rated to support massive compost weights over decades of use.',
  'We build strong metal shelves that can hold heavy mushroom beds for many years.'
);

content = content.replace(
  'Our seeds possess exceptional genetic vigor, guaranteeing rapid mycelial colonization, disease resistance, and higher biological efficiency.',
  'Our high-quality seeds grow fast, resist diseases, and give a great harvest.'
);

fs.writeFileSync('src/pages/ExpertiseDetails.tsx', content, 'utf8');
