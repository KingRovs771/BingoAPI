const jwt = require('jsonwebtoken');
require('dotenv').config();
const profileService = require('../services/profile.service');


const getProfile = async (req, res) => {
  try {
    const token = req.header('Authorization');
    if (!token) {
      return res.status(401).json({
        Status: 'Error',
        error: 'Token Not Provided',
      });
    }

    const decode = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    const user = await profileService.getProfile(decode.id);

    if (!user) {
      return res.status(401).json({
        Status: 'Error',
        Error: 'User Not Found',
      });
    }
    res.status(201).json({
      Status: 'Success',
      Message: 'User Ditemukan',
      User: user,
    });
  } catch (error) {
    res.status(403).json({
      Status: 'Error',
      error: 'User Not Found',
    });
  }
};

module.exports = { getProfile };
