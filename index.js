const botao = document.getElementById('verificar')
function verificando(){
    const nome = document.getElementById('nome').value
    const convidado = document.getElementById('convidado').value
    const msg = document.getElementById('resultado')
    let lista = ['amanda', 'julia', 'debora', 'luiza', 'dorcas']
    if(convidado === 'victor'){
        if(lista.includes(nome)){
            msg.innerHTML = 'Pode entrar!'
        } else {
            msg.innerHTML = 'Infelizmente você não foi convidado!'
        }
    } else {
        msg.innerHTML = 'Infelizmente você não foi convidado!'
    }
}
addEventListener('click',verificando)