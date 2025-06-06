const pool = require('../config/db');

const createUser = async (user_uid, nama_lengkap, email, hashedPassword, role, google_id =null) => {
  const result = await pool.query('INSERT INTO bingo_user (user_uid, nama_lengkap, email, password, role, google_id, created_at, update_at) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *', [user_uid, nama_lengkap, email, hashedPassword, role, google_id]);
  return result.rows[0];
};

const findUserByUsername = async (email) => {
  const result = await pool.query('SELECT * FROM bingo_user WHERE email = $1', [email]);
  return result.rows[0];
};

const findUserById = async (user_uid) => {
  const resultUserById = await pool.query("SELECT user_uid, nama_lengkap, email, role FROM bingo_user WHERE user_uid = $1", [user_uid]);
  return resultUserById.rows[0];
};

const findUserByGoogleId = async (google_id) => {
  const result = await pool.query('SELECT user_uid, nama_lengkap, email, password, role, google_id, created_at, update_at FROM bingo_user WHERE google_id = $1', [google_id]);
  return result.rows[0];
}

const updateGoogleIdForUser = async (user_uid, google_id) => {
  const result = await pool.query(`UPDATE bingo_user SET google_id = $1, update_at = NOW() WHERE user_uid = $2 RETURNING *`, [google_id, user_uid]);
  return result.rows[0];
}

module.exports = { createUser, findUserByUsername, findUserById, findUserByGoogleId, updateGoogleIdForUser};
