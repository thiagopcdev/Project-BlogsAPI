const express = require('express');
const Service = require('../services');
const { validDisplayName, validEmail, validPass, auth } = require('../middlewares');

const router = express.Router();

router.post('/', validDisplayName, validEmail, validPass, async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const newUser = await Service.create({ displayName, email, password, image });
    
    if (newUser.err) {
      return res.status(newUser.status).json(newUser.err);
    }
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const users = await Service.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Service.findById(id);
    if (user.message) {
      return res.status(404).json(user);
    }
    return res.status(200).json(user);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});

router.delete('/me', auth, async (req, res) => {
  try {
    const user = await Service.deleteUser(req.id);
    if (user.message) {
      return res.status(user.status).json(user.message);
    }
    return res.status(user.status).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
});
module.exports = router;