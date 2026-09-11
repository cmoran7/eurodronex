import fs from 'node:fs';
import prettier from 'prettier';
const files=[...fs.readdirSync('components').filter(f=>f.endsWith('.php')).map(f=>'components/'+f), 'services/common-head.php','services/common-scripts.php'];
for(const file of files){
 const original=fs.readFileSync(file,'utf8');const blocks=[];
 const masked=original.replace(/<\?(?:php|=)?[\s\S]*?\?>/g,php=>{const id=blocks.length;blocks.push(php);return 'EDXPHP'+String(id).padStart(5,'0')+'TOKEN';});
 try{
  let formatted=await prettier.format(masked,{parser:'html',useTabs:true,tabWidth:4,printWidth:160,htmlWhitespaceSensitivity:'ignore'});
  formatted=formatted.replace(/EDXPHP(\d{5})TOKEN/g,(match,id,offset)=>{
   let block=blocks[Number(id)];
   if(block.startsWith('<?='))return block.replace(/\s*\n\s*/g,' ');
   const line=formatted.slice(0,offset).split('\n').at(-1);const indent=line.match(/^\s*/)[0];
   return block.split('\n').map((line,i)=>i?indent+line:line).join('\n');
  });
  fs.writeFileSync(file,formatted);
 }catch(error){console.error(file,error.message);process.exitCode=1;}
}
