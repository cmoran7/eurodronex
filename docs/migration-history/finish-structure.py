from pathlib import Path
import json,re
root=Path(__file__).resolve().parent.parent
def read(p):return (root/p).read_text(encoding='utf8')
def write(p,s):(root/p).write_text(s,encoding='utf8')
mapping=json.loads(read('docs/migration-history/previous-urls.json'))
site=read('services/site.php').replace("ROOT . '/content/'","ROOT . '/services/data/'")
a=site.index('function component(');b=site.index('function session_open(',a);site=site[:a]+site[b:]
a=site.index('function public_routes(');b=site.index('function security_headers(',a);site=site[:a]+site[b:]
site+='''
function post_path(string $slug): string {
    $original = [
        'inspeccionar-edificio-sin-andamios-2026' => 'como-inspeccionar-un-edificio-sin-andamios-en-2026',
        'arquitecto-drones-vs-piloto' => 'por-que-un-arquitecto-con-drones-no-es-lo-mismo-que-un-piloto',
        'inspeccionar-cubiertas-sin-riesgo' => 'como-inspeccionar-cubiertas-sin-riesgo-ni-andamios',
    ];
    return '/' . ($original[$slug] ?? $slug);
}

function find_post(string $slug): ?array {
    foreach (posts() as $entry) {
        if ($entry['slug'] === $slug || post_path($entry['slug']) === '/' . $slug) return $entry;
    }
    return null;
}
'''
write('services/site.php',site)
for p in (root/'components').glob('*.php'):
    s=p.read_text(encoding='utf8')
    s=re.sub(r"'/blog/'\s*\.\s*(\$\w+\['slug'\])",r'post_path(\1)',s)
    s=re.sub(r'/blog/<\?= e\((\$\w+\[\'slug\'\])\) \?>',r'<?= e(post_path(\1)) ?>',s)
    for prefix in ['servicios','sectores','casos-de-estudio','patologias']:
        s=s.replace("'/"+prefix+"/'.","'/'.").replace('/'+prefix+'/<?=','/<?=')
    p.write_text(s,encoding='utf8')
for old,new in [('components/home-home-contact.php','components/home-contact.php'),('components/home-home-faq.php','components/home-faq.php')]:
    a=(root/old).resolve();b=(root/new).resolve();assert a.is_relative_to(root) and b.is_relative_to(root) and not b.exists();a.rename(b)
for p in root.glob('*.php'):
    if p.name=='router.php':continue
    s=p.read_text(encoding='utf8').replace('home-home-contact','home-contact').replace('home-home-faq','home-faq')
    s=s.replace('?>\n<!doctype html>',"    include_once 'services/page-init.php';\n?>\n<!doctype html>",1)
    p.write_text(s,encoding='utf8')
head=read('services/common-head.php')
head=head.replace("$ogImage = ($page['image'] ?? '') ?: content('routes')['/']['image'];","$ogImage = $pageOgImage ?? '/assets/img/464bbf7f1798693b.webp';")
head=head.replace("$page['title']","$pageTitle").replace("$page['description']","$pageDescription").replace("($page['type'] ?? '')","($pageType ?? '')")
head=head.replace('<meta name="description"', '<meta name="keywords" content="<?= e($pageKeywords ?? \'\') ?>">\n<meta name="description"',1)
head=head.replace("__DIR__.'/structured-data.php'","__DIR__.'/structured-data-json-ld.php'")
write('services/common-head.php',head)
schema=read('services/structured-data.php').replace("$page['title']","$pageTitle").replace("$page['description']","$pageDescription").replace("($page['type']??'')","($pageType??'')").replace("$page['heading']","explode(' | ', $pageTitle)[0]").replace("($page['file'] ?? '') !== '404'","$path !== '/404'")
start=schema.index('    $parts=');end=schema.index("    $graph[]=['@type'=>'BreadcrumbList'",start)
schema=schema[:start]+"    $crumbs[] = ['@type'=>'ListItem', 'position'=>2, 'name'=>explode(' | ', $pageTitle)[0], 'item'=>$canonical];\n"+schema[end:]
write('services/structured-data-json-ld.php',schema)
(root/'services/structured-data.php').unlink()
write('services/contact_process.php',"<?php\nrequire_once __DIR__ . '/site.php';\nsecurity_headers();\nrequire __DIR__ . '/contact-handler.php';\n")
s=read('services/contact-handler.php').replace("if (!isset(public_routes()[$return])) $return='/contacto';","if (!preg_match('#^/[a-z0-9-]*$#', $return) || ($return !== '/' && !is_file(ROOT . $return . '.php'))) $return='/contacto';")
write('services/contact-handler.php',s)
s=read('services/admin.php').replace("content('routes')['/']['image']","'/assets/img/464bbf7f1798693b.webp'").replace('/blog/<?= e($entry[\'slug\']) ?>',"<?= e(post_path($entry['slug'])) ?>")
s=s.replace("            redirect_to('/admin-blog?guardado=1');","            require_once __DIR__ . '/update-sitemap.php';\n            update_blog_sitemap();\n            redirect_to('/admin-blog?guardado=1');")
# Keep published article URLs from colliding with other root pages.
s=s.replace("if($new['title']===''", "if(($_POST['original']??'')==='' && is_file(ROOT.'/'. $new['slug'].'.php'))throw new RuntimeException('Esa URL ya pertenece a una página de la web.');\n            if($new['title']===''")
write('services/admin.php',s)
# Retain redirects for the previous implementation and the WordPress aliases, without self redirects.
redirects=dict(re.findall(r"'([^']+)'\s*=>\s*'([^']*)'",read('services/redirects.php')))
redirects.update({a:b for a,b in mapping.items() if a!=b})
for a,b in list(redirects.items()):
    if a!=b and not a.endswith('.php') and not a.endswith('.xml'):redirects.setdefault(a.rstrip('/')+'/',b)
