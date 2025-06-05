const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response.util');
const {sign} = require("jsonwebtoken");
const bcrypt = require('bcrypt');

class AuthController {

  static async register(req, res) {
    try {
      const {nama_lengkap, email, password} = req.body;
      const user = await authService.registerUser(nama_lengkap, email, password);
      successResponse(res, user, 'User registered successfully', 201);
    } catch (error) {
      errorResponse(res, error);
    }
  };

  static async login(req, res, next) {
    try {
      const {email, password} = req.body;
      console.log('AuthController.login: Login attempt for email:', email);

      const {user, token} = await authService.loginUser(email, password);

      successResponse(res, {
        user: {
          user_uid: user.user_uid,
          nama_lengkap: user.nama_lengkap,
          email: user.email,
          role: user.role
        },
        token
      }, 'Login successful', 200);

    } catch (error) {
      console.error('AuthController.login error:', error);
      if (error.message === 'Invalid credentials') {
        return errorResponse(res, error, 401);
      }
      next(error);
    }
  }
}
module.exports = AuthController;
