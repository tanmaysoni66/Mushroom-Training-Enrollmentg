const fs = require('fs');
let appContent = fs.readFileSync('src/App.tsx', 'utf-8');

const additionalRedirects = `
          <Route path="/site-visit-consultation" element={<Navigate to="/on-site-consultation" replace />} />
          <Route path="/services/milky-mushroom" element={<Navigate to="/mushroom-types/milky-mushroom" replace />} />
          <Route path="/services/turnkey-setup" element={<Navigate to="/services/consultancy" replace />} />
          <Route path="/services/oyster-mushroom" element={<Navigate to="/mushroom-types/oyster-mushroom" replace />} />
          <Route path="/services/button-mushroom" element={<Navigate to="/mushroom-types/button-mushroom" replace />} />
          <Route path="/articles/oyster-mushroom-cultivation-process" element={<Navigate to="/articles/oyster-mushroom-cultivation-india" replace />} />
          <Route path="/articles/white-button-mushroom-business-plan" element={<Navigate to="/blog/mushroom-farming-business-plan-india" replace />} />
`;

appContent = appContent.replace('{/* Legacy redirects */}', '{/* Legacy redirects */}' + additionalRedirects);
fs.writeFileSync('src/App.tsx', appContent);
