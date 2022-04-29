const statusCode = require('../../helper/statusCode');

const error = {
  message: 'Categories cannot be edited',
};

module.exports = (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    if (categoryIds) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
     next();
  } catch (err) {
    next(err);
  }
};