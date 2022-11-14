const express = require('express');
const router = express.Router();
const mysql = require('mysql')
const config = require('../configs/connection');
const SECRET_KEY = require('../configs/keys')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { response_payload } = require('../methods/global')

router.post('/login', async (req, res) => {
    try {
        const connection = await mysql.createConnection(config);
        const sql = 'SELECT * FROM student WHERE student_number=? LIMIT 1';

        connection.query({
            sql: sql,
            timeout: 5000,
            values: [req.body.student_number]
        }, async (error, results) => {
            if (error) {
                res.status(400).send(response_payload(null, "Error", "Failed Query"))
                throw error;
            } else {
                if(results.length !=0){
                    if(await bcrypt.compare(req.body.student_password, results[0].student_password)){
                        const accessToken = jwt.sign({student_number:req.body.student_number, student_password: req.body.student_password}, SECRET_KEY)
                        res.status(200).send(response_payload(accessToken, "Success", "Logging in"))
    
                        const createAccessTokenSQL = 'INSERT INTO token(`student_number`,`token_value`) VALUES(?,?)';
    
                        connection.query({
                            sql: createAccessTokenSQL,
                            timeout: 5000,
                            values: [req.body.student_number, accessToken]
                        }, (error, results)=>{
                            if (error) {
                                res.status(400).send(response_payload(null, "Error", "Failed to Create Token"))
                                throw error;
                            }else{
                                res.status().send()
                            }
                        })
                        
                    }else{
                        res.status(403).send(response_payload(null, "Forbidden", "Password do not match"))
                    }
                }else{
                    res.status(404).send(response_payload(null, "Error", "No Account"))
                }
                
            }

        })

        connection.end()


    } catch {
        res.status(500).send(response_payload(null, "Error", "Server Crashed"))
    }

})

router.post('/logout', (req, res) => {

})

module.exports = router;