import re

with open('src/pages/SitemapPage.tsx', 'r') as f:
    content = f.read()

replacement = '''    { name: "Mushroom Training Guide (Punjabi)", path: "/blog/mushroom-training-guide-punjabi", desc: "ਕਣਕ-ਝੋਨੇ ਦੇ ਚੱਕਰ ਤੋਂ ਬਾਹਰ: ਪੰਜਾਬ ਦੇ ਕਿਸਾਨਾਂ ਲਈ ਖੁੰਬਾਂ ਦੀ ਖੇਤੀ ਦੀ ਟਰੇਨਿੰਗ ਕਿਉਂ ਬਣ ਰਹੀ ਹੈ ਨਵਾਂ ਰਾਹ" },
    { name: "Mushroom Training Guide (Hindi)", path: "/blog/mushroom-training-guide-hindi", desc: "मशरूम ट्रेनिंग कैसे करें: गांव से लेकर शहर तक कमाई का नया जरिया (2026 पूरी गाइड)" }'''

content = content.replace('{ name: "Mushroom Training Guide (Hindi)", path: "/blog/mushroom-training-guide-hindi", desc: "मशरूम ट्रेनिंग कैसे करें: गांव से लेकर शहर तक कमाई का नया जरिया (2026 पूरी गाइड)" }', replacement)

with open('src/pages/SitemapPage.tsx', 'w') as f:
    f.write(content)
