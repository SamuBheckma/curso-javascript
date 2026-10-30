import { lerNumero } from '../praticas/formulario.js';
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  try {
    const soma = lerNumero(formulario, 'primeiro') + lerNumero(formulario, 'segundo');
    if (!Number.isFinite(soma)) throw new RangeError('A soma excede o limite numérico.');
    resultado.textContent = `Resultado: ${soma}`;
  } catch (erro) { resultado.textContent = erro.message; }
});
