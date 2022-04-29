const statusCode = require('../helper/statusCode');

const error = {
  message: '"email" is required',
};

const error2 = {
  message: '"email" must be a valid email',
};

module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(statusCode.BAD_REQUEST)
      .json(error);
    }
    // // Regex from https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    // // Thank you Stackoverflow!
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
     if (!emailRegex.test(email)) {
      return res.status(statusCode.BAD_REQUEST)
      .json(error2);
     }
     next();
  } catch (err) {
    next(err);
  }
};