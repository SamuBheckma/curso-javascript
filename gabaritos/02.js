export function aplicarDesconto(preco, percentual) {
  if (!Number.isFinite(preco) || preco < 0 || !Number.isFinite(percentual) || percentual < 0 || percentual > 100) {
    throw new RangeError('Preço ou percentual inválido.');
  }
  return preco * (1 - percentual / 100);
}
