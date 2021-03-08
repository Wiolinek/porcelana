var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

/* GET home page. */
router.get('/', function(req, res, next) {
  mysql.query('SELECT * FROM job_offers ORDER BY `date` DESC', function(error, result, fields) {
    res.json(result);
  });
});

module.exports = router;
