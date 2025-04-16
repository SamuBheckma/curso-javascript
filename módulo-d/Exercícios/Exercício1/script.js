function carregar(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/manhã.jpg'
        document.body.style.background = 'lightgreen'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/tarde.jpg'
        document.body.style.background = 'deepskyblue'
    } else {
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#515154'
    }
} 

