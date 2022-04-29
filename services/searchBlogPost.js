const { Op } = require('sequelize');
const { BlogPosts, User, Category } = require('../models');

module.exports = async (title, content) => {
  const bPosts = await BlogPosts.findAll({
    where: { 
      [Op.or]: [
        { title: { [Op.like]: `%${title}%` } }, 
        { content: { [Op.like]: `%${content}%` } },
      ], 
    },    
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    
  });
 
  return bPosts;
};