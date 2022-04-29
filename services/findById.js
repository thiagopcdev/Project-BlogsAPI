const { User } = require('../models');

module.exports = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return { message: 'User does not exist' };
  }
  return user;
};