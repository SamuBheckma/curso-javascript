# 01 · Fundamentos

Leia as duas aulas em ordem. Execute os exemplos na raiz do repositório.

## 01 · Variáveis e tipos

Use `const` quando não houver reatribuição e `let` quando o valor mudar. `const` não torna objetos imutáveis. Strings guardam texto; números permitem cálculos; booleanos representam verdadeiro ou falso. `null` é ausência intencional e `undefined` costuma indicar algo ainda não definido.

```bash
node aulas/01-fundamentos/01-variaveis.js
```

Saída esperada:

```text
Samuel concluiu 3 aulas.
number string
```

**Experimente:** Troque o nome e incremente as aulas em dois. Tente reatribuir `nome` e explique o erro.

## 02 · Conversão e strings

Campos de formulário fornecem texto. `Number` converte a string inteira, mas uma string vazia vira zero: verifique o vazio antes de converter. `Number.isFinite` rejeita `NaN` e infinito. `trim` remove espaços das pontas; não altera a string original.

```bash
node aulas/01-fundamentos/02-conversao.js
```

Saída esperada:

```text
14.5
122
false
```

**Experimente:** Compare `Number('12abc')` com `parseInt('12abc', 10)`. Por que uma conversão parcial pode esconder um erro?

Próximo passo: [exercício 01](../../exercicios/01.md).

[Voltar à trilha](../../README.md).
