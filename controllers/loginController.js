const express = require('express');
const Service = require('../services');
const { checkEmail, checkPass } = require('../middlewares');

const router = express.Router();

router.post('/', checkEmail, checkPass, async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await Service.login(email, password);

    if (!result.token) {
      return res.status(result.status).json({ message: result.message });
    }
    return res.status(result.status).json({ token: result.token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;