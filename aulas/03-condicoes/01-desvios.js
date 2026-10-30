// Decisões com if e else
function avaliarVelocidade(velocidade) {
  if (!Number.isFinite(velocidade) || velocidade < 0) {
    throw new RangeError('Informe uma velocidade válida.');
  }
  return velocidade > 60 ? 'Acima do limite' : 'Dentro do limite';
}
console.log(avaliarVelocidade(60));
console.log(avaliarVelocidade(61));
