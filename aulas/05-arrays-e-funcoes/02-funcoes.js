// Parâmetros, retorno e recursão
function fatorial(n) {
  if (!Number.isInteger(n) || n < 0 || n > 18) {
    throw new RangeError('Use um inteiro de 0 a 18.');
  }
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}
console.log(fatorial(0));
console.log(fatorial(5));
