const botaoEnviar = document.getElementById('enviar') 
const mensagem = document.getElementById('texto')
const socket = io()
const chat = document.getElementById('mensagens')

botaoEnviar.addEventListener('click', () =>{
    if(mensagem.value !== ''){
        socket.emit('Nova Mensagem', mensagem.value)
        mensagem.value = ""
    }
})

socket.addEventListener('batatafrita', (msg) => {
    const elementoMensagem = document.createElement('li')
    elementoMensagem.textContent = msg
    elementoMensagem.classList.add('mensagem')
    chat.appendChild(elementoMensagem)
})