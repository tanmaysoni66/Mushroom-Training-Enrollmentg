import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

const file = 'src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

const imagesToFix = [
  'training images/trainingmushroom.jpg',
  'training images/mushroomgrowth.jpg'
];

for (const img of imagesToFix) {
  const localPath = path.join(process.cwd(), 'public', img);
  try {
    const buffer = fs.readFileSync(localPath);
    const dimensions = sizeOf(buffer);
    
    // find <img ... src="img" ... /> that doesn't have width
    const regex = new RegExp(`<img([^>]+src=["']${img}["'][^>]*)>`, 'gi');
    let match;
    const matches = [];
    while ((match = regex.exec(content)) !== null) {
      if (!/width=/i.test(match[0])) {
        const newTag = match[0].replace(/\/?\s*>$/, ` width="${dimensions.width}" height="${dimensions.height}" />`);
        matches.push({ oldTag: match[0], newTag });
      }
    }
    
    for (const m of matches) {
      content = content.replace(m.oldTag, m.newTag);
    }
  } catch (e) {
    console.error(e.message);
  }
}

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed local images in App.tsx');
