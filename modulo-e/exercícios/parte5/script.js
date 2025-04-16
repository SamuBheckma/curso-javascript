function button() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (inicio.value.length == 0  || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Dados incompletos...'
    } else {
        res.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1 como resposta...')
            p = 1
        }

        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} `
              //res.innerHTML += ` ${c} \u{1F603}`
          }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}