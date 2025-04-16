let fnum = document.getElementById('fnum')
let final = document.getElementById('flist')
let res = document.getElementById('res')
let v = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if(isNumero(fnum.value) && !inLista(fnum.value, v)) {
        v.push(Number(fnum.value))
        let item = document.createElement('option')
        item.text = `Valor ${fnum.value} adicionado.`
        final.appendChild(item)  
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já selecionado.')
    }
    fnum.value = ''
    fnum.focus()
}

function fim() {
    if (v.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        var tot = v.length
        var maior = v[0]
        var menor = v[0]
        var soma = 0
        var media = 0
        for(let pos in v) {
            soma += v[pos]
            if (v[pos] > maior)
                maior = v[pos] > maior
            if (v[pos] < menor)
                menor = v[pos]
        }
    }
    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos fica ${soma}.</p>`
    res.innerHTML += `<p>A média de todos é ${media}.<p/>`
}

/*  meu codigo sem auxilio
}
function add() {
    if (fnum.value.length == 0) {
        alert('Escolha um número!')
    } else {
        let n = Number(fnum.value)
        let item = document.createElement('option')

        v.push(n)

        item.text = `Valor ${n}`
        item.value = `final${n}`
        final.appendChild(item)        
    }
}
*/