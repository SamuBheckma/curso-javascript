// Coleções e ordenação
const valores = [10, 2, 30];
const ordenados = [...valores].sort((a, b) => a - b);
console.log(ordenados.join(', '));
console.log(valores.includes(2));
let soma = 0;
for (const valor of valores) soma += valor;
console.log(soma / valores.length);
