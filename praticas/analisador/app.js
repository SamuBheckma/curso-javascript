import { adicionar, analisar } from '../logica.js';
import { lerNumero } from '../formulario.js';
const formulario = document.querySelector('form');
const resultado = document.querySelector('[role="status"]');
const lista = document.querySelector('#numeros');
let valores = [];
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  try {
    const numero = lerNumero(formulario, 'numero');
    valores = adicionar(valores, numero);
    const item = document.createElement('li');
    item.textContent = String(numero);
    lista.append(item);
    resultado.textContent = `${numero} adicionado. A lista tem ${valores.length} número(s).`;
    formulario.reset();
    formulario.elements.numero.focus();
  } catch (erro) { resultado.textContent = erro.message; }
});
document.querySelector('#analisar').addEventListener('click', () => {
  try {
    const dados = analisar(valores);
    resultado.textContent = `Quantidade: ${dados.quantidade}
Menor: ${dados.menor}
Maior: ${dados.maior}
Soma: ${dados.soma}
Média: ${dados.media.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}`;
  } catch (erro) { resultado.textContent = erro.message; }
});
document.querySelector('#limpar').addEventListener('click', () => {
  valores = [];
  lista.replaceChildren();
  formulario.reset();
  resultado.textContent = 'A lista está vazia.';
  formulario.elements.numero.focus();
});
