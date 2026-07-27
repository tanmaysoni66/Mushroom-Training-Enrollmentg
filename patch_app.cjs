const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Update TrainingPage definition to accept metaDesc
code = code.replace(
  'const TrainingPage = () => {',
  'const TrainingPage = ({ metaDesc }: { metaDesc?: string }) => {'
);
code = code.replace(
  '<SEO \n            title="Mushroom Farming Training & Certification"',
  '<SEO \n            description={metaDesc || "Professional offline and online mushroom farming training programs. Learn Oyster, Button, and Milky mushroom cultivation."}\n            title="Mushroom Farming Training & Certification"'
);

// 2. StatesPage definition (in StatesPage.tsx)
let statesCode = fs.readFileSync('src/pages/StatesPage.tsx', 'utf8');
statesCode = statesCode.replace('export default function StatesPage() {', 'export default function StatesPage({ metaDesc }: { metaDesc?: string }) {');
statesCode = statesCode.replace(
    'description="Select a state to explore mushroom farming resources, training centers, and local guides."',
    'description={metaDesc || "Select a state to explore mushroom farming resources, training centers, and local guides."}'
);
fs.writeFileSync('src/pages/StatesPage.tsx', statesCode, 'utf8');

// 3. Now let's inject metaDesc in Route declarations in App.tsx
const injectMeta = (path, meta) => {
    const escapedPath = path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(<Route path="${escapedPath}" element={<([A-Za-z0-9_]+)[^>]*?)(?:\\/|><\\/Route>)`, 'g');
    
    code = code.replace(regex, (match, p1, compName) => {
        // if already has metaDesc, ignore
        if (p1.includes('metaDesc=')) return match;
        // insert metaDesc before closing
        return p1 + ` metaDesc="${meta}" />`;
    });
};

// 1. Spawn & Seeds Category
injectMeta('/services/spawn-supply', 'Buy high-quality hybrid mushroom spawn online. We supply premium, high-yield seeds across India, optimized for commercial organic farming success. ');
injectMeta('/spawn-seeds', 'Order top-grade mushroom seeds pan-India. Get disease-free, high-yielding hybrid spawn varieties suited for oyster, button, and milky mushrooms.');

// 2. Turnkey Commercial Setup
injectMeta('/articles/turnkey-commercial-setup', 'Read our complete guide on turnkey commercial mushroom farm setup. Learn about EPC consultancy, climate-controlled grow rooms, and infrastructure.');
injectMeta('/blog/turnkey-commercial-setup', 'Discover expert insights on starting a commercial mushroom plant. Learn about compost units, climate control, and end-to-end turnkey EPC projects.');

// 3. Milky Mushroom
injectMeta('/mushroom-types/milky-mushroom', 'Learn the complete Milky Mushroom (Calocybe indica) cultivation process. Master summer farming, casing soil recipes, and straw pasteurization. ');
injectMeta('/services/milky-mushroom', 'Expert Milky Mushroom cultivation services & training. Get high-yield spawn, optimal summer farming parameters, and professional seeding guidance. ');

// 4. Consultancy & Setup Specs
injectMeta('/services/consultancy', 'Get expert mushroom farming consultancy. We offer ROI analysis, commercial setup guidance, and clinical production SOPs to build a profitable agribusiness. ');
injectMeta('/project-specs', 'Download detailed project specifications for commercial mushroom farms. Access complete infrastructure setup plans, financial ROI models, and expert SOPs. ');
injectMeta('/services/turnkey-setup', 'Looking for a turnkey mushroom farm setup? Join our offline/online training & get expert EPC consultancy for climate-controlled grow rooms in India. ');

// 5. Home Farming (Ghar Par Kaise Ugayein)
injectMeta('/articles/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026', 'Ghar par mushroom kaise ugaye? Pura step-by-step 2026 guide: substrate pasteurization, seed selection, bag filling aur harvesting ke aasan tarike sikhein. ');
injectMeta('/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026', 'Learn how to grow mushrooms at home in India. Read our complete 2026 beginner\'s guide covering bag preparation, spawn seeding, incubation, and daily care.');

// 6. Business Plan (Button Mushroom Focus)
injectMeta('/blog/mushroom-farming-business-plan-india', 'Master the 2026 mushroom farming business plan in India. Understand commercial setup costs, profit margins, ROI analysis, and local marketing strategies. ');
injectMeta('/articles/white-button-mushroom-business-plan', 'Start a profitable white button mushroom business. Explore comprehensive EPC setup costs, infrastructure needs, marketing tips, and complete ROI estimates.');

// 7. Training Courses
injectMeta('/training', 'Start your mushroom farming journey! Join our professional training for Oyster, Button, and Milky varieties. Basic & Advanced courses starting at ₹299.');
injectMeta('/training/offline', 'Attend hands-on offline mushroom farming training. Master practical skills in substrate making, spawn running, and harvesting for a commercial setup. ');
injectMeta('/training/online', 'Learn commercial mushroom cultivation from home. Enroll in our ₹299 or ₹699 online training courses covering Oyster, Button, and Milky farming techniques. ');

// 8. Global & Pan-India Operations
injectMeta('/pan-india-global-operations', 'We provide commercial mushroom farm setups and expert training across India (MP, UP, MH) and globally (USA, UK, UAE). Start your agribusiness today! ');
injectMeta('/operations', 'Explore our worldwide mushroom farm operations. From local Indian states to global markets, our expert teams deliver top-tier turnkey setups & consultancy. ');

// 9. Oyster Mushroom Cultivation
injectMeta('/articles/oyster-mushroom-cultivation-india', 'Oyster Mushroom Cultivation (Dhingri ki Kheti) is a highly profitable agribusiness in India. Read our guide on spawn, bulk supply, and farm training.');
injectMeta('/blog/oyster-mushroom-cultivation-india', 'Learn the step-by-step process of commercial Oyster mushroom farming in India. Master temperature control, humidity management, and high-yield techniques. ');
injectMeta('/articles/oyster-mushroom-cultivation-process', 'Master the complete Oyster Mushroom cultivation process. Discover agricultural waste pasteurization, ideal spawn running rates, and commercial drying tips.');

// 10. Cities & States
injectMeta('/cities', 'Find top mushroom farming training centers, spawn suppliers, and local agribusiness resources in your city. Select your region to start growing today! ');
injectMeta('/states', 'Explore state-wise mushroom farming resources across India. Connect with regional experts, locate farm setup consultants, and access government guides.');

// 11. Compost Production
injectMeta('/services/compost-production', 'High-quality industrial compost production for button mushroom farming. We supply standardized Phase II pasteurized compost to ensure maximum crop yields. ');
injectMeta('/compost-unit', 'Set up a commercial compost unit for button mushrooms. Learn about Phase II pasteurization, bulk substrate preparation, and infrastructure requirements. ');

// 12. Button Mushroom Guide & Services
injectMeta('/mushroom-types/white-button', 'Master White Button Mushroom (Agaricus bisporus) farming. Learn essential composting phases, casing requirements, and exact temperature control variables. ');
injectMeta('/services/button-mushroom', 'Professional Button mushroom cultivation services and consultancy. We provide high-yield spawn, standardized compost, and climate control setup guidance. ');

// 13. Oyster Mushroom Types & Services
injectMeta('/mushroom-types/oyster', 'Explore Oyster Mushroom (Pleurotus) varieties. Read our cultivation guide covering ideal spawn rates, straw pasteurization, and harvesting techniques. ');
injectMeta('/services/oyster-mushroom', 'Expert Oyster mushroom consultancy services. We offer commercial training, premium spawn supply, and turnkey infrastructure setup for maximum farm yields. ');

// 14. Training Guidelines & Certificates
injectMeta('/blog/mushroom-training-guide-english', 'Complete 2026 English guide on mushroom farming training. Compare varieties, training costs, government subsidies, and long-term agribusiness profitability. ');
injectMeta('/blog/mushroom-farming-training-online-offline-certificate', 'Get certified in mushroom cultivation! Compare online vs offline training, explore course fees, government schemes, and learn how to generate farm profits.');

fs.writeFileSync('src/App.tsx', code, 'utf8');
