// A string vazia precisa ser rejeitada antes de Number('') produzir zero.
export function lerNumero(formulario, nome) {
  const entrada = formulario.elements.namedItem(nome).value.trim();
  if (entrada === '') throw new RangeError('Preencha todos os campos.');
  const numero = Number(entrada);
  if (!Number.isFinite(numero)) throw new RangeError('Informe um número finito.');
  return numero;
}
