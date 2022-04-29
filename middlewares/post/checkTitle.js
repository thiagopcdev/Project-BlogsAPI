const statusCode = require('../../helper/statusCode');

const error = {
  message: '"title" is required',
};

const error2 = {
  message: '"title" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { title } = req.body;
    if (title === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (title === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};