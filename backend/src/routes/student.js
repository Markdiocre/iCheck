
const mysql = require('mysql')
const config = require('../configs/connection');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const {response_payload} = require('../methods/global')

/** Create Student */
router.post('/', async (req, res)=>{
    try{
        const connection = await mysql.createConnection(config);
        const sql = 'INSERT INTO student(`student_number`,`student_fname`,`student_lname`,`student_password`) VALUES(?,?,?,?)';
        const hashed_password = await bcrypt.hash(req.body.student_password, 10);
        const student = {
            student_number : req.body.student_number,
            student_fname : req.body.student_fname,
            student_lname : req.body.student_lname,
            student_password : hashed_password
        };

        
        connection.query({
            sql: sql,
            timeout: 5000,
            values: [student.student_number, student.student_fname, student.student_lname, student.student_password]
        }, function (error, results){
            if(error){
                res.status(400).send(response_payload(null, "Error", "Failed to Insert Data"))
                throw error;
                
            }else{
                res.status(200).send(response_payload(null, "Success", "Successfully Inserted Data"))
            }
        })
    }catch{
        res.status(500).send(response_payload(null, "Error", "Server Crashed"))
    }
    
})


module.exports = router;