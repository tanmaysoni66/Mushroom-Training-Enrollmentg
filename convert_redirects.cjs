const fs = require('fs');

let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

const componentMap = {
  "/cities": "<StatesPage />",
  "/project-specs": "<ServiceDetailPage />",
  "/spawn-seeds": "<ServiceDetailPage />",
  "/compost-unit": "<ServiceDetailPage />",
  "/blog/mushroom-farming-training-online-offline-certificate": "<ArticleTrainingOnlineOffline />",
  "/blog/oyster-mushroom-cultivation-india": "<ArticleOysterCultivation />",
  "/blog/mushroom-farming-ghar-par-kaise-ugayein-india-guide-2026": "<ArticleGharParMushroomFarming />",
  "/blog/turnkey-commercial-setup": "<ArticleTurnkeyCommercialSetup />",
  "/training/online": "<TrainingPage />",
  "/training/offline": "<TrainingPage />",
  "/site-visit-consultation": "<SiteVisitConsultationPage />",
  "/services/milky-mushroom": "<MushroomTypeDetails />",
  "/services/turnkey-setup": "<ServiceDetailPage />",
  "/services/oyster-mushroom": "<MushroomTypeDetails />",
  "/services/button-mushroom": "<MushroomTypeDetails />",
  "/articles/oyster-mushroom-cultivation-process": "<ArticleOysterCultivation />",
  "/articles/white-button-mushroom-business-plan": "<ArticleBusinessPlanIndia />",
  "/operations": "<PanIndiaOperations />"
};

const additionalImports = `
import PanIndiaOperations from "./pages/PanIndiaOperations";
`;

if (!appContent.includes("import PanIndiaOperations")) {
    appContent = appContent.replace('import SEO from "./components/SEO";', 'import SEO from "./components/SEO";\n' + additionalImports);
}

for (const [path, comp] of Object.entries(componentMap)) {
    // We will find any Navigate route for this path
    const regexStr = `<Route[\\s]*path="${path.replace(/\\/g, '\\\\')}"[\\s]*element=\\{<Navigate[^>]+>\\}[\\s]*(?:\\/|><\\/Route)>`;
    const regex = new RegExp(regexStr, 'g');
    if (appContent.match(regex)) {
        appContent = appContent.replace(regex, `<Route path="${path}" element={${comp}} />`);
    } else {
        const toInsert = `          <Route path="${path}" element={${comp}} />\n`;
        appContent = appContent.replace('{/* Legacy redirects */}', '{/* Legacy redirects */}\n' + toInsert);
    }
}

fs.writeFileSync('src/App.tsx', appContent);
