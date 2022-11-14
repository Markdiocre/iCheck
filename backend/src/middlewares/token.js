const mysql = require('mysql')
const config = require('../configs/connection');

const { response_payload } = require('../methods/global')

async function authenticateToken(req, res, next) {
    try {
        const connection = await mysql.createConnection(config);
        const sql = 'SELECT * FROM token WHERE `token_value` = ?';
        const header = req.headers.authorization
        if (header) {
            const [keyword, token] = header.split(' ')
            if (keyword !== 'Bearer') {
                res.status(403).send(response_payload(null, "Error", "Invalid Token"))
            } else {
                connection.query({
                    sql: sql,
                    timeout: 5000,
                    values: [token]
                }, (error, results) => {
                    if (error) {
                        res.status(400).send(response_payload(null, "Error", "Failed to find token"))
                        throw error;
                    } else {
                        if (results.length != 0) {
                            next();
                        } else {
                            res.status(403).send(response_payload(null, "Forbidden", "Not Logged In"))
                        }
                    }
                })
            }
        } else {
            res.status(403).send(response_payload(null, "Error", "Invalid Token"))
        }
    } catch {
        res.status(500).send(response_payload(null, "Error", "Server Crashed"))
    }


}

module.exports = { authenticateToken }