// Remember to set type: module in package.json or use .mjs extension
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node'

import moment from 'moment'

import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

// File path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, 'db.json')

// Configure lowdb to write to JSONFile
const adapter = new JSONFile(file)
const db = new Low(adapter)

await db.read()

db.data ||= { users: [] }

const rl = readline.createInterface({ input, output });

let loop = false;

do {
    let tecla = await rl.question('Tecle S para adicionar um usuario: ')
    if (tecla == 'S') {
        loop = true;
    }else{
        loop = false;
    }
    console.log(loop);
    if (loop) {
        let nome = await rl.question('Digite um nome: ')
        await db.data.users.push({ id: 5, name: nome, created: moment().format('DD/MM/YYYY') })
        await db.write()
    }
} while (loop)

rl.close();