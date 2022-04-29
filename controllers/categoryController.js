const express = require('express');
const Service = require('../services');
const { auth, checkName } = require('../middlewares');

const router = express.Router();

router.post('/', checkName, auth, async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Service.addCategory(name);

    if (result.err) {
      return res.status(result.status).json({ message: result.err });
    }
    return res.status(result.status).json(result.createResult);
  } catch (err) {
    next(err);
  }
});

router.get('/', auth, async (req, res, next) => {
  try {
    const result = await Service.findAllCategories();

    return res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

module.exports = router;