const pool = require('../config/db');

const createUser = async (user_uid, nama_lengkap, email, hashedPassword) => {
    const result = await pool.query(
        'INSERT INTO bingo_user (user_uid, nama_lengkap, email, password) VALUES ($1, $2, $3, $4) RETURNING *',
        [user_uid, nama_lengkap, email, hashedPassword]
    );
    return result.rows[0];
};

const findUserByUsername = async (email) => {
    const result = await pool.query('SELECT * FROM bingo_user WHERE email = $1', [email]);
    return result.rows[0];
};

module.exports = { createUser, findUserByUsername };
