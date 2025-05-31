const pool = require('../config/db');
const authenticateToken = require("../middlewares/auth.middleware");

const checkDatabaseConnection = async (req, res) =>{
    try{
    const result = await pool.query('SELECT NOW()');
    res.status(200).send({
        message : 'Database Connected Successfully',
        timestamp : result.rows[0].now
    });
    }catch (error){
        res.status(500).json({
            error : "Databse Connection Failed",
            details : error.message
        })
    }
}

module.exports = {checkDatabaseConnection};