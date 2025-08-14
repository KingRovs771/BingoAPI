const app = require('./app.js');
const http = require('http');

// Pastikan dotenv di-load di baris paling atas
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const { Pool } = require('pg');

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

// --- KODE PEMBACAAN SERTIFIKAT DIHAPUS KARENA TIDAK DIPERLUKAN LAGI ---

// --- KONFIGURASI POOL DIUBAH UNTUK MEMBACA VARIABEL INDIVIDUAL ---
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE || process.env.POSTGRES_DB, // Mengambil nama database dari salah satu variabel
  ssl: {
    rejectUnauthorized: false, // Tetap menggunakan ini untuk koneksi SSL yang tidak terverifikasi
  },
});
// -------------------------------------------------------------

async function checkPostgresConnection() {
  let client;
  try {
    client = await pool.connect();
    // Mengambil versi PostgreSQL untuk memastikan koneksi berhasil
    const res = await client.query('SELECT version()');
    console.log('PostgreSQL: Successfully connected to the database.');
    console.log('PostgreSQL Version:', res.rows[0].version);
  } catch (err) {
    // Pesan error akan lebih spesifik sekarang
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
  console.log('Server Error :', err.message);
});

module.exports = server;
