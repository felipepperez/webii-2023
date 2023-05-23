const WebSocket = require('ws');
var moment = require('moment');

const client = new WebSocket('ws://localhost:8080');

let id;
client.on('message', function message(data, isBinary) {
    const message = isBinary ? data : data.toString();
    if (!id) {
        id = message;


        timeout();
    }
})

function timeout() {
    const random = Math.floor(Math.random() * 10) * 1000 + 3000;
    setTimeout(() => {
        client.send('cliente ' + id + ' - ' + moment().format('DD/MM/YYYY - hh:mm:ss') + " - " + random);
        timeout();
    }, random);
}