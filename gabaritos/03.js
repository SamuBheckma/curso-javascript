export function saudacao(hora) {
  if (!Number.isInteger(hora) || hora < 0 || hora > 23) throw new RangeError('Hora inválida.');
  if (hora < 12) return 'Bom dia';
  if (hora < 18) return 'Boa tarde';
  return 'Boa noite';
}
