
const app = require('./app.js');
const http = require('http');
require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
});

const { Pool } = require('pg');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

const pool = new Pool();

async function checkPostgresConnection() {
    let client;
    try {
        client = await pool.connect();
        await client.query('SELECT NOW()');
        console.log('PostgreSQL: Successfully connected to the database.');
    } catch (err) {
        console.error('PostgreSQL: Failed to connect to the database.', err.message);

    } finally {
        if (client) {
            client.release();
        }
    }
}

server.listen(PORT, async () => {
    console.log(`Server started on port ${PORT}`);
    await checkPostgresConnection();
});

server.on('error', (err) => {
    console.log("Server Error :", err.message);
});

module.exports = server;
