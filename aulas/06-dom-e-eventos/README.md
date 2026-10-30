# 06 · DOM e eventos

Leia as duas aulas em ordem. Execute os exemplos na raiz do repositório.

## 01 · Selecionar e atualizar elementos

O DOM representa a página como uma árvore de objetos. `querySelector` seleciona um elemento; `textContent` escreve texto sem interpretá-lo como HTML. Carregue o script com `type="module"` para executá-lo depois da análise do documento. Abra a prática Hora do dia pelo servidor local.

Leia também [`praticas/README.md`](../../praticas/README.md) e abra os arquivos `index.html` e `app.js` da prática indicada.

```js
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.textContent = 'Formulário recebido.';
});
```

Esse trecho precisa de uma página com esses elementos; não execute no Node.js.

**Experimente:** Na prática Hora do dia, localize o seletor do resultado e troque apenas o texto de apresentação.

## 02 · Formulários e eventos

Use `addEventListener` e o evento `submit` para atender clique e Enter. `preventDefault` impede a navegação padrão. Use `label`, limites nos campos e uma região `aria-live` para comunicar o resultado. A validação HTML ajuda; a função de cálculo também deve rejeitar entradas inválidas.

Leia também [`praticas/README.md`](../../praticas/README.md) e abra os arquivos `index.html` e `app.js` da prática indicada.

```js
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  resultado.textContent = 'Formulário recebido.';
});
```

Esse trecho precisa de uma página com esses elementos; não execute no Node.js.

**Experimente:** Na prática Contador, localize a validação do passo. Teste o teclado, entradas vazias e o limite de 1.000 resultados.

Próximo passo: [exercício 06](../../exercicios/06.md).

[Voltar à trilha](../../README.md).
