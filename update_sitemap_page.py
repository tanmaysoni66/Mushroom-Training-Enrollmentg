import re

with open('src/pages/SitemapPage.tsx', 'r') as f:
    content = f.read()

replacement = '''    { name: "Commercial Mushroom Farming India", path: "/blog/commercial-mushroom-farming-india", desc: "Ultimate guide on setting up a commercial mushroom farm in India." },
    { name: "Mushroom Training Guide (Hindi)", path: "/blog/mushroom-training-guide-hindi", desc: "मशरूम ट्रेनिंग कैसे करें: गांव से लेकर शहर तक कमाई का नया जरिया (2026 पूरी गाइड)" },
    { name: "Mushroom Farming Training: Complete Guide", path: "/blog/mushroom-training-guide-english", desc: "Where to get trained in mushroom farming, varieties to learn, training costs, government support, and how the profit works in 2026." }'''

content = content.replace('{ name: "Commercial Mushroom Farming India", path: "/blog/commercial-mushroom-farming-india", desc: "Ultimate guide on setting up a commercial mushroom farm in India." }', replacement)

with open('src/pages/SitemapPage.tsx', 'w') as f:
    f.write(content)
