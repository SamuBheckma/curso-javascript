# 02 · Operadores

Leia as duas aulas em ordem. Execute os exemplos na raiz do repositório.

## 01 · Aritmética e precedência

Use parênteses para explicitar a intenção. `*` e `/` são avaliados antes de `+` e `-`. `%` retorna o resto e `**` calcula potência. Para dinheiro em aplicações reais, prefira unidades inteiras de centavos: números decimais podem ter imprecisão binária.

```bash
node aulas/02-operadores/01-aritmetica.js
```

Saída esperada:

```text
68
14
20
1
```

**Experimente:** Calcule o preço de dois itens após o desconto. Compare `0.1 + 0.2` com `0.3`.

## 02 · Comparações e lógica

Prefira `===` e `!==` para comparar sem coerção implícita. `&&` exige ambas as condições; `||` aceita uma delas; `!` inverte o valor lógico. Esses operadores também podem devolver operandos não booleanos. Os exemplos abaixo usam expressões booleanas.

```bash
node aulas/02-operadores/02-comparacoes.js
```

Saída esperada:

```text
true
false
true
```

**Experimente:** Preveja o resultado para idade 17 e ingresso válido; depois para idade 20 sem ingresso.

Próximo passo: [exercício 02](../../exercicios/02.md).

[Voltar à trilha](../../README.md).
