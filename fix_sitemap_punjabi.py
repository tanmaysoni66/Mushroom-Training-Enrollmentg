import re

with open('public/sitemap-main.xml', 'r') as f:
    content = f.read()

# Fix the nested <url> issue again
content = content.replace('''  <url>
  <url>
    <loc>https://organicmushroomsfarm.com/blog/mushroom-training-guide-punjabi</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
    <loc>https://organicmushroomsfarm.com/blog/mushroom-training-guide-english</loc>''', '''  <url>
    <loc>https://organicmushroomsfarm.com/blog/mushroom-training-guide-punjabi</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://organicmushroomsfarm.com/blog/mushroom-training-guide-english</loc>''')

with open('public/sitemap-main.xml', 'w') as f:
    f.write(content)
