import xml.etree.ElementTree as ET

try:
    tree = ET.parse('public/sitemap-main.xml')
    print("Sitemap is valid XML")
except ET.ParseError as e:
    print(f"Invalid XML: {e}")
