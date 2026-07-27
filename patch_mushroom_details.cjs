const fs = require('fs');

let content = fs.readFileSync('src/pages/MushroomTypeDetails.tsx', 'utf-8');
content = content.replace('const MushroomTypeDetails = () => {', 'const MushroomTypeDetails = ({ defaultSlug }: { defaultSlug?: string }) => {');
content = content.replace('const { slug } = useParams<{ slug: string }>();', 'const params = useParams<{ slug: string }>();\n  const slug = defaultSlug || params.slug;');
fs.writeFileSync('src/pages/MushroomTypeDetails.tsx', content);
