# Práticas de navegador

Inicie `node scripts/servir.mjs` na raiz e abra `http://127.0.0.1:8080`.
Cada pasta contém HTML sem eventos inline e um módulo `app.js`.
O CSS e a lógica de cálculo ficam separados da apresentação.

1. [Hora do dia](hora-do-dia/index.html): leia as condições e o evento `submit`.
2. [Contador](contador/index.html): acompanhe a validação e o laço em `logica.js`.
3. [Tabuada](tabuada/index.html): veja a criação e substituição de elementos.
4. [Analisador](analisador/index.html): acompanhe o estado da lista, inclusão e reset.

`textContent` evita interpretar os dados como HTML. `role="status"` anuncia
resultados sem retirar o foco. Os formulários usam validação HTML e as funções
puras repetem as regras importantes para chamadas feitas fora do navegador.

No modo sem JavaScript, um aviso explica por que as ferramentas estão indisponíveis.
O estado não é salvo entre visitas. Veja o [roteiro manual](../docs/REVISAO.md).
