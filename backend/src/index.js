
const express = require('express');
const router = express.Router();

/**
 * Router Imports
 */
const scannerRouter = require('./service/scanner');
const authRouter = require('./auth/auth');
const studentRouter = require('./routes/student')

/* GET home page. */
// router.get('/', async function(req, res, next) {
//   const connection = await mysql.createConnection(config);
//   let sql = 'SELECT * FROM student'
//   connection.connect()

//   connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     res.send(encrypt(results[0]))
//   });
  
//   connection.end();
// });

router.use('/scan', scannerRouter)
router.use('/auth', authRouter)
router.use('/student', studentRouter)







  

module.exports = router;
