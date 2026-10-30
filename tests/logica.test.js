import test from 'node:test';
import assert from 'node:assert/strict';
import { apresentar } from '../gabaritos/01.js';
import { aplicarDesconto } from '../gabaritos/02.js';
import { saudacao } from '../gabaritos/03.js';
import { contar } from '../gabaritos/04.js';
import { analisar } from '../gabaritos/05.js';
import { adicionar, tabuada } from '../praticas/logica.js';
import { lerNumero } from '../praticas/formulario.js';

test('apresentação limpa espaços, aceita zero e recusa entradas inválidas', () => {
  assert.equal(apresentar('  Ana  ', 3), 'Ana concluiu 3 aulas.');
  assert.equal(apresentar('João', 0), 'João concluiu 0 aulas.');
  for (const nome of ['', ' ', null, 2]) assert.throws(() => apresentar(nome, 3), TypeError);
  for (const aulas of [-1, 1.5, NaN, Infinity, '2', 2 ** 53]) assert.throws(() => apresentar('Ana', aulas), RangeError);
});

test('desconto respeita extremos e rejeita valores não numéricos', () => {
  assert.equal(aplicarDesconto(80, 15), 68);
  assert.equal(aplicarDesconto(80, 100), 0);
  assert.equal(aplicarDesconto(0, 0), 0);
  assert.ok(Math.abs(aplicarDesconto(19.9, 10) - 17.91) < 1e-10);
  for (const args of [[-1, 0], [1, -1], [1, 101], [Infinity, 1], [1, NaN], ['80', 15]]) {
    assert.throws(() => aplicarDesconto(...args), RangeError);
  }
});

test('saudação cobre as 24 horas sem lacunas nos limites', () => {
  for (let hora = 0; hora < 24; hora += 1) {
    const esperado = hora <= 11 ? 'Bom dia' : hora <= 17 ? 'Boa tarde' : 'Boa noite';
    assert.equal(saudacao(hora), esperado);
  }
  for (const hora of [-1, 24, 12.5, '12', NaN]) assert.throws(() => saudacao(hora), RangeError);
});

test('contagem nos dois sentidos, passo sem encaixe e intervalo unitário', () => {
  assert.deepEqual(contar(1, 6, 2), [1, 3, 5]);
  assert.deepEqual(contar(5, 1, 2), [5, 3, 1]);
  assert.deepEqual(contar(3, 3, 1), [3]);
  assert.deepEqual(contar(-3, 2, 2), [-3, -1, 1]);
  assert.equal(contar(0, 999, 1).length, 1000);
});

test('contagem recusa laços sem avanço e trabalho excessivo antes da execução', () => {
  for (const args of [[0, 5, 0], [0, 5, -1], [0, 1000, 1], [0.5, 2, 1], [0, Infinity, 1], [0, 2, '1'], [-Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, 1]]) {
    assert.throws(() => contar(...args), RangeError);
  }
});

test('tabuada contém dez produtos corretos para zero e números negativos', () => {
  for (const numero of [0, -3, 5]) {
    const linhas = tabuada(numero);
    assert.equal(linhas.length, 10);
    assert.deepEqual(linhas[0], { fator: 1, produto: numero });
    assert.deepEqual(linhas[9], { fator: 10, produto: numero * 10 });
  }
  for (const n of [1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER]) assert.throws(() => tabuada(n), RangeError);
});

test('analisador corrige o maior valor e não altera o array', () => {
  const entrada = Object.freeze([10, 2, 30]);
  assert.deepEqual(analisar(entrada), { quantidade: 3, menor: 2, maior: 30, soma: 42, media: 14 });
  assert.deepEqual(analisar([1]), { quantidade: 1, menor: 1, maior: 1, soma: 1, media: 1 });
  assert.deepEqual(analisar([100, 1]), { quantidade: 2, menor: 1, maior: 100, soma: 101, media: 50.5 });
  for (const valores of [[], null, [2, 2], [0], [101], [1.5], ['2'], [NaN]]) assert.throws(() => analisar(valores), RangeError);
});

test('adição mantém a lista original e impede duplicatas', () => {
  const original = Object.freeze([1]);
  assert.deepEqual(adicionar(original, 100), [1, 100]);
  assert.deepEqual(original, [1]);
  for (const n of [1, 0, 101, 1.5, '2']) assert.throws(() => adicionar(original, n), RangeError);
});

test('leitura de formulário distingue vazio, zero, negativo e não finito', () => {
  const formulario = (value) => ({ elements: { namedItem: () => ({ value }) } });
  assert.equal(lerNumero(formulario('0'), 'numero'), 0);
  assert.equal(lerNumero(formulario(' -2.5 '), 'numero'), -2.5);
  for (const value of ['', '  ', 'texto', 'Infinity', '1e999']) {
    assert.throws(() => lerNumero(formulario(value), 'numero'), RangeError);
  }
});
