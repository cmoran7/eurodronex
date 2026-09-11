"""One-time layout alignment with Transportes Cooper. Run from project root."""
from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
def write(p,s):
    p=root/p;p.parent.mkdir(parents=True,exist_ok=True);p.write_text(s,encoding='utf-8')
def move(src,dst):
    a=(root/src).resolve();b=(root/dst).resolve()
    assert a.is_relative_to(root) and b.is_relative_to(root)
    b.parent.mkdir(parents=True,exist_ok=True)
    assert not b.exists(),b
    a.rename(b)
routes=json.loads((root/'docs/routes.json').read_text(encoding='utf-8'))
blog_names={'inspeccionar-edificio-sin-andamios-2026':'como-inspeccionar-un-edificio-sin-andamios-en-2026','arquitecto-drones-vs-piloto':'por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto','inspeccionar-cubiertas-sin-riesgo':'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios'}
mapping={p:('/'+blog_names.get(d.get('slug'),d.get('slug')) if d.get('type')=='BlogPost' else '/'+p.rsplit('/',1)[-1]) for p,d in routes.items()};mapping['/']='/'
mapping['/api/contacto']='/services/contact_process.php';mapping['/admin/blog']='/admin-blog'
write('docs/migration-history/previous-urls.json',json.dumps(mapping,indent=2,ensure_ascii=False))
for p in (root/'components/home').glob('*.php'):move(p.relative_to(root),Path('components')/('home-'+p.name))
(root/'components/home').rmdir()
for p in (root/'content').glob('*.json'):
    if p.name=='routes.json':move(p.relative_to(root),'docs/migration-history/routes-before.json')
    else:move(p.relative_to(root),Path('services/data')/p.name)
(root/'content').rmdir()
# Extract page bodies into clearly named, flat components.
for p in (root/'pages').glob('*.php'):
    if p.stem=='inicio':p.unlink();continue
    move(p.relative_to(root),Path('components')/(p.stem.replace('--','-')+'-content.php'))
(root/'pages').rmdir()
def php(s):return "'"+str(s).replace('\\','\\\\').replace("'","\\'")+"'"
def shell(meta,body,extra=''):
    slug=meta.get('slug','');kind=meta.get('type','WebPage');name=meta['title'].split(' | ')[0]
    top=f"<?php\n    $pageTitle = {php(meta['title'])};\n    $pageDescription = {php(meta['description'])};\n    $pageKeywords = {php(name.lower()+', EurodroneX, inspección de edificios, Madrid')};\n    $pageCanonical = {php(meta['url'])};\n    $pageRobots = {php('noindex, follow' if meta.get('noindex') else 'index, follow')};\n"
    if meta.get('image'):top+=f"    $pageOgImage = {php(meta['image'])};\n"
    top+=f"    $pageType = {php(kind)};\n"
    if slug:top+=f"    $pageSlug = {php(slug)};\n"
    if extra:top+='\n'+extra+'\n'
    top+='?>\n'
    return top+'''<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="min-h-screen flex flex-col bg-background text-foreground antialiased">
		<a class="skip-link" href="#contenido">Saltar al contenido</a>
		<?php include_once 'components/header.php'; ?>

		<main id="contenido" class="flex-1 pt-20" tabindex="-1">
'''+body+'''
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
	</body>
</html>
'''
for old,d in routes.items():
    new=mapping[old];d['url']=new
    if old=='/':
        names=['hero','problem-solution','manifesto','pathologies','services-preview','methodology','audiences','credentials','home-faq','home-contact']
        body='\n'.join("\t\t\t<?php include_once 'components/home-"+n+".php'; ?>" for n in names)
    else:body="\t\t\t<?php include_once 'components/"+d['file'].replace('--','-')+"-content.php'; ?>"
    extra=''
    if d.get('type')=='BlogPost':extra="    require_once 'services/site.php';\n    $post = find_post($pageSlug);\n    if (!$post) {\n        include '404.php';\n        return;\n    }\n    $pageTitle = $post['title'] . ' | EurodroneX';\n    $pageDescription = $post['excerpt'];\n    $pageOgImage = $post['image'];"
    write(('index' if new=='/' else new[1:])+'.php',shell(d,body,extra))
write('404.php',shell({'title':'Página no encontrada | EurodroneX','description':'La página solicitada no está disponible. Consulte nuestros servicios de inspección técnica de edificios.','url':'/404','noindex':True},"\t\t\t<?php include_once 'components/404-content.php'; ?>","    http_response_code(404);"))
# Replace rendered component dispatch with explicit PHP includes, respecting balanced expressions.
def replace_calls(s,folder):
    pattern=re.compile(r"component\('([a-z-]+)'\s*(,)?")
    while (m:=pattern.search(s)):
        start=m.end();i=start;depth=1;quote=None;escape=False
        while i<len(s):
            ch=s[i]
            if quote:
                if escape:escape=False
                elif ch=='\\':escape=True
                elif ch==quote:quote=None
            elif ch in "'\"":quote=ch
            elif ch=='(':depth+=1
            elif ch==')':
                depth-=1
                if depth==0:break
            i+=1
        value=s[start:i].strip() if m.group(2) else '[]'
        target="__DIR__ . '/"+m.group(1)+".php'" if folder=='components' else "ROOT . '/components/"+m.group(1)+".php'"
        s=s[:m.start()]+"$props = "+value+"; include "+target+s[i+1:]
    return s
for folder in ['components','services']:
    for p in (root/folder).rglob('*.php'):
        s=p.read_text(encoding='utf-8');s=replace_calls(s,folder)
        s=s.replace("$page['slug']","$pageSlug")
        for old,new in sorted(mapping.items(),key=lambda x:-len(x[0])):
            if old!='/' and old!=new:s=s.replace(old,new)
        s=s.replace("ROOT.'/content/assets.json'","ROOT.'/services/data/assets.json'")
        p.write_text(s,encoding='utf-8')
# Root page file inventory is documentation for QA, never runtime routing or metadata.
write('docs/routes.json',json.dumps({mapping[p]:{**d,'file':('index' if mapping[p]=='/' else mapping[p][1:])} for p,d in routes.items()},indent=2,ensure_ascii=False)+'\n')
for name in ['migrate.mjs','import-assets.mjs','finalize-content.mjs','optimize-images.py','refine-seo.mjs','export-seo.php','fonts.mjs']:
    move(Path('tools')/name,Path('docs/migration-history')/name)
print('Created',len(routes),'root pages; flattened components and moved content data into services/data.')
