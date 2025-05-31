 const { Pool } = require('pg')

 const dotenv = require('dotenv');

 require('dotenv').config()
 // Pilih file `.env` berdasarkan `NODE_ENV`
 const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
 dotenv.config({ path: envFile });

 const pool = new Pool({
     user: process.env.DB_USER,
     host: process.env.DB_HOST,
     database: process.env.DB_NAME,
     password: process.env.DB_PASSWORD,
     port : process.env.DB_PORT,
 })

 module.exports = pool;