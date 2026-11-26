import {readFileSync} from 'node:fs';
const projetos=JSON.parse(readFileSync(new URL('../src/catalogo.json',import.meta.url),'utf8'));
const ids=new Set(projetos.map(p=>p.id));
const nacional=projetos.filter(p=>p.modalidade==='Mostra Nacional').length;
const extensao=projetos.filter(p=>p.modalidade==='Mostra de Extensão').length;
if(projetos.length!==46||nacional!==24||extensao!==22||ids.size!==46){console.error({total:projetos.length,nacional,extensao,unicos:ids.size});process.exit(1);}
console.log('Catálogo validado: 46 projetos, 24 nacionais, 22 extensão, IDs únicos.');