// Funções puras: não acessam document, não exibem mensagens e não alteram entradas.
export function contar(inicio, fim, passo) {
  if (![inicio, fim, passo].every(Number.isSafeInteger) || passo <= 0) {
    throw new RangeError('Informe inteiros seguros e um passo maior que zero.');
  }
  const distancia = Math.abs(fim - inicio);
  const quantidade = Math.floor(distancia / passo) + 1;
  if (!Number.isSafeInteger(distancia) || quantidade > 1000) {
    throw new RangeError('Use um intervalo de até 1.000 resultados.');
  }
  const sentido = inicio <= fim ? 1 : -1;
  const resultado = [];
  // O índice limita o laço, inclusive quando o final não é atingido exatamente.
  for (let i = 0; i < quantidade; i += 1) resultado.push(inicio + sentido * i * passo);
  return resultado;
}

export function tabuada(numero) {
  if (!Number.isSafeInteger(numero) || Math.abs(numero) > Math.floor(Number.MAX_SAFE_INTEGER / 10)) {
    throw new RangeError('Informe um inteiro cujo produto por 10 seja seguro.');
  }
  const linhas = [];
  for (let fator = 1; fator <= 10; fator += 1) {
    linhas.push({ fator, produto: numero * fator });
  }
  return linhas;
}

export function adicionar(valores, numero) {
  // Não altera a lista original; a interface decide quando adotar a nova lista.
  if (!Array.isArray(valores) || !Number.isInteger(numero) || numero < 1 || numero > 100) {
    throw new RangeError('Informe um inteiro entre 1 e 100.');
  }
  if (valores.includes(numero)) throw new RangeError('Esse número já está na lista.');
  const proximaLista = [...valores, numero];
  analisar(proximaLista);
  return proximaLista;
}

export function analisar(valores) {
  if (!Array.isArray(valores) || valores.length === 0 ||
      new Set(valores).size !== valores.length ||
      !valores.every((n) => Number.isInteger(n) && n >= 1 && n <= 100)) {
    throw new RangeError('Use uma lista não vazia de inteiros únicos entre 1 e 100.');
  }
  let menor = valores[0];
  let maior = valores[0];
  let soma = 0;
  for (const valor of valores) {
    soma += valor;
    if (valor < menor) menor = valor;
    if (valor > maior) maior = valor;
  }
  return { quantidade: valores.length, menor, maior, soma, media: soma / valores.length };
}
