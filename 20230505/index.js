const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let count = 0;
server.on('connection', function (ws) {
    console.log("new connection");
    let id = ++count;
    ws.on('message', function message(data, isBinary) {
        const message = isBinary ? data : data.toString();
        console.log("\033[0;" + (30 + id) + "m" + message + "\033[0m");
        // Continue as before.
    });

    ws.send(id);
});