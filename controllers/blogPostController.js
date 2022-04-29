const express = require('express');
const Service = require('../services');
const { auth, checkTitle, checkContent,
  checkCategoryId, checkWithoutCat } = require('../middlewares');

const router = express.Router();
const error = { message: 'Algo deu errado' };

router.post('/', checkTitle, checkContent, checkCategoryId, auth, async (req, res, next) => {
  try {
    const userId = req.id;
    const result = await Service.addBlogPost({ userId, ...req.body });

    if (result.err) {
      return res.status(result.status).json(result.err);
    }
    return res.status(result.status).json(result.createResult);
  } catch (err) {
    next(err);
  }
});

router.get('/', auth, async (req, res) => {
  try {
    const posts = await Service.findAllBlogPosts();
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error);
  }
});

router.get('/search', auth, async (req, res) => {
  try {
    if (req.query.q) {
      const param = req.query.q;
      const search = await Service.searchBlogPost(param, param);
      return res.status(200).json(search);
    }
    const posts = await Service.findAllBlogPosts();
    return res.status(200).json(posts);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error);
  }
});

router.get('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Service.findBlogPostById(id);

    return res.status(post.status).json(post.result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error);
  }
});

router.put('/:id', auth, checkTitle, checkContent, checkWithoutCat, async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const updatePost = await Service.updateBlogPost(title, content, id, req.id);

    if (updatePost.message) {
      return res.status(updatePost.status).json({ message: updatePost.message });
    }
    return res.status(200).json(updatePost);
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await Service.deleteBlogPost(id, req.id);

    if (deletePost.message) {
      return res.status(deletePost.status).json({ message: deletePost.message });
    }
    return res.status(204).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).json(error);
  }
});

module.exports = router;