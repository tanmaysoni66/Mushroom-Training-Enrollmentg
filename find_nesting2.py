import os
import re

def find_nesting(dir_path):
    p_tag_pattern = re.compile(r'<p([^>]*)>(.*?)</p>', re.DOTALL)
    invalid_in_p = ['<div', '<ul', '<ol', '<li', '<p', '<h1', '<h2', '<h3', '<h4', '<h5', '<h6', '<table']
    
    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(('.tsx', '.ts')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                for match in p_tag_pattern.finditer(content):
                    inner_html = match.group(2)
                    for invalid_tag in invalid_in_p:
                        if invalid_tag in inner_html:
                            print(f"\n{file_path}:")
                            print(match.group(0)[:500])
                            break
find_nesting('src')
