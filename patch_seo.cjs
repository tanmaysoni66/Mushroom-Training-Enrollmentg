const fs = require('fs');

const metaMap = {
  "/services/spawn-supply": "Buy high-quality hybrid mushroom spawn online. We supply premium, high-yield seeds across India, optimized for commercial organic farming success.",
  "/spawn-seeds": "Order top-grade mushroom seeds pan-India. Get disease-free, high-yielding hybrid spawn varieties suited for oyster, button, and milky mushrooms.",
  
  "/articles/turnkey-commercial-setup": "Read our complete guide on turnkey commercial mushroom farm setup. Learn about EPC consultancy, climate-controlled grow rooms, and infrastructure.",
  "/blog/turnkey-commercial-setup": "Discover expert insights on starting a commercial mushroom plant. Learn about compost units, climate control, and end-to-end turnkey EPC projects.",
  
  "/mushroom-types/milky-mushroom": "Learn the complete Milky Mushroom (Calocybe indica) cultivation process. Master summer farming, casing soil recipes, and straw pasteurization.",
  "/services/milky-mushroom": "Expert Milky Mushroom cultivation services & training. Get high-yield spawn, optimal summer farming parameters, and professional seeding guidance.",
  
  "/services/consultancy": "Get expert mushroom farming consultancy. We offer ROI analysis, commercial setup guidance, and clinical production SOPs to build a profitable agribusiness.",
  "/project-specs": "Download detailed project specifications for commercial mushroom farms. Access complete infrastructure setup plans, financial ROI models, and expert SOPs.",
  "/services/turnkey-setup": "Looking for a turnkey mushroom farm setup? Join our offline/online training & get expert EPC consultancy for climate-controlled grow rooms in India.",
  
  "/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026": "Ghar par mushroom kaise ugaye? Pura step-by-step 2026 guide: substrate pasteurization, seed selection, bag filling aur harvesting ke aasan tarike sikhein.",
  "/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026": "Learn how to grow mushrooms at home in India. Read our complete 2026 beginner's guide covering bag preparation, spawn seeding, incubation, and daily care.",
  
  "/blog/mushroom-farming-business-plan-india": "Master the 2026 mushroom farming business plan in India. Understand commercial setup costs, profit margins, ROI analysis, and local marketing strategies.",
  "/articles/white-button-mushroom-business-plan": "Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.",
  
  "/training": "Start your mushroom farming journey! Join our professional training for Oyster, Button, and Milky varieties. Basic & Advanced courses starting at ₹299.",
  "/training/offline": "Attend hands-on offline mushroom farming training. Master practical skills in substrate making, spawn running, and harvesting for a commercial setup.",
  "/training/online": "Learn commercial mushroom cultivation from home. Enroll in our ₹299 or ₹699 online training courses covering Oyster, Button, and Milky farming techniques.",
  
  "/pan-india-global-operations": "We provide commercial mushroom farm setups and expert training across India (MP, UP, MH) and globally (USA, UK, UAE). Start your agribusiness today!",
  "/operations": "Explore our worldwide mushroom farm operations. From local Indian states to global markets, our expert teams deliver top-tier turnkey setups & consultancy.",
  
  "/articles/oyster-mushroom-cultivation-india": "Oyster Mushroom Cultivation (Dhingri ki Kheti) is a highly profitable agribusiness in India. Read our guide on spawn, bulk supply, and farm training.",
  "/blog/oyster-mushroom-cultivation-india": "Learn the step-by-step process of commercial Oyster mushroom farming in India. Master temperature control, humidity management, and high-yield techniques.",
  "/articles/oyster-mushroom-cultivation-process": "Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.",
  
  "/cities": "Find top mushroom farming training centers, spawn suppliers, and local agribusiness resources in your city. Select your region to start growing today!",
  "/states": "Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.",
  
  "/services/compost-production": "High-quality industrial compost production for button mushroom farming. We supply standardized Phase II pasteurized compost to ensure maximum crop yields.",
  "/compost-unit": "Set up a commercial compost unit for button mushrooms. Learn about Phase II pasteurization, bulk substrate preparation, and infrastructure requirements.",
  
  "/mushroom-types/white-button": "Master White Button Mushroom (Agaricus bisporus) farming. Learn essential composting phases, casing requirements, and exact temperature control variables.",
  "/services/button-mushroom": "Professional Button mushroom cultivation services and consultancy. We provide high-yield spawn, standardized compost, and climate control setup guidance.",
  
  "/mushroom-types/oyster": "Explore Oyster Mushroom (Pleurotus) varieties. Read our cultivation guide covering ideal spawn rates, straw pasteurization, and harvesting techniques.",
  "/services/oyster-mushroom": "Expert Oyster mushroom consultancy services. We offer commercial training, premium spawn supply, and turnkey infrastructure setup for maximum farm yields.",
  
  "/blog/mushroom-training-guide-english": "Complete 2026 English guide on mushroom farming training. Compare varieties, training costs, government subsidies, and long-term agribusiness profitability.",
  "/blog/mushroom-farming-training-online-offline-certificate": "Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits."
};

let seoCode = fs.readFileSync('src/components/SEO.tsx', 'utf8');

// Insert metaMap and replacement logic right after `const path = location.pathname;`
const insertionPoint = "const path = location.pathname;";
const mappingStr = `
  const metaMap: Record<string, string> = ${JSON.stringify(metaMap, null, 2)};
  const finalDescription = metaMap[path] || description;
`;

if (!seoCode.includes('metaMap: Record<string, string>')) {
  seoCode = seoCode.replace(insertionPoint, insertionPoint + '\n' + mappingStr);
  
  // Replace all instances of `description` in the Helmet with `finalDescription` (or in context)
  seoCode = seoCode.replace(/description,/g, 'description: finalDescription,');
  seoCode = seoCode.replace(/content=\{description\}/g, 'content={finalDescription}');
  
  fs.writeFileSync('src/components/SEO.tsx', seoCode, 'utf8');
  console.log("SEO.tsx patched successfully.");
} else {
  console.log("SEO.tsx already patched.");
}

