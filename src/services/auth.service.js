const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config();

class AuthService{

  static async registerUser (nama_lengkap, email, password, role){
    const existingUser = await userModel.findUserByUsername(email);
    if (existingUser) {
      throw new Error('Email already registered.');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user_uid = uuidv4();
    const defaultRole = role || 'User';
    return userModel.createUser(user_uid, nama_lengkap, email, hashedPassword, defaultRole);
  };

  static async loginUser  (email, password) {
    const user = await userModel.findUserByUsername(email);
    if (!user) {
      throw new Error('Invalid credentials');
    }

    if (user.google_id && user.password === null) {
      throw new Error('This account is registered with Google. Please use Google login.');
    }

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

  static async loginGoogleUser(nama_lengkap, email, google_id) {
    let user = await userModel.findUserByGoogleId(google_id);

    if (user) {
      console.log('AuthService.loginGoogleUser: Existing Google user found.');
    } else {
      user = await userModel.findUserByUsername(email);

      if (user) {

        if (!user.google_id) {
          console.log('AuthService.loginGoogleUser: User found by email, linking Google ID to existing account.');
          user = await userModel.updateGoogleIdForUser(user.user_uid, google_id);
        } else {
          throw new Error('Account with this email already exists but is linked to a different Google account. Please use standard login.');
        }
      } else {
        console.log('AuthService.loginGoogleUser: New user from Google, creating account.');
        const user_uid = uuidv4();
        const defaultRole = 'User';
        user = await userModel.createUser(user_uid, nama_lengkap, email, null, defaultRole, googleId); // Tanpa password, dengan google_id
      }
    }

    const token = jwt.sign(
        { id: user.user_uid, role: user.role, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
    return { user, token };
  }

}

module.exports = AuthService;
