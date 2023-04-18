var express = require('express');
var router = express.Router();
const fs = require('fs');

const json = JSON.parse(fs.readFileSync('./food.json'));

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('comidas', { json });
});

router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  const elemento = json.categories.find((elemento) => id == elemento.idCategory);
  if (elemento) {
    res.render('comidas', { json: { categories: [elemento] } });
  } else {
    res.render('error', { message: 'Not Found', error: { status: 404 } });
  }
});


module.exports = router;
