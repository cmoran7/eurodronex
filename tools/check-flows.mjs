import fs from 'node:fs';import path from 'node:path';import http from 'node:http';import {spawn,spawnSync} from 'node:child_process';import * as cheerio from 'cheerio';
const root=process.cwd(),php='C:/xampp/php/php.exe',port=8094;fs.mkdirSync('var',{recursive:true});const storage=fs.mkdtempSync(path.join(root,'var','qa-'));
const sitemap=path.join(storage,'sitemap.xml');fs.copyFileSync('sitemap.xml',sitemap);
const password='Temporary-local-QA-only-8462';const hash=spawnSync(php,['-r',"echo password_hash(stream_get_contents(STDIN),PASSWORD_DEFAULT);"],{input:password,encoding:'utf8'}).stdout;
const server=spawn(php,['-S',`127.0.0.1:${port}`,'router.php'],{cwd:root,env:{...process.env,EDX_ENV:'production',EDX_SITEMAP_PATH:sitemap,EDX_STORAGE_PATH:storage,EDX_ADMIN_EMAIL:'qa@example.test',EDX_ADMIN_PASSWORD_HASH:hash,EDX_MAIL_TRANSPORT:'disabled'},windowsHide:true,stdio:['ignore','ignore','pipe']});
let logs='';server.stderr.on('data',d=>logs+=d);let cookies='';const results=[];
const request=(route,body=null)=>new Promise((resolve,reject)=>{const payload=body?new URLSearchParams(body).toString():'';const q=http.request({host:'127.0.0.1',port,path:route,method:body?'POST':'GET',headers:{Cookie:cookies,Connection:'close',...(body?{'Content-Type':'application/x-www-form-urlencoded','Content-Length':Buffer.byteLength(payload)}:{})}},r=>{let chunks=[];if(r.headers['set-cookie'])cookies=r.headers['set-cookie'].map(c=>c.split(';')[0]).join('; ');r.on('data',d=>chunks.push(d));r.on('end',()=>resolve({status:r.statusCode,headers:r.headers,text:Buffer.concat(chunks).toString()}))});q.on('error',reject);q.end(payload)});
const check=(name,ok)=>{results.push({name,ok});if(!ok)throw Error(name)};const token=r=>cheerio.load(r.text)('input[name=csrf]').first().val();
try{
 for(let i=0;i<30;i++){try{await request('/');break}catch{await new Promise(r=>setTimeout(r,100))}}
 let r=await request('/');check('Production indexable',!r.text.includes('content="noindex, follow"'));
 r=await request('/patologias');check('Demo stays noindex in production',r.headers['x-robots-tag']==='noindex, follow');
 r=await request('/admin-blog');check('Admin requires login',r.status===303&&r.headers.location==='/acceso');
 r=await request('/acceso');const csrf=token(r);check('Login CSRF token',typeof csrf==='string'&&csrf.length===64);
 r=await request('/acceso',{action:'login',csrf:'invalid',email:'qa@example.test',password});check('Reject invalid CSRF',r.status===403);
 r=await request('/acceso',{action:'login',csrf,email:'qa@example.test',password:'wrong'});check('Reject invalid credentials',r.status===401);
 const oldCookie=cookies;r=await request('/acceso',{action:'login',csrf,email:'qa@example.test',password});check('Admin login and session rotation',r.status===303&&r.headers.location==='/admin-blog'&&cookies!==oldCookie);
 r=await request('/admin-blog?editar=nuevo');const $=cheerio.load(r.text);const fields={action:'save',csrf:token(r),original:'',version:$('input[name=version]').val(),slug:'prueba-migracion-local',title:'Artículo de prueba local',category:'Inspección',date:'2026-09-11',readTime:'2 min',excerpt:'Contenido temporal utilizado exclusivamente para verificar la administración.',image:$('option[selected]').val(),'section_h[]':'Prueba','section_p[]':'Contenido de prueba.'};
 r=await request('/admin-blog?editar=nuevo',fields);check('Create draft',r.status===303);
 r=await request('/prueba-migracion-local');check('Draft not public',r.status===404);
 r=await request('/admin-blog?editar=prueba-migracion-local');fields.original=fields.slug;fields.version=cheerio.load(r.text)('input[name=version]').val();fields.published='1';
 r=await request('/admin-blog?editar=prueba-migracion-local',fields);check('Publish article',r.status===303);
 r=await request('/prueba-migracion-local');check('Published article renders server-side',r.status===200&&r.text.includes('Contenido de prueba.'));
 r={text:fs.readFileSync(sitemap,'utf8')};check('Sitemap updates after publish',r.text.includes('/prueba-migracion-local'));
 r=await request('/admin-blog?editar=prueba-migracion-local',fields);check('Reject stale edit',r.status===422);
 r=await request('/admin-blog?editar=prueba-migracion-local');fields.version=cheerio.load(r.text)('input[name=version]').val();delete fields.published;
 r=await request('/admin-blog?editar=prueba-migracion-local',fields);check('Unpublish to draft',r.status===303);
 r={text:fs.readFileSync(sitemap,'utf8')};check('Unpublished removed from sitemap',!r.text.includes('/prueba-migracion-local'));
 r=await request('/admin-blog',{action:'logout',csrf:fields.csrf});check('Logout',r.status===303);
 r=await request('/admin-blog');check('Session no longer authorized',r.status===303);
 r=await request('/contacto');const contactCsrf=token(r);
 r=await request('/services/contact_process.php',{csrf:contactCsrf,nombre:'Prueba',email:'bad',privacidad:'1'});check('Invalid form redirects without sending',r.status===303);
 // JSON requests verify status codes and never enable a mail transport.
 const jsonPost=body=>new Promise((resolve,reject)=>{const payload=new URLSearchParams(body).toString();const q=http.request({host:'127.0.0.1',port,path:'/services/contact_process.php',method:'POST',headers:{Cookie:cookies,Accept:'application/json','Content-Type':'application/x-www-form-urlencoded','Content-Length':Buffer.byteLength(payload)}},r=>{let s='';r.on('data',d=>s+=d);r.on('end',()=>resolve({status:r.statusCode,data:JSON.parse(s)}))});q.on('error',reject);q.end(payload)});
 let jr=await jsonPost({csrf:'bad'});check('Form rejects forged CSRF',jr.status===403&&!jr.data.ok);
 jr=await jsonPost({csrf:contactCsrf,nombre:'Prueba',email:'qa@example.test'});check('Privacy acceptance required',jr.status===422&&!jr.data.ok);
 jr=await jsonPost({csrf:contactCsrf,nombre:'Prueba',email:'qa@example.test',privacidad:'1'});check('Disabled mail returns real failure, no fake success',jr.status===503&&!jr.data.ok);
 check('No PHP runtime errors',!logs.match(/PHP (Warning|Fatal|Parse|Notice)/));
 console.log(JSON.stringify({passed:results.length,results},null,2));
}catch(e){console.error(e.message);process.exitCode=1;}finally{
 server.kill();fs.mkdirSync('docs/qa',{recursive:true});fs.writeFileSync('docs/qa/flows.json',JSON.stringify(results,null,2));
 await new Promise(r=>server.once('exit',r));
 const resolved=fs.realpathSync(storage),allowed=fs.realpathSync(path.join(root,'var'))+path.sep;
 if(resolved.startsWith(allowed)&&path.basename(resolved).startsWith('qa-'))fs.rmSync(resolved,{recursive:true,force:true});
}
