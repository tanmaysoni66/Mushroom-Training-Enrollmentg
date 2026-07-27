const fs = require('fs');
let content = fs.readFileSync('src/pages/Blog.tsx', 'utf8');

const regex = /category: "Health & Wellness",\s*icon: Heart,\s*color: "text-red-500",\s*bg: "bg-red-500\/5",\s*posts: \[\s*/;

const newPost = `{ customPath: "/blog/organic-mushrooms-health-benefits-nutrition-cultivation-uses", title: "Organic Mushrooms: Health Benefits, Nutrition, Cultivation & Uses", excerpt: "Discover the incredible health benefits of organic mushrooms like Oyster, Button, and Milky. Learn about nutrition, mushroom powder, and healthy pickles.", date: "July 21, 2026" },\n      `;

content = content.replace(regex, `category: "Health & Wellness",\n    icon: Heart,\n    color: "text-red-500",\n    bg: "bg-red-500/5",\n    posts: [\n      ${newPost}`);

fs.writeFileSync('src/pages/Blog.tsx', content);
