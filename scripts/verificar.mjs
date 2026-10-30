// Confere links locais, recursos HTML e imports relativos sem acessar a rede.
import { readdir, readFile, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const raiz = fileURLToPath(new URL('../', import.meta.url));
let verificados = 0;
let erros = 0;
async function visitar(pasta) {
  for (const item of await readdir(pasta, { withFileTypes: true })) {
    if (item.name.startsWith('.') || item.name === 'node_modules') continue;
    const arquivo = resolve(pasta, item.name);
    if (item.isDirectory()) { await visitar(arquivo); continue; }
    if (!/\.(md|html|js|mjs)$/.test(arquivo)) continue;
    const texto = await readFile(arquivo, 'utf8');
    const padrao = arquivo.endsWith('.md') ? /\]\(([^)]+)\)/g :
      arquivo.endsWith('.html') ? /(?:href|src)="([^"]+)"/g : /(?:from\s+|import\s*)['"](\.[^'"]+)['"]/g;
    for (const correspondencia of texto.matchAll(padrao)) {
      const link = correspondencia[1];
      if (/^(?:https?:|mailto:|#)/.test(link)) continue;
      const destino = resolve(dirname(arquivo), decodeURIComponent(link.split(/[?#]/)[0]));
      try { await stat(destino); verificados += 1; }
      catch { console.error(`${arquivo}: caminho inexistente ${link}`); erros += 1; }
    }
  }
}
await visitar(raiz);
console.log(`${verificados} caminhos verificados; ${erros} erro(s).`);
if (erros) process.exitCode = 1;
