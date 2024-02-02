const http = require('http')
const express = require('express')
const app = express()

const ServidorHttp = http.createServer(app)
const io = require('socket.io')(ServidorHttp)

io.addListener('connection', (socket) => {
    console.log('um usuário logou')
    socket.addListener('Nova Mensagem', (msg)=>{
        io.emit('Nova Mensagem', msg)
    })
})



app.use(express.static('public'))
ServidorHttp.listen(666, '192.168.1.7')