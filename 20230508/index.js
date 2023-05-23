const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require('socket.io');
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/index.html');
})

cont = 0;
io.on('connection', (socket) => {
    let id = ++cont;
    let name;
    let color;

    let address = socket.conn.remoteAddress;

    console.log(`${id} user connected ` + address);
    socket.emit('get name', "Digite seu nome:");
    socket.on('set name', (msg) => {
        name = msg.msg;
        color = msg.color;
        socket.emit('chat message', { color, msg: `Bem vindo(a) ${name}` });
        socket.broadcast.emit('chat message', { color, msg: `${name} entrou na sala.` });
    })
    socket.on('chat message', (msg) => {
        console.log(`user ${id} message: ${msg.msg}`);
        color = msg.color;
        io.emit('chat message', { color, msg: `${name} diz: ${msg.msg}` });
    });
    socket.on('disconnect', () => {
        console.log(`user ${id} disconnect`);
        if (name) {
            socket.broadcast.emit('chat message', { color, msg: `${name} saiu da sala.` });
        }
    });
})

server.listen(3000, () => {
    console.log('listening on *:3000');
})