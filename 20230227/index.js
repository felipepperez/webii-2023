import http from 'http';
import { fileURLToPath } from 'url';
import fs from 'fs';

import path from 'path';

import formidable from 'formidable';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    const reqUrl = new URL('http://localhost:3000' + req.url);

    if (reqUrl.pathname == "/index") {
        res.writeHead(200);
        res.end(fs.readFileSync(__dirname + '/index.html'));
    } else if (reqUrl.pathname == "/favicon.ico") {
        res.writeHead(200);
        res.end(fs.readFileSync(__dirname + '/favicon.ico'));
    } else if (reqUrl.pathname == "/login") {
        const form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (fields.login == "felipe" && fields.password == "felipe") {
                res.writeHead(200);
                res.end(fs.readFileSync(__dirname + '/logado.html'));
            } else {
                res.writeHead(200);
                res.end(fs.readFileSync(__dirname + '/index.html'));
            }
        })
    } else {
        res.writeHead(404);
        res.end(fs.readFileSync(__dirname + '/404.html'));
    }
});

server.listen(3000);