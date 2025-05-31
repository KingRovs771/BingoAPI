const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
require('dotenv').config();

const registerUser = async (nama_lengkap, email, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_uid = await bcrypt.hash(nama_lengkap, 10);
    return userModel.createUser(user_uid, nama_lengkap, email, hashedPassword);
};

const loginUser = async (email, password) => {
    const user = await userModel.findUserByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
};

module.exports = { registerUser, loginUser };
