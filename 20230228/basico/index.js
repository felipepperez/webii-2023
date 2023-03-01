import express from "express";

import { fileURLToPath } from 'url';
import fs from 'fs';

import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const urlencodedParser = express.urlencoded({ extended: false });

const dados = [
    {
        "_id": "63fe8d1ff1e0078a477143c9",
        "age": 32,
        "name": "Livingston Palmer"
    },
    {
        "_id": "63fe8d1f7f1dca14470625c4",
        "age": 25,
        "name": "Lott Mcbride"
    },
    {
        "_id": "63fe8d1ffa2de35e1e4a1ae1",
        "age": 31,
        "name": "Rachel Fields"
    },
    {
        "_id": "63fe8d1fdad498deaf52a6b1",
        "age": 33,
        "name": "Marina Francis"
    },
    {
        "_id": "63fe8d1f1a4a8de6d1ef8e96",
        "age": 29,
        "name": "Bernadine Robinson"
    },
    {
        "_id": "63fe8d1f2ce18ba1facdc874",
        "age": 35,
        "name": "Alissa Kelley"
    },
    {
        "_id": "63fe8d1fe2408b56de91b2b7",
        "age": 29,
        "name": "Mejia Cantrell"
    }
];

const servidor = app.listen(8080, () => {
    const porta = servidor.address().port;
    console.log("Servidor executando na porta %s", porta)
})

app.get('/', (req, res) => {
    const id = Math.floor(Math.random() * dados.length);
    res.end('<h1>' + dados[id].name + '</h1>');
});

app.post('/idade', urlencodedParser, (req, res) => {
    const { nome, anonasc } = req.body;

    if ((nome && nome != "") && (anonasc && Number.isInteger(parseInt(anonasc)) && anonasc > 0 && anonasc < 2023)) {
        const hoje = new Date();
        const valores = {
            nome,
            anonasc,
            idade: (hoje.getFullYear() - parseInt(anonasc))
        };
        let conteudo = fs.readFileSync(__dirname + '/idade-res.html');

        for (let chave in valores){
            conteudo = conteudo.toString().replace("{{"+chave+"}}", valores[chave]);
        }

        res.writeHead(200, {'Content-type': 'text/html'});
        res.end(conteudo);
    } else {
        res.redirect('/index.html');
    }
})

app.use(express.static('public'));