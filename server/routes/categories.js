var express = require('express');
var router = express.Router();

var mysql = require('../lib/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM category', function(error, result, fields) {
    res.json(result);
  });
});


module.exports = router;
