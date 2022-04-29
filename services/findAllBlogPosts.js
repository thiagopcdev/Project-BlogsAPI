const { BlogPosts, User, Category } = require('../models');

module.exports = async () => {
  const bPosts = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    
  });
 
  return bPosts;
};