import express from 'express';
import { readUsers, createUser, deleteUser } from '../services/lowdb';

var router = express.Router();

/* GET users listing. */
router.get('/', async function (req, res, next) {
  const users = await readUsers();
  res.send(users);
});

router.get('/create', async function (req, res, next) {
  await createUser('Felipe', 'XXX.XXX.XXX-XX', '(XX) X XXXX.XXXX');
  res.redirect('/users/');
});

router.get('/delete/:id', async function (req, res, next) {
  await deleteUser(req.params.id);
  res.redirect('/users/');
});

export default router;
