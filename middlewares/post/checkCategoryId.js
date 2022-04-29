const statusCode = require('../../helper/statusCode');

const error = {
  message: '"categoryIds" is required',
};

const error2 = {
  message: '"categoryId" is not allowed to be empty',
};

module.exports = (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    if (categoryIds === undefined) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (categoryIds === '') {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};