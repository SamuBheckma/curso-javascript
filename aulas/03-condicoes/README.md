# 03 · Condições

Leia as duas aulas em ordem. Execute os exemplos na raiz do repositório.

## 01 · Decisões com if e else

Uma cadeia `if/else if` executa somente o primeiro ramo verdadeiro. Teste limites e ordene as condições para não tornar um caso inalcançável. Valide a entrada antes de decidir. O exemplo de velocidade é fictício, com limite fixo de 60 km/h.

```bash
node aulas/03-condicoes/01-desvios.js
```

Saída esperada:

```text
Dentro do limite
Acima do limite
```

**Experimente:** Teste 0, 59, 60 e 61. O que acontece com -1?

## 02 · Casos discretos com switch

`switch` é útil para opções fixas. Sem `break` ou `return`, a execução pode seguir para o próximo caso. Reserve `default` para entradas inesperadas. Para intervalos de horários, `if` costuma ser mais claro; use a mesma convenção de limites em todos os exemplos.

```bash
node aulas/03-condicoes/02-switch.js
```

Saída esperada:

```text
Fim de semana
Dia útil
```

**Experimente:** Inclua um exemplo inválido em `try/catch`. Compare 0 e a string `'0'`.

Próximo passo: [exercício 03](../../exercicios/03.md).

[Voltar à trilha](../../README.md).
