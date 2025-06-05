const userModel = require('../models/user.model');

class ProfileService {

  static async getProfile (user_id) {
    const user = await userModel.findUserById(user_id);
    if (!user) {
      throw  new Error('User Not Found');
    }
    return user;
  };
}

module.exports = ProfileService;
