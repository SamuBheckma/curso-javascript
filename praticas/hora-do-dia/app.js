import { saudacao } from '../../gabaritos/03.js';
import { lerNumero } from '../formulario.js';
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
formulario.elements.hora.value = new Date().getHours();
function atualizar() {
  try {
    const hora = lerNumero(formulario, 'hora');
    resultado.textContent = `${saudacao(hora)}! Horário escolhido: ${hora}h.`;
  } catch (erro) { resultado.textContent = erro.message; }
}
formulario.addEventListener('submit', (evento) => { evento.preventDefault(); atualizar(); });
atualizar();
