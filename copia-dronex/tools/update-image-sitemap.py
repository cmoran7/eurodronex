"""Keep page and image sitemaps separate; preserve existing page URLs."""
from pathlib import Path
import json
import re
import xml.etree.ElementTree as ET
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parents[1]
NS = 'http://www.sitemaps.org/schemas/sitemap/0.9'
IMG = 'http://www.google.com/schemas/sitemap-image/1.1'
ET.register_namespace('', NS)
ET.register_namespace('image', IMG)
tree = ET.parse(ROOT / 'sitemap.xml')
image_tree = ET.ElementTree(ET.Element(f'{{{NS}}}urlset'))
count = 0
for url in tree.getroot():
    loc = url.find(f'{{{NS}}}loc').text
    parsed = urlsplit(loc)
    slug = parsed.path.strip('/') or 'index'
    page = ROOT / f'{slug}.php'
    if not page.is_file():
        raise ValueError(f'Missing page: {slug}')
    page_text = page.read_text(encoding='utf-8')
    texts = [page_text]
    for component in re.findall(r"include(?:_once)?\s+['\"](components/[^'\"]+)['\"]", page_text):
        if component not in ['components/header.php', 'components/footer.php']:
            texts.append((ROOT / component).read_text(encoding='utf-8'))
    # Only this page's Elementor stylesheet, excluding global header/footer assets.
    page_id = re.search(r'data-elementor-id="(\d+)"', page_text)
    if page_id:
        manifest = json.loads((ROOT / 'services/data' / f'{slug}-styles.json').read_text())
        for css in manifest:
            if f'elementor-post-{page_id[1]}-' in css:
                texts.append((ROOT / css.lstrip('/')).read_text(encoding='utf-8'))
    images = sorted(set(re.findall(r'/assets/img/[\w.-]+\.(?:webp|png|jpe?g|avif)', '\n'.join(texts))))
    for old in list(url.findall(f'{{{IMG}}}image')):
        url.remove(old)
    if not images:
        continue
    image_url = ET.SubElement(image_tree.getroot(), f'{{{NS}}}url')
    ET.SubElement(image_url, f'{{{NS}}}loc').text = loc
    for image in images:
        if not (ROOT / image.lstrip('/')).is_file():
            raise ValueError(f'Missing image: {image}')
        node = ET.SubElement(image_url, f'{{{IMG}}}image')
        ET.SubElement(node, f'{{{IMG}}}loc').text = f'{parsed.scheme}://{parsed.netloc}{image}'
        count += 1
ET.indent(tree, space='    ')
tree.write(ROOT / 'sitemap.xml', encoding='utf-8', xml_declaration=True)
ET.indent(image_tree, space='    ')
image_tree.write(ROOT / 'sitemap-images.xml', encoding='utf-8', xml_declaration=True)
print(f'{len(tree.getroot())} pages; {count} image references')
