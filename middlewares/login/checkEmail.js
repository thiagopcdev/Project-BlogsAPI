const statusCode = require('../../helper/statusCode');

const error = {
  message: '"email" is required',
};

const error2 = {
  message: '"email" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    if (email === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (email === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};