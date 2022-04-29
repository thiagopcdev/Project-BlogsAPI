const jwt = require('jsonwebtoken');
const statusCode = require('../helper/statusCode');

const secret = 'senhasecreta';
const error = {
  message: 'Token not found',
};

const error2 = {
  message: 'Expired or invalid token',
};

module.exports = async (req, res, next) => {
 try {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(statusCode.UNAUTHORIZED)
      .json(error);
  }
  const decoded = jwt.verify(token, secret);
  const { id } = decoded.data;
  req.id = id;
  next();
 } catch (_err) {
   return res.status(statusCode.UNAUTHORIZED)
    .json(error2);
 }
};