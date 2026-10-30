import { tabuada } from '../logica.js';
import { lerNumero } from '../formulario.js';
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
const lista = document.querySelector('#linhas');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  lista.replaceChildren();
  try {
    const numero = lerNumero(formulario, 'numero');
    const linhas = tabuada(numero);
    for (const { fator, produto } of linhas) {
      const item = document.createElement('li');
      item.textContent = `${numero} × ${fator} = ${produto}`;
      lista.append(item);
    }
    resultado.textContent = `Tabuada de ${numero} gerada com dez resultados.`;
  } catch (erro) { resultado.textContent = erro.message; }
});
