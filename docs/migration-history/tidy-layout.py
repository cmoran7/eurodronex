from pathlib import Path
import re,json
root=Path(__file__).resolve().parent.parent
routes=json.loads((root/'docs/routes.json').read_text(encoding='utf8'))
for url,d in routes.items():
    if d.get('type')!='ServiceDetail' or d.get('slug')=='inspeccion-precompra':continue
    p=root/(d['file']+'.php');s=p.read_text(encoding='utf8')
    old='servicios-'+d['slug']+'-content.php'
    s=s.replace("<?php include_once 'components/"+old+"'; ?>", "<?php\n\t\t\t\t$props = ['slug' => '"+d['slug']+"'];\n\t\t\t\tinclude_once 'components/service-detail.php';\n\t\t\t?>")
    p.write_text(s,encoding='utf8');target=(root/'components'/old).resolve();assert target.is_relative_to(root/'components');target.unlink()
# Move the admin's presentation out of its processing service into a reusable component.
p=root/'services/admin.php';s=p.read_text(encoding='utf8');logic=s[:s.index('?><!doctype')]
body=re.search(r'<main class="admin-wrap">([\s\S]+)</main>',s).group(1)
p.write_text(logic,encoding='utf8');(root/'components/admin-panel.php').write_text(body,encoding='utf8')
for name,title in [('acceso','Acceso de administración'),('admin-blog','Administración del blog')]:
    text='''<?php
    $pageTitle = '%s | EurodroneX';
    $pageDescription = 'Acceso privado a la administración editorial de EurodroneX.';
    $pageKeywords = 'EurodroneX';
    $pageCanonical = '/%s';
    $pageRobots = 'noindex, nofollow';
    $pageType = 'WebPage';

    require_once 'services/site.php';
    $path = $pageCanonical;
    include_once 'services/admin.php';
    include_once 'services/page-init.php';
?>
<!doctype html>
<html lang="es">
	<head>
		<?php include_once 'services/common-head.php'; ?>
	</head>
	<body class="min-h-screen flex flex-col bg-background text-foreground antialiased">
		<?php include_once 'components/header.php'; ?>

		<main class="pt-20 flex-1">
			<div class="admin-wrap">
				<?php include_once 'components/admin-panel.php'; ?>
			</div>
		</main>

		<?php include_once 'components/footer.php'; ?>
		<?php include_once 'services/common-scripts.php'; ?>
		<script src="/assets/js/admin.js" defer></script>
	</body>
</html>
'''%(title,name)
    (root/(name+'.php')).write_text(text,encoding='utf8')
# Preserve readable inline expressions after PHP formatting.
for p in (root/'components').glob('*.php'):
    text=p.read_text(encoding='utf8')
    text=re.sub(r'<\?=([\s\S]*?)\?>',lambda m:'<?= '+re.sub(r',\s*\)',')',m.group(1).strip())+' ?>',text)
    p.write_text(text,encoding='utf8')
