const express = require('express');
const router = express.Router();

router.post('/login', (req, res)=>{
    let { student_number, student_password } = req.body;
})

router.post('/logout', (req, res)=>{

})

module.exports = router;