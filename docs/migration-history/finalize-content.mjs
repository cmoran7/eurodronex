import fs from 'node:fs';import path from 'node:path';
const services=JSON.parse(fs.readFileSync('content/services.json'));
services.services.find(s=>s.slug==='diagnostico-fachadas').shortTitle='Diagnóstico de fachadas';
services.services.push({slug:'inspeccion-precompra',id:'07',code:'SRV-07',title:'Inspección técnica para inmobiliarias',shortTitle:'Inspección precompra',tagline:'Evaluación técnica antes de comprar o vender un inmueble',summary:'Inspecciones técnicas previas a compraventa y diagnóstico de edificios para inmobiliarias y promotoras. Con drones y criterio técnico.',image:services.services[3].image});
fs.writeFileSync('content/services.json',JSON.stringify(services,null,2)+'\n');
const routes=JSON.parse(fs.readFileSync('content/routes.json'));
routes['/servicios/inspeccion-precompra']={file:'servicios--inspeccion-precompra',title:'Inspección precompra de edificios e inmuebles | EurodroneX',description:'Inspecciones técnicas previas a compraventa y diagnóstico de edificios para inmobiliarias y promotoras. Con drones y criterio técnico.',heading:'Inspección técnica para inmobiliarias',type:'ServiceDetail',slug:'inspeccion-precompra',image:services.services[3].image,noindex:false};
for(const route of Object.values(routes))if(route.description.length>165){const text=route.description.slice(0,160);route.description=text.slice(0,text.lastIndexOf(' '))+'.'}
fs.writeFileSync('content/routes.json',JSON.stringify(routes,null,2)+'\n');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
for(const f of [...walk('pages'),...walk('components')]){let s=fs.readFileSync(f,'utf8');s=s.replaceAll('Inspeción','Inspección').replaceAll('Inspección pre compra','Diagnóstico de fachadas');s=s.replace(/(<span[^>]*>Servicios \/ )06/g,'$107').replaceAll('Servicios / 06','Servicios / 07');if(f.endsWith('hero.php'))s=s.replace('loading="lazy"','loading="eager" fetchpriority="high"');fs.writeFileSync(f,s);}
// Keep the seventh service discoverable from the shared footer and service listing.
let f=fs.readFileSync('components/footer.php','utf8');f=f.replace('</ul>','<li><a href="/servicios/inspeccion-precompra" class="text-sm text-background/75 hover:text-primary">Inspección precompra</a></li></ul>');fs.writeFileSync('components/footer.php',f);
f=fs.readFileSync('pages/servicios.php','utf8');f+=`\n<section class="section-pad py-16 border-t border-border"><h2 class="heading-display text-2xl">Inspección precompra</h2><p class="mt-4 text-muted-foreground">Evaluación técnica para operaciones de compra y venta de inmuebles.</p><a class="button-primary mt-6" href="/servicios/inspeccion-precompra">Ver servicio de inspección precompra</a></section>\n`;fs.writeFileSync('pages/servicios.php',f);
