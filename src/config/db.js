 const { Pool } = require('pg')

 const dotenv = require('dotenv');

 require('dotenv').config()
 const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
 dotenv.config({ path: envFile });

 const pool = new Pool({
     user: process.env.PG_USER,
     host: process.env.PGHOST,
     database: process.env.PGDATABASE,
     password: process.env.PG_PASSWORD,
     port : process.env.PGPORT,
 })

 module.exports = pool;