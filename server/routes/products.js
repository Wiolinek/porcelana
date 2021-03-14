var express = require('express');
var router = express.Router();

var mysql = require('./../lib/mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql.query("SELECT p.*, GROUP_CONCAT(pc.category_id SEPARATOR ',') AS categories FROM product p LEFT JOIN product_x_category pc ON p.id = pc.product_id GROUP BY p.id", function(error, result, fields) {
    res.json(result);
  });
});

// "SELECT *, GROUP_CONCAT(product_x_category.category_id SEPARATOR ',') AS categories FROM product LEFT JOIN product_x_category ON product.id = product_x_category.product_id GROUP BY product.id"

// seltect all products and group them by category_id, separate with , result calls 'categories', take everything from product table (set shorthand as p) .....

// podwójny cudzysłów dajemy jeśli używamy w poleceniu cudzysłów pojedynczy


// router.get('', function(req, res, next) {

//   mysql.query('SELECT * FROM product_x_category', function(error, result, fields) {
//     res.json(result);
//   });
// });

// router.get('/category/:categoryId', function(req, res, next) {
//   mysql.query('SELECT * FROM product LEFT JOIN category ON product.id = category.product_id', function(error, result, fields) {
//     res.json(result);
//   });
// });


module.exports = router;
