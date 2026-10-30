export function apresentar(nome, aulas) {
  if (typeof nome !== 'string' || nome.trim() === '') throw new TypeError('Informe um nome.');
  if (!Number.isSafeInteger(aulas) || aulas < 0) throw new RangeError('Quantidade inválida.');
  return `${nome.trim()} concluiu ${aulas} aulas.`;
}