redirects={a:b for a,b in redirects.items() if a!=b};redirects['/index']='/';redirects['/index/']='/'
write('services/redirects.php',"<?php\nreturn [\n"+''.join("    '"+a+"' => '"+b+"',\n" for a,b in redirects.items())+"];\n")
ht='''Options -Indexes -MultiViews
DirectoryIndex index.php
RewriteEngine On

# Canonical domain; local/staging hosts are not redirected.
RewriteCond %{HTTP_HOST} ^(?:www\\.)?eurodronex\\.com$ [NC]
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} ^www\\.eurodronex\\.com$ [NC]
RewriteRule ^ https://eurodronex.com%{REQUEST_URI} [R=301,L]

# Existing public URLs.
'''
for a,b in redirects.items():
    if a=='/index.php':continue
    ht+='RewriteRule ^'+re.escape(a[1:])+'$ '+b+' [R=301,L,NE]\n'
ht+='''
# Internal code is never served directly.
RewriteRule ^services/contact_process\\.php$ - [L]
RewriteRule ^(?:components|services|react|node_modules|tools|docs|var)(?:/|$) - [R=404,L]
RewriteRule (^|/)\\. - [R=404,L]
RewriteRule \\.(?:json|jsonc|yaml|yml|mjs|cjs|md|lock)$ - [R=404,L,NC]

# Visible pages have no .php suffix.
RewriteCond %{THE_REQUEST} \\s/+index\\.php[?\\s] [NC]
RewriteRule ^index\\.php$ / [R=301,L]
RewriteCond %{THE_REQUEST} \\s/+([a-z0-9-]+)\\.php[?\\s] [NC]
RewriteRule ^([a-z0-9-]+)\\.php$ /$1 [R=301,L]
RewriteCond %{REQUEST_URI} .+/$
RewriteRule ^(.+)/$ /$1 [R=301,L]

# Serve existing root PHP files, like Transportes Cooper.
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.php -f
RewriteRule ^([a-z0-9-]+)$ $1.php [L]

# Static assets, robots.txt and sitemap.xml are real files.
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

# New blog articles use the common root article template.
RewriteRule ^([a-z0-9-]+)$ articulo.php?slug=$1 [L,QSA]
RewriteRule ^ - [R=404,L]
ErrorDocument 404 /404.php

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/webp "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType text/css "access plus 1 week"
    ExpiresByType application/javascript "access plus 1 week"
</IfModule>
'''
write('.htaccess',ht)
# Initial static sitemap, with the same readable fields as Cooper.
routes=json.loads(read('docs/routes.json'));xml=['<?xml version="1.0" encoding="UTF-8"?>','<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
for url,d in sorted(routes.items(),key=lambda pair:(pair[0]!='/',pair[0])):
    if d.get('noindex'):continue
    legal=d.get('type')=='Legal';priority='1.0' if url=='/' else ('0.2' if legal else '0.8');freq='yearly' if legal else ('weekly' if url in ['/','/blog'] else 'monthly')
    xml+=['  <url>','    <loc>https://eurodronex.com'+url+'</loc>','    <lastmod>2026-09-11</lastmod>','    <changefreq>'+freq+'</changefreq>','    <priority>'+priority+'</priority>','  </url>']
xml+=['</urlset>'];write('sitemap.xml','\n'.join(xml)+'\n')
write('robots.txt','User-agent: *\nAllow: /\nDisallow: /admin-blog\nDisallow: /acceso\nDisallow: /services/\nDisallow: /react/\n\nSitemap: https://eurodronex.com/sitemap.xml\n')
(root/'services/sitemap.php').unlink()
print('Site helpers, aliases and static sitemap aligned.')
