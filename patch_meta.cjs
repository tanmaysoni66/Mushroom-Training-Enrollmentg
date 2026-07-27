const fs = require('fs');

function patchComponent(filePath) {
    if (!fs.existsSync(filePath)) {
        console.error('File not found: ' + filePath);
        return;
    }
    let code = fs.readFileSync(filePath, 'utf8');
    if (code.includes('metaDesc?: string')) return; // Already patched

    // Identify component name
    const match = code.match(/const ([A-Za-z0-9_]+) = \(\) => \{/);
    if (!match) {
        console.error('Could not find component in: ' + filePath);
        return;
    }
    const compName = match[1];

    // Replace signature
    code = code.replace(
        new RegExp(`const ${compName} = \\(\\) => \\{`),
        `const ${compName} = ({ metaDesc }: { metaDesc?: string }) => {`
    );

    // Replace SEO description
    code = code.replace(
        /<SEO\s+title=([^>]+)\s+description=\{?["'](.*?)["']\}?\s*\/>/g,
        (match, title, desc) => {
            return `<SEO \n        title=${title}\n        description={metaDesc || "${desc}"}\n      />`;
        }
    );
    
    // Some might have multi-line SEO
    code = code.replace(
        /description=(["'])(.*?)\1/g,
        (match, quote, desc) => {
            if (code.includes(`metaDesc || ${quote}${desc}${quote}`)) return match; // Already done
            return `description={metaDesc || ${quote}${desc}${quote}}`;
        }
    );

    fs.writeFileSync(filePath, code, 'utf8');
    console.log('Patched: ' + filePath);
}

const filesToPatch = [
    'src/pages/ArticleTurnkeyCommercialSetup.tsx',
    'src/pages/ProjectSpecs.tsx',
    'src/pages/ArticleGharPar.tsx',
    'src/pages/ArticleBusinessPlanIndia.tsx',
    'src/pages/ArticleWhiteButtonPlan.tsx',
    'src/pages/TrainingPage.tsx',
    'src/pages/TrainingOffline.tsx',
    'src/pages/TrainingOnline.tsx',
    'src/pages/OperationsPage.tsx',
    'src/pages/ArticleOysterProcess.tsx',
    'src/pages/ArticleOysterCultivation.tsx',
    'src/pages/CitiesPage.tsx',
    'src/pages/StatesPage.tsx',
    'src/pages/CompostUnit.tsx',
    'src/pages/ArticleEnglishGuide.tsx',
    'src/pages/ArticleCertificate.tsx'
];

filesToPatch.forEach(patchComponent);
