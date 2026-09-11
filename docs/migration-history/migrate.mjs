// One-time migration aid. Production uses only PHP, CSS, JS and local assets.
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import * as cheerio from 'cheerio';
const require=createRequire(import.meta.url), root=process.cwd();
const write=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s)};
const groups=['services','sectors','cases','pathologies','videos','blog'];
const pageNames=['Services','ServiceDetail','Engineering','About','Contact','Videos','Cases','CaseDetail','Pathologies','PathologyDetail','Sectors','SectorDetail','Technology','Deliverables'];
const homes=['Hero','ProblemSolution','Manifesto','Pathologies','ServicesPreview','Methodology','Audiences','Credentials','HomeFAQ','HomeContact'];
let entry=`import React from 'react';import {renderToStaticMarkup} from 'react-dom/server';\n`;
for(const n of pageNames)entry+=`import ${n} from '../react/src/pages/${n}.jsx';\n`;
for(const n of homes)entry+=`import Home${n} from '../react/src/components/home/${n}.jsx';\n`;
entry+=`import Footer from '../react/src/components/layout/Footer.jsx';\n`;
for(const n of groups)entry+=`import * as data_${n} from '../react/src/data/${n}.js';\n`;
entry+=`export const data={${groups.map(n=>`${n}:data_${n}`).join(',')}};export const render=(name,slug='')=>{globalThis.routeSlug=slug;return renderToStaticMarkup(React.createElement(({${pageNames.join(',')},${homes.map(n=>'Home'+n).join(',')},Footer})[name]));};`;
write('tools/.entry.jsx',entry);
const shared={'ContactForm':'contact-form','CTASection':'cta','FAQAccordion':'faq'};
await build({entryPoints:['tools/.entry.jsx'],outfile:'tools/.render.cjs',bundle:true,platform:'node',format:'cjs',jsx:'automatic',logLevel:'warning',plugins:[{name:'php-migration',setup(b){
 b.onResolve({filter:/^react-router-dom$/},()=>({path:'router',namespace:'migration'}));
 b.onResolve({filter:/^@\//},a=>{let p=path.join(root,'react/src',a.path.slice(2));if(!fs.existsSync(p))p=['.jsx','.js','.ts'].map(e=>p+e).find(p=>fs.existsSync(p));return {path:p}});
 b.onLoad({filter:/.*/,namespace:'migration'},()=>({contents:`import React from 'react';export const Link=({to,children,...props})=>React.createElement('a',{...props,href:to},children);export const NavLink=Link;export const useParams=()=>({slug:globalThis.routeSlug});export const useLocation=()=>({pathname:'/'});export const Navigate=()=>null;`,loader:'jsx',resolveDir:root}));
 b.onLoad({filter:/[\\/]components[\\/](ContactForm|CTASection|FAQAccordion)\.jsx$/},a=>({contents:`import React from 'react';export default function Marker(props){return <php-component name="${shared[path.basename(a.path,'.jsx')]}" payload={Buffer.from(JSON.stringify(props)).toString('base64')}/>}`,loader:'jsx',resolveDir:root}));
 b.onLoad({filter:/[\\/]ui[\\/]image\.jsx$/},()=>({contents:`import React from 'react';export function Image({src,alt='',className='',style,loading='lazy',fittingType,aspectRatio,...props}){return <img src={src} alt={alt} className={'object-cover '+className} style={style} loading={loading} decoding="async"/>}`,loader:'jsx',resolveDir:root}));
 b.onLoad({filter:/VideoPlayerDialog\.jsx$/},()=>({contents:'export default function Dialog(){return null}',loader:'jsx'}));
 b.onLoad({filter:/\.(jsx|js)$/},a=>{if(!a.path.includes(path.join('react','src')))return;let s=fs.readFileSync(a.path,'utf8');
 s=s.replace(/onClick=\{\(\) => setFilter\(cat\)\}/g,'data-filter={cat}');
 s=s.replace('onClick={() => onPlay(video)}','data-video={video.youtubeId} data-category={video.category}');
 if(a.path.endsWith('PathologyCard.jsx'))s=s.replace('to={`/patologias/${item.slug}`}','to={`/patologias/${item.slug}`} data-category={item.category}');
 return {contents:s,loader:a.path.endsWith('.jsx')?'jsx':'js'};
 });
}}]});
const rendered=require('./.render.cjs');
for(const [name,mod] of Object.entries(rendered.data)){const vals=Object.fromEntries(Object.entries(mod).filter(([,v])=>typeof v!=='function'));write(`content/${name}.json`,JSON.stringify(vals,null,2)+'\n')}
function phpString(s){return "'"+s.replaceAll('\\','\\\\').replaceAll("'","\\'")+"'"}
function phpValue(v){if(v==null)return 'null';if(typeof v==='string')return phpString(v);if(typeof v==='boolean')return v?'true':'false';if(typeof v==='number')return String(v);if(Array.isArray(v))return '['+v.map(phpValue).join(', ')+']';return '['+Object.entries(v).map(([k,v])=>phpString(k)+' => '+phpValue(v)).join(', ')+']'}
function clean(html){html=html.replaceAll('href="/about"','href="/sobre-eurodronex"');html=html.replace(/<php-component name="([^"]+)" payload="([^"]+)"><\/php-component>/g,(_,n,p)=>`<?php component('${n}', ${phpValue(JSON.parse(Buffer.from(p,'base64').toString()))}); ?>`);return html.replace(/></g,'>\n<')+'\n'}
const catalog={};
const routes={Services:'/servicios',Engineering:'/ingenieria',About:'/sobre-eurodronex',Contact:'/contacto',Videos:'/videos',Cases:'/casos-de-estudio',Pathologies:'/patologias',Sectors:'/sectores',Technology:'/tecnologia',Deliverables:'/entregables'};
const descriptions={ '/servicios':'Inspección técnica de edificios, termografía, fotogrametría, diagnóstico de fachadas y seguimiento de obra con drones en Madrid. Solicite una evaluación.', '/ingenieria':'Ingeniería y arquitectura aplicadas a la inspección de edificios. Diagnóstico, documentación e informes técnicos en Madrid y provincias limítrofes.', '/sobre-eurodronex':'Conozca EurodroneX: ingeniería técnica especializada en inspección y diagnóstico de edificios mediante tecnología aérea. No somos operadores. Somos técnicos.', '/contacto':'Solicite una evaluación técnica de su edificio. Contacte con EurodroneX en el 611 623 480 o contacto@eurodronex.com. Madrid y provincias limítrofes.'};
function save(route,comp,slug=''){const raw=rendered.render(comp,slug),$=cheerio.load(raw),h1=$('h1').first().text().trim(),first=$('h1').first().parent().find('p').first().text().trim();let fname=route.slice(1).replaceAll('/','--')||'inicio';write('pages/'+fname+'.php',clean(raw));catalog[route]={file:fname,title:h1+' | EurodroneX',description:descriptions[route]||first.slice(0,157),heading:h1,image:$('img').first().attr('src')||'',noindex:/^\/(casos-de-estudio|patologias|videos)(\/|$)/.test(route),type:comp,slug};}
for(const [comp,route]of Object.entries(routes))save(route,comp);
for(const [g,comp,prefix]of [['services','ServiceDetail','servicios'],['sectors','SectorDetail','sectores'],['cases','CaseDetail','casos-de-estudio'],['pathologies','PathologyDetail','patologias']])for(const item of rendered.data[g][g])save('/'+prefix+'/'+item.slug,comp,item.slug);
for(const name of homes)write('components/home/'+name.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase()+'.php',clean(rendered.render('Home'+name)));
write('pages/inicio.php',homes.map(n=>`<?php require __DIR__ . '/../components/home/${n.replace(/([a-z])([A-Z])/g,'$1-$2').toLowerCase()}.php'; ?>`).join('\n')+'\n');
catalog['/']={file:'inicio',title:'Inspección técnica de edificios con drones en Madrid | EurodroneX',description:'Ingeniería técnica para inspeccionar fachadas y cubiertas con drones en Madrid. Termografía, fotogrametría e informes. Solicite una evaluación de su edificio.',image:rendered.data.services.services[0].image,noindex:false,type:'Home'};
write('components/footer.php',clean(rendered.render('Footer')).replace(/© \d{4}/,'© <?= date("Y") ?>').replace('</footer>',`<div class="section-pad pb-8 flex flex-wrap gap-5 text-sm"><a href="/politica-de-privacidad">Política de privacidad</a><a href="/aviso-legal">Aviso legal</a><a href="/politica-de-cookies">Política de cookies</a><button type="button" data-cookie-settings>Preferencias de cookies</button></div></footer>`));
write('content/routes.json',JSON.stringify(catalog,null,2)+'\n');
// Keep an exact text snapshot of the published legal pages, then clean their WordPress layout.
for(const p of ['aviso-legal','pagina-de-privacidad','politica-de-cookies']){let $=cheerio.load(fs.readFileSync(`docs/sources/${p}.html`,'utf8'));let main=$('main');write(`docs/sources/${p}.txt`,main.text().trim());console.log('LEGAL',p,main.text().trim().slice(0,15000));}
let css=fs.readFileSync('react/src/index.css','utf8').replace(/@import url\([^\n]+\);/,'');write('assets/css/source.css',css);
let cfg=fs.readFileSync('react/tailwind.config.js','utf8').replace("content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}']","content: ['./react/src/**/*.{js,jsx}', './components/**/*.php', './pages/**/*.php', './services/**/*.php', './assets/js/*.js']");write('tailwind.config.cjs',cfg);
console.log('Migrated',Object.keys(catalog).length,'routes;',homes.length,'home components');
