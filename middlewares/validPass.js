const statusCode = require('../helper/statusCode');

const error = {
  message: '"password" is required',
};

const error2 = {
  message: '"password" length must be 6 characters long',
};

module.exports = (req, res, next) => {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (password.length !== 6) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};