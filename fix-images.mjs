import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import https from 'https';
import http from 'http';
import sizeOf from 'image-size';
import { URL } from 'url';

const files = globSync('src/**/*.tsx');

async function getImageSize(src) {
  if (src.startsWith('http')) {
    return new Promise((resolve, reject) => {
      const client = src.startsWith('https') ? https : http;
      client.get(src, (res) => {
        const chunks = [];
        res.on('data', (chunk) => {
          chunks.push(chunk);
          // try to get size early
          try {
            const dimensions = sizeOf(Buffer.concat(chunks));
            res.destroy(); // stop downloading
            resolve(dimensions);
          } catch (e) {
            // keep collecting
          }
        });
        res.on('end', () => {
          try {
            resolve(sizeOf(Buffer.concat(chunks)));
          } catch (e) {
            reject(e);
          }
        });
      }).on('error', reject);
    });
  } else {
    // local file
    // handle absolute path from public
    const localPath = path.join(process.cwd(), 'public', src.replace(/%20/g, ' '));
    try {
      return sizeOf(localPath);
    } catch (e) {
      console.error(`Could not read local file ${localPath}:`, e.message);
      return null;
    }
  }
}

async function processFiles() {
  const cache = {};

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // We will match <img> tags. It's tricky with regex, but let's try a simple approach
    // looking for <img ... />
    const imgRegex = /<img\s+([^>]+)>/gi;
    let match;
    const matches = [];

    while ((match = imgRegex.exec(content)) !== null) {
      const fullTag = match[0];
      const attributes = match[1];

      // Skip if width or height is already present (unless it's just a class)
      if (/width=/i.test(fullTag) && /height=/i.test(fullTag)) {
        continue;
      }

      // Extract src
      const srcMatch = attributes.match(/src=["']([^"']+)["']/i);
      if (!srcMatch) continue;

      const src = srcMatch[1];
      
      // If src is a JSX expression, skip it (unless it's a simple string)
      if (src.startsWith('{') && !src.includes('`')) continue;

      let dimensions = cache[src];
      if (!dimensions) {
        try {
          console.log(`Fetching size for ${src}`);
          dimensions = await getImageSize(src);
          cache[src] = dimensions;
        } catch (e) {
          console.error(`Error getting size for ${src}:`, e.message);
          continue;
        }
      }

      if (dimensions) {
        // Insert width and height before the closing >
        const newTag = fullTag.replace(/\/?\s*>$/, ` width="${dimensions.width}" height="${dimensions.height}" />`);
        matches.push({ oldTag: fullTag, newTag });
      }
    }

    if (matches.length > 0) {
      for (const m of matches) {
        content = content.replace(m.oldTag, m.newTag);
      }
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

processFiles().catch(console.error);
