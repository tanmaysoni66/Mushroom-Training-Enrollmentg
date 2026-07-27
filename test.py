import re
with open('src/pages/WorkshopPage.tsx') as f:
    c = f.read()
    if '<p' in c:
        print('Yes')
