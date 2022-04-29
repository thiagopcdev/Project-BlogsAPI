const create = require('./create');
const login = require('./login');
const findAll = require('./findAll');
const findById = require('./findById');
const addCategory = require('./addCategory');
const findAllCategories = require('./findAllCategories');
const addBlogPost = require('./addBlogPost');
const findAllBlogPosts = require('./findAllBlogPosts');
const findBlogPostById = require('./findBlogPostById');
const updateBlogPost = require('./updateBlogPost');
const deleteBlogPost = require('./deleteBlogPost');
const deleteUser = require('./deleteUser');
const searchBlogPost = require('./searchBlogPost');

module.exports = {
  create,
  login,
  findAll,
  findById,
  addCategory,
  findAllCategories,
  addBlogPost,
  findAllBlogPosts,
  findBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  deleteUser,
  searchBlogPost,
};