# Revisão e manutenção

## O que mudou

A primeira versão tinha exemplos soltos dos módulos A–F, nomes inconsistentes,
explicações em capturas de tela e exercícios incompletos. A reorganização mantém
essa sequência conceitual e transforma o material em seis módulos com doze aulas.
As imagens antigas foram substituídas por explicações e código pesquisável.

| Conteúdo anterior | Local atual |
| --- | --- |
| Módulo A e aula 6 do B | `aulas/01-fundamentos/` |
| Aula 7 do B | `aulas/02-operadores/` |
| Condições do D | `aulas/03-condicoes/` |
| Repetições do E | `aulas/04-repeticoes/` |
| Arrays e funções do F | `aulas/05-arrays-e-funcoes/` |
| DOM do C | `aulas/06-dom-e-eventos/` |
| Hora, contagem, tabuada e analisador | `praticas/` |

O DOM vem depois das funções para permitir separar cálculo e apresentação.
O exemplo de voto foi substituído por decisões de horário e velocidade fictícia:
a trilha ensina lógica, sem pretender oferecer orientação eleitoral.
O analisador agora devolve o maior valor numérico, rejeita duplicatas e trata lista
vazia. O fatorial contempla zero e rejeita valores fora do intervalo didático.
Contagens têm limite e passo positivo para evitar laços descontrolados.

A revisão substitui os arquivos, mas preserva a licença e o histórico de commits.
É possível consultar a versão inicial em `dfc47e6` com `git show` ou pelo GitHub.

## Antes de enviar uma alteração

```bash
node --test
node scripts/verificar.mjs
```

Os testes cobrem cálculos, limites, entradas inválidas e preservação das listas.
O verificador confere links locais e imports; não valida links externos nem todo
JavaScript embutido em documentação. Nenhum desses comandos testa visualmente o DOM.

## Roteiro manual no navegador

Inicie `node scripts/servir.mjs` e abra `http://127.0.0.1:8080`.

- Percorra os quatro cartões e retorne pelo link “Todas as práticas”.
- Use Tab e Enter nos formulários; observe labels, foco e mensagens de resultado.
- Hora: teste 0, 11, 12, 17, 18 e 23; rejeite -1 e 24.
- Contador: use 1/6/2, 5/1/2 e 3/3/1; tente passo zero e 1.001 resultados.
- Tabuada: teste 0 e -3, confirme dez linhas e substituição ao gerar novamente.
- Analisador: analise vazio, adicione 10, 2 e 30 e tente repetir 2. Confirme maior
  30, menor 2, soma 42 e média 14; limpe e tente analisar novamente.
- Soma do gabarito: teste 0 + 0, -2 + 3 e campos vazios.
- Use uma janela estreita e zoom de 200%; confira leitura, foco e ausência de cortes.
- Recarregue o analisador e confirme que a lista volta vazia.

## Para ampliar a trilha

Adicione um enunciado antes do gabarito, mantenha funções puras fora do DOM,
documente os contratos e cubra os casos de erro relevantes. Objetos, módulos
avançados, persistência, assincronismo e APIs são próximos assuntos possíveis;
não fazem parte desta trilha básica.
