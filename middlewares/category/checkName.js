const statusCode = require('../../helper/statusCode');

const error = {
  message: '"name" is required',
};

const error2 = {
  message: '"name" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { name } = req.body;
    if (name === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (name === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};