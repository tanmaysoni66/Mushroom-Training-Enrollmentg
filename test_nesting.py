import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith('.tsx'):
            path = os.path.join(root, file)
            with open(path) as f:
                content = f.read()
                # Find <button ...>...<Link ...> or <Link ...>...<button ...>
                # Using simple text search for cases on the same or adjacent lines
                
