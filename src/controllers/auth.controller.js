const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/response.util');

const register = async (req, res) => {
    try {
        const {nama_lengkap, email, password } = req.body;
        const user = await authService.registerUser(nama_lengkap, email, password);
        successResponse(res, user, 'User registered successfully', 201);
    } catch (error) {
        errorResponse(res, error);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const { user, token } = await authService.loginUser(username, password);
        successResponse(res, { user, token }, 'Login successful');
    } catch (error) {
        errorResponse(res, error, 401);
    }
};

module.exports = { register, login };
