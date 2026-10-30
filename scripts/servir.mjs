// Servidor de estudo, restrito ao próprio computador e aos arquivos públicos.
import { createServer } from 'node:http';
import { readFile, realpath } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { extname, resolve, sep } from 'node:path';
const raiz = fileURLToPath(new URL('../', import.meta.url));
const porta = Number(process.argv[2] ?? 8080);
if (!Number.isInteger(porta) || porta < 1024 || porta > 65535) {
  throw new RangeError('Escolha uma porta inteira entre 1024 e 65535.');
}
const tipos = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.md': 'text/plain; charset=utf-8' };
const servidor = createServer(async (pedido, resposta) => {
  if (!['GET', 'HEAD'].includes(pedido.method)) {
    resposta.writeHead(405, { Allow: 'GET, HEAD' }).end();
    return;
  }
  try {
    const caminho = decodeURIComponent(new URL(pedido.url, 'http://localhost').pathname);
    const partes = caminho.split('/');
    if (partes.some((p) => p.startsWith('.'))) throw new Error('Caminho privado');
    const arquivo = await realpath(resolve(raiz, '.' + (caminho.endsWith('/') ? caminho + 'index.html' : caminho)));
    if (!arquivo.startsWith(raiz.endsWith(sep) ? raiz : raiz + sep)) throw new Error('Fora da raiz');
    const tipo = tipos[extname(arquivo)];
    if (!tipo) throw new Error('Formato não servido');
    const conteudo = await readFile(arquivo);
    resposta.writeHead(200, { 'Content-Type': tipo, 'X-Content-Type-Options': 'nosniff', 'Cache-Control': 'no-store' });
    resposta.end(pedido.method === 'HEAD' ? undefined : conteudo);
  } catch {
    resposta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Arquivo não encontrado.');
  }
});
servidor.on('error', (erro) => { console.error(`Não foi possível iniciar o servidor: ${erro.message}`); process.exitCode = 1; });
servidor.listen(porta, '127.0.0.1', () => console.log(`Práticas em http://127.0.0.1:${porta} · Ctrl+C para encerrar`));
