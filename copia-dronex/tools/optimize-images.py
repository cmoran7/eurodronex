"""Recompress large photographs without changing their URLs or dimensions.

Originals are kept in the ignored audit directory; run only when originals change.
"""
from pathlib import Path
from PIL import Image
import io
import shutil

ROOT = Path(__file__).resolve().parents[1]
BACKUP = ROOT.parent / '.audit-work' / 'original-images'
BACKUP.mkdir(parents=True, exist_ok=True)
saved = 0
for path in sorted((ROOT / 'assets/img').iterdir()):
    if path.suffix.lower() not in ('.jpg', '.jpeg', '.webp') or path.stat().st_size < 90000:
        continue
    original = BACKUP / path.name
    if original.exists():
        continue
    with Image.open(path) as picture:
        if getattr(picture, 'is_animated', False):
            continue
        output = io.BytesIO()
        if path.suffix.lower() == '.webp':
            picture.save(output, 'WEBP', quality=82, method=6)
        else:
            picture.convert('RGB').save(output, 'JPEG', quality=82, optimize=True, progressive=True)
        content = output.getvalue()
    if len(content) < path.stat().st_size * .85:
        saved += path.stat().st_size - len(content)
        shutil.copy2(path, original)
        path.write_bytes(content)
        print(path.name, len(content))
print('Bytes saved:', saved)
