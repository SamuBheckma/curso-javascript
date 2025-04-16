// 1

function parimpar(n) {    // parimpar(n) => param. formal
    if (n%2 == 0) {      
        return 'Par!'     // <= ação
    } else {
        return 'Ímpar!'   // <= retorno
    }
}

console.log(parimpar(223))

// parimpar(223) => chamada
//           ^
//           |
//       param. real