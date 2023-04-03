import express from 'express';
import { readUsers } from '../services/lowdb';

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Users', users: await readUsers() });
});

export default router;
