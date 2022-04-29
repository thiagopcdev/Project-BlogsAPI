const jwt = require('jsonwebtoken');
const statusCode = require('../helper/statusCode');
const { User } = require('../models');

const secret = 'senhasecreta';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const error = {
  status: statusCode.BAD_REQUEST,
  message: 'Invalid fields',
};

module.exports = async (email, pass) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== pass) return error;
  const { id, password, ...userWithoutPassword } = user;
  const token = jwt.sign({ data: { id, userWithoutPassword } }, secret, jwtConfig);

  return { status: statusCode.OK, token };
};