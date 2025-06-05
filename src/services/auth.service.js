const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
require('dotenv').config();

class AuthService{

  static async registerUser (nama_lengkap, email, password){
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_uid = await bcrypt.hash(email, 10);
    const defaultRole = 'User';
    return userModel.createUser(user_uid, nama_lengkap, email, hashedPassword, defaultRole);
  };

  static async loginUser  (email, password) {
    const user = await userModel.findUserByUsername(email);

    //DEBUG
    console.log('AuthService.loginUser: User found?', !!user);
    if (user) {
      console.log('AuthService.loginUser: Stored password (first 10 chars):', user.password ? user.password.substring(0, 10) + '...' : 'N/A');
    }

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.user_uid, role: user.role, email:user.email, }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  };
}

module.exports = AuthService;
