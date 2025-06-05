const jwt = require('jsonwebtoken');
require('dotenv').config();
const profileService = require('../services/profile.service');

class ProfileController {
  static async getProfile (req, res, next) {
    try {
      const user_uid = req.user.id;

      const userProfile = await profileService.getProfile(user_uid);

      if (!userProfile) {
        return res.status(401).json({
          Status: 'Error',
          Error: 'User Not Found',
        });
      }
      res.status(200).json({
        Status: 'Success',
        Message: 'User Ditemukan',
        Data: userProfile,
      });
    } catch (error) {
      next(error);
    }
  };

}

module.exports = ProfileController;
