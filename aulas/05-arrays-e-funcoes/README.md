# 05 · Arrays e funções

Leia as duas aulas em ordem. Execute os exemplos na raiz do repositório.

## 01 · Coleções e ordenação

Arrays têm índices a partir de zero. `push` adiciona, `includes` procura e `length` informa a quantidade. `sort()` sem comparador ordena como texto: números exigem `(a, b) => a - b`. Copie com `[...valores]` se quiser preservar a ordem original.

```bash
node aulas/05-arrays-e-funcoes/01-arrays.js
```

Saída esperada:

```text
2, 10, 30
true
14
```

**Experimente:** Compare a ordenação com e sem comparador. Decida o que uma média deve retornar para uma lista vazia.

## 02 · Parâmetros, retorno e recursão

Funções recebem parâmetros e devolvem resultados com `return`. Separe cálculo e apresentação para reutilizar e testar a lógica. Na recursão, defina o caso base e garanta que cada chamada se aproxime dele. Aqui o fatorial é limitado a 18 para permanecer nos inteiros seguros de `Number`.

```bash
node aulas/05-arrays-e-funcoes/02-funcoes.js
```

Saída esperada:

```text
1
120
```

**Experimente:** Reescreva o fatorial com `for`. Explique por que aceitar números negativos quebraria o caso base.

Próximo passo: [exercício 05](../../exercicios/05.md).

[Voltar à trilha](../../README.md).
