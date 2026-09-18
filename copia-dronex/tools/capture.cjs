const fs=require('fs'),path=require('path'),crypto=require('crypto'),https=require('https');const cheerio=require('cheerio');const {chromium}=require('C:/Users/cesar/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve('copia-dronex');const get=url=>new Promise((ok,no)=>https.get(url,r=>{if(r.statusCode>=300&&r.statusCode<400)return ok(get(new URL(r.headers.location,url).href));let a=[];r.on('data',d=>a.push(d));r.on('end',()=>r.statusCode===200?ok(Buffer.concat(a)):no(Error(url+' '+r.statusCode)))}).on('error',no));
(async()=>{
const urls=new Set(['https://eurodronex.com/']);for(const map of ['page-sitemap.xml','post-sitemap.xml']){const $=cheerio.load(await get('https://eurodronex.com/'+map),{xmlMode:true});$('url > loc').each((i,e)=>urls.add($(e).text()));}
const browser=await chromium.launch({channel:'msedge',headless:true});const pages=[];const list=[...urls];fs.mkdirSync(path.join(root,'docs/source'),{recursive:true});
for(let i=0;i<list.length;i++){
 const url=list[i],slug=new URL(url).pathname.replace(/^\/|\/$/g,'')||'index';if(slug.includes('/'))continue;
 const p=await browser.newPage({viewport:{width:1440,height:1000}});await p.route(/google-analytics|googletagmanager|facebook\.com|recaptcha/,r=>r.abort());
 await p.goto(url,{waitUntil:'domcontentloaded',timeout:60000});await p.waitForTimeout(700);
 await p.evaluate(()=>document.querySelectorAll('#cmplz-cookiebanner-container,.qlwapp').forEach(e=>e.remove()));
 for(let y=0;y<await p.evaluate(()=>document.body.scrollHeight);y+=850){await p.evaluate(y=>scrollTo(0,y),y);await p.waitForTimeout(100)}await p.waitForTimeout(300);await p.evaluate(()=>scrollTo(0,0));await p.waitForTimeout(200);
 const html=await p.content();fs.writeFileSync(path.join(root,'docs/source',slug+'.html'),html);
 if(slug==='index'){await p.screenshot({path:path.join(root,'docs/original-top.png')});await p.screenshot({path:path.join(root,'docs/original-full.png'),fullPage:true});await p.setViewportSize({width:390,height:844});await p.waitForTimeout(400);await p.screenshot({path:path.join(root,'docs/original-mobile.png')});}
 pages.push({url,slug});console.log((i+1)+'/'+list.length+' '+slug);await p.close();
}
await browser.close();fs.writeFileSync(path.join(root,'docs/pages.json'),JSON.stringify(pages,null,2));
})().catch(e=>{console.error(e);process.exit(1)});
