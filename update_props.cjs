const fs = require('fs');

function addMetaDescProp(filePath) {
  let code = fs.readFileSync(filePath, 'utf8');
  if (code.includes('metaDesc?: string')) return; // Already added
  
  // Replace the component signature
  code = code.replace(
    /const (ServiceDetailPage|MushroomTypeDetails|BlogDetails) = \({ defaultId, defaultSlug }: \{ defaultId\?: string, defaultSlug\?: string \}\) => \{/g, 
    'const $1 = ({ defaultId, defaultSlug, metaDesc }: { defaultId?: string, defaultSlug?: string, metaDesc?: string }) => {'
  );
  // Also handle cases where it only takes one
  code = code.replace(
    /const ServiceDetailPage = \(\{ defaultId \}: \{ defaultId\?: string \}\) => \{/g, 
    'const ServiceDetailPage = ({ defaultId, metaDesc }: { defaultId?: string, metaDesc?: string }) => {'
  );
  code = code.replace(
    /const MushroomTypeDetails = \(\{ defaultSlug \}: \{ defaultSlug\?: string \}\) => \{/g, 
    'const MushroomTypeDetails = ({ defaultSlug, metaDesc }: { defaultSlug?: string, metaDesc?: string }) => {'
  );
  
  // Replace the SEO description
  code = code.replace(
    /description=\{([^}]+)\}/g,
    'description={metaDesc || $1}'
  );

  fs.writeFileSync(filePath, code, 'utf8');
}

addMetaDescProp('src/pages/ServiceDetailPage.tsx');
addMetaDescProp('src/pages/MushroomTypeDetails.tsx');
// Will need to check other files like BlogDetails.tsx if they exist.
