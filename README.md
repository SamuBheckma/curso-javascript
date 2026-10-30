# JavaScript · do fundamento à prática

Trilha de estudos de Samuel Bheckma, com aulas curtas, exemplos executáveis,
exercícios e quatro práticas de navegador. O objetivo é voltar ao conteúdo,
praticar e entender as decisões no código.

O repositório começou durante o curso de JavaScript do **Curso em Vídeo**, do
professor Gustavo Guanabara. Esta edição reorganiza e reescreve os estudos;
não é o material oficial do curso nem uma transcrição das aulas.

## Comece aqui

Você precisa de **Node.js 22 ou superior** e de um navegador atualizado.
Não há dependências para instalar. Execute na raiz do repositório:

```bash
node aulas/01-fundamentos/01-variaveis.js
node --test
node scripts/verificar.mjs
node scripts/servir.mjs
```

Com o servidor aberto, visite **http://127.0.0.1:8080** para usar as práticas.
Encerre com `Ctrl+C`. Abra por HTTP: módulos JavaScript podem ser bloqueados
quando um HTML é aberto diretamente por `file://`.
Se a porta estiver ocupada, use `node scripts/servir.mjs 8081` e abra a porta 8081.
Se você tem npm, os atalhos `npm test`, `npm run check` e `npm start` são equivalentes.

## Trilha

| Ordem | Módulo | Você vai praticar |
| --- | --- | --- |
| 01 | [Fundamentos](aulas/01-fundamentos/README.md) | Variáveis, tipos, conversão e strings |
| 02 | [Operadores](aulas/02-operadores/README.md) | Cálculos, comparações e expressões lógicas |
| 03 | [Condições](aulas/03-condicoes/README.md) | `if`, `else`, `switch` e limites |
| 04 | [Repetições](aulas/04-repeticoes/README.md) | `while`, `do...while`, `for` e contagens |
| 05 | [Arrays e funções](aulas/05-arrays-e-funcoes/README.md) | Coleções, funções, estatísticas e recursão |
| 06 | [DOM e eventos](aulas/06-dom-e-eventos/README.md) | Formulários, validação e atualização da página |

Cada módulo tem duas aulas, exemplos de entrada/saída e um roteiro de exercícios.
Siga a ordem na primeira passagem; depois use a tabela como índice de consulta.

## Como estudar

1. Leia a aula e preveja a saída do exemplo antes de executá-lo.
2. Altere uma entrada e explique por que o resultado mudou.
3. Resolva o arquivo correspondente em [`exercicios/`](exercicios/README.md).
4. Confira os casos de aceitação do enunciado, incluindo as entradas inválidas.
5. Compare com [`gabaritos/`](gabaritos/README.md) depois da sua tentativa.
6. Aplique o assunto em uma das práticas de navegador.

Os testes verificam os gabaritos e a lógica das práticas. Eles **não avaliam
automaticamente** seus exercícios: os arquivos de tentativa começam incompletos
por intenção. Veja como executá-los em [exercicios/README.md](exercicios/README.md).

## Práticas de navegador

| Prática | Conceitos | Como conferir |
| --- | --- | --- |
| [Hora do dia](praticas/hora-do-dia/index.html) | Condições e DOM | Experimente 0, 12, 18 e 23 horas |
| [Contador](praticas/contador/index.html) | Laços e validação | Conte nos dois sentidos e rejeite passo zero |
| [Tabuada](praticas/tabuada/index.html) | Repetição e elementos | Gere as linhas de 1 a 10, inclusive para zero |
| [Analisador](praticas/analisador/index.html) | Arrays e funções | Adicione 10, 2 e 30; veja soma 42 e média 14 |

[Abra o catálogo de práticas](index.html) pelo servidor local. São exercícios
educacionais: não usam serviços externos, não salvam dados e não enviam formulários.
O analisador perde a lista quando a página é recarregada.

## Organização e qualidade

- `aulas/`: explicações e exemplos para Node.js; a última etapa leva ao navegador.
- `exercicios/`: enunciados e arquivos para sua tentativa.
- `gabaritos/`: soluções comentadas, separadas das tentativas.
- `praticas/`: interfaces completas e lógica compartilhada testável.
- `tests/`: testes de comportamento com o executor nativo do Node.js.
- `scripts/`: servidor local e verificação dos caminhos internos.
- [Guia de revisão](docs/REVISAO.md): checklist e histórico da reorganização.

A verificação de links e os testes rodam no GitHub Actions. A interface tem roteiro
manual de verificação em [docs/REVISAO.md](docs/REVISAO.md); os testes de Node não
substituem um teste no navegador.

## Créditos e licença

Base de estudo: [Curso em Vídeo — JavaScript](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1).
Referência de consulta: [MDN — JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript).
Código sob a [licença MIT](LICENSE), mantendo o aviso original de autoria.
