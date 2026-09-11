import fs from 'node:fs';import crypto from 'node:crypto';
const query='https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=JetBrains+Mono:wght@400..600&family=Archivo:wght@500..800&display=swap';
const css=await(await fetch(query,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'}})).text();
const blocks=[...css.matchAll(/\/\* latin \*\/\s*(@font-face\s*\{[^}]+\})/g)].map(m=>m[1]);
if(blocks.length!==3)throw Error('Expected 3 latin font faces, got '+blocks.length);
let output=blocks.join('\n');let total=0;
for(const match of output.matchAll(/url\((https:[^)]+)\)/g)){const u=match[1],r=await fetch(u);if(!r.ok)throw Error('Font download');const buf=Buffer.from(await r.arrayBuffer());const local='/assets/fonts/'+crypto.createHash('sha256').update(u).digest('hex').slice(0,14)+'.woff2';fs.writeFileSync('.'+local,buf);output=output.replaceAll(u,local);total+=buf.length}
fs.writeFileSync('assets/css/fonts.css',output+'\n');console.log('3 local WOFF2 fonts:',total,'bytes');
