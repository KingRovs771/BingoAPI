const userModel = require('../models/user.model');

const getProfile = async (id) => {
  return userModel.findUserById(id);
};

module.exports = { getProfile };
