const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const config = require('../configs/connection');

router.post('/', function(req,res){
    if(req.body.message == 'true'){
        res.send({"message":"ok"})
    }else{
        res.send({"message":"not"})
    }
    
});

module.exports = router;