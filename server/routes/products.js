var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {


  mysql.query('SELECT * FROM product ', function(error, result, fields) {

    res.json(result);

  });

  
});

router.get('/cups', function(req, res, next) {
  res.send('no jooo');
});
router.get('/categories', function(req, res, next) {
  res.send('no jooo 222');
});

module.exports = router;
