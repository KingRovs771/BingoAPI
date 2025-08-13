const app = require("./app.js");
const http = require("http");
const fs = require("fs");
const path = require("path");
// Pastikan dotenv di-load di baris paling atas
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const { Pool } = require("pg");

const PORT = process.env.PORT || 9000;

const server = http.createServer(app);

console.log("DATABASE_URL being used:", process.env.DATABASE_URL);
let caCert;
try {
  const certPath = path.join(__dirname, "..", "ca.pem");
  console.log(`Trying to read certificate from: ${certPath}`);
  caCert = fs.readFileSync(certPath).toString();
  console.log("SUCCESS: ca.pem loaded. Starts with:", caCert.substring(0, 50));
} catch (error) {
  console.error("ERROR: Failed to read ca.pem file!", error.message);
  process.exit(1);
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync(path.join(__dirname, "ca.pem")).toString(),
  },
});

async function checkPostgresConnection() {
  let client;
  try {
    client = await pool.connect();
    // Mengambil versi PostgreSQL untuk memastikan koneksi berhasil
    const res = await client.query("SELECT version()");
    console.log("PostgreSQL: Successfully connected to the database.");
    console.log("PostgreSQL Version:", res.rows[0].version);
  } catch (err) {
    // Pesan error akan lebih spesifik sekarang
    console.error(
      "PostgreSQL: Failed to connect to the database.",
      err.message
    );
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

server.on("error", (err) => {
  console.log("Server Error :", err.message);
});

module.exports = server;
