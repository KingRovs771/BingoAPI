const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response.util');
const {sign} = require("jsonwebtoken");

class AuthController {

  static async register(req, res) {
    try {
      const {nama_lengkap, email, password, role} = req.body;
      const assignedRole = (role && role.toLowerCase() === 'administrator') ? 'Administrator' : 'User';

      const user = await authService.registerUser(nama_lengkap, email, password, assignedRole);
      successResponse(res, user, 'User registered successfully', 201);
    } catch (error) {
      if (error.message.includes('Email already registered')) {
        return errorResponse(res, error, 409); // 409 Conflict
      }
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

  static async googleLogin(req, res, next) {
    try {
      const { nama_lengkap, email, googleId } = req.body;

      if (!nama_lengkap || !email || !googleId) {
        return errorResponse(res, new Error('Missing Google user data (nama_lengkap, email, googleId)'), 400);
      }

      const { user, token } = await authService.loginGoogleUser(nama_lengkap, email, googleId);

      successResponse(res, {
        user: {
          user_uid: user.user_uid,
          nama_lengkap: user.nama_lengkap,
          email: user.email,
          role: user.role,
          google_id: user.google_id
        },
        token
      }, 'Google login/registration successful', 200);

    } catch (error) {
      console.error('AuthController.googleLogin error:', error);
      if (error.message.includes('Account with this email already exists but is linked to a different Google account')) {
        return errorResponse(res, error, 409); // Conflict
      }
      errorResponse(res, error, 500);
      next(error);
    }
  }
}
module.exports = AuthController;
