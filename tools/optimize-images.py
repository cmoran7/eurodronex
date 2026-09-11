"""Local image optimisation only; no remote requests or source React edits."""
from pathlib import Path
from PIL import Image
import json, re
root=Path(__file__).resolve().parent.parent
mapping={};dimensions={};before=after=0
for p in (root/'assets/img').glob('*'):
    if p.suffix.lower() not in ('.jpg','.jpeg','.png'): continue
    with Image.open(p) as image:
        image=image.convert('RGB');image.thumbnail((1600,1600))
        target=p.with_suffix('.webp');image.save(target,'WEBP',quality=83,method=6)
        old='/assets/img/'+p.name;new='/assets/img/'+target.name;mapping[old]=new
        dimensions[new]=list(image.size)
        before+=p.stat().st_size;after+=target.stat().st_size
        for width in (480,960):
            if image.width>width:
                copy=image.copy();copy.thumbnail((width,width*4));copy.save(target.with_name(target.stem+'-'+str(width)+'.webp'),'WEBP',quality=80,method=6)
for folder in ('pages','components','content'):
    for p in (root/folder).rglob('*'):
        if p.suffix not in ('.php','.json'): continue
        text=p.read_text(encoding='utf-8')
        for old,new in mapping.items():text=text.replace(old,new)
        def attrs(m):
            tag=m.group(0);src=m.group(1)
            if src not in dimensions:return tag
            w,h=dimensions[src];tag=tag.replace('<img ',f'<img width="{w}" height="{h}" ',1)
            variants=[(src.replace('.webp',f'-{size}.webp'),size) for size in (480,960) if w>size]+[(src,w)]
            srcset=', '.join(f'{url} {size}w' for url,size in variants)
            return tag.replace('src="',f'srcset="{srcset}" sizes="(min-width: 1024px) 50vw, 100vw" src="',1)
        if p.suffix=='.php':text=re.sub(r'<img\b[^>]*\bsrc="(/assets/img/[^\"]+)"[^>]*>',attrs,text)
        p.write_text(text,encoding='utf-8')
(root/'content/image-dimensions.json').write_text(json.dumps(dimensions,indent=2),encoding='utf-8')
print(json.dumps({'images':len(mapping),'original_bytes':before,'webp_bytes':after}))
