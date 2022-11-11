const mysql = require('mysql')
const config = require('../connection/connection');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const connection = await mysql.createConnection(config);
  let sql = 'SELECT * FROM student'
  connection.connect()

  connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    res.send(encrypt(results[0]))
  });
  
  connection.end();
});

  

module.exports = router;
