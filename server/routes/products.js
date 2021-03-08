var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM product', function(error, result, fields) {
    res.json(result);
  });
});

router.get('/category/:categoryId', function(req, res, next) {
  console.log(req.params.categoryId)


  // mysql.query('SELECT * FROM product', function(error, result, fields) {
  //   res.json(result);
  // });
});


module.exports = router;
