const jwt = require('jsonwebtoken');
const statusCode = require('../helper/statusCode');
const { User } = require('../models');

const secret = 'senhasecreta';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const error = {
  err: {
    message: 'User already registered',
  },
  status: statusCode.CONFLICT,
};

module.exports = async (user) => {
  const { email } = user;
  const emailExists = await User.findOne({ where: { email } });

  if (emailExists) {
    return error; 
  }
 
  await User.create(user);
  const { password, ...userWithoutPass } = user;
  const token = jwt.sign({ data: { userWithoutPass } }, secret, jwtConfig);
  return { token };
};