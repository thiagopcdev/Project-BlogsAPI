const statusCode = require('../helper/statusCode');

const error = {
  message: '"displayName" is required',
};

const error2 = {
  message: '"displayName" length must be at least 8 characters long',
};

module.exports = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (!displayName) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error);
    }
    if (displayName.length < 8) {
      return res.status(statusCode.BAD_REQUEST)
        .json(error2);
    }
     next();
  } catch (err) {
    next(err);
  }
};