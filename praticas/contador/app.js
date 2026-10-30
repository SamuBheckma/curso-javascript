import { contar } from '../logica.js';
import { lerNumero } from '../formulario.js';
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  try {
    const numeros = contar(...['inicio', 'fim', 'passo'].map((nome) => lerNumero(formulario, nome)));
    resultado.textContent = numeros.join(' → ') + ' · Fim';
  } catch (erro) { resultado.textContent = erro.message; }
});
