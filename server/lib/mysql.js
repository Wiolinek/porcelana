var mysql = require('mysql');


var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '2200',
  database        : 'eshop'
});


module.exports = pool;
