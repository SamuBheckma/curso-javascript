let num = [8,1,7,4,2,9]

/* tradicional
for(pos=0;pos<num.length;pos++) {
    console.log(valores[pos])
}
*/

// moderno
for(let pos in num) {
    console.log(num[pos])
}

// para cada posição dentro da variável composta
// (for)      (pos)   (in)      (array => num)