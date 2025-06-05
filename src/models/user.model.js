const pool = require('../config/db');

const createUser = async (user_uid, nama_lengkap, email, hashedPassword, role) => {
  const result = await pool.query('INSERT INTO bingo_user (user_uid, nama_lengkap, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *', [user_uid, nama_lengkap, email, hashedPassword, role]);
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

module.exports = { createUser, findUserByUsername, findUserById };
