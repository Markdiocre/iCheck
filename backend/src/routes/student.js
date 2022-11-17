
const mysql = require('mysql')
const config = require('../configs/connection');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const {response_payload, data_encrypt, data_decrypt} = require('../methods/global')
const {authenticateToken} = require('../middlewares/token')

/** Create Student */
router.post('/', authenticateToken, async (req, res)=>{
    try{
        const decyphered = data_decrypt(req.body.m)
        const connection = await mysql.createConnection(config);
        const sql = 'INSERT INTO student(`student_number`,`student_fname`,`student_lname`,`student_password`) VALUES(?,?,?,?)';
        const hashed_password = await bcrypt.hash(decyphered.student_password, 10);
        const student = {
            student_number : decyphered.student_number,
            student_fname : decyphered.student_fname,
            student_lname : decyphered.student_lname,
            student_password : hashed_password
        };

        
        connection.query({
            sql: sql,
            timeout: 5000,
            values: [student.student_number, student.student_fname, student.student_lname, student.student_password]
        }, function (error, results){
            if(error){
                res.status(400).send(data_encrypt(response_payload(null, "Error", "Failed to Insert Data")))
                throw error;
                
            }else{
                res.status(200).send(data_encrypt(response_payload(null, "Success", "Successfully Inserted Data")))
            }
        })

        connection.end()
    }catch{
        res.status(500).send(data_encrypt(response_payload(null, "Error", "Server Crashed")))
    }
})
router.get('/decrypt', (req, res)=>{
    res.send(data_decrypt(req.body.m))
})

router.get('/encrypt', (req, res)=>{
    res.send(data_encrypt(req.body))
})

/** Read all student */
router.get('/', authenticateToken, async (req, res)=>{
    try{
        const connection = await mysql.createConnection(config);
        const sql = 'SELECT student_number,student_fname,student_lname FROM student';
        connection.query(sql, (error, results)=>{
            if(error){
                res.status(400).send(data_encrypt(response_payload(null, "Error", "Failed to read Data")))
                throw error;
            }else{
                if(results.length != 0) res.status(200).send(data_encrypt(response_payload(results, "Success", "Successfully read Data")))
                else res.status(404).send(data_encrypt(response_payload(null, "Error", "There are no data")))
            }
        })
    }catch{
        res.status(500).send(data_encrypt(response_payload(null, "Error", "Server Crashed")))
    }
})

/** Read Specific */
router.get('/:student_number', authenticateToken, async (req, res)=>{
    try{
        let stud_num = req.params.student_number
        const connection = await mysql.createConnection(config);
        const sql = 'SELECT student_number,student_fname,student_lname FROM student WHERE `student_number`=?';
        connection.query(sql, stud_num,(error, results)=>{
            if(error){
                res.status(400).send(data_encrypt(response_payload(null, "Error", "Failed to read Data")))
                throw error;
            }else{
                if(results.length != 0) res.status(200).send(data_encrypt(response_payload(results, "Success", "Successfully read Data")))
                else res.status(404).send(data_encrypt(response_payload(null, "Error", "There is no such student")))
            }
        })

        connection.end()
    }catch{
        res.status(500).send(data_encrypt(response_payload(null, "Error", "Server Crashed")))
    }
})


/** Delete student */
router.delete('/:student_number', authenticateToken, async (req, res)=>{
    try{
        let stud_num = req.params.student_number
        const connection = await mysql.createConnection(config);
        const sql = 'DELETE FROM student WHERE `student_number`=?';
        
        connection.query(sql, stud_num,(error, results)=>{
            if(error){
                res.status(400).send(data_encrypt(response_payload(null, "Error", "Failed to delete Data")))
                throw error;
            }else{
                if(results.length != 0) res.status(200).send(data_encrypt(response_payload(null, "Success", "Successfully deleted Data")))
                else res.status(404).send(data_encrypt(response_payload(null, "Error", "There is no such student")))
            }
        })

        connection.end()
    }catch{
        res.status(500).send(data_encrypt(response_payload(null, "Error", "Server Crashed")))
    }
})

/** Update */
router.put('/:student_number', authenticateToken, async (req, res)=>{
    try{
        const decyphered = data_decrypt(req.body.m)
        const student = {
            student_number : req.params.student_number,
            student_fname : decyphered.student_fname,
            student_lname : decyphered.student_lname
        };
        const connection = await mysql.createConnection(config);
        const sql = 'UPDATE `student` SET `student_fname`=?,`student_lname`=? WHERE `student_number`= ?';
        connection.query({
            sql: sql,
            timeout: 5000,
            values: [student.student_fname, student.student_lname, student.student_number]
        },(error, results)=>{
            if(error){
                res.status(400).send(data_encrypt(response_payload(null, "Error", "Failed to update Data")))
                throw error;
            }else{
                if(results.length != 0) res.status(200).send(data_encrypt(response_payload(null, "Success", "Successfully updated Data")))
                else res.status(404).send(data_encrypt(response_payload(null, "Error", "There is no such student")))
            }
        })

        connection.end()
    }catch{
        res.status(500).send(data_encrypt(response_payload(null, "Error", "Server Crashed")))
    }
})

module.exports = router;