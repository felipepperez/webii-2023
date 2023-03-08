import { JsonDB, Config } from 'node-json-db';
import { v4 as uuidv4 } from 'uuid';

var db = new JsonDB(new Config("db", true, false, '/'));

async function readUsers() {
    return await db.getData('/users');
}

async function createUser(name, cpf, phone) {
    const id = uuidv4();
    db.push('/users[]', {
        id,
        name,
        cpf,
        phone
    })
}

async function deleteUser(id) {
    const index = await db.getIndex("/users", id);
    if(index !== -1)
        db.delete('/users['+index+']');
}

export { readUsers, createUser, deleteUser };