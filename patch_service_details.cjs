const fs = require('fs');
let content = fs.readFileSync('src/pages/ServiceDetailPage.tsx', 'utf-8');
content = content.replace('const ServiceDetailPage = () => {', 'const ServiceDetailPage = ({ defaultId }: { defaultId?: string }) => {');
content = content.replace('const { id } = useParams<{ id: string }>();', 'const params = useParams<{ id: string }>();\n  const id = defaultId || params.id;');
fs.writeFileSync('src/pages/ServiceDetailPage.tsx', content);
