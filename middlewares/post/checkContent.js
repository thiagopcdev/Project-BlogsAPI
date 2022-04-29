const statusCode = require('../../helper/statusCode');

const error = {
  message: '"content" is required',
};

const error2 = {
  message: '"content" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { content } = req.body;
    if (content === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (content === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};