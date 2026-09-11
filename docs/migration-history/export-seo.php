<?php
if(PHP_SAPI!=='cli')exit;
require __DIR__.'/../services/site.php';
ob_start();require __DIR__.'/../services/sitemap.php';$xml=ob_get_clean();file_put_contents(ROOT.'/sitemap.xml',$xml);
file_put_contents(ROOT.'/robots.txt',"User-agent: *\nDisallow: /\n# El servidor PHP genera la version indexable al configurar EDX_ENV=production.\n");
file_put_contents(ROOT.'/docs/routes.json',json_encode(public_routes(),JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES));
echo count(public_routes())." rutas registradas. Sitemap actualizado.\n";
