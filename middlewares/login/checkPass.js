const statusCode = require('../../helper/statusCode');

const error = {
  message: '"password" is required',
};

const error2 = {
  message: '"password" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { password } = req.body;
    if (password === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (password === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};