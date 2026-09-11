import fs from 'node:fs';import * as cheerio from 'cheerio';
import http from 'node:http';
const fetch=(url,opts={})=>new Promise((resolve,reject)=>{http.get(url,{headers:{Connection:'close'}},r=>{let chunks=[];r.on('data',b=>chunks.push(b));r.on('end',()=>{if(opts.redirect!=='manual' && [301,302,303].includes(r.statusCode)){resolve(fetch(new URL(r.headers.location,url).href));return;}resolve({status:r.statusCode,text:async()=>Buffer.concat(chunks).toString(),headers:{get:n=>r.headers[n.toLowerCase()]}})})}).on('error',reject)});
const base=process.argv[2]||'http://127.0.0.1:8093';const catalog=JSON.parse(fs.readFileSync('docs/routes.json'));const errors=[],pages=[],assets=new Set(),links=new Set();
for(const route of Object.keys(catalog)){
 const r=await fetch(base+route);const html=await r.text();const $=cheerio.load(html);
 if(r.status!==200)errors.push([route,'status',r.status]);
 if($('h1').length!==1)errors.push([route,'h1',$('h1').length]);
 if(!$('title').text()||!$('meta[name=description]').attr('content'))errors.push([route,'metadata']);
 if($('link[rel=canonical]').attr('href')!=='https://eurodronex.com'+route)errors.push([route,'canonical']);
 if(/Warning:|Fatal error:|Parse error:|php-component/.test(html))errors.push([route,'PHP error']);
 $('script[type="application/ld+json"]').each((_,e)=>{try{JSON.parse($(e).text())}catch{errors.push([route,'JSON-LD'])}});
 $('img').each((_,e)=>{const src=$(e).attr('src');if(!src?.startsWith('/assets/'))errors.push([route,'external/missing image',src]);if(src)assets.add(src);if(!$(e).attr('alt'))errors.push([route,'image alt',src]);for(const part of ($(e).attr('srcset')||'').split(',')){const p=part.trim().split(' ')[0];if(p)assets.add(p)}});
 $('link[rel=stylesheet],script[src]').each((_,e)=>assets.add($(e).attr('href')||$(e).attr('src')));
 $('a[href]').each((_,e)=>{const to=$(e).attr('href');if(to.startsWith('/')&&!to.startsWith('//'))links.add(to.split('#')[0])});
 pages.push({route,status:r.status,h1:$('h1').text(),title:$('title').text(),robots:$('meta[name=robots]').attr('content'),images:$('img').length,bytes:Buffer.byteLength(html)});
}
for(const a of assets){const r=await fetch(base+a);if(r.status!==200)errors.push([a,'asset',r.status]);}
for(const a of links){const r=await fetch(base+a);if(r.status!==200)errors.push([a,'link',r.status]);}
for(const a of ['/no-existe','/react/src/App.jsx','/services/config.local.php','/services/data/blog.json','/router.php','/sitemap.xml.lock','/var/posts.json','/tools/migrate.mjs','/node_modules/react/package.json']){const r=await fetch(base+a);if(![403,404].includes(r.status))errors.push([a,'private/missing route exposed',r.status]);}
const xml=await (await fetch(base+'/sitemap.xml')).text();if(xml!==fs.readFileSync('sitemap.xml','utf8'))errors.push(['sitemap.xml','not static file']);const sx=cheerio.load(xml,{xmlMode:true});const sitemap=sx('loc').map((_,e)=>sx(e).text()).get();
for(const [route,p]of Object.entries(catalog)){const present=sitemap.includes('https://eurodronex.com'+route);if(present===!!p.noindex)errors.push([route,'sitemap indexability']);}
for(const f of ['page-sitemap.xml','post-sitemap.xml','category-sitemap.xml']){const $=cheerio.load(fs.readFileSync('docs/sources/'+f,'utf8'),{xmlMode:true});for(const old of $('url > loc').map((_,e)=>$(e).text()).get()){const pathname=new URL(old).pathname;const r=await fetch(base+pathname,{redirect:'manual'});if(pathname!=='/'&&r.status!==301)errors.push([pathname,'legacy expected 301',r.status]);if(r.status===301){const target=r.headers.get('location');if(!catalog[target])errors.push([pathname,'redirect chain or unknown target',target]);}}}
const summary={pages:pages.length,assets:assets.size,internalLinks:links.size,sitemap:sitemap.length,errors,details:pages};fs.mkdirSync('docs/qa',{recursive:true});fs.writeFileSync('docs/qa/http-checks.json',JSON.stringify(summary,null,2));console.log(JSON.stringify({...summary,details:undefined},null,2));if(errors.length)process.exitCode=1;
