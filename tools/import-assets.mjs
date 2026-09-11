import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import * as cheerio from 'cheerio';
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=['pages','components','content'].flatMap(walk).filter(p=>/\.(php|json)$/.test(p));
const urls=new Set();
for(const file of files){let s=fs.readFileSync(file,'utf8');for(const m of s.matchAll(/https:\/\/[^\s"'<>]+\.(?:jpg|jpeg|png|webp)(?:\?[^\s"'<>]*)?/g))urls.add(m[0].replaceAll('&amp;','&'));}
const map=fs.existsSync('docs/assets-manifest.json')?JSON.parse(fs.readFileSync('docs/assets-manifest.json')):{};
const queue=[...urls].filter(u=>!map[u]);const failures=[];
await Promise.all(Array.from({length:4},async()=>{while(queue.length){const u=queue.shift();try{const r=await fetch(u,{signal:AbortSignal.timeout(40000)});if(!r.ok)throw Error(r.status);const ext=path.extname(new URL(u).pathname)||'.jpg';const target='/assets/img/'+crypto.createHash('sha256').update(u).digest('hex').slice(0,16)+ext;fs.writeFileSync('.'+target,Buffer.from(await r.arrayBuffer()));map[u]=target;}catch(e){failures.push([u,String(e)])}}}));
fs.writeFileSync('docs/assets-manifest.json',JSON.stringify(map,null,2));
for(const file of files){let s=fs.readFileSync(file,'utf8');for(const [u,p]of Object.entries(map))s=s.replaceAll(u,p).replaceAll(u.replaceAll('&','&amp;'),p);fs.writeFileSync(file,s)}
for(const [source,slug,title]of [['aviso-legal','aviso-legal','Aviso legal'],['pagina-de-privacidad','politica-de-privacidad','Política de privacidad'],['politica-de-cookies','politica-de-cookies','Política de cookies']]){
 const $=cheerio.load(fs.readFileSync(`docs/sources/${source}.html`,'utf8'));const el=$('main .elementor-widget-text-editor').first();el.find('script,style').remove();el.find('*').each((_,e)=>{for(const a of Object.keys(e.attribs||{}))if(!['href','title'].includes(a))$(e).removeAttr(a)});
 let html=el.html().replace(/<p>\s*(?:&nbsp;| |<br>)*\s*<\/p>/g,'').replace(/></g,'>\n<');
 if(slug==='politica-de-privacidad')html+='\n<p>Correo de contacto para consultas y ejercicio de derechos: <a href="mailto:contacto@eurodronex.com">contacto@eurodronex.com</a>.</p>';
 if(slug==='politica-de-cookies')html+='\n<h2>Funcionamiento de esta versión del sitio</h2><p>Esta versión no incorpora herramientas de analítica ni publicidad. Utiliza una cookie técnica de sesión (edx_session) para proteger los formularios y gestionar el acceso al administrador. Se elimina al finalizar la sesión del navegador. La preferencia de contenido externo se guarda en el almacenamiento local del navegador (edx_consent) durante seis meses.</p><p>Los vídeos de YouTube se cargan únicamente si usted autoriza el contenido externo. Puede rechazarlo y continuar usando el sitio, o cambiar su elección desde «Preferencias de cookies» en el pie de página. Al activar un vídeo, su navegador se conecta con YouTube; consulte su <a href="https://policies.google.com/privacy" rel="noopener noreferrer">política de privacidad</a>.</p><button type="button" class="button-secondary" data-cookie-settings>Modificar preferencias</button>';
 fs.writeFileSync(`pages/${slug}.php`,`<?php component('page-heading', ['eyebrow'=>'Información legal','title'=>'${title}']); ?>\n<section class="section-pad py-16"><div class="legal-copy max-w-4xl">\n${html}\n</div></section>\n`);
}
for(const p of ['page-sitemap.xml','post-sitemap.xml','category-sitemap.xml']){const r=await fetch('https://eurodronex.com/'+p);if(r.ok)fs.writeFileSync('docs/sources/'+p,await r.text())}
fs.mkdirSync('assets/fonts',{recursive:true});
const fontCss=await (await fetch('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Archivo:wght@500;600;700;800&display=swap',{headers:{'User-Agent':'Mozilla/5.0'}})).text();
let localCss=fontCss;for(const u of new Set([...fontCss.matchAll(/url\((https:[^)]+)\)/g)].map(m=>m[1]))){const f='/assets/fonts/'+crypto.createHash('sha256').update(u).digest('hex').slice(0,14)+path.extname(new URL(u).pathname);const r=await fetch(u);if(!r.ok)throw Error('Font '+r.status);fs.writeFileSync('.'+f,Buffer.from(await r.arrayBuffer()));localCss=localCss.replaceAll(u,f)}fs.writeFileSync('assets/css/fonts.css',localCss);
console.log(JSON.stringify({downloaded:Object.keys(map).length,failures},null,2));
