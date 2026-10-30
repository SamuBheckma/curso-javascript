// Casos discretos com switch
function tipoDeDia(dia) {
  switch (dia) {
    case 0:
    case 6:
      return 'Fim de semana';
    case 1: case 2: case 3: case 4: case 5:
      return 'Dia útil';
    default:
      throw new RangeError('Use um inteiro de 0 a 6.');
  }
}
console.log(tipoDeDia(0));
console.log(tipoDeDia(3));
